
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function Header() {
//   const router = useRouter();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const irACrearLibro = () => {
//     router.push('/add-libro');
//   };

//   const irACrearCuenta = () => {
//     router.push('/crear-cuenta');
//   };

//   const irAIngresar = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="header-buttons">
//           <button onClick={irACrearLibro} className="btn-crear-libro">
//             Crear Nuevo Libro
//           </button>
//           {!isLoggedIn && (
//             <>
//               <button onClick={irACrearCuenta} className="btn-crear-cuenta">
//                 Crea tu cuenta
//               </button>
//               <button onClick={irAIngresar} className="btn-ingresar">
//                 Ingresa
//               </button>
//             </>
//           )}
//         </div>
//         <h1 className="header-title">Mi Aplicación de Libros</h1>
//       </div>
//     </header>
//   );
// }

// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function Header() {
//   const router = useRouter();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const irACrearLibro = () => {
//     router.push('/add-libro');
//   };

//   const handleCreateAccount = (e) => {
//     e.preventDefault();
//     setShowCreateAccountModal(false);
//     alert('Cuenta creada exitosamente.');
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsLoggedIn(true);
//     setShowLoginModal(false);
//     alert('Ingreso exitoso.');
//   };

//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="header-buttons">
//           <button onClick={irACrearLibro} className="btn-crear-libro">
//             Crear Nuevo Libro
//           </button>
//           {!isLoggedIn && (
//             <>
//               <button onClick={() => setShowCreateAccountModal(true)} className="btn-crear-cuenta">
//                 Crea tu cuenta
//               </button>
//               <button onClick={() => setShowLoginModal(true)} className="btn-ingresar">
//                 Ingresa
//               </button>
//             </>
//           )}
//         </div>
//         <h1 className="header-title">Mi Aplicación de Libros</h1>
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
    router.push('/add-libro');
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setShowCreateAccountModal(false);    
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-buttons">
          <button onClick={irACrearLibro} className="btn-crear-libro">
            Crear Nuevo Libro
          </button>
          {!isLoggedIn && (
            <>
              <button onClick={() => setShowCreateAccountModal(true)} className="btn-crear-cuenta">
                Crea tu cuenta
              </button>
              <button onClick={() => setShowLoginModal(true)} className="btn-ingresar">
                Ingresa
              </button>
            </>
          )}
        </div>
        <h1 className="header-title">Mi Aplicación de Libros</h1>
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