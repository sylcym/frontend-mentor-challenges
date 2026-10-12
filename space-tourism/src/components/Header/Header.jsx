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
      {/* <a className="header-logo" href="/">
        <img
          className="header-logo-image"
          src={logo}
          alt="Space Tourism"
        />
      </a> */}

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

      {isMenuOpen && (
        <nav className="header-nav">
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

          {/* <a className="header-link" href="/">
            <span className="header-link-number">00</span>
            Home
          </a>

          <a className="header-link" href="/destination">
            <span className="header-link-number">01</span>
            Destination
          </a>

          <a className="header-link" href="/crew">
            <span className="header-link-number">02</span>
            Crew
          </a>

          <a className="header-link" href="/technology">
            <span className="header-link-number">03</span>
            Technology
          </a> */}
        </nav>
      )}
    </header>
  )
}

export default Header