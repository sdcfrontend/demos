define('component-loader', [], function() {
  return {
    // defualt css selector to grab components out of the dom
    cssSelector: '[data-component-name]',

    // init the component loader
    init: function(selector) {
      // override default selector if set
      if (selector) {
        this.cssSelector = selector;
      }

      this.addAnimationStartListener();
      this.initCss();
    },

    // ensure number strings are converted to proper numbers
    parseType: function(item) {
      if (!isNaN(parseInt(item, 10))) {
        item = parseInt(item, 10);
      }

      return item;
    },

    toCamelCase: function(string) {
      var attribute = '';

      string = string.replace(/^data-/i, '');
      string.split('-').forEach(function(chunk) {
        attribute += chunk.charAt(0).toUpperCase() + chunk.slice(1);
      });

      return attribute.charAt(0).toLowerCase() + attribute.slice(1);
    },

    callFunction: function(element, options) {
      // check that its defined in our config
      if (!window.requirejs.s.contexts._.config.paths[options.componentName]) {
        // console.log('component path not defined in requirejs config', options.componentName);
        return;
      }

      // use loaded component if available
      if (window.requirejs.defined(options.componentName)) {
        var component = window.requirejs.s.contexts._.defined[options.componentName];
        this.callComponent(component, element, options);
        return;
      }

      // otherwise load component
      window.requirejs([options.componentName], function(component) {
        this.callComponent(component, element, options);
      }.bind(this));
    },

    callComponent: function(component, element, options) {
      if (component) {
        if (typeof component === 'function') {
          component(element, options);
        } else if (typeof component === 'object' && component.default) {
          component.default(element, options);
        } 
        else if (typeof component === 'object' && component.init) {
          component.init(element, options);
        }
        else {
          console.error('component, component.default, component.init is not a function', options.componentName)
        }

        element.setAttribute('data-init', 'true');
      }
    },

    processElement: function(element) {
      // extract data attributes from element
      var nodemap = element.attributes;
      var options = {};

      for (var attr in nodemap) {
        var attribute = nodemap[attr].nodeName;
        var value = this.parseType(nodemap[attr].nodeValue);
        if (attribute && attribute.match(/^data-/)) {
          options[this.toCamelCase(attribute)] = value;
        }
      }

      // call function with the element and options
      this.callFunction(element, options);
    },

    addAnimationStartListener: function() {
      // add animation start event listener
      ['animationstart', 'webkitAnimationStart'].forEach(function(eventName) {

        document.addEventListener(eventName, function(e) {
          if (e.animationName === 'component-loader') {
            this.processElement(e.target);
          }

        }.bind(this));
      }.bind(this));
    },

    initCss: function() {
      //trigger loader by adding css to dom
      var style = document.createElement('style');

      style.textContent = [
        "@-webkit-keyframes component-loader {0%{outline:0}100%{outline:0 solid red}}",
        "@keyframes component-loader {0%{outline:0}100%{outline:0 solid red}}",
        this.cssSelector,
        ':not([data-init=true])',
        "{-webkit-animation: component-loader 0.01s;animation: component-loader 0.01s}"
      ].join('');

      document.querySelector('head').appendChild(style);
    }
  }
});

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define('ui-sitewide-mpu',[], factory);
	else if(typeof exports === 'object')
		exports["ui-sitewide-mpu"] = factory();
	else
		root["ui-sitewide-mpu"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ui-sitewide-mpu/node_modules/ui-project-base/js/helpers/check-consent.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/node_modules/ui-project-base/js/helpers/check-consent.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function checkConsent(_x, _x2) {
  return _checkConsent.apply(this, arguments);
}
function _checkConsent() {
  _checkConsent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(rootElement, callback) {
    var observer;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(rootElement === null)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          if (!(!rootElement.dataset.consent || rootElement.dataset.consent.toString() !== 'true')) {
            _context.next = 7;
            break;
          }
          observer = new MutationObserver(function (mutationsList, observer) {
            var _iterator = _createForOfIteratorHelper(mutationsList),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var mutation = _step.value;
                if (mutation.type !== 'attributes' || mutation.attributeName !== 'data-consent' || !mutation.target.attributes.getNamedItem(mutation.attributeName).value) {
                  continue;
                }
                callback();
                observer.disconnect();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
          observer.observe(rootElement, {
            attributes: true
          });
          _context.next = 9;
          break;
        case 7:
          _context.next = 9;
          return callback();
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _checkConsent.apply(this, arguments);
}
module.exports = checkConsent;

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/library.js":
/*!****************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/library.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   load: () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var _utils_open_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/open-tracing */ "./node_modules/ui-sitewide-mpu/src/components/utils/open-tracing.js");
/* global window, document */
/* eslint import/namespace: ['error', { allowComputed: true }] */


/**
 * Load the googletag library
 */
function load() {
  // if the library is already present then bail out
  if (window.googletag && window.googletag._loadStarted_) {
    return;
  }

  // googletag needs to be registered as a global var
  window.googletag = window.googletag || {
    cmd: []
  };

  //  GPT library load time.
  var libraryLoadSpan = (0,_utils_open_tracing__WEBPACK_IMPORTED_MODULE_0__.useTracer)().startSpan(Math.floor(Math.random() * 1000),
  // Random key to avoid key collisions in our OpenTracing wrapper.
  'sdc-site-mpu.library-load', {
    url: window.location.href
  });

  // fetch the Google Publisher Tag (GPT) library
  var gads = document.createElement('script');
  gads.dataset.consent = false;
  gads.dataset.vendorName = 'google-tag-manager';
  document.head.appendChild(gads);
  gads.onload = function () {
    // eslint-disable-line func-names
    libraryLoadSpan && libraryLoadSpan.finish();
  };
  var init = function init() {
    gads.src = 'https://www.googletagservices.com/tag/js/gpt.js';
  };
  if (!window.sdc || !window.sdc.checkConsent) {
    init();
    return;
  }
  window.sdc.checkConsent(gads, init);
  if (window.sdc && window.sdc.executeConsentByElement) {
    window.sdc.executeConsentByElement(gads);
  }
}

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/peer39.js":
/*!***************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/peer39.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_open_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/open-tracing */ "./node_modules/ui-sitewide-mpu/src/components/utils/open-tracing.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var id = _ref.id,
    peer39Url = _ref.peer39Url,
    peer39Id = _ref.peer39Id;
  return new Promise(function (resolve) {
    var waitingForPeer39 = (0,_utils_open_tracing__WEBPACK_IMPORTED_MODULE_0__.useTracer)().startSpan(Math.floor(Math.random() * 1000),
    // Random key to avoid key collisions in our OpenTracing wrapper.
    'sdc-site-mpu.waiting-for-peer39', {
      slot: id,
      url: window.location.href
    });
    var script = document.createElement('script');
    script.id = 'peer39ScriptLoader';
    document.head.appendChild(script);
    script.src = peer39Url;
    window["afterFinished_".concat(peer39Id)] = function () {
      resolve('success');
      waitingForPeer39 && waitingForPeer39.finish();
    };
  });
});

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/slot-enablement/gpt-lazyload.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/slot-enablement/gpt-lazyload.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLazyload)
/* harmony export */ });
/* harmony import */ var ui_project_base_js_helpers_check_consent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-project-base/js/helpers/check-consent */ "./node_modules/ui-sitewide-mpu/node_modules/ui-project-base/js/helpers/check-consent.js");
/* harmony import */ var ui_project_base_js_helpers_check_consent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_project_base_js_helpers_check_consent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _peer39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../peer39 */ "./node_modules/ui-sitewide-mpu/src/components/peer39.js");
/* harmony import */ var _utils_wait_for__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/wait-for */ "./node_modules/ui-sitewide-mpu/src/components/utils/wait-for.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* global window, document, googletag */



