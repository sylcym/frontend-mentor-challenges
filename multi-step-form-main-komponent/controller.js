import { state } from './state.js';

export function setupEvents({
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
}) {


  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(state.step + 1);
    });
  });

  backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.step > 1) goToStep(state.step - 1);
    });
  });

  billingToggle.addEventListener('change', () => {
    setState({ billing: billingToggle.checked ? 'yearly' : 'monthly' });
  });

  addonInputs.forEach(input => {
    input.addEventListener('change', () => {
      let newAddons = [...state.addons];

      if (input.checked) {
        if (!newAddons.includes(input.value)) {
          newAddons.push(input.value);
        }
      } else {
        newAddons = newAddons.filter(a => a !== input.value);
      }

      setState({ addons: newAddons });
    });
  });

  planInputs.forEach(input => {
    input.addEventListener('change', () => {
      setState({ plan: input.value });
    });
  });


  btnConfirm.addEventListener('click', e => {
    e.preventDefault();
    goToStep(state.step + 1);
  });

  document.addEventListener('click', e => {
    if (e.target.classList.contains('summary-change')) {
      goToStep(2);
    }
  });

  // live validation clear
  [nameInput, emailInput, phoneInput].forEach(input => {
    input.addEventListener('input', () => {
      const error = input.parentElement.querySelector('.error-message');
      input.classList.remove('is-error');
      error.textContent = '';
      error.style.display = 'none';
    });
  });

}
