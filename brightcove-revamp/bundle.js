/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/ansi-html-community/index.js":
/*!***********************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/ansi-html-community/index.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = ansiHTML\n\n// Reference to https://github.com/sindresorhus/ansi-regex\nvar _regANSI = /(?:(?:\\u001b\\[)|\\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\\u001b[A-M]/\n\nvar _defColors = {\n  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]\n  black: '000',\n  red: 'ff0000',\n  green: '209805',\n  yellow: 'e8bf03',\n  blue: '0000ff',\n  magenta: 'ff00ff',\n  cyan: '00ffee',\n  lightgrey: 'f0f0f0',\n  darkgrey: '888'\n}\nvar _styles = {\n  30: 'black',\n  31: 'red',\n  32: 'green',\n  33: 'yellow',\n  34: 'blue',\n  35: 'magenta',\n  36: 'cyan',\n  37: 'lightgrey'\n}\nvar _openTags = {\n  '1': 'font-weight:bold', // bold\n  '2': 'opacity:0.5', // dim\n  '3': '<i>', // italic\n  '4': '<u>', // underscore\n  '8': 'display:none', // hidden\n  '9': '<del>' // delete\n}\nvar _closeTags = {\n  '23': '</i>', // reset italic\n  '24': '</u>', // reset underscore\n  '29': '</del>' // reset delete\n}\n\n;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {\n  _closeTags[n] = '</span>'\n})\n\n/**\n * Converts text with ANSI color codes to HTML markup.\n * @param {String} text\n * @returns {*}\n */\nfunction ansiHTML (text) {\n  // Returns the text if the string has no ANSI escape code.\n  if (!_regANSI.test(text)) {\n    return text\n  }\n\n  // Cache opened sequence.\n  var ansiCodes = []\n  // Replace with markup.\n  var ret = text.replace(/\\033\\[(\\d+)m/g, function (match, seq) {\n    var ot = _openTags[seq]\n    if (ot) {\n      // If current sequence has been opened, close it.\n      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast\n        ansiCodes.pop()\n        return '</span>'\n      }\n      // Open tag.\n      ansiCodes.push(seq)\n      return ot[0] === '<' ? ot : '<span style=\"' + ot + ';\">'\n    }\n\n    var ct = _closeTags[seq]\n    if (ct) {\n      // Pop sequence\n      ansiCodes.pop()\n      return ct\n    }\n    return ''\n  })\n\n  // Make sure tags are closed.\n  var l = ansiCodes.length\n  ;(l > 0) && (ret += Array(l + 1).join('</span>'))\n\n  return ret\n}\n\n/**\n * Customize colors.\n * @param {Object} colors reference to _defColors\n */\nansiHTML.setColors = function (colors) {\n  if (typeof colors !== 'object') {\n    throw new Error('`colors` parameter must be an Object.')\n  }\n\n  var _finalColors = {}\n  for (var key in _defColors) {\n    var hex = colors.hasOwnProperty(key) ? colors[key] : null\n    if (!hex) {\n      _finalColors[key] = _defColors[key]\n      continue\n    }\n    if ('reset' === key) {\n      if (typeof hex === 'string') {\n        hex = [hex]\n      }\n      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {\n        return typeof h !== 'string'\n      })) {\n        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')\n      }\n      var defHexColor = _defColors[key]\n      if (!hex[0]) {\n        hex[0] = defHexColor[0]\n      }\n      if (hex.length === 1 || !hex[1]) {\n        hex = [hex[0]]\n        hex.push(defHexColor[1])\n      }\n\n      hex = hex.slice(0, 2)\n    } else if (typeof hex !== 'string') {\n      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')\n    }\n    _finalColors[key] = hex\n  }\n  _setTags(_finalColors)\n}\n\n/**\n * Reset colors.\n */\nansiHTML.reset = function () {\n  _setTags(_defColors)\n}\n\n/**\n * Expose tags, including open and close.\n * @type {Object}\n */\nansiHTML.tags = {}\n\nif (Object.defineProperty) {\n  Object.defineProperty(ansiHTML.tags, 'open', {\n    get: function () { return _openTags }\n  })\n  Object.defineProperty(ansiHTML.tags, 'close', {\n    get: function () { return _closeTags }\n  })\n} else {\n  ansiHTML.tags.open = _openTags\n  ansiHTML.tags.close = _closeTags\n}\n\nfunction _setTags (colors) {\n  // reset all\n  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]\n  // inverse\n  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]\n  // dark grey\n  _openTags['90'] = 'color:#' + colors.darkgrey\n\n  for (var code in _styles) {\n    var color = _styles[code]\n    var oriColor = colors[color] || '000'\n    _openTags[code] = 'color:#' + oriColor\n    code = parseInt(code)\n    _openTags[(code + 10).toString()] = 'background:#' + oriColor\n  }\n}\n\nansiHTML.reset()\n\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/ansi-html-community/index.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/ansi-regex/index.js":
/*!**************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/ansi-regex/index.js ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = ({onlyFirst = false} = {}) => {\n\tconst pattern = [\n\t\t'[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)',\n\t\t'(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-ntqry=><~]))'\n\t].join('|');\n\n\treturn new RegExp(pattern, onlyFirst ? undefined : 'g');\n};\n\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/ansi-regex/index.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/sass-loader/dist/cjs.js!./styles/preview.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/sass-loader/dist/cjs.js!./styles/preview.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/api.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_components_ui_video_player_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!./components/ui-video-player.css */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!./styles/components/ui-video-player.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_components_ui_video_player_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.ui-video-player {\n  width: 100%;\n  margin: 1em auto;\n  max-width: 760px;\n  font-family: \"Sky Text\";\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ui-video-player/./styles/preview.scss?../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!./styles/components/_loading-spinner.css":
/*!**********************************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!./styles/components/_loading-spinner.css ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/api.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@keyframes video-loader {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Loader styles */\n.vjs-loading-spinner {\n  --opacity: 0;\n  width: 48px;\n  height: 48px;\n  border: 5px solid #FFF;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: video-loader 1s linear infinite;\n  margin: 12px;\n  position: absolute;\n  z-index: 5;\n  pointer-events: none;\n  opacity: var(--opacity);\n}\n\n.ui-video-player:not([data-state=\"ready\"]) .vjs-seeking .vjs-loading-spinner,\n.ui-video-player:not([data-state=\"ready\"]) .vjs-waiting .vjs-loading-spinner {\n  --opacity: 1;\n}\n\n/* hide loading text when not loading */\n.ui-video-player:not([data-state=\"loading\"]) .vjs-loading-spinner .vjs-control-text {\n  display: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ui-video-player/./styles/components/_loading-spinner.css?../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!./styles/components/ui-video-player.css":
/*!*********************************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!./styles/components/ui-video-player.css ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/api.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_loading_spinner_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!./_loading-spinner.css */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!./styles/components/_loading-spinner.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_loading_spinner_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* @import \"./_component.css\";\n@import \"./_play-overlay.css\";\n@import \"./_poster.css\";\n@import \"./_title-bar.css\";\n@import \"./_control-bar.css\";\n@import \"./_progress-bar.css\";\n@import \"./_progress-thumbnail.css\";\n@import \"./_volume.css\";\n@import \"./_time.css\";\n@import \"./_live.css\";\n@import \"./_modal.css\";\n@import \"./_ads.css\";\n@import \"./_loading-spinner.css\";\n@import \"./_menu.css\";\n@import \"./_captions.css\";\n@import \"./_pip.css\";\n@import \"./_icons.css\";\n@import \"./_errors.css\";\n@import \"./_app-bridge.css\";\n@import \"./_utils.css\"; */\n\n/* @import \"./_ads.css\"; */\n\n.ui-video-player {\n  --aspect-ratio: 16/9;\n  --video-max-width: 100%;\n  --controls-columns: min-content min-content min-content min-content min-content 1fr min-content min-content min-content min-content min-content;\n  --controls-rows: min-content 1fr min-content min-content;\n  --controls-layout: \n    \"title title title title title title settings volume cc pip fs\" \n    \"play play play play play play play play play play play\" \n    \"scrub scrub scrub scrub scrub scrub scrub scrub scrub scrub scrub\"\n    \"time time time time time time time time time time time\";\n  --controls-bg: linear-gradient(#0000 60%, #000), linear-gradient(to top, #0000 50%, #000000a6);\n  --controls-filter: drop-shadow(0 0 9px rgba(0, 0, 0, 0.9));\n  --controls-column-gap: 0;\n  --controls-inset: clamp(12px, 2cqw, 16px);\n  --tooltip-bg: black;\n  --tooltip-color: white;\n  --color: white;\n  --canvas-color: #111;\n  --captions-bg: rgba(0, 0, 0, 0.9);\n  --captions-z-index: 3;\n  --captions-opacity: 1;\n  --captions-size: clamp(13px, 2.75cqw, 18px);\n  --scrubber-height: 4px;\n  --live-pulse-color: red;\n  --aspect-ratio: 16/9;\n  --body-max-width: 100%;\n  --duration-size: 13px;\n  --tooltip-size: 12px;\n  --button-size: clamp(36px, 6cqw, 46px);\n  --title-size: clamp(16px, 3cqw, 22px);\n  --progress-bar-color: #3083ff;\n  --progress-thumb-hover: 0 0 0 3px rgba(255, 255, 255, 0.25);\n  position: relative;\n  display: grid;\n  justify-items: center;\n  background-color: var(--canvas-color);\n  color: var(--color);\n  overflow: hidden;\n  line-height: 1.2;\n}\n\n.ui-video-player .vjs-hidden,\n.ui-video-player .vjs-menu,\n.ui-video-player .vjs-time-divider,\n.ui-video-player .vjs-title-bar-description,\n.ui-video-player .vjs-icon-placeholder,\n.vjs-remaining-time,\n.vjs-custom-control-spacer,\n.vjs-play-progress .vjs-time-tooltip ,\n.vjs-live-control {\n  display: none;\n}\n\n.ui-video-player-content {\n  position: relative;\n  aspect-ratio: var(--aspect-ratio);\n  transition: aspect-ratio 0.33s;\n  width: 100%;\n  max-width: var(--video-max-width);\n}\n\n.ui-video-player-tag,\n.ui-video-player-poster,\n.ui-video-player-bridge-message,\n.vjs-loading-spinner,\n.vjs-control-bar,\n.vjs-big-play-button,\n.vjs-ima3-ad-container,\n.vjs-error-display,\n.vjs-player-info-modal {\n  position: absolute;\n  inset: 0;\n}\n\n.ui-video-player-poster img {\n  width: 100%;\n}\n\n.ui-video-player-tag {\n  width: 100% !important;\n  height: 100% !important;\n  background-color: var(--canvas-color);\n  container-type: inline-size;\n}\n\n.ui-video-player-tag video {\n  width: 100%;\n  height: 100%;\n}\n\n.vjs-control-text {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n}\n\n/* CONTROLS */\n.ui-video-player .vjs-control-bar {\n  backface-visibility: hidden;\n  transform: translateZ(0);\n  z-index: 2;\n  background: var(--controls-bg);\n  transition: opacity 0.3s ease-in-out;\n  display: grid;\n  grid-template-columns: var(--controls-columns);\n  grid-template-rows: var(--controls-rows);\n  grid-template-areas: var(--controls-layout);\n  column-gap: var(--controls-column-gap);\n  padding: var(--controls-inset);\n  filter: var(--controls-filter);\n  opacity: var(--controls-opacity);\n  will-change: opacity;\n  contain: paint;\n}\n\n.vjs-hide-controls {\n  --controls-opacity: 0;\n}\n\n.ui-video-player .vjs-control-bar button.vjs-button {\n  width: var(--button-size);\n  height: var(--button-size);\n  overflow: hidden;\n  background-image: var(--icon);\n  background-size: var(--icon-size);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  transition: scale 0.2s;\n  transform: scale(var(--scale)) translateZ(0);\n  will-change: transform;\n  -webkit-tap-highlight-color: transparent;\n  margin-inline: 3px;\n  margin-inline: 0.75cqw;\n}\n\n.vjs-button {\n  --icon-size: 95%;\n  --scale: 1;\n}\n\n/* PLAY */\n.ui-video-player-play-buttons {\n  grid-area: play;\n  display: grid;\n  place-content: center;\n  grid-auto-flow: column;\n  grid-auto-columns: min-content;\n  align-items: center;\n  pointer-events: none;\n}\n\n.ui-video-player-play-buttons > * {\n  pointer-events: all;\n}\n\n.vjs-play-control {\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/pause.svg);\n  --button-size: clamp(60px, 11cqw, 78px);\n}\n\n.vjs-play-control.vjs-paused {\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/play.svg);\n}\n\n.vjs-skip-backward-10 {\n  order: -1;\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/back.svg);\n}\n\n.vjs-skip-forward-10 {\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/fwd.svg);\n}\n\n/* PROGRESS */\n.vjs-progress-control {\n  --thumb-box-shadow: 0;\n  padding: clamp(11px, 2%, 14px) 0;\n  grid-area: scrub;\n  cursor: pointer;\n  anchor-name: --scrubber;\n}\n\n.vjs-progress-holder {\n  position: relative;\n  height: var(--scrubber-height);\n  width: 100%;\n  background: rgba(255,255,255, 0.2);\n}\n\n.vjs-progress-holder > * {\n  position: absolute;\n}\n\n.vjs-play-progress {\n  position: relative;\n  background: var(--progress-bar-color);\n  height: 100%;\n}\n\n.vjs-play-progress:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: white;\n  position: absolute;\n  right: -6px;\n  top: -4px;\n  box-shadow: var(--thumb-box-shadow);\n  transition: box-shadow 0.25s;\n}\n\n.vjs-progress-control:hover .vjs-play-progress:after ,\n.vjs-progress-holder:focus .vjs-play-progress:after,\n.vjs-progress-control:hover .vjs-mouse-display,\n.vjs-progress-holder:focus .vjs-mouse-display,\n.vjs-progress-control:hover .vjs-thumbnail-display,\n.vjs-progress-holder:focus .vjs-thumbnail-display {\n  --thumb-box-shadow: var(--progress-thumb-hover);\n  opacity: 1;\n}\n\n.vjs-load-progress {\n  background: rgba(255,255,255, 0.4);\n  height: 100%;\n}\n\n.vjs-mouse-display[class] {\n  background: var(--tooltip-bg);\n  color: var(--tooltip-color);\n  font-size: var(--tooltip-size);\n  position: absolute;\n  height: auto;\n  bottom: 100%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 !important;\n  transition: opacity 0.25s;\n  opacity: 0;\n  pointer-events: none;\n}\n\n/* THUMBNAILS */\n.vjs-thumbnail-display {\n  position: absolute;\n  height: 100px !important;\n  bottom: 100% !important;\n  transition: opacity 0.25s;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.vjs-thumbnail-image {\n  height: 100%;\n  width: auto;\n  display: block;\n  transform: translate(0px, -30px);\n}\n\n/* TIME */\n.ui-video-player-time {\n  grid-area: time;\n  display: flex;\n  font: inherit;\n  font-size: var(--duration-size);\n  color: var(--color);\n  white-space: nowrap;\n  min-height: 1.25em;\n  align-items: center;\n  line-height: 1;\n}\n\n.vjs-current-time:after {\n  content: \"/\";\n  padding: 0 0.25em;\n}\n\n/* LIVE */\n@keyframes video-live-pulse {\n  0%, 100% { scale: 0.6; }\n  42%, 50% { scale: 1; }\n  75% { scale: 0.8; }\n}\n\n.vjs-seek-to-live-control {\n  --live-pulse-color: #ccc;\n  font: inherit;\n  background: none;\n  border: 0;\n  color: inherit;\n  text-transform: uppercase;\n  display: none;\n  cursor: pointer;\n  align-items: center;\n  gap: 4px;\n  line-height: 1;\n  padding: 0;\n}\n\n.vjs-at-live-edge {\n  --live-pulse-color: red;\n}\n\n.vjs-seek-to-live-control:before {\n  content: \"\";\n  width: 0.6em;\n  height: 0.6em;\n  background-color: var(--live-pulse-color);\n  border-radius: 50%;\n  animation: video-live-pulse 2s infinite;\n}\n\n.vjs-live .vjs-seek-to-live-control {\n  display: flex;\n}\n\n.vjs-live .vjs-current-time,\n.vjs-live .vjs-duration {\n  display: none;\n}\n\n/* VOLUME */\n.vjs-volume-panel {\n  grid-area: volume;\n}\n\n.vjs-mute-control {\n  --icon-size: 140%;\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/mute.svg);\n}\n\n.vjs-mute-control.vjs-vol-0 {\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/unmute.svg);\n}\n\n/* CAPTIONS */\n.vjs-subs-caps-button {\n  grid-area: cc;\n}\n\nbutton.vjs-subs-caps-button {\n  --icon-size: 122%;\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/cc-off.svg);\n}\n\n.ui-video-player[data-captions-showing=\"true\"] button.vjs-subs-caps-button {\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/cc-on.svg);\n}\n\n.vjs-text-track-display {\n  background: var(--captions-bg);\n  color: var(--color);\n  font-size: var(--captions-size);\n  padding: 0.5em 1em;\n  position: absolute;\n  transform: translate(-50%, -16px);\n  z-index: var(--captions-z-index);\n  text-align: center;\n  pointer-events: none;\n  white-space: pre;\n  transition: bottom 0.2s, opacity 0.2s;\n  opacity: var(--captions-opacity);\n  bottom: var(--controls-opacity, 3em);\n  inset-inline: 0 !important;\n  left: 50% !important;\n  visibility: hidden;\n}\n\n.ui-video-player[data-captions-showing=\"true\"] .vjs-text-track-display {\n  visibility: visible;\n}\n\n.vjs-text-track-display * {\n  all: unset !important;\n}\n\n.ui-video-player ::cue {\n  color: transparent;\n  background: transparent;\n  font-size: 0;\n  display: none;\n  visibility: hidden; \n}\n\n/* FULLSCREEN */\n.vjs-fullscreen-control {\n  grid-area: fs;\n  --icon-size: 80%;\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/enter-fs.svg);\n}\n\n/* PIP */\n.vjs-picture-in-picture-control {\n  grid-area: pip;\n  --icon-size: 113%;\n  --icon: url(https://gdp-web-news.stage.oceanusorigin.com/icons/video/enter-pip.svg);\n}\n\n/* TITLE */\n.vjs-title-bar {\n  grid-area: title;\n  font-size: var(--title-size);\n  font-weight: 700;\n  max-width: 500px;\n  display: grid !important;\n  align-content: center;\n  padding-left: 1%;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n}\n\n/* SPINNER */\n.vjs-loading-spinner {\n  /* background: rgba(255, 192, 203, 0.362);\n  display: grid;\n  place-items: center;\n  pointer-events: none; */\n  /* visibility: hidden;\n  opacity: 0; */\n}\n\n.ui-video-playerr :is(.vjs-waiting, .vjs-seeking) .vjs-loading-spinner {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* BIG PLAY BUTTON */\n.vjs-big-play-button {\n  z-index: 3;\n  cursor: pointer;\n}\n\n.ui-video-player .vjs-has-started .vjs-big-play-button,\n.ui-video-player[data-autoplay=\"true\"] .vjs-big-play-button {\n  display: none;\n}\n\n@supports (top: anchor(--scrubber top)) {\n  .video-player-captions {\n    bottom: var(--controls-opacity, anchor(--scrubber top))\n  }\n}\n\n/* ADS */\n.vjs-ima3-ad-container,\n.vjs-ima3-ad-container > div,\n.vjs-ima3-ad-container > div > iframe {\n  position: absolute;\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.vjs-ad-playing .vjs-progress-control,\n.vjs-ad-playing .vjs-skip-forward-10,\n.vjs-ad-playing .vjs-skip-backward-10,\n.vjs-ad-playing .vjs-text-track-display,\n.vjs-ad-playing .vjs-title-bar {\n  visibility: hidden !important;\n}\n\n/* ERRORS */\n.vjs-error-display {\n  z-index: 5;\n  background: black;\n  display: grid;\n  place-items: center;;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ui-video-player/./styles/components/ui-video-player.css?../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/api.js":
/*!*************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/api.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**********************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/eventsource-polyfill/dist/browserify-eventsource.js":
/*!**********************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/eventsource-polyfill/dist/browserify-eventsource.js ***!
  \**********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n   * CommonJS module that exports EventSource polyfill version 0.9.6\n   * This module is intended for browser side use\n   * =====================================================================\n   * THIS IS A POLYFILL MODULE, SO IT HAS SIDE EFFECTS\n   * IT AUTOMATICALLY CHECKS IF window OBJECT DEFINES EventSource\n   * AND ADD THE EXPORTED ONE IN CASE IT IS UNDEFINED\n   * =====================================================================\n   * Supported by sc AmvTek srl\n   * :email: devel@amvtek.com\n */\n\n\nvar PolyfillEventSource = (__webpack_require__(/*! ./eventsource.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/eventsource-polyfill/dist/eventsource.js\").EventSource);\nmodule.exports = PolyfillEventSource;\n\n// Add EventSource to window if it is missing...\nif (window && !window.EventSource){\n    window.EventSource = PolyfillEventSource;\n    if (console){\n\tconsole.log(\"polyfill-eventsource added missing EventSource to window\");\n    }\n}\n\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/eventsource-polyfill/dist/browserify-eventsource.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/eventsource-polyfill/dist/eventsource.js":
/*!***********************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/eventsource-polyfill/dist/eventsource.js ***!
  \***********************************************************************************************************/
/***/ (function() {

eval("/*\n   * EventSource polyfill version 0.9.6\n   * Supported by sc AmvTek srl\n   * :email: devel@amvtek.com\n */\n;(function (global) {\n\n    if (global.EventSource && !global._eventSourceImportPrefix){\n        return;\n    }\n\n    var evsImportName = (global._eventSourceImportPrefix||'')+\"EventSource\";\n\n    var EventSource = function (url, options) {\n\n        if (!url || typeof url != 'string') {\n            throw new SyntaxError('Not enough arguments');\n        }\n\n        this.URL = url;\n        this.setOptions(options);\n        var evs = this;\n        setTimeout(function(){evs.poll()}, 0);\n    };\n\n    EventSource.prototype = {\n\n        CONNECTING: 0,\n\n        OPEN: 1,\n\n        CLOSED: 2,\n\n        defaultOptions: {\n\n            loggingEnabled: false,\n\n            loggingPrefix: \"eventsource\",\n\n            interval: 500, // milliseconds\n\n            bufferSizeLimit: 256*1024, // bytes\n\n            silentTimeout: 300000, // milliseconds\n\n            getArgs:{\n                'evs_buffer_size_limit': 256*1024\n            },\n\n            xhrHeaders:{\n                'Accept': 'text/event-stream',\n                'Cache-Control': 'no-cache',\n                'X-Requested-With': 'XMLHttpRequest'\n            }\n        },\n\n        setOptions: function(options){\n\n            var defaults = this.defaultOptions;\n            var option;\n\n            // set all default options...\n            for (option in defaults){\n\n                if ( defaults.hasOwnProperty(option) ){\n                    this[option] = defaults[option];\n                }\n            }\n\n            // override with what is in options\n            for (option in options){\n\n                if (option in defaults && options.hasOwnProperty(option)){\n                    this[option] = options[option];\n                }\n            }\n\n            // if getArgs option is enabled\n            // ensure evs_buffer_size_limit corresponds to bufferSizeLimit\n            if (this.getArgs && this.bufferSizeLimit) {\n\n                this.getArgs['evs_buffer_size_limit'] = this.bufferSizeLimit;\n            }\n\n            // if console is not available, force loggingEnabled to false\n            if (typeof console === \"undefined\" || typeof console.log === \"undefined\") {\n\n                this.loggingEnabled = false;\n            }\n        },\n\n        log: function(message) {\n\n            if (this.loggingEnabled) {\n\n                console.log(\"[\" + this.loggingPrefix +\"]:\" + message)\n            }\n        },\n\n        poll: function() {\n\n            try {\n\n                if (this.readyState == this.CLOSED) {\n                    return;\n                }\n\n                this.cleanup();\n                this.readyState = this.CONNECTING;\n                this.cursor = 0;\n                this.cache = '';\n                this._xhr = new this.XHR(this);\n                this.resetNoActivityTimer();\n\n            }\n            catch (e) {\n\n                // in an attempt to silence the errors\n                this.log('There were errors inside the pool try-catch');\n                this.dispatchEvent('error', { type: 'error', data: e.message });\n            }\n        },\n\n        pollAgain: function (interval) {\n\n            // schedule poll to be called after interval milliseconds\n            var evs = this;\n            evs.readyState = evs.CONNECTING;\n            evs.dispatchEvent('error', {\n                type: 'error',\n                data: \"Reconnecting \"\n            });\n            this._pollTimer = setTimeout(function(){evs.poll()}, interval||0);\n        },\n\n\n        cleanup: function() {\n\n            this.log('evs cleaning up')\n\n            if (this._pollTimer){\n                clearInterval(this._pollTimer);\n                this._pollTimer = null;\n            }\n\n            if (this._noActivityTimer){\n                clearInterval(this._noActivityTimer);\n                this._noActivityTimer = null;\n            }\n\n            if (this._xhr){\n                this._xhr.abort();\n                this._xhr = null;\n            }\n        },\n\n        resetNoActivityTimer: function(){\n\n            if (this.silentTimeout){\n\n                if (this._noActivityTimer){\n                    clearInterval(this._noActivityTimer);\n                }\n                var evs = this;\n                this._noActivityTimer = setTimeout(\n                        function(){ evs.log('Timeout! silentTImeout:'+evs.silentTimeout); evs.pollAgain(); },\n                        this.silentTimeout\n                        );\n            }\n        },\n\n        close: function () {\n\n            this.readyState = this.CLOSED;\n            this.log('Closing connection. readyState: '+this.readyState);\n            this.cleanup();\n        },\n\n        ondata: function() {\n\n            var request = this._xhr;\n\n            if (request.isReady() && !request.hasError() ) {\n                // reset the timer, as we have activity\n                this.resetNoActivityTimer();\n\n                // move this EventSource to OPEN state...\n                if (this.readyState == this.CONNECTING) {\n                    this.readyState = this.OPEN;\n                    this.dispatchEvent('open', { type: 'open' });\n                }\n\n                var buffer = request.getBuffer();\n\n                if (buffer.length > this.bufferSizeLimit) {\n                    this.log('buffer.length > this.bufferSizeLimit');\n                    this.pollAgain();\n                }\n\n                if (this.cursor == 0 && buffer.length > 0){\n\n                    // skip byte order mark \\uFEFF character if it starts the stream\n                    if (buffer.substring(0,1) == '\\uFEFF'){\n                        this.cursor = 1;\n                    }\n                }\n\n                var lastMessageIndex = this.lastMessageIndex(buffer);\n                if (lastMessageIndex[0] >= this.cursor){\n\n                    var newcursor = lastMessageIndex[1];\n                    var toparse = buffer.substring(this.cursor, newcursor);\n                    this.parseStream(toparse);\n                    this.cursor = newcursor;\n                }\n\n                // if request is finished, reopen the connection\n                if (request.isDone()) {\n                    this.log('request.isDone(). reopening the connection');\n                    this.pollAgain(this.interval);\n                }\n            }\n            else if (this.readyState !== this.CLOSED) {\n\n                this.log('this.readyState !== this.CLOSED');\n                this.pollAgain(this.interval);\n\n                //MV: Unsure why an error was previously dispatched\n            }\n        },\n\n        parseStream: function(chunk) {\n\n            // normalize line separators (\\r\\n,\\r,\\n) to \\n\n            // remove white spaces that may precede \\n\n            chunk = this.cache + this.normalizeToLF(chunk);\n\n            var events = chunk.split('\\n\\n');\n\n            var i, j, eventType, datas, line, retry;\n\n            for (i=0; i < (events.length - 1); i++) {\n\n                eventType = 'message';\n                datas = [];\n                parts = events[i].split('\\n');\n\n                for (j=0; j < parts.length; j++) {\n\n                    line = this.trimWhiteSpace(parts[j]);\n\n                    if (line.indexOf('event') == 0) {\n\n                        eventType = line.replace(/event:?\\s*/, '');\n                    }\n                    else if (line.indexOf('retry') == 0) {\n\n                        retry = parseInt(line.replace(/retry:?\\s*/, ''));\n                        if(!isNaN(retry)) {\n                            this.interval = retry;\n                        }\n                    }\n                    else if (line.indexOf('data') == 0) {\n\n                        datas.push(line.replace(/data:?\\s*/, ''));\n                    }\n                    else if (line.indexOf('id:') == 0) {\n\n                        this.lastEventId = line.replace(/id:?\\s*/, '');\n                    }\n                    else if (line.indexOf('id') == 0) { // this resets the id\n\n                        this.lastEventId = null;\n                    }\n                }\n\n                if (datas.length) {\n                    // dispatch a new event\n                    var event = new MessageEvent(eventType, datas.join('\\n'), window.location.origin, this.lastEventId);\n                    this.dispatchEvent(eventType, event);\n                }\n            }\n\n            this.cache = events[events.length - 1];\n        },\n\n        dispatchEvent: function (type, event) {\n            var handlers = this['_' + type + 'Handlers'];\n\n            if (handlers) {\n\n                for (var i = 0; i < handlers.length; i++) {\n                    handlers[i].call(this, event);\n                }\n            }\n\n            if (this['on' + type]) {\n                this['on' + type].call(this, event);\n            }\n\n        },\n\n        addEventListener: function (type, handler) {\n            if (!this['_' + type + 'Handlers']) {\n                this['_' + type + 'Handlers'] = [];\n            }\n\n            this['_' + type + 'Handlers'].push(handler);\n        },\n\n        removeEventListener: function (type, handler) {\n            var handlers = this['_' + type + 'Handlers'];\n            if (!handlers) {\n                return;\n            }\n            for (var i = handlers.length - 1; i >= 0; --i) {\n                if (handlers[i] === handler) {\n                    handlers.splice(i, 1);\n                    break;\n                }\n            }\n        },\n\n        _pollTimer: null,\n\n        _noactivityTimer: null,\n\n        _xhr: null,\n\n        lastEventId: null,\n\n        cache: '',\n\n        cursor: 0,\n\n        onerror: null,\n\n        onmessage: null,\n\n        onopen: null,\n\n        readyState: 0,\n\n        // ===================================================================\n        // helpers functions\n        // those are attached to prototype to ease reuse and testing...\n\n        urlWithParams: function (baseURL, params) {\n\n            var encodedArgs = [];\n\n            if (params){\n\n                var key, urlarg;\n                var urlize = encodeURIComponent;\n\n                for (key in params){\n                    if (params.hasOwnProperty(key)) {\n                        urlarg = urlize(key)+'='+urlize(params[key]);\n                        encodedArgs.push(urlarg);\n                    }\n                }\n            }\n\n            if (encodedArgs.length > 0){\n\n                if (baseURL.indexOf('?') == -1)\n                    return baseURL + '?' + encodedArgs.join('&');\n                return baseURL + '&' + encodedArgs.join('&');\n            }\n            return baseURL;\n        },\n\n        lastMessageIndex: function(text) {\n\n            var ln2 =text.lastIndexOf('\\n\\n');\n            var lr2 = text.lastIndexOf('\\r\\r');\n            var lrln2 = text.lastIndexOf('\\r\\n\\r\\n');\n\n            if (lrln2 > Math.max(ln2, lr2)) {\n                return [lrln2, lrln2+4];\n            }\n            return [Math.max(ln2, lr2), Math.max(ln2, lr2) + 2]\n        },\n\n        trimWhiteSpace: function(str) {\n            // to remove whitespaces left and right of string\n\n            var reTrim = /^(\\s|\\u00A0)+|(\\s|\\u00A0)+$/g;\n            return str.replace(reTrim, '');\n        },\n\n        normalizeToLF: function(str) {\n\n            // replace \\r and \\r\\n with \\n\n            return str.replace(/\\r\\n|\\r/g, '\\n');\n        }\n\n    };\n\n    if (!isOldIE()){\n\n        EventSource.isPolyfill = \"XHR\";\n\n        // EventSource will send request using XMLHttpRequest\n        EventSource.prototype.XHR = function(evs) {\n\n            request = new XMLHttpRequest();\n            this._request = request;\n            evs._xhr = this;\n\n            // set handlers\n            request.onreadystatechange = function(){\n                if (request.readyState > 1 && evs.readyState != evs.CLOSED) {\n                    if (request.status == 200 || (request.status>=300 && request.status<400)){\n                        evs.ondata();\n                    }\n                    else {\n                        request._failed = true;\n                        evs.readyState = evs.CLOSED;\n                        evs.dispatchEvent('error', {\n                            type: 'error',\n                            data: \"The server responded with \"+request.status\n                        });\n                        evs.close();\n                    }\n                }\n            };\n\n            request.onprogress = function () {\n            };\n\n            request.open('GET', evs.urlWithParams(evs.URL, evs.getArgs), true);\n\n            var headers = evs.xhrHeaders; // maybe null\n            for (var header in headers) {\n                if (headers.hasOwnProperty(header)){\n                    request.setRequestHeader(header, headers[header]);\n                }\n            }\n            if (evs.lastEventId) {\n                request.setRequestHeader('Last-Event-Id', evs.lastEventId);\n            }\n\n            request.send();\n        };\n\n        EventSource.prototype.XHR.prototype = {\n\n            useXDomainRequest: false,\n\n            _request: null,\n\n            _failed: false, // true if we have had errors...\n\n            isReady: function() {\n\n\n                return this._request.readyState >= 2;\n            },\n\n            isDone: function() {\n\n                return (this._request.readyState == 4);\n            },\n\n            hasError: function() {\n\n                return (this._failed || (this._request.status >= 400));\n            },\n\n            getBuffer: function() {\n\n                var rv = '';\n                try {\n                    rv = this._request.responseText || '';\n                }\n                catch (e){}\n                return rv;\n            },\n\n            abort: function() {\n\n                if ( this._request ) {\n                    this._request.abort();\n                }\n            }\n        };\n    }\n    else {\n\n\tEventSource.isPolyfill = \"IE_8-9\";\n\n        // patch EventSource defaultOptions\n        var defaults = EventSource.prototype.defaultOptions;\n        defaults.xhrHeaders = null; // no headers will be sent\n        defaults.getArgs['evs_preamble'] = 2048 + 8;\n\n        // EventSource will send request using Internet Explorer XDomainRequest\n        EventSource.prototype.XHR = function(evs) {\n\n            request = new XDomainRequest();\n            this._request = request;\n\n            // set handlers\n            request.onprogress = function(){\n                request._ready = true;\n                evs.ondata();\n            };\n\n            request.onload = function(){\n                this._loaded = true;\n                evs.ondata();\n            };\n\n            request.onerror = function(){\n                this._failed = true;\n                evs.readyState = evs.CLOSED;\n                evs.dispatchEvent('error', {\n                    type: 'error',\n                    data: \"XDomainRequest error\"\n                });\n            };\n\n            request.ontimeout = function(){\n                this._failed = true;\n                evs.readyState = evs.CLOSED;\n                evs.dispatchEvent('error', {\n                    type: 'error',\n                    data: \"XDomainRequest timed out\"\n                });\n            };\n\n            // XDomainRequest does not allow setting custom headers\n            // If EventSource has enabled the use of GET arguments\n            // we add parameters to URL so that server can adapt the stream...\n            var reqGetArgs = {};\n            if (evs.getArgs) {\n\n                // copy evs.getArgs in reqGetArgs\n                var defaultArgs = evs.getArgs;\n                    for (var key in defaultArgs) {\n                        if (defaultArgs.hasOwnProperty(key)){\n                            reqGetArgs[key] = defaultArgs[key];\n                        }\n                    }\n                if (evs.lastEventId){\n                    reqGetArgs['evs_last_event_id'] = evs.lastEventId;\n                }\n            }\n            // send the request\n\n            request.open('GET', evs.urlWithParams(evs.URL,reqGetArgs));\n            request.send();\n        };\n\n        EventSource.prototype.XHR.prototype = {\n\n            useXDomainRequest: true,\n\n            _request: null,\n\n            _ready: false, // true when progress events are dispatched\n\n            _loaded: false, // true when request has been loaded\n\n            _failed: false, // true if when request is in error\n\n            isReady: function() {\n\n                return this._request._ready;\n            },\n\n            isDone: function() {\n\n                return this._request._loaded;\n            },\n\n            hasError: function() {\n\n                return this._request._failed;\n            },\n\n            getBuffer: function() {\n\n                var rv = '';\n                try {\n                    rv = this._request.responseText || '';\n                }\n                catch (e){}\n                return rv;\n            },\n\n            abort: function() {\n\n                if ( this._request){\n                    this._request.abort();\n                }\n            }\n        };\n    }\n\n    function MessageEvent(type, data, origin, lastEventId) {\n\n        this.bubbles = false;\n        this.cancelBubble = false;\n        this.cancelable = false;\n        this.data = data || null;\n        this.origin = origin || '';\n        this.lastEventId = lastEventId || '';\n        this.type = type || 'message';\n    }\n\n    function isOldIE () {\n\n        //return true if we are in IE8 or IE9\n        return (window.XDomainRequest && (window.XMLHttpRequest && new XMLHttpRequest().responseType === undefined)) ? true : false;\n    }\n\n    global[evsImportName] = EventSource;\n})(this);\n\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/eventsource-polyfill/dist/eventsource.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/index.js":
/*!*******************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/index.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.encode = encode;\nexports.decodeEntity = decodeEntity;\nexports.decode = decode;\nvar named_references_js_1 = __webpack_require__(/*! ./named-references.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/named-references.js\");\nvar numeric_unicode_map_js_1 = __webpack_require__(/*! ./numeric-unicode-map.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/numeric-unicode-map.js\");\nvar surrogate_pairs_js_1 = __webpack_require__(/*! ./surrogate-pairs.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/surrogate-pairs.js\");\nvar allNamedReferences = __assign(__assign({}, named_references_js_1.namedReferences), { all: named_references_js_1.namedReferences.html5 });\nvar encodeRegExps = {\n    specialChars: /[<>'\"&]/g,\n    nonAscii: /[<>'\"&\\u0080-\\uD7FF\\uE000-\\uFFFF\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]?/g,\n    nonAsciiPrintable: /[<>'\"&\\x01-\\x08\\x11-\\x15\\x17-\\x1F\\x7f-\\uD7FF\\uE000-\\uFFFF\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]?/g,\n    nonAsciiPrintableOnly: /[\\x01-\\x08\\x11-\\x15\\x17-\\x1F\\x7f-\\uD7FF\\uE000-\\uFFFF\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]?/g,\n    extensive: /[\\x01-\\x0c\\x0e-\\x1f\\x21-\\x2c\\x2e-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7d\\x7f-\\uD7FF\\uE000-\\uFFFF\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]?/g\n};\nvar defaultEncodeOptions = {\n    mode: 'specialChars',\n    level: 'all',\n    numeric: 'decimal'\n};\n/** Encodes all the necessary (specified by `level`) characters in the text */\nfunction encode(text, _a) {\n    var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? 'specialChars' : _c, _d = _b.numeric, numeric = _d === void 0 ? 'decimal' : _d, _e = _b.level, level = _e === void 0 ? 'all' : _e;\n    if (!text) {\n        return '';\n    }\n    var encodeRegExp = encodeRegExps[mode];\n    var references = allNamedReferences[level].characters;\n    var isHex = numeric === 'hexadecimal';\n    return String.prototype.replace.call(text, encodeRegExp, function (input) {\n        var result = references[input];\n        if (!result) {\n            var code = input.length > 1 ? (0, surrogate_pairs_js_1.getCodePoint)(input, 0) : input.charCodeAt(0);\n            result = (isHex ? '&#x' + code.toString(16) : '&#' + code) + ';';\n        }\n        return result;\n    });\n}\nvar defaultDecodeOptions = {\n    scope: 'body',\n    level: 'all'\n};\nvar strict = /&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);/g;\nvar attribute = /&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;\nvar baseDecodeRegExps = {\n    xml: {\n        strict: strict,\n        attribute: attribute,\n        body: named_references_js_1.bodyRegExps.xml\n    },\n    html4: {\n        strict: strict,\n        attribute: attribute,\n        body: named_references_js_1.bodyRegExps.html4\n    },\n    html5: {\n        strict: strict,\n        attribute: attribute,\n        body: named_references_js_1.bodyRegExps.html5\n    }\n};\nvar decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });\nvar fromCharCode = String.fromCharCode;\nvar outOfBoundsChar = fromCharCode(65533);\nvar defaultDecodeEntityOptions = {\n    level: 'all'\n};\nfunction getDecodedEntity(entity, references, isAttribute, isStrict) {\n    var decodeResult = entity;\n    var decodeEntityLastChar = entity[entity.length - 1];\n    if (isAttribute && decodeEntityLastChar === '=') {\n        decodeResult = entity;\n    }\n    else if (isStrict && decodeEntityLastChar !== ';') {\n        decodeResult = entity;\n    }\n    else {\n        var decodeResultByReference = references[entity];\n        if (decodeResultByReference) {\n            decodeResult = decodeResultByReference;\n        }\n        else if (entity[0] === '&' && entity[1] === '#') {\n            var decodeSecondChar = entity[2];\n            var decodeCode = decodeSecondChar == 'x' || decodeSecondChar == 'X'\n                ? parseInt(entity.substr(3), 16)\n                : parseInt(entity.substr(2));\n            decodeResult =\n                decodeCode >= 0x10ffff\n                    ? outOfBoundsChar\n                    : decodeCode > 65535\n                        ? (0, surrogate_pairs_js_1.fromCodePoint)(decodeCode)\n                        : fromCharCode(numeric_unicode_map_js_1.numericUnicodeMap[decodeCode] || decodeCode);\n        }\n    }\n    return decodeResult;\n}\n/** Decodes a single entity */\nfunction decodeEntity(entity, _a) {\n    var _b = _a === void 0 ? defaultDecodeEntityOptions : _a, _c = _b.level, level = _c === void 0 ? 'all' : _c;\n    if (!entity) {\n        return '';\n    }\n    return getDecodedEntity(entity, allNamedReferences[level].entities, false, false);\n}\n/** Decodes all entities in the text */\nfunction decode(text, _a) {\n    var _b = _a === void 0 ? defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? 'all' : _c, _d = _b.scope, scope = _d === void 0 ? level === 'xml' ? 'strict' : 'body' : _d;\n    if (!text) {\n        return '';\n    }\n    var decodeRegExp = decodeRegExps[level][scope];\n    var references = allNamedReferences[level].entities;\n    var isAttribute = scope === 'attribute';\n    var isStrict = scope === 'strict';\n    return text.replace(decodeRegExp, function (entity) { return getDecodedEntity(entity, references, isAttribute, isStrict); });\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/index.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/named-references.js":
/*!******************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/named-references.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.namedReferences = exports.bodyRegExps = void 0;\n// This file is autogenerated by tools/process-named-references.ts\nvar pairDivider = \"~\";\nvar blockDivider = \"~~\";\nfunction generateNamedReferences(input, prev) {\n    var entities = {};\n    var characters = {};\n    var blocks = input.split(blockDivider);\n    var isOptionalBlock = false;\n    for (var i = 0; blocks.length > i; i++) {\n        var entries = blocks[i].split(pairDivider);\n        for (var j = 0; j < entries.length; j += 2) {\n            var entity = entries[j];\n            var character = entries[j + 1];\n            var fullEntity = '&' + entity + ';';\n            entities[fullEntity] = character;\n            if (isOptionalBlock) {\n                entities['&' + entity] = character;\n            }\n            characters[character] = fullEntity;\n        }\n        isOptionalBlock = true;\n    }\n    return prev ?\n        { entities: __assign(__assign({}, entities), prev.entities), characters: __assign(__assign({}, characters), prev.characters) } :\n        { entities: entities, characters: characters };\n}\nexports.bodyRegExps = {\n    xml: /&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g,\n    html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g,\n    html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g\n};\nexports.namedReferences = {};\nexports.namedReferences.xml = generateNamedReferences(\"lt~<~gt~>~quot~\\\"~apos~'~amp~&\");\nexports.namedReferences.html4 = generateNamedReferences(\"apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~\\\"~amp~&~lt~<~gt~>\");\nexports.namedReferences.html5 = generateNamedReferences(\"Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~\\t~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~\\\"~REG~®\", exports.namedReferences['html4']);\n//# sourceMappingURL=named-references.js.map\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/named-references.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/numeric-unicode-map.js":
/*!*********************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/numeric-unicode-map.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.numericUnicodeMap = void 0;\nexports.numericUnicodeMap = {\n    0: 65533,\n    128: 8364,\n    130: 8218,\n    131: 402,\n    132: 8222,\n    133: 8230,\n    134: 8224,\n    135: 8225,\n    136: 710,\n    137: 8240,\n    138: 352,\n    139: 8249,\n    140: 338,\n    142: 381,\n    145: 8216,\n    146: 8217,\n    147: 8220,\n    148: 8221,\n    149: 8226,\n    150: 8211,\n    151: 8212,\n    152: 732,\n    153: 8482,\n    154: 353,\n    155: 8250,\n    156: 339,\n    158: 382,\n    159: 376\n};\n//# sourceMappingURL=numeric-unicode-map.js.map\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/numeric-unicode-map.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/surrogate-pairs.js":
/*!*****************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/surrogate-pairs.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.highSurrogateTo = exports.highSurrogateFrom = exports.getCodePoint = exports.fromCodePoint = void 0;\nexports.fromCodePoint = String.fromCodePoint ||\n    function (astralCodePoint) {\n        return String.fromCharCode(Math.floor((astralCodePoint - 0x10000) / 0x400) + 0xd800, ((astralCodePoint - 0x10000) % 0x400) + 0xdc00);\n    };\n// @ts-expect-error - String.prototype.codePointAt might not exist in older node versions\nexports.getCodePoint = String.prototype.codePointAt\n    ? function (input, position) {\n        return input.codePointAt(position);\n    }\n    : function (input, position) {\n        return (input.charCodeAt(position) - 0xd800) * 0x400 + input.charCodeAt(position + 1) - 0xdc00 + 0x10000;\n    };\nexports.highSurrogateFrom = 0xd800;\nexports.highSurrogateTo = 0xdbff;\n//# sourceMappingURL=surrogate-pairs.js.map\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/surrogate-pairs.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/strip-ansi/index.js":
/*!**************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/strip-ansi/index.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst ansiRegex = __webpack_require__(/*! ansi-regex */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/ansi-regex/index.js\");\n\nmodule.exports = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;\n\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/strip-ansi/index.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!****************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!******************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \******************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!******************************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***********************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*****************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/client-overlay.js":
/*!***********************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/client-overlay.js ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*eslint-env browser*/\n\nvar clientOverlay = document.createElement('div');\nclientOverlay.id = 'webpack-hot-middleware-clientOverlay';\nvar styles = {\n  background: 'rgba(0,0,0,0.85)',\n  color: '#e8e8e8',\n  lineHeight: '1.6',\n  whiteSpace: 'pre',\n  fontFamily: 'Menlo, Consolas, monospace',\n  fontSize: '13px',\n  position: 'fixed',\n  zIndex: 9999,\n  padding: '10px',\n  left: 0,\n  right: 0,\n  top: 0,\n  bottom: 0,\n  overflow: 'auto',\n  dir: 'ltr',\n  textAlign: 'left',\n};\n\nvar ansiHTML = __webpack_require__(/*! ansi-html-community */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/ansi-html-community/index.js\");\nvar colors = {\n  reset: ['transparent', 'transparent'],\n  black: '181818',\n  red: 'ff3348',\n  green: '3fff4f',\n  yellow: 'ffd30e',\n  blue: '169be0',\n  magenta: 'f840b7',\n  cyan: '0ad8e9',\n  lightgrey: 'ebe7e3',\n  darkgrey: '6d7891',\n};\n\nvar htmlEntities = __webpack_require__(/*! html-entities */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/html-entities/dist/commonjs/index.js\");\n\nfunction showProblems(type, lines) {\n  clientOverlay.innerHTML = '';\n  lines.forEach(function (msg) {\n    msg = ansiHTML(htmlEntities.encode(msg));\n    var div = document.createElement('div');\n    div.style.marginBottom = '26px';\n    div.innerHTML = problemType(type) + ' in ' + msg;\n    clientOverlay.appendChild(div);\n  });\n  if (document.body) {\n    document.body.appendChild(clientOverlay);\n  }\n}\n\nfunction clear() {\n  if (document.body && clientOverlay.parentNode) {\n    document.body.removeChild(clientOverlay);\n  }\n}\n\nfunction problemType(type) {\n  var problemColors = {\n    errors: colors.red,\n    warnings: colors.yellow,\n  };\n  var color = problemColors[type] || colors.red;\n  return (\n    '<span style=\"background-color:#' +\n    color +\n    '; color:#000000; padding:3px 6px; border-radius: 4px;\">' +\n    type.slice(0, -1).toUpperCase() +\n    '</span>'\n  );\n}\n\nmodule.exports = function (options) {\n  for (var color in options.ansiColors) {\n    if (color in colors) {\n      colors[color] = options.ansiColors[color];\n    }\n    ansiHTML.setColors(colors);\n  }\n\n  for (var style in options.overlayStyles) {\n    styles[style] = options.overlayStyles[style];\n  }\n\n  for (var key in styles) {\n    clientOverlay.style[key] = styles[key];\n  }\n\n  return {\n    showProblems: showProblems,\n    clear: clear,\n  };\n};\n\nmodule.exports.clear = clear;\nmodule.exports.showProblems = showProblems;\n\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/client-overlay.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/client.js?reload=true":
/*!***************************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/client.js?reload=true ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?reload=true\";\n/* module decorator */ module = __webpack_require__.nmd(module);\n/*eslint-env browser*/\n/*global __resourceQuery __webpack_public_path__*/\n\nvar options = {\n  path: '/__webpack_hmr',\n  timeout: 20 * 1000,\n  overlay: true,\n  reload: false,\n  log: true,\n  warn: true,\n  name: '',\n  autoConnect: true,\n  overlayStyles: {},\n  overlayWarnings: false,\n  ansiColors: {},\n};\nif (true) {\n  var params = Array.from(new URLSearchParams(__resourceQuery.slice(1)));\n  var overrides = params.reduce(function (memo, param) {\n    memo[param[0]] = param[1];\n    return memo;\n  }, {});\n\n  setOverrides(overrides);\n}\n\nif (typeof window === 'undefined') {\n  // do nothing\n} else if (typeof window.EventSource === 'undefined') {\n  console.warn(\n    \"webpack-hot-middleware's client requires EventSource to work. \" +\n      'You should include a polyfill if you want to support this browser: ' +\n      'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools'\n  );\n} else {\n  if (options.autoConnect) {\n    connect();\n  }\n}\n\n/* istanbul ignore next */\nfunction setOptionsAndConnect(overrides) {\n  setOverrides(overrides);\n  connect();\n}\n\nfunction setOverrides(overrides) {\n  if (overrides.autoConnect)\n    options.autoConnect = overrides.autoConnect == 'true';\n  if (overrides.path) options.path = overrides.path;\n  if (overrides.timeout) options.timeout = overrides.timeout;\n  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';\n  if (overrides.reload) options.reload = overrides.reload !== 'false';\n  if (overrides.noInfo && overrides.noInfo !== 'false') {\n    options.log = false;\n  }\n  if (overrides.name) {\n    options.name = overrides.name;\n  }\n  if (overrides.quiet && overrides.quiet !== 'false') {\n    options.log = false;\n    options.warn = false;\n  }\n\n  if (overrides.dynamicPublicPath) {\n    options.path = __webpack_require__.p + options.path;\n  }\n\n  if (overrides.ansiColors)\n    options.ansiColors = JSON.parse(overrides.ansiColors);\n  if (overrides.overlayStyles)\n    options.overlayStyles = JSON.parse(overrides.overlayStyles);\n\n  if (overrides.overlayWarnings) {\n    options.overlayWarnings = overrides.overlayWarnings == 'true';\n  }\n}\n\nfunction EventSourceWrapper() {\n  var source;\n  var lastActivity = new Date();\n  var listeners = [];\n\n  init();\n  var timer = setInterval(function () {\n    if (new Date() - lastActivity > options.timeout) {\n      handleDisconnect();\n    }\n  }, options.timeout / 2);\n\n  function init() {\n    source = new window.EventSource(options.path);\n    source.onopen = handleOnline;\n    source.onerror = handleDisconnect;\n    source.onmessage = handleMessage;\n  }\n\n  function handleOnline() {\n    if (options.log) console.log('[HMR] connected');\n    lastActivity = new Date();\n  }\n\n  function handleMessage(event) {\n    lastActivity = new Date();\n    for (var i = 0; i < listeners.length; i++) {\n      listeners[i](event);\n    }\n  }\n\n  function handleDisconnect() {\n    clearInterval(timer);\n    source.close();\n    setTimeout(init, options.timeout);\n  }\n\n  return {\n    addMessageListener: function (fn) {\n      listeners.push(fn);\n    },\n  };\n}\n\nfunction getEventSourceWrapper() {\n  if (!window.__whmEventSourceWrapper) {\n    window.__whmEventSourceWrapper = {};\n  }\n  if (!window.__whmEventSourceWrapper[options.path]) {\n    // cache the wrapper for other entries loaded on\n    // the same page with the same options.path\n    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();\n  }\n  return window.__whmEventSourceWrapper[options.path];\n}\n\nfunction connect() {\n  getEventSourceWrapper().addMessageListener(handleMessage);\n\n  function handleMessage(event) {\n    if (event.data == '\\uD83D\\uDC93') {\n      return;\n    }\n    try {\n      processMessage(JSON.parse(event.data));\n    } catch (ex) {\n      if (options.warn) {\n        console.warn('Invalid HMR message: ' + event.data + '\\n' + ex);\n      }\n    }\n  }\n}\n\n// the reporter needs to be a singleton on the page\n// in case the client is being used by multiple bundles\n// we only want to report once.\n// all the errors will go to all clients\nvar singletonKey = '__webpack_hot_middleware_reporter__';\nvar reporter;\nif (typeof window !== 'undefined') {\n  if (!window[singletonKey]) {\n    window[singletonKey] = createReporter();\n  }\n  reporter = window[singletonKey];\n}\n\nfunction createReporter() {\n  var strip = __webpack_require__(/*! strip-ansi */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/strip-ansi/index.js\");\n\n  var overlay;\n  if (typeof document !== 'undefined' && options.overlay) {\n    overlay = __webpack_require__(/*! ./client-overlay */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/client-overlay.js\")({\n      ansiColors: options.ansiColors,\n      overlayStyles: options.overlayStyles,\n    });\n  }\n\n  var styles = {\n    errors: 'color: #ff0000;',\n    warnings: 'color: #999933;',\n  };\n  var previousProblems = null;\n  function log(type, obj) {\n    var newProblems = obj[type]\n      .map(function (msg) {\n        return strip(msg);\n      })\n      .join('\\n');\n    if (previousProblems == newProblems) {\n      return;\n    } else {\n      previousProblems = newProblems;\n    }\n\n    var style = styles[type];\n    var name = obj.name ? \"'\" + obj.name + \"' \" : '';\n    var title = '[HMR] bundle ' + name + 'has ' + obj[type].length + ' ' + type;\n    // NOTE: console.warn or console.error will print the stack trace\n    // which isn't helpful here, so using console.log to escape it.\n    if (console.group && console.groupEnd) {\n      console.group('%c' + title, style);\n      console.log('%c' + newProblems, style);\n      console.groupEnd();\n    } else {\n      console.log(\n        '%c' + title + '\\n\\t%c' + newProblems.replace(/\\n/g, '\\n\\t'),\n        style + 'font-weight: bold;',\n        style + 'font-weight: normal;'\n      );\n    }\n  }\n\n  return {\n    cleanProblemsCache: function () {\n      previousProblems = null;\n    },\n    problems: function (type, obj) {\n      if (options.warn) {\n        log(type, obj);\n      }\n      if (overlay) {\n        if (options.overlayWarnings || type === 'errors') {\n          overlay.showProblems(type, obj[type]);\n          return false;\n        }\n        overlay.clear();\n      }\n      return true;\n    },\n    success: function () {\n      if (overlay) overlay.clear();\n    },\n    useCustomOverlay: function (customOverlay) {\n      overlay = customOverlay;\n    },\n  };\n}\n\nvar processUpdate = __webpack_require__(/*! ./process-update */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/process-update.js\");\n\nvar customHandler;\nvar subscribeAllHandler;\nfunction processMessage(obj) {\n  switch (obj.action) {\n    case 'building':\n      if (options.log) {\n        console.log(\n          '[HMR] bundle ' +\n            (obj.name ? \"'\" + obj.name + \"' \" : '') +\n            'rebuilding'\n        );\n      }\n      break;\n    case 'built':\n      if (options.log) {\n        console.log(\n          '[HMR] bundle ' +\n            (obj.name ? \"'\" + obj.name + \"' \" : '') +\n            'rebuilt in ' +\n            obj.time +\n            'ms'\n        );\n      }\n    // fall through\n    case 'sync':\n      if (obj.name && options.name && obj.name !== options.name) {\n        return;\n      }\n      var applyUpdate = true;\n      if (obj.errors.length > 0) {\n        if (reporter) reporter.problems('errors', obj);\n        applyUpdate = false;\n      } else if (obj.warnings.length > 0) {\n        if (reporter) {\n          var overlayShown = reporter.problems('warnings', obj);\n          applyUpdate = overlayShown;\n        }\n      } else {\n        if (reporter) {\n          reporter.cleanProblemsCache();\n          reporter.success();\n        }\n      }\n      if (applyUpdate) {\n        processUpdate(obj.hash, obj.modules, options);\n      }\n      break;\n    default:\n      if (customHandler) {\n        customHandler(obj);\n      }\n  }\n\n  if (subscribeAllHandler) {\n    subscribeAllHandler(obj);\n  }\n}\n\nif (module) {\n  module.exports = {\n    subscribeAll: function subscribeAll(handler) {\n      subscribeAllHandler = handler;\n    },\n    subscribe: function subscribe(handler) {\n      customHandler = handler;\n    },\n    useCustomOverlay: function useCustomOverlay(customOverlay) {\n      if (reporter) reporter.useCustomOverlay(customOverlay);\n    },\n    setOptionsAndConnect: setOptionsAndConnect,\n  };\n}\n\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/client.js?");

/***/ }),

/***/ "../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/process-update.js":
/*!***********************************************************************************************************!*\
  !*** ../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/process-update.js ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Based heavily on https://github.com/webpack/webpack/blob/\n *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js\n * Original copyright Tobias Koppers @sokra (MIT license)\n */\n\n/* global window __webpack_hash__ */\n\nif (false) // removed by dead control flow\n{}\n\nvar hmrDocsUrl = 'https://webpack.js.org/concepts/hot-module-replacement/'; // eslint-disable-line max-len\n\nvar lastHash;\nvar failureStatuses = { abort: 1, fail: 1 };\nvar applyOptions = {\n  ignoreUnaccepted: true,\n  ignoreDeclined: true,\n  ignoreErrored: true,\n  onUnaccepted: function (data) {\n    console.warn(\n      'Ignored an update to unaccepted module ' + data.chain.join(' -> ')\n    );\n  },\n  onDeclined: function (data) {\n    console.warn(\n      'Ignored an update to declined module ' + data.chain.join(' -> ')\n    );\n  },\n  onErrored: function (data) {\n    console.error(data.error);\n    console.warn(\n      'Ignored an error while updating module ' +\n        data.moduleId +\n        ' (' +\n        data.type +\n        ')'\n    );\n  },\n};\n\nfunction upToDate(hash) {\n  if (hash) lastHash = hash;\n  return lastHash == __webpack_require__.h();\n}\n\nmodule.exports = function (hash, moduleMap, options) {\n  var reload = options.reload;\n  if (!upToDate(hash) && module.hot.status() == 'idle') {\n    if (options.log) console.log('[HMR] Checking for updates on the server...');\n    check();\n  }\n\n  function check() {\n    var cb = function (err, updatedModules) {\n      if (err) return handleError(err);\n\n      if (!updatedModules) {\n        if (options.warn) {\n          console.warn('[HMR] Cannot find update (Full reload needed)');\n          console.warn('[HMR] (Probably because of restarting the server)');\n        }\n        performReload();\n        return null;\n      }\n\n      var applyCallback = function (applyErr, renewedModules) {\n        if (applyErr) return handleError(applyErr);\n\n        if (!upToDate()) check();\n\n        logUpdates(updatedModules, renewedModules);\n      };\n\n      var applyResult = module.hot.apply(applyOptions, applyCallback);\n      // webpack 2 promise\n      if (applyResult && applyResult.then) {\n        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`\n        applyResult.then(function (outdatedModules) {\n          applyCallback(null, outdatedModules);\n        });\n        applyResult.catch(applyCallback);\n      }\n    };\n\n    var result = module.hot.check(false, cb);\n    // webpack 2 promise\n    if (result && result.then) {\n      result.then(function (updatedModules) {\n        cb(null, updatedModules);\n      });\n      result.catch(cb);\n    }\n  }\n\n  function logUpdates(updatedModules, renewedModules) {\n    var unacceptedModules = updatedModules.filter(function (moduleId) {\n      return renewedModules && renewedModules.indexOf(moduleId) < 0;\n    });\n\n    if (unacceptedModules.length > 0) {\n      if (options.warn) {\n        console.warn(\n          \"[HMR] The following modules couldn't be hot updated: \" +\n            '(Full reload needed)\\n' +\n            'This is usually because the modules which have changed ' +\n            '(and their parents) do not know how to hot reload themselves. ' +\n            'See ' +\n            hmrDocsUrl +\n            ' for more details.'\n        );\n        unacceptedModules.forEach(function (moduleId) {\n          console.warn('[HMR]  - ' + (moduleMap[moduleId] || moduleId));\n        });\n      }\n      performReload();\n      return;\n    }\n\n    if (options.log) {\n      if (!renewedModules || renewedModules.length === 0) {\n        console.log('[HMR] Nothing hot updated.');\n      } else {\n        console.log('[HMR] Updated modules:');\n        renewedModules.forEach(function (moduleId) {\n          console.log('[HMR]  - ' + (moduleMap[moduleId] || moduleId));\n        });\n      }\n\n      if (upToDate()) {\n        console.log('[HMR] App is up to date.');\n      }\n    }\n  }\n\n  function handleError(err) {\n    if (module.hot.status() in failureStatuses) {\n      if (options.warn) {\n        console.warn('[HMR] Cannot check for update (Full reload needed)');\n        console.warn('[HMR] ' + (err.stack || err.message));\n      }\n      performReload();\n      return;\n    }\n    if (options.warn) {\n      console.warn('[HMR] Update check failed: ' + (err.stack || err.message));\n    }\n  }\n\n  function performReload() {\n    if (reload) {\n      if (options.warn) console.warn('[HMR] Reloading page');\n      window.location.reload();\n    }\n  }\n};\n\n\n//# sourceURL=webpack://ui-video-player/../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/process-update.js?");

/***/ }),

/***/ "./src/components/_ads.js":
/*!********************************!*\
  !*** ./src/components/_ads.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   configureAds: () => (/* binding */ configureAds),\n/* harmony export */   expandAdTagUrl: () => (/* binding */ expandAdTagUrl)\n/* harmony export */ });\n/* harmony import */ var _components_consent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/_consent */ \"./src/components/_consent.js\");\nfunction _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = \"function\" == typeof Symbol ? Symbol : {}, n = r.iterator || \"@@iterator\", o = r.toStringTag || \"@@toStringTag\"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, \"_invoke\", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError(\"Generator is already running\"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = \"next\"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, \"constructor\", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", _regeneratorDefine2(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, \"Generator\"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, \"toString\", function () { return \"[object Generator]\"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }\nfunction _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, \"\", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2); } }, _regeneratorDefine2(e, r, n, t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\nvar configureAds = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(player, config) {\n    var consentData;\n    return _regenerator().w(function (_context) {\n      while (1) switch (_context.n) {\n        case 0:\n          if (player.ima3) {\n            _context.n = 1;\n            break;\n          }\n          return _context.a(2);\n        case 1:\n          window.sdc = window.sdc || {};\n          player.on('ads-ad-started', function () {\n            config.rootElement.setAttribute('data-state', 'loaded');\n            if (config.sensitive === 'true' || config.disableAds === 'true' || window.sdc.isSensitiveArticle) {\n              player.ima3.adsManager.discardAdBreak();\n            } else {\n              config.rootElement.setAttribute('data-ads-state', 'started');\n            }\n          });\n          player.on('ads-pod-ended', function () {\n            if (player.liveTracker.isLive()) {\n              player.liveTracker.seekToLiveEdge();\n            }\n            config.rootElement.setAttribute('data-ads-state', 'ended');\n          });\n          player.on('ima3-ads-manager-loaded', function () {\n            var adsRenderingSettings = new google.ima.AdsRenderingSettings();\n            adsRenderingSettings.uiElements = [google.ima.UiElements.AD_ATTRIBUTION, google.ima.UiElements.COUNTDOWN];\n            player.ima3.setAdsRenderingSettings(adsRenderingSettings);\n          });\n\n          // Wait for CMP before initializing the player\n          _context.n = 2;\n          return _components_consent__WEBPACK_IMPORTED_MODULE_0__.getConsentData(window.__tcfapi);\n        case 2:\n          consentData = _context.v;\n          console.log(consentData);\n          player.ima3.adMacroReplacement = function (tag) {\n            tag = tag + \"&gdpr=1&gdpr_consent={gdpr_consent}&url={url}&cust_params={cust_params}\";\n            var cust_params = \"covatic=\".concat((9999, 9999));\n            return expandAdTagUrl(tag, {\n              timestamp: Date.now(),\n              \"mediainfo.reference_id\": config.sdcVideoId,\n              gdpr_consent: \"CQTt-UAQTt-UAAGABBENBvFgAAAAAAAAAAwIAAAAAAAA.YAAAAAAAAAAA\",\n              cust_params: cust_params,\n              url: \"https://news.sky.com\".concat(window.location.pathname)\n            });\n          };\n        case 3:\n          return _context.a(2);\n      }\n    }, _callee);\n  }));\n  return function configureAds(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nfunction expandAdTagUrl(template, values) {\n  return template.replace(/\\{([^}]+)\\}/g, function (_, key) {\n    var _values$key;\n    return encodeURIComponent((_values$key = values[key]) !== null && _values$key !== void 0 ? _values$key : \"\");\n  });\n}\n\n//# sourceURL=webpack://ui-video-player/./src/components/_ads.js?");

/***/ }),

