import React from 'react';
import './Collaborations.css';

const Collaborations = () => {
  // Datos de las colaboraciones
  const partners = [
    {
      id: 1,
      name: 'Kayzen IT',
      logo: '/Images/kaizen_it.webp',
      url: 'https://kaizenit.com.ar/'
    },{
      id: 1,
      name: 'Kayzen IT',
      logo: '/Images/kaizen_it.webp',
      url: 'https://kaizenit.com.ar/'
    },

  ];

  return (
    <section className="collaborations-section">
      <div className="container">
        <h2 className="section-title">Nuestras Colaboraciones</h2>
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
                    e.target.src = 'https://via.placeholder.com/150x75?text=Logo+no+disponible';
                  }}
                />
              </div>
              <h3 className="partner-name">{partner.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;