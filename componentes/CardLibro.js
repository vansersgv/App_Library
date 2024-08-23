import React, { useState } from 'react';

const CardLibro = ({ libro }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="card-libro">
      <div className="card-libro-header">
        <h3>{libro.titulo}</h3>
      </div>
      <div className="card-libro-body">
        <button onClick={toggleDescription} className="btn-toggle-description">
          {isDescriptionVisible ? 'Ocultar Descripción' : 'Mostrar Descripción'}
        </button>
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

// import React, { useState } from 'react';

// const CardLibro = ({ libro }) => {
//   const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

//   const toggleDescription = () => {
//     setIsDescriptionVisible(!isDescriptionVisible);
//   };

//   return (
//     <div className="card-libro">
//       <div className="card-libro-header">
//         <h3>{libro.titulo}</h3>
//       </div>
//       <div className="card-libro-body">
//         <button onClick={toggleDescription} className="btn-toggle-description">
//           {isDescriptionVisible ? 'Ocultar Descripción' : 'Mostrar Descripción'}
//         </button>
//         {isDescriptionVisible && <p>{libro.descripcion}</p>}
//         <p>Fecha de Publicación: {new Date(libro.fechaDePublicacion).toLocaleDateString()}</p>
//         <p>Autor: {libro.autorNombre}</p>
//         <p>Nacionalidad: {libro.autorNacionalidad}</p>
//         <p>Fecha de Nacimiento: {new Date(libro.autorFechaNacimiento).toLocaleDateString()}</p>
//       </div>
//     </div>
//   );
// };

// export default CardLibro;