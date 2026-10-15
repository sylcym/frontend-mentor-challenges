
import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import logo from "../../assets/shared/logo.svg"
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg"
import closeIcon from "../../assets/shared/icon-close.svg"
import "./Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "header-link header-link-active" : "header-link"

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <Link className="header-logo" to="/" aria-label="Go to home">
        <img
          className="header-logo-image"
          src={logo}
          alt="Space Tourism"
        />
      </Link>

      <button
        className="header-menu-button"
        type="button"
        aria-label="Open navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <img
          className="header-menu-icon"
          src={hamburgerIcon}
          alt=""
        />
      </button>

      <nav
        className={`header-nav ${isMenuOpen ? "header-nav-open" : ""}`}
        aria-label="Main navigation"
      >
        <button
          className="header-close-button"
          type="button"
          aria-label="Close navigation"
          onClick={closeMenu}
        >
          <img
            className="header-close-icon"
            src={closeIcon}
            alt=""
          />
        </button>

        <NavLink
          className={getNavLinkClass}
          to="/"
          end
          onClick={closeMenu}
        >
          <span className="header-link-number">00</span>
          Home
        </NavLink>

        <NavLink
          className={getNavLinkClass}
          to="/destination"
          onClick={closeMenu}
        >
          <span className="header-link-number">01</span>
          Destination
        </NavLink>

        <NavLink
          className={getNavLinkClass}
          to="/crew"
          onClick={closeMenu}
        >
          <span className="header-link-number">02</span>
          Crew
        </NavLink>

        <NavLink
          className={getNavLinkClass}
          to="/technology"
          onClick={closeMenu}
        >
          <span className="header-link-number">03</span>
          Technology
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
