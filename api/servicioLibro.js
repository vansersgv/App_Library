const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function agregarLibro(libro) {
  const response = await fetch('http://localhost:5105/api/libro/crear', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(libro),
  });

  if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Error al agregar el libro');
  }

  return await response.text(); // Maneja la respuesta como texto plano
}

export async function obtenerLibros() {
  const response = await fetch('http://localhost:5105/api/libro/lista', {
      method: 'GET',
  });

  if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Error al obtener los libros');
  }

  return await response.json(); // La lista de libros debería ser JSON
}

export async function buscarLibroPorNombre(nombre) {
  const response = await fetch(`http://localhost:5105/api/libro/buscar/${nombre}`, {
      method: 'GET',
  });

  if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Error al buscar el libro');
  }

  return await response.json(); // El libro devuelto debería ser JSON
}

export async function editarLibro(libro) {
  const response = await fetch('http://localhost:5105/api/libro/editar', {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(libro),
  });

  if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Error al editar el libro');
  }

  return await response.text(); // Maneja la respuesta como texto plano
}

export async function eliminarLibro(id) {
  const response = await fetch(`http://localhost:5105/api/libro/eliminar/${id}`, {
      method: 'DELETE',
  });

  if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Error al eliminar el libro');
  }

  return await response.text(); // Maneja la respuesta como texto plano
}

