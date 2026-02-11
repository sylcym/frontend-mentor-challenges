export function AddonsSelector(state) {
  const addonInputs = document.querySelectorAll('input[name="addons"]');

  addonInputs.forEach(input => {
    const isSelected = state.addons.includes(input.value);
    input.checked = isSelected;

    const label = input.closest('.addon');
    if (label) {
      label.classList.toggle('is-selected', isSelected);
    }
  });
}
