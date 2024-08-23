// import React, { useState } from 'react';
// import { useRouter } from 'next/router';


// export default function Header() {
//   const router = useRouter();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const irACrearLibro = () => {
//     router.push('/manage/add-libro');
//   };

//   const handleCreateAccount = (e) => {
//     e.preventDefault();
//     setShowCreateAccountModal(false);    
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsLoggedIn(true);
//     setShowLoginModal(false);
//   };

//   const irAEditar = () => {
//     router.push('/manage/lista_libros'); // Redirige a la página de editar
//   };

//   const isAddLibroPage = router.pathname === '/manage/add-libro';

//   return (
//     <header className="header">
//       <div className="header-content">
//         <h1 className="header-title">Mi Aplicación de Libros</h1>
//         <div className="header-buttons">
//           {/* Mostrar botones de "Crear Nuevo Libro" solo si el usuario está autenticado y no en la página de agregar libro */}
//           {isLoggedIn && !isAddLibroPage && (
//             <button onClick={irACrearLibro} className="btn">
//               Crear Nuevo Libro
//             </button>
//           )}
//           {/* Mostrar botones de "Crear cuenta" e "Ingresar" solo si el usuario no está autenticado */}
//           {!isLoggedIn && !isAddLibroPage && (
//             <>
//               <button onClick={() => setShowCreateAccountModal(true)} className="btn">
//                 Crea tu cuenta
//               </button>
//               <button onClick={() => setShowLoginModal(true)} className="btn">
//                 Ingresa
//               </button>
//             </>
//           )}
//           {/* Mostrar botones de "Editar" y "Borrar" solo si estamos en la página de agregar libro */}
//           {isAddLibroPage && (
//             <>
//               <button onClick={irAEditar} className="btn">
//                 Editar
//               </button>              
//             </>
//           )}
//         </div>
//       </div>

//       {showCreateAccountModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Crea tu cuenta</h2>
//             <form onSubmit={handleCreateAccount}>
//               <label>
//                 Nombre:
//                 <input type="text" required />
//               </label>
//               <label>
//                 Correo electrónico:
//                 <input type="email" required />
//               </label>
//               <label>
//                 Contraseña:
//                 <input type="password" required />
//               </label>
//               <button type="submit">Crear cuenta</button>
//               <button type="button" onClick={() => setShowCreateAccountModal(false)}>Cancelar</button>
//             </form>
//           </div>
//         </div>
//       )}

//       {showLoginModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Ingresa</h2>
//             <form onSubmit={handleLogin}>
//               <label>
//                 Correo electrónico:
//                 <input type="email" required />
//               </label>
//               <label>
//                 Contraseña:
//                 <input type="password" required />
//               </label>
//               <button type="submit">Ingresar</button>
//               <button type="button" onClick={() => setShowLoginModal(false)}>Cancelar</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
    router.push('/manage/add-libro'); // Redirige a la página de agregar libro después de iniciar sesión
  };

  const irAEditar = () => {
    router.push('/manage/lista_libros'); // Redirige a la página de editar
  };

  const isAddLibroPage = router.pathname === '/manage/add-libro';
  const isEditLibroPage = router.pathname === '/manage/lista_libros'; // Detecta si estamos en la página de edición

  return (
    <header className="header">
      <div className="header-content">
      <h1 className="header-title">
          <a href="http://localhost:3000">Mi Aplicación de Libros</a>
        </h1>
        <div className="header-buttons">
          {/* Mostrar botones de "Crear Nuevo Libro" solo si el usuario está autenticado y no en la página de agregar libro */}
          {isLoggedIn && !isAddLibroPage && !isEditLibroPage && (
            <button onClick={irACrearLibro} className="btn">
              Crear Nuevo Libro
            </button>
          )}
          {/* Mostrar botones de "Crear cuenta" e "Ingresar" solo si el usuario no está autenticado */}
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
          {/* Mostrar botón de "Editar" solo si estamos en la página de agregar libro */}
          {isAddLibroPage && (
            <button onClick={irAEditar} className="btn">
              Editar
            </button>
          )}
          {/* Mostrar botón de "Agregar Nuevo Libro" solo si estamos en la página de edición */}
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
                Nombre:
                <input type="text" required />
              </label>
              <label>
                Correo electrónico:
                <input type="email" required />
              </label>
              <label>
                Contraseña:
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
                Contraseña:
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