export function PlanComponent({ inputEl, planName, setState }) {

  function onChange(e) {
    if (e.target.checked) {
      setState({ plan: planName });
    }
  }

  inputEl.addEventListener("change", onChange);

  function render(state) {
    inputEl.checked = state.plan === planName;
  }

  return {
    render
  };
}
