import React, { useEffect, useState } from 'react';
import { obtenerLibros } from '../../api/servicioLibro';
import CardLista from './CardLista';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

const ListaLibro = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        console.log("Obteniendo libros...");
        const data = await obtenerLibros();
        console.log("Libros obtenidos:", data);
        if (data && Array.isArray(data)) {
          setLibros(data.filter(libro => libro !== undefined && libro !== null));
        } else {
          setError('Error: Datos de libros inválidos');
        }
      } catch (error) {
        console.error('Error al obtener libros:', error);
        setError('Error al cargar los libros');
      } finally {
        setLoading(false);
      }
    };

    fetchLibros();
  }, []);

  const handleDelete = (idLibro) => {
    console.log("Eliminando libro con ID:", idLibro); 
    const nuevosLibros = libros.filter(libro => libro.idLibro !== idLibro);
    setLibros(nuevosLibros);
  };

  if (loading) {
    return <p>Cargando libros...</p>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header /> 
      <h1>Lista de Libros</h1>
      <div className="card-grid">
        {libros.length > 0 ? (
          libros.map((libro) => (
            <div className="card-item" key={libro.idLibro}>
              <CardLista libro={libro} onDelete={handleDelete} />
            </div>
          ))
        ) : (
          <p>No hay libros disponibles.</p>
        )}
      </div>
      <Footer /> 
    </div>
  );
};

export default ListaLibro;