/***/ "./src/components/_captions.js":
/*!*************************************!*\
  !*** ./src/components/_captions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   enableCaptions: () => (/* binding */ enableCaptions),\n/* harmony export */   initCaptions: () => (/* binding */ initCaptions)\n/* harmony export */ });\nvar initCaptions = function initCaptions(player, config) {\n  if (!config.showClosedCaptions) {\n    player.controlBar.subsCapsButton.el_.style.display = 'none';\n    return;\n  }\n  player.on('loadedmetadata', function () {\n    var capsButton = player.controlBar.subsCapsButton;\n    capsButton.on(['click', 'touchstart'], function () {\n      var state = !capsButton.el_.classList.contains('vjs-subs-caps-button-open');\n      window.localStorage.setItem('brightcove-player-last-captions', state);\n      enableCaptions(state, player, capsButton.el_, config);\n    });\n  });\n  player.on('texttrackchange', function () {\n    var capsButton = player.controlBar.subsCapsButton;\n    enableCaptions(window.localStorage.getItem('brightcove-player-last-captions') === 'true', player, capsButton.el_, config);\n  });\n};\nvar enableCaptions = function enableCaptions(state, player, capsButton, config) {\n  config.rootElement.dataset.captionsShowing = state;\n  player.textTracks().tracks_.forEach(function (track) {\n    if (track.kind.match(/subtitles|captions/)) {\n      requestAnimationFrame(function () {\n        track.mode = state ? 'showing' : 'hidden';\n      });\n      capsButton.classList[state ? 'add' : 'remove']('vjs-subs-caps-button-open');\n    }\n  });\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_captions.js?");

/***/ }),

