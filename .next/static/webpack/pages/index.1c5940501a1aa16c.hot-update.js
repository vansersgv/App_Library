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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// import React from 'react';\n// import { useRouter } from 'next/router';\n// export default function Header() {\n//   const router = useRouter();\n//   const irACrearLibro = () => {\n//     router.push('/add-libro');\n//   };\n//   return (\n//     <header className=\"header\">\n//       <h1>Mi Aplicación de Libros</h1>\n//       <button onClick={irACrearLibro} className=\"btn-crear-libro\">\n//         Crear Nuevo Libro\n//       </button>\n//     </header>\n//   );\n// }\n\nvar _s = $RefreshSig$();\n\n\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const irACrearLibro = ()=>{\n        router.push(\"/add-libro\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"header-title\",\n                    children: \"Mi Aplicaci\\xf3n de Libros\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: irACrearLibro,\n                    className: \"btn-crear-libro\",\n                    children: \"Crear Nuevo Libro\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\segav\\\\Desktop\\\\Proyecto Biblioteca\\\\App_Library\\\\componentes\\\\Header.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRlcy9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QjtBQUM3QiwyQ0FBMkM7QUFFM0MscUNBQXFDO0FBQ3JDLGdDQUFnQztBQUVoQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLE9BQU87QUFFUCxhQUFhO0FBQ2Isa0NBQWtDO0FBQ2xDLHlDQUF5QztBQUN6QyxxRUFBcUU7QUFDckUsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsT0FBTztBQUNQLElBQUk7OztBQUVzQjtBQUNjO0FBRXpCLFNBQVNFOztJQUN0QixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEIsTUFBTUcsZ0JBQWdCO1FBQ3BCRCxPQUFPRSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFHRixXQUFVOzhCQUFlOzs7Ozs7OEJBQzdCLDhEQUFDRztvQkFBT0MsU0FBU1A7b0JBQWVHLFdBQVU7OEJBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRTtHQWpCd0JMOztRQUNQRCxrREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRlcy9IZWFkZXIuanM/ODU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4vLyAgIGNvbnN0IGlyQUNyZWFyTGlicm8gPSAoKSA9PiB7XHJcbi8vICAgICByb3V0ZXIucHVzaCgnL2FkZC1saWJybycpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4vLyAgICAgICA8aDE+TWkgQXBsaWNhY2nDs24gZGUgTGlicm9zPC9oMT5cclxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpckFDcmVhckxpYnJvfSBjbGFzc05hbWU9XCJidG4tY3JlYXItbGlicm9cIj5cclxuLy8gICAgICAgICBDcmVhciBOdWV2byBMaWJyb1xyXG4vLyAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgIDwvaGVhZGVyPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaXJBQ3JlYXJMaWJybyA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvYWRkLWxpYnJvJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+TWkgQXBsaWNhY2nDs24gZGUgTGlicm9zPC9oMT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2lyQUNyZWFyTGlicm99IGNsYXNzTmFtZT1cImJ0bi1jcmVhci1saWJyb1wiPlxyXG4gICAgICAgICAgQ3JlYXIgTnVldm8gTGlicm9cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiSGVhZGVyIiwicm91dGVyIiwiaXJBQ3JlYXJMaWJybyIsInB1c2giLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./componentes/Header.js\n"));

/***/ })

});