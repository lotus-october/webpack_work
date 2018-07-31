/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugin_bubbly_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin/bubbly-bg */ \"./src/js/plugin/bubbly-bg.js\");\n/* harmony import */ var _plugin_bubbly_bg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugin_bubbly_bg__WEBPACK_IMPORTED_MODULE_0__);\n\n\nbubbly({\n  colorStart: '#fff4e6',\n  colorStop: '#ffe9e4',\n  blur:1,\n  compose: 'source-over',\n  bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`\n});\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/plugin/bubbly-bg.js":
/*!************************************!*\
  !*** ./src/js/plugin/bubbly-bg.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.bubbly = function (config) {\n    const c = config || {};\n    const r = () => Math.random();\n    const canvas = c.canvas || document.createElement(\"canvas\");\n    let width = canvas.width;\n    let height = canvas.height;\n    if (canvas.parentNode === null) {\n        canvas.setAttribute(\"style\", \"position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;\");\n        width = canvas.width = window.innerWidth;\n        height = canvas.height = window.innerHeight;\n        document.body.appendChild(canvas);\n    }\n    const context = canvas.getContext(\"2d\");\n    context.shadowColor = c.shadowColor || \"#fff\";\n    context.shadowBlur = c.blur || 4;\n    const gradient = context.createLinearGradient(0, 0, width, height);\n    gradient.addColorStop(0, c.colorStart || \"#2AE\");\n    gradient.addColorStop(1, c.colorStop || \"#17B\");\n    const nrBubbles = c.bubbles || Math.floor((width + height) * 0.02);\n    const bubbles = [];\n    for (let i = 0; i < nrBubbles; i++) {\n        bubbles.push({\n            f: (c.bubbleFunc || (() => `hsla(0, 0%, 100%, ${r() * 0.1})`)).call(), // fillStyle\n            x: r() * width, // x-position\n            y: r() * height, // y-position\n            r: (c.radiusFunc || (() => 4 + r() * width / 25)).call(), // radius\n            a: (c.angleFunc || (() => r() * Math.PI * 2)).call(), // angle\n            v: (c.velocityFunc || (() => 0.1 + r() * 0.5)).call() // velocity\n        });\n    }\n    (function draw() {\n        if (canvas.parentNode === null) {\n            return cancelAnimationFrame(draw)\n        }\n        if (c.animate !== false) {\n            requestAnimationFrame(draw);\n        }\n        context.globalCompositeOperation = \"source-over\";\n        context.fillStyle = gradient;\n        context.fillRect(0, 0, width, height);\n        context.globalCompositeOperation = c.compose || \"lighter\";\n        bubbles.forEach(bubble => {\n            context.beginPath();\n            context.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);\n            context.fillStyle = bubble.f;\n            context.fill();\n            // update positions for next draw\n            bubble.x += Math.cos(bubble.a) * bubble.v;\n            bubble.y += Math.sin(bubble.a) * bubble.v;\n            if (bubble.x - bubble.r > width) {\n                bubble.x = -bubble.r;\n            }\n            if (bubble.x + bubble.r < 0) {\n                bubble.x = width + bubble.r;\n            }\n            if (bubble.y - bubble.r > height) {\n                bubble.y = -bubble.r;\n            }\n            if (bubble.y + bubble.r < 0) {\n                bubble.y = height + bubble.r;\n            }\n        });\n    })();\n};\n\n//# sourceURL=webpack:///./src/js/plugin/bubbly-bg.js?");

/***/ })

/******/ });