import React, { useState } from 'react';
import '../css/Header.css'; // Asegúrate de crear y vincular este archivo CSS

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" id="Home">
      <div className="brand">
        Giancarlos <strong>Velasquez</strong>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="#Home" className="nav-link">Inicio</a></li>
          <li className="nav-item"><a href="#About" className="nav-link">Sobre Mi</a></li>
          <li className="nav-item"><a href="#Services" className="nav-link">Servicios</a></li>
          <li className="nav-item"><a href="#Contact" className="nav-link">Contactame</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="contact">
        <a href="https://wa.me/51957786281" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" width="48" height="48"/>
        </a>
      </div>
    </header>
  );
};

export default Header;
