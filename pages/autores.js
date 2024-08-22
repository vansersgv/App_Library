import React, { useEffect, useState } from 'react';
import { obtenerAutores, eliminarAutor } from '../api/servicioAutor';
import CardAutor from '../componentes/CardAutor';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const Autores = () => {
  const [autores, setAutores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarAutores() {
      try {
        setCargando(true);
        const autores = await obtenerAutores();
        setAutores(autores);
      } catch (error) {
        setError('Error al cargar los autores');
        console.error(error);
      } finally {
        setCargando(false);
      }
    }

    cargarAutores();
  }, []);

  const handleEliminar = async (id) => {
    try {
      await eliminarAutor(id);
      setAutores(autores.filter(autor => autor.id !== id));
    } catch (error) {
      console.error('Error al eliminar el autor', error);
    }
  };

  if (cargando) {
    return <div>Cargando autores...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />
      <h1>Lista de Autores</h1>
      <ul>
        {autores.map((autor) => (
          <li key={autor.id}>
            <CardAutor autor={autor} onEliminar={handleEliminar} />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Autores;