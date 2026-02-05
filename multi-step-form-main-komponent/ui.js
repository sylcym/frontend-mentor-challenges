import { state, PRICES, LABELS, formatPrice, calculateTotal } from './state.js';

export function renderStep(formSteps, stepsSidebar) {
  formSteps.forEach(step => step.classList.remove("is-active"));
  stepsSidebar.forEach(step => step.classList.remove("is-active"));

  const activeForm = document.querySelector(`.form-step[data-step="${state.step}"]`);
  const activeSidebar = document.querySelector(`.step[data-step="${state.step}"]`);

  if (activeForm) activeForm.classList.add("is-active");
  if (activeSidebar) activeSidebar.classList.add("is-active");
}

export function updatePricesUI() {
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

export function renderPlans(planInputs) {
  planInputs.forEach(input => {
    input.checked = input.value === state.plan;
  });
}

export function renderAddons(addonInputs) {
  addonInputs.forEach(input => {
    input.checked = state.addons.includes(input.value);
  });
}

export function renderSummary(summaryContainer) {
  if (!state.plan) {
    summaryContainer.innerHTML = '';
    return;
  }

  let html = `<div class="summary-box">`;

  const planPrice = PRICES[state.plan][state.billing];

  html += `
    <div class="summary-plan-top">
      <div class="summary-plan-left">
        <span class="summary-plan-name">${LABELS[state.plan]} (${state.billing})</span>
        <button type="button" class="summary-change">Change</button>
      </div>
      <span class="summary-plan-price">${formatPrice(planPrice, state.billing)}</span>
    </div>
    <div class="summary-divider"></div>
  `;

  state.addons.forEach(addon => {
    const addonPrice = PRICES[addon][state.billing];
    html += `
      <div class="summary-addon">
        <span>${LABELS[addon]}</span>
        <span>${formatPrice(addonPrice, state.billing, true)}</span>
      </div>
    `;
  });

  const total = calculateTotal(state);
  const suffix = state.billing === 'monthly' ? 'mo' : 'yr';

  html += `
    <div class="total">
      <span>Total (per ${state.billing === 'monthly' ? 'month' : 'year'})</span>
      <span>$${total}/${suffix}</span>
    </div>
  </div>
  `;

  summaryContainer.innerHTML = html;
}
