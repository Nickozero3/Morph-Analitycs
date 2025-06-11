import React from 'react';
import './Form.css';

const WhatsappForm = () => {
  return (
    <div className="whatsapp-form" id="contacto">
      <h1 className="form-title">Contacto</h1>
      <p className="form-subtitle">Escribinos y te respondemos por WhatsApp</p>

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" className="form-input" placeholder="Tu nombre" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="form-input" placeholder="tu@email.com" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" className="form-textarea" placeholder="Escribí tu consulta..."></textarea>
      </div>

      <button className="submit-btn">
        <span className="whatsapp-icon">📱</span>
        Enviar por WhatsApp
      </button>
    </div>
  );
};

export default WhatsappForm;
