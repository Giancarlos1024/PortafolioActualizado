import React from 'react';
import './css/Presentacion.css'; // Asegúrate de crear y vincular este archivo CSS
import perfil from './img/perfil.jpeg';

const Presentacion = () => {
  return (
    <section className="sectionDiv">
      <div className="containerSection">
        <div className="iconsDiv">
          <i className='bx bxl-instagram'></i>
          <i className='bx bxl-facebook-square'></i>
          <i className='bx bxl-twitter'></i>
          <i className='bx bxl-linkedin-square'></i>
        </div>
        <div className="infoDiv">
          <div className='tituloPresentacion'>
            <h1 id="tituloH1"><span>Hola</span>, Soy Giancarlos Velasquez</h1>
          </div>
          <div className="parrafoDiv">
            <p>
              ¡Bienvenido a mi portafolio! Me llamo Giancarlos Velasquez, soy un apasionado en Desarrollo Web con 4 años de experiencia, creando aplicaciones web, móviles y también diseñando apps.
            </p>
          </div>
          <div className="buttonFlex">
            {/* <button type="button" className="button">
              <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/60/apps.png" alt="apps" />
              <p>DESARROLLADOR WEB</p>
            </button> */}
            <button type="button" className="button">
              {/* <img width="20" height="20" src="https://img.icons8.com/ios/50/web.png" alt="web" /> */}
              <a href='#About' className='enlacePresentacion'>Leer más</a>
            </button>
          </div>
        </div>
      </div>
      <div className="containerSection2">
        <img src={perfil} alt="Perfil" />
      </div>
    </section>
  );
}

export default Presentacion;
