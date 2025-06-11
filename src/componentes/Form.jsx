import React, { useState } from "react";
import "./Form.css";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "5493512869149"; // Cambia por tu número de WhatsApp con código de país sin + ni espacios

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Por favor, escribe un mensaje");
      return;
    }

    // Construir el texto para WhatsApp
    const text = `Hola, soy ${name || "alguien"}.\nEmail: ${email || "No proporcionado"}.\nConsulta: ${message}`;

    // Codificar el texto para URL
    const encodedText = encodeURIComponent(text);

    // Abrir WhatsApp web o app con el mensaje precargado
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <form className="whatsapp-form" id="contacto" onSubmit={handleSubmit}>
      <h1 className="form-title">Contacto</h1>
      <p className="form-subtitle">Escribinos y te respondemos por WhatsApp</p>

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          className="form-textarea"
          placeholder="Escribí tu consulta..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        <span className="whatsapp-icon">📱</span> Enviar por WhatsApp
      </button>
    </form>
  );
};

export default WhatsappForm;
