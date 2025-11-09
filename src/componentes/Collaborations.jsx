import React from "react";
import "./Collaborations.css";

const Collaborations = () => {
  // Alianzas (Partners)
  const partners = [
    {
      id: 1,
      name: " ",
      logo: "/Images/kaizen_it.webp",
      url: "https://kaizenit.com.ar/",
    },
    // Agregá más alianzas si querés...
  ];

  // Clientes
  const clients = [
    {
      id: 1,
      name: " ",
      logo: "/Images/coop-logo.png",
      url: "https://cooperativaprogresoseguridad.com/",
    },
    // Más clientes opcionales...
  ];

  const safeAlt = (prefix, name) =>
    (name && name.trim().length ? `${prefix} ${name}` : prefix);

  return (
    <section className="collaborations-section" aria-label="Alianzas y Clientes">
      {/* Capas decorativas 100% CSS (sin imágenes) */}
      <span className="bg-grid" aria-hidden="true" />
      <span className="bg-dots" aria-hidden="true" />
      <span className="bg-blob-left" aria-hidden="true" />
      <span className="bg-blob-right" aria-hidden="true" />

      {/* Columna: Alianzas */}
      <div className="column">
        <div className="accent-plate" aria-hidden="true" />
        <h2 className="section-title" id="partners">Alianzas 🔗</h2>

        <div className="partners-grid" role="list" aria-labelledby="partners">
          {partners.map((p) => (
            <a
              role="listitem"
              key={p.id}
              href={p.url}
              className="partner-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name ? `Abrir sitio de ${p.name}` : "Abrir sitio de alianza"}
            >
              <div className="partner-logo" aria-hidden="true">
                <img
                  src={p.logo}
                  alt={safeAlt("Logo de", p.name)}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/Images/placeholder.svg";
                  }}
                />
              </div>
              <h3 className="partner-name">{p.name || "Alianza"}</h3>
            </a>
          ))}
        </div>
      </div>

      {/* Columna: Clientes */}
      <div className="column">
        <div className="accent-plate" aria-hidden="true" />
        <h2 className="section-title" id="clientes">Clientes 🤝</h2>

        <div className="partners-grid" role="list" aria-labelledby="clientes">
          {clients.map((c) => (
            <a
              role="listitem"
              key={c.id}
              href={c.url}
              className="partner-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.name ? `Abrir sitio de ${c.name}` : "Abrir sitio de cliente"}
            >
              <div className="partner-logo" aria-hidden="true">
                <img
                  src={c.logo}
                  alt={safeAlt("Logo de", c.name)}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/Images/placeholder.svg";
                  }}
                />
              </div>
              <h3 className="partner-name">{c.name || "Cliente"}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
