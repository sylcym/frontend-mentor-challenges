export function PlanSelector(state) {
  const planInputs = document.querySelectorAll('input[name="plan"]');

  planInputs.forEach(input => {
    input.checked = input.value === state.plan;

    // BONUS: klasa aktywna na całym labelu (ładny efekt)
    const label = input.closest('.plan');
    if (label) {
      label.classList.toggle('is-selected', input.checked);
    }
  });
}