/***/ "./src/components/_config.js":
/*!***********************************!*\
  !*** ./src/components/_config.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildConfig: () => (/* binding */ buildConfig),\n/* harmony export */   merge: () => (/* binding */ _merge)\n/* harmony export */ });\n/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_error-messages */ \"./src/components/_error-messages.js\");\n/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_languages */ \"./src/components/_languages.js\");\n\n\nvar _merge = function merge(target, source) {\n  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties\n  for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {\n    var key = _Object$keys[_i];\n    if (source[key] instanceof Object) Object.assign(source[key], _merge(target[key], source[key]));\n  }\n\n  // Join `target` and modified `source`\n  Object.assign(target || {}, source);\n  return target;\n};\n\nvar buildConfig = function buildConfig(rootElement) {\n  var config = {\n    options: {\n      skin: false,\n      poster: '',\n      autoplay: /^(any|true)$/i.test(rootElement.dataset.autoplay || '') ? 'any' : 'false',\n      playsinline: rootElement.dataset.playsinline === 'true',\n      tcfApiVersion: 2,\n      textTrackSettings: false,\n      html5: {\n        vhs: {\n          overrideNative: true\n        },\n        nativeTextTracks: false,\n        nativeAudioTracks: false,\n        nativeVideoTracks: false\n      },\n      errors: {\n        en: [{\n          headline: 'Video Unavailable',\n          message: 'A problem was encountered - please try again later',\n          dismiss: false,\n          errorCodes: _error_messages__WEBPACK_IMPORTED_MODULE_0__.errorCodes.VIDEO_UNAVAILABLE\n        }, {\n          headline: 'Unsupported location',\n          message: 'The video you are trying to watch cannot be viewed from your current country or location',\n          dismiss: false,\n          errorCodes: _error_messages__WEBPACK_IMPORTED_MODULE_0__.errorCodes.UNSUPPORTED_LOCATION\n        }, {\n          headline: 'Connectivity Issues',\n          message: \"There's a problem with your connection\",\n          dismiss: true,\n          errorCodes: _error_messages__WEBPACK_IMPORTED_MODULE_0__.errorCodes.CONNECTIVITY_ISSUES\n        }],\n        de: [{\n          headline: 'Video nicht verfügbar',\n          message: 'Ups! Ein Problem ist aufgetreten - bitte versuche es später erneut',\n          dismiss: false,\n          errorCodes: _error_messages__WEBPACK_IMPORTED_MODULE_0__.errorCodes.VIDEO_UNAVAILABLE\n        }, {\n          headline: 'Standort nicht unterstützt',\n          message: 'Dieses Video kann von deinem aktuellen Standort nicht geschaut werden',\n          dismiss: false,\n          errorCodes: _error_messages__WEBPACK_IMPORTED_MODULE_0__.errorCodes.UNSUPPORTED_LOCATION\n        }, {\n          headline: 'Verbindungsproblem',\n          message: 'Es besteht ein Problem mit Ihrer Verbindung',\n          dismiss: true,\n          errorCodes: _error_messages__WEBPACK_IMPORTED_MODULE_0__.errorCodes.CONNECTIVITY_ISSUES\n        }]\n      }\n    },\n    authConfig: {\n      tokenRequired: false,\n      fetchMethod: 'url',\n      fetchOptions: {\n        v: 1,\n        method: 'POST',\n        encoded: false\n      },\n      headers: {\n        'X-SkyGDP-Platform': 'web',\n        Accept: 'application/json',\n        'Content-Type': 'application/x-www-form-urlencoded'\n      }\n    },\n    rootElement: rootElement,\n    playerBody: rootElement.querySelector('.ui-video-player-content'),\n    videoTag: rootElement.querySelector('video-js')\n  };\n\n  // options and authConfig can both be objects, so parse and merge seperately\n  var dataset = Object.assign({}, rootElement.dataset);\n  dataset.options = dataset.options ? JSON.parse(dataset.options) : {};\n  dataset.authConfig = dataset.authConfig ? JSON.parse(dataset.authConfig) : {};\n\n  // handle disabled ads settings\n  dataset.disableAds = dataset.disableAds === 'true' || dataset.sensitive === 'true';\n  dataset.playerId = dataset.disableAds ? dataset.playerNoAdsId : dataset.playerId;\n\n  // add languages\n  config.options.languages = (0,_languages__WEBPACK_IMPORTED_MODULE_1__.languages)(dataset);\n\n  // merge options and authconfig with defaults\n  _merge(config.options, dataset.options);\n  _merge(config.authConfig, dataset.authConfig);\n  delete dataset.options;\n  delete dataset.authConfig;\n  return Object.assign(config, dataset);\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_config.js?");

