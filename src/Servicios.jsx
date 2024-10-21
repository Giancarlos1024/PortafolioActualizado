import React from 'react';
import './css/Servicios.css'; // Asegúrate de crear y vincular este archivo CSS

const Servicios = () => {
  return (
    <section className="sectionServices" id="Services">
      <div className="servicesContainer">
        <h1 className="servicesTitle">Servicios</h1>
        <div className="servicesGrid">
          <div className="serviceCard">
          <img width="48" height="48" src="https://img.icons8.com/color/48/teaching.png" alt="teaching"/>
            <h2>Enseñanza de Programación</h2>
            <p>Ofrezco clases personalizadas y en grupo para aprender diferentes lenguajes de programación desde lo básico hasta avanzado.</p>
          </div>
          <div className="serviceCard">
            <img src="https://img.icons8.com/color/48/design.png" alt="Design" />
            <h2>Diseño de Interfaces</h2>
            <p>Servicios de diseño de interfaces de usuario (UI/UX) para aplicaciones web y móviles, creando experiencias intuitivas y atractivas.</p>
          </div>
          <div className="serviceCard">
            <img src="https://img.icons8.com/fluency/48/training.png" alt="Training" />
            <h2>Profesor y Mentor</h2>
            <p>Actúo como mentor y profesor, guiando a los estudiantes y profesionales en su camino de aprendizaje y desarrollo profesional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
