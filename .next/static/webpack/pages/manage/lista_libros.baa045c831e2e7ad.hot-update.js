"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/manage/lista_libros",{

/***/ "./pages/manage/CardLista.js":
/*!***********************************!*\
  !*** ./pages/manage/CardLista.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// import React, { useState } from 'react';\n// import { useRouter } from 'next/router';\n// const CardLista = ({ libro, onDelete }) => {\n//   const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);\n//   const router = useRouter();\n//   const toggleDescription = () => {\n//     setIsDescriptionVisible(!isDescriptionVisible);\n//   };\n//   const handleEdit = () => {\n//     router.push(`/edit-libro/${libro.idLibro}`);\n//   };\n//   const handleDelete = () => {\n//     if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {\n//       fetch(`/api/libros/${libro.idLibro}`, {\n//         method: 'DELETE',\n//       })\n//         .then(() => {\n//           alert('Libro eliminado con éxito');\n//           onDelete(libro.idLibro);\n//         })\n//         .catch((error) => {\n//           console.error('Error al eliminar el libro:', error);\n//         });\n//     }\n//   };\n//   return (\n//     <div className=\"card-libro\">\n//       <div className=\"card-libro-header\">\n//         <h3>{libro.titulo}</h3>\n//       </div>\n//       <button onClick={handleEdit} style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>\n//   Editar\n// </button>\n// <button onClick={handleDelete} style={{ padding: '10px', backgroundColor: 'red', color: 'white' }}>\n//   Eliminar\n// </button>\n//       <div className=\"card-libro-body\">\n//         <button onClick={toggleDescription} className=\"btn-toggle-description\">\n//           {isDescriptionVisible ? 'Ocultar Descripción' : 'Mostrar Descripción'}\n//         </button>\n//         {isDescriptionVisible && <p>{libro.descripcion}</p>}\n//         <p>Fecha de Publicación: {new Date(libro.fechaDePublicacion).toLocaleDateString()}</p>\n//         <p>Autor: {libro.autorNombre}</p>\n//         <p>Nacionalidad: {libro.autorNacionalidad}</p>\n//         <p>Fecha de Nacimiento: {new Date(libro.autorFechaNacimiento).toLocaleDateString()}</p>\n//         <div className=\"card-libro-buttons\">\n//         </div>\n//       </div>      \n//     </div>\n//   );\n// };\n// export default CardLista;\n\nvar _s = $RefreshSig$();\n\n\nconst CardLista = (param)=>{\n    let { libro, onDelete, onUpdate } = param;\n    _s();\n    const [isDescriptionVisible, setIsDescriptionVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editData, setEditData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        titulo: libro.titulo,\n        descripcion: libro.descripcion,\n        fechaDePublicacion: libro.fechaDePublicacion,\n        autorNombre: libro.autorNombre,\n        autorNacionalidad: libro.autorNacionalidad,\n        autorFechaNacimiento: libro.autorFechaNacimiento\n    });\n    const toggleDescription = ()=>{\n        setIsDescriptionVisible(!isDescriptionVisible);\n    };\n    const handleEdit = ()=>{\n        setIsEditing(true);\n    };\n    const handleSave = ()=>{\n        // Llamada a la API para actualizar el libro\n        fetch(\"/api/libros/\".concat(libro.idLibro), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(editData)\n        }).then((response)=>response.json()).then((data)=>{\n            alert(\"Libro actualizado con \\xe9xito\");\n            setIsEditing(false);\n            onUpdate(libro.idLibro, data); // Actualiza el estado en el componente padre\n        }).catch((error)=>{\n            console.error(\"Error al actualizar el libro:\", error);\n        });\n    };\n    const handleCancel = ()=>{\n        setIsEditing(false);\n    };\n    const handleDelete = ()=>{\n        if (confirm(\"\\xbfEst\\xe1s seguro de que deseas eliminar este libro?\")) {\n            fetch(\"http://localhost:5105/api/Libro/eliminar/\".concat(libro.idLibro), {\n                method: \"DELETE\"\n            }).then(()=>{\n                alert(\"Libro eliminado con \\xe9xito\");\n                onDelete(libro.idLibro);\n            }).catch((error)=>{\n                console.error(\"Error al eliminar el libro:\", error);\n            });\n        }\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setEditData({\n            ...editData,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-libro\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-libro-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: editData.titulo\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-libro-body\",\n                children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"titulo\",\n                            value: editData.titulo,\n                            onChange: handleInputChange,\n                            placeholder: \"T\\xedtulo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 140,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            name: \"descripcion\",\n                            value: editData.descripcion,\n                            onChange: handleInputChange,\n                            placeholder: \"Descripci\\xf3n\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            name: \"fechaDePublicacion\",\n                            value: new Date(editData.fechaDePublicacion).toISOString().substring(0, 10),\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 153,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"autorNombre\",\n                            value: editData.autorNombre,\n                            onChange: handleInputChange,\n                            placeholder: \"Autor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 159,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"autorNacionalidad\",\n                            value: editData.autorNacionalidad,\n                            onChange: handleInputChange,\n                            placeholder: \"Nacionalidad\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 166,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            name: \"autorFechaNacimiento\",\n                            value: new Date(editData.autorFechaNacimiento).toISOString().substring(0, 10),\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 173,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSave,\n                            className: \"btn-save\",\n                            children: \"Guardar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 180,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleCancel,\n                            className: \"btn-cancel\",\n                            children: \"Cancelar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 181,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                    lineNumber: 139,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: toggleDescription,\n                            className: \"btn-toggle-description\",\n                            children: isDescriptionVisible ? \"Ocultar Descripci\\xf3n\" : \"Mostrar Descripci\\xf3n\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 185,\n                            columnNumber: 13\n                        }, undefined),\n                        isDescriptionVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: editData.descripcion\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 188,\n                            columnNumber: 38\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Fecha de Publicaci\\xf3n: \",\n                                new Date(editData.fechaDePublicacion).toLocaleDateString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 189,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Autor: \",\n                                editData.autorNombre\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 190,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Nacionalidad: \",\n                                editData.autorNacionalidad\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 191,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Fecha de Nacimiento: \",\n                                new Date(editData.autorFechaNacimiento).toLocaleDateString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 192,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-libro-buttons\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleEdit,\n                                    className: \"btn-edit\",\n                                    children: \"Editar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                                    lineNumber: 195,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleDelete,\n                                    className: \"btn-delete\",\n                                    children: \"Eliminar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                                    lineNumber: 196,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                            lineNumber: 194,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                    lineNumber: 184,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\pages\\\\manage\\\\CardLista.js\",\n        lineNumber: 133,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardLista, \"Tdpl03Qujw5enJ1sCdpoiverFDw=\");\n_c = CardLista;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardLista);\nvar _c;\n$RefreshReg$(_c, \"CardLista\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZeUIsV0FBVTtzQ0FBVzs7Ozs7O3NDQUNsRCw4REFBQ1U7NEJBQU9DLFNBQVNwQjs0QkFBY1MsV0FBVTtzQ0FBYTs7Ozs7Ozs7Ozs7OENBR3hELDhEQUFDRDs7c0NBQ0MsOERBQUNXOzRCQUFPQyxTQUFTdEM7NEJBQW1CMkIsV0FBVTtzQ0FDM0N2Qyx1QkFBdUIsMkJBQXdCOzs7Ozs7d0JBRWpEQSxzQ0FBd0IsOERBQUNtRDtzQ0FBRy9DLFNBQVNHLFdBQVc7Ozs7OztzQ0FDakQsOERBQUM0Qzs7Z0NBQUU7Z0NBQXVCLElBQUlMLEtBQUsxQyxTQUFTSSxrQkFBa0IsRUFBRTRDLGtCQUFrQjs7Ozs7OztzQ0FDbEYsOERBQUNEOztnQ0FBRTtnQ0FBUS9DLFNBQVNLLFdBQVc7Ozs7Ozs7c0NBQy9CLDhEQUFDMEM7O2dDQUFFO2dDQUFlL0MsU0FBU00saUJBQWlCOzs7Ozs7O3NDQUM1Qyw4REFBQ3lDOztnQ0FBRTtnQ0FBc0IsSUFBSUwsS0FBSzFDLFNBQVNPLG9CQUFvQixFQUFFeUMsa0JBQWtCOzs7Ozs7O3NDQUVuRiw4REFBQ2Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDVTtvQ0FBT0MsU0FBU3JDO29DQUFZMEIsV0FBVTs4Q0FBVzs7Ozs7OzhDQUNsRCw4REFBQ1U7b0NBQU9DLFNBQVNuQjtvQ0FBY1EsV0FBVTs4Q0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEU7R0ExSU0zQztLQUFBQTtBQTRJTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYW5hZ2UvQ2FyZExpc3RhLmpzPzAyYTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vLyBjb25zdCBDYXJkTGlzdGEgPSAoeyBsaWJybywgb25EZWxldGUgfSkgPT4ge1xyXG4vLyAgIGNvbnN0IFtpc0Rlc2NyaXB0aW9uVmlzaWJsZSwgc2V0SXNEZXNjcmlwdGlvblZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuLy8gICBjb25zdCB0b2dnbGVEZXNjcmlwdGlvbiA9ICgpID0+IHtcclxuLy8gICAgIHNldElzRGVzY3JpcHRpb25WaXNpYmxlKCFpc0Rlc2NyaXB0aW9uVmlzaWJsZSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlRWRpdCA9ICgpID0+IHtcclxuLy8gICAgIHJvdXRlci5wdXNoKGAvZWRpdC1saWJyby8ke2xpYnJvLmlkTGlicm99YCk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4vLyAgICAgaWYgKGNvbmZpcm0oJ8K/RXN0w6FzIHNlZ3VybyBkZSBxdWUgZGVzZWFzIGVsaW1pbmFyIGVzdGUgbGlicm8/JykpIHtcclxuLy8gICAgICAgZmV0Y2goYC9hcGkvbGlicm9zLyR7bGlicm8uaWRMaWJyb31gLCB7XHJcbi8vICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuLy8gICAgICAgfSlcclxuLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbi8vICAgICAgICAgICBhbGVydCgnTGlicm8gZWxpbWluYWRvIGNvbiDDqXhpdG8nKTtcclxuLy8gICAgICAgICAgIG9uRGVsZXRlKGxpYnJvLmlkTGlicm8pO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgZWxpbWluYXIgZWwgbGlicm86JywgZXJyb3IpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlicm9cIj5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWxpYnJvLWhlYWRlclwiPlxyXG4vLyAgICAgICAgIDxoMz57bGlicm8udGl0dWxvfTwvaDM+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUVkaXR9IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsIGNvbG9yOiAnd2hpdGUnIH19PlxyXG4vLyAgIEVkaXRhclxyXG4vLyA8L2J1dHRvbj5cclxuLy8gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYmFja2dyb3VuZENvbG9yOiAncmVkJywgY29sb3I6ICd3aGl0ZScgfX0+XHJcbi8vICAgRWxpbWluYXJcclxuLy8gPC9idXR0b24+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1saWJyby1ib2R5XCI+XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEZXNjcmlwdGlvbn0gY2xhc3NOYW1lPVwiYnRuLXRvZ2dsZS1kZXNjcmlwdGlvblwiPlxyXG4vLyAgICAgICAgICAge2lzRGVzY3JpcHRpb25WaXNpYmxlID8gJ09jdWx0YXIgRGVzY3JpcGNpw7NuJyA6ICdNb3N0cmFyIERlc2NyaXBjacOzbid9XHJcbi8vICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAge2lzRGVzY3JpcHRpb25WaXNpYmxlICYmIDxwPntsaWJyby5kZXNjcmlwY2lvbn08L3A+fVxyXG4vLyAgICAgICAgIDxwPkZlY2hhIGRlIFB1YmxpY2FjacOzbjoge25ldyBEYXRlKGxpYnJvLmZlY2hhRGVQdWJsaWNhY2lvbikudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxyXG4vLyAgICAgICAgIDxwPkF1dG9yOiB7bGlicm8uYXV0b3JOb21icmV9PC9wPlxyXG4vLyAgICAgICAgIDxwPk5hY2lvbmFsaWRhZDoge2xpYnJvLmF1dG9yTmFjaW9uYWxpZGFkfTwvcD5cclxuLy8gICAgICAgICA8cD5GZWNoYSBkZSBOYWNpbWllbnRvOiB7bmV3IERhdGUobGlicm8uYXV0b3JGZWNoYU5hY2ltaWVudG8pLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlicm8tYnV0dG9uc1wiPlxyXG4gICAgXHJcblxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj4gICAgICBcclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBDYXJkTGlzdGE7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IENhcmRMaXN0YSA9ICh7IGxpYnJvLCBvbkRlbGV0ZSwgb25VcGRhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0Rlc2NyaXB0aW9uVmlzaWJsZSwgc2V0SXNEZXNjcmlwdGlvblZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2VkaXREYXRhLCBzZXRFZGl0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXR1bG86IGxpYnJvLnRpdHVsbyxcclxuICAgIGRlc2NyaXBjaW9uOiBsaWJyby5kZXNjcmlwY2lvbixcclxuICAgIGZlY2hhRGVQdWJsaWNhY2lvbjogbGlicm8uZmVjaGFEZVB1YmxpY2FjaW9uLFxyXG4gICAgYXV0b3JOb21icmU6IGxpYnJvLmF1dG9yTm9tYnJlLFxyXG4gICAgYXV0b3JOYWNpb25hbGlkYWQ6IGxpYnJvLmF1dG9yTmFjaW9uYWxpZGFkLFxyXG4gICAgYXV0b3JGZWNoYU5hY2ltaWVudG86IGxpYnJvLmF1dG9yRmVjaGFOYWNpbWllbnRvLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVEZXNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgIHNldElzRGVzY3JpcHRpb25WaXNpYmxlKCFpc0Rlc2NyaXB0aW9uVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdCA9ICgpID0+IHtcclxuICAgIHNldElzRWRpdGluZyh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgLy8gTGxhbWFkYSBhIGxhIEFQSSBwYXJhIGFjdHVhbGl6YXIgZWwgbGlicm9cclxuICAgIGZldGNoKGAvYXBpL2xpYnJvcy8ke2xpYnJvLmlkTGlicm99YCwge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZWRpdERhdGEpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoJ0xpYnJvIGFjdHVhbGl6YWRvIGNvbiDDqXhpdG8nKTtcclxuICAgICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICAgIG9uVXBkYXRlKGxpYnJvLmlkTGlicm8sIGRhdGEpOyAvLyBBY3R1YWxpemEgZWwgZXN0YWRvIGVuIGVsIGNvbXBvbmVudGUgcGFkcmVcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIGFjdHVhbGl6YXIgZWwgbGlicm86JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIGlmIChjb25maXJtKCfCv0VzdMOhcyBzZWd1cm8gZGUgcXVlIGRlc2VhcyBlbGltaW5hciBlc3RlIGxpYnJvPycpKSB7XHJcbiAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUxMDUvYXBpL0xpYnJvL2VsaW1pbmFyLyR7bGlicm8uaWRMaWJyb31gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBhbGVydCgnTGlicm8gZWxpbWluYWRvIGNvbiDDqXhpdG8nKTtcclxuICAgICAgICAgIG9uRGVsZXRlKGxpYnJvLmlkTGlicm8pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgZWxpbWluYXIgZWwgbGlicm86JywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0RWRpdERhdGEoe1xyXG4gICAgICAuLi5lZGl0RGF0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlicm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWxpYnJvLWhlYWRlclwiPlxyXG4gICAgICAgIDxoMz57ZWRpdERhdGEudGl0dWxvfTwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlicm8tYm9keVwiPlxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdHVsb1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VkaXREYXRhLnRpdHVsb31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUw610dWxvXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZWRpdERhdGEuZGVzY3JpcGNpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcGNpw7NuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmZWNoYURlUHVibGljYWNpb25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXcgRGF0ZShlZGl0RGF0YS5mZWNoYURlUHVibGljYWNpb24pLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYXV0b3JOb21icmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlZGl0RGF0YS5hdXRvck5vbWJyZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdXRvclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYXV0b3JOYWNpb25hbGlkYWRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlZGl0RGF0YS5hdXRvck5hY2lvbmFsaWRhZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYWNpb25hbGlkYWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImF1dG9yRmVjaGFOYWNpbWllbnRvXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3IERhdGUoZWRpdERhdGEuYXV0b3JGZWNoYU5hY2ltaWVudG8pLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cImJ0bi1zYXZlXCI+R3VhcmRhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0gY2xhc3NOYW1lPVwiYnRuLWNhbmNlbFwiPkNhbmNlbGFyPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEZXNjcmlwdGlvbn0gY2xhc3NOYW1lPVwiYnRuLXRvZ2dsZS1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIHtpc0Rlc2NyaXB0aW9uVmlzaWJsZSA/ICdPY3VsdGFyIERlc2NyaXBjacOzbicgOiAnTW9zdHJhciBEZXNjcmlwY2nDs24nfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge2lzRGVzY3JpcHRpb25WaXNpYmxlICYmIDxwPntlZGl0RGF0YS5kZXNjcmlwY2lvbn08L3A+fVxyXG4gICAgICAgICAgICA8cD5GZWNoYSBkZSBQdWJsaWNhY2nDs246IHtuZXcgRGF0ZShlZGl0RGF0YS5mZWNoYURlUHVibGljYWNpb24pLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cclxuICAgICAgICAgICAgPHA+QXV0b3I6IHtlZGl0RGF0YS5hdXRvck5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgIDxwPk5hY2lvbmFsaWRhZDoge2VkaXREYXRhLmF1dG9yTmFjaW9uYWxpZGFkfTwvcD5cclxuICAgICAgICAgICAgPHA+RmVjaGEgZGUgTmFjaW1pZW50bzoge25ldyBEYXRlKGVkaXREYXRhLmF1dG9yRmVjaGFOYWNpbWllbnRvKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlicm8tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRWRpdH0gY2xhc3NOYW1lPVwiYnRuLWVkaXRcIj5FZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gY2xhc3NOYW1lPVwiYnRuLWRlbGV0ZVwiPkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZExpc3RhO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkNhcmRMaXN0YSIsImxpYnJvIiwib25EZWxldGUiLCJvblVwZGF0ZSIsImlzRGVzY3JpcHRpb25WaXNpYmxlIiwic2V0SXNEZXNjcmlwdGlvblZpc2libGUiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJlZGl0RGF0YSIsInNldEVkaXREYXRhIiwidGl0dWxvIiwiZGVzY3JpcGNpb24iLCJmZWNoYURlUHVibGljYWNpb24iLCJhdXRvck5vbWJyZSIsImF1dG9yTmFjaW9uYWxpZGFkIiwiYXV0b3JGZWNoYU5hY2ltaWVudG8iLCJ0b2dnbGVEZXNjcmlwdGlvbiIsImhhbmRsZUVkaXQiLCJoYW5kbGVTYXZlIiwiZmV0Y2giLCJpZExpYnJvIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJhbGVydCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRGVsZXRlIiwiY29uZmlybSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3Vic3RyaW5nIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/manage/CardLista.js\n"));

/***/ })

});