import React from 'react';
import './css/Presentacion.css'; 
import perfil from './img/perfil.jpeg';
// Importamos los iconos que necesitas de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Presentacion = () => {
  return (
    <section className="hero-section" id="Home">
      {/* Luces de fondo decorativas */}
      <div className="blur-glow glow-1"></div>
      <div className="blur-glow glow-2"></div>

      <div className="hero-container">
        
        {/* Lado Izquierdo: Información y Texto */}
        <div className="hero-info">
          
          <div className="badge-tech">
            <span>🚀 Disponible para Proyectos Freelance</span>
          </div>

          <h1 className="hero-title">
            Hola, soy <span className="gradient-text">Giancarlos Velasquez</span>
          </h1>
          
          <h2 className="hero-subtitle">Full-Stack Developer & Systems Engineer</h2>

          <p className="hero-description">
            Me apasiona construir soluciones digitales avanzadas. Con 4 años de experiencia, me especializo en el desarrollo de aplicaciones web y móviles de alto rendimiento, combinando lógica sólida con interfaces modernas e interactivas.
          </p>

          {/* Botones de Acción */}
          <div className="hero-actions-btn">
            <a href="#Contact" className="btn-primary">
              Contáctame
            </a>
            <a href="#About" className="btn-secondary">
              Ver mi trabajo
            </a>
          </div>

         
          {/* <div className="hero-social">
           
            <a href="https://www.facebook.com/profile.php?id=61579230271744" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.youtube.com/@AprendeM%C3%A1sDev" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Instagram">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default Presentacion;