import React from 'react';
import '../css/Footer.css'; // Asegúrate de crear y vincular este archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer" id='Contact'>
      <strong>CONTACTAME</strong>
      <section className="contactoIcons">

        <div>
          <a href="https://wa.me/51957786281" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/profile.php?id=61579230271744" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/@AprendeM%C3%A1sDev" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </section>
      <section className="footerText">
        <div>
          <p>Gracias por Visitar mi Portafolio Colega👍</p>
        </div>
        <div>
          <p>Construido desde cero con 💖 © Copyright 2022, Giancarlos. Reservados todos los derechos.</p>
        </div>
      </section>
    </footer>
  )
}
