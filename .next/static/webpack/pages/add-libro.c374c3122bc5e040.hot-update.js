"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add-libro",{

/***/ "./componentes/Header.js":
/*!*******************************!*\
  !*** ./componentes/Header.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// import React from 'react';\n// import { useRouter } from 'next/router';\n// export default function Header() {\n//   const router = useRouter();\n//   const irACrearLibro = () => {\n//     router.push('/add-libro');\n//   };\n//   return (\n//     <header className=\"header\">\n//       <div className=\"header-content\">\n//         <h1 className=\"header-title\">Mi Aplicación de Libros</h1>\n//         <button onClick={irACrearLibro} className=\"btn-crear-libro\">\n//           Crear Nuevo Libro\n//         </button>\n//       </div>\n//     </header>\n//   );\n// }\n// import React, { useState } from 'react';\n// import { useRouter } from 'next/router';\n// export default function Header() {\n//   const router = useRouter();\n//   const [isLoggedIn, setIsLoggedIn] = useState(false);\n//   const irACrearLibro = () => {\n//     router.push('/add-libro');\n//   };\n//   const irACrearCuenta = () => {\n//     router.push('/crear-cuenta');\n//   };\n//   const irAIngresar = () => {\n//     setIsLoggedIn(true);\n//   };\n//   return (\n//     <header className=\"header\">\n//       <div className=\"header-content\">\n//         <div className=\"header-buttons\">\n//           <button onClick={irACrearLibro} className=\"btn-crear-libro\">\n//             Crear Nuevo Libro\n//           </button>\n//           {!isLoggedIn && (\n//             <>\n//               <button onClick={irACrearCuenta} className=\"btn-crear-cuenta\">\n//                 Crea tu cuenta\n//               </button>\n//               <button onClick={irAIngresar} className=\"btn-ingresar\">\n//                 Ingresa\n//               </button>\n//             </>\n//           )}\n//         </div>\n//         <h1 className=\"header-title\">Mi Aplicación de Libros</h1>\n//       </div>\n//     </header>\n//   );\n// }\n\nvar _s = $RefreshSig$();\n\n\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hasAccount, setHasAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const irACrearLibro = ()=>{\n        router.push(\"/add-libro\");\n    };\n    const irACrearCuenta = ()=>{\n        setHasAccount(true);\n        alert(\"Cuenta creada exitosamente.\");\n    };\n    const irAIngresar = ()=>{\n        if (hasAccount) {\n            setIsLoggedIn(true);\n            alert(\"Ingreso exitoso.\");\n        } else {\n            alert(\"Por favor, crea una cuenta primero.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header-buttons\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: irACrearLibro,\n                            className: \"btn-crear-libro\",\n                            children: \"Crear Nuevo Libro\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this),\n                        !isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: irACrearCuenta,\n                                    className: \"btn-crear-cuenta\",\n                                    children: \"Crea tu cuenta\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: irAIngresar,\n                                    className: \"btn-ingresar\",\n                                    children: \"Ingresa\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"header-title\",\n                    children: \"Mi Aplicaci\\xf3n de Libros\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"kFATn9FA3ufyVSOXCnYmMwWFqqc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRlcy9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDZCQUE2QjtBQUM3QiwyQ0FBMkM7QUFFM0MscUNBQXFDO0FBQ3JDLGdDQUFnQztBQUVoQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLE9BQU87QUFFUCxhQUFhO0FBQ2Isa0NBQWtDO0FBQ2xDLHlDQUF5QztBQUN6QyxvRUFBb0U7QUFDcEUsdUVBQXVFO0FBQ3ZFLDhCQUE4QjtBQUM5QixvQkFBb0I7QUFDcEIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1AsSUFBSTtBQUVKLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFFM0MscUNBQXFDO0FBQ3JDLGdDQUFnQztBQUNoQyx5REFBeUQ7QUFFekQsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxPQUFPO0FBRVAsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQyxPQUFPO0FBRVAsZ0NBQWdDO0FBQ2hDLDJCQUEyQjtBQUMzQixPQUFPO0FBRVAsYUFBYTtBQUNiLGtDQUFrQztBQUNsQyx5Q0FBeUM7QUFDekMsMkNBQTJDO0FBQzNDLHlFQUF5RTtBQUN6RSxnQ0FBZ0M7QUFDaEMsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5QixpQkFBaUI7QUFDakIsK0VBQStFO0FBQy9FLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUIsd0VBQXdFO0FBQ3hFLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsb0VBQW9FO0FBQ3BFLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsT0FBTztBQUNQLElBQUk7OztBQUVvQztBQUNBO0FBRXpCLFNBQVNHOztJQUN0QixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTSxDQUFDRyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNUSxnQkFBZ0I7UUFDcEJMLE9BQU9NLElBQUksQ0FBQztJQUNkO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3JCSCxjQUFjO1FBQ2RJLE1BQU07SUFDUjtJQUVBLE1BQU1DLGNBQWM7UUFDbEIsSUFBSU4sWUFBWTtZQUNkRCxjQUFjO1lBQ2RNLE1BQU07UUFDUixPQUFPO1lBQ0xBLE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQU9DLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBT0MsU0FBU1Q7NEJBQWVNLFdBQVU7c0NBQWtCOzs7Ozs7d0JBRzNELENBQUNWLDRCQUNBOzs4Q0FDRSw4REFBQ1k7b0NBQU9DLFNBQVNQO29DQUFnQkksV0FBVTs4Q0FBbUI7Ozs7Ozs4Q0FHOUQsOERBQUNFO29DQUFPQyxTQUFTTDtvQ0FBYUUsV0FBVTs4Q0FBZTs7Ozs7Ozs7Ozs7Ozs7OEJBTTdELDhEQUFDSTtvQkFBR0osV0FBVTs4QkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckM7R0E3Q3dCWjs7UUFDUEQsa0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50ZXMvSGVhZGVyLmpzPzg1NWMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbi8vICAgY29uc3QgaXJBQ3JlYXJMaWJybyA9ICgpID0+IHtcclxuLy8gICAgIHJvdXRlci5wdXNoKCcvYWRkLWxpYnJvJyk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuLy8gICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+TWkgQXBsaWNhY2nDs24gZGUgTGlicm9zPC9oMT5cclxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2lyQUNyZWFyTGlicm99IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1saWJyb1wiPlxyXG4vLyAgICAgICAgICAgQ3JlYXIgTnVldm8gTGlicm9cclxuLy8gICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2hlYWRlcj5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuLy8gICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4vLyAgIGNvbnN0IGlyQUNyZWFyTGlicm8gPSAoKSA9PiB7XHJcbi8vICAgICByb3V0ZXIucHVzaCgnL2FkZC1saWJybycpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IGlyQUNyZWFyQ3VlbnRhID0gKCkgPT4ge1xyXG4vLyAgICAgcm91dGVyLnB1c2goJy9jcmVhci1jdWVudGEnKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBpckFJbmdyZXNhciA9ICgpID0+IHtcclxuLy8gICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idXR0b25zXCI+XHJcbi8vICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2lyQUNyZWFyTGlicm99IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1saWJyb1wiPlxyXG4vLyAgICAgICAgICAgICBDcmVhciBOdWV2byBMaWJyb1xyXG4vLyAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICB7IWlzTG9nZ2VkSW4gJiYgKFxyXG4vLyAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aXJBQ3JlYXJDdWVudGF9IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1jdWVudGFcIj5cclxuLy8gICAgICAgICAgICAgICAgIENyZWEgdHUgY3VlbnRhXHJcbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpckFJbmdyZXNhcn0gY2xhc3NOYW1lPVwiYnRuLWluZ3Jlc2FyXCI+XHJcbi8vICAgICAgICAgICAgICAgICBJbmdyZXNhXHJcbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgKX1cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+TWkgQXBsaWNhY2nDs24gZGUgTGlicm9zPC9oMT5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2hlYWRlcj5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hhc0FjY291bnQsIHNldEhhc0FjY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpckFDcmVhckxpYnJvID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9hZGQtbGlicm8nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpckFDcmVhckN1ZW50YSA9ICgpID0+IHtcclxuICAgIHNldEhhc0FjY291bnQodHJ1ZSk7XHJcbiAgICBhbGVydCgnQ3VlbnRhIGNyZWFkYSBleGl0b3NhbWVudGUuJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXJBSW5ncmVzYXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoaGFzQWNjb3VudCkge1xyXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gICAgICBhbGVydCgnSW5ncmVzbyBleGl0b3NvLicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgY3JlYSB1bmEgY3VlbnRhIHByaW1lcm8uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idXR0b25zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2lyQUNyZWFyTGlicm99IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1saWJyb1wiPlxyXG4gICAgICAgICAgICBDcmVhciBOdWV2byBMaWJyb1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7IWlzTG9nZ2VkSW4gJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aXJBQ3JlYXJDdWVudGF9IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1jdWVudGFcIj5cclxuICAgICAgICAgICAgICAgIENyZWEgdHUgY3VlbnRhXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpckFJbmdyZXNhcn0gY2xhc3NOYW1lPVwiYnRuLWluZ3Jlc2FyXCI+XHJcbiAgICAgICAgICAgICAgICBJbmdyZXNhXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+TWkgQXBsaWNhY2nDs24gZGUgTGlicm9zPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJyb3V0ZXIiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImhhc0FjY291bnQiLCJzZXRIYXNBY2NvdW50IiwiaXJBQ3JlYXJMaWJybyIsInB1c2giLCJpckFDcmVhckN1ZW50YSIsImFsZXJ0IiwiaXJBSW5ncmVzYXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./componentes/Header.js\n"));

/***/ })

});