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

/***/ "./componentes/CardLibro.js":
/*!**********************************!*\
  !*** ./componentes/CardLibro.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import React from 'react';\n// const CardLibro = ({ libro }) => {\n//   return (\n//     <div className=\"card-libro\">\n//       <h3>{libro.titulo}</h3>\n//       <p>{libro.descripcion}</p>\n//       <p>Fecha de Publicación: {new Date(libro.fechaDePublicacion).toLocaleDateString()}</p>\n//       <p>Autor: {libro.autorNombre}</p>\n//     </div>\n//   );\n// };\n// export default CardLibro;\n// src/componentes/CardLibro.js\n\n\nconst CardLibro = (param)=>{\n    let { libro } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-libro\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: libro.titulo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\CardLibro.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: libro.descripcion\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\CardLibro.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Fecha de Publicaci\\xf3n: \",\n                    new Date(libro.fechaDePublicacion).toLocaleDateString()\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\CardLibro.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Autor: \",\n                    libro.autorNombre\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\CardLibro.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Nacionalidad: \",\n                    libro.autorNacionalidad\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\CardLibro.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Fecha de Nacimiento: \",\n                    new Date(libro.autorFechaNacimiento).toLocaleDateString()\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\CardLibro.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\CardLibro.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardLibro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardLibro);\nvar _c;\n$RefreshReg$(_c, \"CardLibro\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRlcy9DYXJkTGlicm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2QkFBNkI7QUFFN0IscUNBQXFDO0FBQ3JDLGFBQWE7QUFDYixtQ0FBbUM7QUFDbkMsZ0NBQWdDO0FBQ2hDLG1DQUFtQztBQUNuQywrRkFBK0Y7QUFDL0YsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixPQUFPO0FBQ1AsS0FBSztBQUVMLDRCQUE0QjtBQUM1QiwrQkFBK0I7O0FBQ0w7QUFFMUIsTUFBTUMsWUFBWTtRQUFDLEVBQUVDLEtBQUssRUFBRTtJQUMxQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFJSCxNQUFNSSxNQUFNOzs7Ozs7MEJBQ2pCLDhEQUFDQzswQkFBR0wsTUFBTU0sV0FBVzs7Ozs7OzBCQUNyQiw4REFBQ0Q7O29CQUFFO29CQUF1QixJQUFJRSxLQUFLUCxNQUFNUSxrQkFBa0IsRUFBRUMsa0JBQWtCOzs7Ozs7OzBCQUMvRSw4REFBQ0o7O29CQUFFO29CQUFRTCxNQUFNVSxXQUFXOzs7Ozs7O1lBQUs7MEJBQ2pDLDhEQUFDTDs7b0JBQUU7b0JBQWVMLE1BQU1XLGlCQUFpQjs7Ozs7OztZQUFLOzBCQUM5Qyw4REFBQ047O29CQUFFO29CQUFzQixJQUFJRSxLQUFLUCxNQUFNWSxvQkFBb0IsRUFBRUgsa0JBQWtCOzs7Ozs7O1lBQU87Ozs7Ozs7QUFHN0Y7S0FYTVY7QUFhTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRlcy9DYXJkTGlicm8uanM/YjU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gY29uc3QgQ2FyZExpYnJvID0gKHsgbGlicm8gfSkgPT4ge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlicm9cIj5cclxuLy8gICAgICAgPGgzPntsaWJyby50aXR1bG99PC9oMz5cclxuLy8gICAgICAgPHA+e2xpYnJvLmRlc2NyaXBjaW9ufTwvcD5cclxuLy8gICAgICAgPHA+RmVjaGEgZGUgUHVibGljYWNpw7NuOiB7bmV3IERhdGUobGlicm8uZmVjaGFEZVB1YmxpY2FjaW9uKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XHJcbi8vICAgICAgIDxwPkF1dG9yOiB7bGlicm8uYXV0b3JOb21icmV9PC9wPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IENhcmRMaWJybztcclxuLy8gc3JjL2NvbXBvbmVudGVzL0NhcmRMaWJyby5qc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2FyZExpYnJvID0gKHsgbGlicm8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlicm9cIj5cclxuICAgICAgPGgzPntsaWJyby50aXR1bG99PC9oMz5cclxuICAgICAgPHA+e2xpYnJvLmRlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgPHA+RmVjaGEgZGUgUHVibGljYWNpw7NuOiB7bmV3IERhdGUobGlicm8uZmVjaGFEZVB1YmxpY2FjaW9uKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XHJcbiAgICAgIDxwPkF1dG9yOiB7bGlicm8uYXV0b3JOb21icmV9PC9wPiB7LyogTW9zdHJhciBlbCBub21icmUgZGVsIGF1dG9yICovfVxyXG4gICAgICA8cD5OYWNpb25hbGlkYWQ6IHtsaWJyby5hdXRvck5hY2lvbmFsaWRhZH08L3A+IHsvKiBNb3N0cmFyIGxhIG5hY2lvbmFsaWRhZCBkZWwgYXV0b3IgKi99XHJcbiAgICAgIDxwPkZlY2hhIGRlIE5hY2ltaWVudG86IHtuZXcgRGF0ZShsaWJyby5hdXRvckZlY2hhTmFjaW1pZW50bykudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPiB7LyogTW9zdHJhciBsYSBmZWNoYSBkZSBuYWNpbWllbnRvIGRlbCBhdXRvciAqL30gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkTGlicm87XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZExpYnJvIiwibGlicm8iLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInRpdHVsbyIsInAiLCJkZXNjcmlwY2lvbiIsIkRhdGUiLCJmZWNoYURlUHVibGljYWNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJhdXRvck5vbWJyZSIsImF1dG9yTmFjaW9uYWxpZGFkIiwiYXV0b3JGZWNoYU5hY2ltaWVudG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./componentes/CardLibro.js\n"));

/***/ })

});