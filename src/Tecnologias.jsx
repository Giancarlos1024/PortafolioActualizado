import React from 'react';
import './css/Tecnologias.css'; // Asegúrate de crear y vincular este archivo CSS
import Curriculum from '/Cv_Desarrollador_Frontend.pdf';
export const Tecnologias = () => {
  return (
    <section className="sectionAbout" id="About">
      <div className="aboutDiv aboutMe">
        <strong>SOBRE MI</strong>
        <p>
          Soy un desarrollador web fullstack con experiencia en la creación de aplicaciones web y sitios dinámicos. 
          Mi enfoque se centra en combinar una sólida comprensión del desarrollo frontend con habilidades backend, base de datos, 
          robustas para crear experiencias digitales impactantes y funcionales. 
        </p>
        <div className="experienciaDiv">
          <div className="exp">
            <h3>4+</h3>
            <p>Años de Experiencia</p>
          </div>
          <div className="exp">
            <h3>60+</h3>
            <p>Proyectos Completados</p>
          </div>
          <div className="exp">
            <h3>16+</h3>
            <p>Tecnologías Dominadas</p>
          </div>
        </div>
        <div className="tecnoSkills">
          <section className="sectionSkills">
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="HTML"/>
              <strong>HTML</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="CSS"/>
              <strong>CSS</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/ios-filled/50/javascript-logo.png" alt="JavaScript"/>
              <strong>JavaScript</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="Git"/>
              <strong>Git</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/sf-regular-filled/48/github.png" alt="GitHub"/>
              <strong>GitHub</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="React"/>
              <strong>React</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="Node"/>
              <strong>Node</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/nolan/64/express-js.png" alt="Express"/>
              <strong>Express</strong>
            </div>
          </section>
          <section className="sectionSkills">
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/cute-clipart/64/react-native.png" alt="React Native"/>
              <strong>R.Native</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/color/48/figma--v1.png" alt="Figma"/>
              <strong>Figma</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="Python"/>
              <strong>Python</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/color/48/microsoft-sql-server.png" alt="SQL Server"/>
              <strong>SQL Server</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/color/48/firebase.png" alt="Firebase"/>
              <strong>Firebase</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/mysql-logo.png" alt="MySQL"/>
              <strong>MySQL</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/color/48/tailwind_css.png" alt="Tailwind"/>
              <strong>Tailwind</strong>
            </div>
            <div className="skill">
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/bootstrap.png" alt="Bootstrap"/>
              <strong>Bootstrap</strong>
            </div>
          </section>
        </div>
        <div className="buttonAbout">
          <a href={Curriculum} download="Curriculum Vitae.pdf" target="_blank" rel="noopener noreferrer">
            <button type="button">Descargar CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}
