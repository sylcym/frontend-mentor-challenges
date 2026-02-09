import { state, PRICES, LABELS, formatPrice, calculateTotal } from './state.js';

export function renderStep(state, formSteps, stepsSidebar) {
  formSteps.forEach(step => step.classList.remove("is-active"));
  stepsSidebar.forEach(step => step.classList.remove("is-active"));

  const activeForm = document.querySelector(`.form-step[data-step="${state.step}"]`);
  const activeSidebar = document.querySelector(`.step[data-step="${state.step}"]`);

  if (activeForm) activeForm.classList.add("is-active");
  if (activeSidebar) activeSidebar.classList.add("is-active");
}


export function updatePricesUI(state) {
  const priceEls = document.querySelectorAll('[data-monthly]');
  const bonusEls = document.querySelectorAll('.plan-bonus');

  priceEls.forEach(el => {
    const price = el.dataset[state.billing];
    const isAddon = el.classList.contains('addon-price');
    el.textContent = formatPrice(Number(price), state.billing, isAddon);
  });

  bonusEls.forEach(el => {
    el.style.display = state.billing === 'yearly' ? 'block' : 'none';
  });
}

export function renderPlans(state, planInputs) {
  planInputs.forEach(input => {
    input.checked = input.value === state.plan;
  });
}

export function renderAddons(state, addonInputs) {
  addonInputs.forEach(input => {
    input.checked = state.addons.includes(input.value);
  });
}
