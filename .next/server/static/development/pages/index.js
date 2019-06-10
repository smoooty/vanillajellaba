module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Image/data.js":
/*!**********************************!*\
  !*** ./components/Image/data.js ***!
  \**********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [{
  img: '54277691_168202490766856_489589128779108604_n.jpg'
}, {
  img: '54457908_2001172696857063_4507102808256555868_n.jpg'
}, {
  img: '54512076_865216823839121_3014137337859414784_n.jpg'
}, {
  img: '54513899_173621980292241_4263423448036847179_n.jpg'
}, {
  img: '55776552_992778367577435_8673699090837737304_n.jpg'
}, {
  img: '55872674_863717567313811_2155033896483922674_n.jpg'
}, {
  img: '55876734_809965462693838_1727247818817532826_n.jpg'
}, {
  img: '56285382_286277798932650_1393038751658221268_n.jpg'
}, {
  img: '56301934_130562804773768_2352679832498462702_n.jpg'
}, {
  img: '56497164_319974358657709_8130960975569623021_n.jpg'
}, {
  img: '56571266_331407757511495_2907764785918474581_n.jpg'
}, {
  img: '56732828_469392813801561_1070515116050666537_n.jpg'
}, {
  img: '56734966_746732512394364_3794650040378563665_n.jpg'
}, {
  img: '56749578_357576241529666_5841161825581961745_n.jpg'
}, {
  img: '57000903_433897164028506_6851489559884321482_n.jpg'
}, {
  img: '57076391_353677678575869_2945686293512624844_n.jpg'
}, {
  img: '57188289_361120047857687_1879920976108240240_n.jpg'
}, {
  img: '57234214_294906141437887_2784372372424103684_n.jpg'
}, {
  img: '57262946_402484720338269_7465063616825047447_n.jpg'
}, {
  img: '57328223_326645521380587_7017750398960966959_n.jpg'
}, {
  img: '57410801_327092564663506_2766239698926122991_n.jpg'
}, {
  img: '57506196_205685047073828_3265035863039191725_n.jpg'
}, {
  img: '58409961_325315348114322_6569577435236448710_n.jpg'
}, {
  img: '59429564_291108275157988_970519274753850631_n.jpg'
}, {
  img: '59692197_141933733612240_5984925675592434530_n.jpg'
}, {
  img: '60027276_450652419032749_9194552442315435333_n.jpg'
}, {
  img: '60077539_449729149172707_3794987988079804917_n.jpg'
}, {
  img: '60190874_448914289193770_6814824086998403724_n.jpg'
}, {
  img: '60322581_651544425316728_8343040425412539744_n.jpg'
}, {
  img: '60419402_2284656551628137_7685521375550831975_n.jpg'
}, {
  img: '60546334_1158518797652273_8455286232447658629_n.jpg'
}, {
  img: '60586986_1221621494661463_1610353139766431613_n.jpg'
}, {
  img: '60664273_2426869324218265_9004212765800321300_n.jpg'
}, {
  img: '60818508_377601759548591_7205059389637077505_n.jpg'
}, {
  img: '60936205_2350580091885568_7554149857295756563_n.jpg'
}];

/***/ }),

/***/ "./components/Image/index.js":
/*!***********************************!*\
  !*** ./components/Image/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./components/Image/data.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/spencerpope/Sites/vanillajellaba/components/Image/index.js";



var Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Image",
  componentId: "de1u7y-0"
})(["width:100%;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return _data__WEBPACK_IMPORTED_MODULE_1__["data"].map(function (_ref) {
    var img = _ref.img;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
      src: "/static/imgs/".concat(img),
      alt: "Jellaba pose - ".concat(img),
      key: "".concat(img),
      loading: "lazy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  });
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Image */ "./components/Image/index.js");
var _jsxFileName = "/Users/spencerpope/Sites/vanillajellaba/pages/index.js";




var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1cvwks4-0"
})(["font-size:50px;color:", ";font-family:skrappa;text-transform:uppercase;", " margin:0;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, ''
/* writing-mode: vertical-lr; */
);
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Grid",
  componentId: "sc-1cvwks4-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "preload",
    href: "/static/fonts/skrappa.woff2",
    as: "font",
    type: "font/woff2",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\n        @font-face {\n            font-family: 'skrappa';\n            src: url('/static/fonts/skrappa.woff2') format('woff2'),\n                url('/static/fonts/skrappa.woff') format('woff');\n            font-weight: normal;\n            font-style: normal;\n        }\n        ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Jellaba"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/spencerpope/Sites/vanillajellaba/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map