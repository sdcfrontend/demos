(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object')
    exports["sdc-site-charts"] = factory();
  else
    root["sdc-site-charts"] = factory();
})(this, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
        /******/
};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _promisePolyfill = __webpack_require__(1);

        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

        var _polyfill = __webpack_require__(5);

        var _polyfill2 = _interopRequireDefault(_polyfill);

        var _status = __webpack_require__(6);

        var _status2 = _interopRequireDefault(_status);

        var _createCharts = __webpack_require__(7);

        var _createCharts2 = _interopRequireDefault(_createCharts);

        exports['default'] = function (rootElement) {

          NodeList.prototype.forEach = Array.prototype.forEach;

          rootElement.view = {};

          var defaults = {
            // url endpoint of json data
            dataUrl: null,
            // url of fetch polyfill (set to always load to fix iOS app bug)
            polyfillUrl: 'https://cdn.polyfill.io/v2/polyfill.js?features=fetch&ua=Mozilla/5.0%20(iPhone;%20CPU%20iPhone%20OS%206_0%20like%20Mac%20OS%20X)%20AppleWebKit/536.26%20(KHTML,%20like%20Gecko)%20Version/6.0%20Mobile/10A5376e%20Safari/8536.25'
          };

          function requestData() {
            if (rootElement.getAttribute('data-url')) {
              defaults.dataUrl = rootElement.getAttribute('data-url');
            }

            if (defaults.dataUrl) {
              // request json data using fetch
              fetch(defaults.dataUrl, {
                // credentials: 'include',
                // headers: new Headers({
                //    'Authorization': rootElement.getAttribute('data-token')
                // })
              }).then(_status2['default']).then(function (response) {
                return response.json();
              }).then(function (data) {
                rootElement.view.data = data;
                return rootElement.view;
              }).then(_createCharts2['default'].bind(this, rootElement))['catch'](function (error) {
                return console.error(error);
              });
            }
          }

          (0, _promisePolyfill2['default'])(window);

          (0, _polyfill2['default'])('fetch' in window, defaults.polyfillUrl, function () {
            requestData();
          });
        };

        module.exports = exports['default'];

        /***/
}),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (setImmediate) {// PROMISE POLYFILL

          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true
          });

          exports['default'] = function () {
            (function () {

              // Store setTimeout reference so promise-polyfill will be unaffected by
              // other code modifying setTimeout (like sinon.useFakeTimers())
              var setTimeoutFunc = setTimeout;

              function noop() { }

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
          /* WEBPACK VAR INJECTION */
}.call(exports, __webpack_require__(2).setImmediate))

        /***/
}),
/* 2 */
/***/ (function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (global) {
          "use strict";

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
          Timeout.prototype.unref = Timeout.prototype.ref = function () { };
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
          __webpack_require__(3);
          // On some exotic environments, it's not clear which object `setimmediate` was
          // able to install onto.  Search each possibility in the same order as the
          // `setimmediate` library.
          exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
          exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
          /* WEBPACK VAR INJECTION */
}.call(exports, (function () { return this; }())))

        /***/
}),
/* 3 */
/***/ (function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (global, process) {
          "use strict";

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
          /* WEBPACK VAR INJECTION */
}.call(exports, (function () { return this; }()), __webpack_require__(4)))

        /***/
}),
/* 4 */
/***/ (function (module, exports) {

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

        function noop() { }

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

        /***/
}),
/* 5 */
/***/ (function (module, exports) {

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

        /***/
}),
/* 6 */
/***/ (function (module, exports) {

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

        /***/
}),
/* 7 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _createChart = __webpack_require__(8);

        var _createChart2 = _interopRequireDefault(_createChart);

        var _updateChart = __webpack_require__(18);

        var _updateChart2 = _interopRequireDefault(_updateChart);

        exports['default'] = function (rootElement) {

          rootElement.view.data.charts.forEach(function (chart) {
            var chartShell = '\n      <div class="sdc-site-charts__chart-container" data-role="chart-container" data-chart-id="' + chart.id + '">\n        <div class="sdc-site-charts__chart" data-type="' + chart.type + '" data-role="chart" ' + (chart.animated ? 'animated' : '') + '>\n        </div>\n      </div>\n    ';

            rootElement.insertAdjacentHTML('beforeend', chartShell);

            (0, _createChart2['default'])(rootElement, chart);
          });

          rootElement.start = function () {

            var chartContainers = rootElement.querySelectorAll('[data-role="chart-container"]');

            chartContainers.forEach(function (chartContainer) {
              rootElement.view.data.charts.forEach(function (chart) {
                if (chart.id == chartContainer.getAttribute('data-chart-id')) {
                  (0, _updateChart2['default'])(rootElement, chart);
                }
              });
            });
          };
        };

        module.exports = exports['default'];

        /***/
}),
/* 8 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _pieChartsCreatePieChart = __webpack_require__(9);

        var _pieChartsCreatePieChart2 = _interopRequireDefault(_pieChartsCreatePieChart);

        var _barChartsCreateBarChart = __webpack_require__(10);

        var _barChartsCreateBarChart2 = _interopRequireDefault(_barChartsCreateBarChart);

        var _lineChartsCreateLineChart = __webpack_require__(16);

        var _lineChartsCreateLineChart2 = _interopRequireDefault(_lineChartsCreateLineChart);

        var _scatterChartsCreateScatterChart = __webpack_require__(17);

        var _scatterChartsCreateScatterChart2 = _interopRequireDefault(_scatterChartsCreateScatterChart);

        var _updateChart = __webpack_require__(18);

        var _updateChart2 = _interopRequireDefault(_updateChart);

        var _keysCreateKey = __webpack_require__(29);

        var _keysCreateKey2 = _interopRequireDefault(_keysCreateKey);

        exports['default'] = function (rootElement, chart) {

          switch (chart.type) {
            case "pie":
              (0, _pieChartsCreatePieChart2['default'])(rootElement, chart);

              break;

            case "donut":
              (0, _pieChartsCreatePieChart2['default'])(rootElement, chart);

              break;

            case "barvert":
              (0, _barChartsCreateBarChart2['default'])(rootElement, chart);

              break;

            case "barhori":
              (0, _barChartsCreateBarChart2['default'])(rootElement, chart);

              break;

            case "line":
              (0, _lineChartsCreateLineChart2['default'])(rootElement, chart);

              break;

            case "scatter":
              (0, _scatterChartsCreateScatterChart2['default'])(rootElement, chart);

              break;
          }

          if (!rootElement.view.data.externalTrigger) {
            setTimeout(function () {
              (0, _updateChart2['default'])(rootElement, chart);
            }, 1);
          }

          if (chart.key) {
            (0, _keysCreateKey2['default'])(rootElement, chart);
          }
        };

        module.exports = exports['default'];

        /***/
}),
/* 9 */
/***/ (function (module, exports) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        exports['default'] = function (rootElement, chart) {

          var chartContainer = rootElement.querySelector('[data-chart-id="' + chart.id + '"]');
          var chartShell = chartContainer.querySelector('[data-role="chart"]');

          var svg = '<svg data-role="chart-svg" viewbox="-1 -1 2 2"></svg>';

          chartShell.insertAdjacentHTML('beforeend', svg);

          var chartSVG = chartShell.querySelector('[data-role="chart-svg"]');

          chart.points.forEach(function (point) {
            var chartPoint = '\n      <path class="chart__point" data-role="chart-point"/>\n    ';

            chartSVG.insertAdjacentHTML('beforeend', chartPoint);
          });
        };

        module.exports = exports['default'];

        /***/
}),
/* 10 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _axesCreateAxesJs = __webpack_require__(11);

        var _axesCreateAxesJs2 = _interopRequireDefault(_axesCreateAxesJs);

        var _axesCreateXAxisLabels = __webpack_require__(12);

        var _axesCreateXAxisLabels2 = _interopRequireDefault(_axesCreateXAxisLabels);

        var _axesCreateYAxisLabels = __webpack_require__(14);

        var _axesCreateYAxisLabels2 = _interopRequireDefault(_axesCreateYAxisLabels);

        var _axesFindRoundMax = __webpack_require__(15);

        var _axesFindRoundMax2 = _interopRequireDefault(_axesFindRoundMax);

        var _axesFindScale = __webpack_require__(13);

        var _axesFindScale2 = _interopRequireDefault(_axesFindScale);

        exports['default'] = function (rootElement, chart) {

          var chartContainer = rootElement.querySelector('[data-chart-id="' + chart.id + '"]');
          var chartShell = chartContainer.querySelector('[data-role="chart"]');
          var scale = (0, _axesFindScale2['default'])(chart);

          var svg = '\n    <svg data-role="chart-svg" viewbox="0 0 ' + (chart.canvasSize + chart.canvasPadding * 2) + ' ' + (chart.canvasSize * 0.5625 + chart.canvasPadding * 2) + '">\n      <g class="sdc-site-charts__chart-bars" data-role="chart-bars"></g>\n    </svg>\n  ';

          chartShell.insertAdjacentHTML('beforeend', svg);

          var chartSVG = chartShell.querySelector('[data-role="chart-svg"]');
          var chartBars = chartShell.querySelector('[data-role="chart-bars"]');

          switch (chart.type) {
            case 'barvert':
              chart.points.forEach(function (point, index) {
                var bar = '\n          <g class="sdc-site-charts__chart-point" data-role="chart-point">\n            <rect class="sdc-site-charts__chart-bar" data-role="chart-bar" x="' + (chart.canvasSize - index * (chart.canvasSize / chart.points.length) + 2) + '" width="' + (chart.canvasSize / chart.points.length - 4) + '" height="0" y="' + chart.canvasPadding + '"></rect>\n          </g>\n        ';

                chartBars.insertAdjacentHTML('beforeend', bar);
              });

              break;

            case 'barhori':
              chart.points.forEach(function (point, index) {
                var bar = '\n          <g class="sdc-site-charts__chart-point" data-role="chart-point">\n          <rect class="sdc-site-charts__chart-bar" data-role="chart-bar" x="' + chart.canvasPadding + '" y="' + (index * (chart.canvasSize * 0.5625 / chart.points.length) + chart.canvasPadding + 1) + '" width="0" height="' + (chart.canvasSize * 0.5625 / chart.points.length - 2) + '"></rect>\n          </g>\n        ';

                chartBars.insertAdjacentHTML('beforeend', bar);
              });

              break;
          }

          if (chart.axes.x.show || chart.axes.y.show) {
            (0, _axesCreateAxesJs2['default'])(rootElement, chart, chartSVG);
          }

          switch (chart.type) {
            case "barvert":
              if (chart.axes.x.show) {
                (0, _axesCreateYAxisLabels2['default'])(rootElement, chart, chartShell, 0, (0, _axesFindRoundMax2['default'])(scale.highestXValue), chart.grid.majorLines, chart.grid.minorLines);
              }

              break;

            case "barhori":
              if (chart.axes.y.show) {
                (0, _axesCreateXAxisLabels2['default'])(rootElement, chart, chartShell, 0, (0, _axesFindRoundMax2['default'])(scale.highestXValue), chart.grid.majorLines, chart.grid.minorLines);
              }

              break;
          }
        };

        module.exports = exports['default'];

        /***/
}),
/* 11 */
/***/ (function (module, exports) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        exports['default'] = function (rootElement, chart, svg) {

          var xAxis = '\n    <g>\n      <line x1="' + chart.canvasPadding + '" x2="' + (chart.canvasSize + chart.canvasPadding) + '" y1="' + (chart.canvasSize * 0.5625 + chart.canvasPadding) + '" y2="' + (chart.canvasSize * 0.5625 + chart.canvasPadding) + '" class="sdc-site-charts__chart-axis"></line>\n    </g>\n  ';

          var yAxis = '\n    <g>\n      <line x1="' + chart.canvasPadding + '" x2="' + chart.canvasPadding + '" y1="' + chart.canvasPadding + '" y2="' + (chart.canvasSize * 0.5625 + chart.canvasPadding) + '" class="sdc-site-charts__chart-axis"></line>\n    </g>\n  ';

          var axisLabels = '\n    <g class="sdc-site-charts__chart-axis-labels" data-role="x-axis-labels">\n    </g>\n    <g class="sdc-site-charts__chart-axis-labels" data-role="y-axis-labels">\n    </g>\n  ';

          var axisTitles = '\n    <g class="sdc-site-charts__chart-axis-title" data-role="x-axis-title">\n      <text x="' + (chart.canvasSize / 2 + chart.canvasPadding * 1) + '" y="' + (chart.canvasSize * 0.5625 + chart.canvasPadding * 1 + 40) + '" text-anchor="middle">' + chart.axes.x.label + (chart.axes.x.units ? ' (' + chart.axes.x.units + ')' : '') + '</text>\n    </g>\n    <g class="sdc-site-charts__chart-axis-title" data-role="y-axis-title">\n      <text x="' + (chart.canvasPadding - 40) + '" y="' + (chart.canvasSize * 0.5625 / 2 + chart.canvasPadding * 1) + '" text-anchor="middle" style="writing-mode: tb;">' + chart.axes.y.label + (chart.axes.y.units ? ' (' + chart.axes.y.units + ')' : '') + '</text>\n    </g>\n  ';

          var chartTitle = '\n    <g class="sdc-site-charts__chart-title" data-role="svg-chart-title">\n      <text x="' + (chart.canvasSize / 2 + chart.canvasPadding * 1) + '" y="35" text-anchor="middle">' + chart.title + '</text>\n    </g>\n  ';

          svg.insertAdjacentHTML('afterbegin', chartTitle);
          svg.insertAdjacentHTML('afterbegin', axisTitles);
          svg.insertAdjacentHTML('afterbegin', axisLabels);
          svg.insertAdjacentHTML('afterbegin', yAxis);
          svg.insertAdjacentHTML('afterbegin', xAxis);

          if (chart.grid.majorLines) {
            var chartGrid = '\n      <g data-role="chart-grid"></g>\n    ';

            svg.insertAdjacentHTML('afterbegin', chartGrid);
          }
        };

        module.exports = exports['default'];

        /***/
}),
/* 12 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _findScale = __webpack_require__(13);

        var _findScale2 = _interopRequireDefault(_findScale);

        exports['default'] = function (rootElement, chart, svg, pointValue, max, majorGridLines, minorGridLines) {

          var xAxisIncrements = 4;
          var xAxisSubIncrements = 5;
          var incrementSize = chart.canvasSize / xAxisIncrements;
          var subIncrementSize = incrementSize / xAxisSubIncrements;
          var xAxisLabels = svg.querySelector('[data-role="x-axis-labels"]');
          var scale = (0, _findScale2['default'])(chart);

          if (scale.fixed) {
            chart.points[0].values.forEach(function (coord, index) {
              var xCoord = parseFloat(chart.canvasPadding, 10) + index * (chart.canvasSize / (chart.points[0].values.length - 1));
              var label = '<text x="' + xCoord + '" y="' + (chart.canvasSize * 0.5625 + chart.canvasPadding * 1.25) + '" text-anchor="middle">' + coord[0] + '</text>';
              var mark = '<line x1="' + xCoord + '" x2="' + xCoord + '" y1="' + (chart.canvasSize * 0.5625 + chart.canvasPadding) + '" y2="' + (chart.canvasSize * 0.5625 + chart.canvasPadding + 3) + '" class="sdc-site-charts__chart-mark"></line>';

              xAxisLabels.insertAdjacentHTML('beforeend', label);
              xAxisLabels.insertAdjacentHTML('beforeend', mark);

              if (majorGridLines) {
                var chartGrid = svg.querySelector('[data-role="chart-grid"]');
                var gridLine = '<line x1="' + xCoord + '" x2="' + xCoord + '" y1="' + chart.canvasPadding + '" y2="' + (chart.canvasSize * 0.5625 + chart.canvasPadding) + '" class="sdc-site-charts__grid-line"></line>';

                chartGrid.insertAdjacentHTML('beforeend', gridLine);
              }
            });
          } else {
            for (var i = 0; i <= xAxisIncrements; i++) {
              var xCoord = parseFloat(chart.canvasPadding, 10) + i * incrementSize;
              var xValue = i * (max / xAxisIncrements);
              var label = '<text x="' + xCoord + '" y="' + (chart.canvasSize * 0.5625 + chart.canvasPadding * 1.25) + '" text-anchor="middle">' + xValue + '</text>';
              var mark = '<line x1="' + xCoord + '" x2="' + xCoord + '" y1="' + (chart.canvasSize * 0.5625 + chart.canvasPadding) + '" y2="' + (chart.canvasSize * 0.5625 + chart.canvasPadding + 3) + '" class="sdc-site-charts__chart-mark"></line>';

              xAxisLabels.insertAdjacentHTML('beforeend', label);
              xAxisLabels.insertAdjacentHTML('beforeend', mark);

              if (majorGridLines) {
                var chartGrid = svg.querySelector('[data-role="chart-grid"]');
                var gridLine = '<line x1="' + xCoord + '" x2="' + xCoord + '" y1="' + chart.canvasPadding + '" y2="' + (chart.canvasSize * 0.5625 + chart.canvasPadding) + '" class="sdc-site-charts__grid-line"></line>';

                chartGrid.insertAdjacentHTML('beforeend', gridLine);

                if (minorGridLines && i < xAxisIncrements) {
                  for (var j = 1; j < xAxisSubIncrements; j++) {
                    var minorGridLine = '<line x1="' + (xCoord + subIncrementSize * j) + '" x2="' + (xCoord + subIncrementSize * j) + '" y1="' + chart.canvasPadding + '" y2="' + (chart.canvasSize * 0.5625 + chart.canvasPadding) + '" class="sdc-site-charts__minor-grid-line"></line>';

                    chartGrid.insertAdjacentHTML('beforeend', minorGridLine);
                  }
                }
              }
            }
          }
        };

        module.exports = exports['default'];

        /***/
}),
/* 13 */
/***/ (function (module, exports) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        exports["default"] = function (chart) {

          var scale = {
            fixed: true,
            highestXValue: 0,
            highestYValue: 0,
            highestCoordsLength: 0
          };

          var samplePointValues = [];

          if (chart.points.length > 1) {
            chart.points[1].values.forEach(function (value) {
              samplePointValues.push(value);
            });
          } else {
            chart.points[0].values.forEach(function (value) {
              samplePointValues.push(value);
            });
          }

          if (Array.isArray(samplePointValues[0])) {
            chart.points.forEach(function (point) {
              if (point.values.length > scale.highestCoordsLength) {
                scale.highestCoordsLength = point.values.length;
              }

              point.values.forEach(function (value, index) {
                if (value[0] !== samplePointValues[index][0]) {
                  scale.fixed = false;
                }
                if (value[1] > scale.highestYValue) {
                  scale.highestYValue = value[1];
                }
                if (value[0] > scale.highestXValue) {
                  scale.highestXValue = value[0];
                }
              });
            });
          } else {
            chart.points.forEach(function (point) {
              if (point.values[1] > scale.highestYValue) {
                scale.highestYValue = point.values[1];
              }
              if (point.values[0] > scale.highestXValue) {
                scale.highestXValue = point.values[0];
              }
            });

            scale.fixed = false;
          }

          return scale;
        };

        module.exports = exports["default"];

        /***/
}),
/* 14 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _findScale = __webpack_require__(13);

        var _findScale2 = _interopRequireDefault(_findScale);

        exports['default'] = function (rootElement, chart, svg, pointValue, max, majorGridLines, minorGridLines) {

          var yAxisIncrements = 4;
          var yAxisSubIncrements = 5;
          var incrementSize = chart.canvasSize * 0.5625 / yAxisIncrements;
          var subIncrementSize = incrementSize / yAxisSubIncrements;
          var yAxisLabels = svg.querySelector('[data-role="y-axis-labels"]');
          var scale = (0, _findScale2['default'])(chart);

          for (var i = 0; i < yAxisIncrements; i++) {
            var yCoord = parseFloat(chart.canvasPadding, 10) + i * incrementSize;
            var yValue = max - i * (max / yAxisIncrements);

            var label = '<text x="' + chart.canvasPadding + '" y="' + yCoord + '" dx="-5" dy="5" text-anchor="end">' + yValue + '</text>';
            var mark = '<line x1="' + (chart.canvasPadding - 3) + '" x2="' + chart.canvasPadding + '" y1="' + yCoord + '" y2="' + yCoord + '" class="sdc-site-charts__chart-mark"></line>';

            yAxisLabels.insertAdjacentHTML('beforeend', label);
            yAxisLabels.insertAdjacentHTML('beforeend', mark);

            if (majorGridLines) {
              var chartGrid = svg.querySelector('[data-role="chart-grid"]');
              var gridLine = '<line x1="' + chart.canvasPadding + '" x2="' + (chart.canvasSize + chart.canvasPadding) + '" y1="' + yCoord + '" y2="' + yCoord + '" class="sdc-site-charts__grid-line"></line>';

              chartGrid.insertAdjacentHTML('beforeend', gridLine);

              if (minorGridLines) {
                for (var j = 1; j < yAxisSubIncrements; j++) {
                  var minorGridLine = '<line x1="' + chart.canvasPadding + '" x2="' + (chart.canvasSize + chart.canvasPadding) + '" y1="' + (yCoord + subIncrementSize * j) + '" y2="' + (yCoord + subIncrementSize * j) + '" class="sdc-site-charts__minor-grid-line"></line>';

                  chartGrid.insertAdjacentHTML('beforeend', minorGridLine);
                }
              }
            }
          }
        };

        module.exports = exports['default'];

        /***/
}),
/* 15 */
/***/ (function (module, exports) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        exports["default"] = function (value) {

          var firstNumber = Math.floor(value).toString().charAt(0);
          var power = Math.pow(10, Math.floor(value).toString().length - 1);
          var roundMaxValue = parseInt(firstNumber, 10) * power;

          if (firstNumber % 2 == 0) {
            if (roundMaxValue < value) {
              roundMaxValue = (parseInt(firstNumber, 10) + 1) * power;
            }
          } else {
            if (roundMaxValue < value) {
              roundMaxValue = (parseInt(firstNumber, 10) + 1) * power;
            }
          }

          return roundMaxValue;
        };

        module.exports = exports["default"];

        /***/
}),
/* 16 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _axesCreateAxesJs = __webpack_require__(11);

        var _axesCreateAxesJs2 = _interopRequireDefault(_axesCreateAxesJs);

        var _axesCreateXAxisLabels = __webpack_require__(12);

        var _axesCreateXAxisLabels2 = _interopRequireDefault(_axesCreateXAxisLabels);

        var _axesCreateYAxisLabels = __webpack_require__(14);

        var _axesCreateYAxisLabels2 = _interopRequireDefault(_axesCreateYAxisLabels);

        var _axesFindScale = __webpack_require__(13);

        var _axesFindScale2 = _interopRequireDefault(_axesFindScale);

        var _axesFindRoundMax = __webpack_require__(15);

        var _axesFindRoundMax2 = _interopRequireDefault(_axesFindRoundMax);

        exports['default'] = function (rootElement, chart) {

          var chartContainer = rootElement.querySelector('[data-chart-id="' + chart.id + '"]');
          var chartShell = chartContainer.querySelector('[data-role="chart"]');
          var scale = (0, _axesFindScale2['default'])(chart);

          var svg = '<svg data-role="chart-svg" viewbox="0 0 ' + (chart.canvasSize + chart.canvasPadding * 2) + ' ' + (chart.canvasSize * 0.5625 + chart.canvasPadding * 2) + '"></svg>';

          chartShell.insertAdjacentHTML('beforeend', svg);

          var chartSVG = chartShell.querySelector('[data-role="chart-svg"]');

          chart.points.forEach(function (point, index) {
            var circles = '';

            point.values.forEach(function (coord) {
              circles += '<circle data-role="chart-circle" r="3" cx="-100" cy="-100"></circle>';
            });

            var chartLine = '<g><polyline data-role="chart-line" fill="none" stroke="#4a4a4a" stroke-width="1"/></g>';
            var chartCircles = '<g data-role="chart-circles">' + circles + '</g>';

            chartSVG.insertAdjacentHTML('beforeend', chartLine);
            chartSVG.insertAdjacentHTML('beforeend', chartCircles);
          });

          (0, _axesCreateAxesJs2['default'])(rootElement, chart, chartSVG);
          (0, _axesCreateXAxisLabels2['default'])(rootElement, chart, chartShell, 0, (0, _axesFindRoundMax2['default'])(scale.highestXValue), chart.grid.majorLines, false);
          (0, _axesCreateYAxisLabels2['default'])(rootElement, chart, chartShell, 1, (0, _axesFindRoundMax2['default'])(scale.highestYValue), chart.grid.majorLines, chart.grid.minorLines);
        };

        module.exports = exports['default'];

        /***/
}),
/* 17 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _axesCreateAxesJs = __webpack_require__(11);

        var _axesCreateAxesJs2 = _interopRequireDefault(_axesCreateAxesJs);

        var _axesCreateXAxisLabels = __webpack_require__(12);

        var _axesCreateXAxisLabels2 = _interopRequireDefault(_axesCreateXAxisLabels);

        var _axesCreateYAxisLabels = __webpack_require__(14);

        var _axesCreateYAxisLabels2 = _interopRequireDefault(_axesCreateYAxisLabels);

        var _axesFindScale = __webpack_require__(13);

        var _axesFindScale2 = _interopRequireDefault(_axesFindScale);

        var _axesFindRoundMax = __webpack_require__(15);

        var _axesFindRoundMax2 = _interopRequireDefault(_axesFindRoundMax);

        exports['default'] = function (rootElement, chart) {

          var chartContainer = rootElement.querySelector('[data-chart-id="' + chart.id + '"]');
          var chartShell = chartContainer.querySelector('[data-role="chart"]');
          var scale = (0, _axesFindScale2['default'])(chart);

          var svg = '<svg data-role="chart-svg" viewbox="0 0 ' + (chart.canvasSize + chart.canvasPadding * 2) + ' ' + (chart.canvasSize * 0.5625 + chart.canvasPadding * 2) + '"></svg>';

          chartShell.insertAdjacentHTML('beforeend', svg);

          var chartSVG = chartShell.querySelector('[data-role="chart-svg"]');

          chart.points.forEach(function (point, index) {
            var circles = '';

            point.values.forEach(function (coord) {
              circles += '<circle data-role="chart-circle" r="3" cx="-100" cy="-100"></circle>';
            });

            var chartCircles = '<g data-role="chart-circles">' + circles + '</g>';

            chartSVG.insertAdjacentHTML('beforeend', chartCircles);
          });

          (0, _axesCreateAxesJs2['default'])(rootElement, chart, chartSVG);
          (0, _axesCreateXAxisLabels2['default'])(rootElement, chart, chartShell, 0, (0, _axesFindRoundMax2['default'])(scale.highestXValue), chart.grid.majorLines, chart.grid.minorLines);
          (0, _axesCreateYAxisLabels2['default'])(rootElement, chart, chartShell, 1, (0, _axesFindRoundMax2['default'])(scale.highestYValue), chart.grid.majorLines, chart.grid.minorLines);
        };

        module.exports = exports['default'];

        /***/
}),
/* 18 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _pieChartsUpdatePieChart = __webpack_require__(19);

        var _pieChartsUpdatePieChart2 = _interopRequireDefault(_pieChartsUpdatePieChart);

        var _barChartsUpdateBarChart = __webpack_require__(24);

        var _barChartsUpdateBarChart2 = _interopRequireDefault(_barChartsUpdateBarChart);

        var _lineChartsUpdateLineChart = __webpack_require__(27);

        var _lineChartsUpdateLineChart2 = _interopRequireDefault(_lineChartsUpdateLineChart);

        var _scatterChartsUpdateScatterChart = __webpack_require__(28);

        var _scatterChartsUpdateScatterChart2 = _interopRequireDefault(_scatterChartsUpdateScatterChart);

        exports['default'] = function (rootElement, chart) {

          var chartContainer = rootElement.querySelector('[data-chart-id="' + chart.id + '"]'); var chartShell = chartContainer.querySelector('[data-role="chart"]');

          switch (chart.type) {
            case "pie":
              (0, _pieChartsUpdatePieChart2['default'])(chartShell, chart, 1);

              break;

            case "donut":
              (0, _pieChartsUpdatePieChart2['default'])(chartShell, chart, 0.2);

              break;

            case "barvert":
              (0, _barChartsUpdateBarChart2['default'])(rootElement, chartShell, chart);

              break;

            case "barhori":
              (0, _barChartsUpdateBarChart2['default'])(rootElement, chartShell, chart);

              break;

            case "line":
              (0, _lineChartsUpdateLineChart2['default'])(rootElement, chartShell, chart);

              break;

            case "scatter":
              (0, _scatterChartsUpdateScatterChart2['default'])(rootElement, chartShell, chart);

              break;
          }
        };

        module.exports = exports['default'];

        /***/
}),
/* 19 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _setSegmentSizeAndRotation = __webpack_require__(20);

        var _setSegmentSizeAndRotation2 = _interopRequireDefault(_setSegmentSizeAndRotation);

        var _setSegmentColour = __webpack_require__(21);

        var _setSegmentColour2 = _interopRequireDefault(_setSegmentColour);

        var _skinsLookupChartSkin = __webpack_require__(22);

        var _skinsLookupChartSkin2 = _interopRequireDefault(_skinsLookupChartSkin);

        exports['default'] = function (chartShell, chart, thickness) {

          var points = chartShell.querySelectorAll('[data-role="chart-point"]');
          var skin = (0, _skinsLookupChartSkin2['default'])(chart.skin);
          var currentColourIndex = 0;
          var totalValue = 0;
          var currentTotalValue = 0;

          chartShell.setAttribute('animated', '');

          chart.points.forEach(function (point, index) {
            totalValue = totalValue + parseFloat(point.values[0], 10);
          });

          chart.points.forEach(function (point, index) {
            currentTotalValue = (0, _setSegmentSizeAndRotation2['default'])(chart, points[index], point.values[0], totalValue, currentTotalValue, index, thickness);
            currentColourIndex = (0, _setSegmentColour2['default'])(points[index], point, skin, currentColourIndex);
          });
        };

        module.exports = exports['default'];

        /***/
}),
/* 20 */
/***/ (function (module, exports) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

        exports['default'] = function (chart, point, value, totalValue, currentTotalValue, index, thickness) {

          var percent = value / totalValue;

          function createCoordsFromValue(percent, radius) {
            var x = Math.cos(2 * Math.PI * percent) * radius;
            var y = Math.sin(2 * Math.PI * percent) * radius;
            return [x, y];
          }

          var _createCoordsFromValue = createCoordsFromValue(0, 1);

          var _createCoordsFromValue2 = _slicedToArray(_createCoordsFromValue, 2);

          var startX = _createCoordsFromValue2[0];
          var startY = _createCoordsFromValue2[1];

          var _createCoordsFromValue3 = createCoordsFromValue(percent, 1);

          var _createCoordsFromValue32 = _slicedToArray(_createCoordsFromValue3, 2);

          var endX = _createCoordsFromValue32[0];
          var endY = _createCoordsFromValue32[1];

          var _createCoordsFromValue4 = createCoordsFromValue(0, 1 - thickness);

          var _createCoordsFromValue42 = _slicedToArray(_createCoordsFromValue4, 2);

          var startInnerX = _createCoordsFromValue42[0];
          var startInnerY = _createCoordsFromValue42[1];

          var _createCoordsFromValue5 = createCoordsFromValue(percent, 1 - thickness);

          var _createCoordsFromValue52 = _slicedToArray(_createCoordsFromValue5, 2);

          var endInnerX = _createCoordsFromValue52[0];
          var endInnerY = _createCoordsFromValue52[1];

          var largeArcFlag = percent > .5 ? 1 : 0;

          var pathData = ['M ' + startX + ' ' + startY, 'A 1 1 0 ' + largeArcFlag + ' 1 ' + endX + ' ' + endY, 'L ' + endInnerX + ' ' + endInnerY, 'A ' + (1 - thickness) + ' ' + (1 - thickness) + ' 0 ' + largeArcFlag + ' 0 ' + startInnerX + ' ' + startInnerY, 'L ' + startX + ' ' + startY].join(' ');

          point.setAttribute('d', pathData);

          if (index > 0) {
            var prevValue = parseFloat(chart.points[index - 1].values[0]) / totalValue * 100;

            currentTotalValue = currentTotalValue + prevValue;

            point.style.transform = 'rotate(' + currentTotalValue / 100 * 360 + 'deg)';
          }

          return currentTotalValue;
        };

        module.exports = exports['default'];

        /***/
}),
/* 21 */
/***/ (function (module, exports) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        exports['default'] = function (pointMarkup, point, skin, currentColourIndex) {

          if (point.colourIndex) {
            pointMarkup.setAttribute('fill', skin[point.colourIndex]);

            currentColourIndex = parseInt(point.colourIndex, 10);
          } else {
            pointMarkup.setAttribute('fill', skin[currentColourIndex]);
          }

          if (currentColourIndex < skin.length - 1) {
            currentColourIndex++;
          } else {
            currentColourIndex = 0;
          }

          return currentColourIndex;
        };

        module.exports = exports['default'];

        /***/
}),
/* 22 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _skins = __webpack_require__(23);

        var _skins2 = _interopRequireDefault(_skins);

        exports['default'] = function (skin) {
          var skinColours = [];

          Object.keys(_skins2['default']).forEach(function (skinOption) {
            if (skinOption === skin) {
              skinColours = _skins2['default'][skinOption];
            }
          });

          if (skinColours.length == 0) {
            skinColours = _skins2['default']['vanilla'];
          }

          return skinColours;
        };

        module.exports = exports['default'];

        /***/
}),
/* 23 */
/***/ (function (module, exports) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports['default'] = {

          "vanilla": ['#113537', '#37505C', '#96616B', '#F76F8E', '#FFEAD0'],
          "skynews": ['#F1F1F1', '#D7D5D5', '#EF0420', '#D0021B', '#B20318'],
          "royalwedding": ['#F4F4F4', '#E4E4E4', '#E3C228', '#333333', '#141414'],
          "nhs": ['#355A9C', '#2872BC', '#1174CB', '#48B7E4', '#1BA9CC'],
          "generalelection": ['#4884C2', '#C20E1E', '#F4AF3B', '#9D2EBA', '#FBE152'],
          "line18": ['#B35011', '#C18418', '#E4A71C', '#6842BE', '#303D7E'],
          "skysports": ['#446CCC', '#2653BB', '#103A9D', '#072B7B', '#002369'],
          "premierleague": ['#353C97', '#222989', '#090E66', '#0F1151', '#020440'],
          "worldcup": ['#EAEAEA', '#1D9DD9', '#065182', '#A51814', '#1D1D1B']

        };
        module.exports = exports['default'];

        /***/
}),
/* 24 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _setBarSize = __webpack_require__(25);

        var _setBarSize2 = _interopRequireDefault(_setBarSize);

        var _setBarColour = __webpack_require__(26);

        var _setBarColour2 = _interopRequireDefault(_setBarColour);

        var _skinsLookupChartSkin = __webpack_require__(22);

        var _skinsLookupChartSkin2 = _interopRequireDefault(_skinsLookupChartSkin);

        exports['default'] = function (rootElement, chartShell, chart) {

          var points = chartShell.querySelectorAll('[data-role="chart-point"]');
          var skin = (0, _skinsLookupChartSkin2['default'])(chart.skin);
          var highestValue = 0;
          var currentColourIndex = 0;

          chartShell.setAttribute('animated', '');

          chart.points.forEach(function (point) {
            if (parseFloat(point.values[0], 10) > highestValue) {
              highestValue = point.values[0];
            }
          });

          chart.points.forEach(function (point, index) {
            var bar = points[index].querySelector('[data-role="chart-bar"]');

            (0, _setBarSize2['default'])(rootElement, chart, points[index], bar, point.values[0], chart.type, highestValue);
            currentColourIndex = (0, _setBarColour2['default'])(points[index], point, skin, currentColourIndex);
          });
        };

        module.exports = exports['default'];

        /***/
}),
/* 25 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _axesFindRoundMax = __webpack_require__(15);

        var _axesFindRoundMax2 = _interopRequireDefault(_axesFindRoundMax);

        exports['default'] = function (rootElement, chart, point, bar, value, type, highestValue) {

          var maxSize = chart.canvasSize;
          var size = value / highestValue;

          if (chart.axes.x.show || chart.axes.y.show) {
            size = value / (0, _axesFindRoundMax2['default'])(highestValue);
          }

          switch (type) {
            case "barvert":
              maxSize = chart.canvasSize * 0.5625;

              bar.setAttribute('height', maxSize * size);

              break;

            case "barhori":
              bar.setAttribute('width', maxSize * size);

              break;
          }
        };

        module.exports = exports['default'];

        /***/
}),
/* 26 */
/***/ (function (module, exports) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        exports['default'] = function (pointMarkup, point, skin, currentColourIndex) {
          var bar = pointMarkup.querySelector('[data-role="chart-bar"]');

          if (point.colourIndex) {
            bar.style.fill = skin[point.colourIndex];
            bar.style.setProperty('--backgroundColour', skin[point.colourIndex]);

            currentColourIndex = parseInt(point.colourIndex, 10);
          } else {
            bar.style.fill = skin[currentColourIndex];
            bar.style.setProperty('--backgroundColour', skin[currentColourIndex]);
          }

          if (currentColourIndex < skin.length - 1) {
            currentColourIndex++;
          } else {
            currentColourIndex = 0;
          }

          return currentColourIndex;
        };

        module.exports = exports['default'];

        /***/
}),
/* 27 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _skinsLookupChartSkin = __webpack_require__(22);

        var _skinsLookupChartSkin2 = _interopRequireDefault(_skinsLookupChartSkin);

        var _axesFindRoundMax = __webpack_require__(15);

        var _axesFindRoundMax2 = _interopRequireDefault(_axesFindRoundMax);

        var _axesFindScale = __webpack_require__(13);

        var _axesFindScale2 = _interopRequireDefault(_axesFindScale);

        exports['default'] = function (rootElement, chartShell, chart) {

          var chartLines = chartShell.querySelectorAll('[data-role="chart-line"]');
          var chartCircleContainers = chartShell.querySelectorAll('[data-role="chart-circles"]');
          var skin = (0, _skinsLookupChartSkin2['default'])(chart.skin);
          var currentColourIndex = 0;
          var scale = (0, _axesFindScale2['default'])(chart);

          chartShell.setAttribute('animated', '');

          chart.points.forEach(function (point, index) {
            var chartCircles = chartCircleContainers[index].querySelectorAll('[data-role="chart-circle"]');
            var line = '';

            point.values.forEach(function (coord, index) {
              var xCoord = 0;
              if (scale.fixed) {
                xCoord = chart.canvasPadding + index * (chart.canvasSize / (point.values.length - 1));
              } else {
                xCoord = chart.canvasPadding + coord[0] / (0, _axesFindRoundMax2['default'])(scale.highestXValue) * chart.canvasSize;
              }
              var yCoord = chart.canvasPadding + chart.canvasSize * 0.5625 - coord[1] / (0, _axesFindRoundMax2['default'])(scale.highestYValue) * (chart.canvasSize * 0.5625);
              line += xCoord + ',' + yCoord + ' ';
              chartCircles[index].setAttribute('cx', xCoord);
              chartCircles[index].setAttribute('cy', yCoord);
            });

            chartLines[index].setAttribute('points', line);

            if (point.colourIndex) {
              chartLines[index].setAttribute('stroke', skin[point.colourIndex]);

              currentColourIndex = parseInt(point.colourIndex, 10);
            } else {
              chartLines[index].setAttribute('stroke', skin[currentColourIndex]);
            }

            chartCircles.forEach(function (circle) {
              circle.setAttribute('fill', skin[currentColourIndex]);
            });

            if (currentColourIndex < skin.length - 1) {
              currentColourIndex++;
            } else {
              currentColourIndex = 0;
            }
          });
        };

        module.exports = exports['default'];

        /***/
}),
/* 28 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _skinsLookupChartSkin = __webpack_require__(22);

        var _skinsLookupChartSkin2 = _interopRequireDefault(_skinsLookupChartSkin);

        var _axesFindRoundMax = __webpack_require__(15);

        var _axesFindRoundMax2 = _interopRequireDefault(_axesFindRoundMax);

        var _axesFindScale = __webpack_require__(13);

        var _axesFindScale2 = _interopRequireDefault(_axesFindScale);

        exports['default'] = function (rootElement, chartShell, chart) {

          var chartLines = chartShell.querySelectorAll('[data-role="chart-line"]');
          var chartCircleContainers = chartShell.querySelectorAll('[data-role="chart-circles"]');
          var skin = (0, _skinsLookupChartSkin2['default'])(chart.skin);
          var currentColourIndex = 0;
          var scale = (0, _axesFindScale2['default'])(chart);

          chartShell.setAttribute('animated', '');

          chart.points.forEach(function (point, index) {
            var chartCircles = chartCircleContainers[index].querySelectorAll('[data-role="chart-circle"]');

            point.values.forEach(function (coord, index) {
              var xCoord = chart.canvasPadding + coord[0] / (0, _axesFindRoundMax2['default'])(scale.highestXValue) * chart.canvasSize;
              var yCoord = chart.canvasPadding + chart.canvasSize * 0.5625 - coord[1] / (0, _axesFindRoundMax2['default'])(scale.highestYValue) * (chart.canvasSize * 0.5625);

              chartCircles[index].setAttribute('cx', xCoord);
              chartCircles[index].setAttribute('cy', yCoord);
            });

            if (point.colourIndex) {
              chartCircles.forEach(function (circle) {
                circle.setAttribute('fill', skin[point.colourIndex]);
              });

              currentColourIndex = parseInt(point.colourIndex, 10);
            } else {
              chartCircles.forEach(function (circle) {
                circle.setAttribute('fill', skin[currentColourIndex]);
              });
            }

            if (currentColourIndex < skin.length - 1) {
              currentColourIndex++;
            } else {
              currentColourIndex = 0;
            }
          });
        };

        module.exports = exports['default'];

        /***/
}),
/* 29 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _colourKeyIndicators = __webpack_require__(30);

        var _colourKeyIndicators2 = _interopRequireDefault(_colourKeyIndicators);

        exports['default'] = function (rootElement, chart) {

          var chartContainer = rootElement.querySelector('[data-chart-id="' + chart.id + '"]');

          var keyList = '\n    <ul class="sdc-site-charts__chart-key-list" data-role="key"></ul>\n  ';

          chartContainer.insertAdjacentHTML('beforeend', keyList);

          var keyList = chartContainer.querySelector('[data-role="key"]');

          chart.points.forEach(function (point, index) {
            var keyItem = '\n      <li class="sdc-site-charts__chart-key-item" data-role="key-item"><span class="sdc-site-charts__chart-key-indicator" data-role="chart-key-indicator"></span>' + point.label + (point.values.length == 1 ? '<span class="sdc-site-charts__chart-key-value"> (' + point.values + ')</span>' : '') + '</li>\n    ';

            keyList.insertAdjacentHTML('beforeend', keyItem);
          });

          (0, _colourKeyIndicators2['default'])(chart, keyList);
        };

        module.exports = exports['default'];

        /***/
}),
/* 30 */
/***/ (function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

        var _skinsLookupChartSkin = __webpack_require__(22);

        var _skinsLookupChartSkin2 = _interopRequireDefault(_skinsLookupChartSkin);

        exports['default'] = function (chart, key) {

          var indicators = key.querySelectorAll('[data-role="chart-key-indicator"]');
          var skin = (0, _skinsLookupChartSkin2['default'])(chart.skin);
          var currentColourIndex = 0;

          chart.points.forEach(function (point, index) {
            var indicator = indicators[index];

            if (point.colourIndex) {
              indicator.style.backgroundColor = skin[point.colourIndex];

              currentColourIndex = parseInt(point.colourIndex, 10);
            } else {
              indicator.style.backgroundColor = skin[currentColourIndex];
            }

            if (currentColourIndex < skin.length - 1) {
              currentColourIndex++;
            } else {
              currentColourIndex = 0;
            }
          });
        };

        module.exports = exports['default'];

        /***/
})
/******/])
});
;