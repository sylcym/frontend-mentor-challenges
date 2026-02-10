import { state } from './state.js';
import { SummaryComponent } from './summaryComponent.js';
import { setupEvents } from './controller.js';
import { renderStep, updatePricesUI, renderPlans, renderAddons } from './ui.js';



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
    if (!validateStep1()) return;
  }

  if (state.step === 2 && nextStep > 2 && !state.plan) {
    alert("Please select a plan");
    return;
  }

  setState({ step: nextStep });
}


//  STEP 1
const phoneRegex = /^[0-9+\s()\-]{6,}$/;

function showFieldError(input, message) {
  const error = input.parentElement.querySelector('.error-message');
  input.classList.add('is-error');
  error.textContent = message;
  error.style.display = 'block';
}

function clearFieldError(input) {
  const error = input.parentElement.querySelector('.error-message');
  input.classList.remove('is-error');
  error.textContent = '';
  error.style.display = 'none';
}

function validateStep1() {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    showFieldError(nameInput, 'Name is required');
    isValid = false;
  }

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    showFieldError(emailInput, 'Email is required');
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    showFieldError(emailInput, 'Enter a valid email address');
    isValid = false;
  }

  const phoneValue = phoneInput.value.trim();
  if (phoneValue === '') {
    showFieldError(phoneInput, 'Phone number is required');
    isValid = false;
  } else if (!phoneRegex.test(phoneValue)) {
    showFieldError(phoneInput, 'Enter a valid phone number');
    isValid = false;
  }

  return isValid;
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
    updatePricesUI(state);
  }

  if (prevState.plan !== state.plan) {
    renderPlans(state, planInputs);
  }

  if (prevState.addons.join() !== state.addons.join()) {
    renderAddons(state, addonInputs);
  }

  if (
    prevState.step !== state.step ||
    prevState.plan !== state.plan ||
    prevState.billing !== state.billing ||
    prevState.addons.join() !== state.addons.join()
  ) {
    summaryContainer.innerHTML = SummaryComponent(state);
  }

  prevState = { ...state };
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
