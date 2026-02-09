import { PRICES, LABELS, formatPrice, calculateTotal } from './state.js';

export function SummaryComponent(state) {
  if (!state.plan) return '';

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

  return html;
}
