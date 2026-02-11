export function BillingComponent(state) {
  const priceEls = document.querySelectorAll('[data-monthly]');
  const bonusEls = document.querySelectorAll('.plan-bonus');

  priceEls.forEach(el => {
    const price = el.dataset[state.billing];
    const isAddon = el.classList.contains('addon-price');
    const suffix = state.billing === "monthly" ? "mo" : "yr";
    const sign = isAddon ? "+" : "";
    el.textContent = `${sign}$${price}/${suffix}`;
  });

  bonusEls.forEach(el => {
    el.style.display = state.billing === 'yearly' ? 'block' : 'none';
  });
}