/***/ }),

/***/ "./src/components/_consent.js":
/*!************************************!*\
  !*** ./src/components/_consent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkConsent: () => (/* binding */ checkConsent),\n/* harmony export */   getConsentData: () => (/* binding */ getConsentData)\n/* harmony export */ });\nvar getConsentData = function getConsentData(__tcfapi) {\n  return new Promise(function (resolve) {\n    if (!__tcfapi) {\n      console.log('get consent - no __tcfapi, so fall back to {}');\n      resolve({});\n      return;\n    }\n    __tcfapi('addEventListener', 2, function (tcData, success) {\n      if (!success) {\n        console.log('get consent - __tcfapi fails, so fall back to {}');\n        resolve({});\n        return;\n      }\n      console.log('get consent - __tcfapi resolves with data');\n      resolve({\n        gdprApplies: tcData.gdprApplies,\n        consentString: tcData.tcString\n      });\n    });\n  });\n};\nvar checkConsent = function checkConsent(rootElement) {\n  return new Promise(function (resolve) {\n    if (rootElement.dataset.consent === 'pending' && window.sdc && window.sdc.checkConsent) {\n      console.log('check consent - gets consent from window.sdc.checkConsent');\n      window.sdc.checkConsent(rootElement, resolve);\n    } else {\n      console.log('check consent - gets consent from fallback');\n      resolve();\n    }\n  });\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_consent.js?");

/***/ }),

