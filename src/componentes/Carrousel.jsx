import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const DualCarousel = () => {
  // Array de imágenes (debe tener número par de elementos)
  const images = [
    { id: 1, url: '/Images/azure.png', alt: 'Azure' },
    { id: 2, url: '/Images/security.webp', alt: 'Security' },
    { id: 3, url: '/Images/infrastructura.webp', alt: 'Infraestructura' },
    { id: 4, url: '/Images/devolopmen_tegnology.jpg', alt: 'Desarrollo' },
    { id: 5, url: '/Images/datasecurity.webp', alt: 'Seguridad de datos' },
    { id: 6, url: '/Images/webdesing.jpg', alt: 'Diseño web' },
    // ejemplo de añadir nuevas imagenes
    // {id: 1, url: '/images/azure.png', alt: 'Azure'},
    // {id: 1, url: '/images/azure.png', alt: 'Azure'}
  ];

  // Agrupar imágenes en pares
  const imagePairs = [];
  for (let i = 0; i < images.length; i += 2) {
    if (i + 1 < images.length) {
      imagePairs.push([images[i], images[i + 1]]);
    } else {
      // Si hay número impar, mostramos la última sola (o puedes duplicarla)
      imagePairs.push([images[i]]);
    }
  }

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const autoPlay = true;
  const interval = 4000;

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentPairIndex((prev) => (prev + 1) % imagePairs.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [imagePairs.length, autoPlay, interval]);

  const nextSlide = () => {
    setCurrentPairIndex((prev) => (prev + 1) % imagePairs.length);
  };

  const prevSlide = () => {
    setCurrentPairIndex((prev) => (prev - 1 + imagePairs.length) % imagePairs.length);
  };

  return (
    <div className="dual-carousel">
      <h2>La Relacion de nuestros Trabajo</h2>
      <div className="carousel-container">
        <button className="nav-button prev" onClick={prevSlide}>&lt;</button>
        
        <div className="slides">
          {imagePairs[currentPairIndex].map((item) => (
            <div key={item.id} className="slide">
              <img src={item.url} alt={item.alt} />
            </div>
          ))}
        </div>
        
        <button className="nav-button next" onClick={nextSlide}>&gt;</button>
      </div>
      
      <div className="indicators">
        {imagePairs.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${index === currentPairIndex ? 'active' : ''}`}
            onClick={() => setCurrentPairIndex(index)}
          />
        ))}
      </div>
      
    </div>
  );
};

export default DualCarousel;