function useLazyload() {
  var state = 'unloaded';
  var queue = [];
  function flush() {
    state = 'complete';
    queue.forEach(function (fn) {
      googletag.cmd.push(fn);
    });
  }
  function push(fn) {
    if (state === 'complete') {
      return googletag.cmd.push(fn);
    }
    return queue.push(fn);
  }
  function initGoogleTag(slot) {
    googletag.cmd.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var events, _loop, _i, _events;
      return _regeneratorRuntime().wrap(function _callee$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            googletag.pubads().setCentering(slot.center);
            googletag.pubads().enableLazyLoad({
              fetchMarginPercent: slot.lazyload['fetch-margin-percent'],
              renderMarginPercent: slot.lazyload['render-margin-percent'],
              mobileScaling: slot.lazyload['mobile-scaling']
            });

            // Eventlistener for debugging
            googletag.pubads().addEventListener('slotRequested', function (event) {
              updateSlotStatus(event.slot.getSlotElementId(), 'fetched');
            });

            // Eventlistener for debugging
            googletag.pubads().addEventListener('slotOnload', function (event) {
              updateSlotStatus(event.slot.getSlotElementId(), 'rendered');
            });
            events = ['slotRequested', 'slotResponseReceived', 'slotOnload', 'impressionViewable'];
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var name;
              return _regeneratorRuntime().wrap(function _loop$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    name = _events[_i];
                    googletag.pubads().addEventListener(name, function (event) {
                      var element = document.getElementById(event.slot.getSlotElementId());
                      if (!element.dataset[name]) {
                        element.dataset[name] = '0';
                      }
                      element.dataset[name] = String(parseInt(element.dataset[name], 10) + 1);
                    });
                  case 2:
                  case "end":
                    return _context.stop();
                }
              }, _loop);
            });
            _i = 0, _events = events;
          case 7:
            if (!(_i < _events.length)) {
              _context2.next = 12;
              break;
            }
            return _context2.delegateYield(_loop(), "t0", 9);
          case 9:
            _i++;
            _context2.next = 7;
            break;
          case 12:
            googletag.enableServices();
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee);
    })));
    flush();
  }
  var init = function init(slot) {
    state = 'loading';
    if (slot.peer39Url && slot.peer39Id) {
      ui_project_base_js_helpers_check_consent__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelector('[data-vendor-name="peer-39"]'), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return (0,_utils_wait_for__WEBPACK_IMPORTED_MODULE_2__["default"])(slot.peer39Timeout, (0,_peer39__WEBPACK_IMPORTED_MODULE_1__["default"])(slot));
            case 3:
              googletag.cmd.push(function () {
                window.p39_sky = window.p39_GPT_value();
                googletag.pubads().setTargeting('p39_sky', window.p39_sky);
              });
              _context3.next = 9;
              break;
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0 === 'timed-out' ? '[sdc-site-mpu] Peer39 promise timed-out' : _context3.t0);
            case 9:
              initGoogleTag(slot);
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee2, null, [[0, 6]]);
      })));
    } else {
      initGoogleTag(slot);
    }
  };
  return function (slot) {
    push(function () {
      googletag.display(slot.id);
    });
    if (state === 'unloaded') init(slot);
  };
}
function updateSlotStatus(slotId, state) {
  var elem = document.getElementById("".concat(slotId, "-").concat(state));
  if (elem) {
    elem.className = 'activated';
    elem.innerText = "".concat(slotId, ": ").concat(state);
  }
}

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/slot-enablement/sky-lazyload.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/slot-enablement/sky-lazyload.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loadSlots: () => (/* binding */ loadSlots)
/* harmony export */ });
/* harmony import */ var ui_project_base_js_helpers_check_consent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-project-base/js/helpers/check-consent */ "./node_modules/ui-sitewide-mpu/node_modules/ui-project-base/js/helpers/check-consent.js");
/* harmony import */ var ui_project_base_js_helpers_check_consent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_project_base_js_helpers_check_consent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slot */ "./node_modules/ui-sitewide-mpu/src/components/slot.js");
/* harmony import */ var _utils_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/viewport */ "./node_modules/ui-sitewide-mpu/src/components/utils/viewport.js");
/* harmony import */ var _utils_wait_for__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/wait-for */ "./node_modules/ui-sitewide-mpu/src/components/utils/wait-for.js");
/* harmony import */ var _peer39__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../peer39 */ "./node_modules/ui-sitewide-mpu/src/components/peer39.js");
/* harmony import */ var _utils_open_tracing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/open-tracing */ "./node_modules/ui-sitewide-mpu/src/components/utils/open-tracing.js");
/* global window, document, googletag */
/* eslint no-use-before-define: ["error", { "functions": false }] */
/* eslint no-console: ["error", { allow: ["log", "error"] }] */






