import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "",
      description:
        "Creamos soluciones a medida que impulsan tu negocio hacia el futuro. Nuestro equipo de desarrolladores está comprometido con la excelencia, utilizando las últimas tecnologías para garantizar que cada producto sea robusto, escalable y alineado con tus objetivos.",
      descriptionLarge:
        "Creamos soluciones a medida que impulsan tu negocio hacia el futuro. Nuestro equipo de desarrolladores está comprometido con la excelencia, utilizando las últimas tecnologías para garantizar que cada producto sea robusto, escalable y alineado con tus objetivos. Desde aplicaciones web hasta sistemas empresariales complejos, estamos aquí para transformar tus ideas en realidades digitales.",
        icon: "/Images/dev.png",
      features: [
        "Desarrollo de software personalizado",
        "Integración con APIs y sistemas existentes",
        "Seguridad y escalabilidad",
      ],
    },
    {
      id: 2,
      title: "",
      description:
        "Simplificamos y aceleramos tu ciclo de desarrollo con prácticas de DevOps que integran perfectamente a tus equipos de desarrollo y operaciones. Nos enfocamos en la automatización, la integración continua y el despliegue continuo para ofrecerte una agilidad sin precedentes. También nos ocupamos de automatizar tus procesos, minimizando las horas hombre destinadas a tareas repetitivas, generando por medio de scripts y pipelines, procesos automatizados adaptables y mantenibles en el tiempo.",
      descriptionLarge:
        "Simplificamos y aceleramos tu ciclo de desarrollo con prácticas de DevOps que integran perfectamente a tus equipos de desarrollo y operaciones. Nos enfocamos en la automatización, la integración continua y el despliegue continuo para ofrecerte una agilidad sin precedentes. Con nuestras soluciones DevOps, podrás reducir el tiempo de lanzamiento al mercado, mejorar la calidad del software y optimizar tus recursos.",
      icon: "/Images/ops.png",
      features: [
        "Auditorías de seguridad",
        "Protección contra malware",
        "Cifrado de datos",
        "Automatizamos todo!",
      ],
    },
    {
      id: 3,
      title: "",
      description:
        "La protección de tus datos es nuestra prioridad. Implementamos estrategias avanzadas de ciberseguridad que garantizan la integridad, confidencialidad y disponibilidad de la información crítica de tu organización.",
      descriptionLarge:
        "La protección de tus datos es nuestra prioridad. Implementamos estrategias avanzadas de ciberseguridad que garantizan la integridad, confidencialidad y disponibilidad de la información crítica de tu organización. Desde auditorías de seguridad hasta la implementación de políticas de seguridad, nuestro equipo está preparado para enfrentar los desafíos más complejos en el ámbito de la ciberseguridad.",
      icon: "/Images/seg.png",
      features: [
        "Implementación de políticas de seguridad",
        "Monitoreo de vulnerabilidades",
        "Resolución de incidentes de seguridad",
      ],
    },
  ];

  // Estado para saber qué servicio está abierto en el modal (id o null)
  const [openServiceId, setOpenServiceId] = useState(null);

  // Buscar servicio seleccionado
  const selectedService = services.find(s => s.id === openServiceId);

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">¿Que brindamos?</h2>
        <p className="section-subtitle">
          Soluciones tecnológicas diseñadas para impulsar tu negocio
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button
                className="service-button"
                onClick={() => setOpenServiceId(service.id)}
              >
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="modal-overlay"
          onClick={() => setOpenServiceId(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedService.title}</h2>
            <p>{selectedService.descriptionLarge}</p>
            <ul>
              {selectedService.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button
              onClick={() => setOpenServiceId(null)}
              className="close-button"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