/***/ "./src/components/_control-bar.js":
/*!****************************************!*\
  !*** ./src/components/_control-bar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   controlBar: () => (/* binding */ controlBar),\n/* harmony export */   live: () => (/* binding */ live),\n/* harmony export */   seekTooltips: () => (/* binding */ seekTooltips)\n/* harmony export */ });\nvar controlBar = function controlBar(player, rootElement) {\n  player.controlBar.el_.appendChild(player.titleBar.el_);\n\n  // create play, skip forward and back group\n  var playButtonsGroup = document.createElement('div');\n  playButtonsGroup.className = \"ui-video-player-play-buttons\";\n  player.controlBar.el_.appendChild(playButtonsGroup);\n  playButtonsGroup.appendChild(player.controlBar.playToggle.el_);\n  playButtonsGroup.appendChild(player.controlBar.skipBackward.el_);\n  playButtonsGroup.appendChild(player.controlBar.skipForward.el_);\n\n  // create player time/live group\n  var timeGroup = document.createElement('div');\n  timeGroup.className = \"ui-video-player-time\";\n  player.controlBar.el_.appendChild(timeGroup);\n  timeGroup.appendChild(player.controlBar.currentTimeDisplay.el_);\n  timeGroup.appendChild(player.controlBar.durationDisplay.el_);\n  timeGroup.appendChild(player.controlBar.remainingTimeDisplay.el_);\n  timeGroup.appendChild(player.controlBar.seekToLive.el_);\n  timeGroup.appendChild(player.controlBar.liveDisplay.el_);\n};\nvar live = function live(player) {\n  player.controlBar.seekToLive.on(['click', 'touchstart'], function () {\n    requestAnimationFrame(function () {\n      player.play();\n    });\n  });\n};\nvar seekTooltips = function seekTooltips(player, config, videojs) {\n  if (!videojs) {\n    return;\n  }\n  player.on('seeking', function () {\n    config.rootElement.style.setProperty('--progress-tooltip-mobile', \"'-\".concat(videojs.time.formatTime(player.liveTracker.liveCurrentTime() - player.currentTime()), \"'\"));\n  });\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_control-bar.js?");

/***/ }),

