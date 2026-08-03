import "./ThenToggle.css"

function ThemeToggle() {
  return (
    <button className="theme-toggle" type="button">
      <span className="theme-toggle-icon">🌙</span>

      <span className="theme-toggle-text">Dark Mode</span>
    </button>
  );
}

export default ThemeToggle;