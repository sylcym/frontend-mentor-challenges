import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemToggle"

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="header-title">Where in the world?</h1>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;