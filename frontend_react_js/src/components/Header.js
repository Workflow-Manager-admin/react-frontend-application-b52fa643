import React from "react";
import "./Header.css";

// PUBLIC_INTERFACE
/**
 * Minimalistic and responsive header with navigation and app title.
 * References process.env for config placeholders.
 */
function Header({ onNav, theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>MyApp</span>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <ul>
            <li><button className="nav-link" onClick={() => onNav("home")}>Home</button></li>
            <li><button className="nav-link" onClick={() => onNav("about")}>About</button></li>
            <li><button className="nav-link" onClick={() => onNav("features")}>Features</button></li>
            <li><button className="nav-link" onClick={() => onNav("contact")}>Contact</button></li>
          </ul>
        </nav>
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
      {/* Example config reference */}
      <div className="api-endpoint-note">
        API Base URL: <span>{process.env.REACT_APP_API_BASE_URL || "not set"}</span>
      </div>
    </header>
  );
}

export default Header;

