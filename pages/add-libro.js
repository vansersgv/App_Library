
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { agregarLibro } from '../api/servicioLibro';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const AddLibro = ({ onLibroAdded }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaDePublicacion, setFechaDePublicacion] = useState('');
  const [autorNombre, setAutorNombre] = useState('');
  const [autorNacionalidad, setAutorNacionalidad] = useState('');
  const [autorFechaNacimiento, setAutorFechaNacimiento] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();   
    
    const nuevoLibro = {
      titulo,
      descripcion,
      fechaDePublicacion,
      autorNombre,
      autorNacionalidad,
      autorFechaNacimiento,
    };

    try {
      const libroAgregado = await agregarLibro(nuevoLibro);
       // Llama a la función de callback para actualizar el estado en el componente padre
      router.push('/');
    } catch (error) {
      console.error('Error al agregar el libro', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <h1>Agregar Nuevo Libro</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fechaDePublicacion">Fecha de Publicación</label>
            <input
              type="date"
              id="fechaDePublicacion"
              value={fechaDePublicacion}
              onChange={(e) => setFechaDePublicacion(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="autorNombre">Nombre del Autor</label>
            <input
              type="text"
              id="autorNombre"
              placeholder="Nombre del Autor"
              value={autorNombre}
              onChange={(e) => setAutorNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="autorNacionalidad">Nacionalidad del Autor</label>
            <input
              type="text"
              id="autorNacionalidad"
              placeholder="Nacionalidad del Autor"
              value={autorNacionalidad}
              onChange={(e) => setAutorNacionalidad(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="autorFechaNacimiento">Fecha de Nacimiento del Autor</label>
            <input
              type="date"
              id="autorFechaNacimiento"
              value={autorFechaNacimiento}
              onChange={(e) => setAutorFechaNacimiento(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-submit">Agregar Libro</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddLibro;