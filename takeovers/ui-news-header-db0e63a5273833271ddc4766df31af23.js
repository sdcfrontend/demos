(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define('ui-news-header',[], factory);
	else if(typeof exports === 'object')
		exports["ui-news-header"] = factory();
	else
		root["ui-news-header"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ui-news-header/src/components/get-max-z-index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ui-news-header/src/components/get-max-z-index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(root) {
  var z = Array.from(root.querySelectorAll('div,section,header,iframe,img,button')).map(function (item) {
    return Number(window.getComputedStyle(item, null).zIndex);
  }).filter(function (zIndex) {
    return !Number.isNaN(zIndex);
  });

  // Math.max() returns -infinity when nothing is passed in.
  if (z.length === 0) {
    return 0;
  }
  return Math.max.apply(Math, _toConsumableArray(z));
}

/***/ }),

/***/ "./node_modules/ui-news-header/src/components/more.js":
/*!************************************************************!*\
  !*** ./node_modules/ui-news-header/src/components/more.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(items, style) {
  var num = items.filter(function (item) {
    return item.offsetTop > 0;
  }).length;
  style.textContent = "\n    header[data-role=\"ui-news-header\"] [data-role=\"more-nav-items\"] li:nth-last-child(-n+".concat(num, "){display: block}\n    header[data-role=\"ui-news-header\"] [data-role=\"main-nav-items\"] li:nth-last-child(-n+").concat(num, "){visibility:hidden}\n  ");
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************************************!*\
  !*** ./node_modules/ui-news-header/src/components/ui-news-header.js ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more */ "./node_modules/ui-news-header/src/components/more.js");
/* harmony import */ var _get_max_z_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-max-z-index */ "./node_modules/ui-news-header/src/components/get-max-z-index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(rootElement) {
  if (!rootElement) {
    return;
  }
  NodeList.prototype.filter = Array.prototype.filter;

  /* show/hide expandable menus */
  var navcontrols = rootElement.querySelectorAll('[aria-expanded]');
  var lockClass = rootElement.dataset.lockClass;
  navcontrols.forEach(function (item) {
    item.onclick = function (ev) {
      var target = ev.currentTarget;
      var expanded = target.getAttribute('aria-expanded') === 'true';
      target.setAttribute('aria-expanded', !expanded);
      rootElement.style.setProperty('--header-z-index', !expanded ? (0,_get_max_z_index__WEBPACK_IMPORTED_MODULE_1__["default"])(document.body) + 1 : null);
      if (target.dataset.role === 'nav-button') {
        rootElement.style.setProperty('--mobile-nav-offset', rootElement.offsetTop);
        target.setAttribute('aria-label', target.dataset["ariaLabel".concat(expanded ? 'Open' : 'Close')]);
        document.body.classList[!expanded ? 'add' : 'remove'](lockClass);
      }
    };
  });

  /* hide all expandable menus when clicked outside */
  document.body.addEventListener('click', function (ev) {
    if (!rootElement.contains(ev.target)) {
      navcontrols.forEach(function (item) {
        item.setAttribute('aria-expanded', 'false');
        rootElement.style.setProperty('--header-z-index', null);
      });
    }
  });

  /* hide all expandable menus when focus moves outside */
  document.body.addEventListener('focus', function (ev) {
    if (!rootElement.contains(ev.target)) {
      navcontrols.forEach(function (item) {
        item.setAttribute('aria-expanded', 'false');
        rootElement.style.setProperty('--header-z-index', null);
      });
    }
  }, true);

  /* show the correct number of more menu items */
  var style = document.createElement('style');
  rootElement.appendChild(style);
  var nav = rootElement.querySelector('[data-role="main-nav-items"]');
  var items = nav.querySelectorAll('li');
  if (window.ResizeObserver) {
    var resizeObserver = new window.ResizeObserver(function () {
      (0,_more__WEBPACK_IMPORTED_MODULE_0__["default"])(items, style);
    });
    resizeObserver.observe(nav);
  } else {
    (0,_more__WEBPACK_IMPORTED_MODULE_0__["default"])(items, style);
    window.addEventListener('resize', function () {
      (0,_more__WEBPACK_IMPORTED_MODULE_0__["default"])(items, style);
    });
  }
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});

//# sourceMappingURL=ui-news-header.js.map