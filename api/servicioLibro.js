
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function agregarLibro(libro) {
    const response = await fetch(`${API_URL}/libro/crear`, {
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

    return await response.text();
}

export async function obtenerLibros() {
    const response = await fetch(`${API_URL}/libro/lista`, {
        method: 'GET',
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Error al obtener los libros');
    }

    return await response.json();
}

export async function buscarLibroPorNombre(nombre) {
    const response = await fetch(`${API_URL}/libro/buscar/${nombre}`, {
        method: 'GET',
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Error al buscar el libro');
    }

    return await response.json();
}

export async function editarLibro(libro) {
    const response = await fetch(`${API_URL}/libro/editar`, {
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

    return await response.text();
}

export async function eliminarLibro(id) {
    const response = await fetch(`${API_URL}/libro/eliminar/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Error al eliminar el libro');
    }

    return await response.text();
}