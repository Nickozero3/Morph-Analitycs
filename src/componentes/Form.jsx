import React, { useState } from "react";
import "./Form.css";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "5493512869149"; // tu número con país (sin + ni espacios)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      alert("Por favor, escribí un mensaje");
      return;
    }
    const text = `Hola, soy ${name || "alguien"}.\nEmail: ${email || "No proporcionado"}.\nConsulta: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section className="whatsapp-form" id="contacto" aria-labelledby="contact-title">
      {/* Fondos decorativos internos (solo CSS, sin imágenes) */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-accent-square" aria-hidden="true" />
      <div className="bg-dots" aria-hidden="true" />
      <div className="bg-blob-left" aria-hidden="true" />
      <div className="bg-blob-right" aria-hidden="true" />

      {/* Card del formulario */}
      <form className="form-card" onSubmit={handleSubmit} noValidate>
        <h1 className="form-title" id="contact-title">Contacto 💬</h1>
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
            autoComplete="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (opcional)</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            inputMode="email"
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
            rows={5}
          />
        </div>

        <button type="submit" className="submit-btn">
          <span className="whatsapp-icon" aria-hidden="true">🟢💬</span>
          Enviar por WhatsApp
        </button>

        {/* Pie pequeño / info */}
        <p className="form-hint">Respondemos en horario laboral. Tus datos no se comparten con terceros.</p>
      </form>
    </section>
  );
};

export default WhatsappForm;
