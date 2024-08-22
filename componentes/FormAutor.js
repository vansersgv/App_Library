import React, { useState, useEffect } from 'react';
import { crearAutor, obtenerAutorPorId, actualizarAutor } from '../api/servicioAutor';
import { useRouter } from 'next/router';

const FormularioAutor = ({ id }) => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (id) {
      async function cargarAutor() {
        try {
          const autor = await obtenerAutorPorId(id);
          setNombre(autor.nombre);
          setFechaNacimiento(autor.fechaNacimiento);
          setNacionalidad(autor.nacionalidad);
        } catch (error) {
          console.error('Error al cargar el autor', error);
        }
      }

      cargarAutor();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const autor = { nombre, fechaNacimiento, nacionalidad };

    try {
      if (id) {
        await actualizarAutor(id, autor);
      } else {
        await crearAutor(autor);
      }
      router.push('/autores');
    } catch (error) {
      console.error('Error al guardar el autor', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Nacionalidad:</label>
        <input
          type="text"
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
          required
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormularioAutor;