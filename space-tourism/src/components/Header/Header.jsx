import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/shared/logo.svg"
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg"
import closeIcon from "../../assets/shared/icon-close.svg"
import "./Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        onClick={() => setIsMenuOpen(true)}
      >
        <img
          className="header-menu-icon"
          src={hamburgerIcon}
          alt="Open navigation"
        />
      </button>

      <nav
        className={`header-nav ${isMenuOpen ? "header-nav-open" : ""}`}
      >
        <button
          className="header-close-button"
          type="button"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            className="header-close-icon"
            src={closeIcon}
            alt="Close navigation"
          />
        </button>

        <Link className="header-link" to="/" onClick={() => setIsMenuOpen(false)}>
          <span className="header-link-number">00</span>
          Home
        </Link>

        <Link className="header-link" to="/destination" onClick={() => setIsMenuOpen(false)}>
          <span className="header-link-number">01</span>
          Destination
        </Link>

        <Link className="header-link" to="/crew" onClick={() => setIsMenuOpen(false)}>
          <span className="header-link-number">02</span>
          Crew
        </Link>

        <Link className="header-link" to="/technology" onClick={() => setIsMenuOpen(false)}>
          <span className="header-link-number">03</span>
          Technology
        </Link>
      </nav>

    </header>
  )
}

export default Header