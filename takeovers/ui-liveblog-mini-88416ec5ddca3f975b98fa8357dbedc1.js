(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define('ui-liveblog-mini',[], factory);
	else if(typeof exports === 'object')
		exports["ui-liveblog-mini"] = factory();
	else
		root["ui-liveblog-mini"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ui-liveblog-mini/src/components/posts.js":
/*!***************************************************************!*\
  !*** ./node_modules/ui-liveblog-mini/src/components/posts.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAttr: () => (/* binding */ setAttr),
/* harmony export */   setText: () => (/* binding */ setText),
/* harmony export */   updatePost: () => (/* binding */ updatePost)
/* harmony export */ });
function setText(el, value) {
  if (!value) {
    return;
  }
  if (el.textContent.trim() !== value.trim()) {
    el.textContent = value;
  }
}
function setAttr(el, attr, value) {
  if (el.getAttribute(attr) !== attr) {
    el.setAttribute(attr, value);
  }
}
function updatePost(item, post) {
  setAttr(item, 'data-post-id', post.postId);
  setText(item.querySelector('a'), post.title);
  setAttr(item.querySelector('a'), 'href', "".concat(post.link, "#").concat(post.postId));
  setText(item.querySelector('[data-role="time-short"]'), post.time);
  setText(item.querySelector('[data-role="time-long"]'), post.timeA11y);
}

/***/ }),

/***/ "./node_modules/ui-liveblog-mini/src/components/tracking.js":
/*!******************************************************************!*\
  !*** ./node_modules/ui-liveblog-mini/src/components/tracking.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTracking)
/* harmony export */ });
function setTracking(rootElement) {
  var posts = rootElement.querySelectorAll('[data-post-id]');
  if (!posts || posts.length === 0) {
    return;
  }
  posts.forEach(function (post, index) {
    post.dataset.trackingLabel = "liveblog-mini/post/".concat(index + 1);
  });
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
/*!**************************************************************************!*\
  !*** ./node_modules/ui-liveblog-mini/src/components/ui-liveblog-mini.js ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts */ "./node_modules/ui-liveblog-mini/src/components/posts.js");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracking */ "./node_modules/ui-liveblog-mini/src/components/tracking.js");



/**
 * Initialises the component when passed an element
 *
 * @param {HTMLNode} rootElement The component dom node
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(rootElement) {
  if (!rootElement) {
    return;
  }
  var updateInterval = parseInt(rootElement.dataset.updateInterval || '10000', 10);
  var template = rootElement.querySelector('template').content.firstElementChild;
  var parent = rootElement.closest('[data-role="parent"]');
  (0,_tracking__WEBPACK_IMPORTED_MODULE_1__["default"])(rootElement);
  function update(data) {
    if (!data) {
      console.error('No data');
    }
    if (parent) {
      // switch parent layout if no posts, and hide component
      parent.dataset.blogState = data.posts.length === 0 ? 0 : 1;
      rootElement.classList[data.posts.length === 0 ? 'add' : 'remove']('ui-liveblog-mini--hidden');
    }

    // update title
    var title = rootElement.querySelector('[data-role="title"]');
    if (title) {
      (0,_posts__WEBPACK_IMPORTED_MODULE_0__.setText)(title, data.title);
    }

    // update posts
    // remove items if theyre no longer in the data
    var items = Array.from(rootElement.querySelectorAll('[data-post-id]'));
    items.forEach(function (item, index) {
      if (!data.posts[index]) {
        item.parentNode.removeChild(item);
      }
    });
    data.posts.forEach(function (post, index) {
      post.link = data.link;
      if (items[index]) {
        items[index].dataset.newPost = Number(items[index].dataset.postId) !== post.postId;
        (0,_posts__WEBPACK_IMPORTED_MODULE_0__.updatePost)(items[index], post);
      } else {
        var clone = template.cloneNode(true);
        rootElement.querySelector('ul').appendChild(clone);
        (0,_posts__WEBPACK_IMPORTED_MODULE_0__.updatePost)(clone, post);
      }
    });
    (0,_tracking__WEBPACK_IMPORTED_MODULE_1__["default"])(rootElement);
  }
  var endpoint = rootElement.dataset.endpoint;
  if (!endpoint) {
    console.error('No endpoint set');
    return;
  }
  function callEndpoint() {
    fetch(endpoint).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.checksum !== rootElement.dataset.checksum && json.timestamp > Number(rootElement.dataset.timestamp)) {
        if (!json.posts) {
          // article removed from basket so stop polling and remove blog
          clearInterval(rootElement.updateInterval);
          parent.dataset.blogState = 0;
          return;
        }
        update(json);
        rootElement.dataset.timestamp = json.timestamp;
      }
    })["catch"](function (error) {
      console.error(error);
    });
  }
  // call endpoint instantly to mitigate caching issues
  callEndpoint();
  rootElement.updateInterval = setInterval(callEndpoint, updateInterval);
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});

//# sourceMappingURL=ui-liveblog-mini.js.map