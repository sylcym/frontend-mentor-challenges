
export function AddonComponent({ inputEl, addonName, setState }) {
  inputEl.addEventListener('change', () => {
    setState(prev => {
      let newAddons = [...prev.addons];
      if (inputEl.checked) {
        if (!newAddons.includes(addonName)) newAddons.push(addonName);
      } else {
        newAddons = newAddons.filter(a => a !== addonName);
      }
      return { addons: newAddons };
    });
  });

  return {
    render(state, prevState) {
      inputEl.checked = state.addons.includes(addonName);
    }
  };
}