var events = ['slotRequested', 'slotResponseReceived', 'slotOnload', 'impressionViewable'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (adSlot) {
  googletag.cmd.push(function () {
    googletag.pubads().setCentering(adSlot.center);
    googletag.pubads().enableSingleRequest();
    googletag.pubads().disableInitialLoad();
    googletag.enableServices();

    // using events.pop() to prevent the event listeners from being added twice
    var _loop = function _loop() {
      var name = events.pop();
      googletag.pubads().addEventListener(name, function (event) {
        var element = document.getElementById(event.slot.getSlotElementId());
        if (!element.dataset[name]) {
          element.dataset[name] = '0';
        }
        element.dataset[name] = String(parseInt(element.dataset[name], 10) + 1);
      });
    };
    while (events.length > 0) {
      _loop();
    }

    // Add peer39
    if (adSlot.peer39Url && adSlot.peer39Id) {
      var init = function init() {
        (0,_utils_wait_for__WEBPACK_IMPORTED_MODULE_3__["default"])(adSlot.peer39Timeout, (0,_peer39__WEBPACK_IMPORTED_MODULE_4__["default"])(adSlot)).then(function () {
          window.p39_sky = window.p39_GPT_value();
          googletag.pubads().setTargeting('p39_sky', window.p39_sky);
          loadSlots();
        })["catch"](function () {
          loadSlots();
        });
      };
      ui_project_base_js_helpers_check_consent__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelector('[data-vendor-name="peer-39"]'), init);
    } else {
      loadSlots();
    }
  });
});

/**
 * Load the slots ready for rendering
 */
function loadSlots() {
  var visibleSlots = window.sdc.ads.filter(function (ad) {
    return (0,_utils_viewport__WEBPACK_IMPORTED_MODULE_2__.isInViewPort)(ad.container, ad.tolerance);
  });

  // render the visible ads
  visibleSlots.forEach(function (ad) {
    googletag.cmd.push(function () {
      googletag.display(ad.id);
    });
  });
  var refreshAdSpan = (0,_utils_open_tracing__WEBPACK_IMPORTED_MODULE_5__.useTracer)().startSpan(Math.floor(Math.random() * 1000),
  // Random key to avoid key collision
  'sdc-site-mpu.refresh-ad', {
    slots: visibleSlots.map(function (slot) {
      return slot.id;
    }),
    url: window.location.href,
    initial: true
  });

  // refresh visible ads in one batch for SRA
  googletag.cmd.push(function () {
    googletag.pubads().refresh(visibleSlots.map(function (ad) {
      return ad.slot;
    }));
    refreshAdSpan && refreshAdSpan.finish();
  });

  // lazy load any that aren't visible
  window.sdc.ads.filter(function (ad) {
    return visibleSlots.indexOf(ad) < 0;
  }).map(function (ad) {
    return (0,_slot__WEBPACK_IMPORTED_MODULE_1__.lazyLoad)(ad);
  });
}

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/slot.js":
/*!*************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/slot.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   lazyLoad: () => (/* binding */ lazyLoad),
/* harmony export */   refresh: () => (/* binding */ refresh)
/* harmony export */ });
/* harmony import */ var _utils_breakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/breakpoint */ "./node_modules/ui-sitewide-mpu/src/components/utils/breakpoint.js");
/* harmony import */ var _utils_slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/slot */ "./node_modules/ui-sitewide-mpu/src/components/utils/slot.js");
/* harmony import */ var _utils_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/viewport */ "./node_modules/ui-sitewide-mpu/src/components/utils/viewport.js");
/* harmony import */ var _utils_open_tracing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/open-tracing */ "./node_modules/ui-sitewide-mpu/src/components/utils/open-tracing.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* global window, googletag, setTimeout, ResizeObserver */





/**
 * Create and configure a new Google Tag Advert Slot
 *
 * @param {Object} adSlot Slot reference object
 * @return {Object} data for advert configuration
 */
function create(adSlot) {
  var configData = (0,_utils_slot__WEBPACK_IMPORTED_MODULE_1__.getConfig)(adSlot.container);
  var sizes = (0,_utils_breakpoint__WEBPACK_IMPORTED_MODULE_0__.getSizeMapping)(configData.size, adSlot);
  var defaultSize = (0,_utils_breakpoint__WEBPACK_IMPORTED_MODULE_0__.getDefaultSize)(configData.size);
  var targeting = (0,_utils_slot__WEBPACK_IMPORTED_MODULE_1__.getTargeting)(adSlot, configData);
  var tag = (0,_utils_slot__WEBPACK_IMPORTED_MODULE_1__.getTag)(adSlot, configData);
  var collapse = (0,_utils_slot__WEBPACK_IMPORTED_MODULE_1__.getCollapse)(adSlot);
  adSlot.tolerance = (0,_utils_slot__WEBPACK_IMPORTED_MODULE_1__.getTolerance)(adSlot, configData);

  // there's only one breakpoint so we don't need this to be responsive
  if (sizes.length <= 1) {
    adSlot.responsive = false;
  }
  googletag.cmd.push(function () {
    (0,_utils_slot__WEBPACK_IMPORTED_MODULE_1__.defineSlot)(adSlot, configData, tag, defaultSize, sizes, collapse, targeting);
  });
  watchBrowserResize(adSlot, sizes);
  return adSlot;
}

/**
 * Refresh any visible slots
 *
 * @param {Object} adSlot Slot reference object
 */
function refresh(adSlot) {
  if ((0,_utils_slot__WEBPACK_IMPORTED_MODULE_1__.isNativeAd)(adSlot)) {
    return;
  }
  if ((0,_utils_viewport__WEBPACK_IMPORTED_MODULE_2__.isInViewPort)(adSlot.container, adSlot.tolerance)) {
    var refreshAdSpan = (0,_utils_open_tracing__WEBPACK_IMPORTED_MODULE_3__.useTracer)().startSpan(Math.floor(Math.random() * 1000),
    // Random key to avoid key collision
    'sdc-site-mpu.refresh-ad', {
      slot: adSlot.id,
      url: window.location.href
    });
    googletag.cmd.push(function () {
      googletag.pubads().refresh([adSlot.slot]);
      adSlot.container.setAttribute('data-slot-called', parseInt(adSlot.container.getAttribute('data-slot-called'), 10) + 1);
      adSlot.loaded = true;
      refreshAdSpan && refreshAdSpan.finish();
    });
  }
}

/**
 * Load the ad when it becomes relevant
 *
 * @param {Object} adSlot Ad Slot reference object
 */
function lazyLoad(adSlot) {
  if (adSlot.loaded) {
    return;
  }
  refresh(adSlot);
  setTimeout(function () {
    window.requestAnimationFrame(function () {
      lazyLoad(adSlot);
    });
  }, 500);
}

/**
 * Register a resize observer to hide mobile-only adverts when
 * <body> is resized.
 *
 * @param slot
 * @param sizes
 */
