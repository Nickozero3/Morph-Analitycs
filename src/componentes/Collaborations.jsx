import React from "react";
import "./Collaborations.css";

const Collaborations = () => {
  // Datos de las Alianzas
  const partners = [
    {
      id: 2,
      name: "",
      logo: "/Images/kaizen_it.webp",
      url: "https://kaizenit.com.ar/",
    },
  ];

  const clients = [
    {
      id: 1,
      name: "",
      logo: "/Images/coop-logo.png",
      url: "https://cooperativaprogresoseguridad.com/",
    },
//    {
//      id: 2,
//      name: "Cliente 2",
//     logo: "/Images/b.webp",
//      url: "b",
//    },
//    {
//      id: 3,
//      name: "Cliente 3",
//      logo: "/Images/c.webp",
//      url: "c",
//    },
  ];
  return (
    <section className="collaborations-section">
      <div className="container">
        <h2 className="section-title" id="partners">⸻ Alianzas / Productos ⸻</h2>
        <div className="partners-grid">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              className="partner-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="partner-logo">
                <img
                  src={partner.logo}
                  alt={`Logo de ${partner.name}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/Images/placeholder.svg';
                  }}
                />
              </div>
              <h3 className="partner-name">{partner.name}</h3>
            </a>
          ))}
        </div>
      </div>
      <div className="container">
        <h2 className="section-title" id="clientes">⸻ Nuestros Clientes ⸻</h2>
        <div className="partners-grid">
          {clients.map((client) => (
            <a
              key={client.id}
              href={client.url}
              className="partner-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="partner-logo">
                <img
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/Images/placeholder.svg';
                  }}
                />
              </div>
              <h3 className="partner-name">{client.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
