import { motion } from 'framer-motion';
import './css/ProyectosRealizados.css';
import projects from './Proyectos';

export const ProyectosRealizados = () => {
  return (
    <section className="proyectos-container">
      <h1 className="servicesTitle">Proyectos</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-image-wrapper">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-tech">{project.description}</p>

              <a
                href={project.link}
                className="buttonProyecto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProyectosRealizados;
