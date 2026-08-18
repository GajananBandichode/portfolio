import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <span className="logo-box">
            G
          </span>

          <span>
            Gajanan
          </span>
        </a>

        {/* Navigation */}
        <nav className="nav-links">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#services">Services</a>
          <a href="#certificates">Certificates</a>

          <a href="#projects">Projects</a>

          <a href="#languages">Languages</a>

          

          <a href="#contact">Contact</a>

        </nav>

        {/* Dark Mode Button */}
        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>

    </header>
  );
}

export default Navbar;