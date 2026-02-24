import { state } from './state.js';
import { SummaryComponent } from './SummaryComponent.js';
import { validateStep1 } from './validation.js';
import { InputComponent } from './InputComponent.js';
import { PlanComponent } from './PlanComponent.js';
import { AddonComponent } from './AddonComponent.js';
import { BillingComponent } from './BillingComponent.js';
import { setupEvents } from './controller.js';
import { renderStep } from './ui.js';

//  DOM REFERENCES

const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".btn-next");
const backBtns = document.querySelectorAll(".btn-back");
const stepsSidebar = document.querySelectorAll(".step");

const step1 = document.querySelector('.form-step[data-step="1"]');

const nameInputEl = step1.querySelector('#name');
const emailInputEl = step1.querySelector('#email');
const phoneInputEl = step1.querySelector('#phone');

const billingToggle = document.getElementById('billing');
const addonInputs = document.querySelectorAll('input[name="addons"]');
const planInputs = document.querySelectorAll('input[name="plan"]');

const btnConfirm = document.querySelector('.btn-confirm');
const summaryContainer = document.querySelector('.summary');

// COMPONENT SYSTEM

const components = [];

function register(component) {
  components.push(component);
}

// COMPONENTS CREATION
// STEP 1 INPUTS

const nameInputComponent = InputComponent({
  inputEl: nameInputEl,
  stateKey: "name",
  setState
});

const emailInputComponent = InputComponent({
  inputEl: emailInputEl,
  stateKey: "email",
  setState
});

const phoneInputComponent = InputComponent({
  inputEl: phoneInputEl,
  stateKey: "phone",
  setState
});

// STEP 2 PLANS

const planComponents = [...planInputs].map(input =>
  PlanComponent({
    inputEl: input,
    planName: input.value,
    setState
  })
);

// STEP 3 ADDONS

const addonComponents = [...addonInputs].map(input =>
  AddonComponent({
    inputEl: input,
    addonName: input.value,
    setState

  })
);
// REGISTER COMPONENTS

register(nameInputComponent);
register(emailInputComponent);
register(phoneInputComponent);

planComponents.forEach(register);
addonComponents.forEach(register);

// STEP NAVIGATION

function goToStep(nextStep) {

  if (state.step === 1 && nextStep > 1) {
    if (!validateStep1(nameInputEl, emailInputEl, phoneInputEl)) return;
  }

  if (state.step === 2 && nextStep > 2 && !state.plan) {
    alert("Please select a plan");
    return;
  }

  setState({ step: nextStep });
}

// STATE SYSTEM

let prevState = { ...state };

function setState(patch) {


  const patchObject =
    typeof patch === "function"
      ? patch(state)
      : patch;

  const newState = { ...state, ...patchObject };

  if (patchObject.addons) {
    newState.addons = [...patchObject.addons];
  }

  Object.assign(state, newState);
  render();
}

//  RENDER ENGINE
function render() {
  if (prevState.step !== state.step) {
    renderStep(state, formSteps, stepsSidebar);
  }

  if (prevState.billing !== state.billing) {
    BillingComponent(state);
  }

  nameInputComponent.render(state);
  emailInputComponent.render(state);
  phoneInputComponent.render(state);

  planComponents.forEach(component => component.render(state));

  addonComponents.forEach(component => component.render(state));

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


setupEvents({
  nextBtns,
  backBtns,
  billingToggle,
  addonInputs,
  planInputs,
  btnConfirm,
  nameInputEl,
  emailInputEl,
  phoneInputEl,
  goToStep,
  setState,
  validateStep1
});

// START APP

render();
