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
            <li className="nav-item" style={{ marginRight: '20px' }}><a className="nav-link" href="#repuestos" style={{ color: scrolled ? '#000000' : '#ffffff' }}>Repuestos</a></li>
            <li className="nav-item" style={{ marginRight: '20px' }}><a className="nav-link" href="#nuestrasmarcas" style={{ color: scrolled ? '#000000' : '#ffffff' }}>Nuestroas Marcas</a></li>
            <li className="nav-item" style={{ marginRight: '20px' }}><a className="nav-link" href="#portfolio" style={{ color: scrolled ? '#000000' : '#ffffff' }}>Servicios</a></li>
            <li className="nav-item" style={{ marginRight: '20px' }}><a className="nav-link" href="#contact" style={{ color: scrolled ? '#000000' : '#ffffff' }}>Contactanos</a></li>
            <div className="d-flex justify-content-end">
              <a href="https://www.whatsapp.com/" className="text-success me-3" style={{ fontSize: '24px' }}>
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.facebook.com/" className="text-success me-3" style={{ fontSize: '24px' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-success" style={{ fontSize: '24px' }}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Scroll;
