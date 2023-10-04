webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/index.ts\");\r\nvar UserLink_1 = __webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/Card/TextContent/UserLink/index.ts\");\r\nvar CreatedAt_1 = __webpack_require__(/*! ./CreatedAt */ \"./src/shared/CardsList/Card/TextContent/CreatedAt/index.ts\");\r\nfunction TextContent(_a) {\r\n    var subreddit = _a.subreddit, username = _a.username, title = _a.title, userUrl = _a.userUrl, avatarSrc = _a.avatarSrc, published = _a.published;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\r\n            react_1.default.createElement(UserLink_1.UserLink, { username: username, userUrl: userUrl, avatarSrc: avatarSrc }),\r\n            react_1.default.createElement(CreatedAt_1.CreatedAt, { published: published })),\r\n        react_1.default.createElement(Title_1.Title, { subreddit: subreddit, title: title })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ })

})