/***/ "./src/components/_create-player.js":
/*!******************************************!*\
  !*** ./src/components/_create-player.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPlayer: () => (/* binding */ createPlayer),\n/* harmony export */   exposePlayer: () => (/* binding */ exposePlayer)\n/* harmony export */ });\n/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_player-state */ \"./src/components/_player-state.js\");\n/* harmony import */ var _captions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_captions */ \"./src/components/_captions.js\");\n/* harmony import */ var _volume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_volume */ \"./src/components/_volume.js\");\n/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_error-messages */ \"./src/components/_error-messages.js\");\n/* harmony import */ var _ads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_ads */ \"./src/components/_ads.js\");\n/* harmony import */ var _event_bridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_event-bridge */ \"./src/components/_event-bridge.js\");\n/* harmony import */ var _playback_rights__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_playback-rights */ \"./src/components/_playback-rights.js\");\n/* harmony import */ var _viewability__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_viewability */ \"./src/components/_viewability.js\");\n/* harmony import */ var _control_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_control-bar */ \"./src/components/_control-bar.js\");\n/* harmony import */ var _switch_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_switch-video */ \"./src/components/_switch-video.js\");\n\n\n\n\n\n\n\n\n\n\nvar createPlayer = function createPlayer(config, bc, openTracing) {\n  openTracing.startSpan('sdc_site_video.video_load', 'sdc_site_video.video_load', {\n    sdcVideoId: config.videoId,\n    accountId: config.accountId,\n    playerId: config.playerId,\n    originatorId: config.originatorId,\n    provider: config.provider,\n    tokenRequired: config.authConfig.tokenRequired,\n    fetchMethod: config.authConfig.fetchMethod\n  });\n  if (config.authConfig.tokenRequired !== true) {\n    config.videoTag.dataset.videoId = \"ref:\".concat(config.videoId);\n  }\n  config.videoTag.dataset.account = config.accountId;\n  config.videoTag.dataset.player = config.playerId;\n  var player = bc(config.videoTag, config.options);\n  window.player = player;\n  if (!player) {\n    var errorMessage = 'Brightcove Player not initialised';\n    openTracing.sendError('sdc_site_video.video_load', new Error(errorMessage));\n    console.error(errorMessage);\n  }\n  exposePlayer(player, config);\n  (0,_ads__WEBPACK_IMPORTED_MODULE_4__.configureAds)(player, config);\n  (0,_player_state__WEBPACK_IMPORTED_MODULE_0__.playerState)(player, config);\n  (0,_event_bridge__WEBPACK_IMPORTED_MODULE_5__.createEventBridge)(player, config);\n  (0,_error_messages__WEBPACK_IMPORTED_MODULE_3__.errorMessages)(player, config.options);\n  (0,_playback_rights__WEBPACK_IMPORTED_MODULE_6__.getPlayBackRights)(player, config, openTracing);\n  (0,_control_bar__WEBPACK_IMPORTED_MODULE_8__.controlBar)(player, config.rootElement);\n  // rewind(player);\n  (0,_control_bar__WEBPACK_IMPORTED_MODULE_8__.live)(player);\n  // fullscreen(player, config);\n  // seekTooltips(player, config, window.videojs);\n  (0,_captions__WEBPACK_IMPORTED_MODULE_1__.initCaptions)(player, config);\n  (0,_volume__WEBPACK_IMPORTED_MODULE_2__.setInitialVolume)(player, config);\n  // tapToUnmute(player, config);\n  (0,_viewability__WEBPACK_IMPORTED_MODULE_7__.autoPauseOnNotVisible)(player, config);\n};\nvar exposePlayer = function exposePlayer(player, config) {\n  // @TODO - what is this for?\n  window.sdc = window.sdc || {};\n  window.sdc.sdcSiteVideo = window.sdc.sdcSiteVideo || {};\n  window.sdc.sdcSiteVideo[config.videoId] = player;\n  config.rootElement.player = player;\n  config.rootElement.switchVideo = _switch_video__WEBPACK_IMPORTED_MODULE_9__.switchVideo.bind(window, player, config);\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_create-player.js?");

/***/ }),

/***/ "./src/components/_error-messages.js":
/*!*******************************************!*\
  !*** ./src/components/_error-messages.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   combinedCodes: () => (/* binding */ combinedCodes),\n/* harmony export */   errorCodeTypeMap: () => (/* binding */ errorCodeTypeMap),\n/* harmony export */   errorCodes: () => (/* binding */ errorCodes),\n/* harmony export */   errorMessages: () => (/* binding */ errorMessages)\n/* harmony export */ });\nvar errorMessages = function errorMessages(player, options) {\n  var lang = options.language || 'en';\n  var messages = options.errors[lang] || [];\n  var errors = {};\n  messages.forEach(function (message) {\n    message.errorCodes.forEach(function (code) {\n      errors[code] = {\n        headline: message.headline,\n        message: message.message,\n        dismiss: message.dismiss\n      };\n    });\n  });\n  player.errors({\n    errors: errors\n  });\n};\nvar errorCodeTypeMap = {\n  1: 'MEDIA_ERR_ABORTED',\n  2: 'MEDIA_ERR_NETWORK',\n  3: 'MEDIA_ERR_DECODE',\n  4: 'MEDIA_ERR_SRC_NOT_SUPPORTED',\n  5: 'MEDIA_ERR_ENCRYPTED',\n  unknown: 'MEDIA_ERR_UNKNOWN',\n  '-1': 'PLAYER_ERR_NO_SRC',\n  '-2': 'PLAYER_ERR_TIMEOUT'\n};\nvar errorCodes = {\n  VIDEO_UNAVAILABLE: ['MEDIA_ERR_ABORTED', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_SRC_NOT_SUPPORTED', 'MEDIA_ERR_ENCRYPTED', 'MEDIA_ERR_UNKNOWN', 'PLAYER_ERR_NO_SRC', 'PLAYER_ERR_TIMEOUT', 'PLAYER_ERR_DOMAIN_RESTRICTED', 'VIDEO_CLOUD_ERR_ACCOUNT_NOT_FOUND', 'VIDEO_CLOUD_ERR_RESOURCE_NOT_FOUND', 'VIDEO_CLOUD_ERR_VIDEO_NOT_FOUND', 'VIDEO_CLOUD_ERR_NOT_PLAYABLE', 'BAD_REQUEST', 'INVALID_POLICY_KEY', 'ACCESS_DENIED', 'PLAYLIST_NOT_PLAYABLE', 'JWT_AUTH', 'VIDEO_NOT_PLAYABLE', 'VIDEO_NOT_FOUND', 'NOT_FOUND', 'PLAYLIST_NOT_FOUND', 'RESOURCE_NOT_FOUND', 'ACCOUNT_NOT_FOUND', 'METHOD_NOT_ALLOWED', 'SERVER_ERROR', 'ACCOUNT_RETRIEVE_FAILURE', 'VIDEO_RETRIEVE_FAILURE', 'VIDEO_URLS_RETRIEVE_FAILURE', 'PLAYLIST_RETRIEVE_FAILURE', 'PLAYLIST_VIDEOS_RETRIEVE_FAILURE', 'SERVICE_UNAVAILABLE', 'SERVER_TIMEOUT', 'TOKEN_REQUIRED', 'TOKEN_VALIDATION', 'FETCH_TOKEN_ERROR', 'PLAYBACK_RIGHT_REQUIRED', 'AUTH_4000',\n  // API key is invalid\n  'AUTH_4001',\n  // User Token used from too many locations\n  'AUTH_4002',\n  // User Token is invalid\n  'AUTH_4010',\n  // User has failed EU Portability Check\n  'AUTH_4011',\n  // Valid user token, customer not entitled to media item\n  'AUTH_4012',\n  // API key doesn't have access to the resource\n  'AUTH_4020',\n  // Media item is marked as deleted\n  'AUTH_4021',\n  // Media item is not a video\n  'AUTH_4030',\n  // Media item is expired\n  'AUTH_4031',\n  // Media item does not exist\n  'AUTH_4040',\n  // Rate limit reached for User Token\n  'AUTH_4041',\n  // Rate limit reached for API Key\n  'AUTH_0400',\n  // Bad Request\n  'AUTH_0400',\n  // Bad Request\n  'AUTH_0405',\n  // Method not allowed\n  'AUTH_0500',\n  // Internal Server Error\n  'AUTH_0501',\n  // Not Implemented\n  'AUTH_0502',\n  // Bad Gateway\n  'AUTH_0503',\n  // Service Unavailable\n  'AUTH_0504' // Gateway Timeout\n  ].concat(Object.keys(errorCodeTypeMap)),\n  UNSUPPORTED_LOCATION: ['PLAYER_ERR_IP_RESTRICTED', 'PLAYER_ERR_GEO_RESTRICTED', 'ACCESS_DENIED_CLIENT_GEO'],\n  CONNECTIVITY_ISSUES: ['MEDIA_ERR_NETWORK']\n};\nvar combinedCodes = ['ACCESS_DENIED_CLIENT_GEO'];\n\n//# sourceURL=webpack://ui-video-player/./src/components/_error-messages.js?");

/***/ }),

/***/ "./src/components/_event-bridge.js":
/*!*****************************************!*\
  !*** ./src/components/_event-bridge.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildBaseContext: () => (/* binding */ buildBaseContext),\n/* harmony export */   createEventBridge: () => (/* binding */ createEventBridge),\n/* harmony export */   getErrorFromPlayer: () => (/* binding */ getErrorFromPlayer),\n/* harmony export */   openTracingContext: () => (/* binding */ openTracingContext),\n/* harmony export */   playerEvents: () => (/* binding */ playerEvents),\n/* harmony export */   videoAnalyticsContext: () => (/* binding */ videoAnalyticsContext)\n/* harmony export */ });\n/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_error-messages */ \"./src/components/_error-messages.js\");\n\nvar playerEvents = {\n  PLAY: 'play',\n  ENDED: 'ended',\n  PAUSE: 'pause',\n  ERROR: 'error',\n  CAN_PLAY: 'canplay',\n  START: 'loadstart',\n  LOADED: 'loadedmetadata',\n  ADS_REQUESTED: 'ads-request',\n  ADS_LOADED: 'ads-load',\n  AD_STARTED: 'ads-ad-started',\n  AD_ENDED: 'ads-ad-ended',\n  SEEKING: 'seeking',\n  SEEKED: 'seeked'\n};\nvar playerEventTypes = {\n  ads_load: [playerEvents.ADS_REQUESTED, playerEvents.ADS_LOADED],\n  ad_playback: [playerEvents.AD_STARTED, playerEvents.AD_ENDED],\n  video_playback: [playerEvents.PLAY, playerEvents.ENDED, playerEvents.PAUSE],\n  video_load: [playerEvents.CAN_PLAY, playerEvents.ERROR],\n  video_meta_data_load: [playerEvents.START, playerEvents.LOADED],\n  seeking: [playerEvents.SEEKING, playerEvents.SEEKED]\n};\nvar prefix = 'sdc_site_video';\nvar buildBaseContext = function buildBaseContext(config, player) {\n  var context = {};\n  context.tags = {\n    videoId: config.videoId,\n    accountId: config.accountId,\n    playerId: config.playerId,\n    originatorId: config.originatorId,\n    provider: config.provider,\n    sdcComponent: prefix\n  };\n  context.error = getErrorFromPlayer(player.error());\n  if (context.error) {\n    Object.assign(context.error, context.tags);\n  }\n  return context;\n};\n\n/**\n * Add context for open tracing instrumentation\n * @param event\n * @param config\n * @param player\n * @returns Object\n */\nvar openTracingContext = function openTracingContext(event, config, player) {\n  var name = Object.keys(playerEventTypes).filter(function (key) {\n    return playerEventTypes[key].includes(event.type);\n  })[0] || event.type;\n  var baseContext = buildBaseContext(config, player);\n  return {\n    name: \"\".concat(prefix, \".\").concat(name),\n    error: baseContext.error,\n    tags: baseContext.tags\n  };\n};\nvar videoAnalyticsContext = function videoAnalyticsContext(event, config, player) {\n  var name = event.type;\n  var baseContext = buildBaseContext(config, player);\n  return {\n    name: \"\".concat(prefix, \".\").concat(name),\n    error: baseContext.error,\n    playerConfig: config,\n    player: player\n  };\n};\nvar createEventBridge = function createEventBridge(player, config) {\n  var pubSub = window.sdc && window.sdc.pubSub;\n  if (!pubSub) {\n    return;\n  }\n  var openTracingListener = function openTracingListener(event) {\n    pubSub.publish('sdcOpenTracing::trace', openTracingContext(event, config, player));\n  };\n  var videoAnalyticsListener = function videoAnalyticsListener(event) {\n    pubSub.publish('sdcVideoAnalytics::event', videoAnalyticsContext(event, config, player));\n  };\n  Object.values(playerEvents).forEach(function (playerEvent) {\n    player.on(playerEvent, openTracingListener);\n    player.on(playerEvent, videoAnalyticsListener);\n  });\n};\nvar getErrorFromPlayer = function getErrorFromPlayer(playerError) {\n  if (playerError) {\n    var code = _error_messages__WEBPACK_IMPORTED_MODULE_0__.errorCodeTypeMap[playerError.code] || playerError.code;\n    return new Error(code);\n  }\n  return null;\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_event-bridge.js?");

/***/ }),

/***/ "./src/components/_init.js":
/*!*********************************!*\
  !*** ./src/components/_init.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _utils_bridge_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bridge/init */ \"./src/utils/bridge/init.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_config */ \"./src/components/_config.js\");\n/* harmony import */ var _create_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_create-player */ \"./src/components/_create-player.js\");\n/* harmony import */ var _load_player_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_load-player-script */ \"./src/components/_load-player-script.js\");\n\n\n\n\nvar init = function init(rootElement, openTracing) {\n  openTracing.startSpan('sdc_site_video.init', 'sdc_site_video.init', null);\n  if ((0,_utils_bridge_init__WEBPACK_IMPORTED_MODULE_0__.mobileBridge)(rootElement, openTracing)) {\n    openTracing.tagSpan('sdc_site_video.init', {\n      mobileBridge: 'Enabled'\n    });\n    return;\n  }\n  var config = (0,_config__WEBPACK_IMPORTED_MODULE_1__.buildConfig)(rootElement);\n  var scriptPath = (0,_load_player_script__WEBPACK_IMPORTED_MODULE_3__.getScriptPath)(config);\n  return (0,_load_player_script__WEBPACK_IMPORTED_MODULE_3__.loadPlayerScript)(scriptPath).then(function (bc) {\n    (0,_create_player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)(config, bc, openTracing);\n    openTracing.finishSpan('sdc_site_video.init');\n  })[\"catch\"](function (error) {\n    openTracing.sendError('sdc_site_video.init', new Error(error));\n  });\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_init.js?");

/***/ }),

/***/ "./src/components/_languages.js":
/*!**************************************!*\
  !*** ./src/components/_languages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   languages: () => (/* binding */ languages)\n/* harmony export */ });\nvar languages = function languages(config) {\n  return {\n    en: {\n      'Non-Fullscreen': 'Exit Fullscreen',\n      'captions off': 'Captions off',\n      'captions settings': 'Captions settings',\n      ENG: 'English',\n      en: 'English',\n      LIVE: 'Live',\n      'tap to unmute': 'TAP TO UNMUTE',\n      rewind: 'Rewind 10s',\n      'Play Video': \"Play Video - \".concat(config.caption).concat(config.duration ? \", duration: \".concat(config.duration) : '')\n    },\n    de: {\n      'Non-Fullscreen': 'Vollbildmodus beenden',\n      Fullscreen: 'Vollbildmodus',\n      Play: 'Wiedergabe',\n      Pause: 'Pause',\n      Mute: 'Stummschalten',\n      Unmute: 'Stummschaltung aufheben',\n      'Play Video': 'Wiedergabe Video',\n      Replay: 'Nochmal'\n    }\n  };\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_languages.js?");

/***/ }),

/***/ "./src/components/_load-player-script.js":
/*!***********************************************!*\
  !*** ./src/components/_load-player-script.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getScriptPath: () => (/* binding */ getScriptPath),\n/* harmony export */   loadPlayerScript: () => (/* binding */ loadPlayerScript)\n/* harmony export */ });\nvar getScriptPath = function getScriptPath(_ref) {\n  var accountId = _ref.accountId,\n    playerId = _ref.playerId;\n  return \"https://players.brightcove.net/\".concat(accountId, \"/\").concat(playerId, \"_default/index.min.js\");\n};\nvar loadPlayerScript = function loadPlayerScript(src) {\n  return new Promise(function (resolve, reject) {\n    if (window.requirejs) {\n      window.requirejs([src], function (bc) {\n        resolve(bc);\n      });\n    } else {\n      var script = document.createElement('script');\n      script.onload = function () {\n        resolve(window.bc);\n      };\n      script.onerror = function (e) {\n        console.error('Could not fetch Brightcove library');\n        reject(null, e);\n      };\n      script.src = src;\n      document.head.appendChild(script);\n    }\n  });\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_load-player-script.js?");

/***/ }),

