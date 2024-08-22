import FormularioAutor from '../componentes/FormularioAutor';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const NuevoAutor = () => {
  return (
    <div>
      <Header />
      <h1>Agregar Nuevo Autor</h1>
      <FormularioAutor />
      <Footer />
    </div>
  );
};

export default NuevoAutor;