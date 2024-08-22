// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function obtenerAutor() {
//   const respuesta = await fetch(`${API_URL}/autor`);
//   const datos = await respuesta.json();
//   return datos;
// }

// export async function agregarAutor(autor) {
//   const respuesta = await fetch(`${API_URL}/autor`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(libro),
//   });
//   return respuesta.json();
// }

// export async function editarLibro(id, autor) {
//   const respuesta = await fetch(`${API_URL}/autor/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(autor),
//   });
//   return respuesta.json();
// }

// export async function eliminarAutor(id) {
//   const respuesta = await fetch(`${API_URL}/autor/${id}`, {
//     method: 'DELETE',
//   });
//   return respuesta.ok;
// }
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL; // Cambia la URL según tu configuración

export const obtenerAutores = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const obtenerAutorPorId = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const crearAutor = async (autor) => {
  const response = await axios.post(API_URL, autor);
  return response.data;
};

export const actualizarAutor = async (id, autor) => {
  const response = await axios.put(`${API_URL}/${id}`, autor);
  return response.data;
};

export const eliminarAutor = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};