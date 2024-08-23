
// import React, { useEffect, useState } from 'react';
// import { obtenerLibros } from '../../api/servicioLibro';
// import CardLista from '../../pages/manage/CardLista'; // Corrige el nombre si es necesario
// import Header from '../../componentes/Header'; // Importar el componente Header
// import Footer from '../../componentes/Footer'; // Importar el componente Footer

// const ListaLibro = () => {
//   const [libros, setLibros] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLibros = async () => {
//       try {
//         const data = await obtenerLibros();
//         setLibros(data);
//       } catch (error) {
//         console.error('Error al obtener libros:', error);
//         setError('Error al cargar los libros');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLibros();
//   }, []);

//   if (loading) {
//     return <p>Cargando libros...</p>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <Header /> {/* Usar el componente Header */}
//       <h1>Lista de Libros</h1>
//       <div>
//         {libros.length > 0 ? (
//           libros.map((libro) => (
//             <CardLista key={libro.idLibro} libro={libro} />
//           ))
//         ) : (
//           <p>No hay libros disponibles.</p>
//         )}
//       </div>
//       <Footer /> {/* Usar el componente Footer */}
//     </div>
//   );
// };

// export default ListaLibro;

import React, { useEffect, useState } from 'react';
import { obtenerLibros } from '../../api/servicioLibro';
import CardLista from '../../pages/manage/CardLista'; // Corrige el nombre si es necesario
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

const ListaLibro = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        console.log("Obteniendo libros..."); // Log para depuración
        const data = await obtenerLibros();
        console.log("Libros obtenidos:", data); // Log para ver los datos obtenidos
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
    console.log("Eliminando libro con ID:", idLibro); // Log para ver si la función de eliminar se llama
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
      <Header /> {/* Usar el componente Header */}
      <h1>Lista de Libros</h1>
      <div>
        {libros.length > 0 ? (
          libros.map((libro) => (
            <CardLista key={libro.idLibro} libro={libro} onDelete={handleDelete} />
          ))
        ) : (
          <p>No hay libros disponibles.</p>
        )}
      </div>
      <Footer /> {/* Usar el componente Footer */}
    </div>
  );
};

export default ListaLibro;

