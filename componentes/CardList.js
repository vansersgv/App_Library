import React from 'react';
import CardLibro from './CardLibro';

const ListaDeLibros = ({ libros }) => {
  return (
    <div className="card-list">
      {libros.map((libro) => (
        <CardLibro key={libro.id} libro={libro} />
      ))}
    </div>
  );
};

export default ListaDeLibros;
