import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isDark, setIsDark }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/education", name: "Education" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
    { path: "/experience", name: "Experience" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className={`navbar ${isDark ? "dark" : "light"}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-icon">✦</span> My Portfolio
        </Link>

        <button
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li className="nav-item" key={link.path}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="theme-toggle">
          <button
            className={`theme-btn ${!isDark ? "active" : ""}`}
            onClick={() => setIsDark(false)}
          >
            ☀️
          </button>

          <button
            className={`theme-btn ${isDark ? "active" : ""}`}
            onClick={() => setIsDark(true)}
          >
            🌙
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;