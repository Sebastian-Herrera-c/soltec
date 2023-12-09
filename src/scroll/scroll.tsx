import React, { useState, useEffect } from 'react';
import solteclogo from '../assets/Imagenes/Soltec-logo.png';

const Scroll: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100); // Cambia el estado dependiendo del scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${scrolled ? 'scrolled' : ''}`} style={{ backgroundColor: scrolled ? '#FFFFFF' : 'transparent' }}>
      <div className="container px-4 px-lg-5">
        <img className={`solteclogo ${scrolled ? 'scrolled' : ''}`} src={solteclogo} alt="Service" style={{ color: scrolled ? '#DC5834' : '#FFFFFF' }} />

        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className={`collapse navbar-collapse ${scrolled ? 'show' : ''}`} id="navbarResponsive">
          <ul className={`navbar-nav ms-auto my-2 my-lg-0 ${scrolled ? '' : 'scrolled'}`} style={{ color: scrolled ? '#000000' : '#ffffff' }}>
            <li className="nav-item"><a className="nav-link" href="#services" style={{ color: scrolled ? '#000000' : '#ffffff' }}>Repuestos</a></li>
            <li className="nav-item"><a className="nav-link" href="#services2" style={{ color: scrolled ? '#000000' : '#ffffff' }}>Nuestros socios</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio" style={{ color: scrolled ? '#000000' : '#ffffff' }}>Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" style={{ color: scrolled ? '#000000' : '#ffffff' }}>Contactanos</a></li>
            <div>
              {/* Utilizando clases de tamaño de Bootstrap junto con íconos */}
              <a href="https://www.whatsapp.com/"><i className="bi bi-whatsapp text-success bi-4x"></i></a>
              <a href="https://www.facebook.com/"><i className="bi bi-facebook text-success bi-3x"></i></a>
              <a href="https://www.instagram.com/"><i className="bi bi-instagram text-success bi-2x"></i></a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Scroll;
