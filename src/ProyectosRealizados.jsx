import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/ProyectosRealizados.css';
import projects from './Proyectos';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const ProyectosRealizados = () => {
  return (
    <div className="proyectos-container">
       <h1 className="servicesTitle">Proyectos</h1>
      <Carousel className='itemProyectos' responsive={responsive} infinite={true} autoPlay={false}>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <h4>Tecnologias</h4>
              <p>{project.description}</p>
              <a href={project.link} className='buttonProyecto' target="_blank" rel="noopener noreferrer">DEMO</a>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProyectosRealizados;
