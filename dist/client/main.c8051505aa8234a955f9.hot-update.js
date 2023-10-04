webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar postContext_1 = __webpack_require__(/*! ../context/postContext */ \"./src/shared/context/postContext.tsx\");\r\nfunction CardsList() {\r\n    var postData = react_1.default.useContext(postContext_1.postContext);\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList }, postData.map(function (_a) {\r\n        var data = _a.data;\r\n        return (react_1.default.createElement(Card_1.Card, __assign({ key: data.id }, {\r\n            thumbnail: data.thumbnail,\r\n            title: data.title,\r\n            createdAt: data.created_utc,\r\n            username: data.subreddit_name_prefixed,\r\n            icon_img: data.sr_detail.icon_img,\r\n            score: data.score,\r\n            comments: data.num_comments,\r\n            postURL: data.permalink,\r\n            userUrl: data.url,\r\n            upvote_ratio: data.upvote_ratio,\r\n            postId: data.id,\r\n        })));\r\n    })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ })

})