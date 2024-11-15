(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define('ui-weather-widget',[], factory);
	else if(typeof exports === 'object')
		exports["ui-weather-widget"] = factory();
	else
		root["ui-weather-widget"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ui-weather-widget/src/components/_fetch-data.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ui-weather-widget/src/components/_fetch-data.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (url, options) {
  return fetch(url, options).then(function (resp) {
    return resp.json();
  })["catch"](function (err) {
    return console.error(err);
  });
});

/***/ }),

/***/ "./node_modules/ui-weather-widget/src/components/_get-location-id.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ui-weather-widget/src/components/_get-location-id.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (key, fallback) {
  var id = fallback;
  var locale = window.localStorage.getItem(key);
  if (locale) {
    locale = JSON.parse(locale);
    if (locale.id) {
      id = locale.id;
    }
  }
  return id;
});

/***/ }),

/***/ "./node_modules/ui-weather-widget/src/components/_get-settings.js":
/*!************************************************************************!*\
  !*** ./node_modules/ui-weather-widget/src/components/_get-settings.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (key, fallback) {
  var tempUnit = fallback;
  var settings = window.localStorage.getItem(key);
  if (settings) {
    settings = JSON.parse(settings);
    settings.find(function (setting) {
      return setting.name === 'Temperature';
    }).options.find(function (option) {
      if (option.chosen) {
        tempUnit = option.name;
      }
      return null;
    });
  }
  return tempUnit;
});

/***/ }),

/***/ "./node_modules/ui-weather-widget/src/components/_renderHTML.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ui-weather-widget/src/components/_renderHTML.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_weather-lookup */ "./node_modules/ui-weather-widget/src/components/_weather-lookup.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (forecast, tempUnits, date, domain) {
  return "<a href=\"".concat(domain, "/weather\" class=\"ui-weather-widget__wrapper\">\n  <div class=\"ui-weather-widget-summary__date\">\n    ").concat(date, "\n  </div>\n  <div class=\"ui-weather-widget-summary__weather-type\">\n      <img alt=\"").concat(_weather_lookup__WEBPACK_IMPORTED_MODULE_0__["default"][forecast.weatherType].description, "\" src=\"").concat(domain, "/resources/icons/").concat(_weather_lookup__WEBPACK_IMPORTED_MODULE_0__["default"][forecast.weatherType].filePath, ".svg?bypass-service-worker\">  \n  </div>\n  <div class=\"ui-weather-widget-summary__temp-and-precip\">\n      <div class=\"ui-weather-widget-summary__temp--max\">\n        ").concat(forecast[tempUnits === '°C' ? 'maxTemperature' : 'maxTemperatureF'], "\xB0\n      </div>\n      <div class=\"ui-weather-widget-summary__temp--min\">\n        ").concat(forecast[tempUnits === '°C' ? 'minTemperature' : 'minTemperatureF'], "\xB0\n      </div>\n  </div>\n</a>");
});

/***/ }),