function watchBrowserResize(slot, sizes) {
  function getActiveBreakpoint() {
    var _iterator = _createForOfIteratorHelper(sizes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var size = _step.value;
        if (size[0][0] <= document.body.offsetWidth) {
          return size[1];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  var initialCurrentBreakpoint = getActiveBreakpoint();
  if (initialCurrentBreakpoint && initialCurrentBreakpoint.length === 0) {
    slot.container.parentElement.setAttribute('style', 'display: none!important');
  }
  var observer = new ResizeObserver(function () {
    var currentBreakpoint = getActiveBreakpoint();
    if (currentBreakpoint && currentBreakpoint.length === 0) {
      slot.container.parentElement.setAttribute('style', 'display: none!important');
      googletag.cmd.push(function () {
        googletag.pubads().clear([slot.slot]);
      });
    } else {
      slot.container.parentElement.setAttribute('style', '');
    }
  });
  observer.observe(document.body);
}

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/slots.js":
/*!**************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/slots.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _slot_enablement_sky_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot-enablement/sky-lazyload */ "./node_modules/ui-sitewide-mpu/src/components/slot-enablement/sky-lazyload.js");
/* harmony import */ var _slot_enablement_gpt_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slot-enablement/gpt-lazyload */ "./node_modules/ui-sitewide-mpu/src/components/slot-enablement/gpt-lazyload.js");
/* eslint no-use-before-define: ["error", { "functions": false }] */
/* eslint no-console: ["error", { allow: ["log", "error"] }] */



/**
 * Enables once all slots in the page have been registered
 *
 * @param {Object} adSlot Slot reference object
 */
function register(adSlot) {
  window.sdc = window.sdc || {};
  window.sdc.ads = window.sdc.ads || [];
  window.sdc.ads.push(adSlot);
  checkInstances(adSlot);
}
var lazyload = null;

/**
 * Enables once all slots in the page have been registered
 *
 * @param {Object} adSlot Slot reference object
 */
function checkInstances(adSlot) {
  if (adSlot.enableGptLazyload === 'true') {
    if (!lazyload) {
      lazyload = (0,_slot_enablement_gpt_lazyload__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
    return lazyload(adSlot);
  }
  var instances = [].slice.call(document.querySelectorAll('[data-component-name=ui-sitewide-mpu]')).filter(function (instance) {
    return instance.offsetWidth > 0;
  });
  if (window.sdc.ads.length < instances.length) {
    return;
  }
  (0,_slot_enablement_sky_lazyload__WEBPACK_IMPORTED_MODULE_0__["default"])(adSlot);
}

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/utils/breakpoint.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/utils/breakpoint.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultSize: () => (/* binding */ getDefaultSize),
/* harmony export */   getSizeMapping: () => (/* binding */ getSizeMapping),
/* harmony export */   listen: () => (/* binding */ listen)
/* harmony export */ });
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slot */ "./node_modules/ui-sitewide-mpu/src/components/slot.js");
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slot */ "./node_modules/ui-sitewide-mpu/src/components/utils/slot.js");
/* global window */



/**
 * Returns list of sizes mapped to matching breakpoint sizes
 *
 * @param {Object} sizes Breakpoints/Sizes to check through
 * @param {Object} adSlot Slot reference object
 * @return {Object} Sizes mapped to breakpoint sizes
 */
function getSizeMapping(sizes, adSlot) {
  var sizeMappings = [];
  for (var item in sizes) {
    if (item !== 'default') {
      sizeMappings.unshift([[adSlot.lookup[item], 0], sizes[item]]);
    }
  }
  return sizeMappings;
}

/**
 * Returns the first size that matches the order of breakpoints
 *
 * @param {Object} sizes Breakpoints/Sizes to check through
 * @return {Object|null} Size of the first matching breakpoint
 */
function getDefaultSize(sizes) {
  var breakpoints = ['default', 'mobile', 'tablet', 'desktop'];
  for (var i = 0; i < breakpoints.length; i++) {
    if (sizes[breakpoints[i]]) {
      return sizes[breakpoints[i]][0];
    }
  }
  return null;
}

/**
 * Listen for changes when media query breakpoints are fired
 *
 * @param {Object} adSlot Ad Slot reference object
 * @return {Array} matchMedia objects
 */
function listen(adSlot) {
  if ((0,_slot__WEBPACK_IMPORTED_MODULE_1__.isNativeAd)(adSlot)) {
    return;
  }
  var queries = [];

  // loop through our breakpoints list
  adSlot.breakpoints.forEach(function (bp) {
    var match = window.matchMedia(bp);
    queries.push(match);

    // call render event on mq match
    match.addListener(function (mq) {
      if (mq.matches) {
        (0,_slot__WEBPACK_IMPORTED_MODULE_0__.refresh)(adSlot);
      }
    });
  });
  return queries;
}

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/utils/open-tracing.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/utils/open-tracing.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTracer: () => (/* binding */ useTracer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var noop = function noop() {};
var openTracingStub = {
  startSpan: function startSpan() {
    return {
      finish: noop
    };
  },
  sendError: noop,
  finishSpan: noop,
  tagSpan: noop,
  hasSpan: noop
};
var openTracingLoaded = function openTracingLoaded() {
  return window.sdc && _typeof(window.sdc.openTracing) === 'object';
};

/**
 * Get the global tracer (if one exists).
 */
function useTracer() {
  if (openTracingLoaded()) {
    return window.sdc.openTracing;
  }
  return openTracingStub;
}

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/utils/slot.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/utils/slot.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineSlot: () => (/* binding */ defineSlot),
/* harmony export */   getCollapse: () => (/* binding */ getCollapse),
/* harmony export */   getConfig: () => (/* binding */ getConfig),
/* harmony export */   getQueryTagOverride: () => (/* binding */ getQueryTagOverride),
/* harmony export */   getTag: () => (/* binding */ getTag),
/* harmony export */   getTargeting: () => (/* binding */ getTargeting),
/* harmony export */   getTolerance: () => (/* binding */ getTolerance),
/* harmony export */   isNativeAd: () => (/* binding */ isNativeAd)
/* harmony export */ });
/* harmony import */ var _breakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpoint */ "./node_modules/ui-sitewide-mpu/src/components/utils/breakpoint.js");
/* global googletag */


/**
 * Define a slot for googletag
 *
 * @param {Object} adSlot Slot reference object
 * @param {Object} configData Slot reference object
 * @param {Object} tag Slot reference object
 * @param {Object} defaultSize Slot reference object
 * @param {Object} sizes Slot reference object
 * @param {Object} collapse Slot reference object
 * @param {Object} targeting Slot reference object
 * @return {Object}
 */
