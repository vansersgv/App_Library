"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_servicioLibro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/servicioLibro */ \"./api/servicioLibro.js\");\n/* harmony import */ var _componentes_CardLibro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/CardLibro */ \"./componentes/CardLibro.js\");\n/* harmony import */ var _componentes_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/Header */ \"./componentes/Header.js\");\n/* harmony import */ var _componentes_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/Footer */ \"./componentes/Footer.js\");\n// import { useEffect, useState } from 'react';\n// import { obtenerLibros } from '../api/servicioLibro';\n// import CardLibro from '../componentes/CardLibro'; // Corrige el nombre si es necesario\n// import Header from '../componentes/Header'; // Importar el componente Header\n// import Footer from '../componentes/Footer';\n// export default function Home() {\n//   const [libros, setLibros] = useState([]);\n//   const [cargando, setCargando] = useState(true);\n//   const [error, setError] = useState(null);\n//   useEffect(() => {\n//     async function cargarLibros() {\n//       try {\n//         setCargando(true); // Empieza el proceso de carga\n//         const libros = await obtenerLibros();\n//         setLibros(libros);\n//       } catch (error) {\n//         setError('Error al cargar los libros');\n//         console.error(error);\n//       } finally {\n//         setCargando(false); // Finaliza el proceso de carga\n//       }\n//     }\n//     cargarLibros();\n//   }, []);\n//   if (cargando) {\n//     return <div>Cargando libros...</div>;\n//   }\n//   if (error) {\n//     return <div>{error}</div>;\n//   }\n//   return (\n//     <div>\n//       <Header /> {/* Usar el componente Header */}\n//       <h1>Lista de Libros</h1>\n//       <div>\n//         {libros.length > 0 ? (\n//           libros.map((libro) => (\n//             <CardLibro key={libro.id} libro={libro} />\n//           ))\n//         ) : (\n//           <p>No hay libros disponibles.</p>\n//         )}\n//       </div>\n//       <Footer /> {/* Usar el componente Footer */}\n//     </div>\n//   );\n// }\n// import React, { useEffect, useState } from 'react';\n// import { obtenerLibros } from '../api/servicioLibro';\n// import CardLibro from '../componentes/CardLibro';\n// import Header from '../componentes/Header';\n// import Footer from '../componentes/Footer';\n// const Index = () => {\n//   const [libros, setLibros] = useState([]);\n//   const [loading, setLoading] = useState(true);\n//   useEffect(() => {\n//     const fetchLibros = async () => {\n//       try {\n//         const data = await obtenerLibros();\n//         setLibros(data);\n//       } catch (error) {\n//         console.error('Error al obtener libros:', error);\n//       } finally {\n//         setLoading(false);\n//       }\n//     };\n//     fetchLibros();\n//   }, []);\n//   if (loading) {\n//     return <p>Cargando libros...</p>;\n//   }\n//   return (\n//     <div>\n//       <h1>Lista de Libros</h1>\n//       <ul>\n//         {libros.map((libro) => (\n//           <li key={libro.idLibro}>\n//             <strong>Título:</strong> {libro.titulo}<br />\n//             <strong>Descripción:</strong> {libro.descripcion}<br />\n//             <strong>Fecha de Publicación:</strong> {libro.fechaDePublicacion}<br />\n//             <strong>Autor:</strong> {libro.autorNombre}\n//           </li>\n//         ))}\n//       </ul>\n//     </div>\n//   );\n// };\n// export default Index;\n// import React, { useEffect, useState } from 'react';\n// import { obtenerLibros } from '../api/servicioLibro';\n// import CardLibro from '../componentes/CardLibro'; // Corrige el nombre si es necesario\n// import Header from '../componentes/Header'; // Importar el componente Header\n// import Footer from '../componentes/Footer'; // Importar el componente Footer\n// const Index = () => {\n//   const [libros, setLibros] = useState([]);\n//   const [loading, setLoading] = useState(true);\n//   const [error, setError] = useState(null);\n//   useEffect(() => {\n//     const fetchLibros = async () => {\n//       try {\n//         const data = await obtenerLibros();\n//         setLibros(data);\n//       } catch (error) {\n//         console.error('Error al obtener libros:', error);\n//         setError('Error al cargar los libros');\n//       } finally {\n//         setLoading(false);\n//       }\n//     };\n//     fetchLibros();\n//   }, []);\n//   if (loading) {\n//     return <p>Cargando libros...</p>;\n//   }\n//   if (error) {\n//     return <div>{error}</div>;\n//   }\n//   return (\n//     <div>\n//       <Header /> {/* Usar el componente Header */}\n//       <h1>Lista de Libros</h1>\n//       <div>\n//         {libros.length > 0 ? (\n//           libros.map((libro) => (\n//             <CardLibro key={libro.idLibro} libro={libro} />\n//           ))\n//         ) : (\n//           <p>No hay libros disponibles.</p>\n//         )}\n//       </div>\n//       <Footer /> {/* Usar el componente Footer */}\n//     </div>\n//   );\n// };\n// export default Index;\n\nvar _s = $RefreshSig$();\n\n\n // Corrige el nombre si es necesario\n // Importar el componente Header\n // Importar el componente Footer\nconst Home = ()=>{\n    _s();\n    const [libros, setLibros] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchLibros();\n    }, []);\n    const fetchLibros = async ()=>{\n        try {\n            const response = await fetch(\"/api/libros\");\n            if (response.ok) {\n                const data = await response.json();\n                setLibros(data);\n            } else {\n                console.error(\"Error al obtener los libros\");\n            }\n        } catch (error) {\n            console.error(\"Error en la solicitud:\", error);\n        }\n    };\n    const handleLibroAdded = (nuevoLibro)=>{\n        setLibros([\n            ...libros,\n            nuevoLibro\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddLibro, {\n                onLibroAdded: handleLibroAdded\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\index.js\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"libros-list\",\n                children: libros.map((libro)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"libro-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: libro.titulo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\index.js\",\n                                lineNumber: 195,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: libro.autorNombre\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\index.js\",\n                                lineNumber: 196,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: libro.autorFechaNacimiento\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\index.js\",\n                                lineNumber: 197,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: libro.autorNacionalidad\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\index.js\",\n                                lineNumber: 198,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, libro.id, true, {\n                        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\index.js\",\n                        lineNumber: 194,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\index.js\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\index.js\",\n        lineNumber: 190,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"5N5NdkLS1uyFCt4zzRNbdhTROa0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSUztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLGNBQWM7UUFDbEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixJQUFJRCxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2YsTUFBTUMsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO2dCQUNoQ04sVUFBVUs7WUFDWixPQUFPO2dCQUNMRSxRQUFRQyxLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLDBCQUEwQkE7UUFDMUM7SUFDRjtJQUVBLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QlYsVUFBVTtlQUFJRDtZQUFRVztTQUFXO0lBQ25DO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQVNDLGNBQWNKOzs7Ozs7MEJBQ3hCLDhEQUFDRTtnQkFBSUcsV0FBVTswQkFDWmYsT0FBT2dCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ0w7d0JBQW1CRyxXQUFVOzswQ0FDNUIsOERBQUNHOzBDQUFJRCxNQUFNRSxNQUFNOzs7Ozs7MENBQ2pCLDhEQUFDQzswQ0FBR0gsTUFBTUksV0FBVzs7Ozs7OzBDQUNyQiw4REFBQ0Q7MENBQUdILE1BQU1LLG9CQUFvQjs7Ozs7OzBDQUM5Qiw4REFBQ0Y7MENBQUdILE1BQU1NLGlCQUFpQjs7Ozs7Ozt1QkFKbkJOLE1BQU1PLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUI7R0F4Q016QjtLQUFBQTtBQTBDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IG9idGVuZXJMaWJyb3MgfSBmcm9tICcuLi9hcGkvc2VydmljaW9MaWJybyc7XHJcbi8vIGltcG9ydCBDYXJkTGlicm8gZnJvbSAnLi4vY29tcG9uZW50ZXMvQ2FyZExpYnJvJzsgLy8gQ29ycmlnZSBlbCBub21icmUgc2kgZXMgbmVjZXNhcmlvXHJcbi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50ZXMvSGVhZGVyJzsgLy8gSW1wb3J0YXIgZWwgY29tcG9uZW50ZSBIZWFkZXJcclxuLy8gaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRlcy9Gb290ZXInO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuLy8gICBjb25zdCBbbGlicm9zLCBzZXRMaWJyb3NdID0gdXNlU3RhdGUoW10pO1xyXG4vLyAgIGNvbnN0IFtjYXJnYW5kbywgc2V0Q2FyZ2FuZG9dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbi8vICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIGFzeW5jIGZ1bmN0aW9uIGNhcmdhckxpYnJvcygpIHtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICBzZXRDYXJnYW5kbyh0cnVlKTsgLy8gRW1waWV6YSBlbCBwcm9jZXNvIGRlIGNhcmdhXHJcbi8vICAgICAgICAgY29uc3QgbGlicm9zID0gYXdhaXQgb2J0ZW5lckxpYnJvcygpO1xyXG4vLyAgICAgICAgIHNldExpYnJvcyhsaWJyb3MpO1xyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIHNldEVycm9yKCdFcnJvciBhbCBjYXJnYXIgbG9zIGxpYnJvcycpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgICB9IGZpbmFsbHkge1xyXG4vLyAgICAgICAgIHNldENhcmdhbmRvKGZhbHNlKTsgLy8gRmluYWxpemEgZWwgcHJvY2VzbyBkZSBjYXJnYVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY2FyZ2FyTGlicm9zKCk7XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBpZiAoY2FyZ2FuZG8pIHtcclxuLy8gICAgIHJldHVybiA8ZGl2PkNhcmdhbmRvIGxpYnJvcy4uLjwvZGl2PjtcclxuLy8gICB9XHJcblxyXG4vLyAgIGlmIChlcnJvcikge1xyXG4vLyAgICAgcmV0dXJuIDxkaXY+e2Vycm9yfTwvZGl2PjtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICA8SGVhZGVyIC8+IHsvKiBVc2FyIGVsIGNvbXBvbmVudGUgSGVhZGVyICovfVxyXG4vLyAgICAgICA8aDE+TGlzdGEgZGUgTGlicm9zPC9oMT5cclxuLy8gICAgICAgPGRpdj5cclxuLy8gICAgICAgICB7bGlicm9zLmxlbmd0aCA+IDAgPyAoXHJcbi8vICAgICAgICAgICBsaWJyb3MubWFwKChsaWJybykgPT4gKFxyXG4vLyAgICAgICAgICAgICA8Q2FyZExpYnJvIGtleT17bGlicm8uaWR9IGxpYnJvPXtsaWJyb30gLz5cclxuLy8gICAgICAgICAgICkpXHJcbi8vICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgIDxwPk5vIGhheSBsaWJyb3MgZGlzcG9uaWJsZXMuPC9wPlxyXG4vLyAgICAgICAgICl9XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8Rm9vdGVyIC8+IHsvKiBVc2FyIGVsIGNvbXBvbmVudGUgRm9vdGVyICovfVxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBvYnRlbmVyTGlicm9zIH0gZnJvbSAnLi4vYXBpL3NlcnZpY2lvTGlicm8nO1xyXG4vLyBpbXBvcnQgQ2FyZExpYnJvIGZyb20gJy4uL2NvbXBvbmVudGVzL0NhcmRMaWJybyc7XHJcbi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50ZXMvSGVhZGVyJztcclxuLy8gaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRlcy9Gb290ZXInO1xyXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IHtcclxuLy8gICBjb25zdCBbbGlicm9zLCBzZXRMaWJyb3NdID0gdXNlU3RhdGUoW10pO1xyXG4vLyAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgZmV0Y2hMaWJyb3MgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG9idGVuZXJMaWJyb3MoKTtcclxuLy8gICAgICAgICBzZXRMaWJyb3MoZGF0YSk7XHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgb2J0ZW5lciBsaWJyb3M6JywgZXJyb3IpO1xyXG4vLyAgICAgICB9IGZpbmFsbHkge1xyXG4vLyAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGZldGNoTGlicm9zKCk7XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBpZiAobG9hZGluZykge1xyXG4vLyAgICAgcmV0dXJuIDxwPkNhcmdhbmRvIGxpYnJvcy4uLjwvcD47XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgPGgxPkxpc3RhIGRlIExpYnJvczwvaDE+XHJcbi8vICAgICAgIDx1bD5cclxuLy8gICAgICAgICB7bGlicm9zLm1hcCgobGlicm8pID0+IChcclxuLy8gICAgICAgICAgIDxsaSBrZXk9e2xpYnJvLmlkTGlicm99PlxyXG4vLyAgICAgICAgICAgICA8c3Ryb25nPlTDrXR1bG86PC9zdHJvbmc+IHtsaWJyby50aXR1bG99PGJyIC8+XHJcbi8vICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcGNpw7NuOjwvc3Ryb25nPiB7bGlicm8uZGVzY3JpcGNpb259PGJyIC8+XHJcbi8vICAgICAgICAgICAgIDxzdHJvbmc+RmVjaGEgZGUgUHVibGljYWNpw7NuOjwvc3Ryb25nPiB7bGlicm8uZmVjaGFEZVB1YmxpY2FjaW9ufTxiciAvPlxyXG4vLyAgICAgICAgICAgICA8c3Ryb25nPkF1dG9yOjwvc3Ryb25nPiB7bGlicm8uYXV0b3JOb21icmV9XHJcbi8vICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICkpfVxyXG4vLyAgICAgICA8L3VsPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IG9idGVuZXJMaWJyb3MgfSBmcm9tICcuLi9hcGkvc2VydmljaW9MaWJybyc7XHJcbi8vIGltcG9ydCBDYXJkTGlicm8gZnJvbSAnLi4vY29tcG9uZW50ZXMvQ2FyZExpYnJvJzsgLy8gQ29ycmlnZSBlbCBub21icmUgc2kgZXMgbmVjZXNhcmlvXHJcbi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50ZXMvSGVhZGVyJzsgLy8gSW1wb3J0YXIgZWwgY29tcG9uZW50ZSBIZWFkZXJcclxuLy8gaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRlcy9Gb290ZXInOyAvLyBJbXBvcnRhciBlbCBjb21wb25lbnRlIEZvb3RlclxyXG5cclxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbi8vICAgY29uc3QgW2xpYnJvcywgc2V0TGlicm9zXSA9IHVzZVN0YXRlKFtdKTtcclxuLy8gICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuLy8gICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgZmV0Y2hMaWJyb3MgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG9idGVuZXJMaWJyb3MoKTtcclxuLy8gICAgICAgICBzZXRMaWJyb3MoZGF0YSk7XHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgb2J0ZW5lciBsaWJyb3M6JywgZXJyb3IpO1xyXG4vLyAgICAgICAgIHNldEVycm9yKCdFcnJvciBhbCBjYXJnYXIgbG9zIGxpYnJvcycpO1xyXG4vLyAgICAgICB9IGZpbmFsbHkge1xyXG4vLyAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGZldGNoTGlicm9zKCk7XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBpZiAobG9hZGluZykge1xyXG4vLyAgICAgcmV0dXJuIDxwPkNhcmdhbmRvIGxpYnJvcy4uLjwvcD47XHJcbi8vICAgfVxyXG5cclxuLy8gICBpZiAoZXJyb3IpIHtcclxuLy8gICAgIHJldHVybiA8ZGl2PntlcnJvcn08L2Rpdj47XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgPEhlYWRlciAvPiB7LyogVXNhciBlbCBjb21wb25lbnRlIEhlYWRlciAqL31cclxuLy8gICAgICAgPGgxPkxpc3RhIGRlIExpYnJvczwvaDE+XHJcbi8vICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAge2xpYnJvcy5sZW5ndGggPiAwID8gKFxyXG4vLyAgICAgICAgICAgbGlicm9zLm1hcCgobGlicm8pID0+IChcclxuLy8gICAgICAgICAgICAgPENhcmRMaWJybyBrZXk9e2xpYnJvLmlkTGlicm99IGxpYnJvPXtsaWJyb30gLz5cclxuLy8gICAgICAgICAgICkpXHJcbi8vICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgIDxwPk5vIGhheSBsaWJyb3MgZGlzcG9uaWJsZXMuPC9wPlxyXG4vLyAgICAgICAgICl9XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8Rm9vdGVyIC8+IHsvKiBVc2FyIGVsIGNvbXBvbmVudGUgRm9vdGVyICovfVxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG9idGVuZXJMaWJyb3MgfSBmcm9tICcuLi9hcGkvc2VydmljaW9MaWJybyc7XHJcbmltcG9ydCBDYXJkTGlicm8gZnJvbSAnLi4vY29tcG9uZW50ZXMvQ2FyZExpYnJvJzsgLy8gQ29ycmlnZSBlbCBub21icmUgc2kgZXMgbmVjZXNhcmlvXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50ZXMvSGVhZGVyJzsgLy8gSW1wb3J0YXIgZWwgY29tcG9uZW50ZSBIZWFkZXJcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRlcy9Gb290ZXInOyAvLyBJbXBvcnRhciBlbCBjb21wb25lbnRlIEZvb3RlclxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbbGlicm9zLCBzZXRMaWJyb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hMaWJyb3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoTGlicm9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9saWJyb3MnKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRMaWJyb3MoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgb2J0ZW5lciBsb3MgbGlicm9zJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGVuIGxhIHNvbGljaXR1ZDonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGlicm9BZGRlZCA9IChudWV2b0xpYnJvKSA9PiB7XHJcbiAgICBzZXRMaWJyb3MoWy4uLmxpYnJvcywgbnVldm9MaWJyb10pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QWRkTGlicm8gb25MaWJyb0FkZGVkPXtoYW5kbGVMaWJyb0FkZGVkfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpYnJvcy1saXN0XCI+XHJcbiAgICAgICAge2xpYnJvcy5tYXAoKGxpYnJvKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17bGlicm8uaWR9IGNsYXNzTmFtZT1cImxpYnJvLWNhcmRcIj5cclxuICAgICAgICAgICAgPGgzPntsaWJyby50aXR1bG99PC9oMz5cclxuICAgICAgICAgICAgPHA+e2xpYnJvLmF1dG9yTm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgPHA+e2xpYnJvLmF1dG9yRmVjaGFOYWNpbWllbnRvfTwvcD5cclxuICAgICAgICAgICAgPHA+e2xpYnJvLmF1dG9yTmFjaW9uYWxpZGFkfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwib2J0ZW5lckxpYnJvcyIsIkNhcmRMaWJybyIsIkhlYWRlciIsIkZvb3RlciIsIkhvbWUiLCJsaWJyb3MiLCJzZXRMaWJyb3MiLCJmZXRjaExpYnJvcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlTGlicm9BZGRlZCIsIm51ZXZvTGlicm8iLCJkaXYiLCJBZGRMaWJybyIsIm9uTGlicm9BZGRlZCIsImNsYXNzTmFtZSIsIm1hcCIsImxpYnJvIiwiaDMiLCJ0aXR1bG8iLCJwIiwiYXV0b3JOb21icmUiLCJhdXRvckZlY2hhTmFjaW1pZW50byIsImF1dG9yTmFjaW9uYWxpZGFkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});