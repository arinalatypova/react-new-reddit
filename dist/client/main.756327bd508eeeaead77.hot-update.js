webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserLink = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar userlink_css_1 = __importDefault(__webpack_require__(/*! ./userlink.css */ \"./src/shared/CardsList/Card/TextContent/UserLink/userlink.css\"));\r\nfunction UserLink(_a) {\r\n    var username = _a.username, userUrl = _a.userUrl, avatarSrc = _a.avatarSrc;\r\n    return (react_1.default.createElement(\"div\", { className: userlink_css_1.default.userLink },\r\n        react_1.default.createElement(\"img\", { src: \"https://cdn.dribbble.com/uploads/47401/original/0bbab93269310c5391b5da608c718a40.jpg?1686152330&resize=96x96&vertical=center\", alt: \"avatar\", className: userlink_css_1.default.avatar }),\r\n        react_1.default.createElement(\"a\", { href: userUrl || '#user-url', className: userlink_css_1.default.username }, username || 'Дмитрий Гришин')));\r\n}\r\nexports.UserLink = UserLink;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx?");

/***/ })

})