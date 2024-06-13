import React from 'react';

const Proyecto = ({ nombre, descripcion, imagen }) => {
  return (
    <div className="proyecto">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Proyecto;
