webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nfunction usePostData() {\r\n    var _a = react_1.default.useState([]), postData = _a[0], setPostData = _a[1];\r\n    var token = react_1.default.useContext(tokenContext_1.tokenContext);\r\n    react_1.default.useEffect(function () {\r\n        if (token) {\r\n            axios_1.default\r\n                .get('https://oauth.reddit.com/best.json?sr_detail=true', {\r\n                headers: { Authorization: \"Bearer \".concat(token) },\r\n            })\r\n                .then(function (res) {\r\n                var data = res.data.data.children;\r\n                var postArray = data.map(function (data) { return data.data; });\r\n                console.log(postArray);\r\n                setPostData(postArray);\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, [token]);\r\n    return [postData];\r\n}\r\nexports.usePostData = usePostData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

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