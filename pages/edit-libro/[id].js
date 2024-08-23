import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { obtenerLibros, editarLibro } from '../../api/servicioLibro';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

const EditLibro = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaDePublicacion, setFechaDePublicacion] = useState('');
  const [autorId, setAutorId] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const cargarLibro = async () => {
      if (id) {
        const libro = await obtenerLibros(id);
        setTitulo(libro.titulo);
        setDescripcion(libro.descripcion);
        setFechaDePublicacion(libro.fechaDePublicacion);
        setAutorId(libro.autorId);
      }
    };
    cargarLibro();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const libroActualizado = {
      id,
      titulo,
      descripcion,
      fechaDePublicacion,
      autorId,
    };

    try {
      await editarLibro(libroActualizado);
      router.push('/');
    } catch (error) {
      console.error('Error al editar el libro', error);
    }
  };

  return (
    <div>
      <Header />
      <h1>Editar Libro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <input
          type="date"
          value={fechaDePublicacion}
          onChange={(e) => setFechaDePublicacion(e.target.value)}
        />
        <input
          type="number"
          placeholder="ID del Autor"
          value={autorId}
          onChange={(e) => setAutorId(e.target.value)}
        />
        <button type="submit">Guardar Cambios</button>
      </form>
      <Footer />
    </div>
  );
};

export default EditLibro;
