import "./Header.css";
import PropTypes from "prop-types";
import ThemeToggle from "../ThemeToggle/ThemToggle"

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="header-title">Where in the world?</h1>

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Header;