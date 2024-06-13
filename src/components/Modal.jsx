import React from 'react';
import '../css/Modal.css'; // Asegúrate de crear y vincular este archivo CSS

const Modal = ({ onClose, title, content, image }) => {
  return (
    <div className="modalBackground" onClick={onClose}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h2>{title}</h2>
          <button className="closeButton" onClick={onClose}>X</button>
        </div>
        <div className="modalContent">
          <p>{content}</p>
          <img src={image} alt="Descripción de la imagen" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
