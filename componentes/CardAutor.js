import React from 'react';

const CardAutor = ({ autor, onEliminar }) => {
  return (
    <div className="card-autor">
      <h3>{autor.nombre}</h3>
      <p>Nacionalidad: {autor.nacionalidad}</p>
      <p>Fecha de Nacimiento: {new Date(autor.fechaNacimiento).toLocaleDateString()}</p>
      <button onClick={() => onEliminar(autor.id)}>Eliminar</button>
    </div>
  );
};

export default CardAutor;