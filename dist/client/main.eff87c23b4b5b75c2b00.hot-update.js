webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar postContext_1 = __webpack_require__(/*! ../context/postContext */ \"./src/shared/context/postContext.tsx\");\r\nfunction CardsList() {\r\n    var postData = react_1.default.useContext(postContext_1.postContext);\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList }, postData.map(function (props) { return (react_1.default.createElement(Card_1.Card, null)); })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/context/postContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/postContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostContextProvider = exports.postContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.postContext = react_1.default.createContext([]);\r\nfunction PostContextProvider(_a) {\r\n    var children = _a.children;\r\n    var postData = (0, usePostsData_1.usePostData)();\r\n    return react_1.default.createElement(exports.postContext.Provider, { value: postData }, children);\r\n}\r\nexports.PostContextProvider = PostContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postContext.tsx?");

/***/ })

})