function defineSlot(adSlot, configData, tag, defaultSize, sizes, collapse, targeting) {
  var slot = googletag.defineSlot(tag, defaultSize, configData.id).addService(googletag.pubads()).defineSizeMapping(sizes).setCollapseEmptyDiv(collapse, collapse);

  // set the targeting for the slot
  Object.keys(targeting).forEach(function (target) {
    slot.setTargeting(target, decodeURI(targeting[target]));
  });

  // set actual rendered size using the renderEnded callback
  // this can be used to piggyback styling changes when adverts can be different sizes
  // eg a single to double height mpu
  googletag.pubads().addEventListener('slotRenderEnded', function (event) {
    if (event.size && adSlot.container.parentNode.getAttribute('data-ad-format') && adSlot.container.id === event.slot.getSlotElementId()) {
      adSlot.container.parentNode.setAttribute('data-advert-rendered', [event.size[0], event.size[1]].join('x'));
    }
  });

  // keep track of the slot we've created
  adSlot.slot = slot;
  adSlot.container.setAttribute('data-slot-called', 0);

  // monitor responsive breakpoints for changes
  (0,_breakpoint__WEBPACK_IMPORTED_MODULE_0__.listen)(adSlot);
  return adSlot;
}

/**
 * Extract the configuration data from the component
 *
 * @param {HTMLNode} element The element to get the data from
 * @return {Object}
 */
function getConfig(element) {
  var config = element.getAttribute('data-config');
  if (config === null) {
    return;
  }
  return JSON.parse(config);
}

/**
 * Extract targeting from attribute and fallback to config data if not provided
 *
 * @param {Object} adSlot Slot reference object
 * @param {Object} configData Slot config object
 * @return {Object}
 */
function getTargeting(adSlot, configData) {
  var targeting = {};
  var targetingData = adSlot.container.getAttribute('data-targeting');
  if (targetingData) {
    targeting = JSON.parse(targetingData);
  } else if (configData.targeting) {
    targeting = configData.targeting;
  }

  // use these values instead of those set in configData if they are set as direct data attributes
  var targetingStrnativekey = adSlot.container.getAttribute('data-targeting-strnativekey');
  var targetingPlatform = adSlot.container.getAttribute('data-targeting-platform');
  if (targetingStrnativekey) {
    targeting.strnativekey = targetingStrnativekey;
  }
  if (targetingPlatform) {
    targeting.platform = targetingPlatform;
  }
  return targeting;
}

/**
 * Get the tag for a slot
 *
 * @param {Object} adSlot Slot reference object
 * @param {Object} configData Slot config object
 * @return {String}
 */
function getTag(adSlot, configData) {
  var queryOverrideTag = getQueryTagOverride();
  if (queryOverrideTag) {
    adSlot.container.setAttribute('data-tag', queryOverrideTag);
  }
  return adSlot.container.getAttribute('data-tag') || configData.tag;
}

/**
 * Get sky media tag override if present
 *
 * @return {String}
 */
function getQueryTagOverride() {
  var match = RegExp('[?&]' + 'adtagtest' + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

/**
 * Get the tolerance for a slot
 *
 * @param {Object} adSlot Slot reference object
 * @param {Object} configData Slot config object
 * @return {String}
 */
function getTolerance(adSlot, configData) {
  return parseFloat(adSlot.container.getAttribute('data-tolerance')) || configData.tolerance;
}

/**
 * Get the ad to collapse by default if empty, but allow an override
 *
 * @param {Object} adSlot Slot reference object
 * @return {Boolean}
 */
function getCollapse(adSlot) {
  var collapse = adSlot.container.getAttribute('data-collapse') || true;
  return collapse === true;
}

/**
 * Determine whether the advert is native or not
 *
 * @param {Object} adSlot Slot reference object
 * @return {Boolean}
 */
function isNativeAd(adSlot) {
  var adFormat = adSlot.container.parentNode.getAttribute('data-ad-format');
  return adFormat === 'native-ad';
}

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/utils/viewport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/utils/viewport.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInViewPort: () => (/* binding */ isInViewPort)
/* harmony export */ });
/* global window, document */

/**
 * Check whether an element is visible in the viewport
 *
 * Tolerance value represents how far in screen viewports from the top of the viewport to
 * begin loading the advert. Any numerical value from 1 to 10 allowed, including decimals:
 * 1 = 100%, the advert will begin loading at 1 viewport height from the top of the screen
 * 1.5 = 150%, the advert will begin loading at 1.5 viewport heights from the top of the screen
 * 2 = 200%, the advert will begin loading at 2 viewport heights from the top of the screen
 *
 * @param {Element} element Element to check visibility for
 * @return {Boolean} Whether the element is visible
 */
function isInViewPort(element) {
  var tolerance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.5;
  if (!element) {
    return;
  }
  var rect = element.getBoundingClientRect();
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  // return false if element is not visible or out of viewport top
  if (rect.right < 0 || rect.bottom < 0 || rect.left > viewportWidth) {
    return false;
  }

  // @note - use a fallback for window.innerHeight in IE8
  // out of viewport bottom
  if (viewportHeight * tolerance - rect.top < 0) {
    return false;
  }

  // if it passes all that, it's visible
  return true;
}

/***/ }),

/***/ "./node_modules/ui-sitewide-mpu/src/components/utils/wait-for.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/utils/wait-for.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ms, promise) {
  return new Promise(function (resolve, reject) {
    var timeoutId = setTimeout(function () {
      reject('timed-out');
    }, ms);
    promise.then(function (res) {
      clearTimeout(timeoutId);
      resolve(res);
    }, function (err) {
      clearTimeout(timeoutId);
      reject(err);
    });
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************************************!*\
  !*** ./node_modules/ui-sitewide-mpu/src/components/ui-sitewide-mpu.js ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ "./node_modules/ui-sitewide-mpu/src/components/library.js");
/* harmony import */ var _slots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slots */ "./node_modules/ui-sitewide-mpu/src/components/slots.js");
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slot */ "./node_modules/ui-sitewide-mpu/src/components/slot.js");
/* harmony import */ var _utils_open_tracing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/open-tracing */ "./node_modules/ui-sitewide-mpu/src/components/utils/open-tracing.js");
/* global window, document, setInterval, clearInterval */





