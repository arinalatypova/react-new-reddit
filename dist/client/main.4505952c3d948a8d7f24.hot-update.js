webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\r\nvar ShareButton_1 = __webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/Controls/ShareButton/index.ts\");\r\nvar SaveButton_1 = __webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/Controls/SaveButton/index.ts\");\r\nvar CommentButton_1 = __webpack_require__(/*! ./CommentButton */ \"./src/shared/CardsList/Card/Controls/CommentButton/index.ts\");\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts\");\r\nfunction Controls(_a) {\r\n    var score = _a.score;\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { score: score }),\r\n        react_1.default.createElement(CommentButton_1.CommentButton, null),\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\r\n            react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n            react_1.default.createElement(SaveButton_1.SaveButton, null))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ })

})