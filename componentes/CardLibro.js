
import React, { useState } from 'react';

const CardLibro = ({ libro }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="card-item">
      <div className="card-content">
        <div className="card-title">
          <h2>{libro.titulo}</h2>
        </div>
        <div className="card-libro-buttons">
          <button onClick={toggleDescription} className="btn btn-toggle-description">
            {isDescriptionVisible ? 'Ocultar Descripción' : 'Mostrar Descripción'}
          </button>
        </div>
        {isDescriptionVisible && <p>{libro.descripcion}</p>}
        <p>Fecha de Publicación: {new Date(libro.fechaDePublicacion).toLocaleDateString()}</p>
        <p>Autor: {libro.autorNombre}</p>
        <p>Nacionalidad: {libro.autorNacionalidad}</p>
        <p>Fecha de Nacimiento: {new Date(libro.autorFechaNacimiento).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default CardLibro;