/**
* Initialises the component when passed an element
*
* @param {HTMLNode} rootElement The component dom node
* @param {Object} options Any options passed to the component
*/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (rootElement, options) {
  var openTracing = (0,_utils_open_tracing__WEBPACK_IMPORTED_MODULE_3__.useTracer)();
  if (!rootElement) {
    return;
  }
  var adSlot = {
    id: null,
    container: rootElement,
    slot: null,
    loaded: false,
    responsive: true,
    breakpoints: ['(max-width: 739px)', '(min-width: 740px) and (max-width: 999px)', '(min-width: 1000px)'],
    lookup: {
      mobile: 320,
      tablet: 740,
      desktop: 1000,
      "default": 0
    },
    center: false,
    tolerance: 1,
    openTracing: openTracing
  };
  function init() {
    // allow the breakpoints and global targeting
    // to be set externally to the module
    if (options) {
      if (options.targeting) {
        adSlot.targeting = options.targeting;
      }
      if (options.breakpoints) {
        adSlot.breakpoints = options.breakpoints;
      }
      if (options.lookup) {
        adSlot.lookup = options.lookup;
      }
      if (options.centerAds) {
        adSlot.center = options.centerAds;
      }
      if (options.lazyloadConfig) {
        try {
          adSlot.lazyload = JSON.parse(options.lazyloadConfig);
        } catch (err) {
          console.error(err);
          adSlot.lazyload = {
            'fetch-margin-percent': 500,
            'render-margin-percent': 50,
            'mobile-scaling': 2
          };
        }
      } else {
        adSlot.lazyload = {
          'fetch-margin-percent': 500,
          'render-margin-percent': 50,
          'mobile-scaling': 2
        };
      }
      if (options.enableGptLazyload) {
        adSlot.enableGptLazyload = options.enableGptLazyload;
      }
      if (options.peer39Url) {
        adSlot.peer39Url = options.peer39Url;
      }
      if (options.peer39Id) {
        adSlot.peer39Id = options.peer39Id;
      }
      if (options.peer39Timeout) {
        adSlot.peer39Timeout = options.peer39Timeout;
      }
      if (options.config) {
        var configJson = JSON.parse(options.config);
        if (configJson.id) {
          adSlot.id = configJson.id;
        }
      }
    }
    _slots__WEBPACK_IMPORTED_MODULE_1__.register(_slot__WEBPACK_IMPORTED_MODULE_2__.create(adSlot));
  }
  _library__WEBPACK_IMPORTED_MODULE_0__.load();
  var googletagReadyInterval = setInterval(function () {
    if (window.googletag) {
      clearInterval(googletagReadyInterval);
      init();
    }
  }, 10);
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define('sdc-site-pub-sub',[], factory);
	else if(typeof exports === 'object')
		exports["sdc-site-pub-sub"] = factory();
	else
		root["sdc-site-pub-sub"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************************************************************!*\
  !*** ./node_modules/sdc-site-pub-sub/src/components/sdc-site-pub-sub.js ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SdcSitePubSub)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* global console */
/* eslint no-console: ["error", {allow: ["debug"]}] */

var namespace = 'pubSub';

/**
* Stateful pub sub manager
*
*/
var SdcSitePubSub = /*#__PURE__*/function () {
  /**
   * @param {object} root a root to attach the instance to
   */
  function SdcSitePubSub(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, SdcSitePubSub);
    if (!root) {
      throw new Error('You must supply a root to encapsulate the pub sub manager');
    }
    root[namespace] = this;
    this.eventSubscribers = {};
    this.options = options;
  }

  /**
   * static factory method
   * @param {object} root a root to attach the instance to
   */
  return _createClass(SdcSitePubSub, [{
    key: "publish",
    value:
    /**
     * Triggers event
     * @param {string} name the event name
     * @param {object} context optional context around the firing of the event
     */
    function publish(name) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.eventSubscribers[name]) {
        return;
      }
      this.options.debugMode && console.debug("[".concat(namespace, "] publishing ").concat(name), context);
      this.eventSubscribers[name].forEach(function (subscriber) {
        return subscriber(context);
      });
    }

    /**
     * Attaches `callback` to event, `callback` will be invoked every time
     * a `name` event is published
     * @param {string} name
     * @param {function} callback
     */
  }, {
    key: "subscribe",
    value: function subscribe(name, callback) {
      if (typeof callback !== 'function') {
        throw new Error('You must supply a valid callback');
      }
      this.options.debugMode && console.debug("[".concat(namespace, "] subscribing to ").concat(name), callback);
      if (!this.eventSubscribers[name]) {
        this.eventSubscribers[name] = [];
      }
      this.eventSubscribers[name].push(callback);
    }
  }], [{
    key: "init",
    value: function init(root) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new this(root, options);
    }
  }]);
}();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define('ui-app-banner',[], factory);
	else if(typeof exports === 'object')
		exports["ui-app-banner"] = factory();
	else
		root["ui-app-banner"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/smartbanner.js/dist/smartbanner.js":
/*!*********************************************************!*\
  !*** ./node_modules/smartbanner.js/dist/smartbanner.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * smartbanner.js v1.21.0 <https://github.com/ain/smartbanner.js#readme>
 * Copyright © 2023 Ain Tohvri, contributors. Licensed under GPL-3.0.
 */
(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = undefined;
          if (!f && c) return require(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = undefined, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
})()({
  1: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function _typeof(o) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _typeof(o);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var Bakery = exports["default"] = /*#__PURE__*/function () {
      function Bakery() {
        _classCallCheck(this, Bakery);
      }
      _createClass(Bakery, null, [{
        key: "getCookieExpiresString",
        value: function getCookieExpiresString(hideTtl) {
          var now = new Date();
          var expireTime = new Date(now.getTime() + hideTtl);
          return "expires=".concat(expireTime.toGMTString(), ";");
        }
      }, {
        key: "bake",
        value: function bake(hideTtl, hidePath) {
          document.cookie = "smartbanner_exited=1; ".concat(hideTtl ? Bakery.getCookieExpiresString(hideTtl) : '', " path=").concat(hidePath);
        }
      }, {
        key: "unbake",
        value: function unbake() {
          document.cookie = 'smartbanner_exited=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
      }, {
        key: "baked",
        get: function get() {
          var value = document.cookie.replace(/(?:(?:^|.*;\s*)smartbanner_exited\s*=\s*([^;]*).*$)|^.*$/, '$1');
          return value === '1';
        }
      }]);
      return Bakery;
    }();
  }, {}],
  2: [function (require, module, exports) {
    (function (global) {
      (function () {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;
        function _typeof(o) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
            return typeof o;
          } : function (o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
          }, _typeof(o);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", {
            writable: false
          });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        var Detector = exports["default"] = /*#__PURE__*/function () {
          function Detector() {
            _classCallCheck(this, Detector);
          }
          _createClass(Detector, null, [{
            key: "platform",
            value: function platform() {
              var maxTouchPoints = window.navigator.maxTouchPoints;
              var userAgent = window.navigator.userAgent;
              if (/Android/i.test(userAgent)) {
                return 'android';
                // maxTouchPoints is the only effective method to detect iPad iOS 13+
                // FMI https://developer.apple.com/forums/thread/119186
              } else if (!window.MSStream && !/X11|Linux/i.test(userAgent) && maxTouchPoints && maxTouchPoints > 0 || /iPhone|iPad|iPod/i.test(userAgent)) {
                return 'ios';
              }
            }
          }, {
            key: "userAgentMatchesRegex",
            value: function userAgentMatchesRegex(regexString) {
              return new RegExp(regexString).test(window.navigator.userAgent);
            }
          }, {
            key: "jQueryMobilePage",
            value: function jQueryMobilePage() {
              return typeof global.$ !== 'undefined' && global.$.mobile !== 'undefined' && document.querySelector('.ui-page') !== null;
            }
          }, {
            key: "wrapperElement",
            value: function wrapperElement() {
              var selector = Detector.jQueryMobilePage() ? '.ui-page' : 'html';
              return document.querySelectorAll(selector);
            }
          }]);
          return Detector;
        }();
      }).call(this);
    }).call(this, typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }, {}],
  3: [function (require, module, exports) {
    "use strict";

    var _smartbanner = _interopRequireDefault(require("./smartbanner.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    var smartbanner;
    window.addEventListener('load', function () {
      smartbanner = new _smartbanner["default"]();
      if (smartbanner.apiEnabled) {
        window.smartbanner = smartbanner;
      } else {
        smartbanner.publish();
      }
    });
  }, {
    "./smartbanner.js": 5
  }],
  4: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function _typeof(o) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _typeof(o);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function valid(name) {
      // TODO: validate against options dictionary
      return name.indexOf('smartbanner:') !== -1 && name.split(':')[1].length > 0;
    }
    function convertToCamelCase(name) {
      var parts = name.split('-');
      parts.map(function (part, index) {
        if (index > 0) {
          parts[index] = part.charAt(0).toUpperCase() + part.substring(1);
        }
      });
      return parts.join('');
    }
    var OptionParser = exports["default"] = /*#__PURE__*/function () {
      function OptionParser() {
        _classCallCheck(this, OptionParser);
      }
      _createClass(OptionParser, [{
        key: "parse",
        value: function parse() {
          var metas = document.getElementsByTagName('meta');
          var options = {};
          Array.apply(null, metas).forEach(function (meta) {
            var optionName = null;
            var name = meta.getAttribute('name');
            var content = meta.getAttribute('content');
            if (name && content && valid(name) && content.length > 0) {
              optionName = name.split(':')[1];
              if (optionName.indexOf('-') !== -1) {
                optionName = convertToCamelCase(optionName);
              }
              options[optionName] = content;
            }
          });
          return options;
        }
      }]);
      return OptionParser;
    }();
  }, {}],
  5: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _optionparser = _interopRequireDefault(require("./optionparser.js"));
    var _detector = _interopRequireDefault(require("./detector.js"));
    var _bakery = _interopRequireDefault(require("./bakery.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    function _typeof(o) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _typeof(o);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var DEFAULT_PLATFORMS = 'android,ios';
    var DEFAULT_CLOSE_LABEL = 'Close';
    var datas = {
      originalTop: 'data-smartbanner-original-top',
      originalMarginTop: 'data-smartbanner-original-margin-top'
    };
    function handleExitClick(event, self) {
      self.exit();
      event.preventDefault();
    }
    function handleClickout(event, self) {
      self.clickout();
    }
    function handleJQueryMobilePageLoad(event) {
      if (!this.positioningDisabled) {
        setContentPosition(event.data.height);
      }
    }
    function addEventListeners(self) {
      var closeIcon = document.querySelector('.js_smartbanner__exit');
      closeIcon.addEventListener('click', function (event) {
        return handleExitClick(event, self);
      });
      var button = document.querySelector('.js_smartbanner__button');
      button.addEventListener('click', function (event) {
        return handleClickout(event, self);
      });
      if (_detector["default"].jQueryMobilePage()) {
        $(document).on('pagebeforeshow', self, handleJQueryMobilePageLoad);
      }
    }
    function removeEventListeners() {
      if (_detector["default"].jQueryMobilePage()) {
        $(document).off('pagebeforeshow', handleJQueryMobilePageLoad);
      }
    }
    function setContentPosition(value) {
      var wrappers = _detector["default"].wrapperElement();
      for (var i = 0, l = wrappers.length, wrapper; i < l; i++) {
        wrapper = wrappers[i];
        if (_detector["default"].jQueryMobilePage()) {
          if (wrapper.getAttribute(datas.originalTop)) {
            continue;
          }
          var top = parseFloat(getComputedStyle(wrapper).top);
          wrapper.setAttribute(datas.originalTop, isNaN(top) ? 0 : top);
          wrapper.style.top = value + 'px';
        } else {
          if (wrapper.getAttribute(datas.originalMarginTop)) {
            continue;
          }
          var margin = parseFloat(getComputedStyle(wrapper).marginTop);
          wrapper.setAttribute(datas.originalMarginTop, isNaN(margin) ? 0 : margin);
          wrapper.style.marginTop = value + 'px';
        }
      }
    }
    function restoreContentPosition() {
      var wrappers = _detector["default"].wrapperElement();
      for (var i = 0, l = wrappers.length, wrapper; i < l; i++) {
        wrapper = wrappers[i];
        if (_detector["default"].jQueryMobilePage() && wrapper.getAttribute(datas.originalTop)) {
          wrapper.style.top = wrapper.getAttribute(datas.originalTop) + 'px';
        } else if (wrapper.getAttribute(datas.originalMarginTop)) {
          wrapper.style.marginTop = wrapper.getAttribute(datas.originalMarginTop) + 'px';
        }
      }
    }
    var SmartBanner = exports["default"] = /*#__PURE__*/function () {
      function SmartBanner() {
        _classCallCheck(this, SmartBanner);
        var parser = new _optionparser["default"]();
        this.options = parser.parse();
        this.platform = _detector["default"].platform();
        var event = new Event('smartbanner.init');
        document.dispatchEvent(event);
      }

      // DEPRECATED. Will be removed.
      _createClass(SmartBanner, [{
        key: "originalTop",
        get: function get() {
          var wrapper = _detector["default"].wrapperElement()[0];
          return parseFloat(wrapper.getAttribute(datas.originalTop));
        }

        // DEPRECATED. Will be removed.
      }, {
        key: "originalTopMargin",
        get: function get() {
          var wrapper = _detector["default"].wrapperElement()[0];
          return parseFloat(wrapper.getAttribute(datas.originalMarginTop));
        }
      }, {
        key: "priceSuffix",
        get: function get() {
          if (this.platform === 'ios' && this.options.priceSuffixApple) {
            return this.options.priceSuffixApple;
          } else if (this.platform === 'android' && this.options.priceSuffixGoogle) {
            return this.options.priceSuffixGoogle;
          }
          return '';
        }
      }, {
        key: "price",
        get: function get() {
          if (this.options.price && this.options.price !== '') {
            return this.options.price;
          } else {
            return '';
          }
        }
      }, {
        key: "icon",
        get: function get() {
          if (this.platform === 'android') {
            return this.options.iconGoogle;
          } else {
            return this.options.iconApple;
          }
        }
      }, {
        key: "buttonUrl",
        get: function get() {
          if (this.platform === 'android') {
            return this.options.buttonUrlGoogle;
          } else if (this.platform === 'ios') {
            return this.options.buttonUrlApple;
          }
          return '#';
        }
      }, {
        key: "closeLabel",
        get: function get() {
          return this.options.closeLabel !== undefined ? this.options.closeLabel : DEFAULT_CLOSE_LABEL;
        }
      }, {
        key: "html",
        get: function get() {
          var modifier = !this.options.customDesignModifier ? this.platform : this.options.customDesignModifier;
          return "<div class=\"smartbanner smartbanner--".concat(modifier, " js_smartbanner\">\n      <a href=\"javascript:void(0);\" class=\"smartbanner__exit js_smartbanner__exit\" aria-label=\"").concat(this.closeLabel, "\"></a>\n      <div class=\"smartbanner__icon\" style=\"background-image: url(").concat(this.icon, ");\"></div>\n      <div class=\"smartbanner__info\">\n        <div>\n          <div class=\"smartbanner__info__title\">").concat(this.options.title, "</div>\n          <div class=\"smartbanner__info__author\">").concat(this.options.author, "</div>\n          <div class=\"smartbanner__info__price\">").concat(this.price).concat(this.priceSuffix, "</div>\n        </div>\n      </div>\n      <a href=\"").concat(this.buttonUrl, "\" target=\"_blank\" class=\"smartbanner__button js_smartbanner__button\" rel=\"noopener\" aria-label=\"").concat(this.options.button, "\"><span class=\"smartbanner__button__label\">").concat(this.options.button, "</span></a>\n    </div>");
        }
      }, {
        key: "height",
        get: function get() {
          try {
            return document.querySelector('.js_smartbanner').offsetHeight;
          } catch (error) {
            return 0;
          }
        }
      }, {
        key: "platformEnabled",
        get: function get() {
          var enabledPlatforms = this.options.enabledPlatforms || DEFAULT_PLATFORMS;
          return enabledPlatforms && enabledPlatforms.replace(/\s+/g, '').split(',').indexOf(this.platform) !== -1;
        }
      }, {
        key: "positioningDisabled",
        get: function get() {
          return this.options.disablePositioning === 'true';
        }
      }, {
        key: "apiEnabled",
        get: function get() {
          return this.options.api === 'true';
        }
      }, {
        key: "userAgentExcluded",
        get: function get() {
          if (!this.options.excludeUserAgentRegex) {
            return false;
          }
          return _detector["default"].userAgentMatchesRegex(this.options.excludeUserAgentRegex);
        }
      }, {
        key: "userAgentIncluded",
        get: function get() {
          if (!this.options.includeUserAgentRegex) {
            return false;
          }
          return _detector["default"].userAgentMatchesRegex(this.options.includeUserAgentRegex);
        }
      }, {
        key: "hideTtl",
        get: function get() {
          return this.options.hideTtl ? parseInt(this.options.hideTtl) : false;
        }
      }, {
        key: "hidePath",
        get: function get() {
          return this.options.hidePath ? this.options.hidePath : '/';
        }
      }, {
        key: "publish",
        value: function publish() {
          if (Object.keys(this.options).length === 0) {
            throw new Error('No options detected. Please consult documentation.');
          }
          if (_bakery["default"].baked) {
            return false;
          }

          // User Agent was explicetely excluded by defined excludeUserAgentRegex
          if (this.userAgentExcluded) {
            return false;
          }

          // User agent was neither included by platformEnabled,
          // nor by defined includeUserAgentRegex
          if (!(this.platformEnabled || this.userAgentIncluded)) {
            return false;
          }
          var bannerDiv = document.createElement('div');
          document.querySelector('body').prepend(bannerDiv);
          bannerDiv.outerHTML = this.html;
          var event = new Event('smartbanner.view');
          document.dispatchEvent(event);
          if (!this.positioningDisabled) {
            setContentPosition(this.height);
          }
          addEventListeners(this);
        }
      }, {
        key: "exit",
        value: function exit() {
          removeEventListeners();
          if (!this.positioningDisabled) {
            restoreContentPosition();
          }
          var banner = document.querySelector('.js_smartbanner');
          document.querySelector('body').removeChild(banner);
          var event = new Event('smartbanner.exit');
          document.dispatchEvent(event);
          _bakery["default"].bake(this.hideTtl, this.hidePath);
        }
      }, {
        key: "clickout",
        value: function clickout() {
          var event = new Event('smartbanner.clickout');
          document.dispatchEvent(event);
        }
      }]);
      return SmartBanner;
    }();
  }, {
    "./bakery.js": 1,
    "./detector.js": 2,
    "./optionparser.js": 4
  }]
}, {}, [3]);

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************!*\
  !*** ./node_modules/ui-app-banner/src/components/ui-app-banner.js ***!
  \********************************************************************/
