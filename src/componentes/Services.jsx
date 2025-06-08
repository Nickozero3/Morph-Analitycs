import React from "react";
import "./Services.css";

const Services = () => {
  // Datos de los servicios
  const services = [
    {
      id: 1,
      title: "Desarrollo de Software a Medida",
      description:
        "Creamos soluciones a medida que impulsan tu negocio hacia el futuro. Nuestro equipo de desarrolladores está comprometido con la excelencia, utilizando las últimas tecnologías para garantizar que cada producto sea robusto, escalable y alineado con tus objetivos.",
      icon: "/Images/websiteBuilder.svg",
      features: [
        "Desarrollo de software personalizado",
        "Integración con APIs y sistemas existentes",
        "Seguridad y escalabilidad",
      ],
    },
    {
      id: 2,
      title: "DevOps",
      description:
        "Simplificamos y aceleramos tu ciclo de desarrollo con prácticas de DevOps que integran perfectamente a tus equipos de desarrollo y operaciones. Nos enfocamos en la automatización, la integración continua y el despliegue continuo para ofrecerte una agilidad sin precedentes.",
      icon: "/Images/enviroment_dev.svg",
      features: [
        "Auditorías de seguridad",
        "Protección contra malware",
        "Cifrado de datos",
      ],
    },
    {
      id: 3,
      title: "Seguridad en tus proyectos",
      description:
        "La protección de tus datos es nuestra prioridad. Implementamos estrategias avanzadas de ciberseguridad que garantizan la integridad, confidencialidad y disponibilidad de la información crítica de tu organización.",
      icon: "/Images/securitysync.svg",
      features: [
        "Implementación de políticas de seguridad",
        "Monitoreo de vulnerabilidades",
        "Resolución de incidentes de seguridad",
      ],
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Alianzas</h2>
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

              <button className="service-button">Más información</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
