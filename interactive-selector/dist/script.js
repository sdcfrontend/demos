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
/***/ function(module, exports, __webpack_require__) {

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

	var _polyfill = __webpack_require__(6);

	var _polyfill2 = _interopRequireDefault(_polyfill);

	var _createView = __webpack_require__(7);

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

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";

	var nextTick = __webpack_require__(5).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  timeout.close();
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
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

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate, __webpack_require__(4).clearImmediate))

/***/ },
/* 5 */
/***/ function(module, exports) {

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

/***/ },
/* 6 */
/***/ function(module, exports) {

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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// CREATE VIEW

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticData = __webpack_require__(8);

	var _staticData2 = _interopRequireDefault(_staticData);

	var _mergeObject = __webpack_require__(1);

	var _mergeObject2 = _interopRequireDefault(_mergeObject);

	var _createGenericFormation = __webpack_require__(9);

	var _createGenericFormation2 = _interopRequireDefault(_createGenericFormation);

	var _findFormation = __webpack_require__(10);

	var _findFormation2 = _interopRequireDefault(_findFormation);

	var _createHeader = __webpack_require__(11);

	var _createHeader2 = _interopRequireDefault(_createHeader);

	var _createSelectionArea = __webpack_require__(12);

	var _createSelectionArea2 = _interopRequireDefault(_createSelectionArea);

	var _createFooter = __webpack_require__(13);

	var _createFooter2 = _interopRequireDefault(_createFooter);

	var _createOverlay = __webpack_require__(14);

	var _createOverlay2 = _interopRequireDefault(_createOverlay);

	var _setListPositions = __webpack_require__(27);

	var _setListPositions2 = _interopRequireDefault(_setListPositions);

	var _updateView = __webpack_require__(18);

	var _updateView2 = _interopRequireDefault(_updateView);

	var _addToggleEvents = __webpack_require__(28);

	var _addToggleEvents2 = _interopRequireDefault(_addToggleEvents);

	var _createFormation = __webpack_require__(29);

	var _createFormation2 = _interopRequireDefault(_createFormation);

	exports['default'] = function (rootElement) {
	  console.log(rootElement);
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

	  var formation = "";

	  if (rootElement.view.data.formation) {
	    formation = rootElement.view.data.formation;
	  } else {
	    formation = "default";
	  }

	  // Set categories to false if a categories object is not found for the given type
	  if (_staticData2['default'][rootElement.view.data.type].categories == null) {
	    rootElement.view.categories = false;
	  } else {
	    rootElement.view.categories = _staticData2['default'][rootElement.view.data.type].categories;
	  }

	  if (_staticData2['default'][rootElement.view.data.type].formations == null) {
	    // Create generic formation and position data if a formations object is not found for the given type
	    rootElement.view.categories = false;
	    rootElement.view.formations = (0, _createGenericFormation2['default'])(formation);
	    rootElement.view.positions = rootElement.view.formations[formation].positions;
	  } else {
	    if (isValidFormation(_staticData2['default'][rootElement.view.data.type].formations, rootElement.view.data.formation)) {
	      // Set formations value if formations are found for the given sport and the formation given is valid
	      rootElement.view.formations = validFormations(_staticData2['default'][rootElement.view.data.type].formations);
	      rootElement.view.positions = _staticData2['default'][rootElement.view.data.type].formations[(0, _findFormation2['default'])(rootElement.view.formations, formation)].positions;
	      rootElement.setAttribute('data-formation', '');
	    } else {
	      // Create generic formation and position data if a valid formation is not given
	      rootElement.view.categories = false;
	      rootElement.view.formations = (0, _createGenericFormation2['default'])(formation);
	      rootElement.view.positions = rootElement.view.formations[formation].positions;
	    }
	  }

	  rootElement.view.openPositions = rootElement.view.formations[(0, _findFormation2['default'])(rootElement.view.formations, rootElement.view.data.formation)].openPositions;

	  // Set the selector type (used by css for type-specific styling)
	  rootElement.setAttribute('data-type', rootElement.view.data.type);

	  // Set the numOfParticipants (used by css for specific styling)
	  rootElement.setAttribute('data-num-of-participants', rootElement.view.data.numOfParticipants);

	  rootElement.id = rootElement.view.data.id;

	  // Set an embed value (used by css to adjust styling depending on display mode)
	  if (rootElement.view.data.embed) {
	    rootElement.setAttribute('data-embed', '');
	  }

	  // Set a backgroundImage value
	  if (rootElement.view.data.backgroundImage) {
	    rootElement.style.backgroundColor = rootElement.view.data.backgroundImage;
	  }

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

	  // Update the selectable positions with data
	  (0, _updateView2['default'])(rootElement, false);

	  // Add events that toggle the selection overlay
	  (0, _addToggleEvents2['default'])(rootElement);

	  // Set formation and create formation selection UI
	  if (rootElement.view.data.formation) {
	    (0, _createFormation2['default'])(rootElement, rootElement.view.data.formation);
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	// STATIC DATA
	// Lookup data for supported sports
	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"] = {"football":{"categories":{"default":{"displayName":"default","order":0,"goalkeeper":{"displayName":"Goalkeeper","order":0,"positions":["Goalkeeper"]},"defender":{"displayName":"Defenders","order":1,"positions":["Defender"]},"midfielder":{"displayName":"Midfielders","order":2,"positions":["Midfielder","Attacking Midfielder"]},"striker":{"displayName":"Strikers","order":3,"positions":["Striker"]}}},"formations":{"0":{"name":"334","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":30},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":55},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":55},"8":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":12,"y":80},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":88,"y":80}}},"1":{"name":"343","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":30},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":55},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":55},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":25,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":75,"y":80}}},"2":{"name":"352","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":30},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":11,"y":60},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":30,"y":53},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":50},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":70,"y":53},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":89,"y":60},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":32,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":66,"y":80}}},"3":{"name":"361","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":30},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":7,"y":61},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":23,"y":56},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":41,"y":54},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":59,"y":54},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":77,"y":56},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":93,"y":61},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80}}},"4":{"name":"3142","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":62},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"5":{"name":"3331","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":42},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"6":{"name":"3412","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":42},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"7":{"name":"3421","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":42},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"8":{"name":"3511","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":22},"5":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":11,"y":52},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":30,"y":45},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":70,"y":45},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":89,"y":52},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"9":{"name":"31312","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":25,"y":20},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":20},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":75,"y":20},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":37},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":54},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":54},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":54},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":71},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":32,"y":88},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":67,"y":88}}},"10":{"name":"424","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":30},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":30},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":55},"8":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":12,"y":80},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":88,"y":80}}},"11":{"name":"433","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":30},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":30},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":55},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":17,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":83,"y":80}}},"12":{"name":"442","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37.25,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":62.75,"y":30},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":30},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":55},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37.25,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":62.75,"y":55},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":55},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37.25,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":62.75,"y":80}}},"13":{"name":"451","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":30},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":30},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":30},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":30},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":11,"y":60},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":30,"y":53},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":50},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":70,"y":53},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":89,"y":60},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80}}},"14":{"name":"4132","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":62},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"15":{"name":"4141","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":62},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"16":{"name":"4222","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"17":{"name":"4231","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":62},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"18":{"name":"4312","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":82},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":82}}},"19":{"name":"4321","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":62},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"20":{"name":"4411","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":22},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":22},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":22},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":22},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":42},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":42},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":42},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":42},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":62},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":82}}},"21":{"name":"41212","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":2},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":12,"y":20},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":37,"y":20},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":63,"y":20},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":88,"y":20},"6":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":37},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":54},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":54},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":71},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":37,"y":88},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":63,"y":88}}},"22":{"name":"523","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":11,"y":35},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":30,"y":28},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":25},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":70,"y":28},"6":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":89,"y":35},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":30,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":70,"y":55},"9":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":25,"y":80},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":75,"y":80}}},"23":{"name":"532","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":11,"y":35},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":30,"y":28},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":25},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":70,"y":28},"6":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":89,"y":35},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":25,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":50,"y":55},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":75,"y":55},"10":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":30,"y":80},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":70,"y":80}}},"24":{"name":"541","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"goalkeeper","positionName":"goalkeeper","positionDisplayName":"Goalkeeper","positionVariations":["goalkeeper"],"x":50,"y":5},"2":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":11,"y":35},"3":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":30,"y":28},"4":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":50,"y":25},"5":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":70,"y":28},"6":{"id":"2","label":false,"group":"default","subGroup":"defender","positionName":"defender","positionDisplayName":"Defender","positionVariations":["defender"],"x":89,"y":35},"7":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":12,"y":55},"8":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":37,"y":55},"9":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":63,"y":55},"10":{"id":"3","label":false,"group":"default","subGroup":"midfielder","positionName":"midfielder","positionDisplayName":"Midfielder","positionVariations":["midfielder","attackingMidfielder"],"x":88,"y":55},"11":{"id":"4","label":false,"group":"default","subGroup":"striker","positionName":"striker","positionDisplayName":"Striker","positionVariations":["striker"],"x":50,"y":80}}},"25":{"name":"squad23","openPositions":"true","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":3},"2":{"id":"2","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":3},"3":{"id":"3","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":3},"4":{"id":"4","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":3},"5":{"id":"5","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":20},"6":{"id":"6","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":20},"7":{"id":"7","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":20},"8":{"id":"8","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":20},"9":{"id":"9","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":37},"10":{"id":"10","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":37},"11":{"id":"11","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":37},"12":{"id":"12","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":37},"13":{"id":"13","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":54},"14":{"id":"14","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":54},"15":{"id":"15","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":54},"16":{"id":"16","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":54},"17":{"id":"17","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":71},"18":{"id":"18","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":71},"19":{"id":"19","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":71},"20":{"id":"20","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":71},"21":{"id":"21","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":25,"y":88},"22":{"id":"22","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":50,"y":88},"23":{"id":"23","label":false,"group":"default","subGroup":"squad23","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":75,"y":88}}},"26":{"name":"squad24","openPositions":"true","positions":{"1":{"id":"1","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":3},"2":{"id":"2","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":3},"3":{"id":"3","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":3},"4":{"id":"4","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":3},"5":{"id":"5","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":20},"6":{"id":"6","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":20},"7":{"id":"7","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":20},"8":{"id":"8","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":20},"9":{"id":"9","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":37},"10":{"id":"10","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":37},"11":{"id":"11","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":37},"12":{"id":"12","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":37},"13":{"id":"13","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":54},"14":{"id":"14","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":54},"15":{"id":"15","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":54},"16":{"id":"16","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":54},"17":{"id":"17","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":71},"18":{"id":"18","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":71},"19":{"id":"19","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":71},"20":{"id":"20","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":71},"21":{"id":"21","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":12,"y":88},"22":{"id":"22","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":37,"y":88},"23":{"id":"23","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":63,"y":88},"24":{"id":"24","label":false,"group":"default","subGroup":"squad24","positionName":"all","positionDisplayName":"Player","positionVariations":[],"x":88,"y":88}}}}},"rugbyunion":{"categories":{"forwards":{"displayName":"Forwards","order":0,"frontRow":{"displayName":"Front Row","order":0,"positions":["Loose Head Prop","Hooker","Tight Head Prop","Prop","Front Row"]},"secondRow":{"displayName":"Second Row","order":1,"positions":["Lock","Second Row"]},"backRow":{"displayName":"Back Row","order":2,"positions":["Flanker","Openside Flanker","Blindside Flanker","No 8","Back Row"]}},"backs":{"displayName":"Backs","order":1,"halfBacks":{"displayName":"Half Backs","order":0,"positions":["Fly Half","Scrum Half","Half Back"]},"centres":{"displayName":"Centres","order":1,"positions":["Inside Centre","Outside Centre","Centre"]},"wingers":{"displayName":"Wingers","order":2,"positions":["Right Wing","Left Wing","Winger"]},"fullBack":{"displayName":"Full Back","order":3,"positions":["Full Back"]}}},"formations":{"0":{"name":"32325","positions":{"1":{"id":"1","label":"1","group":"forwards","subGroup":"frontRow","positionName":"looseHeadProp","positionDisplayName":"Loose Head Prop","positionVariations":["frontRow","prop","looseHeadProp"],"x":10,"y":8},"2":{"id":"2","label":"2","group":"forwards","subGroup":"frontRow","positionName":"hooker","positionDisplayName":"Hooker","positionVariations":["frontRow","hooker"],"x":35,"y":8},"3":{"id":"3","label":"3","group":"forwards","subGroup":"frontRow","positionName":"tightHeadProp","positionDisplayName":"Tight Head Prop","positionVariations":["frontRow","prop","tightHeadProp"],"x":60,"y":8},"4":{"id":"4","label":"4","group":"forwards","subGroup":"secondRow","positionName":"lock","positionDisplayName":"Lock","positionVariations":["lock","secondRow"],"x":20,"y":18},"5":{"id":"4","label":"5","group":"forwards","subGroup":"secondRow","positionName":"lock","positionDisplayName":"Lock","positionVariations":["lock","secondRow"],"x":50,"y":18},"6":{"id":"5","label":"6","group":"forwards","subGroup":"backRow","positionName":"blindsideFlanker","positionDisplayName":"Blindside Flanker","positionVariations":["flanker","blindsideFlanker","backRow"],"x":5,"y":28},"7":{"id":"6","label":"7","group":"forwards","subGroup":"backRow","positionName":"opensideFlanker","positionDisplayName":"Openside Flanker","positionVariations":["flanker","opensideFlanker","backRow"],"x":65,"y":28},"8":{"id":"7","label":"8","group":"forwards","subGroup":"backRow","positionName":"no8","positionDisplayName":"Number 8","positionVariations":["no8","backRow"],"x":35,"y":33},"9":{"id":"8","label":"9","group":"backs","subGroup":"halfBacks","positionName":"scrumHalf","positionDisplayName":"Scrum Half","positionVariations":["scrumHalf"],"x":51,"y":43},"10":{"id":"9","label":"10","group":"backs","subGroup":"halfBacks","positionName":"flyHalf","positionDisplayName":"Fly Half","positionVariations":["flyHalf"],"x":63,"y":54},"11":{"id":"11","label":"12","group":"backs","subGroup":"centres","positionName":"insideCentre","positionDisplayName":"Inside Centre","positionVariations":["centre","insideCentre"],"x":73,"y":63},"12":{"id":"12","label":"13","group":"backs","subGroup":"centres","positionName":"outsideCentre","positionDisplayName":"Outside Centre","positionVariations":["centre","outsideCentre"],"x":84,"y":73},"13":{"id":"10","label":"11","group":"backs","subGroup":"wingers","positionName":"leftWing","positionDisplayName":"Left Winger","positionVariations":["winger","leftWing"],"x":5,"y":83},"14":{"id":"13","label":"14","group":"backs","subGroup":"wingers","positionName":"rightWing","positionDisplayName":"Right Winger","positionVariations":["winger","rightWing"],"x":95,"y":83},"15":{"id":"14","label":"15","group":"backs","subGroup":"fullBack","positionName":"fullBack","positionDisplayName":"Full Back","positionVariations":["fullBack"],"x":50,"y":93}}}}},"rugbyleague":{"categories":{"forwards":{"displayName":"Forwards","order":0,"frontRow":{"displayName":"Front Row","order":0,"positions":["Prop","Hooker","Forward","Utility"]},"backRow":{"displayName":"Back Row","order":1,"positions":["Second Row","Loose Forward","Lock","Forward","Utility"]}},"backs":{"displayName":"Backs","order":1,"halves":{"displayName":"Halves","order":0,"positions":["Scrum Half","Stand Off","Util. Back","Utility"]},"threequarters":{"displayName":"Threequarters","order":1,"positions":["Winger","Centre","Util. Back","Utility"]},"fullBack":{"displayName":"Full Back","order":2,"positions":["Full Back","Util. Back","Utility"]}}},"formations":{"0":{"name":"33241","positions":{"1":{"id":"1","label":"10","group":"forwards","subGroup":"frontRow","positionName":"prop","positionDisplayName":"Prop","positionVariations":["prop"],"x":15,"y":8},"2":{"id":"2","label":"9","group":"forwards","subGroup":"frontRow","positionName":"hooker","positionDisplayName":"Hooker","positionVariations":["hooker"],"x":50,"y":8},"3":{"id":"1","label":"8","group":"forwards","subGroup":"frontRow","positionName":"prop","positionDisplayName":"Prop","positionVariations":["prop"],"x":85,"y":8},"4":{"id":"4","label":"13","group":"forwards","subGroup":"backRow","positionName":"looseForward","positionDisplayName":"Loose Forward","positionVariations":["looseForward"],"x":50,"y":32},"5":{"id":"3","label":"12","group":"forwards","subGroup":"backRow","positionName":"secondRow","positionDisplayName":"Second Row","positionVariations":["secondRow"],"x":32,"y":20},"6":{"id":"3","label":"11","group":"forwards","subGroup":"backRow","positionName":"secondRow","positionDisplayName":"Second Row","positionVariations":["secondRow"],"x":68,"y":20},"7":{"id":"5","label":"7","group":"backs","subGroup":"halves","positionName":"scrumHalf","positionDisplayName":"Scrum Half","positionVariations":["scrumHalf"],"x":50,"y":44},"8":{"id":"6","label":"6","group":"backs","subGroup":"halves","positionName":"standOff","positionDisplayName":"Stand Off","positionVariations":["standOff"],"x":65,"y":56},"9":{"id":"8","label":"5","group":"backs","subGroup":"threequarters","positionName":"winger","positionDisplayName":"Winger","positionVariations":["winger"],"x":5,"y":80},"10":{"id":"7","label":"4","group":"backs","subGroup":"threequarters","positionName":"centre","positionDisplayName":"Centre","positionVariations":["centre"],"x":20,"y":68},"11":{"id":"7","label":"3","group":"backs","subGroup":"threequarters","positionName":"centre","positionDisplayName":"Centre","positionVariations":["centre"],"x":80,"y":68},"12":{"id":"8","label":"2","group":"backs","subGroup":"threequarters","positionName":"winger","positionDisplayName":"Winger","positionVariations":["winger"],"x":95,"y":80},"13":{"id":"9","label":"1","group":"backs","subGroup":"fullBack","positionName":"fullBack","positionDisplayName":"Full Back","positionVariations":["fullBack"],"x":50,"y":92}}}}},"cricket":{"categories":{"default":{"displayName":"default","order":0,"batsman":{"displayName":"Batsmen","order":0,"positions":["Batsman","Unknown"]},"allrounder":{"displayName":"All Rounders","order":1,"positions":["All Rounder","Unknown"]},"bowler":{"displayName":"Bowlers","order":2,"positions":["Bowler","Unknown"]},"wicketkeeper":{"displayName":"Wicket Keepers","order":3,"positions":["Wicket Keeper","Wicketkeeper\/batsman","Unknown"]}}},"formations":{"0":{"name":"default","openPositions":"true","positions":{"1":{"id":"1","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"2":{"id":"2","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"3":{"id":"3","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"4":{"id":"4","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"5":{"id":"5","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"6":{"id":"6","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"7":{"id":"7","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"8":{"id":"8","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"9":{"id":"9","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"10":{"id":"10","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]},"11":{"id":"11","group":"default","subGroup":"default","positionName":"all","positionDisplayName":"Player","positionVariations":[]}}}}}};module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	// CREATE GENERIC FORMATION
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports["default"] = function (name) {

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

/***/ },
/* 10 */
/***/ function(module, exports) {

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

/***/ },
/* 11 */
/***/ function(module, exports) {

	// CREATE HEADER

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (rootElement) {

	  var header = document.createElement('div');

	  header.classList.add('sdc-interactive-selector__header');
	  header.setAttribute('data-role', 'header');

	  // If a background image is present, apply additional styling
	  if (rootElement.view.data.headerBackground) {
	    header.classList.add('sdc-interactive-selector__header--feature');
	    header.style.backgroundImage = 'url(' + rootElement.view.data.headerBackground + ')';
	  }

	  header.innerHTML = '\n    <div class="sdc-interactive-selector__header-inner">\n      <div class="sdc-interactive-selector__title-wrap">\n        ' + (rootElement.view.data.sponsorImage ? '\n          ' + (rootElement.view.data.sponsorLink ? '<a href="' + rootElement.view.data.sponsorLink + '" target="_blank" class="sdc-interactive-selector__header-sponsor-link">' : '') + '\n            <img src="' + rootElement.view.data.sponsorImage + '" class="sdc-interactive-selector__header-sponsor-image">\n          ' + (rootElement.view.data.sponsorLink ? '</a>' : '') + '\n        ' : '') + '\n        ' + (rootElement.view.data.title ? '<h2 class="sdc-interactive-selector__title" data-role="title">' + rootElement.view.data.title + '</h2>' : '') + '\n      </div>\n    </div>\n  ';

	  rootElement.appendChild(header);
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// CREATE LIST

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticDataJs = __webpack_require__(8);

	var _staticDataJs2 = _interopRequireDefault(_staticDataJs);

	exports['default'] = function (rootElement) {

	  // Create selection area frame
	  var selectorBody = document.createElement('div');
	  selectorBody.classList.add('sdc-interactive-selector__selector-body');
	  selectorBody.setAttribute('data-role', 'selector-body');

	  selectorBody.innerHTML = '\n    <div class="sdc-interactive-selector__selection-area" data-role="selection-area">\n      <div class="sdc-interactive-selector__selection-area-inner">\n        <ul class="sdc-interactive-selector__participants-list' + (rootElement.view.data.useParticipantImage && !rootElement.view.data.useCustomParticipants ? ' sdc-interactive-selector__participants-list--participant-images' : '') + '" data-role="participants-list">\n        </ul>\n      </div>\n    </div>\n  ';

	  rootElement.appendChild(selectorBody);

	  var participantsList = document.querySelector('[data-role="participants-list"]');

	  // Add selectable positions
	  Object.keys(rootElement.view.positions).forEach(function (position) {
	    var participantsItem = '\n      <li id="participant-' + position + '" class="sdc-interactive-selector__participants-item" data-role="participant" data-toggle="overlay">\n        <span class="sdc-interactive-selector__participant-icon" data-role="participant-icon" data-number="' + rootElement.view.positions[position].label + '"></span>\n      </li>\n    ';

	    participantsList.insertAdjacentHTML('beforeend', participantsItem);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

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

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// CREATE OVERLAY

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _addSelectEvents = __webpack_require__(15);

	var _addSelectEvents2 = _interopRequireDefault(_addSelectEvents);

	exports['default'] = function (rootElement) {

	  // Create overlay div
	  var overlay = document.createElement('div');

	  overlay.id = "overlay";
	  overlay.classList.add('sdc-interactive-selector__overlay');
	  overlay.setAttribute('hidden', '');
	  overlay.setAttribute('data-role', 'overlay');

	  // Create overlayInner
	  overlay.innerHTML = '\n    <div class="sdc-interactive-selector__overlay-inner">\n      <div class="sdc-interactive-selector__overlay-header">\n        <h4 class="sdc-interactive-selector__overlay-heading">Selecting <span class="sdc-interactive-selector__overlay-heading-detail" data-role="overlay-heading"></span></h4>\n\n        <button class="sdc-interactive-selector__overlay-close" data-toggle="overlay">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M25.775 24.857c-.008-.202-.088-.372-.252-.537l-6.534-6.534-.355-.354.354-.354 7.03-7.03c-.033-.043-.07-.09-.112-.14-.166-.202-.346-.4-.536-.59-.384-.383-.614-.44-.716-.44-.212.008-.383.088-.547.252l-6.535 6.534-.354.354-.353-.354-7.03-7.03c-.043.033-.09.07-.14.112-.203.168-.402.35-.59.536-.286.287-.447.552-.44.726.008.202.088.373.252.537l6.533 6.534.354.353-.354.354-7.03 7.03c.032.043.07.09.11.14.17.204.35.402.537.59.384.383.613.44.716.44.212-.007.383-.087.547-.25l6.535-6.536.354-.353.354.354 7.03 7.032c.043-.033.09-.07.14-.112.2-.166.4-.346.59-.536.285-.287.445-.552.44-.727z"/></svg> close\n        </button>\n      </div>\n      <div class="sdc-interactive-selector__overlay-body" data-role="overlay-body"' + (rootElement.view.data.useParticipantImage ? 'data-images="participant"' : 'data-images="team"') + '>\n      </div>\n    </div>\n  ';

	  rootElement.appendChild(overlay);
	};

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// ADD SELECT EVENTS
	// Add click events for the selectable items in the selection overlay

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _toggleItem = __webpack_require__(16);

	var _toggleItem2 = _interopRequireDefault(_toggleItem);

	exports['default'] = function (rootElement) {

	  var selectables = rootElement.querySelectorAll('[data-role="selectable-item"]');

	  selectables.forEach(function (selectable) {

	    var removeButton = selectable.querySelector('[data-role="remove-participant"]');

	    if (removeButton) {
	      // Add click events for 'remove' action
	      removeButton.onclick = _toggleItem2['default'].bind(this, rootElement, selectables, selectable, 'remove');
	    } else {
	      // Add click events for 'add' action
	      selectable.onclick = _toggleItem2['default'].bind(this, rootElement, selectables, selectable, 'add');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// ADD ITEM

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _clearPosition = __webpack_require__(17);

	var _clearPosition2 = _interopRequireDefault(_clearPosition);

	var _findFormation = __webpack_require__(10);

	var _findFormation2 = _interopRequireDefault(_findFormation);

	var _updateView = __webpack_require__(18);

	var _updateView2 = _interopRequireDefault(_updateView);

	var _updateOverlay = __webpack_require__(26);

	var _updateOverlay2 = _interopRequireDefault(_updateOverlay);

	exports['default'] = function (rootElement, selectables, selectable, action) {

	  // Perform remove action if selectable is currently selected, otherwise perform add action
	  if (action === 'remove') {

	    var overlayBody = rootElement.querySelector('[data-role="overlay-body"]');
	    var positions = rootElement.querySelectorAll('[data-role="participant"]');

	    rootElement.view.data.participants.forEach(function (participant) {
	      if (participant.id == selectable.getAttribute('data-participant-id')) {
	        // Asign the new participant a listPosition value
	        participant.listPosition = 0;
	      }
	    });

	    selectable.removeAttribute('selected');
	    (0, _clearPosition2['default'])(positions[rootElement.view.activeSlot - 1]);

	    // Update overlay after removing selection
	    overlayBody.innerHTML = "";
	    (0, _updateOverlay2['default'])(rootElement, overlayBody);

	    // Update view but don't close overlay
	    (0, _updateView2['default'])(rootElement, false);
	  }

	  if (action === 'add') {

	    if (!selectable.hasAttribute('selected')) {

	      var deselectedOld = false;
	      var selectedNew = false;

	      rootElement.view.data.participants.forEach(function (participant) {
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
	      if (rootElement.view.openPositions) {
	        rootElement.view.lastSelected = selectable.getAttribute('data-participant-id');
	      }

	      // Update view and close overlay
	      (0, _updateView2['default'])(rootElement, true);
	    } else {
	      return;
	    }
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// UPDATE VIEW

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _addActionEvents = __webpack_require__(19);

	var _addActionEvents2 = _interopRequireDefault(_addActionEvents);

	var _toggleOverlayJs = __webpack_require__(25);

	var _toggleOverlayJs2 = _interopRequireDefault(_toggleOverlayJs);

	var _validateFormation = __webpack_require__(21);

	var _validateFormation2 = _interopRequireDefault(_validateFormation);

	exports['default'] = function (rootElement, toggle) {

	  var positions = rootElement.querySelectorAll('[data-role="participant"]');

	  // Function to create image element
	  function generateImage(src, alt, create) {
	    var participantImage = '\n      <img src="' + src + '" alt="' + alt + '" class="sdc-interactive-selector__participant-image" data-role="participant-image">\n    ';

	    return participantImage;
	  }

	  // Loop rootElement.view.data and fill participants that have been selected
	  rootElement.view.data.participants.forEach(function (participant) {

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

	  (0, _validateFormation2['default'])(rootElement, true);

	  // Update action buttons
	  (0, _addActionEvents2['default'])(rootElement);

	  // Toggle overlay if required
	  if (toggle) {
	    (0, _toggleOverlayJs2['default'])(null, rootElement);
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// ADD ACTION EVENTS

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _clearView = __webpack_require__(20);

	var _clearView2 = _interopRequireDefault(_clearView);

	var _submitView = __webpack_require__(24);

	var _submitView2 = _interopRequireDefault(_submitView);

	exports['default'] = function (rootElement) {

	  var clearAction = rootElement.querySelector('[data-action="clear"]');
	  var submitAction = rootElement.querySelector('[data-action="submit"]');

	  // Returns true when selections empty
	  function isEmpty() {
	    var empty = true;

	    rootElement.view.data.participants.forEach(function (participant) {
	      if (participant.listPosition != 0) {
	        empty = false;
	        return empty;
	      }
	    });

	    return empty;
	  };

	  // Returns true when selections completed
	  function isComplete() {
	    var complete = false;
	    var selectedCount = 0;

	    rootElement.view.data.participants.forEach(function (participant) {
	      if (participant.listPosition != 0) {
	        selectedCount++;
	      }
	    });

	    if (selectedCount == rootElement.view.data.numOfParticipants) {
	      complete = true;

	      rootElement.view.data.complete = true;
	    } else {
	      rootElement.view.data.complete = false;
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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// CLEAR VIEW
	// Reset the selector

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _clearPosition = __webpack_require__(17);

	var _clearPosition2 = _interopRequireDefault(_clearPosition);

	var _addActionEventsJs = __webpack_require__(19);

	var _addActionEventsJs2 = _interopRequireDefault(_addActionEventsJs);

	var _validateFormation = __webpack_require__(21);

	var _validateFormation2 = _interopRequireDefault(_validateFormation);

	var _createModal = __webpack_require__(22);

	var _createModal2 = _interopRequireDefault(_createModal);

	var _hideModal = __webpack_require__(23);

	var _hideModal2 = _interopRequireDefault(_hideModal);

	exports['default'] = function (rootElement, isConfirmed) {

	  function clearSelector() {

	    var positions = rootElement.querySelectorAll('[data-role="participant"]');
	    var selectables = rootElement.querySelectorAll('[data-role="selectable-item"]');

	    // Set complete value to false
	    rootElement.view.data.complete = false;

	    // Set all listPosition values to 0
	    rootElement.view.data.participants.forEach(function (participant) {
	      participant.listPosition = 0;
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
	    (0, _addActionEventsJs2['default'])(rootElement);

	    (0, _validateFormation2['default'])(rootElement, true);

	    var modal = rootElement.querySelector('[data-role="modal"]');

	    (0, _hideModal2['default'])(modal);

	    if (rootElement.view.lastSelected) {
	      rootElement.view.lastSelected = "";
	    }
	  }

	  if (isConfirmed) {

	    clearSelector();
	  } else {

	    var confirmationMessage = '\n      <div class="sdc-interactive-selector__modal-message">\n        <h4 class="sdc-interactive-selector__modal-message-title">Are you sure?</h4>\n\n        <p class="sdc-interactive-selector__modal-message-text">This will remove all of the selections you\'ve made so far.</p>\n      </div>\n      <div class="sdc-interactive-selector__modal-footer">\n        <button class="sdc-interactive-selector__button sdc-interactive-selector__button--secondary" data-role="cancel-clear">No</button>\n        <button class="sdc-interactive-selector__button sdc-interactive-selector__button--primary" data-role="confirm-clear">Yes</button>\n      </div>\n    ';

	    (0, _createModal2['default'])(rootElement, confirmationMessage);

	    var modal = rootElement.querySelector('[data-role="modal"]');

	    var clearButton = rootElement.querySelector('[data-role="confirm-clear"]');
	    var cancelButton = rootElement.querySelector('[data-role="cancel-clear"]');

	    clearButton.onclick = clearSelector.bind(this, rootElement, true);
	    cancelButton.onclick = _hideModal2['default'].bind(this, modal);
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	// VALIDATE FORMATION
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (rootElement, displayInvalidPositions) {

	  // Run validation only if selector has accurate position data
	  if (rootElement.view.positions["1"].subGroup == rootElement.view.data.formation) {
	    return true;
	  }

	  var validateFormation = true;
	  var invalidPositions = [];

	  rootElement.view.data.participants.forEach(function (participant) {

	    if (participant.listPosition != 0) {
	      if (participant.position.filter.indexOf(rootElement.view.positions[participant.listPosition].positionName) == -1) {
	        validateFormation = false;

	        invalidPositions.push(participant.listPosition);
	      }
	    }
	  });

	  if (displayInvalidPositions) {
	    var positions = rootElement.querySelectorAll('[data-role="participant"]');

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
	// Check that the particpants selected are applicable to their chosen positions

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// CREATE MODAL
	// Show messages to the user (individual functions responsible for creating the content)

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _addActionEvents = __webpack_require__(19);

	var _addActionEvents2 = _interopRequireDefault(_addActionEvents);

	var _hideModal = __webpack_require__(23);

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

/***/ },
/* 23 */
/***/ function(module, exports) {

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

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// SUBMIT VIEW
	// Submits a completed selection

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createModalJs = __webpack_require__(22);

	var _createModalJs2 = _interopRequireDefault(_createModalJs);

	var _validateFormation = __webpack_require__(21);

	var _validateFormation2 = _interopRequireDefault(_validateFormation);

	exports['default'] = function (rootElement) {

	  // Create shareable URL using the IDs of the selections and the chosen formation
	  function createUrl(encode) {
	    encode = typeof encode !== 'undefined' ? encode : true;

	    var url = '';
	    var participantIdList = '';
	    var participantIdArray = [];
	    var participantCount = 1;

	    // Use the article URL if present
	    if (rootElement.getAttribute('data-article-url')) {
	      url = rootElement.getAttribute('data-article-url');
	    } else {
	      url = window.location.href.split('?')[0];
	    }

	    while (participantCount <= rootElement.view.data.numOfParticipants) {

	      rootElement.view.data.participants.forEach(function (participant, index) {

	        if (participant.listPosition != 0) {
	          if (participant.listPosition == participantCount) {
	            participantIdArray.push(participant.id);
	          }
	        }
	      });

	      participantCount++;
	    }

	    participantIdList = participantIdArray.join('-');

	    url += '?participants=' + participantIdList;

	    if (rootElement.view.data.formation) {
	      url += '&formation=' + rootElement.view.data.formation;
	    }

	    url += '#' + rootElement.view.data.id;

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
	          inp = c ? document.querySelector(c) : null;

	      // select text
	      if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
	        var editable = inp.contentEditable;
	        var readOnly = inp.readOnly;

	        inp.contentEditable = true;
	        inp.readOnly = true;

	        var range = document.createRange();
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

	  // Create a javascript object of the completed selector
	  function createPostObject() {

	    // Create post object if it doesn't already exist
	    if (!postObject) {
	      var postObject = {};
	    }

	    // Copy rootElement.view.data into post.data
	    postObject.id = rootElement.view.data.id;
	    postObject.formation = rootElement.view.data.formation;
	    postObject.restrictSelections = rootElement.view.data.restrictSelections;

	    // Add participants to postObject that have a listPosition
	    postObject.participants = [];

	    var slots = rootElement.querySelectorAll('[data-role="participant"]');

	    // Create participant data
	    rootElement.view.data.participants.forEach(function (participant, index) {
	      // Only use data from participants with a listPosition
	      if (participant.listPosition != 0) {
	        var newParticipant = {};

	        newParticipant.id = participant.id;
	        newParticipant.listPosition = participant.listPosition;
	        newParticipant.category = {};

	        newParticipant.category.positionName = rootElement.view.positions[participant.listPosition].id;
	        newParticipant.category.positionDisplayName = rootElement.view.positions[participant.listPosition].positionName;

	        postObject.participants.push(newParticipant);
	      } else {
	        postObject.participants.splice(index, 1);
	      }
	    });

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

	  // Function to update the modal with content based on the POST response
	  function populateModal(response) {

	    var modalContent = '';

	    // Define default message text
	    var messageTitle = "Thanks!";
	    var messageText = "Your selection has been submitted. Share with your friends using the links below.";

	    // Create a feedback message
	    function modalMessage(modalTitle, modalText) {

	      var message = '\n        <div class="sdc-interactive-selector__modal-message">\n          <h4 class="sdc-interactive-selector__modal-message-title">' + modalTitle + '</h4>\n          <p class="sdc-interactive-selector__modal-message-text">' + modalText + '</p>\n        </div>\n      ';

	      return message;
	    }

	    // Create a success message and share content if request is successful
	    if (response.status == 201) {

	      // Social share links
	      var modalFooter = '\n        <div class="sdc-interactive-selector__modal-footer">\n          <div class="sdc-interactive-selector__modal-share-links">\n            <div class="sdc-interactive-selector__modal-link-box">\n              <input id="share-url" type="text" class="sdc-interactive-selector__modal-input" value="' + createUrl(false) + '">\n              <button class="sdc-interactive-selector__modal-link-box-button" data-role="copy-url" data-copy-target="#share-url">Copy Link</button>\n            </div>\n\n            ' + (rootElement.getAttribute('data-facebook-share-url') ? '\n            <a href="' + rootElement.getAttribute('data-facebook-share-url').replace("{{shareUrl}}", createUrl()) + '" class="sdc-interactive-selector__modal-button sdc-interactive-selector__modal-button--facebook" target="_blank">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M24.49 18.32l.688-5.337h-5.285V9.575c0-1.545.43-2.598 2.646-2.598l2.823-.002V2.202c-.487-.065-2.164-.21-4.117-.21-4.075 0-6.863 2.488-6.863 7.056v3.936h-4.61v5.337h4.61v13.695h5.51V18.32h4.597z"/></svg>\n            </a>' : '') + '\n            ' + (rootElement.getAttribute('data-twitter-share-url') ? '\n            <a href="' + rootElement.getAttribute('data-twitter-share-url').replace("{{shareUrl}}", createUrl()) + '" class="sdc-interactive-selector__modal-button sdc-interactive-selector__modal-button--twitter" target="_blank">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M32.012 7.563c-1.102.49-2.287.82-3.53.968 1.27-.76 2.243-1.964 2.702-3.4-1.187.705-2.503 1.217-3.903 1.492-1.12-1.194-2.717-1.94-4.485-1.94-3.394 0-6.146 2.75-6.146 6.145 0 .482.053.95.158 1.4-5.108-.255-9.636-2.702-12.667-6.42-.528.907-.83 1.963-.83 3.09 0 2.13 1.084 4.012 2.733 5.114-1.007-.03-1.955-.307-2.784-.768l-.002.077c0 2.977 2.118 5.46 4.93 6.025-.516.14-1.06.216-1.62.216-.395 0-.78-.038-1.155-.11.782 2.443 3.052 4.22 5.74 4.27-2.102 1.647-4.752 2.63-7.632 2.63-.495 0-.984-.03-1.465-.086 2.72 1.744 5.95 2.76 9.42 2.76 11.305 0 17.487-9.364 17.487-17.485 0-.267-.006-.532-.018-.796 1.202-.866 2.244-1.948 3.068-3.18z"/></svg>\n            </a>' : '') + '\n            ' + (rootElement.getAttribute('data-whatsapp-share-url') ? '\n            <a href="' + rootElement.getAttribute('data-whatsapp-share-url').replace("{{shareUrl}}", createUrl()) + '" class="sdc-interactive-selector__modal-button sdc-interactive-selector__modal-button--whatsapp" target="_blank">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M32.34 14.91c-.076-1.186-.325-2.338-.687-3.468-.528-1.65-1.33-3.154-2.397-4.515-1.58-2.016-3.55-3.534-5.904-4.548-.99-.427-2.01-.75-3.07-.937-.61-.107-1.23-.16-1.847-.234-.17-.022-.342-.034-.514-.05h-.985c-.18.016-.36.035-.54.047-2.89.202-5.506 1.16-7.84 2.88C6.365 5.7 4.74 7.77 3.673 10.27c-.472 1.106-.798 2.258-.997 3.444-.168.995-.22 2-.176 3.006.112 2.506.8 4.846 2.073 7.01.048.082.05.15.02.235C3.73 26.54 2.864 29.117 2 31.693c-.018.055-.025.113-.038.17h.025c.042-.023.08-.053.125-.067 2.467-.79 4.934-1.576 7.4-2.363.204-.065.406-.135.61-.194.05-.015.12-.01.163.016 1.222.67 2.513 1.162 3.876 1.448.582.122 1.175.196 1.764.273.682.09 1.37.1 2.055.07.518-.024 1.036-.087 1.554-.144.765-.084 1.51-.262 2.245-.486 1.867-.57 3.567-1.46 5.08-2.702 2.592-2.126 4.29-4.818 5.097-8.07.172-.693.3-1.394.356-2.106.02-.257.034-.513.052-.768.004-.053.015-.106.023-.16V15.5c-.016-.197-.035-.393-.047-.59zm-7.102 5.607c-.06.33-.132.656-.21.982-.103.427-.342.77-.682 1.047-.497.406-1.044.73-1.663.895-.374.1-.767.148-1.154.168-.47.024-.92-.12-1.363-.268-.99-.335-1.963-.713-2.898-1.18-1.165-.583-2.176-1.376-3.092-2.292-1.388-1.387-2.527-2.96-3.443-4.695-.315-.597-.537-1.23-.644-1.897-.045-.286-.058-.577-.08-.792.024-1.308.496-2.338 1.383-3.19.253-.243.53-.422.877-.486.02-.004.04-.01.062-.01.415.015.83.026 1.245.053.074.005.17.057.212.117.115.168.233.34.304.53.347.93.66 1.874 1.026 2.796.136.343.13.63-.083.905-.278.36-.58.698-.873 1.044-.062.074-.137.138-.193.216-.132.187-.155.388-.038.59.6 1.04 1.27 2.025 2.15 2.855.83.785 1.775 1.396 2.814 1.866.1.046.2.09.3.13.247.1.462.05.64-.148.236-.263.47-.527.702-.796.195-.227.385-.458.573-.69.16-.196.355-.26.595-.183.076.024.153.048.223.085.987.53 1.976 1.06 2.958 1.6.35.19.42.356.352.75z"/></svg>\n            </a>' : '') + '\n          </div>\n        </div>\n      ';

	      // Set to custom messages if they exist
	      if (rootElement.view.data.successMessageTitle) {
	        messageTitle = rootElement.view.data.successMessageTitle;
	      }

	      if (rootElement.view.data.successMessageText) {
	        messageText = rootElement.view.data.successMessageText;
	      }

	      modalContent += modalMessage(messageTitle, messageText);
	      modalContent += modalFooter;

	      // Update modal with the success content
	      (0, _createModalJs2['default'])(rootElement, modalContent);

	      // Add Clipboard to link copy button
	      var copyButton = rootElement.querySelector('[data-role="copy-url"]');

	      copyUrl(copyButton);
	    } else {
	      modalContent += modalMessage("Submission Failed", "Something went wrong. Please try submitting your selection again.");

	      // Update modal with the fail content
	      (0, _createModalJs2['default'])(rootElement, modalContent);
	    }
	  }

	  // Open a default modal (includes loading spinner)
	  (0, _createModalJs2['default'])(rootElement, false);

	  // Make the request with the selector data javascript object as JSON
	  if ((0, _validateFormation2['default'])(rootElement, false)) {
	    postRequest(JSON.stringify(createPostObject()));
	  } else {
	    var failMessage = '\n      <div class="sdc-interactive-selector__modal-message">\n        <h4 class="sdc-interactive-selector__modal-message-title">Invalid selection found</h4>\n        <p class="sdc-interactive-selector__modal-message-text">There seems to be one or more selections in an invalid position. Please make another selection for the items highlighted.</p>\n      </div>\n    ';

	    // Inform user that the seletion is invalid
	    (0, _createModalJs2['default'])(rootElement, failMessage);
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// TOGGLE OVERLAY

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticDataJs = __webpack_require__(8);

	var _staticDataJs2 = _interopRequireDefault(_staticDataJs);

	var _updateOverlayJs = __webpack_require__(26);

	var _updateOverlayJs2 = _interopRequireDefault(_updateOverlayJs);

	exports['default'] = function (position, rootElement) {

	  var overlay = rootElement.querySelector('[data-role="overlay"]');
	  var overlayBody = rootElement.querySelector('[data-role="overlay-body"]');

	  if (overlay.hasAttribute('hidden')) {

	    // Get information on the slot that was clicked from staticData
	    rootElement.view.activeSlot = position;

	    // Create content for the overlay based on the position that was selected
	    (0, _updateOverlayJs2['default'])(rootElement, overlayBody);

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
	    if (rootElement.view.data.complete) {
	      var scrollTarget = rootElement.querySelector('[data-role="footer"]');
	      var footerRect = scrollTarget.getBoundingClientRect();
	      var footerTop = footerRect.bottom + window.pageYOffset;
	      var centre = footerTop - window.innerHeight;
	    } else {
	      var scrollTarget = rootElement.querySelector("#participant-" + rootElement.view.activeSlot);
	      var selectedSlotRect = scrollTarget.getBoundingClientRect();
	      var selectedSlotTop = selectedSlotRect.top + window.pageYOffset;
	      var centre = selectedSlotTop - window.innerHeight / 2 + selectedSlotRect.height / 2;
	    }

	    window.scrollTo(0, centre);
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// DISPLAY VALID SELECTIONS
	// Create content for the selections overlay based on the position being selected for

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticData = __webpack_require__(8);

	var _staticData2 = _interopRequireDefault(_staticData);

	var _findFormation = __webpack_require__(10);

	var _findFormation2 = _interopRequireDefault(_findFormation);

	var _addSelectEvents = __webpack_require__(15);

	var _addSelectEvents2 = _interopRequireDefault(_addSelectEvents);

	exports['default'] = function (rootElement, overlayBody) {

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

	    rootElement.view.data.participants.forEach(function (participant) {

	      if (participant.listPosition == rootElement.view.activeSlot) {
	        overlayBody.insertAdjacentHTML("beforeend", '\n          <div class="sdc-interactive-selector__overlay-currently-selected">\n            ' + createOverlaySubHeading('Currently Selected') + '\n\n            <ul class="sdc-interactive-selector__overlay-participants">\n              ' + createOverlayParticipant(participant) + '\n            </ul>\n          </div>\n        ');
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
	  overlayHeading.textContent = rootElement.view.positions[rootElement.view.activeSlot].positionDisplayName;

	  outputCurrentlySelectedParticipant();

	  // Create a filtered or unfiltered list
	  if (rootElement.view.data.restrictSelections) {

	    var filteredParticipantsArray = [];

	    // Find participants with currently selected position in their filter
	    rootElement.view.data.participants.forEach(function (participant, index) {

	      if (rootElement.view.openPositions) {
	        filteredParticipantsArray.push(participant);
	      } else {
	        var positionVariations = rootElement.view.positions[rootElement.view.activeSlot].positionVariations;

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
	      outputCategorisedParticipants(filteredParticipantsArray, rootElement.view.categories[rootElement.view.positions[rootElement.view.activeSlot].group][rootElement.view.positions[rootElement.view.activeSlot].subGroup]);
	    }
	  } else {

	    if (rootElement.view.data.notCategorisedParticipants || !rootElement.view.categories) {
	      outputParticipants(rootElement.view.data.participants, false);
	    } else {
	      // Display categorised list of all participants
	      outputCategorisedParticipants(rootElement.view.data.participants, rootElement.view.categories[rootElement.view.positions[rootElement.view.activeSlot].group][rootElement.view.positions[rootElement.view.activeSlot].subGroup]);
	    }
	  }

	  // Add click events to items in the overlay
	  (0, _addSelectEvents2['default'])(rootElement);
	};

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// SET LIST POSITIONS

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createModal = __webpack_require__(22);

	var _createModal2 = _interopRequireDefault(_createModal);

	exports['default'] = function (rootElement, url) {

	  var failMessage = '\n    <div class="sdc-interactive-selector__modal-message">\n      <h4 class="sdc-interactive-selector__modal-message-title">URL not valid</h4>\n      <p class="sdc-interactive-selector__modal-message-text">There seems to be a problem with the URL. Please check it was typed correctly.</p>\n    </div>\n  ';

	  // Find query string parameter
	  function getUrlParameter(name, url) {
	    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	    var results = regex.exec(url.search);
	    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	  };

	  // Check formation parameter is a valid formation
	  function checkFormation(urlFormation) {
	    var foundFormation = false;

	    Object.keys(rootElement.view.formations).forEach(function (formation) {
	      if (urlFormation === rootElement.view.formations[formation].name) {
	        foundFormation = true;
	      }
	    });

	    return foundFormation;
	  }

	  function unsetListPositions() {
	    rootElement.view.data.participants.forEach(function (participant) {
	      participant.listPosition = 0;
	    });
	  }

	  // Get the value of formation and participants parameters
	  var formation = getUrlParameter('formation', url);
	  var participants = getUrlParameter('participants', url);

	  // Return and load blank selector if neither parameter exists
	  if (formation || participants) {
	    var participantsArray = [];
	    var participantsIdArray = participants.split('-');
	    var participantCount = 0;

	    // Reset any listPositions from data
	    unsetListPositions();

	    if (participantsIdArray.length === 1) {
	      participantsIdArray = participants.split('|');
	    }
	    // Set formation in the view object if it passes checkFormation
	    if (checkFormation(formation)) {
	      rootElement.view.data.formation = formation;
	    } else {
	      // Unset all listPositions to return to a blank selector
	      unsetListPositions();

	      // Inform user that the URL was invalid
	      (0, _createModal2['default'])(rootElement, failMessage);

	      return;
	    }

	    // Loop through the IDs found in the URL
	    participantsIdArray.forEach(function (participantId) {
	      // Find the current ID in the participants data
	      rootElement.view.data.participants.forEach(function (participant) {
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
	  } else {
	    return;
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// ADD TOGGLE EVENTS
	// Add click events that toggle the visibility of the selection overlay

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _toggleOverlay = __webpack_require__(25);

	var _toggleOverlay2 = _interopRequireDefault(_toggleOverlay);

	exports['default'] = function (rootElement) {

	  var toggles = rootElement.querySelectorAll('[data-toggle="overlay"]');
	  var participants = [];
	  var toggleSwitches = [];

	  // Sort participant slots from other toggles (other toggles includes close buttons etc.)
	  toggles.forEach(function (toggle) {
	    if (toggle.getAttribute('data-role') == "participant") {
	      participants.push(toggle);
	    } else {
	      toggleSwitches.push(toggle);
	    }
	  });

	  // Add click event with position for remembering which slot was clicked
	  Object.keys(rootElement.view.positions).forEach(function (position, index) {
	    participants[index].onclick = _toggleOverlay2['default'].bind(this, position, rootElement);
	  });

	  // Add click event without index for simple on/off switches
	  toggleSwitches.forEach(function (toggleSwitch) {
	    toggleSwitch.onclick = _toggleOverlay2['default'].bind(this, false, rootElement);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// CREATE FORMATION

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _addFormationEvents = __webpack_require__(30);

	var _addFormationEvents2 = _interopRequireDefault(_addFormationEvents);

	var _updateFormation = __webpack_require__(31);

	var _updateFormation2 = _interopRequireDefault(_updateFormation);

	exports['default'] = function (rootElement, formation) {

	  // Create a formation picker UI if there is more than 1 formation
	  if (Object.keys(rootElement.view.formations).length > 1) {

	    var formationPicker = '\n      <div class="sdc-interactive-selector__formation-picker" data-role="formation-picker">\n        <div class="sdc-interactive-selector__formation-wrap">\n          <button class="sdc-interactive-selector__formation-direction sdc-interactive-selector__formation-direction--left" data-role="formation-direction" data-direction="left">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path fill="#fff" d="M22 6.23c-.195.01-.363.087-.526.247l-.188.183-10.068 10.07c-.19.188-.293.44-.293.706s.104.518.293.707l10.134 10.134.127.124c.162.162.33.24.53.248.11 0 .34-.058.724-.442.187-.187.368-.386.537-.59.042-.05.08-.096.112-.138l-.496-.496-9.193-9.193-.354-.355.353-.354 9.198-9.197.485-.484c-.033-.043-.07-.09-.112-.14-.167-.203-.348-.402-.536-.59-.385-.384-.613-.44-.716-.44"/></svg>\n          </button>\n          <div class="sdc-interactive-selector__formation-inner">\n            <ul class="sdc-interactive-selector__formation-select" data-role="formation-select">\n            </ul>\n          </div>\n          <button class="sdc-interactive-selector__formation-direction sdc-interactive-selector__formation-direction--right" data-role="formation-direction" data-direction="right">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path fill="#fff" d="M12.3 6.23c.196.008.364.086.527.246l.188.183 10.07 10.068c.188.19.292.44.292.707s-.104.518-.293.707L12.95 28.276l-.127.124c-.163.16-.332.24-.53.247-.112 0-.34-.058-.725-.442-.187-.187-.368-.386-.537-.59l-.11-.138.496-.496 9.193-9.192.353-.354-.354-.354-9.2-9.198-.482-.482c.033-.042.07-.09.112-.14.167-.202.348-.4.536-.588.385-.385.613-.442.716-.442"/></svg>\n          </button>\n        </div>\n      </div>\n    ';

	    var selectorBody = rootElement.querySelector('[data-role="selector-body"]');
	    selectorBody.insertAdjacentHTML('afterbegin', formationPicker);

	    var formationSelect = rootElement.querySelector('[data-role="formation-select"]');

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
	  (0, _updateFormation2['default'])(rootElement, formation);

	  // Add click events for the formation selector if one is created
	  if (formationOptions) {
	    (0, _addFormationEvents2['default'])(rootElement);
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// ADD FORMATION EVENTS
	// Add click events for the formation options in the formation selector

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _updateFormationJs = __webpack_require__(31);

	var _updateFormationJs2 = _interopRequireDefault(_updateFormationJs);

	exports['default'] = function (rootElement) {

	  var formationOptions = rootElement.querySelectorAll('[data-role="formation-option"]');
	  var formationLeftIncrement = rootElement.querySelector('[data-direction="left"]');
	  var formationRightIncrement = rootElement.querySelector('[data-direction="right"]');
	  var numberOfFormations = Object.keys(rootElement.view.formations).length;

	  formationOptions.forEach(function (option, index) {

	    option.onclick = _updateFormationJs2['default'].bind(this, rootElement, rootElement.view.formations[index].name);
	  });

	  // Loop through formations to find currently selected formation
	  Object.keys(rootElement.view.formations).forEach(function (formation, index) {
	    if (rootElement.view.formations[formation].name == rootElement.view.data.formation) {
	      // Enable left direction if selected formation is not first in the list
	      if (index > 0) {
	        formationLeftIncrement.onclick = _updateFormationJs2['default'].bind(this, rootElement, rootElement.view.formations[index - 1].name);
	        formationLeftIncrement.removeAttribute('disabled');
	      } else {
	        formationLeftIncrement.onclick = function () {
	          return false;
	        };
	        formationLeftIncrement.setAttribute('disabled', '');
	      }

	      // Enable right direction if selected formation is not last in the list
	      if (index < numberOfFormations - 1) {
	        formationRightIncrement.onclick = _updateFormationJs2['default'].bind(this, rootElement, rootElement.view.formations[index + 1].name);
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

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// UPDATE FORMATION

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _staticData = __webpack_require__(8);

	var _staticData2 = _interopRequireDefault(_staticData);

	var _findFormation = __webpack_require__(10);

	var _findFormation2 = _interopRequireDefault(_findFormation);

	var _addCategoryHeadings = __webpack_require__(32);

	var _addCategoryHeadings2 = _interopRequireDefault(_addCategoryHeadings);

	var _addFormationEvents = __webpack_require__(30);

	var _addFormationEvents2 = _interopRequireDefault(_addFormationEvents);

	exports['default'] = function (rootElement, formation) {

	  // Update rootElement.view.data with the newly selected formation
	  rootElement.view.data.formation = formation;
	  // Update rootElement.view.data with the position information associated with the newly selected formation
	  rootElement.view.positions = rootElement.view.formations[(0, _findFormation2['default'])(rootElement.view.formations, rootElement.view.data.formation)].positions;

	  // Update the formation selector UI for selectors with more than one formation
	  if (Object.keys(rootElement.view.formations).length > 1) {
	    var formationSelect = rootElement.querySelector('[data-role="formation-select"]');
	    var formationOptions = formationSelect.querySelectorAll('[data-role="formation-option"]');

	    // Set option as selected
	    formationOptions.forEach(function (option) {
	      if (option.textContent == rootElement.view.data.formation) {
	        option.setAttribute('selected', '');

	        // Centre the selection
	        formationSelect.scrollLeft = option.offsetLeft - formationSelect.clientWidth / 2 + option.clientWidth / 2;
	      } else {
	        option.removeAttribute('selected');
	      }
	    });

	    // Refresh click events for direction controls
	    (0, _addFormationEvents2['default'])(rootElement);
	  }

	  // Add headings above each postion category (mobile list view)
	  (0, _addCategoryHeadings2['default'])(rootElement);

	  var participants = rootElement.querySelectorAll('[data-role="participant"]');

	  // Set participant display coordinates
	  Object.keys(rootElement.view.positions).forEach(function (position, index) {
	    if (rootElement.view.positions[position].x && rootElement.view.positions[position].y) {
	      participants[index].style.left = rootElement.view.positions[position].x + '%';
	      participants[index].style.top = rootElement.view.positions[position].y + '%';
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	// ADD CATEGORY HEADINGS

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (rootElement) {

	  var slots = rootElement.querySelectorAll('[data-role="participant"]');

	  // Set currentHeading to an empty string so that the first heading name found when looping rootElement.view.positions will be new
	  var currentHeading = "";

	  // Set headings
	  Object.keys(rootElement.view.positions).forEach(function (position, index) {

	    // Find subGroup display name for the current position
	    var subGroupDisplayName = "";

	    if (rootElement.view.categories && rootElement.view.positions[position].subGroup != rootElement.view.data.formation) {
	      subGroupDisplayName = rootElement.view.categories[rootElement.view.positions[position].group][rootElement.view.positions[position].subGroup].displayName;
	    }

	    // Set data-heading value on the matching slot if the subGroup display name has not be found before
	    if (subGroupDisplayName != currentHeading) {
	      slots[index].setAttribute('data-heading', subGroupDisplayName);
	      currentHeading = subGroupDisplayName;
	    } else {
	      // Remove an existing data-heading attribute if no match is found
	      slots[index].removeAttribute('data-heading');
	    }
	  });
	};

	module.exports = exports["default"];

/***/ }
/******/ ])
});
;