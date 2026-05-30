import React, { useState } from 'react';
import '../css/Header.css'; 
// Importaciones oficiales de Font Awesome para React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú móvil al hacer clic en un enlace de navegación
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header" id="Home">
      <div className="header-container">
        
        {/* Brand / Logo */}
        <div className="brand">
          Giancarlos <strong>Velasquez</strong>
        </div>

        {/* Navegación */}
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#Home" className="nav-link" onClick={handleNavLinkClick}>Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#About" className="nav-link" onClick={handleNavLinkClick}>Sobre Mí</a>
            </li>
            <li className="nav-item">
              <a href="#Services" className="nav-link" onClick={handleNavLinkClick}>Servicios</a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link" onClick={handleNavLinkClick}>Contáctame</a>
            </li>
          </ul>
        </nav>

        {/* Acciones del Header: Redes y Menú Hamburguesa */}
        <div className="header-actions">
          <div className="contact">
            <div className="social-media">
              <a 
                href="https://wa.me/51957786281" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link whatsapp"
                title="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              
              <a 
                href="https://www.facebook.com/profile.php?id=61579230271744" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link facebook"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a 
                href="https://www.youtube.com/@AprendeM%C3%A1sDev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link youtube"
                title="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Botón de Menú Hamburguesa */}
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            onClick={toggleMenu} 
            aria-label="Abrir menú de navegación"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;