/***/ "./src/components/_open-tracing.js":
/*!*****************************************!*\
  !*** ./src/components/_open-tracing.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getOpenTracing: () => (/* binding */ getOpenTracing),\n/* harmony export */   openTracingStub: () => (/* binding */ openTracingStub)\n/* harmony export */ });\nvar noop = function noop() {};\nvar openTracingStub = {\n  startSpan: noop,\n  sendError: noop,\n  finishSpan: noop,\n  tagSpan: noop,\n  hasSpan: noop\n};\nvar getOpenTracing = function getOpenTracing(win) {\n  return new Promise(function (resolve) {\n    if (!win.sdc) {\n      console.log('window sdc not available');\n      resolve(openTracingStub);\n      return;\n    }\n    if (win.sdc.openTracing) {\n      console.log('open tracing is available');\n      resolve(win.sdc.openTracing);\n      return;\n    }\n    if (win.sdc.pubSub) {\n      win.sdc.pubSub.subscribe('opentracing-ready', function () {\n        console.log('get open tracing by pub sub event');\n        resolve(win.sdc.openTracing);\n      });\n    }\n\n    /* if none of the above methods work, use the fallback after 1 second */\n    setTimeout(function () {\n      if (!win.sdc.openTracing) {\n        console.log('open tracing fallback');\n        resolve(openTracingStub);\n      }\n    }, 1000);\n  });\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_open-tracing.js?");

/***/ }),

/***/ "./src/components/_playback-rights.js":
/*!********************************************!*\
  !*** ./src/components/_playback-rights.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCatalogErrorCode: () => (/* binding */ getCatalogErrorCode),\n/* harmony export */   getPlayBackRights: () => (/* binding */ getPlayBackRights),\n/* harmony export */   throwPlayerError: () => (/* binding */ throwPlayerError)\n/* harmony export */ });\n/* harmony import */ var _utils_token_getter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/token-getter */ \"./src/utils/token-getter.js\");\n/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_error-messages */ \"./src/components/_error-messages.js\");\n\n\nvar getPlayBackRights = function getPlayBackRights(player, config, openTracing) {\n  if (config.authConfig.tokenRequired !== true) {\n    return false;\n  }\n  return (0,_utils_token_getter__WEBPACK_IMPORTED_MODULE_0__.getToken)(config).then(function (response) {\n    if (response.errorCode) {\n      throwPlayerError(player, openTracing, response);\n      return false;\n    }\n    if (!response) {\n      return false;\n    }\n    openTracing.tagSpan('sdc_site_video.video_load', {\n      tokenSuccess: true\n    });\n\n    // Set policy key to null\n    player.catalog.setPolicyKey(null);\n\n    // Set token to the player, and load\n    player.catalog.setBcovAuthToken(response);\n    player.catalog.get({\n      id: \"ref:\".concat(config.videoId),\n      type: 'video'\n    }).then(function (data) {\n      player.catalog.load(data);\n    })[\"catch\"](function (error) {\n      var errorData = error.data[0];\n      throwPlayerError(player, openTracing, {\n        errorCode: errorData.error_code,\n        errorSubCode: errorData.error_subcode,\n        message: errorData.message\n      });\n    });\n    return true;\n  })[\"catch\"](function (error) {\n    throwPlayerError(player, openTracing, error);\n    return false;\n  });\n};\nvar throwPlayerError = function throwPlayerError(player, openTracing, _ref) {\n  var _ref$errorCode = _ref.errorCode,\n    errorCode = _ref$errorCode === void 0 ? 'FETCH_TOKEN_ERROR' : _ref$errorCode,\n    _ref$errorSubCode = _ref.errorSubCode,\n    errorSubCode = _ref$errorSubCode === void 0 ? null : _ref$errorSubCode,\n    _ref$message = _ref.message,\n    message = _ref$message === void 0 ? null : _ref$message;\n  player.error({\n    code: getCatalogErrorCode({\n      errorCode: errorCode,\n      errorSubCode: errorSubCode\n    }),\n    message: message\n  });\n  var tagContext = {\n    tokenSuccess: false,\n    errorCode: errorCode\n  };\n  if (errorSubCode) {\n    tagContext.errorSubCode = errorSubCode;\n  }\n  openTracing.tagSpan('sdc_site_video.video_load', tagContext);\n};\nvar getCatalogErrorCode = function getCatalogErrorCode(_ref2) {\n  var errorCode = _ref2.errorCode,\n    errorSubCode = _ref2.errorSubCode;\n  var combinedErrCode = \"\".concat(errorCode, \"_\").concat(errorSubCode);\n  return _error_messages__WEBPACK_IMPORTED_MODULE_1__.combinedCodes.includes(combinedErrCode) ? combinedErrCode : errorCode;\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_playback-rights.js?");

/***/ }),

/***/ "./src/components/_player-state.js":
/*!*****************************************!*\
  !*** ./src/components/_player-state.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerState: () => (/* binding */ playerState)\n/* harmony export */ });\nvar playerState = function playerState(player, config) {\n  player.ready(function () {\n    config.rootElement.dataset.state = 'ready';\n  });\n  player.on('loadeddata', function (event) {\n    console.log('LOADEDDATA', event);\n    player.titleBar.el_.innerHTML = player.mediainfo.name;\n  });\n  player.one('play', function () {\n    config.rootElement.dataset.state = 'loading';\n  });\n  player.on('playing', function () {\n    config.rootElement.dataset.state = 'done';\n  });\n  player.on('ads-ad-started', function () {\n    config.rootElement.dataset.state = 'done';\n    config.rootElement.dataset.adsState = 'started';\n  });\n  player.on('ads-pod-ended', function () {\n    config.rootElement.dataset.adsState = 'ended';\n  });\n  player.on('error', function (error) {\n    console.log('ERROR', error);\n    config.rootElement.dataset.state = 'done';\n    console.error(error);\n  });\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_player-state.js?");

/***/ }),

/***/ "./src/components/_switch-video.js":
/*!*****************************************!*\
  !*** ./src/components/_switch-video.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAspectRatio: () => (/* binding */ getAspectRatio),\n/* harmony export */   switchVideo: () => (/* binding */ switchVideo)\n/* harmony export */ });\nfunction getAspectRatio(width, height) {\n  function gcd(a, b) {\n    while (b !== 0) {\n      var temp = b;\n      b = a % b;\n      a = temp;\n    }\n    return a;\n  }\n  var divisor = gcd(width, height);\n  var ratioWidth = width / divisor;\n  var ratioHeight = height / divisor;\n  return \"\".concat(ratioWidth, \"/\").concat(ratioHeight);\n}\nvar switchVideo = function switchVideo(player, config, videoId) {\n  if (config.videoId === videoId) {\n    return;\n  }\n  ;\n  var videoEl = config.videoTag.querySelector('video');\n\n  // player.playlist = player.playlist || {};\n  player.catalog.get({\n    id: \"ref:\".concat(videoId),\n    type: 'video'\n  }).then(function (video) {\n    // switch live state on rootElement \n    // config.rootElement.dataset.isLiveStream = video.duration === 0;\n\n    // if(player.ads && player.ads.isAdPlaying && player.ads.isAdPlaying()) {\n    //   return;\n    // }\n    // load video and play\n\n    video.poster = null;\n    player.catalog.load(video);\n    player.one(['loadeddata'], function () {\n      var videoWidth = videoEl.videoWidth,\n        videoHeight = videoEl.videoHeight;\n      var isPortrait = videoHeight > videoWidth;\n      var aspectRatio = getAspectRatio(videoWidth || 16, videoHeight || 9);\n      config.playerBody.style.setProperty('--aspect-ratio', aspectRatio);\n      config.playerBody.style.setProperty(\"--video-max-width\", isPortrait ? \"360px\" : \"100%\");\n      config.videoId = video.referenceId;\n      video.duration > 0 && player.currentTime(0);\n      player.play();\n    });\n  });\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_switch-video.js?");

/***/ }),

/***/ "./src/components/_viewability.js":
/*!****************************************!*\
  !*** ./src/components/_viewability.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autoPauseOnNotVisible: () => (/* binding */ autoPauseOnNotVisible),\n/* harmony export */   handleVisibilityChange: () => (/* binding */ handleVisibilityChange)\n/* harmony export */ });\nvar autoPauseOnNotVisible = function autoPauseOnNotVisible(player, config) {\n  if (window.sdc.isMobile && config.autoPauseOnNotVisible) {\n    player.ready(function () {\n      document.addEventListener('visibilitychange', function () {\n        handleVisibilityChange(player);\n      }, false);\n    });\n  }\n};\nvar handleVisibilityChange = function handleVisibilityChange(player) {\n  if (player.ima3) {\n    if (player.ima3.adPlayer && player.ima3.adsManager) {\n      player.ima3.adPlayer.pause();\n    }\n  }\n  player.pause();\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_viewability.js?");

/***/ }),

/***/ "./src/components/_volume.js":
/*!***********************************!*\
  !*** ./src/components/_volume.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setInitialVolume: () => (/* binding */ setInitialVolume),\n/* harmony export */   tapToUnmute: () => (/* binding */ tapToUnmute)\n/* harmony export */ });\nvar setInitialVolume = function setInitialVolume(player, config) {\n  player.one('play', function () {\n    if (player.muted() === false) {\n      var lastVolume = window.localStorage.getItem('brightcove-player-last-volume');\n      requestAnimationFrame(function () {\n        player.volume(Number(lastVolume || '0.999'));\n      });\n    }\n  });\n  player.on(['volumechange', 'ads-volumechange'], function () {\n    config.rootElement.dataset.isMuted = false;\n    window.localStorage.setItem('brightcove-player-last-volume', player.volume());\n  });\n};\nvar tapToUnmute = function tapToUnmute(player, config) {\n  player.on('playing', function () {\n    config.rootElement.dataset.isMuted = player.muted();\n  });\n  var button = document.createElement('button');\n  button.classList.add('ui-video-player-muted');\n  button.textContent = player.localize('tap to unmute');\n  button.onclick = function () {\n    var lastVolume = window.localStorage.getItem('brightcove-player-last-volume');\n    player.muted(false);\n    player.volume(Number(lastVolume || '0.999'));\n    config.rootElement.dataset.isMuted = false;\n  };\n  config.rootElement.appendChild(button);\n};\n\n//# sourceURL=webpack://ui-video-player/./src/components/_volume.js?");

/***/ }),

/***/ "./src/components/ui-video-player.js":
/*!*******************************************!*\
  !*** ./src/components/ui-video-player.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_init */ \"./src/components/_init.js\");\n/* harmony import */ var _open_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_open-tracing */ \"./src/components/_open-tracing.js\");\n/* harmony import */ var _consent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_consent */ \"./src/components/_consent.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (rootElement) {\n  if (!rootElement) {\n    console.error('No rootElement found');\n    return;\n  }\n  return (0,_consent__WEBPACK_IMPORTED_MODULE_2__.checkConsent)(rootElement).then(function () {\n    return (0,_open_tracing__WEBPACK_IMPORTED_MODULE_1__.getOpenTracing)(window);\n  }).then(function (openTracing) {\n    return (0,_init__WEBPACK_IMPORTED_MODULE_0__.init)(rootElement, openTracing);\n  })[\"catch\"](function (error) {\n    console.log(error);\n    console.error('Could not initialise video component');\n  });\n});\n\n//# sourceURL=webpack://ui-video-player/./src/components/ui-video-player.js?");

/***/ }),

/***/ "./src/preview.js":
/*!************************!*\
  !*** ./src/preview.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_ui_video_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/ui-video-player */ \"./src/components/ui-video-player.js\");\n\n__webpack_require__(/*! ../styles/preview.scss */ \"./styles/preview.scss\");\n\n// check consent mock\nwindow.sdc = {\n  checkConsent: function checkConsent(rootElement, fn) {\n    fn();\n  }\n};\n\n// consent data mock\n// window.__tcfapi = (event, version, fn) => {\n//   fn({ gdprApplies: true, tcString: '123' }, { success: true });\n// };\n\n// web bridge\n// window.webBridgeEnabled = true;\n// window.webWidgetLoaded = {postMessage: (object) => window.widgetLoadedObject = object};\n\ndocument.querySelectorAll('[data-component-name=\"ui-video-player\"]').forEach(function (item) {\n  (0,_src_components_ui_video_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item);\n  var input = document.createElement('input');\n  input.placeholder = 'input video id';\n  input.value = \"ddc9a0f7-197c-44c5-97c4-2a9a6908bf6f\";\n  input.style.cssText = \"width: 300px; font-size: 15px; padding: 0.2em 0.5em\";\n  var button = document.createElement('button');\n  button.textContent = 'Switch video';\n  button.style.cssText = \"font-size: 15px; padding: 0.2em 0.5em\";\n  button.onclick = function () {\n    input.value && item.switchVideo(input.value);\n  };\n  document.body.insertAdjacentElement('beforeEnd', input);\n  document.body.insertAdjacentElement('beforeEnd', button);\n});\n\n//# sourceURL=webpack://ui-video-player/./src/preview.js?");

/***/ }),

/***/ "./src/utils/auth-service-provider.js":
/*!********************************************!*\
  !*** ./src/utils/auth-service-provider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAuthToken: () => (/* binding */ getAuthToken)\n/* harmony export */ });\n/* global window */\nvar getAuthToken = function getAuthToken(videoId, originatorHandle) {\n  if (!window.sdc || !window.sdc.authManager || typeof window.sdc.authManager.getVideoToken !== 'function') {\n    return Promise.reject(false);\n  }\n  return window.sdc.authManager.getVideoToken({\n    videoId: videoId,\n    originatorHandle: originatorHandle\n  }).then(function (response) {\n    return response;\n  });\n};\n\n//# sourceURL=webpack://ui-video-player/./src/utils/auth-service-provider.js?");

/***/ }),

/***/ "./src/utils/bridge/a11y/accessibility.js":
/*!************************************************!*\
  !*** ./src/utils/bridge/a11y/accessibility.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (rootElement) {\n  // add new attributes to parent div for screenreaders\n  var videoContainerEl = rootElement.querySelector('[data-role=\"bridge-controller\"]');\n  videoContainerEl.setAttribute('id', 'mobile-video-container');\n  videoContainerEl.setAttribute('role', 'button');\n  videoContainerEl.setAttribute('title', 'Video. Play video');\n\n  // add new attributes to video element for screenreaders\n  var videoEl = rootElement.querySelector('.ui-video-player-tag');\n  videoEl.setAttribute('aria-hidden', 'true');\n  videoEl.setAttribute('aria-labelledby', 'mobile-video-container');\n});\n\n//# sourceURL=webpack://ui-video-player/./src/utils/bridge/a11y/accessibility.js?");

/***/ }),

/***/ "./src/utils/bridge/bridge-wrapper.js":
/*!********************************************!*\
  !*** ./src/utils/bridge/bridge-wrapper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mobileBridgeWrapper: () => (/* binding */ mobileBridgeWrapper)\n/* harmony export */ });\n/* harmony import */ var _window_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window-utils */ \"./src/utils/window-utils.js\");\n\nvar mobileBridgeWrapper = {\n  widgetLoaded: function widgetLoaded(obj) {\n    _window_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBridgeContainer(window).webWidgetLoaded.postMessage(obj);\n  },\n  widgetInteracted: function widgetInteracted(obj) {\n    _window_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBridgeContainer(window).webWidgetInteracted.postMessage(obj);\n  }\n};\n\n//# sourceURL=webpack://ui-video-player/./src/utils/bridge/bridge-wrapper.js?");

/***/ }),

