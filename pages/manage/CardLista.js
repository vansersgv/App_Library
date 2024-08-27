import React, { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

  const handleSave = () => {
    fetch(`${API_URL}/libro/editar/${libro.idLibro}`, {
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
        return response.text();
      })
      .then((text) => {
        try {
          const updatedLibro = JSON.parse(text);
          alert('Libro actualizado con éxito');
          setIsEditing(false);
          if (onUpdate) {
            onUpdate(libro.idLibro, updatedLibro);
          }
        } catch (error) {
          console.warn('Respuesta no es un JSON válido:', text);
          alert('Libro actualizado con éxito');
          setIsEditing(false);
        }
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
      fetch(`${API_URL}/libro/eliminar/${libro.idLibro}`, {
        method: 'DELETE',
      })
        .then(() => {
          alert('Libro eliminado con éxito');
          if (onDelete) {
            onDelete(libro.idLibro);
          }
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
    <div className="card-item">
      <div className="card-content">
        {isEditing ? (
          <div>
            <input
              type="text"
              name="titulo"
              value={editData.titulo}
              onChange={handleInputChange}
              placeholder="Título"
              className="input-field"
            />
            <textarea
              name="descripcion"
              value={editData.descripcion}
              onChange={handleInputChange}
              placeholder="Descripción"
              className="textarea-field"
            />
            <input
              type="date"
              name="fechaDePublicacion"
              value={new Date(editData.fechaDePublicacion).toISOString().substring(0, 10)}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="autorNombre"
              value={editData.autorNombre}
              onChange={handleInputChange}
              placeholder="Autor"
              className="input-field"
            />
            <input
              type="text"
              name="autorNacionalidad"
              value={editData.autorNacionalidad}
              onChange={handleInputChange}
              placeholder="Nacionalidad"
              className="input-field"
            />
            <input
              type="date"
              name="autorFechaNacimiento"
              value={new Date(editData.autorFechaNacimiento).toISOString().substring(0, 10)}
              onChange={handleInputChange}
              className="input-field"
            />

            <button onClick={handleSave} className="btn btn-submit">Guardar</button>
            <button onClick={handleCancel} className="btn btn-cancel">Cancelar</button>
          </div>
        ) : (
          <div>
            <div className="card-title">
              <h2>{editData.titulo}</h2>
            </div>
            <button onClick={toggleDescription} className="btn btn-toggle-description">
              {isDescriptionVisible ? 'Ocultar Descripción' : 'Mostrar Descripción'}
            </button>
            {isDescriptionVisible && <p>{editData.descripcion}</p>}
            <p>Fecha de Publicación: {new Date(editData.fechaDePublicacion).toLocaleDateString()}</p>
            <p>Autor: {editData.autorNombre}</p>
            <p>Nacionalidad: {editData.autorNacionalidad}</p>
            <p>Fecha de Nacimiento: {new Date(editData.autorFechaNacimiento).toLocaleDateString()}</p>

            <div className="card-libro-buttons">
              <button onClick={handleEdit} className="btn btn-edit">Editar</button>
              <button onClick={handleDelete} className="btn btn-delete">Eliminar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardLista;