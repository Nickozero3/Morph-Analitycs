import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((o) => !o);

  // Bloquear scroll y setear clase en body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  // Cambiar fondo/sombra del header al hacer scroll
  useEffect(() => {
    const header = document.querySelector("header");
    const onScroll = () => {
      if (window.scrollY > 20) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar con Escape y al cambiar de viewport (evita quedar abierto al pasar a desktop)
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    const onResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Cerrar al navegar por ancla
  const onNavClick = () => closeMenu();

  return (
    <header>
      <nav className="nav-container">
        <div className="logo">
          <a href="/" onClick={onNavClick}>
            <img src="Images/Logo_Transparente.png" alt="Morph Analytics" />
          </a>
        </div>

        {/* Botón Hamburguesa */}
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Scrim (tap fuera para cerrar) */}
        <div
          className={`nav-scrim ${menuOpen ? "show" : ""}`}
          onClick={closeMenu}
          aria-hidden={!menuOpen}
        />

        {/* Panel de Navegación */}
        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
          role="dialog"
          aria-modal="true"
        >
          <ul>
            <li style={{ "--i": 0 }}>
              <a href="#nosotros" onClick={onNavClick}>
                Nosotros
              </a>
            </li>
            <li style={{ "--i": 1 }}>
              <a href="#partners" onClick={onNavClick}>
                Partners
              </a>
            </li>
            <li style={{ "--i": 2 }}>
              <a href="#clientes" onClick={onNavClick}>
                Clientes
              </a>
            </li>
            <li style={{ "--i": 3 }}>
              <a href="#contacto" className="cta-buttonn" onClick={onNavClick}>
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
