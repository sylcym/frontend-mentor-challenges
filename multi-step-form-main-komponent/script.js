import { state } from './state.js';
import { SummaryComponent } from './SummaryComponent.js';
import { validateStep1 } from './validation.js';
import { BillingComponent } from './BillingComponent.js';
import { PlanSelector } from './PlanSelector.js';
import { AddonsSelector } from './AddonsSelector.js';
import { setupEvents } from './controller.js';
import { renderStep } from './ui.js';



const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".btn-next");
const backBtns = document.querySelectorAll(".btn-back");
const stepsSidebar = document.querySelectorAll(".step");

const step1 = document.querySelector('.form-step[data-step="1"]');
const nameInput = step1.querySelector('#name');
const emailInput = step1.querySelector('#email');
const phoneInput = step1.querySelector('#phone');

const billingToggle = document.getElementById('billing');
const addonInputs = document.querySelectorAll('input[name="addons"]');
const planInputs = document.querySelectorAll('input[name="plan"]');
const btnConfirm = document.querySelector('.btn-confirm');
const summaryContainer = document.querySelector('.summary');


// STEP
function goToStep(nextStep) {
  if (state.step === 1 && nextStep > 1) {
    if (!validateStep1(nameInput, emailInput, phoneInput)) return;
  }

  if (state.step === 2 && nextStep > 2 && !state.plan) {
    alert("Please select a plan");
    return;
  }

  setState({ step: nextStep });
}


let prevState = { ...state };

function setState(patch) {
  const newState = { ...state, ...patch };

  if (patch.addons) {
    newState.addons = [...patch.addons];
  }

  Object.assign(state, newState);
  render();
}


function render() {
  if (prevState.step !== state.step) {
    renderStep(state, formSteps, stepsSidebar);
  }

  if (prevState.billing !== state.billing) {
    BillingComponent(state);
  }

  if (prevState.plan !== state.plan) {
    PlanSelector(state);
  }

  if (prevState.addons.join() !== state.addons.join()) {
    AddonsSelector(state);
  }



  if (
    prevState.step !== state.step ||
    prevState.plan !== state.plan ||
    prevState.billing !== state.billing ||
    prevState.addons.join() !== state.addons.join()
  ) {
    summaryContainer.innerHTML = SummaryComponent(state);
  }

  prevState = {
    ...state,
    addons: [...state.addons]
  };
}

// EVENTY 
setupEvents({
  nextBtns,
  backBtns,
  billingToggle,
  addonInputs,
  planInputs,
  btnConfirm,
  nameInput,
  emailInput,
  phoneInput,
  goToStep,
  setState,
  validateStep1
});

//  START
render();
