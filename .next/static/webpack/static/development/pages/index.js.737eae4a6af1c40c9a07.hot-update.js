webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Image/index.js":
/*!***********************************!*\
  !*** ./components/Image/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./components/Image/data.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/spencerpope/Sites/vanillajellaba/components/Image/index.js";



var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "Image",
  componentId: "de1u7y-0"
})(["width:100%;"]);
var randomBlock = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "random content");
var ImgArray = _data__WEBPACK_IMPORTED_MODULE_1__["data"].map(function (_ref) {
  var img = _ref.img;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: "/static/imgs/".concat(img),
    alt: "Jellaba pose - ".concat(img),
    key: "".concat(img),
    loading: "lazy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });
});
function ImageComponent() {
  console.log(ImgArray); // ImgArray.splice(1, 0, randomBlock);

  return ImgArray;
}

/***/ })

})
//# sourceMappingURL=index.js.737eae4a6af1c40c9a07.hot-update.js.map