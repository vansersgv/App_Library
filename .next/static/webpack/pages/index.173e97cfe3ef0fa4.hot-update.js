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

/***/ "./componentes/Header.js":
/*!*******************************!*\
  !*** ./componentes/Header.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// import React from 'react';\n// import { useRouter } from 'next/router';\n// export default function Header() {\n//   const router = useRouter();\n//   const irACrearLibro = () => {\n//     router.push('/add-libro');\n//   };\n//   return (\n//     <header className=\"header\">\n//       <div className=\"header-content\">\n//         <h1 className=\"header-title\">Mi Aplicación de Libros</h1>\n//         <button onClick={irACrearLibro} className=\"btn-crear-libro\">\n//           Crear Nuevo Libro\n//         </button>\n//       </div>\n//     </header>\n//   );\n// }\n// import React, { useState } from 'react';\n// import { useRouter } from 'next/router';\n// export default function Header() {\n//   const router = useRouter();\n//   const [isLoggedIn, setIsLoggedIn] = useState(false);\n//   const irACrearLibro = () => {\n//     router.push('/add-libro');\n//   };\n//   const irACrearCuenta = () => {\n//     router.push('/crear-cuenta');\n//   };\n//   const irAIngresar = () => {\n//     setIsLoggedIn(true);\n//   };\n//   return (\n//     <header className=\"header\">\n//       <div className=\"header-content\">\n//         <div className=\"header-buttons\">\n//           <button onClick={irACrearLibro} className=\"btn-crear-libro\">\n//             Crear Nuevo Libro\n//           </button>\n//           {!isLoggedIn && (\n//             <>\n//               <button onClick={irACrearCuenta} className=\"btn-crear-cuenta\">\n//                 Crea tu cuenta\n//               </button>\n//               <button onClick={irAIngresar} className=\"btn-ingresar\">\n//                 Ingresa\n//               </button>\n//             </>\n//           )}\n//         </div>\n//         <h1 className=\"header-title\">Mi Aplicación de Libros</h1>\n//       </div>\n//     </header>\n//   );\n// }\n\nvar _s = $RefreshSig$();\n\n\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showCreateAccountModal, setShowCreateAccountModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showLoginModal, setShowLoginModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const irACrearLibro = ()=>{\n        router.push(\"/add-libro\");\n    };\n    const handleCreateAccount = (e)=>{\n        e.preventDefault();\n        setShowCreateAccountModal(false);\n        alert(\"Cuenta creada exitosamente.\");\n    };\n    const handleLogin = (e)=>{\n        e.preventDefault();\n        setIsLoggedIn(true);\n        setShowLoginModal(false);\n        alert(\"Ingreso exitoso.\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header-buttons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: irACrearLibro,\n                                className: \"btn-crear-libro\",\n                                children: \"Crear Nuevo Libro\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            !isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setShowCreateAccountModal(true),\n                                        className: \"btn-crear-cuenta\",\n                                        children: \"Crea tu cuenta\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setShowLoginModal(true),\n                                        className: \"btn-ingresar\",\n                                        children: \"Ingresa\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"header-title\",\n                        children: \"Mi Aplicaci\\xf3n de Libros\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            showCreateAccountModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Crea tu cuenta\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleCreateAccount,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"Nombre:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"Correo electr\\xf3nico:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                            lineNumber: 125,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"Contrase\\xf1a:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                            lineNumber: 129,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: \"Crear cuenta\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>setShowCreateAccountModal(false),\n                                    children: \"Cancelar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                    lineNumber: 116,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, this),\n            showLoginModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Ingresa\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                            lineNumber: 141,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleLogin,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"Correo electr\\xf3nico:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                            lineNumber: 145,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"Contrase\\xf1a:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                            lineNumber: 149,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: \"Ingresar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 151,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>setShowLoginModal(false),\n                                    children: \"Cancelar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                                    lineNumber: 152,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                            lineNumber: 142,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                    lineNumber: 140,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                lineNumber: 139,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"pJP+EoISFcyyV4mQdDTQT6CLN70=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUFPUSxNQUFLOzhDQUFTOzs7Ozs7OENBQ3RCLDhEQUFDUjtvQ0FBT1EsTUFBSztvQ0FBU1AsU0FBUyxJQUFNZCwwQkFBMEI7OENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTTlFQyxnQ0FDQyw4REFBQ1c7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0s7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7NEJBQUtDLFVBQVVUOzs4Q0FDZCw4REFBQ1U7O3dDQUFNO3NEQUVMLDhEQUFDQzs0Q0FBTUMsTUFBSzs0Q0FBUUMsUUFBUTs7Ozs7Ozs7Ozs7OzhDQUU5Qiw4REFBQ0g7O3dDQUFNO3NEQUVMLDhEQUFDQzs0Q0FBTUMsTUFBSzs0Q0FBV0MsUUFBUTs7Ozs7Ozs7Ozs7OzhDQUVqQyw4REFBQ1Q7b0NBQU9RLE1BQUs7OENBQVM7Ozs7Ozs4Q0FDdEIsOERBQUNSO29DQUFPUSxNQUFLO29DQUFTUCxTQUFTLElBQU1aLGtCQUFrQjs4Q0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0U7R0F6RndCUDs7UUFDUEQsa0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50ZXMvSGVhZGVyLmpzPzg1NWMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbi8vICAgY29uc3QgaXJBQ3JlYXJMaWJybyA9ICgpID0+IHtcclxuLy8gICAgIHJvdXRlci5wdXNoKCcvYWRkLWxpYnJvJyk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuLy8gICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+TWkgQXBsaWNhY2nDs24gZGUgTGlicm9zPC9oMT5cclxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2lyQUNyZWFyTGlicm99IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1saWJyb1wiPlxyXG4vLyAgICAgICAgICAgQ3JlYXIgTnVldm8gTGlicm9cclxuLy8gICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2hlYWRlcj5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuLy8gICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4vLyAgIGNvbnN0IGlyQUNyZWFyTGlicm8gPSAoKSA9PiB7XHJcbi8vICAgICByb3V0ZXIucHVzaCgnL2FkZC1saWJybycpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IGlyQUNyZWFyQ3VlbnRhID0gKCkgPT4ge1xyXG4vLyAgICAgcm91dGVyLnB1c2goJy9jcmVhci1jdWVudGEnKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBpckFJbmdyZXNhciA9ICgpID0+IHtcclxuLy8gICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idXR0b25zXCI+XHJcbi8vICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2lyQUNyZWFyTGlicm99IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1saWJyb1wiPlxyXG4vLyAgICAgICAgICAgICBDcmVhciBOdWV2byBMaWJyb1xyXG4vLyAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICB7IWlzTG9nZ2VkSW4gJiYgKFxyXG4vLyAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aXJBQ3JlYXJDdWVudGF9IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1jdWVudGFcIj5cclxuLy8gICAgICAgICAgICAgICAgIENyZWEgdHUgY3VlbnRhXHJcbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpckFJbmdyZXNhcn0gY2xhc3NOYW1lPVwiYnRuLWluZ3Jlc2FyXCI+XHJcbi8vICAgICAgICAgICAgICAgICBJbmdyZXNhXHJcbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgKX1cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+TWkgQXBsaWNhY2nDs24gZGUgTGlicm9zPC9oMT5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2hlYWRlcj5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDcmVhdGVBY2NvdW50TW9kYWwsIHNldFNob3dDcmVhdGVBY2NvdW50TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93TG9naW5Nb2RhbCwgc2V0U2hvd0xvZ2luTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpckFDcmVhckxpYnJvID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9hZGQtbGlicm8nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVBY2NvdW50ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNob3dDcmVhdGVBY2NvdW50TW9kYWwoZmFsc2UpO1xyXG4gICAgYWxlcnQoJ0N1ZW50YSBjcmVhZGEgZXhpdG9zYW1lbnRlLicpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICBzZXRTaG93TG9naW5Nb2RhbChmYWxzZSk7XHJcbiAgICBhbGVydCgnSW5ncmVzbyBleGl0b3NvLicpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpckFDcmVhckxpYnJvfSBjbGFzc05hbWU9XCJidG4tY3JlYXItbGlicm9cIj5cclxuICAgICAgICAgICAgQ3JlYXIgTnVldm8gTGlicm9cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgeyFpc0xvZ2dlZEluICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dDcmVhdGVBY2NvdW50TW9kYWwodHJ1ZSl9IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1jdWVudGFcIj5cclxuICAgICAgICAgICAgICAgIENyZWEgdHUgY3VlbnRhXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TG9naW5Nb2RhbCh0cnVlKX0gY2xhc3NOYW1lPVwiYnRuLWluZ3Jlc2FyXCI+XHJcbiAgICAgICAgICAgICAgICBJbmdyZXNhXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+TWkgQXBsaWNhY2nDs24gZGUgTGlicm9zPC9oMT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2hvd0NyZWF0ZUFjY291bnRNb2RhbCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMj5DcmVhIHR1IGN1ZW50YTwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDcmVhdGVBY2NvdW50fT5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBOb21icmU6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgQ29ycmVvIGVsZWN0csOzbmljbzpcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgQ29udHJhc2XDsWE6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWFyIGN1ZW50YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dDcmVhdGVBY2NvdW50TW9kYWwoZmFsc2UpfT5DYW5jZWxhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtzaG93TG9naW5Nb2RhbCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMj5JbmdyZXNhPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBDb3JyZW8gZWxlY3Ryw7NuaWNvOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBDb250cmFzZcOxYTpcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+SW5ncmVzYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TG9naW5Nb2RhbChmYWxzZSl9PkNhbmNlbGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSGVhZGVyIiwicm91dGVyIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJzaG93Q3JlYXRlQWNjb3VudE1vZGFsIiwic2V0U2hvd0NyZWF0ZUFjY291bnRNb2RhbCIsInNob3dMb2dpbk1vZGFsIiwic2V0U2hvd0xvZ2luTW9kYWwiLCJpckFDcmVhckxpYnJvIiwicHVzaCIsImhhbmRsZUNyZWF0ZUFjY291bnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImhhbmRsZUxvZ2luIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImgxIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./componentes/Header.js\n"));

/***/ })

});