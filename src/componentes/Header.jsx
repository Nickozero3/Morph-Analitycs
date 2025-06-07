// Header.jsx
import React from "react";
import "./Header.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header>
      <nav className="nav-links">
        <div className="logo" href="/">
          <img  src="Images/Logo_Transparente.png" alt="Morph Analitycs" />
        </div>
        <ul>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#partners">Partners</a>
          </li>
          <li>
            <a href="#clientes">Clientes</a>
          </li>
          <li>
            <a href="#contacto" className="cta-button">
              Contáctanos
            </a>
          </li>
        </ul>
        <div className="language-switch">
          <select>
            <option>ES</option>
            <option>EN</option>
          </select>
        </div>
      </nav>

    </header>
  );
};

export default Header;
