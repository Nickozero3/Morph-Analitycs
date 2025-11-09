import React  from "react";
import "./Carrousel.css";

const DualCarousel = () => {
  // 🔧 Editá libremente este listado (palabras, frases, emojis, etc.)
  const words = [
    "DevOps",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Seguridad 🔐",
    "Infraestructura",
    "Observabilidad 👀",
    "Automatización ⚙️",
    "Diseño Web 🎨",
    "Microservicios",
    "API",
    "SRE",
    "Escalabilidad 📈",
    "Alto desempeño 🚀",
  ];

  // Opciones de animación (podés ajustar la velocidad por “fila”)
  const lanes = [
    { id: 1, direction: "left",  duration: 28 }, // segundos
    { id: 2, direction: "right", duration: 32 },
    { id: 3, direction: "left",  duration: 36 },
  ];

  // Distribuye palabras de forma simple entre las filas para variar un poco el patrón visual
  const byLane = lanes.map((lane, i) => words.filter((_, idx) => idx % lanes.length === i));

  return (
    <section className="words-carousel">
      {/* Fondos decorativos (mismo estilo futurista) */}
      <div className="bg-blob-left" />
      <div className="bg-blob-right" />

      <div className="carousel-inner">
        <div className="words-header">
          <h2 className="words-title">Tecnología • Seguridad • Automatización</h2>
    
        </div>

        <div className="marquee-stack">
          {lanes.map((lane, i) => {
            const list = byLane[i].length ? byLane[i] : words;
            return (
              <div
                key={lane.id}
                className={`marquee ${lane.direction === "right" ? "marquee--reverse" : ""}`}
                style={{ "--duration": `${lane.duration}s` }}
              >
                {/* Duplicamos el grupo para lograr el loop perfecto */}
                <div className="marquee__group">
                  {list.map((w, idx) => (
                    <span className="word-chip" key={`a-${idx}`}>
                      {w}
                    </span>
                  ))}
                </div>
                <div className="marquee__group" aria-hidden="true">
                  {list.map((w, idx) => (
                    <span className="word-chip" key={`b-${idx}`}>
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicadores opcionales de “página” eliminados — el loop es continuo */}
      </div>
    </section>
  );
};

export default DualCarousel;