/***/ "./src/utils/bridge/build-video-object.js":
/*!************************************************!*\
  !*** ./src/utils/bridge/build-video-object.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildVideoObject: () => (/* binding */ buildVideoObject)\n/* harmony export */ });\n/* harmony import */ var _window_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window-utils */ \"./src/utils/window-utils.js\");\n\nvar buildVideoObject = function buildVideoObject(rootElement) {\n  var videoObject = {};\n  videoObject.widget = Object.assign({}, rootElement.dataset);\n  videoObject.widget.frame = getVideoFrame(rootElement);\n  videoObject.widget.isLiveStream = videoObject.widget.isLiveStream === 'true';\n  videoObject.widget.sensitive = videoObject.widget.sensitive === 'true';\n  videoObject.type = 'video';\n  videoObject.componentName = videoObject.widget.componentName;\n  return videoObject;\n};\nvar getVideoFrame = function getVideoFrame(rootElement) {\n  if (_window_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isIframe(window)) {\n    return null;\n  }\n  var videoContainer = rootElement.querySelector('[data-role=\"bridge-controller\"]');\n  return {\n    left: _window_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getOffset(rootElement, true),\n    top: _window_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getOffset(rootElement),\n    height: videoContainer.offsetHeight,\n    width: videoContainer.offsetWidth\n  };\n};\n\n//# sourceURL=webpack://ui-video-player/./src/utils/bridge/build-video-object.js?");

/***/ }),

/***/ "./src/utils/bridge/init.js":
/*!**********************************!*\
  !*** ./src/utils/bridge/init.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mobileBridge: () => (/* binding */ mobileBridge)\n/* harmony export */ });\n/* harmony import */ var _window_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window-utils */ \"./src/utils/window-utils.js\");\n/* harmony import */ var _bridge_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bridge-wrapper */ \"./src/utils/bridge/bridge-wrapper.js\");\n/* harmony import */ var _build_video_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./build-video-object */ \"./src/utils/bridge/build-video-object.js\");\n/* harmony import */ var _register_bridge_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-bridge-handlers */ \"./src/utils/bridge/register-bridge-handlers.js\");\n/* harmony import */ var _register_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-events */ \"./src/utils/bridge/register-events.js\");\n/* harmony import */ var _a11y_accessibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./a11y/accessibility */ \"./src/utils/bridge/a11y/accessibility.js\");\n\n\n\n\n\n\nvar mobileBridge = function mobileBridge(rootElement, openTracing) {\n  var root = _window_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRoot(window);\n  if (!root || typeof root.webBridgeEnabled === 'undefined') {\n    return false;\n  }\n  openTracing.startSpan('sdc_site_video.bridge.init', 'sdc_site_video.bridge.init', null);\n  rootElement.setAttribute('data-bridge', 'true');\n  var videoObject = (0,_build_video_object__WEBPACK_IMPORTED_MODULE_2__.buildVideoObject)(rootElement);\n  var videoObjectStringified = JSON.stringify(videoObject);\n  _bridge_wrapper__WEBPACK_IMPORTED_MODULE_1__.mobileBridgeWrapper.widgetLoaded(videoObjectStringified);\n  openTracing.tagSpan('sdc_site_video.bridge.init', {\n    sdcVideoId: videoObject.widget.sdcVideoId,\n    originatorHandle: videoObject.widget.originatorHandle,\n    playerId: videoObject.widget.playerId,\n    provider: videoObject.widget.provider,\n    sensitive: videoObject.widget.sensitive,\n    packageName: videoObject.widget.packageName,\n    sportCategory: videoObject.widget.sportCategory\n  });\n  _register_events__WEBPACK_IMPORTED_MODULE_4__.registerEvents.click(rootElement);\n  (0,_a11y_accessibility__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(rootElement);\n  (0,_register_bridge_handlers__WEBPACK_IMPORTED_MODULE_3__.registerBridgeHandlers)(root);\n  openTracing.finishSpan('sdc_site_video.bridge.init');\n  return true;\n};\n\n//# sourceURL=webpack://ui-video-player/./src/utils/bridge/init.js?");

/***/ }),

/***/ "./src/utils/bridge/register-bridge-handlers.js":
/*!******************************************************!*\
  !*** ./src/utils/bridge/register-bridge-handlers.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerBridgeHandlers: () => (/* binding */ registerBridgeHandlers)\n/* harmony export */ });\n/* harmony import */ var _switch_player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-player-state */ \"./src/utils/bridge/switch-player-state.js\");\n\nvar registerBridgeHandlers = function registerBridgeHandlers(root) {\n  if (root.webBridge && 'switchPlayerState' in root.webBridge) {\n    return;\n  }\n  root.webBridge = {\n    switchPlayerState: _switch_player_state__WEBPACK_IMPORTED_MODULE_0__.switchPlayerState\n  };\n};\n\n//# sourceURL=webpack://ui-video-player/./src/utils/bridge/register-bridge-handlers.js?");

/***/ }),

/***/ "./src/utils/bridge/register-events.js":
/*!*********************************************!*\
  !*** ./src/utils/bridge/register-events.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerEvents: () => (/* binding */ registerEvents)\n/* harmony export */ });\n/* harmony import */ var _bridge_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge-wrapper */ \"./src/utils/bridge/bridge-wrapper.js\");\n/* harmony import */ var _build_video_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-video-object */ \"./src/utils/bridge/build-video-object.js\");\n\n\nvar registerEvents = {\n  click: function click(rootElement) {\n    rootElement.addEventListener('click', function (event) {\n      event.stopPropagation();\n      var videoObject = JSON.stringify((0,_build_video_object__WEBPACK_IMPORTED_MODULE_1__.buildVideoObject)(rootElement));\n      _bridge_wrapper__WEBPACK_IMPORTED_MODULE_0__.mobileBridgeWrapper.widgetInteracted(videoObject);\n      return false;\n    }, false);\n  }\n};\n\n//# sourceURL=webpack://ui-video-player/./src/utils/bridge/register-events.js?");

/***/ }),

/***/ "./src/utils/bridge/switch-player-state.js":
/*!*************************************************!*\
  !*** ./src/utils/bridge/switch-player-state.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   switchPlayerState: () => (/* binding */ switchPlayerState)\n/* harmony export */ });\n/* harmony import */ var _window_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window-utils */ \"./src/utils/window-utils.js\");\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\nvar switchPlayerTransactionKey = 'sdc_site_video.bridge.switch_player_state';\nvar switchPlayerValidateSpanKey = 'sdc_site_video.bridge.switch_player_state.validate';\nvar playerStates = {\n  loading: 'loading',\n  ready: 'ready',\n  failed: 'failed',\n  restricted: 'restricted'\n};\nfunction switchPlayerState(config) {\n  var openTracing = _window_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTracer();\n  openTracing.startSpan(switchPlayerTransactionKey, switchPlayerTransactionKey, config);\n  var payload = validatePayload(config, openTracing);\n  if (payload.success === 'true') {\n    setPlayerState(payload);\n  }\n\n  // finish span after the current event loop tick to avoid race conditions\n  setTimeout(function () {\n    openTracing.finishSpan(switchPlayerTransactionKey);\n  }, 0);\n  delete payload.players;\n  return payload;\n}\nvar getPlayers = function getPlayers(videoId) {\n  var parentDocument = _window_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRoot(window).document;\n  if (parentDocument === null) {\n    return [];\n  }\n  var iframeList = parentDocument.querySelectorAll('iframe');\n  var players = Array.prototype.slice.call(parentDocument.querySelectorAll(\"[data-video-id='\".concat(videoId, \"']\")));\n  var _iterator = _createForOfIteratorHelper(iframeList),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var iframeElement = _step.value;\n      try {\n        var iframedPlayer = iframeElement.contentWindow.document.querySelector(\"[data-video-id='\".concat(videoId, \"']\"));\n        if (iframedPlayer) {\n          players.push(iframedPlayer);\n        }\n      } catch (err) {\n        console.error(err);\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return players;\n};\nvar validatePayload = function validatePayload(config, openTracing) {\n  openTracing.startSpan(switchPlayerValidateSpanKey, switchPlayerValidateSpanKey, null);\n  var object = {\n    success: 'true',\n    players: getPlayers(config.videoId),\n    videoId: config.videoId,\n    state: playerStates[config.state]\n  };\n  Object.keys(object).forEach(function (key) {\n    if (!object[key] || Array.isArray(object[key]) && !object[key].length) {\n      object.success = 'false';\n      object.error = getErrorMessage(key, config);\n      var error = new Error(\"[\".concat(switchPlayerValidateSpanKey, \"]: \").concat(object.error));\n      openTracing.tagSpan(switchPlayerValidateSpanKey, object);\n      openTracing.sendError(switchPlayerValidateSpanKey, error);\n    }\n  });\n  object.message = config.message;\n  openTracing.tagSpan(switchPlayerValidateSpanKey, object);\n\n  // finish span after the current event loop tick to avoid race conditions\n  setTimeout(function () {\n    openTracing.finishSpan(switchPlayerValidateSpanKey);\n  }, 0);\n  return object;\n};\nvar setPlayerState = function setPlayerState(config) {\n  var _iterator2 = _createForOfIteratorHelper(config.players),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var singlePlayer = _step2.value;\n      var bridgeMessageText = singlePlayer.querySelector('[data-role=\"bridge-message-text\"]');\n      singlePlayer.setAttribute('data-state', config.state);\n      if (bridgeMessageText && config.message) {\n        bridgeMessageText.textContent = config.message;\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n};\nvar getErrorMessage = function getErrorMessage(key, config) {\n  if (key === 'players') {\n    return \"Setting player failed, no player found for \".concat(config.videoId);\n  }\n  return \"Setting \".concat(key, \" failed, '\").concat(config[key], \"' was passed in.\");\n};\n\n//# sourceURL=webpack://ui-video-player/./src/utils/bridge/switch-player-state.js?");

/***/ }),

/***/ "./src/utils/token-getter.js":
/*!***********************************!*\
  !*** ./src/utils/token-getter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken)\n/* harmony export */ });\n/* harmony import */ var _auth_service_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-service-provider */ \"./src/utils/auth-service-provider.js\");\n/* harmony import */ var _url_token_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-token-fetch */ \"./src/utils/url-token-fetch.js\");\n\n\nvar getToken = function getToken(config) {\n  if (config.authConfig.fetchMethod === 'auth-manager') {\n    return (0,_auth_service_provider__WEBPACK_IMPORTED_MODULE_0__.getAuthToken)(config.sdcVideoId, config.originatorHandle);\n  }\n  if (config.authConfig.fetchMethod === 'url') {\n    return (0,_url_token_fetch__WEBPACK_IMPORTED_MODULE_1__.simpleUrlTokenFetch)(config);\n  }\n  return Promise.reject('Unknown fetch method supplied');\n};\n\n//# sourceURL=webpack://ui-video-player/./src/utils/token-getter.js?");

/***/ }),

/***/ "./src/utils/url-token-fetch.js":
/*!**************************************!*\
  !*** ./src/utils/url-token-fetch.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchRetry: () => (/* binding */ _fetchRetry),\n/* harmony export */   getBody: () => (/* binding */ getBody),\n/* harmony export */   getFormBody: () => (/* binding */ getFormBody),\n/* harmony export */   simpleUrlTokenFetch: () => (/* binding */ simpleUrlTokenFetch)\n/* harmony export */ });\nvar simpleUrlTokenFetch = function simpleUrlTokenFetch(config) {\n  var authConfig = config.authConfig,\n    videoId = config.videoId,\n    originatorHandle = config.originatorHandle;\n  var url = authConfig.url,\n    fetchOptions = authConfig.fetchOptions,\n    headers = authConfig.headers;\n  var maxRetries = fetchOptions.maxRetries || 3;\n  var backOff = fetchOptions.backOff || 500;\n  if (fetchOptions.encoded) {\n    headers.Authorization = window.atob(headers.Authorization);\n  }\n  var fetchConfig = {\n    method: fetchOptions.method,\n    headers: headers,\n    body: getBody({\n      authConfig: authConfig,\n      videoId: videoId,\n      originatorHandle: originatorHandle\n    })\n  };\n  return _fetchRetry(url, fetchConfig, maxRetries, backOff).then(function (response) {\n    return response.json();\n  });\n};\nvar getBody = function getBody(_ref) {\n  var authConfig = _ref.authConfig,\n    videoId = _ref.videoId,\n    originatorHandle = _ref.originatorHandle;\n  if (authConfig.fetchOptions.body) {\n    return JSON.stringify(authConfig.fetchOptions.body);\n  }\n  return getFormBody({\n    fileReference: videoId,\n    v: authConfig.fetchOptions.v,\n    originatorHandle: originatorHandle\n  });\n};\nvar getFormBody = function getFormBody(data) {\n  var formBody = [];\n  Object.keys(data).forEach(function (key) {\n    var encodedKey = encodeURIComponent(key);\n    var encodedValue = encodeURIComponent(data[key]);\n    formBody.push(\"\".concat(encodedKey, \"=\").concat(encodedValue));\n  });\n  return formBody.join('&');\n};\nvar _fetchRetry = function fetchRetry(url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var retries = arguments.length > 2 ? arguments[2] : undefined;\n  var backOff = arguments.length > 3 ? arguments[3] : undefined;\n  return fetch(url, options).then(function (response) {\n    if (response.status >= 500 && retries > 0) {\n      return new Promise(function (resolve) {\n        setTimeout(function () {\n          resolve(_fetchRetry(url, options, retries - 1, backOff));\n        }, backOff);\n      });\n    }\n    return response;\n  });\n};\n\n\n//# sourceURL=webpack://ui-video-player/./src/utils/url-token-fetch.js?");

/***/ }),

/***/ "./src/utils/window-utils.js":
/*!***********************************!*\
  !*** ./src/utils/window-utils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_open_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/_open-tracing */ \"./src/components/_open-tracing.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  /**\n   * Determines if the passed window object is an iframe\n   * @param {Object} window The window object to assess\n   * @return {Boolean}\n   */\n  isIframe: function isIframe(window) {\n    return window.self !== window.top;\n  },\n  /**\n   * Returns the parent window if in an iframe, or the passed window if not\n   * @param {Object} window The window object to assess\n   * @return {Object}\n   */\n  getRoot: function getRoot(window) {\n    if (this.isIframe(window)) {\n      try {\n        // check if we have access to the top window properties\n        window.top.document;\n        return window.top;\n      } catch (e) {\n        return null;\n      }\n    }\n    return window;\n  },\n  getBridgeContainer: function getBridgeContainer(window) {\n    var root = this.getRoot(window);\n    return root.webkit ? root.webkit.messageHandlers : root;\n  },\n  getTracer: function getTracer() {\n    return window.sdc && window.sdc.openTracing ? window.sdc.openTracing : _components_open_tracing__WEBPACK_IMPORTED_MODULE_0__.openTracingStub;\n  },\n  getOffset: function getOffset(element) {\n    var horizontal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    if (!element) return 0;\n    return this.getOffset(element.offsetParent, horizontal) + (horizontal ? element.offsetLeft : element.offsetTop);\n  }\n});\n\n//# sourceURL=webpack://ui-video-player/./src/utils/window-utils.js?");

/***/ }),

/***/ "./styles/preview.scss":
/*!*****************************!*\
  !*** ./styles/preview.scss ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/sass-loader/dist/cjs.js!./preview.scss */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/sass-loader/dist/cjs.js!./styles/preview.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _local_lib_node_modules_sdc_ui_toolbelt_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__ : _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/sass-loader/dist/cjs.js!./preview.scss */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/sass-loader/dist/cjs.js!./styles/preview.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!../../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/sass-loader/dist/cjs.js!./preview.scss */ \"../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/css-loader/dist/cjs.js!../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/sass-loader/dist/cjs.js!./styles/preview.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__ : _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__ : _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _local_lib_node_modules_sdc_ui_toolbelt_node_modules_css_loader_dist_cjs_js_local_lib_node_modules_sdc_ui_toolbelt_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ui-video-player/./styles/preview.scss?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f2d0ab0f2c5791521de4")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "ui-video-player:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateui_video_player"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/eventsource-polyfill/dist/browserify-eventsource.js");
/******/ 	__webpack_require__("../../local/lib/node_modules/@sdc/ui-toolbelt/node_modules/webpack-hot-middleware/client.js?reload=true");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/preview.js");
/******/ 	
/******/ })()
;