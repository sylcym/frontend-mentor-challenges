import Logo from '../assets/logo/logo.svg'
import MoonIcon from '../assets/icons/icon-moon.svg'
// import SunIcon from '../assets/icons/icon-sun.svg'
import '../styles/Sidebar.css'

function Sidebar() {
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
          aria-label="Toggle theme"
        >
          <img
            src={MoonIcon}
            alt=""
            className="theme-icon"
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

export default Sidebar