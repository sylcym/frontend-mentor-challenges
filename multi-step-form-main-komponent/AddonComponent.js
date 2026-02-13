export function AddonComponent({ inputEl, addonName, setState }) {

  function onChange(e) {
    setState(prevState => {
      const addons = [...prevState.addons];

      if (e.target.checked) {
        if (!addons.includes(addonName)) {
          addons.push(addonName);
        }
      } else {
        const index = addons.indexOf(addonName);
        if (index > -1) {
          addons.splice(index, 1);
        }
      }

      return { addons };
    });
  }

  inputEl.addEventListener("change", onChange);

  function render(state) {
    inputEl.checked = state.addons.includes(addonName);
  }

  return {
    render
  };
}
