import React, { useEffect, useState } from 'react';
import { obtenerLibros } from '../api/servicioLibro';
import CardLibro from '../componentes/CardLibro';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import HeroSection from '../componentes/Hero';
const Index = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const booksPerPage = 4; 

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

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentLibros = libros.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(libros.length / booksPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
      <HeroSection />
      <h1>Lista de Libros</h1>
      <div className="card-grid">
        {currentLibros.length > 0 ? (
          currentLibros.map((libro) => (
            <div className="card-item" key={libro.idLibro}>
              <CardLibro libro={libro} />
            </div>
          ))
        ) : (
          <p>No hay libros disponibles.</p>
        )}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Index;