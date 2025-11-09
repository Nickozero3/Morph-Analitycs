import React, { useEffect, useRef } from "react";
import "./HeroImgI.css";

const Hero = () => {
  const contentRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    // --- Split de palabras: envuelve cada palabra en <span class="word"> ---
    const splitWords = (root = document) => {
      const targets = root.querySelectorAll('[data-split="words"]');
      targets.forEach(el => {
        if (el.__splitted) return; // evitar duplicado
        const original = el.textContent.trim().replace(/\s+/g, " ");
        const frag = document.createDocumentFragment();
        original.split(" ").forEach((w, i) => {
          const span = document.createElement("span");
          span.className = "word";
          span.style.setProperty("--i", i);
          span.textContent = w;
          frag.appendChild(span);
          frag.appendChild(document.createTextNode(" "));
        });
        el.innerHTML = "";
        el.appendChild(frag);
        el.__splitted = true;
      });
    };

    // --- Observer para entrada/salida de viewport ---
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("inview");
            el.classList.remove("outview");
            splitWords(el);
          } else {
            el.classList.remove("inview");
            el.classList.add("outview");
          }
        });
      },
      { threshold: 0.12 }
    );

    const contentEl = contentRef.current;
    if (contentEl) {
      // marcar de salida por defecto
      contentEl.classList.add("outview");
      io.observe(contentEl);
      // split inmediato por si ya está en viewport
      splitWords(contentEl);
    }

    // --- Parallax suave en la imagen ---
    const parallaxEl = imageWrapperRef.current;
    const onScroll = () => {
      if (!parallaxEl) return;
      const vh = window.innerHeight || 1;
      const rect = parallaxEl.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const delta = (center - vh / 2) / vh; // aprox -1..1
      const strength = 16; // px
      parallaxEl.style.setProperty("--parallaxY", `${-delta * strength}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="hero-container" id="nosotros">
      {/* === Fondos dinámicos sin imágenes === */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-lines" aria-hidden="true" />
      <div className="bg-blob-left" aria-hidden="true" />
      <div className="bg-blob-right" aria-hidden="true" />
      <div className="bg-radial" aria-hidden="true" />

      <div
        className="hero-content animate-on-scroll"
        ref={contentRef}
        data-out="fade-blur"
      >
        {/* Imagen central con overlay + parallax */}
<div className="hero-image-wrapper parallax-y" tabIndex={0}>
  <img src="/Images/logocgpt2.png" alt="Tecnología" className="hero-image" />
  <div className="image-overlay">
    <p className="overlay-text" data-split="words">
      Impulsa tu futuro a la par de la Tecnología 🚀
    </p>
  </div>
</div>


        {/* Texto principal con stagger por palabras */}
        <div className="hero-text">
          <h1 data-split="words">Bienvenidos a Morph Analytics</h1>

          <p className="hero-subtitle" data-split="words">
            Donde la tecnología se transforma en soluciones innovadoras.
          </p>

          <p className="hero-description" data-split="words">
            Nos especializamos en Desarrollo de Software, Seguridad de la
            Información y DevOps, ofreciendo a nuestros clientes no solo
            productos y servicios de alta calidad, sino también una experiencia
            fluida y segura en cada etapa de su transformación digital.
            En Morph Analytics estamos redefiniendo la manera en que las
            empresas piensan en tecnología, brindando soluciones que no solo
            resuelven problemas, sino que también abren nuevas oportunidades
            para el crecimiento y la innovación.
          </p>

          <p className="titular" data-split="words">
            Aníbal Cáceres — CEO de Morph Analytics
          </p>

          <a className="cta-button" href="#contacto" data-split="words">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
