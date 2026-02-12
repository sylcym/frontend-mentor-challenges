export function InputComponent({
  inputEl,
  stateKey,
  setState
}) {
  function render(state) {
    inputEl.value = state[stateKey] || "";
  }

  function bindEvents() {
    inputEl.addEventListener("input", e => {
      setState({ [stateKey]: e.target.value });
    });
  }

  bindEvents();

  return { render };
}
