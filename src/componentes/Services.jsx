import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Services.css";

const Services = () => {
  const services = useMemo(
    () => [
      {
        id: 1,
        title: "Desarrollo de Software",
        description:
          "Creamos soluciones a medida que impulsan tu negocio hacia el futuro. Nuestro equipo de desarrolladores está comprometido con la excelencia, utilizando las últimas tecnologías para garantizar que cada producto sea robusto, escalable y alineado con tus objetivos.",
        descriptionLarge:
          "Creamos soluciones a medida que impulsan tu negocio hacia el futuro. Nuestro equipo de desarrolladores está comprometido con la excelencia, utilizando las últimas tecnologías para garantizar que cada producto sea robusto, escalable y alineado con tus objetivos. Desde aplicaciones web hasta sistemas empresariales complejos, estamos aquí para transformar tus ideas en realidades digitales.",
        features: [
          "Desarrollo de software personalizado | Integración con APIs y sistemas existentes | Seguridad y escalabilidad",
        ],
      },
      {
        id: 2,
        title: "DevOps & Automatización",
        description:
          "Simplificamos y aceleramos tu ciclo de desarrollo con prácticas de DevOps. También nos ocupamos de automatizar tus procesos, minimizando las horas hombre destinadas a tareas repetitivas, generando por medio de scripts y pipelines, procesos automatizados adaptables y mantenibles en el tiempo.",
        descriptionLarge:
          "Simplificamos y aceleramos tu ciclo de desarrollo con prácticas de DevOps que integran perfectamente a tus equipos de desarrollo y operaciones. Nos enfocamos en la automatización, la integración continua y el despliegue continuo para ofrecerte una agilidad sin precedentes. Con nuestras soluciones DevOps, podrás reducir el tiempo de lanzamiento al mercado, mejorar la calidad del software y optimizar tus recursos.",
        features: [
          "Auditorías de seguridad | Protección contra malware | Cifrado de datos | Automatizamos todo!",
        ],
      },
      {
        id: 3,
        title: "Ciberseguridad",
        description:
          "La protección de tus datos es nuestra prioridad. Implementamos estrategias avanzadas de ciberseguridad que garantizan la integridad, confidencialidad y disponibilidad de la información crítica de tu organización.",
        descriptionLarge:
          "La protección de tus datos es nuestra prioridad. Implementamos estrategias avanzadas de ciberseguridad que garantizan la integridad, confidencialidad y disponibilidad de la información crítica de tu organización. Desde auditorías de seguridad hasta la implementación de políticas de seguridad, nuestro equipo está preparado para enfrentar los desafíos más complejos en el ámbito de la ciberseguridad.",
        features: [
          "Políticas de seguridad | Monitoreo de vulnerabilidades | Resolución de incidentes de seguridad",
        ],
      },
    ],
    []
  );

  const [openServiceId, setOpenServiceId] = useState(null);
  const selectedService = services.find((s) => s.id === openServiceId);

  // Reveal on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.2 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  // ESC para cerrar modal
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenServiceId(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Tilt 3D
  const handleMouseMove = (e, id) => {
    const card = document.getElementById(`service-card-${id}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 6;
    const rotateX = -((y - midY) / midY) * 6;
    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };
  const resetTilt = (id) => {
    const card = document.getElementById(`service-card-${id}`);
    if (!card) return;
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
  };

  const firstBtnRef = useRef(null);
  useEffect(() => {
    if (selectedService && firstBtnRef.current) firstBtnRef.current.focus();
  }, [selectedService]);

  return (
    <section className="services-section">
      {/* Fondos dinámicos sin imágenes */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-beam" aria-hidden="true" />
      <div className="bg-orb-left" aria-hidden="true" />
      <div className="bg-orb-right" aria-hidden="true" />
      <div className="bg-squares" aria-hidden="true" />

      <div className="container">
        <h2 className="section-title">Servicios y soluciones 💼</h2>
        <p className="section-subtitle">
          Soluciones tecnológicas diseñadas para impulsar tu negocio
        </p>

        <div className="services-grid">
          {services.map((service) => {
            const themeClass =
              service.id === 1
                ? "theme-dev"
                : service.id === 2
                ? "theme-ops"
                : "theme-sec";

            return (
              <article
                id={`service-card-${service.id}`}
                key={service.id}
                className={`service-card ${themeClass}`}
                onMouseMove={(e) => handleMouseMove(e, service.id)}
                onMouseLeave={() => resetTilt(service.id)}
                style={{
                  transform:
                    "perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))",
                }}
              >
                <div className="service-glow" />
                <div className="service-border" />

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <button
                  className="service-button"
                  onClick={() => setOpenServiceId(service.id)}
                >
                  Más información
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <div
          id="service-modal"
          className="modal-overlay"
          onClick={() => setOpenServiceId(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
          
            <header className="modal-header">
              <h2>{selectedService.title}</h2>
            </header>

            <p className="modal-text">{selectedService.descriptionLarge}</p>

            <ul className="modal-list">
              {selectedService.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="modal-actions">
              <button
                className="service-button ghost"
                onClick={() => setOpenServiceId(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
