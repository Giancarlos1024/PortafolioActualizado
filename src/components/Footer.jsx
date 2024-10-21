import React from 'react';
import '../css/Footer.css'; // Asegúrate de crear y vincular este archivo CSS

export const Footer = () => {
  return (
    <footer className="footer" id='Contact'>
      <strong>CONTACTAME</strong>
      <section className="contactoIcons">
        <div>
          <a href="https://wa.me/51957786281" target="_blank" rel="noopener noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
          </a>
        </div>
        <div>
          <a href="https://web.facebook.com/giancarlos.velasquezancasi" target="_blank" rel="noopener noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
          </a>
        </div>
        <div>
          <a href="mailto:giancarlosvlsqz@gmail.com" target="_blank" rel="noopener noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/>
          </a>
        </div>
      </section>
      <section className="footerText">
        <div>
          <p>Gracias por Visitar mi Portafolio Colega👍</p>
        </div>
        <div>
          <p>Construido desde cero con 💖 © Copyright 2024, Giancarlos. Reservados todos los derechos.</p>
        </div>
      </section>
    </footer>
  )
}
