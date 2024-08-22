import React, { useEffect, useState } from 'react';
import { obtenerLibros } from '../api/servicioLibro';
import CardLibro from '../componentes/CardLibro'; // Corrige el nombre si es necesario
import Header from '../componentes/Header'; // Importar el componente Header
import Footer from '../componentes/Footer'; // Importar el componente Footer

const Index = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const data = await obtenerLibros();
        setLibros(data);
      } catch (error) {
        console.error('Error al obtener libros:', error);
        setError('Error al cargar los libros');
      } finally {
        setLoading(false);
      }
    };

    fetchLibros();
  }, []);

  if (loading) {
    return <p>Cargando libros...</p>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header /> {/* Usar el componente Header */}
      <h1>Lista de Libros</h1>
      <div>
        {libros.length > 0 ? (
          libros.map((libro) => (
            <CardLibro key={libro.idLibro} libro={libro} />
          ))
        ) : (
          <p>No hay libros disponibles.</p>
        )}
      </div>
      <Footer /> {/* Usar el componente Footer */}
    </div>
  );
};

export default Index;