__webpack_require__(/*! smartbanner.js/dist/smartbanner.js */ "./node_modules/smartbanner.js/dist/smartbanner.js");
document.addEventListener('smartbanner.init', publishSmartBannerTimeout);
document.addEventListener('smartbanner.view', moveSmartBannerOnFirstElementOnBodyTimeout);
function publishSmartBannerTimeout() {
  setTimeout(publishSmartBanner);
}
function moveSmartBannerOnFirstElementOnBodyTimeout() {
  setTimeout(moveSmartBannerOnFirstElementOnBody);
}
function publishSmartBanner() {
  if (window.hasOwnProperty('smartbanner') && typeof window.smartbanner.publish === 'function') {
    window.smartbanner.publish();
  }
}
function moveSmartBannerOnFirstElementOnBody() {
  var smartbanner = document.getElementsByClassName('smartbanner');
  if (smartbanner.length > 0) {
    document.body.insertBefore(smartbanner[0], document.body.firstChild);
  }
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
// SITE-MAIN
// ================
define('site-main', [
        // add files to be bundled into site-main file
        'component-loader',
        'ui-sitewide-mpu',
        'sdc-site-pub-sub',
        'ui-app-banner'
    ],
    function(
        componentLoader,
        siteMpu,
        pubSub
    ){
        return {
            init: function(){
                window.sdc = window.sdc || {};
                componentLoader.init();
                pubSub.default.init(window.sdc);
            }
        };
    });


//# sourceMappingURL=site-main.js.map