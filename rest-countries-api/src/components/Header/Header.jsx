import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemToggle"

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Where in the world?</h1>

      <ThemeToggle />
    </header>
  );
}

export default Header;