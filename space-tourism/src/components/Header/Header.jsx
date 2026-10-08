import logo from "../../assets/shared/logo.svg"
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <a className="header-logo" href="/">
        <img
          className="header-logo-image"
          src={logo}
          alt="Space Tourism"
        />
      </a>

      <button className="header-menu-button" type="button">
        <img
          className="header-menu-icon"
          src={hamburgerIcon}
          alt="Open navigation"
        />
      </button>

      {/* <nav className="header-nav">
        <a className="header-link" href="/">
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
        </a>
      </nav> */}
    </header>
  )
}

export default Header