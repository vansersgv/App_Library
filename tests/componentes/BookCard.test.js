import { render, screen } from '@testing-library/react';
import CardLibro from '../componentes/CardLibro'; 

test('Muestra la información del libro correctamente', () => {
  const libro = {
    titulo: 'Cien Años de Soledad',
    descripcion: 'Novela de realismo mágico',
    fechaDePublicacion: '1967-05-30',
    autorNombre: 'Gabriel García Márquez',
  };
  render(<CardLibro libro={libro} />);
  expect(screen.getByText('Cien Años de Soledad')).toBeInTheDocument();
  expect(screen.getByText('Novela de realismo mágico')).toBeInTheDocument();
  expect(screen.getByText('1967-05-30')).toBeInTheDocument();
  expect(screen.getByText('Gabriel García Márquez')).toBeInTheDocument();
});


