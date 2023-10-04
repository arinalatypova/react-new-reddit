webpackHotUpdate("main",{

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\");\r\nfunction CommentFormContainer() {\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    function handleChange(event) {\r\n        dispatch((0, store_1.updateComment)(event.target.value));\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit });\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ })

})