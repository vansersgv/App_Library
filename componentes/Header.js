import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo'; 

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const irACrearLibro = () => {
    router.push('/manage/add-libro');
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setShowCreateAccountModal(false);    
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginModal(false);
    router.push('/manage/add-libro');
  };

  const irAEditar = () => {
    router.push('/manage/lista_libros');
  };

  const isAddLibroPage = router.pathname === '/manage/add-libro';
  const isEditLibroPage = router.pathname === '/manage/lista_libros';

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <a href="http://localhost:3000">
            <Logo /> 
          </a>
        </h1>
        <div className="header-buttons">          
          {isLoggedIn && !isAddLibroPage && !isEditLibroPage && (
            <button onClick={irACrearLibro} className="btn">
              Crear Nuevo Libro
            </button>
          )}          
          {!isLoggedIn && !isAddLibroPage && !isEditLibroPage && (
            <>
              <button onClick={() => setShowCreateAccountModal(true)} className="btn">
                Crea tu cuenta
              </button>
              <button onClick={() => setShowLoginModal(true)} className="btn">
                Ingresa
              </button>
            </>
          )}          
          {isAddLibroPage && (
            <button onClick={irAEditar} className="btn">
              Editar
            </button>
          )}          
          {isEditLibroPage && (
            <button onClick={irACrearLibro} className="btn">
              Agregar Nuevo Libro
            </button>
          )}
        </div>
      </div>

      {showCreateAccountModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Crea tu cuenta</h2>
            <form onSubmit={handleCreateAccount}>
              <label>
                Nombre de usuario:
                <input type="text" required />
              </label>
              <label>
                Correo electrónico:
                <input type="email" required />
              </label>
              <label>
                Ingrese contraseña:
                <input type="password" required />
              </label>
              <button type="submit">Crear cuenta</button>
              <button type="button" onClick={() => setShowCreateAccountModal(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}

      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Ingresa</h2>
            <form onSubmit={handleLogin}>
              <label>
                Correo electrónico:
                <input type="email" required />
              </label>
              <label>
                Ingrese contraseña:
                <input type="password" required />
              </label>
              <button type="submit">Ingresar</button>
              <button type="button" onClick={() => setShowLoginModal(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}