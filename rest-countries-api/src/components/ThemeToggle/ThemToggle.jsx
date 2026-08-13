import PropTypes from "prop-types";
import "./ThemToggle.css";
import iconMoon from "../../assets/ikons/icon-moon.svg";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setDarkMode(!darkMode)}
    >
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

ThemeToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default ThemeToggle;