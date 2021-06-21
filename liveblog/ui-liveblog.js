(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ui-liveblog"] = factory();
	else
		root["ui-liveblog"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/modules/components";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	/**
	 * Initialises the component when passed an element
	 *
	 * @param {HTMLNode} rootElement The component dom node
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (rootElement) {
	  if (!rootElement) {
	    return;
	  }

	  var channelId = rootElement.dataset.channelId;
	  if (!channelId && !window.NcPosts) {
	    return;
	  }

	  window.NcPosts.hookOptionsAfterDefaults(function (options) {
	    var obj = {
	      shouldRun: function shouldRun() {
	        return true;
	      },
	      updateElement: function updateElement(state, postData, element, container) {
	        // add post type
	        if (postData.content.skyPostType) {
	          container.parentNode.setAttribute('data-post-type', postData.content.skyPostType);
	        }

	        // format date
	        var time = new Date(postData.created * 1000);
	        container.querySelector('.ncpost-timestamp').textContent = time.toLocaleTimeString(['en-GB'], { hour: '2-digit', minute: '2-digit' });

	        // add icon
	        var div = document.createElement('div');
	        var iconPath = rootElement.dataset.iconPath;

	        div.className = 'ncpost-icon';
	        if (postData.content.skyIconName && iconPath) {
	          div.style.cssText = 'background-image: url(' + iconPath + postData.content.skyIconName + '.png)';
	        }
	        return div;
	      }
	    };
	    options.postRenderers.push(obj);
	  });

	  window.blog = window.NcPosts.start({
	    channelId: channelId,
	    container: document.querySelector('[data-role="ui-liveblog-container"]'),
	    showMoreElement: document.querySelector('[data-role="ui-liveblog-load-more-button"]'),
	    tenantKey: 'sky',
	    extensionContainer: window.NcLiveCenterExtensions,
	    extraPostRenderers: [new window.SportIconsRenderer()]
	  });
	};

	module.exports = exports['default'];

/***/ })
/******/ ])
});
;