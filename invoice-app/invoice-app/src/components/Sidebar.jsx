import Logo from '../assets/logo/logo.svg'
import PropTypes from 'prop-types'
import MoonIcon from '../assets/icons/icon-moon.svg'
import SunIcon from '../assets/icons/icon-sun.svg'
import '../styles/Sidebar.css'

function Sidebar({
  isDarkMode,
  toggleTheme,
}) {
  return (
    <aside className="aside">
      <div className="sidebar-logo">
        <img
          src={Logo}
          alt="Invoice App logo"
          className="logo-image"
        />
      </div>

      <div className="sidebar-actions">
        <button
          className="theme-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <img
            src={isDarkMode ? SunIcon : MoonIcon}
            className="theme-icon"
            alt=""
          />
        </button>
      </div>

      <div className="sidebar-avatar">
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
        />
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  isDarkMode: PropTypes.bool,
  toggleTheme: PropTypes.func,
}


export default Sidebar