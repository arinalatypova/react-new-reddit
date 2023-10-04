webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar postContext_1 = __webpack_require__(/*! ../context/postContext */ \"./src/shared/context/postContext.tsx\");\r\n// interface IPostData {\r\n//   id: string;\r\n//   thumbnail: string;\r\n//   title: string;\r\n//   createdAt: string;\r\n//   username: string;\r\n//   icon_img: string;\r\n//   score: number;\r\n//   comments: number;\r\n//   postURL: string;\r\n//   userURL: string;\r\n//   upvote_ratio: number;\r\n//   isTitleClickable?: boolean;\r\n// }\r\nfunction CardsList() {\r\n    var postData = react_1.default.useContext(postContext_1.postContext);\r\n    console.log(postData);\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList }, postData.map(function (data) {\r\n        return react_1.default.createElement(Card_1.Card, { data: data });\r\n    })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ })

})