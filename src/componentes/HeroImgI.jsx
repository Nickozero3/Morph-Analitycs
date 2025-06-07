import React from "react";
import "./HeroImgI.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src="/Images/technology.webp" alt="Tecnología" className="hero-image" />
        <div className="hero-text">
          <h1>Bienvenido a Morph Analytics</h1>
          <p>Donde la tecnología se transforma en soluciones innovadoras.</p>
          <p className="hero-description">
            Nos especializamos en Desarrollo de Software, Seguridad de la
            Información y DevOps, ofreciendo a nuestros clientes no solo
            productos y servicios de alta calidad, sino también una experiencia
            fluida y segura en cada etapa de su transformación digital.
            <br /><br />
            En Morph Analytics estamos redefiniendo la manera en que las
            empresas piensan en tecnología, brindando soluciones que no solo
            resuelven problemas, sino que también abren nuevas oportunidades
            para el crecimiento y la innovación.
          </p>
          <p className="titular">Anibal Cáceres - CEO de Morph Analytics</p>
          <a href="#contact" className="cta-button">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;