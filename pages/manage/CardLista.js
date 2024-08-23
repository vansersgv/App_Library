// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// const CardLista = ({ libro, onDelete }) => {
//   const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
//   const router = useRouter();

//   const toggleDescription = () => {
//     setIsDescriptionVisible(!isDescriptionVisible);
//   };

//   const handleEdit = () => {
//     router.push(`/edit-libro/${libro.idLibro}`);
//   };

//   const handleDelete = () => {
//     if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
//       fetch(`/api/libros/${libro.idLibro}`, {
//         method: 'DELETE',
//       })
//         .then(() => {
//           alert('Libro eliminado con éxito');
//           onDelete(libro.idLibro);
//         })
//         .catch((error) => {
//           console.error('Error al eliminar el libro:', error);
//         });
//     }
//   };

//   return (
//     <div className="card-libro">
//       <div className="card-libro-header">
//         <h3>{libro.titulo}</h3>
//       </div>
//       <button onClick={handleEdit} style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>
//   Editar
// </button>
// <button onClick={handleDelete} style={{ padding: '10px', backgroundColor: 'red', color: 'white' }}>
//   Eliminar
// </button>
//       <div className="card-libro-body">
//         <button onClick={toggleDescription} className="btn-toggle-description">
//           {isDescriptionVisible ? 'Ocultar Descripción' : 'Mostrar Descripción'}
//         </button>
//         {isDescriptionVisible && <p>{libro.descripcion}</p>}
//         <p>Fecha de Publicación: {new Date(libro.fechaDePublicacion).toLocaleDateString()}</p>
//         <p>Autor: {libro.autorNombre}</p>
//         <p>Nacionalidad: {libro.autorNacionalidad}</p>
//         <p>Fecha de Nacimiento: {new Date(libro.autorFechaNacimiento).toLocaleDateString()}</p>
//         <div className="card-libro-buttons">
    

//         </div>
//       </div>      
//     </div>
//   );
// };

// export default CardLista;

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CardLista = ({ libro, onDelete, onUpdate }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    titulo: libro.titulo,
    descripcion: libro.descripcion,
    fechaDePublicacion: libro.fechaDePublicacion,
    autorNombre: libro.autorNombre,
    autorNacionalidad: libro.autorNacionalidad,
    autorFechaNacimiento: libro.autorFechaNacimiento,
  });

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

//   const handleSave = () => {
//     // Llamada a la API para actualizar el libro
//     fetch(`http://localhost:5105/api/Libro/editar${libro.idLibro}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(editData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         alert('Libro actualizado con éxito');
//         setIsEditing(false);
//         onUpdate(libro.idLibro, data); // Actualiza el estado en el componente padre
//       })
//       .catch((error) => {
//         console.error('Error al actualizar el libro:', error);
//       });
//   };
const handleSave = () => {
    // Llamada a la API para actualizar el libro
    fetch(`http://localhost:5105/api/Libro/editar/${libro.idLibro}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.text(); // Usa text() en lugar de json() si la respuesta no es JSON
      })
      .then((text) => {
        alert('Libro actualizado con éxito');
        setIsEditing(false);
        onUpdate(libro.idLibro, text); // Actualiza el estado en el componente padre
      })
      .catch((error) => {
        console.error('Error al actualizar el libro:', error);
        alert('Hubo un problema al actualizar el libro.');
      });
  };
  
  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
      fetch(`http://localhost:5105/api/Libro/eliminar/${libro.idLibro}`, {
        method: 'DELETE',
      })
        .then(() => {
          alert('Libro eliminado con éxito');
          onDelete(libro.idLibro);
        })
        .catch((error) => {
          console.error('Error al eliminar el libro:', error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  return (
    <div className="card-libro">
      <div className="card-libro-header">
        <h3>{editData.titulo}</h3>
      </div>
      <div className="card-libro-body">
        {isEditing ? (
          <div>
            <input
              type="text"
              name="titulo"
              value={editData.titulo}
              onChange={handleInputChange}
              placeholder="Título"
            />
            <textarea
              name="descripcion"
              value={editData.descripcion}
              onChange={handleInputChange}
              placeholder="Descripción"
            />
            <input
              type="date"
              name="fechaDePublicacion"
              value={new Date(editData.fechaDePublicacion).toISOString().substring(0, 10)}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="autorNombre"
              value={editData.autorNombre}
              onChange={handleInputChange}
              placeholder="Autor"
            />
            <input
              type="text"
              name="autorNacionalidad"
              value={editData.autorNacionalidad}
              onChange={handleInputChange}
              placeholder="Nacionalidad"
            />
            <input
              type="date"
              name="autorFechaNacimiento"
              value={new Date(editData.autorFechaNacimiento).toISOString().substring(0, 10)}
              onChange={handleInputChange}
            />

            <button onClick={handleSave} className="btn-save">Guardar</button>
            <button onClick={handleCancel} className="btn-cancel">Cancelar</button>
          </div>
        ) : (
          <div>
            <button onClick={toggleDescription} className="btn-toggle-description">
              {isDescriptionVisible ? 'Ocultar Descripción' : 'Mostrar Descripción'}
            </button>
            {isDescriptionVisible && <p>{editData.descripcion}</p>}
            <p>Fecha de Publicación: {new Date(editData.fechaDePublicacion).toLocaleDateString()}</p>
            <p>Autor: {editData.autorNombre}</p>
            <p>Nacionalidad: {editData.autorNacionalidad}</p>
            <p>Fecha de Nacimiento: {new Date(editData.autorFechaNacimiento).toLocaleDateString()}</p>

            <div className="card-libro-buttons">
              <button onClick={handleEdit} className="btn-edit">Editar</button>
              <button onClick={handleDelete} className="btn-delete">Eliminar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardLista;
