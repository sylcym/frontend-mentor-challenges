import "./ThemToggle.css"
import iconMoon from "../../assets/ikons/icon-moon.svg"

function ThemeToggle() {
  return (
    <button className="theme-toggle" type="button">
      <img
        className="theme-toggle-icon"
        src={iconMoon}
        alt=""
        aria-hidden="true"
      />

      <span className="theme-toggle-text">
        Dark Mode
      </span>
    </button>
  );
}

export default ThemeToggle;