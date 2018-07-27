(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sdc-interactive-selector"] = factory();
	else
		root["sdc-interactive-selector"] = factory();
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	// INITIALISE COMPONENT
	// @param rootElement {htmlNode} root dom element of component
	// @param options {object} object of optional parameters for component

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mergeObject = __webpack_require__(1);

	var _mergeObject2 = _interopRequireDefault(_mergeObject);

	var _status = __webpack_require__(2);

	var _status2 = _interopRequireDefault(_status);

	var _promisePolyfill = __webpack_require__(3);

	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

	var _polyfill = __webpack_require__(7);

	var _polyfill2 = _interopRequireDefault(_polyfill);

	var _createView = __webpack_require__(8);

	var _createView2 = _interopRequireDefault(_createView);

	exports['default'] = function (rootElement, options) {
	  NodeList.prototype.forEach = Array.prototype.forEach;

	  rootElement.view = {};

	  // set component defaults;
	  var defaults = {
	    // url endpoint of json data
	    dataUrl: null,
	    // url of fetch polyfill (set to always load to fix iOS app bug)
	    polyfillUrl: 'https://cdn.polyfill.io/v2/polyfill.js?features=fetch&ua=Mozilla/5.0%20(iPhone;%20CPU%20iPhone%20OS%206_0%20like%20Mac%20OS%20X)%20AppleWebKit/536.26%20(KHTML,%20like%20Gecko)%20Version/6.0%20Mobile/10A5376e%20Safari/8536.25'
	  };

	  // merge passed options into defaults
	  (0, _mergeObject2['default'])(defaults, options);

	  // function to request data using fetch api
	  // ensure this is polyfilled for non supporting browsers
	  function requestData() {
	    // update url

	    if (rootElement.getAttribute('data-url')) {
	      defaults.dataUrl = rootElement.getAttribute('data-url');
	    }

	    if (defaults.dataUrl) {
	      // request json data using fetch
	      fetch(defaults.dataUrl, {
	        credentials: 'include',
	        headers: new Headers({
	          'Authorization': rootElement.getAttribute('data-token')
	        })
	      }).then(_status2['default']).then(function (response) {
	        return response.json();
	      }).then(function (data) {
	        rootElement.view.data = data;
	        return rootElement.view;
	      }).then(_createView2['default'].bind(this, rootElement))['catch'](function (error) {
	        return console.error(error);
	      });
	    }
	  }

	  // make first request...
	  // (polyfill the fetch api if not available)
	  // Load promise polyfill for IE
	  (0, _promisePolyfill2['default'])(window);

	  (0, _polyfill2['default'])('fetch' in window, defaults.polyfillUrl, function () {
	    requestData();
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// MERGE TWO JS OBJECTS

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (obj1, obj2) {
	  if (obj2) {
	    for (var key in obj2) {
	      obj1[key] = obj2[key];
	    }
	  }
	};

	module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// CHECK STATUS AND RETURN

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (response) {
	  if (response.status === 200) {
	    return response;
	  }
	};

	module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {// PROMISE POLYFILL

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function () {
	  (function () {

	    // Store setTimeout reference so promise-polyfill will be unaffected by
	    // other code modifying setTimeout (like sinon.useFakeTimers())
	    var setTimeoutFunc = setTimeout;

	    function noop() {}

	    // Polyfill for Function.prototype.bind
	    function bind(fn, thisArg) {
	      return function () {
	        fn.apply(thisArg, arguments);
	      };
	    }

	    function Promise(fn) {
	      if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
	      if (typeof fn !== 'function') throw new TypeError('not a function');
	      this._state = 0;
	      this._handled = false;
	      this._value = undefined;
	      this._deferreds = [];

	      doResolve(fn, this);
	    }

	    function handle(self, deferred) {
	      while (self._state === 3) {
	        self = self._value;
	      }
	      if (self._state === 0) {
	        self._deferreds.push(deferred);
	        return;
	      }
	      self._handled = true;
	      Promise._immediateFn(function () {
	        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	        if (cb === null) {
	          (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	          return;
	        }
	        var ret;
	        try {
	          ret = cb(self._value);
	        } catch (e) {
	          reject(deferred.promise, e);
	          return;
	        }
	        resolve(deferred.promise, ret);
	      });
	    }

	    function resolve(self, newValue) {
	      try {
	        // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	        if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	          var then = newValue.then;
	          if (newValue instanceof Promise) {
	            self._state = 3;
	            self._value = newValue;
	            finale(self);
	            return;
	          } else if (typeof then === 'function') {
	            doResolve(bind(then, newValue), self);
	            return;
	          }
	        }
	        self._state = 1;
	        self._value = newValue;
	        finale(self);
	      } catch (e) {
	        reject(self, e);
	      }
	    }

	    function reject(self, newValue) {
	      self._state = 2;
	      self._value = newValue;
	      finale(self);
	    }

	    function finale(self) {
	      if (self._state === 2 && self._deferreds.length === 0) {
	        Promise._immediateFn(function () {
	          if (!self._handled) {
	            Promise._unhandledRejectionFn(self._value);
	          }
	        });
	      }

	      for (var i = 0, len = self._deferreds.length; i < len; i++) {
	        handle(self, self._deferreds[i]);
	      }
	      self._deferreds = null;
	    }

	    function Handler(onFulfilled, onRejected, promise) {
	      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	      this.promise = promise;
	    }

	    /**
	     * Take a potentially misbehaving resolver function and make sure
	     * onFulfilled and onRejected are only called once.
	     *
	     * Makes no guarantees about asynchrony.
	     */
	    function doResolve(fn, self) {
	      var done = false;
	      try {
	        fn(function (value) {
	          if (done) return;
	          done = true;
	          resolve(self, value);
	        }, function (reason) {
	          if (done) return;
	          done = true;
	          reject(self, reason);
	        });
	      } catch (ex) {
	        if (done) return;
	        done = true;
	        reject(self, ex);
	      }
	    }

	    Promise.prototype['catch'] = function (onRejected) {
	      return this.then(null, onRejected);
	    };

	    Promise.prototype.then = function (onFulfilled, onRejected) {
	      var prom = new this.constructor(noop);

	      handle(this, new Handler(onFulfilled, onRejected, prom));
	      return prom;
	    };

	    Promise.all = function (arr) {
	      var args = Array.prototype.slice.call(arr);

	      return new Promise(function (resolve, reject) {
	        if (args.length === 0) return resolve([]);
	        var remaining = args.length;

	        function res(i, val) {
	          try {
	            if (val && (typeof val === 'object' || typeof val === 'function')) {
	              var then = val.then;
	              if (typeof then === 'function') {
	                then.call(val, function (val) {
	                  res(i, val);
	                }, reject);
	                return;
	              }
	            }
	            args[i] = val;
	            if (--remaining === 0) {
	              resolve(args);
	            }
	          } catch (ex) {
	            reject(ex);
	          }
	        }

	        for (var i = 0; i < args.length; i++) {
	          res(i, args[i]);
	        }
	      });
	    };

	    Promise.resolve = function (value) {
	      if (value && typeof value === 'object' && value.constructor === Promise) {
	        return value;
	      }

	      return new Promise(function (resolve) {
	        resolve(value);
	      });
	    };

	    Promise.reject = function (value) {
	      return new Promise(function (resolve, reject) {
	        reject(value);
	      });
	    };

	    Promise.race = function (values) {
	      return new Promise(function (resolve, reject) {
	        for (var i = 0, len = values.length; i < len; i++) {
	          values[i].then(resolve, reject);
	        }
	      });
	    };

	    // Use polyfill for setImmediate for performance gains
	    Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
	      setImmediate(fn);
	    } || function (fn) {
	      setTimeoutFunc(fn, 0);
	    };

	    Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	      if (typeof console !== 'undefined' && console) {
	        console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	      }
	    };

	    /**
	     * Set the immediate function to execute callbacks
	     * @param fn {function} Function to execute
	     * @deprecated
	     */
	    Promise._setImmediateFn = function _setImmediateFn(fn) {
	      Promise._immediateFn = fn;
	    };

	    /**
	     * Change the function to execute on unhandled rejection
	     * @param {function} fn Function to execute on unhandled rejection
	     * @deprecated
	     */
	    Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	      Promise._unhandledRejectionFn = fn;
	    };

	    if (!window.Promise) {
	      window.Promise = Promise;
	    }
	  })(this);
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(scope, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(5);
	// On some exotic environments, it's not clear which object `setimmediate` was
	// able to install onto.  Search each possibility in the same order as the
	// `setimmediate` library.
	exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
	exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";

	(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	        // Callback can either be a function or a string
	        if (typeof callback !== "function") {
	            callback = new Function("" + callback);
	        }
	        // Copy function arguments
	        var args = new Array(arguments.length - 1);
	        for (var i = 0; i < args.length; i++) {
	            args[i] = arguments[i + 1];
	        }
	        // Store and register the task
	        var task = { callback: callback, args: args };
	        tasksByHandle[nextHandle] = task;
	        registerImmediate(nextHandle);
	        return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	            case 0:
	                callback();
	                break;
	            case 1:
	                callback(args[0]);
	                break;
	            case 2:
	                callback(args[0], args[1]);
	                break;
	            case 3:
	                callback(args[0], args[1], args[2]);
	                break;
	            default:
	                callback.apply(undefined, args);
	                break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function (handle) {
	            process.nextTick(function () {
	                runIfPresent(handle);
	            });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function () {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function onGlobalMessage(event) {
	            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function (handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function (handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function (handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function (handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if (({}).toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// shim for using process in browser
	'use strict';

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// POLYFILL
	// test = boolean indicating support for feature represented by the polyfill url
	// url = url of polyfill script
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (test, url, callback) {

	  if (test === true) {
	    callback();
	  } else {
	    var script = document.createElement('script');
	    script.src = url;
	    script.onreadystatechange = callback;
	    script.onload = callback;
	    script.onerror = function () {
	      return console.error('no polyfill found!');
	    };
	    document.querySelector('head').appendChild(script);
	  }
	};

	module.exports = exports['default'];
	// callback to run when script is loaded

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// CREATE VIEW

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticData = __webpack_require__(9);

	var _staticData2 = _interopRequireDefault(_staticData);

	var _mergeObject = __webpack_require__(1);

	var _mergeObject2 = _interopRequireDefault(_mergeObject);

	var _createSides = __webpack_require__(10);

	var _createSides2 = _interopRequireDefault(_createSides);

	var _createHeader = __webpack_require__(14);

	var _createHeader2 = _interopRequireDefault(_createHeader);

	var _createSelectionArea = __webpack_require__(15);

	var _createSelectionArea2 = _interopRequireDefault(_createSelectionArea);

	var _createFooter = __webpack_require__(17);

	var _createFooter2 = _interopRequireDefault(_createFooter);

	var _createOverlay = __webpack_require__(18);

	var _createOverlay2 = _interopRequireDefault(_createOverlay);

	var _setListPositions = __webpack_require__(20);

	var _setListPositions2 = _interopRequireDefault(_setListPositions);

	var _updateView = __webpack_require__(32);

	var _updateView2 = _interopRequireDefault(_updateView);

	var _addToggleEvents = __webpack_require__(37);

	var _addToggleEvents2 = _interopRequireDefault(_addToggleEvents);

	var _createFormation = __webpack_require__(38);

	var _createFormation2 = _interopRequireDefault(_createFormation);

	exports['default'] = function (rootElement) {

	  // Removes any formations from the formations object that have an invalid number of positions for the given numOfParticipants
	  function validFormations(formations) {

	    var validFormations = formations;

	    Object.keys(formations).forEach(function (formation) {
	      if (Object.keys(formations[formation].positions).length != rootElement.view.data.numOfParticipants) {
	        delete formations[formation];
	      }
	    });

	    return validFormations;
	  }

	  if (rootElement.view.data.staticData) {
	    (0, _mergeObject2['default'])(_staticData2['default'], rootElement.view.data.staticData);
	  }

	  // Create blank type object if sport data does not exist
	  if (_staticData2['default'][rootElement.view.data.type] == null) {
	    _staticData2['default'][rootElement.view.data.type] = {};
	  }

	  if (document.documentElement.lang) {
	    rootElement.view.lang = document.documentElement.lang;
	  } else {
	    rootElement.view.lang = "en";
	  }

	  // Set the selector type (used by css for type-specific styling)
	  rootElement.setAttribute('data-type', rootElement.view.data.type);

	  // Set the numOfParticipants (used by css for specific styling)
	  rootElement.setAttribute('data-num-of-participants', rootElement.view.data.numOfParticipants);

	  rootElement.id = 'interactive-selector-' + rootElement.view.data.id;

	  // Set an embed value (used by css to adjust styling depending on display mode)
	  if (rootElement.view.data.embed) {
	    rootElement.setAttribute('data-embed', '');
	  }

	  // Set a backgroundImage value
	  if (rootElement.view.data.backgroundImage) {
	    rootElement.style.backgroundColor = rootElement.view.data.backgroundImage;
	  }

	  // Set categories to false if a categories object is not found for the given type
	  if (_staticData2['default'][rootElement.view.data.type].categories == null) {
	    rootElement.view.categories = false;
	  } else {
	    rootElement.view.categories = _staticData2['default'][rootElement.view.data.type].categories;
	  }

	  // Clone static formations object and remove any invalid formations
	  rootElement.view.formations = {};
	  (0, _mergeObject2['default'])(rootElement.view.formations, _staticData2['default'][rootElement.view.data.type].formations);
	  rootElement.view.formations = validFormations(rootElement.view.formations);

	  (0, _createSides2['default'])(rootElement);

	  // Create a header for the selector (can contain a title and sponsor image, can be given a background image)
	  (0, _createHeader2['default'])(rootElement);

	  // Create the selectable positions
	  (0, _createSelectionArea2['default'])(rootElement);

	  // Create footer that contains the action links
	  (0, _createFooter2['default'])(rootElement);

	  // Create the selection overlay
	  (0, _createOverlay2['default'])(rootElement);

	  // Set list positions from the querystring of a shareable URL
	  (0, _setListPositions2['default'])(rootElement, location);

	  // Update the selectable positions in each side with data
	  rootElement.view.sides.forEach(function (side, index) {

	    rootElement.view.activeSide = index;

	    (0, _updateView2['default'])(rootElement, rootElement.view.activeSide, false);

	    // Set formation and create formation selection UI
	    if (rootElement.view.sides[rootElement.view.activeSide].formation) {
	      (0, _createFormation2['default'])(rootElement, rootElement.view.sides[rootElement.view.activeSide].formation, rootElement.view.activeSide);
	    }

	    // Add events that toggle the selection overlay
	    (0, _addToggleEvents2['default'])(rootElement, rootElement.view.activeSide);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// STATIC DATA
	// Lookup data for supported sports
	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"] = {"football":{"categories":{"default":{"displayName":"default","order":0,"goalkeeper":{"displayName":"Goalkeeper","order":0,"positions":["Goalkeeper"]},"defender":{"displayName":"Defenders","order":1,"positions":["Defender"]},"midfielder":{"displayName":"Midfielders","order":2,"positions":["Midfielder","Attacking Midfielder"]},"striker":{"displayName":"Strikers","order":3,"positions":["Striker"]}}},"formations":{"0":{"name":"334","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":30},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":55},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":55},"8":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":12,"y":80},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":88,"y":80}}},"1":{"name":"343","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":30},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":55},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":55},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":25,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":75,"y":80}}},"2":{"name":"352","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":30},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":11,"y":60},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":30,"y":53},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":50},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":70,"y":53},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":89,"y":60},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":32,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":66,"y":80}}},"3":{"name":"361","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":30},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":7,"y":61},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":23,"y":56},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":41,"y":54},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":59,"y":54},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":77,"y":56},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":93,"y":61},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80}}},"4":{"name":"3142","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":62},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"5":{"name":"3331","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":42},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"6":{"name":"3412","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":42},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"7":{"name":"3421","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":42},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"8":{"name":"3511","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":11,"y":52},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":30,"y":45},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":70,"y":45},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":89,"y":52},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"9":{"name":"31312","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":20},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":20},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":20},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":37},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":54},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":54},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":54},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":71},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":32,"y":88},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":67,"y":88}}},"10":{"name":"424","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":30},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":30},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":55},"8":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":12,"y":80},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":88,"y":80}}},"11":{"name":"433","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":30},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":30},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":55},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":17,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":83,"y":80}}},"12":{"name":"442","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":30},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":30},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":55},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":55},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":80}}},"13":{"name":"451","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":30},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":30},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":11,"y":60},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":30,"y":53},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":50},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":70,"y":53},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":89,"y":60},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80}}},"14":{"name":"4132","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":62},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"15":{"name":"4141","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":62},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"16":{"name":"4222","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"17":{"name":"4231","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"18":{"name":"4312","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"19":{"name":"4321","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"20":{"name":"4411","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":42},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"21":{"name":"41212","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":20},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":20},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":20},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":20},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":37},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":54},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":54},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":71},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":88},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":88}}},"22":{"name":"523","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":11,"y":35},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":30,"y":28},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":25},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":70,"y":28},"6":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":89,"y":35},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":30,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":70,"y":55},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":25,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":75,"y":80}}},"23":{"name":"532","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":11,"y":35},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":30,"y":28},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":25},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":70,"y":28},"6":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":89,"y":35},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":55},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":55},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":30,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":70,"y":80}}},"24":{"name":"541","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":11,"y":35},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":30,"y":28},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":25},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":70,"y":28},"6":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":89,"y":35},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":55},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":55},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":55},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80}}},"25":{"name":"squad23","openPositions":"true","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":3},"2":{"id":"2","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":3},"3":{"id":"3","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":3},"4":{"id":"4","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":3},"5":{"id":"5","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":20},"6":{"id":"6","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":20},"7":{"id":"7","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":20},"8":{"id":"8","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":20},"9":{"id":"9","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":37},"10":{"id":"10","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":37},"11":{"id":"11","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":37},"12":{"id":"12","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":37},"13":{"id":"13","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":54},"14":{"id":"14","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":54},"15":{"id":"15","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":54},"16":{"id":"16","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":54},"17":{"id":"17","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":71},"18":{"id":"18","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":71},"19":{"id":"19","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":71},"20":{"id":"20","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":71},"21":{"id":"21","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":25,"y":88},"22":{"id":"22","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":50,"y":88},"23":{"id":"23","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":75,"y":88}}},"26":{"name":"squad24","openPositions":"true","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":3},"2":{"id":"2","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":3},"3":{"id":"3","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":3},"4":{"id":"4","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":3},"5":{"id":"5","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":20},"6":{"id":"6","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":20},"7":{"id":"7","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":20},"8":{"id":"8","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":20},"9":{"id":"9","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":37},"10":{"id":"10","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":37},"11":{"id":"11","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":37},"12":{"id":"12","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":37},"13":{"id":"13","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":54},"14":{"id":"14","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":54},"15":{"id":"15","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":54},"16":{"id":"16","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":54},"17":{"id":"17","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":71},"18":{"id":"18","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":71},"19":{"id":"19","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":71},"20":{"id":"20","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":71},"21":{"id":"21","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":88},"22":{"id":"22","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":88},"23":{"id":"23","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":88},"24":{"id":"24","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":88}}}}},"rugbyunion":{"categories":{"forwards":{"displayName":"Forwards","order":0,"frontRow":{"displayName":"Front Row","order":0,"positions":["Loose Head Prop","Hooker","Tight Head Prop","Prop","Front Row"]},"secondRow":{"displayName":"Second Row","order":1,"positions":["Lock","Second Row"]},"backRow":{"displayName":"Back Row","order":2,"positions":["Flanker","Openside Flanker","Blindside Flanker","No 8","Back Row"]}},"backs":{"displayName":"Backs","order":1,"halfBacks":{"displayName":"Half Backs","order":0,"positions":["Fly Half","Scrum Half","Half Back"]},"centres":{"displayName":"Centres","order":1,"positions":["Inside Centre","Outside Centre","Centre"]},"wingers":{"displayName":"Wingers","order":2,"positions":["Right Wing","Left Wing","Winger"]},"fullBack":{"displayName":"Full Back","order":3,"positions":["Full Back"]}}},"formations":{"0":{"name":"32325","positions":{"1":{"id":"1","label":"1","group":"forwards","subGroup":"frontRow","positionName":"looseHeadProp","positionDisplayName":"Loose Head Prop","positionVariations":["frontRow","prop","looseHeadProp"],"x":10,"y":6},"2":{"id":"2","label":"2","group":"forwards","subGroup":"frontRow","positionName":"hooker","positionDisplayName":"Hooker","positionVariations":["frontRow","hooker"],"x":35,"y":6},"3":{"id":"3","label":"3","group":"forwards","subGroup":"frontRow","positionName":"tightHeadProp","positionDisplayName":"Tight Head Prop","positionVariations":["frontRow","prop","tightHeadProp"],"x":60,"y":6},"4":{"id":"4","label":"4","group":"forwards","subGroup":"secondRow","positionName":"lock","positionDisplayName":"Lock","positionVariations":["lock","secondRow"],"x":20,"y":16},"5":{"id":"4","label":"5","group":"forwards","subGroup":"secondRow","positionName":"lock","positionDisplayName":"Lock","positionVariations":["lock","secondRow"],"x":50,"y":16},"6":{"id":"5","label":"6","group":"forwards","subGroup":"backRow","positionName":"blindsideFlanker","positionDisplayName":"Blindside Flanker","positionVariations":["flanker","blindsideFlanker","backRow"],"x":5,"y":26},"7":{"id":"6","label":"7","group":"forwards","subGroup":"backRow","positionName":"opensideFlanker","positionDisplayName":"Openside Flanker","positionVariations":["flanker","opensideFlanker","backRow"],"x":65,"y":26},"8":{"id":"7","label":"8","group":"forwards","subGroup":"backRow","positionName":"no8","positionDisplayName":"Number 8","positionVariations":["no8","backRow"],"x":35,"y":31},"9":{"id":"8","label":"9","group":"backs","subGroup":"halfBacks","positionName":"scrumHalf","positionDisplayName":"Scrum Half","positionVariations":["scrumHalf"],"x":51,"y":41},"10":{"id":"9","label":"10","group":"backs","subGroup":"halfBacks","positionName":"flyHalf","positionDisplayName":"Fly Half","positionVariations":["flyHalf"],"x":63,"y":52},"11":{"id":"11","label":"12","group":"backs","subGroup":"centres","positionName":"insideCentre","positionDisplayName":"Inside Centre","positionVariations":["centre","insideCentre"],"x":73,"y":61},"12":{"id":"12","label":"13","group":"backs","subGroup":"centres","positionName":"outsideCentre","positionDisplayName":"Outside Centre","positionVariations":["centre","outsideCentre"],"x":84,"y":71},"13":{"id":"10","label":"11","group":"backs","subGroup":"wingers","positionName":"leftWing","positionDisplayName":"Left Winger","positionVariations":["winger","leftWing"],"x":5,"y":81},"14":{"id":"13","label":"14","group":"backs","subGroup":"wingers","positionName":"rightWing","positionDisplayName":"Right Winger","positionVariations":["winger","rightWing"],"x":95,"y":81},"15":{"id":"14","label":"15","group":"backs","subGroup":"fullBack","positionName":"fullBack","positionDisplayName":"Full Back","positionVariations":["fullBack"],"x":50,"y":91}}}}},"rugbyleague":{"categories":{"forwards":{"displayName":"Forwards","order":0,"frontRow":{"displayName":"Front Row","order":0,"positions":["Prop","Hooker","Forward","Utility"]},"backRow":{"displayName":"Back Row","order":1,"positions":["Second Row","Loose Forward","Lock","Forward","Utility"]}},"backs":{"displayName":"Backs","order":1,"halves":{"displayName":"Halves","order":0,"positions":["Scrum Half","Stand Off","Util. Back","Utility"]},"threequarters":{"displayName":"Threequarters","order":1,"positions":["Winger","Centre","Util. Back","Utility"]},"fullBack":{"displayName":"Full Back","order":2,"positions":["Full Back","Util. Back","Utility"]}}},"formations":{"0":{"name":"33241","positions":{"1":{"id":"1","label":"10","group":"forwards","subGroup":"frontRow","positionName":"prop","positionDisplayName":"Prop","positionVariations":["prop"],"x":15,"y":6},"2":{"id":"2","label":"9","group":"forwards","subGroup":"frontRow","positionName":"hooker","positionDisplayName":"Hooker","positionVariations":["hooker"],"x":50,"y":6},"3":{"id":"1","label":"8","group":"forwards","subGroup":"frontRow","positionName":"prop","positionDisplayName":"Prop","positionVariations":["prop"],"x":85,"y":6},"4":{"id":"4","label":"13","group":"forwards","subGroup":"backRow","positionName":"looseForward","positionDisplayName":"Loose Forward","positionVariations":["looseForward"],"x":50,"y":30},"5":{"id":"3","label":"12","group":"forwards","subGroup":"backRow","positionName":"secondRow","positionDisplayName":"Second Row","positionVariations":["secondRow"],"x":32,"y":18},"6":{"id":"3","label":"11","group":"forwards","subGroup":"backRow","positionName":"secondRow","positionDisplayName":"Second Row","positionVariations":["secondRow"],"x":68,"y":18},"7":{"id":"5","label":"7","group":"backs","subGroup":"halves","positionName":"scrumHalf","positionDisplayName":"Scrum Half","positionVariations":["scrumHalf"],"x":50,"y":42},"8":{"id":"6","label":"6","group":"backs","subGroup":"halves","positionName":"standOff","positionDisplayName":"Stand Off","positionVariations":["standOff"],"x":65,"y":54},"9":{"id":"8","label":"5","group":"backs","subGroup":"threequarters","positionName":"winger","positionDisplayName":"Winger","positionVariations":["winger"],"x":5,"y":78},"10":{"id":"7","label":"4","group":"backs","subGroup":"threequarters","positionName":"centre","positionDisplayName":"Centre","positionVariations":["centre"],"x":20,"y":66},"11":{"id":"7","label":"3","group":"backs","subGroup":"threequarters","positionName":"centre","positionDisplayName":"Centre","positionVariations":["centre"],"x":80,"y":66},"12":{"id":"8","label":"2","group":"backs","subGroup":"threequarters","positionName":"winger","positionDisplayName":"Winger","positionVariations":["winger"],"x":95,"y":78},"13":{"id":"9","label":"1","group":"backs","subGroup":"fullBack","positionName":"fullBack","positionDisplayName":"Full Back","positionVariations":["fullBack"],"x":50,"y":90}}}}},"cricket":{"categories":{"default":{"displayName":"default","order":0,"batsman":{"displayName":"Batsmen","order":0,"positions":["Batsman","Unknown"]},"allrounder":{"displayName":"All Rounders","order":1,"positions":["All Rounder","Unknown"]},"bowler":{"displayName":"Bowlers","order":2,"positions":["Bowler","Unknown"]},"wicketkeeper":{"displayName":"Wicket Keepers","order":3,"positions":["Wicket Keeper","Wicketkeeper\/batsman","Unknown"]}}},"formations":{"0":{"name":"default","openPositions":"true","positions":{"1":{"id":"1","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"2":{"id":"2","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"3":{"id":"3","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"4":{"id":"4","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"5":{"id":"5","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"6":{"id":"6","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"7":{"id":"7","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"8":{"id":"8","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"9":{"id":"9","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"10":{"id":"10","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"11":{"id":"11","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]}}}}}};module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// CREATE SIDES
	// Create an object for each side provided in the data

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticData = __webpack_require__(9);

	var _staticData2 = _interopRequireDefault(_staticData);

	var _mergeObject = __webpack_require__(1);

	var _mergeObject2 = _interopRequireDefault(_mergeObject);

	var _storedSelections = __webpack_require__(11);

	var _storedSelections2 = _interopRequireDefault(_storedSelections);

	var _findFormation = __webpack_require__(12);

	var _findFormation2 = _interopRequireDefault(_findFormation);

	var _createGenericFormation = __webpack_require__(13);

	var _createGenericFormation2 = _interopRequireDefault(_createGenericFormation);

	exports['default'] = function (rootElement) {

	  // Checks whether the given formation is in the formations object for a given type
	  function isValidFormation(formations, formation) {

	    var isValid = false;

	    Object.keys(formations).forEach(function (currentFormation) {
	      if (formation === formations[currentFormation].name && Object.keys(formations[currentFormation].positions).length == rootElement.view.data.numOfParticipants) {
	        isValid = true;
	      }
	    });

	    return isValid;
	  }

	  // Populate the sides object
	  function populateSides() {

	    rootElement.view.data.sides.forEach(function (side, index) {

	      // Create object for information specific to the current side
	      rootElement.view.sides[index] = {};

	      if (side.formation) {
	        rootElement.view.sides[index].formation = side.formation;
	      } else {
	        rootElement.view.sides[index].formation = "default";
	      }

	      if (rootElement.view.formations == null) {
	        // Create generic formation and position data if a formations object is not found for the given type
	        rootElement.view.categories = false;
	        rootElement.view.formations = (0, _createGenericFormation2['default'])(rootElement, rootElement.view.sides[index].formation);
	        rootElement.view.sides[index].positions = rootElement.view.formations[rootElement.view.sides[index].formation].positions;

	        allValidFormations = false;
	      } else {
	        if (isValidFormation(_staticData2['default'][rootElement.view.data.type].formations, rootElement.view.sides[index].formation)) {
	          // Set positions from the matching valid formation object
	          rootElement.view.sides[index].positions = rootElement.view.formations[(0, _findFormation2['default'])(rootElement.view.formations, rootElement.view.sides[index].formation)].positions;
	        } else {
	          // Create generic formation and position data if a formations object is found but a valid formation is not given
	          rootElement.view.categories = false;
	          rootElement.view.formations = (0, _createGenericFormation2['default'])(rootElement, rootElement.view.sides[index].formation);
	          rootElement.view.positions = rootElement.view.formations[rootElement.view.sides[index].formation].positions;

	          allValidFormations = false;
	        }
	      }

	      // Set whether the side is an openPositions formation
	      if (rootElement.view.formations[(0, _findFormation2['default'])(rootElement.view.formations, rootElement.view.sides[index].formation)].openPositions) {
	        rootElement.view.sides[index].openPositions = true;
	      } else {
	        rootElement.view.sides[index].openPositions = false;
	      }
	    });
	  }

	  // Create object to store sides information
	  rootElement.view.sides = [];

	  if (rootElement.view.data.sides) {
	    rootElement.view.sidedData = true;

	    populateSides();
	  } else {
	    // Set flag to note data was not in sided format
	    rootElement.view.sidedData = false;

	    rootElement.view.data.sides = [];

	    var side = {};

	    side.name = "";
	    side.image = "";
	    side.formation = rootElement.view.data.formation;
	    side.participants = rootElement.view.data.participants;

	    rootElement.view.data.sides.push(side);

	    populateSides();
	  }

	  var allValidFormations = true;

	  if (rootElement.view.data.sides.length > 1) {
	    rootElement.setAttribute('vs', '');
	  }

	  (0, _storedSelections2['default'])(rootElement, "recover");

	  // Apply attribute for styling purposes if all sides have valid formations
	  if (allValidFormations) {
	    rootElement.setAttribute('data-formation', '');
	  }
	};

	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	// STORED SELECTIONS
	// Manages partially complete selectors in localstorage

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _findFormation = __webpack_require__(12);

	var _findFormation2 = _interopRequireDefault(_findFormation);

	exports["default"] = function (rootElement, action) {

	  // Search for an existing selection record in localStorage
	  function findSelection(storedView) {

	    var foundSelection = false;

	    if (storedView) {
	      storedView.forEach(function (selection) {
	        if (selection.id == rootElement.view.data.id) {
	          foundSelection = selection;
	        }
	      });
	    }

	    return foundSelection;
	  }

	  // Creates or updates a selection in localStorage
	  function storeSelection(selection, storedView) {

	    // Creates an array of objects containing formation and position data for each side
	    var updateStoredData = function updateStoredData() {
	      selection.sides = [];

	      rootElement.view.sides.forEach(function (side, index) {

	        selection.sides[index] = {};

	        selection.sides[index].formation = rootElement.view.sides[index].formation;
	        selection.sides[index].pariticpants = [];

	        rootElement.view.data.sides[index].participants.forEach(function (participant) {

	          selection.sides[index].pariticpants.push(participant.listPosition);
	        });

	        selection.sides.push(selection.sides[index]);
	      });
	    };

	    // Update if provided with a selection
	    if (selection) {
	      updateStoredData();
	    } else {
	      selection = {};
	      selection.id = rootElement.view.data.id;
	      selection.updated = Math.floor(Date.now() / 1000);
	      updateStoredData();
	      storedView.push(selection);
	    }

	    localStorage.storedView = JSON.stringify(storedView);
	  }

	  // Set the formation and listPositions stored in localStorage
	  function integrateSelection(selection, storedView) {

	    if (selection) {
	      rootElement.view.sides.forEach(function (side, index) {

	        side = index;

	        // Only integrate formation if formation is found, update localStorage if not found
	        if (rootElement.view.formations[(0, _findFormation2["default"])(rootElement.view.formations, selection.sides[side].formation)]) {
	          rootElement.view.sides[side].formation = selection.sides[side].formation;
	        } else {
	          selection.sides[side].formation = rootElement.view.sides[side].formation;

	          localStorage.storedView = JSON.stringify(storedView);
	        }

	        // Only integrate listPositions if the number of positions in the data matches the number of positions in localStorage
	        if (selection.sides[side].pariticpants.length === rootElement.view.data.sides[side].participants.length) {
	          selection.sides[side].pariticpants.forEach(function (participant, index) {

	            rootElement.view.data.sides[side].participants[index].listPosition = participant;
	          });
	        }
	      });
	    }
	  }

	  // Removes stored selections that are more than 24hrs old
	  function removeOldSelections(storedView) {

	    if (storedView) {
	      storedView.forEach(function (selection, index) {
	        var now = Math.floor(Date.now() / 1000);
	        if (now - selection.updated > 86400) {
	          storedView.splice(index, 1);
	        }
	      });

	      localStorage.storedView = JSON.stringify(storedView);
	    }
	  }

	  if (localStorage.storedView) {
	    var storedView = JSON.parse(localStorage.storedView);
	  } else {
	    localStorage.storedView = JSON.stringify([]);
	  }

	  switch (action) {
	    case "store":
	      storeSelection(findSelection(storedView), storedView);
	      removeOldSelections(storedView);
	      break;

	    case "recover":
	      integrateSelection(findSelection(storedView), storedView);
	      removeOldSelections(storedView);
	      break;
	  }
	};

	module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// FIND FORMATION
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (formationsObject, requiredFormation) {

	  var matchingFormation = "";

	  Object.keys(formationsObject).forEach(function (formation) {
	    if (formationsObject[formation].name == requiredFormation) {
	      matchingFormation = formation;
	    }
	  });

	  return matchingFormation;
	};

	module.exports = exports["default"];
	// Finds the object key for a given formation via the name property

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// CREATE GENERIC FORMATION
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports["default"] = function (rootElement, name) {

	  var formationsObject = _defineProperty({}, name, {
	    "name": [name],
	    "positions": {}
	  });

	  for (var i = 0; i < rootElement.view.data.numOfParticipants; i++) {
	    formationsObject[name]['positions'][i + 1] = {
	      "id": i + 1,
	      "group": name,
	      "subGroup": name,
	      "positionName": name,
	      "positionDisplayName": "Participant",
	      "positionVariations": [name]
	    };
	  }

	  return formationsObject;
	};

	module.exports = exports["default"];
	// Creates a generic formations object with generic position data

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// CREATE HEADER

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (rootElement) {

	  var header = document.createElement('div');

	  header.classList.add('sdc-interactive-selector__header');
	  header.setAttribute('data-role', 'header');
	  header.style.setProperty("--sdc-interactive-selector-header-bg-colour", rootElement.view.data.backgroundImage);

	  // If a background image is present, apply additional styling
	  if (rootElement.view.data.headerBackground) {
	    header.classList.add('sdc-interactive-selector__header--feature');
	  }

	  header.innerHTML = '\n    ' + (rootElement.view.data.headerBackground ? '\n    <div class="sdc-interactive-selector__header-image-wrap"><img class="sdc-interactive-selector__header-image" src="' + rootElement.view.data.headerBackground + '" alt="' + rootElement.view.data.title + '"></div>\n    ' : '') + '\n\n    <div class="sdc-interactive-selector__title-wrap">\n      ' + (rootElement.view.data.sponsorImage ? '\n        ' + (rootElement.view.data.sponsorLink ? '<a href="' + rootElement.view.data.sponsorLink + '" target="_blank" class="sdc-interactive-selector__header-sponsor-link">' : '') + '\n          <img src="' + rootElement.view.data.sponsorImage + '" class="sdc-interactive-selector__header-sponsor-image">\n        ' + (rootElement.view.data.sponsorLink ? '</a>' : '') + '\n      ' : '') + '\n      ' + (rootElement.view.data.title ? '<h2 class="sdc-interactive-selector__title" data-role="title">' + rootElement.view.data.title + '</h2>' : '') + '\n    </div>\n  ';

	  rootElement.appendChild(header);
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// CREATE LIST

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticDataJs = __webpack_require__(9);

	var _staticDataJs2 = _interopRequireDefault(_staticDataJs);

	var _findActiveList = __webpack_require__(16);

	var _findActiveList2 = _interopRequireDefault(_findActiveList);

	exports['default'] = function (rootElement) {

	  // Create selection area frame
	  var selectorBody = document.createElement('div');
	  selectorBody.classList.add('sdc-interactive-selector__selector-body');
	  selectorBody.setAttribute('data-role', 'selector-body');

	  selectorBody.innerHTML = '\n    <div class="sdc-interactive-selector__selection-area" data-role="selection-area">\n    </div>\n  ';

	  rootElement.appendChild(selectorBody);

	  var selectorBody = rootElement.querySelector('[data-role="selector-body"]');
	  var selectionArea = rootElement.querySelector('[data-role="selection-area"]');

	  var sideColours = [];

	  rootElement.view.sides.forEach(function (side, index) {

	    var side = '\n      <div class="sdc-interactive-selector__side">\n        ' + (rootElement.view.data.sides[index].name ? '\n          <h3 class="sdc-interactive-selector__participants-list-heading">\n            ' + (rootElement.view.data.sides[index].image ? '\n              <img src="' + rootElement.view.data.sides[index].image + '" class="sdc-interactive-selector__participants-list-image">' : '') + '\n            ' + rootElement.view.data.sides[index].name + '\n          </h3>' : '') + '\n\n        <ul class="sdc-interactive-selector__participants-list' + (rootElement.view.data.useParticipantImage && !rootElement.view.data.useCustomParticipants ? ' sdc-interactive-selector__participants-list--participant-images' : '') + '" data-role="participants-list" data-side="' + index + '">\n        </ul>\n      </div>\n    ';

	    selectionArea.insertAdjacentHTML('beforeend', side);

	    var activeList = (0, _findActiveList2['default'])(rootElement, index);

	    // Add selectable positions
	    Object.keys(rootElement.view.sides[index].positions).forEach(function (position) {
	      var participantsItem = '\n        <li id="participant-' + position + '" class="sdc-interactive-selector__participants-item" data-role="participant">\n          <span class="sdc-interactive-selector__participant-icon" data-role="participant-icon" data-number="' + rootElement.view.sides[index].positions[position].label + '"></span>\n        </li>\n      ';

	      activeList.insertAdjacentHTML('beforeend', participantsItem);
	    });

	    if (rootElement.view.data.sides[index].colour) {
	      sideColours.push(rootElement.view.data.sides[index].colour);
	    }
	  });

	  if (sideColours.length = Object.keys(rootElement.view.sides).length) {
	    var gradient = 'linear-gradient(';

	    sideColours.forEach(function (colour, index) {
	      var startPercentage = 100 / sideColours.length * index;
	      var endPercentage = 100 / sideColours.length * (index + 1);

	      gradient += colour;
	      gradient += ' ' + startPercentage + '%,';

	      gradient += colour;
	      gradient += ' ' + endPercentage + '%';

	      if (index < sideColours.length - 1) {
	        gradient += ',';
	      }
	    });

	    gradient += ')';

	    selectorBody.style.backgroundImage = gradient;
	  }
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	// FIND ACTIVE LIST
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (rootElement, side) {

	  var participantsLists = rootElement.querySelectorAll('[data-role="participants-list"]');
	  var participantsList = "";

	  participantsLists.forEach(function (list) {

	    if (list.dataset.side == side) {
	      participantsList = list;
	    }
	  });

	  return participantsList;
	};

	module.exports = exports["default"];
	// Finds the participantsList that is currently being selected for

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// CREATE FOOTER
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (rootElement) {

	  var footer = '\n    <div class="sdc-interactive-selector__footer" data-role="footer">\n      <button class="sdc-interactive-selector__clear" data-role="action" data-action="clear">Clear</button>\n      <button class="sdc-interactive-selector__submit" data-role="action" data-action="submit">Submit</button>\n    </div>\n  ';

	  rootElement.insertAdjacentHTML('beforeend', footer);
	};

	module.exports = exports['default'];
	// Create the footer to house action links and append to the selector

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// CREATE OVERLAY

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _translations = __webpack_require__(19);

	var _translations2 = _interopRequireDefault(_translations);

	exports['default'] = function (rootElement) {

	  // Create overlay div
	  var overlay = document.createElement('div');

	  overlay.id = "overlay";
	  overlay.classList.add('sdc-interactive-selector__overlay');
	  overlay.setAttribute('hidden', '');
	  overlay.setAttribute('data-role', 'overlay');

	  // Create overlayInner
	  overlay.innerHTML = '\n    <div class="sdc-interactive-selector__overlay-inner">\n      <div class="sdc-interactive-selector__overlay-header">\n        <h4 class="sdc-interactive-selector__overlay-heading">' + _translations2['default'][rootElement.view.lang].overlay.heading + ' <span class="sdc-interactive-selector__overlay-heading-detail" data-role="overlay-heading"></span></h4>\n\n        <button class="sdc-interactive-selector__overlay-close" data-toggle="overlay">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M25.775 24.857c-.008-.202-.088-.372-.252-.537l-6.534-6.534-.355-.354.354-.354 7.03-7.03c-.033-.043-.07-.09-.112-.14-.166-.202-.346-.4-.536-.59-.384-.383-.614-.44-.716-.44-.212.008-.383.088-.547.252l-6.535 6.534-.354.354-.353-.354-7.03-7.03c-.043.033-.09.07-.14.112-.203.168-.402.35-.59.536-.286.287-.447.552-.44.726.008.202.088.373.252.537l6.533 6.534.354.353-.354.354-7.03 7.03c.032.043.07.09.11.14.17.204.35.402.537.59.384.383.613.44.716.44.212-.007.383-.087.547-.25l6.535-6.536.354-.353.354.354 7.03 7.032c.043-.033.09-.07.14-.112.2-.166.4-.346.59-.536.285-.287.445-.552.44-.727z"/></svg> close\n        </button>\n      </div>\n      <div class="sdc-interactive-selector__overlay-body" data-role="overlay-body"' + (rootElement.view.data.useParticipantImage ? 'data-images="participant"' : 'data-images="team"') + '>\n      </div>\n    </div>\n  ';

	  rootElement.appendChild(overlay);
	};

	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	// TRANSLATIONS
	// Lookup for translated messaging

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {

	  "en": {
	    "overlay": {
	      "heading": "Selecting",
	      "currentlySelected": "Currently Selected"
	    },
	    "clearConfirm": {
	      "title": "Are you sure?",
	      "text": "This will remove all of the selections you've made so far.",
	      "accept": "Yes",
	      "decline": "No"
	    },
	    "shareUrlInvalid": {
	      "title": "URL not valid",
	      "text": "There seems to be a problem with the URL. Please check it was typed correctly."
	    },
	    "selectionInvalid": {
	      "title": "Invalid selection found",
	      "text": "There seems to be one or more selections in an invalid position. Please make another selection for the items highlighted."
	    },
	    "submissionSuccess": {
	      "title": "Thanks!",
	      "text": "Your selection has been submitted. Share with your friends using the links below.",
	      "copyUrl": "Copy Link"
	    },
	    "submissionFailure": {
	      "title": "Submission Failed",
	      "text": "Something went wrong. Please try submitting your selection again."
	    }
	  },
	  "de": {}

	};
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// SET LIST POSITIONS

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createModal = __webpack_require__(21);

	var _createModal2 = _interopRequireDefault(_createModal);

	var _translations = __webpack_require__(19);

	var _translations2 = _interopRequireDefault(_translations);

	exports['default'] = function (rootElement, url) {

	  var failMessage = '\n    <div class="sdc-interactive-selector__modal-message">\n      <h4 class="sdc-interactive-selector__modal-message-title">' + _translations2['default'][rootElement.view.lang].shareUrlInvalid.title + '</h4>\n      <p class="sdc-interactive-selector__modal-message-text">' + _translations2['default'][rootElement.view.lang].shareUrlInvalid.text + '</p>\n    </div>\n  ';

	  // Find query string parameter
	  function getUrlParameter(name, url) {
	    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	    var results = regex.exec(url.search);
	    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	  };

	  // Check formation parameter is a valid formation
	  function checkFormation(urlFormation) {

	    var formationsArray = urlFormation.split(',');
	    var validFormationsTarget = formationsArray.length;
	    var validFormations = 0;

	    rootElement.view.sides.forEach(function (side, index) {

	      while (validFormations < validFormationsTarget) {

	        Object.keys(rootElement.view.formations).forEach(function (formation) {
	          if (formationsArray[index] === rootElement.view.formations[formation].name) {
	            validFormations++;
	          }
	        });
	      }
	    });

	    if (validFormations === validFormationsTarget) {
	      return formationsArray;
	    } else {
	      return false;
	    }
	  }

	  function unsetListPositions() {
	    rootElement.view.sides.forEach(function (side, index) {
	      rootElement.view.data.sides[index].participants.forEach(function (participant) {
	        participant.listPosition = 0;
	      });
	    });
	  }

	  var id = getUrlParameter('id', url);

	  // Only attempt to set positions if id matches
	  if (id == rootElement.view.data.id) {
	    // Get the value of formation and participants parameters
	    var formation = getUrlParameter('formation', url);
	    var participants = getUrlParameter('participants', url);

	    // Return and load blank selector if neither parameter exists
	    if (formation || participants) {
	      // Create array from lists of participants inurl
	      var urlParticipantListsArray = participants.split(',');
	      var participantArrays = [];

	      // Loop through each list splitting IDs into arrays and storing the resulting array in participantArrays
	      urlParticipantListsArray.forEach(function (participantList) {
	        var participantsIdArray = participantList.split('-');

	        participantArrays.push(participantsIdArray);
	      });

	      // Reset any listPositions from data
	      unsetListPositions();

	      // Get array of formations from url
	      var formationsArray = checkFormation(formation);

	      // Loop through formations found and store in the view object if a result is returned
	      if (formationsArray) {
	        formationsArray.forEach(function (formation, index) {
	          rootElement.view.sides[index].formation = formation;
	        });
	      } else {
	        // Unset all listPositions to return to a blank selector
	        unsetListPositions();

	        // Inform user that the URL was invalid
	        (0, _createModal2['default'])(rootElement, failMessage);

	        return;
	      }

	      participantArrays.forEach(function (participantArray, index) {
	        var participantCount = 0;

	        // Loop through the IDs in the array
	        participantArray.forEach(function (participantId) {
	          // Find the current ID in the participants data
	          rootElement.view.data.sides[index].participants.forEach(function (participant) {
	            // If a match is found, set the matching participant's listPosition to the value of participantCount
	            if (participantId == participant.id) {
	              // Add to participantCount if the current count does not exceed the given number of participants for the selector
	              if (participantCount <= rootElement.view.data.numOfParticipants) {
	                participantCount++;
	              }

	              participant.listPosition = participantCount;
	            }
	          });
	        });

	        // URL is invalid if the participantCount value is not equal to the given number of participants for the selector
	        if (participantCount !== rootElement.view.data.numOfParticipants) {
	          // Unset all listPositions to return to a blank selector
	          unsetListPositions();

	          // Inform user that the URL was invalid
	          (0, _createModal2['default'])(rootElement, failMessage);
	        }
	      });
	    } else {
	      return;
	    }
	  } else {
	    return;
	  }
	};

	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// CREATE MODAL
	// Show messages to the user (individual functions responsible for creating the content)

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _addActionEvents = __webpack_require__(22);

	var _addActionEvents2 = _interopRequireDefault(_addActionEvents);

	var _hideModal = __webpack_require__(30);

	var _hideModal2 = _interopRequireDefault(_hideModal);

	exports['default'] = function (rootElement, content) {

	  var selectorBody = rootElement.querySelector('[data-role="selector-body"]');
	  var modal = rootElement.querySelector('[data-role="modal"]');
	  var actions = rootElement.querySelectorAll('[data-role="action"]');

	  // Disable action buttons
	  actions.forEach(function (action) {
	    action.disabled = true;
	  });

	  function createFrame() {

	    // Create modal frame - add spinner if no content has been sent
	    var modal = '\n      <div class="sdc-interactive-selector__modal" data-role="modal">\n        <div class="sdc-interactive-selector__modal-inner" data-role="modal-inner">\n          <button class="sdc-interactive-selector__modal-close" data-role="modal-close">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M25.775 24.857c-.008-.202-.088-.372-.252-.537l-6.534-6.534-.355-.354.354-.354 7.03-7.03c-.033-.043-.07-.09-.112-.14-.166-.202-.346-.4-.536-.59-.384-.383-.614-.44-.716-.44-.212.008-.383.088-.547.252l-6.535 6.534-.354.354-.353-.354-7.03-7.03c-.043.033-.09.07-.14.112-.203.168-.402.35-.59.536-.286.287-.447.552-.44.726.008.202.088.373.252.537l6.533 6.534.354.353-.354.354-7.03 7.03c.032.043.07.09.11.14.17.204.35.402.537.59.384.383.613.44.716.44.212-.007.383-.087.547-.25l6.535-6.536.354-.353.354.354 7.03 7.032c.043-.033.09-.07.14-.112.2-.166.4-.346.59-.536.285-.287.445-.552.44-.727z"/></svg> close\n          </button>\n          <div class="sdc-interactive-selector__modal-body" data-role="modal-body">\n            <div class="sdc-interactive-selector__modal-spinner">\n              <div class="sdc-interactive-selector__modal-spinner-icon"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ';

	    selectorBody.insertAdjacentHTML('beforeend', modal);

	    var modal = rootElement.querySelector('[data-role="modal"]');
	    var modalInner = modal.querySelector('[data-role="modal-inner"]');
	    var modalClose = rootElement.querySelector('[data-role="modal-close"]');

	    // Add a function and event listeners to close the selector
	    function closeModal() {

	      (0, _hideModal2['default'])(modal);

	      (0, _addActionEvents2['default'])(rootElement);
	    }

	    modalClose.addEventListener('click', closeModal);

	    modal.addEventListener('click', function (e) {
	      if (!modalInner.contains(e.target)) {
	        closeModal();
	      }
	    });

	    window.addEventListener('keyup', function (e) {
	      if (e.keyCode == 27) {
	        closeModal();
	      }
	    });
	  }

	  // Clear out any existing content, then add new content
	  function addContent() {

	    var modalBody = rootElement.querySelector('[data-role="modal-body"]');

	    modalBody.innerHTML = "";
	    modalBody.insertAdjacentHTML('beforeend', content);
	  }

	  // Scroll modal window into view when open
	  function scrollToModal() {

	    var modalBox = rootElement.querySelector('[data-role="modal"]');
	    var modalRect = modalBox.getBoundingClientRect();
	    var modalTop = modalRect.top + window.pageYOffset;
	    var centre = modalTop - window.innerHeight / 2 + modalRect.height / 2;
	    window.scrollTo(0, centre);
	  }

	  // Show existing modal or create new one
	  if (modal) {
	    // if the modal is not already in view, show it before adding content
	    if (modal.hasAttribute('hidden')) {
	      modal.removeAttribute('hidden');

	      if (content) {
	        addContent();
	      }
	    } else {
	      if (content) {
	        addContent();
	      }
	    }
	  } else {
	    createFrame();

	    if (content) {
	      addContent();
	    }
	  }

	  scrollToModal();
	};

	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// ADD ACTION EVENTS

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _clearView = __webpack_require__(23);

	var _clearView2 = _interopRequireDefault(_clearView);

	var _submitView = __webpack_require__(31);

	var _submitView2 = _interopRequireDefault(_submitView);

	exports['default'] = function (rootElement) {

	  var clearAction = rootElement.querySelector('[data-action="clear"]');
	  var submitAction = rootElement.querySelector('[data-action="submit"]');

	  // Returns true when selections empty
	  function isEmpty() {
	    var empty = true;

	    rootElement.view.data.sides.forEach(function (side, index) {
	      rootElement.view.data.sides[index].participants.forEach(function (participant) {
	        if (participant.listPosition != 0) {
	          empty = false;
	          return empty;
	        }
	      });

	      if (rootElement.view.data.sides[index].formation != rootElement.view.sides[index].formation) {
	        empty = false;
	        return empty;
	      }
	    });

	    return empty;
	  };

	  // Returns true when selections completed
	  function isComplete() {
	    var complete = false;
	    var target = rootElement.view.data.numOfParticipants * rootElement.view.sides.length;
	    var selectedCount = 0;

	    rootElement.view.sides.forEach(function (side, index) {
	      rootElement.view.data.sides[index].participants.forEach(function (participant) {
	        if (participant.listPosition != 0) {
	          selectedCount++;
	        }
	      });
	    });

	    if (selectedCount == target) {
	      complete = true;

	      rootElement.view.complete = true;
	    } else {
	      rootElement.view.complete = false;
	    }

	    return complete;
	  };

	  // Only enable clear button when at least one selection has been made
	  if (!isEmpty()) {
	    clearAction.disabled = false;
	    clearAction.classList.remove('sdc-interactive-selector__clear--disabled');
	    clearAction.onclick = _clearView2['default'].bind(this, rootElement, false);
	  } else {
	    clearAction.disabled = true;
	    clearAction.classList.add('sdc-interactive-selector__clear--disabled');
	    clearAction.removeEventListener('click', _clearView2['default'].bind(this, rootElement, false));
	  }

	  // Only enable submit button when all required selections have been made
	  if (isComplete()) {
	    submitAction.disabled = false;
	    submitAction.classList.remove('sdc-interactive-selector__submit--disabled');
	    submitAction.onclick = _submitView2['default'].bind(this, rootElement);
	  } else {
	    submitAction.disabled = true;
	    submitAction.classList.add('sdc-interactive-selector__submit--disabled');
	    submitAction.onclick = _submitView2['default'].bind(this, rootElement);
	  }
	};

	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	// CLEAR VIEW
	// Reset the selector

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _clearPosition = __webpack_require__(24);

	var _clearPosition2 = _interopRequireDefault(_clearPosition);

	var _updateFormation = __webpack_require__(25);

	var _updateFormation2 = _interopRequireDefault(_updateFormation);

	var _storedSelections = __webpack_require__(11);

	var _storedSelections2 = _interopRequireDefault(_storedSelections);

	var _addActionEvents = __webpack_require__(22);

	var _addActionEvents2 = _interopRequireDefault(_addActionEvents);

	var _validateFormation = __webpack_require__(29);

	var _validateFormation2 = _interopRequireDefault(_validateFormation);

	var _createModal = __webpack_require__(21);

	var _createModal2 = _interopRequireDefault(_createModal);

	var _hideModal = __webpack_require__(30);

	var _hideModal2 = _interopRequireDefault(_hideModal);

	var _translations = __webpack_require__(19);

	var _translations2 = _interopRequireDefault(_translations);

	exports['default'] = function (rootElement, isConfirmed) {

	  function clearSelector() {

	    var positions = rootElement.querySelectorAll('[data-role="participant"]');
	    var selectables = rootElement.querySelectorAll('[data-role="selectable-item"]');

	    // Set complete value to false
	    rootElement.view.complete = false;

	    // Set all listPosition values to 0
	    rootElement.view.sides.forEach(function (side, index) {
	      rootElement.view.data.sides[index].participants.forEach(function (participant) {
	        participant.listPosition = 0;
	      });

	      // Reset original formations
	      (0, _updateFormation2['default'])(rootElement, rootElement.view.data.sides[index].formation, index);
	    });

	    // Clear visible positions
	    positions.forEach(function (position) {
	      if (position.hasAttribute('selected')) {
	        (0, _clearPosition2['default'])(position);
	      }
	    });

	    // Make all items in overlay selectable again
	    selectables.forEach(function (selectable) {
	      selectable.removeAttribute('selected');
	    });

	    // Jump to top
	    var element = rootElement.querySelector('[data-role="selector-body"]');
	    var elementRect = element.getBoundingClientRect();
	    var selectedSlotTop = elementRect.top + window.pageYOffset;

	    window.scrollTo(0, selectedSlotTop);

	    // Reset action buttons
	    (0, _addActionEvents2['default'])(rootElement);

	    rootElement.view.sides.forEach(function (side, index) {
	      (0, _validateFormation2['default'])(rootElement, true, index);
	    });

	    var modal = rootElement.querySelector('[data-role="modal"]');

	    (0, _hideModal2['default'])(modal);

	    if (rootElement.view.lastSelected) {
	      rootElement.view.lastSelected = "";
	    }

	    (0, _storedSelections2['default'])(rootElement, "store");
	  }

	  if (isConfirmed) {

	    clearSelector();
	  } else {

	    var confirmationMessage = '\n      <div class="sdc-interactive-selector__modal-message">\n        <h4 class="sdc-interactive-selector__modal-message-title">' + _translations2['default'][rootElement.view.lang].clearConfirm.title + '</h4>\n\n        <p class="sdc-interactive-selector__modal-message-text">' + _translations2['default'][rootElement.view.lang].clearConfirm.text + '</p>\n      </div>\n      <div class="sdc-interactive-selector__modal-footer">\n        <button class="sdc-interactive-selector__button sdc-interactive-selector__button--secondary" data-role="cancel-clear">' + _translations2['default'][rootElement.view.lang].clearConfirm.decline + '</button>\n        <button class="sdc-interactive-selector__button sdc-interactive-selector__button--primary" data-role="confirm-clear">' + _translations2['default'][rootElement.view.lang].clearConfirm.accept + '</button>\n      </div>\n    ';

	    (0, _createModal2['default'])(rootElement, confirmationMessage);

	    var modal = rootElement.querySelector('[data-role="modal"]');

	    var clearButton = rootElement.querySelector('[data-role="confirm-clear"]');
	    var cancelButton = rootElement.querySelector('[data-role="cancel-clear"]');

	    clearButton.onclick = clearSelector.bind(this, rootElement, true);
	    cancelButton.onclick = _hideModal2['default'].bind(this, modal);
	  }
	};

	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	// CLEAR POSITION
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (position) {

	  var icon = position.querySelector('[data-role="participant-icon"]');
	  var title = position.querySelector('[data-role="participant-title"]');
	  var text = position.querySelector('[data-role="participant-text"]');

	  position.removeAttribute('selected');
	  icon.innerHTML = "";
	  title.setAttribute('data-short-name', '');
	  text.innerHTML = "";
	};

	module.exports = exports['default'];
	// Clears a selectable position

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// UPDATE FORMATION

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticData = __webpack_require__(9);

	var _staticData2 = _interopRequireDefault(_staticData);

	var _findFormation = __webpack_require__(12);

	var _findFormation2 = _interopRequireDefault(_findFormation);

	var _findActiveList = __webpack_require__(16);

	var _findActiveList2 = _interopRequireDefault(_findActiveList);

	var _findActivePicker = __webpack_require__(26);

	var _findActivePicker2 = _interopRequireDefault(_findActivePicker);

	var _addCategoryHeadings = __webpack_require__(27);

	var _addCategoryHeadings2 = _interopRequireDefault(_addCategoryHeadings);

	var _addActionEvents = __webpack_require__(22);

	var _addActionEvents2 = _interopRequireDefault(_addActionEvents);

	var _addFormationEvents = __webpack_require__(28);

	var _addFormationEvents2 = _interopRequireDefault(_addFormationEvents);

	var _storedSelections = __webpack_require__(11);

	var _storedSelections2 = _interopRequireDefault(_storedSelections);

	exports['default'] = function (rootElement, formation, side) {

	  var activeList = (0, _findActiveList2['default'])(rootElement, side);
	  var activePicker = (0, _findActivePicker2['default'])(rootElement, side);

	  // Update rootElement.view.data with the newly selected formation
	  rootElement.view.sides[side].formation = formation;
	  // Update rootElement.view.data with the position information associated with the newly selected formation
	  rootElement.view.sides[side].positions = rootElement.view.formations[(0, _findFormation2['default'])(rootElement.view.formations, rootElement.view.sides[side].formation)].positions;

	  // Update the formation selector UI for selectors with more than one formation
	  if (Object.keys(rootElement.view.formations).length > 1) {
	    var formationSelect = activePicker.querySelector('[data-role="formation-select"]');
	    var formationOptions = formationSelect.querySelectorAll('[data-role="formation-option"]');

	    // Set option as selected
	    formationOptions.forEach(function (option) {
	      if (option.textContent == rootElement.view.sides[side].formation) {
	        option.setAttribute('selected', '');

	        // Centre the selection
	        formationSelect.scrollLeft = option.offsetLeft - formationSelect.clientWidth / 2 + option.clientWidth / 2;
	      } else {
	        option.removeAttribute('selected');
	      }
	    });

	    // Refresh click events for direction controls
	    (0, _addFormationEvents2['default'])(rootElement, side);
	  }

	  (0, _storedSelections2['default'])(rootElement, "store");

	  // Add headings above each postion category (mobile list view)
	  (0, _addCategoryHeadings2['default'])(rootElement, side);

	  var participants = activeList.querySelectorAll('[data-role="participant"]');

	  // Set participant display coordinates
	  Object.keys(rootElement.view.sides[side].positions).forEach(function (position, index) {
	    if (rootElement.view.sides[side].positions[position].x && rootElement.view.sides[side].positions[position].y) {
	      participants[index].style.left = rootElement.view.sides[side].positions[position].x + '%';
	      participants[index].style.top = rootElement.view.sides[side].positions[position].y + '%';
	    }
	  });

	  // Update action buttons
	  (0, _addActionEvents2['default'])(rootElement);
	};

	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	// FIND ACTIVE PICKER
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (rootElement, side) {

	  var formationPickers = rootElement.querySelectorAll('[data-role="formation-picker"]');
	  var formationPicker = "";

	  formationPickers.forEach(function (picker) {

	    if (picker.dataset.side == side) {
	      formationPicker = picker;
	    }
	  });

	  return formationPicker;
	};

	module.exports = exports["default"];
	// Finds the formationPicker that is currently being selected for

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// ADD CATEGORY HEADINGS
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _findActiveList = __webpack_require__(16);

	var _findActiveList2 = _interopRequireDefault(_findActiveList);

	var _findFormation = __webpack_require__(12);

	var _findFormation2 = _interopRequireDefault(_findFormation);

	exports['default'] = function (rootElement, side) {

	  rootElement.view.activeList = (0, _findActiveList2['default'])(rootElement, side);

	  var slots = rootElement.view.activeList.querySelectorAll('[data-role="participant"]');

	  // Set currentHeading to an empty string so that the first heading name found when looping rootElement.view.positions will be new
	  var currentHeading = "";

	  // Set headings
	  Object.keys(rootElement.view.sides[side].positions).forEach(function (position, index) {

	    // Find subGroup display name for the current position
	    var subGroupDisplayName = "";
	    var openPositions = rootElement.view.formations[(0, _findFormation2['default'])(rootElement.view.formations, rootElement.view.sides[side].formation)].openPositions;

	    if (rootElement.view.categories && rootElement.view.sides[side].positions[position].subGroup != rootElement.view.sides[side].formation) {
	      subGroupDisplayName = rootElement.view.categories[rootElement.view.sides[side].positions[position].group][rootElement.view.sides[side].positions[position].subGroup].displayName;
	    } else {
	      if (!openPositions) {
	        subGroupDisplayName = rootElement.view.sides[side].positions[position].positionDisplayName;
	      }
	    }

	    // Set data-heading value on the matching slot if the subGroup display name has not be found before
	    if (subGroupDisplayName) {
	      if (subGroupDisplayName != currentHeading) {
	        slots[index].setAttribute('data-heading', subGroupDisplayName);
	        currentHeading = subGroupDisplayName;
	      } else {
	        // Remove an existing data-heading attribute if no match is found
	        slots[index].removeAttribute('data-heading');
	      }
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// ADD FORMATION EVENTS
	// Add click events for the formation options in the formation selector

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _updateFormation = __webpack_require__(25);

	var _updateFormation2 = _interopRequireDefault(_updateFormation);

	var _findActivePicker = __webpack_require__(26);

	var _findActivePicker2 = _interopRequireDefault(_findActivePicker);

	exports['default'] = function (rootElement, side) {

	  var activePicker = (0, _findActivePicker2['default'])(rootElement, side);

	  var formationOptions = activePicker.querySelectorAll('[data-role="formation-option"]');
	  var formationLeftIncrement = activePicker.querySelector('[data-direction="left"]');
	  var formationRightIncrement = activePicker.querySelector('[data-direction="right"]');
	  var numberOfFormations = Object.keys(rootElement.view.formations).length;

	  formationOptions.forEach(function (option, index) {

	    option.onclick = _updateFormation2['default'].bind(this, rootElement, rootElement.view.formations[index].name, side);
	  });

	  // Loop through formations to find currently selected formation
	  Object.keys(rootElement.view.formations).forEach(function (formation, index) {
	    if (rootElement.view.formations[formation].name == rootElement.view.sides[side].formation) {
	      // Enable left direction if selected formation is not first in the list
	      if (index > 0) {
	        formationLeftIncrement.onclick = _updateFormation2['default'].bind(this, rootElement, rootElement.view.formations[index - 1].name, side);
	        formationLeftIncrement.removeAttribute('disabled');
	      } else {
	        formationLeftIncrement.onclick = function () {
	          return false;
	        };
	        formationLeftIncrement.setAttribute('disabled', '');
	      }

	      // Enable right direction if selected formation is not last in the list
	      if (index < numberOfFormations - 1) {
	        formationRightIncrement.onclick = _updateFormation2['default'].bind(this, rootElement, rootElement.view.formations[index + 1].name, side);
	        formationRightIncrement.removeAttribute('disabled');
	      } else {
	        formationRightIncrement.onclick = function () {
	          return false;
	        };
	        formationRightIncrement.setAttribute('disabled', '');
	      }
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// VALIDATE FORMATION
	// Check that the particpants selected are applicable to their chosen positions

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _findActiveList = __webpack_require__(16);

	var _findActiveList2 = _interopRequireDefault(_findActiveList);

	exports['default'] = function (rootElement, displayInvalidPositions, side) {

	  var activeList = (0, _findActiveList2['default'])(rootElement, side);

	  // Run validation only if selector has accurate position data
	  if (rootElement.view.sides[side].openPositions) {
	    return true;
	  }

	  var validateFormation = true;
	  var invalidPositions = [];

	  rootElement.view.data.sides[side].participants.forEach(function (participant) {

	    if (participant.listPosition != 0) {
	      if (participant.position.filter.indexOf(rootElement.view.sides[side].positions[participant.listPosition].positionName) == -1) {
	        validateFormation = false;

	        invalidPositions.push(participant.listPosition);
	      }
	    }
	  });

	  if (displayInvalidPositions) {
	    var positions = activeList.querySelectorAll('[data-role="participant"]');

	    positions.forEach(function (position) {
	      position.removeAttribute('invalid');
	    });

	    if (invalidPositions.length > 0) {
	      invalidPositions.forEach(function (invalidPosition) {
	        positions[invalidPosition - 1].setAttribute('invalid', '');
	      });
	    }
	  }

	  return validateFormation;
	};

	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	// HIDE MODAL
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (modal) {

	  modal.setAttribute('hidden', '');

	  // Empty modalBody
	  var modalBody = modal.querySelector('[data-role="modal-body"]');
	  modalBody.innerHTML = "";
	};

	module.exports = exports['default'];
	// Clears and hides a modal

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// SUBMIT VIEW
	// Submits a completed selection

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createModalJs = __webpack_require__(21);

	var _createModalJs2 = _interopRequireDefault(_createModalJs);

	var _validateFormation = __webpack_require__(29);

	var _validateFormation2 = _interopRequireDefault(_validateFormation);

	var _storedSelections = __webpack_require__(11);

	var _storedSelections2 = _interopRequireDefault(_storedSelections);

	var _translations = __webpack_require__(19);

	var _translations2 = _interopRequireDefault(_translations);

	exports['default'] = function (rootElement) {

	  // Create shareable URL using the IDs of the selections and the chosen formation
	  function createUrl(encode) {
	    encode = typeof encode !== 'undefined' ? encode : true;

	    var url = '';
	    var participantIdListArray = [];

	    // Use the article URL if present
	    if (rootElement.getAttribute('data-article-url')) {
	      url = rootElement.getAttribute('data-article-url');
	    } else {
	      url = window.location.href.split('?')[0];
	    }

	    rootElement.view.sides.forEach(function (side, index) {

	      var participantIdList = '';
	      var participantIdArray = [];
	      var participantCount = 1;

	      while (participantCount <= rootElement.view.data.numOfParticipants) {

	        rootElement.view.data.sides[index].participants.forEach(function (participant, index) {

	          if (participant.listPosition != 0) {
	            if (participant.listPosition == participantCount) {
	              participantIdArray.push(participant.id);
	            }
	          }
	        });

	        participantCount++;
	      }

	      participantIdList = participantIdArray.join('-');
	      participantIdListArray.push(participantIdList);
	    });

	    url += '?participants=' + participantIdListArray.join(',');

	    var formationsArray = [];

	    rootElement.view.sides.forEach(function (side, index) {

	      if (rootElement.view.sides[index].formation) {
	        formationsArray.push(rootElement.view.sides[index].formation);
	      }
	    });

	    url += '&formation=' + formationsArray.join(',');

	    url += '&id=' + rootElement.view.data.id;

	    url += '#interactive-selector-' + rootElement.view.data.id;

	    if (encode) {
	      url = encodeURIComponent(url);
	    }

	    return url;
	  }

	  function copyUrl(trigger) {

	    // click events
	    trigger.addEventListener('click', copy, true);

	    // event handler
	    function copy(e) {
	      // find target element
	      var t = e.target,
	          c = t.getAttribute('data-copy-target'),
	          inp = c ? rootElement.querySelector(c) : null;

	      // select text
	      if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
	        var editable = inp.contentEditable;
	        var readOnly = inp.readOnly;

	        inp.contentEditable = true;
	        inp.readOnly = true;

	        var range = rootElement.createRange();
	        range.selectNodeContents(inp);

	        var selection = window.getSelection();
	        selection.removeAllRanges();
	        selection.addRange(range);

	        inp.setSelectionRange(0, 999999);
	        inp.contentEditable = editable;
	        inp.readOnly = readOnly;
	      } else {
	        inp.select();
	      }

	      // copy text
	      document.execCommand('copy');
	      inp.parentNode.setAttribute('data-copied', '');
	      inp.blur();

	      window.setTimeout(function () {
	        inp.parentNode.removeAttribute('data-copied');
	      }, 1000);
	    }
	  }

	  function createParticipantsArray(currentSide) {

	    var participants = [];

	    // Create participant data
	    rootElement.view.data.sides[currentSide].participants.forEach(function (participant, index) {
	      // Only use data from participants with a listPosition
	      if (participant.listPosition != 0) {
	        var newParticipant = {};

	        newParticipant.id = participant.id;
	        newParticipant.listPosition = participant.listPosition;
	        newParticipant.category = {};

	        newParticipant.category.positionName = rootElement.view.sides[currentSide].positions[participant.listPosition].id;
	        newParticipant.category.positionDisplayName = rootElement.view.sides[currentSide].positions[participant.listPosition].positionName;

	        participants.push(newParticipant);
	      } else {
	        participants.splice(index, 1);
	      }
	    });

	    return participants;
	  }

	  // Create a javascript object of the completed selector
	  function createPostObject() {

	    // Create post object if it doesn't already exist
	    if (!postObject) {
	      var postObject = {};
	    }

	    // Copy rootElement.view.data into post.data
	    postObject.id = rootElement.view.data.id;
	    postObject.restrictSelections = rootElement.view.data.restrictSelections;

	    if (rootElement.view.sidedData) {
	      postObject.sides = [];

	      rootElement.view.sides.forEach(function (side, index) {

	        var currentSide = index;
	        var newSide = {};

	        newSide.formation = rootElement.view.sides[index].formation;
	        newSide.participants = createParticipantsArray(currentSide);

	        postObject.sides.push(newSide);
	      });
	    } else {
	      postObject.formation = rootElement.view.data.formation;

	      postObject.participants = createParticipantsArray(0);
	    }

	    return postObject;
	  }

	  // Use fetch API to POST
	  function postRequest(postData) {
	    if (postData) {
	      fetch(rootElement.getAttribute('data-post-url'), {
	        credentials: 'include',
	        method: 'POST',
	        body: postData,
	        headers: new Headers({
	          'Content-Type': 'application/json',
	          'Authorization': rootElement.getAttribute('data-token')
	        })
	      }).then(populateModal)['catch'](populateModal);
	    }
	  }

	  // Create a feedback message
	  function modalMessage(modalTitle, modalText) {

	    var message = '\n      <div class="sdc-interactive-selector__modal-message">\n        <h4 class="sdc-interactive-selector__modal-message-title">' + modalTitle + '</h4>\n        <p class="sdc-interactive-selector__modal-message-text">' + modalText + '</p>\n      </div>\n    ';

	    return message;
	  }

	  // Function to update the modal with content based on the POST response
	  function populateModal(response) {

	    var modalContent = '';

	    // Define default message text
	    var messageTitle = _translations2['default'][rootElement.view.lang].submissionSuccess.title;
	    var messageText = _translations2['default'][rootElement.view.lang].submissionSuccess.text;

	    // Create a success message and share content if request is successful
	    if (response.status == 201) {

	      // Social share links
	      var modalFooter = '\n        <div class="sdc-interactive-selector__modal-footer">\n          <div class="sdc-interactive-selector__modal-share-links">\n            <div class="sdc-interactive-selector__modal-link-box">\n              <input id="share-url" type="text" class="sdc-interactive-selector__modal-input" value="' + createUrl(false) + '">\n              <button class="sdc-interactive-selector__modal-link-box-button" data-role="copy-url" data-copy-target="#share-url">Copy Link</button>\n            </div>\n\n            ' + (rootElement.getAttribute('data-facebook-share-url') ? '\n            <a href="' + rootElement.getAttribute('data-facebook-share-url').replace("{{shareUrl}}", createUrl()) + '" class="sdc-interactive-selector__modal-button sdc-interactive-selector__modal-button--facebook" target="_blank">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M24.49 18.32l.688-5.337h-5.285V9.575c0-1.545.43-2.598 2.646-2.598l2.823-.002V2.202c-.487-.065-2.164-.21-4.117-.21-4.075 0-6.863 2.488-6.863 7.056v3.936h-4.61v5.337h4.61v13.695h5.51V18.32h4.597z"/></svg>\n            </a>' : '') + '\n            ' + (rootElement.getAttribute('data-twitter-share-url') ? '\n            <a href="' + rootElement.getAttribute('data-twitter-share-url').replace("{{shareUrl}}", createUrl()) + '" class="sdc-interactive-selector__modal-button sdc-interactive-selector__modal-button--twitter" target="_blank">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M32.012 7.563c-1.102.49-2.287.82-3.53.968 1.27-.76 2.243-1.964 2.702-3.4-1.187.705-2.503 1.217-3.903 1.492-1.12-1.194-2.717-1.94-4.485-1.94-3.394 0-6.146 2.75-6.146 6.145 0 .482.053.95.158 1.4-5.108-.255-9.636-2.702-12.667-6.42-.528.907-.83 1.963-.83 3.09 0 2.13 1.084 4.012 2.733 5.114-1.007-.03-1.955-.307-2.784-.768l-.002.077c0 2.977 2.118 5.46 4.93 6.025-.516.14-1.06.216-1.62.216-.395 0-.78-.038-1.155-.11.782 2.443 3.052 4.22 5.74 4.27-2.102 1.647-4.752 2.63-7.632 2.63-.495 0-.984-.03-1.465-.086 2.72 1.744 5.95 2.76 9.42 2.76 11.305 0 17.487-9.364 17.487-17.485 0-.267-.006-.532-.018-.796 1.202-.866 2.244-1.948 3.068-3.18z"/></svg>\n            </a>' : '') + '\n            ' + (rootElement.getAttribute('data-whatsapp-share-url') ? '\n            <a href="' + rootElement.getAttribute('data-whatsapp-share-url').replace("{{shareUrl}}", createUrl()) + '" class="sdc-interactive-selector__modal-button sdc-interactive-selector__modal-button--whatsapp" target="_blank">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M32.34 14.91c-.076-1.186-.325-2.338-.687-3.468-.528-1.65-1.33-3.154-2.397-4.515-1.58-2.016-3.55-3.534-5.904-4.548-.99-.427-2.01-.75-3.07-.937-.61-.107-1.23-.16-1.847-.234-.17-.022-.342-.034-.514-.05h-.985c-.18.016-.36.035-.54.047-2.89.202-5.506 1.16-7.84 2.88C6.365 5.7 4.74 7.77 3.673 10.27c-.472 1.106-.798 2.258-.997 3.444-.168.995-.22 2-.176 3.006.112 2.506.8 4.846 2.073 7.01.048.082.05.15.02.235C3.73 26.54 2.864 29.117 2 31.693c-.018.055-.025.113-.038.17h.025c.042-.023.08-.053.125-.067 2.467-.79 4.934-1.576 7.4-2.363.204-.065.406-.135.61-.194.05-.015.12-.01.163.016 1.222.67 2.513 1.162 3.876 1.448.582.122 1.175.196 1.764.273.682.09 1.37.1 2.055.07.518-.024 1.036-.087 1.554-.144.765-.084 1.51-.262 2.245-.486 1.867-.57 3.567-1.46 5.08-2.702 2.592-2.126 4.29-4.818 5.097-8.07.172-.693.3-1.394.356-2.106.02-.257.034-.513.052-.768.004-.053.015-.106.023-.16V15.5c-.016-.197-.035-.393-.047-.59zm-7.102 5.607c-.06.33-.132.656-.21.982-.103.427-.342.77-.682 1.047-.497.406-1.044.73-1.663.895-.374.1-.767.148-1.154.168-.47.024-.92-.12-1.363-.268-.99-.335-1.963-.713-2.898-1.18-1.165-.583-2.176-1.376-3.092-2.292-1.388-1.387-2.527-2.96-3.443-4.695-.315-.597-.537-1.23-.644-1.897-.045-.286-.058-.577-.08-.792.024-1.308.496-2.338 1.383-3.19.253-.243.53-.422.877-.486.02-.004.04-.01.062-.01.415.015.83.026 1.245.053.074.005.17.057.212.117.115.168.233.34.304.53.347.93.66 1.874 1.026 2.796.136.343.13.63-.083.905-.278.36-.58.698-.873 1.044-.062.074-.137.138-.193.216-.132.187-.155.388-.038.59.6 1.04 1.27 2.025 2.15 2.855.83.785 1.775 1.396 2.814 1.866.1.046.2.09.3.13.247.1.462.05.64-.148.236-.263.47-.527.702-.796.195-.227.385-.458.573-.69.16-.196.355-.26.595-.183.076.024.153.048.223.085.987.53 1.976 1.06 2.958 1.6.35.19.42.356.352.75z"/></svg>\n            </a>' : '') + '\n          </div>\n        </div>\n      ';

	      // Set to custom messages if they exist
	      if (rootElement.view.data.successMessage.title) {
	        messageTitle = rootElement.view.data.successMessage.title;
	      }

	      if (rootElement.view.data.successMessage.text) {
	        messageText = rootElement.view.data.successMessage.text;
	      }

	      modalContent += modalMessage(messageTitle, messageText);
	      modalContent += modalFooter;

	      // Update modal with the success content
	      (0, _createModalJs2['default'])(rootElement, modalContent);

	      // Add Clipboard to link copy button
	      var copyButton = rootElement.querySelector('[data-role="copy-url"]');

	      copyUrl(copyButton);
	    } else {
	      modalContent += modalMessage(_translations2['default'][rootElement.view.lang].submissionFailure.title, _translations2['default'][rootElement.view.lang].submissionFailure.text);

	      // Update modal with the fail content
	      (0, _createModalJs2['default'])(rootElement, modalContent);
	    }
	  }

	  // Open a default modal (includes loading spinner)
	  (0, _createModalJs2['default'])(rootElement, false);

	  // Check all sides have valid formations
	  var validFormations = 0;

	  rootElement.view.sides.forEach(function (side, index) {

	    if ((0, _validateFormation2['default'])(rootElement, false, index)) {
	      validFormations++;
	    }
	  });

	  // Make the request with the selector data javascript object as JSON
	  if (validFormations == rootElement.view.sides.length) {
	    if (rootElement.view.data['static']) {
	      console.log('static');
	      populateModal({ status: 201 });
	    } else {
	      postRequest(JSON.stringify(createPostObject()));
	    }
	  } else {
	    var failMessage = modalMessage(_translations2['default'][rootElement.view.lang].selectionInvalid.title, _translations2['default'][rootElement.view.lang].selectionInvalid.text);

	    // Inform user that the seletion is invalid
	    (0, _createModalJs2['default'])(rootElement, failMessage);
	  }
	};

	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// UPDATE VIEW

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _findActiveList = __webpack_require__(16);

	var _findActiveList2 = _interopRequireDefault(_findActiveList);

	var _addActionEvents = __webpack_require__(22);

	var _addActionEvents2 = _interopRequireDefault(_addActionEvents);

	var _toggleOverlayJs = __webpack_require__(33);

	var _toggleOverlayJs2 = _interopRequireDefault(_toggleOverlayJs);

	var _validateFormation = __webpack_require__(29);

	var _validateFormation2 = _interopRequireDefault(_validateFormation);

	var _storedSelections = __webpack_require__(11);

	var _storedSelections2 = _interopRequireDefault(_storedSelections);

	exports['default'] = function (rootElement, side, toggle) {

	  var activeList = (0, _findActiveList2['default'])(rootElement, side);

	  var positions = activeList.querySelectorAll('[data-role="participant"]');

	  // Function to create image element
	  function generateImage(src, alt, create) {
	    var participantImage = '\n      <img src="' + src + '" alt="' + alt + '" class="sdc-interactive-selector__participant-image" data-role="participant-image">\n    ';

	    return participantImage;
	  }

	  // Loop rootElement.view.data and fill participants that have been selected
	  rootElement.view.data.sides[side].participants.forEach(function (participant) {

	    // Display selected items
	    if (participant.listPosition != 0) {
	      var currentParticipant = participant.listPosition - 1;

	      if (!positions[currentParticipant].hasAttribute('selected')) {
	        positions[currentParticipant].setAttribute('selected', '');
	      }

	      // Check for existing image element
	      var participantImage = positions[currentParticipant].querySelector('[data-role="participant-image"]');
	      // Check for existing title element
	      var participantTitle = positions[currentParticipant].querySelector('[data-role="participant-title"]');

	      if (!participantImage) {
	        var participantIcon = positions[currentParticipant].querySelector('[data-role="participant-icon"]');

	        // Create player image or team image
	        if (rootElement.view.data.useParticipantImage) {
	          if (participant.image) {
	            participantIcon.insertAdjacentHTML('beforeend', generateImage(participant.image, participant.longName));
	          }
	        } else {
	          if (participant.team.image) {
	            participantIcon.insertAdjacentHTML('beforeend', generateImage(participant.team.image, participant.team.longName));
	          }
	        }
	      } else {
	        // Update player image or team image
	        participantImage.alt = participant.longName;

	        if (rootElement.view.data.useParticipantImage) {
	          if (participant.image) {
	            participantImage.src = participant.image;
	            participantImage.alt = participant.longName;
	          }
	        } else {
	          if (participant.team.image) {
	            participantImage.src = participant.team.image;
	            participantImage.alt = participant.team.longName;
	          }
	        }
	      }

	      // Create title element if no exisiting title found
	      if (!participantTitle) {
	        // Create main paragraph
	        var participantTitle = '\n          <p class="sdc-interactive-selector__participant-title" data-role="participant-title" data-short-name="' + participant.shortName + '">\n            <span class="sdc-interactive-selector__participant-text" data-role="participant-text">' + participant.longName + '</span>\n          </p>\n        ';

	        positions[currentParticipant].insertAdjacentHTML('beforeend', participantTitle);
	      } else {
	        // Update span text and data attribute
	        var participantItemText = participantTitle.querySelector('[data-role="participant-text"]');

	        participantTitle.setAttribute('data-short-name', participant.shortName);
	        participantItemText.textContent = participant.longName;
	      }
	    }
	  });

	  (0, _validateFormation2['default'])(rootElement, true, side);

	  // Update action buttons
	  (0, _addActionEvents2['default'])(rootElement);

	  // Toggle overlay if required
	  if (toggle) {
	    (0, _toggleOverlayJs2['default'])(rootElement, false, side);
	  }
	};

	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// TOGGLE OVERLAY

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticDataJs = __webpack_require__(9);

	var _staticDataJs2 = _interopRequireDefault(_staticDataJs);

	var _findActiveList = __webpack_require__(16);

	var _findActiveList2 = _interopRequireDefault(_findActiveList);

	var _updateOverlayJs = __webpack_require__(34);

	var _updateOverlayJs2 = _interopRequireDefault(_updateOverlayJs);

	exports['default'] = function (rootElement, position, side) {

	  var overlay = rootElement.querySelector('[data-role="overlay"]');
	  var overlayBody = rootElement.querySelector('[data-role="overlay-body"]');
	  var activeList = (0, _findActiveList2['default'])(rootElement, side);

	  if (overlay.hasAttribute('hidden')) {

	    // Get information on the slot that was clicked from staticData
	    rootElement.view.activeSlot = position;

	    // Create content for the overlay based on the position that was selected
	    (0, _updateOverlayJs2['default'])(rootElement, overlayBody, side);

	    overlay.removeAttribute('hidden');
	    rootElement.classList.add('sdc-interactive-selector--overlay-open');

	    // Bring overlay into view
	    if (rootElement.view.lastSelected) {
	      var lastSelected = rootElement.querySelector('[data-participant-id="' + rootElement.view.lastSelected + '"]');
	      var lastSelectedRect = lastSelected.getBoundingClientRect();
	      var lastSelectedTop = lastSelectedRect.top + window.pageYOffset;
	      var centre = lastSelectedTop - window.innerHeight / 2 + lastSelectedRect.height / 2;
	      window.scrollTo(0, centre);
	    } else {
	      var overlayRect = overlay.getBoundingClientRect();
	      var overlayTop = overlayRect.top + window.pageYOffset;
	      window.scrollTo(0, overlayTop);
	    }
	  } else {

	    overlay.setAttribute('hidden', '');
	    rootElement.classList.remove('sdc-interactive-selector--overlay-open');

	    overlayBody.innerHTML = "";

	    // Jump to selected participant, or action buttons if complete
	    if (rootElement.view.complete) {
	      var scrollTarget = rootElement.querySelector('[data-role="footer"]');
	      var footerRect = scrollTarget.getBoundingClientRect();
	      var footerTop = footerRect.bottom + window.pageYOffset;
	      var centre = footerTop - window.innerHeight;
	    } else {
	      var scrollTarget = activeList.querySelector("#participant-" + rootElement.view.activeSlot);
	      var selectedSlotRect = scrollTarget.getBoundingClientRect();
	      var selectedSlotTop = selectedSlotRect.top + window.pageYOffset;
	      var centre = selectedSlotTop - window.innerHeight / 2 + selectedSlotRect.height / 2;
	    }

	    window.scrollTo(0, centre);
	  }
	};

	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// DISPLAY VALID SELECTIONS
	// Create content for the selections overlay based on the position being selected for

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticData = __webpack_require__(9);

	var _staticData2 = _interopRequireDefault(_staticData);

	var _findFormation = __webpack_require__(12);

	var _findFormation2 = _interopRequireDefault(_findFormation);

	var _addSelectEvents = __webpack_require__(35);

	var _addSelectEvents2 = _interopRequireDefault(_addSelectEvents);

	var _translations = __webpack_require__(19);

	var _translations2 = _interopRequireDefault(_translations);

	exports['default'] = function (rootElement, overlayBody, side) {

	  // Create a selectable participant
	  function createOverlayParticipant(participant) {

	    var overlayParticipant = '\n      <li class="sdc-interactive-selector__overlay-participant" data-role="selectable-item" data-participant-id="' + participant.id + '"' + (participant.listPosition != 0 ? ' selected' : '') + '>\n        <img src="' + (rootElement.view.data.useParticipantImage ? participant.image : participant.team.image) + '" alt="' + participant.longName + '" class="sdc-interactive-selector__overlay-participant-image" data-role="participant-image">\n        <p class="sdc-interactive-selector__overlay-participant-text">\n          <span class="sdc-interactive-selector__overlay-participant-name">' + participant.longName + '</span>\n          ' + (rootElement.view.data.useTeamName && participant.team.name ? '<span class="sdc-interactive-selector__overlay-participant-detail">' + participant.team.name + '</span>' : '') + '\n        </p>\n        ' + (participant.listPosition == rootElement.view.activeSlot ? '\n        <button class="sdc-interactive-selector__overlay-remove-participant" data-role="remove-participant">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M24.866 23.835c-.008-.202-.088-.372-.252-.536l-5.827-5.828-.354-.354.354-.354 6.324-6.324c-.032-.042-.07-.088-.11-.138-.167-.202-.347-.4-.537-.59-.384-.385-.614-.442-.716-.442-.212.008-.383.088-.547.252l-5.827 5.827-.354.353-.355-.354-6.324-6.325-.14.112c-.2.17-.4.35-.587.537-.287.287-.448.552-.44.726.007.202.087.373.25.537l5.828 5.827.355.354-.354.354-6.323 6.324c.033.042.07.09.112.14.167.203.347.4.535.588.384.385.613.442.716.442.213-.008.384-.088.548-.252l5.828-5.828.354-.354.354.354 6.324 6.324c.042-.033.088-.07.138-.112.203-.166.4-.346.59-.536.285-.287.446-.552.44-.727z"/><path d="M16.864 3.022c7.72 0 14 6.28 14 14s-6.28 14-14 14-14-6.28-14-14 6.28-14 14-14m0-2c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.164-16-16-16z"/></svg> remove\n        </button>' : '') + '\n      </li>\n    ';

	    return overlayParticipant;
	  }

	  // Create a sub heading
	  function createOverlaySubHeading(headingText) {

	    var overlaySubHeading = '<h4 class="sdc-interactive-selector__overlay-sub-heading" data-role="overlay-sub-heading">' + headingText + '</h4>';

	    return overlaySubHeading;
	  }

	  // Turns an object into an array, sorted by a given property
	  function createOrderedArray(object, property) {
	    var arr = [];

	    Object.keys(object).forEach(function (innerObject) {
	      arr.push(object[innerObject]);
	    });

	    arr.sort(function (a, b) {
	      return a[property] - b[property];
	    });

	    return arr;
	  }

	  // Create a relevant, ordered array of categories
	  function assignAndCreateOrderedCategoriesArray(participants) {

	    var categoriesObject = {};

	    // Find all unique position names that occur in the array of filtered participants
	    Object.keys(rootElement.view.categories).forEach(function (group) {
	      Object.keys(rootElement.view.categories[group]).forEach(function (groupKey) {

	        var subGroup = rootElement.view.categories[group][groupKey];
	        // If value of the current key is an object
	        if (subGroup !== null && typeof subGroup === 'object') {

	          // Loop through participants for each subGroup object found
	          participants.forEach(function (filteredParticipant, index) {

	            // Find their corresponding subGroup displayName and order field
	            if (subGroup.positions.indexOf(filteredParticipant.position.displayName) !== -1) {
	              // Create object of category data
	              categoriesObject[subGroup.displayName] = {};
	              categoriesObject[subGroup.displayName].displayName = subGroup.displayName;
	              categoriesObject[subGroup.displayName].order = subGroup.order;

	              // Store the matching category name with the associated participant object
	              participants[index].category = subGroup.displayName;
	            }
	          });
	        }
	      });
	    });

	    var orderedCategoriesArray = createOrderedArray(categoriesObject, "order");

	    return orderedCategoriesArray;
	  }

	  // Create list of participants
	  function outputParticipants(participants, category) {

	    var overlayList = document.createElement('ul');

	    overlayList.classList.add('sdc-interactive-selector__overlay-participants');

	    participants.forEach(function (participant) {

	      // Output particpants that match the given category, or output all given participants if no category is provided
	      if (category) {
	        if (participant.category === category.displayName && participant.listPosition != rootElement.view.activeSlot) {
	          overlayList.insertAdjacentHTML('beforeend', createOverlayParticipant(participant));
	        }
	      } else {
	        if (participant.listPosition != rootElement.view.activeSlot) {
	          overlayList.insertAdjacentHTML('beforeend', createOverlayParticipant(participant));
	        }
	      }
	    });

	    overlayBody.appendChild(overlayList);
	  }

	  // Show the currently selected participant at the top of the list, if the slot has an existing selection
	  function outputCurrentlySelectedParticipant() {

	    rootElement.view.data.sides[side].participants.forEach(function (participant) {

	      if (participant.listPosition == rootElement.view.activeSlot) {
	        overlayBody.insertAdjacentHTML("beforeend", '\n          <div class="sdc-interactive-selector__overlay-currently-selected">\n            ' + createOverlaySubHeading(_translations2['default'][rootElement.view.lang].overlay.currentlySelected) + '\n\n            <ul class="sdc-interactive-selector__overlay-participants">\n              ' + createOverlayParticipant(participant) + '\n            </ul>\n          </div>\n        ');
	      }
	    });
	  }

	  function outputCurrentCategoryHeadingAndParticipants(categories, category, participants) {

	    // Create heading for the current category
	    if (categories.length > 1) {
	      overlayBody.insertAdjacentHTML("beforeend", createOverlaySubHeading(category.displayName));
	    }

	    outputParticipants(participants, category);
	  }

	  // Create categorised list of participants
	  function outputCategorisedParticipants(participants, priorityCategory) {

	    var categories = assignAndCreateOrderedCategoriesArray(participants);
	    if (priorityCategory != undefined) {

	      // List participants matching the priorityCategory at the top
	      categories.forEach(function (category) {

	        if (category.displayName === priorityCategory.displayName) {
	          outputCurrentCategoryHeadingAndParticipants(categories, category, participants);
	        }
	      });

	      // List other valid categories below the priority list
	      categories.forEach(function (category) {

	        if (category.displayName !== priorityCategory.displayName) {
	          outputCurrentCategoryHeadingAndParticipants(categories, category, participants);
	        }
	      });
	    } else {

	      categories.forEach(function (category) {

	        outputCurrentCategoryHeadingAndParticipants(categories, category, participants);
	      });
	    }
	  }

	  var overlayHeading = rootElement.querySelector('[data-role="overlay-heading"]');

	  // Set overlay heading to the subGroup being selected for
	  overlayHeading.textContent = rootElement.view.sides[side].positions[rootElement.view.activeSlot].positionDisplayName;

	  outputCurrentlySelectedParticipant();

	  // Create a filtered or unfiltered list
	  if (rootElement.view.data.restrictSelections) {

	    var filteredParticipantsArray = [];

	    // Find participants with currently selected position in their filter
	    rootElement.view.data.sides[side].participants.forEach(function (participant, index) {

	      if (rootElement.view.sides[side].openPositions) {
	        filteredParticipantsArray.push(participant);
	      } else {
	        var positionVariations = rootElement.view.sides[side].positions[rootElement.view.activeSlot].positionVariations;

	        for (var i = 0; i < positionVariations.length; i++) {
	          if (participant.position.filter.indexOf(positionVariations[i]) !== -1) {
	            filteredParticipantsArray.push(participant);

	            break;
	          }
	        }
	      }
	    });

	    if (rootElement.view.data.notCategorisedParticipants || !rootElement.view.categories) {
	      outputParticipants(filteredParticipantsArray, false);
	    } else {
	      // Display categorised list of participants with a matching filter
	      outputCategorisedParticipants(filteredParticipantsArray, rootElement.view.categories[rootElement.view.sides[side].positions[rootElement.view.activeSlot].group][rootElement.view.sides[side].positions[rootElement.view.activeSlot].subGroup]);
	    }
	  } else {

	    if (rootElement.view.data.notCategorisedParticipants || !rootElement.view.categories) {
	      outputParticipants(rootElement.view.data.sides[side].participants, false);
	    } else {
	      // Display categorised list of all participants
	      outputCategorisedParticipants(rootElement.view.data.sides[side].participants, rootElement.view.categories[rootElement.view.sides[side].positions[rootElement.view.activeSlot].group][rootElement.view.sides[side].positions[rootElement.view.activeSlot].subGroup]);
	    }
	  }

	  // Add click events to items in the overlay
	  (0, _addSelectEvents2['default'])(rootElement, side);
	};

	module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// ADD SELECT EVENTS
	// Add click events for the selectable items in the selection overlay

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _toggleItem = __webpack_require__(36);

	var _toggleItem2 = _interopRequireDefault(_toggleItem);

	exports['default'] = function (rootElement, side) {

	  var selectables = rootElement.querySelectorAll('[data-role="selectable-item"]');

	  selectables.forEach(function (selectable) {

	    var removeButton = selectable.querySelector('[data-role="remove-participant"]');

	    if (removeButton) {
	      // Add click events for 'remove' action
	      removeButton.onclick = _toggleItem2['default'].bind(this, rootElement, selectables, selectable, side, 'remove');
	    } else {
	      // Add click events for 'add' action
	      selectable.onclick = _toggleItem2['default'].bind(this, rootElement, selectables, selectable, side, 'add');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// TOGGLE ITEM

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _clearPosition = __webpack_require__(24);

	var _clearPosition2 = _interopRequireDefault(_clearPosition);

	var _findActiveList = __webpack_require__(16);

	var _findActiveList2 = _interopRequireDefault(_findActiveList);

	var _updateView = __webpack_require__(32);

	var _updateView2 = _interopRequireDefault(_updateView);

	var _updateOverlay = __webpack_require__(34);

	var _updateOverlay2 = _interopRequireDefault(_updateOverlay);

	var _storedSelections = __webpack_require__(11);

	var _storedSelections2 = _interopRequireDefault(_storedSelections);

	exports['default'] = function (rootElement, selectables, selectable, side, action) {

	  // Perform remove action if selectable is currently selected, otherwise perform add action
	  if (action === 'remove') {

	    var activeList = (0, _findActiveList2['default'])(rootElement, side);
	    var overlayBody = rootElement.querySelector('[data-role="overlay-body"]');
	    var positions = activeList.querySelectorAll('[data-role="participant"]');

	    rootElement.view.data.sides[side].participants.forEach(function (participant) {
	      if (participant.id == selectable.getAttribute('data-participant-id')) {
	        // Asign the new participant a listPosition value
	        participant.listPosition = 0;
	      }
	    });

	    selectable.removeAttribute('selected');
	    (0, _clearPosition2['default'])(positions[rootElement.view.activeSlot - 1]);

	    // Update overlay after removing selection
	    overlayBody.innerHTML = "";
	    (0, _updateOverlay2['default'])(rootElement, overlayBody, side);

	    // Update view but don't close overlay
	    (0, _updateView2['default'])(rootElement, side, false);
	  }

	  if (action === 'add') {

	    if (!selectable.hasAttribute('selected')) {

	      var deselectedOld = false;
	      var selectedNew = false;

	      rootElement.view.data.sides[side].participants.forEach(function (participant) {
	        // If previous participant hasn't been found
	        if (!deselectedOld) {
	          if (participant.listPosition == rootElement.view.activeSlot) {
	            // Set listPosition of previous participant to 0
	            participant.listPosition = 0;
	            // Find selectable that matches previous participant and return to selectable state
	            selectables.forEach(function (selectable) {
	              if (participant.id == selectable.getAttribute('data-participant-id')) {
	                selectable.removeAttribute('selected');
	              }
	            });

	            // Previous selected item has been found
	            deselectedOld = true;
	          }
	        }

	        // If new participant hasn't been found
	        if (!selectedNew) {
	          if (participant.id == selectable.getAttribute('data-participant-id')) {
	            // Asign the new participant a listPosition value
	            participant.listPosition = rootElement.view.activeSlot;

	            // Newly selected item has been found
	            selectedNew = true;
	          }
	        }
	      });

	      // Mark selectable in the list as selected
	      selectable.setAttribute('selected', '');

	      // Remember last selected slot for selectors with open positions
	      if (rootElement.view.sides[side].openPositions) {
	        rootElement.view.lastSelected = selectable.getAttribute('data-participant-id');
	      }

	      // Update view and close overlay
	      (0, _updateView2['default'])(rootElement, side, true);
	    } else {
	      return;
	    }
	  }

	  (0, _storedSelections2['default'])(rootElement, "store");
	};

	module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// ADD TOGGLE EVENTS
	// Add click events that toggle the visibility of the selection overlay

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _toggleOverlay = __webpack_require__(33);

	var _toggleOverlay2 = _interopRequireDefault(_toggleOverlay);

	var _findActiveList = __webpack_require__(16);

	var _findActiveList2 = _interopRequireDefault(_findActiveList);

	exports['default'] = function (rootElement, side) {

	  var activeList = (0, _findActiveList2['default'])(rootElement, side);

	  var toggleSwitches = rootElement.querySelectorAll('[data-toggle="overlay"]');
	  var participants = activeList.querySelectorAll('[data-role="participant"]');

	  // Add click event with position for remembering which slot was clicked
	  Object.keys(rootElement.view.sides[side].positions).forEach(function (position, index) {
	    participants[index].onclick = _toggleOverlay2['default'].bind(this, rootElement, position, side);
	  });

	  // Add click event without index for simple on/off switches
	  toggleSwitches.forEach(function (toggleSwitch) {
	    toggleSwitch.onclick = _toggleOverlay2['default'].bind(this, rootElement, false, false);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// CREATE FORMATION

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _addFormationEvents = __webpack_require__(28);

	var _addFormationEvents2 = _interopRequireDefault(_addFormationEvents);

	var _findActiveList = __webpack_require__(16);

	var _findActiveList2 = _interopRequireDefault(_findActiveList);

	var _updateFormation = __webpack_require__(25);

	var _updateFormation2 = _interopRequireDefault(_updateFormation);

	exports['default'] = function (rootElement, formation, side) {

	  // Create a formation picker UI if there is more than 1 formation
	  if (Object.keys(rootElement.view.formations).length > 1) {

	    var formationPicker = '\n      <div class="sdc-interactive-selector__formation-picker" data-role="formation-picker" data-side="' + side + '">\n        <div class="sdc-interactive-selector__formation-wrap">\n          <button class="sdc-interactive-selector__formation-direction sdc-interactive-selector__formation-direction--left" data-role="formation-direction" data-direction="left">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path fill="#fff" d="M22 6.23c-.195.01-.363.087-.526.247l-.188.183-10.068 10.07c-.19.188-.293.44-.293.706s.104.518.293.707l10.134 10.134.127.124c.162.162.33.24.53.248.11 0 .34-.058.724-.442.187-.187.368-.386.537-.59.042-.05.08-.096.112-.138l-.496-.496-9.193-9.193-.354-.355.353-.354 9.198-9.197.485-.484c-.033-.043-.07-.09-.112-.14-.167-.203-.348-.402-.536-.59-.385-.384-.613-.44-.716-.44"/></svg>\n          </button>\n          <div class="sdc-interactive-selector__formation-inner">\n            <ul class="sdc-interactive-selector__formation-select" data-role="formation-select">\n            </ul>\n          </div>\n          <button class="sdc-interactive-selector__formation-direction sdc-interactive-selector__formation-direction--right" data-role="formation-direction" data-direction="right">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path fill="#fff" d="M12.3 6.23c.196.008.364.086.527.246l.188.183 10.07 10.068c.188.19.292.44.292.707s-.104.518-.293.707L12.95 28.276l-.127.124c-.163.16-.332.24-.53.247-.112 0-.34-.058-.725-.442-.187-.187-.368-.386-.537-.59l-.11-.138.496-.496 9.193-9.192.353-.354-.354-.354-9.2-9.198-.482-.482c.033-.042.07-.09.112-.14.167-.202.348-.4.536-.588.385-.385.613-.442.716-.442"/></svg>\n          </button>\n        </div>\n      </div>\n    ';

	    var activeList = (0, _findActiveList2['default'])(rootElement, side);

	    activeList.insertAdjacentHTML('beforebegin', formationPicker);

	    var formationPickers = rootElement.querySelectorAll('[data-role="formation-picker"]');
	    var formationPicker = "";

	    formationPickers.forEach(function (picker) {

	      if (picker.dataset.side == side) {
	        formationPicker = picker;
	      }
	    });

	    var formationSelect = formationPicker.querySelector('[data-role="formation-select"]');

	    // Populate formation-select with formations
	    Object.keys(rootElement.view.formations).forEach(function (formation) {

	      var formationOption = '\n        <li class="sdc-interactive-selector__formation-option" data-role="formation-option">' + rootElement.view.formations[formation].name + '</li>\n      ';

	      formationSelect.insertAdjacentHTML('beforeend', formationOption);
	    });

	    // Get all newly created options
	    var formationOptions = formationSelect.querySelectorAll('[data-role="formation-option"]');
	  } else {
	    var formationOptions = null;
	  }

	  // Set currently selected formation
	  (0, _updateFormation2['default'])(rootElement, formation, side);

	  // Add click events for the formation selector if one is created
	  // if (formationOptions) {
	  //   console.log("events")
	  //   addFormationEvents(rootElement, side);
	  // }
	};

	module.exports = exports['default'];

/***/ })
/******/ ])
});
;