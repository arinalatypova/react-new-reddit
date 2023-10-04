webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".createdat__publishedLabel--2T6jK {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.createdat__createdAt--1aNLR,\\r\\n.createdat__createdAt--1aNLR span {\\r\\n  color: var(--grey99);\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"publishedLabel\": \"createdat__publishedLabel--2T6jK\",\n\t\"createdAt\": \"createdat__createdAt--1aNLR\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/CreatedAt/CreatedAt.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/CreatedAt/CreatedAt.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CreatedAt = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar createdat_css_1 = __importDefault(__webpack_require__(/*! ./createdat.css */ \"./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css\"));\r\nfunction CreatedAt(_a) {\r\n    var published = _a.published;\r\n    return (react_1.default.createElement(\"span\", { className: createdat_css_1.default.createdAt },\r\n        react_1.default.createElement(\"span\", { className: createdat_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n        published || '4 часа назад'));\r\n}\r\nexports.CreatedAt = CreatedAt;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/CreatedAt/CreatedAt.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./createdat.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./createdat.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./createdat.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/CreatedAt/createdat.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/CreatedAt/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/CreatedAt/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CreatedAt */ \"./src/shared/CardsList/Card/TextContent/CreatedAt/CreatedAt.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/CreatedAt/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/index.ts\");\r\nvar UserLink_1 = __webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/Card/TextContent/UserLink/index.ts\");\r\nvar CreatedAt_1 = __webpack_require__(/*! ./CreatedAt */ \"./src/shared/CardsList/Card/TextContent/CreatedAt/index.ts\");\r\nfunction TextContent(_a) {\r\n    var id = _a.id, subreddit = _a.subreddit, username = _a.username, title = _a.title, userUrl = _a.userUrl, avatarSrc = _a.avatarSrc, published = _a.published;\r\n    // console.log(props);\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\r\n            react_1.default.createElement(UserLink_1.UserLink, { username: username, userUrl: userUrl, avatarSrc: avatarSrc }),\r\n            react_1.default.createElement(CreatedAt_1.CreatedAt, { published: published })),\r\n        react_1.default.createElement(Title_1.Title, { id: id, subreddit: subreddit, title: title })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ })

})