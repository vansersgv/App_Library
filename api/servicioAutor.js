import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const eliminarAutor = async (id) => {
  const response = await axios.delete(`${API_URL}/Autor/eliminar/${id}`);
  return response.data;
};

export const EliminarAutorSinLibro = async (autorNombre) => {
    const response = await axios.delete(`${API_URL}/Autor/EliminarAutorSinLibro/${autorNombre}`);
    return response.data;
  };