import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Lock scroll when menu is open
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header>
      <nav className="nav-container">
        <div className="logo">
          <a href="/" onClick={closeMenu}>
            <img src="Images/Logo_Transparente.png" alt="Morph Analytics" />
          </a>
        </div>

        {/* Burger Menu Icon */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#nosotros" onClick={closeMenu}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#careers" onClick={closeMenu}>
                Careers
              </a>
            </li>
            <li>
              <a href="#partners" onClick={closeMenu}>
                Partners
              </a>
            </li>
            <li>
              <a href="#clientes" onClick={closeMenu}>
                Clientes
              </a>
            </li>
            <li>
              <a href="#contacto" className="cta-buttonn" onClick={closeMenu}>
                Contáctanos
              </a>
            </li>
          </ul>
          <div className="language-switch">
            <select
              onChange={(e) => {
                const lang = e.target.value;
                const googleSelect = document.querySelector(".goog-te-combo");
                if (googleSelect) {
                  googleSelect.value = lang;
                  googleSelect.dispatchEvent(new Event("change"));
                }
              }}
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