/***/ "./node_modules/ui-weather-widget/src/components/_weather-lookup.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ui-weather-widget/src/components/_weather-lookup.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  0: {
    filePath: 'clear-sky',
    description: 'clear skies'
  },
  1: {
    filePath: 'sunny',
    description: 'sunny'
  },
  2: {
    filePath: 'partly-cloudy-night',
    description: 'partly cloudy'
  },
  3: {
    filePath: 'sunny-intervals',
    description: 'partly cloudy'
  },
  4: {
    filePath: 'duststorm',
    description: 'dusty'
  },
  5: {
    filePath: 'mist',
    description: 'misty'
  },
  6: {
    filePath: 'fog',
    description: 'foggy'
  },
  7: {
    filePath: 'cloud',
    description: 'cloudy'
  },
  8: {
    filePath: 'heavy-cloud',
    description: 'heavy clouds'
  },
  9: {
    filePath: 'light-rain-night',
    description: 'light rain'
  },
  10: {
    filePath: 'light-rain-day',
    description: 'light rain'
  },
  11: {
    filePath: 'drizzle',
    description: 'drizzly'
  },
  12: {
    filePath: 'light-rain',
    description: 'light rain'
  },
  13: {
    filePath: 'heavy-rain-night',
    description: 'heavy rain'
  },
  14: {
    filePath: 'heavy-rain-day',
    description: 'heavy rain'
  },
  15: {
    filePath: 'heavy-rain',
    description: 'heavy rain'
  },
  16: {
    filePath: 'sleet-shower-night',
    description: 'sleet showers'
  },
  17: {
    filePath: 'sleet-shower-day',
    description: 'sleet showers'
  },
  18: {
    filePath: 'sleet',
    description: 'sleet'
  },
  19: {
    filePath: 'hail-shower-night',
    description: 'hail showers'
  },
  20: {
    filePath: 'hail-shower-day',
    description: 'hail showers'
  },
  21: {
    filePath: 'hail',
    description: 'hail'
  },
  22: {
    filePath: 'light-snow-shower-night',
    description: 'light snow showers'
  },
  23: {
    filePath: 'light-snow-shower-day',
    description: 'light snow showers'
  },
  24: {
    filePath: 'light-snow',
    description: 'light snow'
  },
  25: {
    filePath: 'heavy-snow-shower-night',
    description: 'heavy snow showers'
  },
  26: {
    filePath: 'heavy-snow-shower-day',
    description: 'heavy snow showers'
  },
  27: {
    filePath: 'heavy-snow',
    description: 'heavy snow'
  },
  28: {
    filePath: 'thundery-shower-night',
    description: 'thundery showers'
  },
  29: {
    filePath: 'thundery-shower-day',
    description: 'thundery showers'
  },
  30: {
    filePath: 'thunderstorm',
    description: 'thunderstorm'
  },
  31: {
    filePath: 'thunder-rain',
    description: 'thunder and rain'
  },
  32: {
    filePath: 'mist',
    description: 'misty'
  },
  33: {
    filePath: 'fog',
    description: 'foggy'
  },
  34: {
    filePath: 'cloud',
    description: 'cloudy'
  },
  35: {
    filePath: 'heavy-cloud',
    description: 'heavy clouds'
  },
  36: {
    filePath: 'light-rain',
    description: 'light rain'
  },
  37: {
    filePath: 'heavy-rain',
    description: 'heavy rain'
  },
  38: {
    filePath: 'sleet',
    description: 'sleet'
  },
  39: {
    filePath: 'hail',
    description: 'hail'
  },
  40: {
    filePath: 'light-snow',
    description: 'light snow'
  },
  41: {
    filePath: 'heavy-snow',
    description: 'heavy snow'
  }
});

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
/*!****************************************************************************!*\
  !*** ./node_modules/ui-weather-widget/src/components/ui-weather-widget.js ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_location_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_get-location-id */ "./node_modules/ui-weather-widget/src/components/_get-location-id.js");
/* harmony import */ var _get_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_get-settings */ "./node_modules/ui-weather-widget/src/components/_get-settings.js");
/* harmony import */ var _renderHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_renderHTML */ "./node_modules/ui-weather-widget/src/components/_renderHTML.js");
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_fetch-data */ "./node_modules/ui-weather-widget/src/components/_fetch-data.js");




/**
 * Initialises the component when passed an element
 *
 * @param {HTMLNode} rootElement The component dom node
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(rootElement) {
  if (!rootElement || !window.fetch) {
    return;
  }
  var config = Object.assign({
    domain: 'https://news.sky.com'
  }, rootElement.dataset);
  if (!config.api || !config.auth) {
    console.error('Missing one or more required config properties.');
    return;
  }
  var locationId = (0,_get_location_id__WEBPACK_IMPORTED_MODULE_0__["default"])('location', 51782); // defaults to 51782 London
  var tempUnits = (0,_get_settings__WEBPACK_IMPORTED_MODULE_1__["default"])('settings', '°C'); // defaults to C
  var date = new Date();
  var formattedDate = date.toLocaleDateString(['en-GB'], {
    month: 'short',
    day: 'numeric'
  });
  (0,_fetch_data__WEBPACK_IMPORTED_MODULE_3__["default"])("".concat(config.api).concat(locationId, "?v=1"), {
    method: 'GET',
    headers: {
      Authorization: config.auth
    }
  }).then(function (json) {
    var forecast = json.dailyForecast[1];
    rootElement.innerHTML = (0,_renderHTML__WEBPACK_IMPORTED_MODULE_2__["default"])(forecast, tempUnits, formattedDate, config.domain);
  })["catch"](function (err) {
    return err;
  });
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});

//# sourceMappingURL=ui-weather-widget.js.map