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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/scss/app.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/scss/app.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* autoprefixer: on */\nheader h1 {\n  color: blue;\n  display: -ms-grid;\n  display: grid;\n  font-size: 50px; }\n\n::-webkit-input-placeholder {\n  color: gray; }\n\n:-ms-input-placeholder {\n  color: gray; }\n\n::-ms-input-placeholder {\n  color: gray; }\n\n::placeholder {\n  color: gray; }\n\nh2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background: -webkit-linear-gradient(top, white, black);\n  background: -o-linear-gradient(top, white, black);\n  background: linear-gradient(to bottom, white, black); }\n\n.bg-test {\n  width: 200px;\n  height: 200px;\n  background-image: url(../img/test2.jpg); }\n", "", {"version":3,"sources":["/Users/ysekiguchi/_webpack_work/webpack_work/src/scss/app.scss"],"names":[],"mappings":"AAGA,sBAAsB;AACtB;EAEI,YAAW;EACX,kBAAa;EAAb,cAAa;EACb,gBAAe,EAChB;;AAIH;EACE,YAAW,EACZ;;AAFD;EACE,YAAW,EACZ;;AAFD;EACE,YAAW,EACZ;;AAFD;EACE,YAAW,EACZ;;AAED;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oFAAoD;EAApD,uDAAoD;EAApD,kDAAoD;EAApD,qDAAoD,EACrD;;AAED;EACE,aAAY;EACZ,cAAa;EACb,wCAAuC,EACxC","file":"app.scss","sourcesContent":["@charset \"UTF-8\";\n\n\n/* autoprefixer: on */\nheader {\n  h1 {\n    color: blue;\n    display: grid;\n    font-size: 50px;\n  }\n\n}\n\n::placeholder {\n  color: gray;\n}\n\nh2 {\n  display: flex;\n  background: linear-gradient(to bottom, white, black);\n}\n\n.bg-test {\n  width: 200px;\n  height: 200px;\n  background-image: url(../img/test2.jpg);\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

/***/ "./src/img/test1.jpg":
/*!***************************!*\
  !*** ./src/img/test1.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bubblyBg = __webpack_require__(/*! ./plugin/bubbly-bg */ "./src/js/plugin/bubbly-bg.js");

var _bubblyBg2 = _interopRequireDefault(_bubblyBg);

__webpack_require__(/*! ../scss/app.scss */ "./src/scss/app.scss");

var _test = __webpack_require__(/*! ../img/test1.jpg */ "./src/img/test1.jpg");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * option
 * animate: false, // default is true
 * blur: 1, // default is 4
 * bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`, // default is () => `hsla(0, 0%, 100%, ${r() * 0.1})`)
 * bubbles: 100, // default is Math.floor((canvas.width + canvas.height) * 0.02);
 * canvas: document.querySelector("#background"), // default is created and attached
 * colorStart: "#4c004c", // default is blue-ish
 * colorStop: "#1a001a",// default is blue-ish
 * compose: "lighter", // default is "lighter"
bubbly({
  colorStart: '#fff',
  colorStop: '#fff',
  bubbles: 10,
  blur: 1,
  bubbleSizeAdjust: 60,
  compose: 'source-over',
  //bubbleFunc:() => `hsla(178, 100%, 58%, .6)`
  bubbleFunc:() => `hsla(178, 98%, 36%, .6)`
});
 */

var img_test1 = document.createElement('img'); //import pluginBubbly from './plugin/bubbly-bg';

img_test1.src = _test2.default;
document.getElementById('test1_jpg').appendChild(img_test1);

/***/ }),

/***/ "./src/js/plugin/bubbly-bg.js":
/*!************************************!*\
  !*** ./src/js/plugin/bubbly-bg.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.bubbly = function (config) {
    var c = config || {};
    var r = function r() {
        return Math.random();
    };
    var canvas = c.canvas || document.createElement("canvas");
    var width = canvas.width;
    var height = canvas.height;
    if (canvas.parentNode === null) {
        canvas.setAttribute("style", "position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;");
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
    }
    var context = canvas.getContext("2d");
    context.shadowColor = c.shadowColor || "#fff";
    context.shadowBlur = c.blur || 4;
    var gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, c.colorStart || "#2AE");
    gradient.addColorStop(1, c.colorStop || "#17B");
    var nrBubbles = c.bubbles || Math.floor((width + height) * 0.02);
    var bubbles = [];
    for (var i = 0; i < nrBubbles; i++) {
        bubbles.push({
            f: (c.bubbleFunc || function () {
                return "hsla(0, 0%, 100%, " + r() * 0.1 + ")";
            }).call(), // fillStyle
            x: r() * width, // x-position
            y: r() * height, // y-position
            r: (c.radiusFunc || function () {
                return 4 + r() * width / 25;
            }).call(), // radius
            a: (c.angleFunc || function () {
                return r() * Math.PI * 2;
            }).call(), // angle
            v: (c.velocityFunc || function () {
                return 0.1 + r() * 0.5;
            }).call() // velocity
        });
    }
    (function draw() {
        if (canvas.parentNode === null) {
            return cancelAnimationFrame(draw);
        }
        if (c.animate !== false) {
            requestAnimationFrame(draw);
        }
        context.globalCompositeOperation = "source-over";
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);
        context.globalCompositeOperation = c.compose || "lighter";
        bubbles.forEach(function (bubble) {
            context.beginPath();
            context.arc(bubble.x, bubble.y, bubble.r + c.bubbleSizeAdjust, 0, Math.PI * 2);
            context.fillStyle = bubble.f;
            context.fill();
            // update positions for next draw
            bubble.x += Math.cos(bubble.a) * bubble.v;
            bubble.y += Math.sin(bubble.a) * bubble.v;
            if (bubble.x - bubble.r > width) {
                bubble.x = -bubble.r;
            }
            if (bubble.x + bubble.r < 0) {
                bubble.x = width + bubble.r;
            }
            if (bubble.y - bubble.r > height) {
                bubble.y = -bubble.r;
            }
            if (bubble.y + bubble.r < 0) {
                bubble.y = height + bubble.r;
            }
        });
    })();
};

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./app.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/scss/app.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map