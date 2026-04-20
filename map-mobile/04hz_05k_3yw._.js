(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/gdp-uk-news-frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/gdp-uk-news-frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/gdp-uk-news-frontend/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var enableSchedulerDebugging = false;
        var enableProfiling = false;
        var frameYieldMs = 5;
        function push(heap, node) {
            var index = heap.length;
            heap.push(node);
            siftUp(heap, node, index);
        }
        function peek(heap) {
            return heap.length === 0 ? null : heap[0];
        }
        function pop(heap) {
            if (heap.length === 0) {
                return null;
            }
            var first = heap[0];
            var last = heap.pop();
            if (last !== first) {
                heap[0] = last;
                siftDown(heap, last, 0);
            }
            return first;
        }
        function siftUp(heap, node, i) {
            var index = i;
            while(index > 0){
                var parentIndex = index - 1 >>> 1;
                var parent = heap[parentIndex];
                if (compare(parent, node) > 0) {
                    // The parent is larger. Swap positions.
                    heap[parentIndex] = node;
                    heap[index] = parent;
                    index = parentIndex;
                } else {
                    // The parent is smaller. Exit.
                    return;
                }
            }
        }
        function siftDown(heap, node, i) {
            var index = i;
            var length = heap.length;
            var halfLength = length >>> 1;
            while(index < halfLength){
                var leftIndex = (index + 1) * 2 - 1;
                var left = heap[leftIndex];
                var rightIndex = leftIndex + 1;
                var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.
                if (compare(left, node) < 0) {
                    if (rightIndex < length && compare(right, left) < 0) {
                        heap[index] = right;
                        heap[rightIndex] = node;
                        index = rightIndex;
                    } else {
                        heap[index] = left;
                        heap[leftIndex] = node;
                        index = leftIndex;
                    }
                } else if (rightIndex < length && compare(right, node) < 0) {
                    heap[index] = right;
                    heap[rightIndex] = node;
                    index = rightIndex;
                } else {
                    // Neither child is smaller. Exit.
                    return;
                }
            }
        }
        function compare(a, b) {
            // Compare sort index first, then task id.
            var diff = a.sortIndex - b.sortIndex;
            return diff !== 0 ? diff : a.id - b.id;
        }
        // TODO: Use symbols?
        var ImmediatePriority = 1;
        var UserBlockingPriority = 2;
        var NormalPriority = 3;
        var LowPriority = 4;
        var IdlePriority = 5;
        function markTaskErrored(task, ms) {}
        /* eslint-disable no-var */ var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
        if (hasPerformanceNow) {
            var localPerformance = performance;
            exports.unstable_now = function() {
                return localPerformance.now();
            };
        } else {
            var localDate = Date;
            var initialTime = localDate.now();
            exports.unstable_now = function() {
                return localDate.now() - initialTime;
            };
        } // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
        // Math.pow(2, 30) - 1
        // 0b111111111111111111111111111111
        var maxSigned31BitInt = 1073741823; // Times out immediately
        var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out
        var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
        var NORMAL_PRIORITY_TIMEOUT = 5000;
        var LOW_PRIORITY_TIMEOUT = 10000; // Never times out
        var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap
        var taskQueue = [];
        var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.
        var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
        var currentTask = null;
        var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrance.
        var isPerformingWork = false;
        var isHostCallbackScheduled = false;
        var isHostTimeoutScheduled = false; // Capture local references to native APIs, in case a polyfill overrides them.
        var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : null;
        var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : null;
        var localSetImmediate = typeof setImmediate !== 'undefined' ? setImmediate : null; // IE and Node.js + jsdom
        var isInputPending = typeof navigator !== 'undefined' && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;
        function advanceTimers(currentTime) {
            // Check for tasks that are no longer delayed and add them to the queue.
            var timer = peek(timerQueue);
            while(timer !== null){
                if (timer.callback === null) {
                    // Timer was cancelled.
                    pop(timerQueue);
                } else if (timer.startTime <= currentTime) {
                    // Timer fired. Transfer to the task queue.
                    pop(timerQueue);
                    timer.sortIndex = timer.expirationTime;
                    push(taskQueue, timer);
                } else {
                    // Remaining timers are pending.
                    return;
                }
                timer = peek(timerQueue);
            }
        }
        function handleTimeout(currentTime) {
            isHostTimeoutScheduled = false;
            advanceTimers(currentTime);
            if (!isHostCallbackScheduled) {
                if (peek(taskQueue) !== null) {
                    isHostCallbackScheduled = true;
                    requestHostCallback(flushWork);
                } else {
                    var firstTimer = peek(timerQueue);
                    if (firstTimer !== null) {
                        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                    }
                }
            }
        }
        function flushWork(hasTimeRemaining, initialTime) {
            isHostCallbackScheduled = false;
            if (isHostTimeoutScheduled) {
                // We scheduled a timeout but it's no longer needed. Cancel it.
                isHostTimeoutScheduled = false;
                cancelHostTimeout();
            }
            isPerformingWork = true;
            var previousPriorityLevel = currentPriorityLevel;
            try {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                {
                    var currentTime;
                } else {
                    // No catch in prod code path.
                    return workLoop(hasTimeRemaining, initialTime);
                }
            } finally{
                currentTask = null;
                currentPriorityLevel = previousPriorityLevel;
                isPerformingWork = false;
            }
        }
        function workLoop(hasTimeRemaining, initialTime) {
            var currentTime = initialTime;
            advanceTimers(currentTime);
            currentTask = peek(taskQueue);
            while(currentTask !== null && !enableSchedulerDebugging){
                if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
                    break;
                }
                var callback = currentTask.callback;
                if (typeof callback === 'function') {
                    currentTask.callback = null;
                    currentPriorityLevel = currentTask.priorityLevel;
                    var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
                    var continuationCallback = callback(didUserCallbackTimeout);
                    currentTime = exports.unstable_now();
                    if (typeof continuationCallback === 'function') {
                        currentTask.callback = continuationCallback;
                    } else {
                        if (currentTask === peek(taskQueue)) {
                            pop(taskQueue);
                        }
                    }
                    advanceTimers(currentTime);
                } else {
                    pop(taskQueue);
                }
                currentTask = peek(taskQueue);
            } // Return whether there's additional work
            if (currentTask !== null) {
                return true;
            } else {
                var firstTimer = peek(timerQueue);
                if (firstTimer !== null) {
                    requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                }
                return false;
            }
        }
        function unstable_runWithPriority(priorityLevel, eventHandler) {
            switch(priorityLevel){
                case ImmediatePriority:
                case UserBlockingPriority:
                case NormalPriority:
                case LowPriority:
                case IdlePriority:
                    break;
                default:
                    priorityLevel = NormalPriority;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
                return eventHandler();
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        }
        function unstable_next(eventHandler) {
            var priorityLevel;
            switch(currentPriorityLevel){
                case ImmediatePriority:
                case UserBlockingPriority:
                case NormalPriority:
                    // Shift down to normal priority
                    priorityLevel = NormalPriority;
                    break;
                default:
                    // Anything lower than normal priority should remain at the current level.
                    priorityLevel = currentPriorityLevel;
                    break;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
                return eventHandler();
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        }
        function unstable_wrapCallback(callback) {
            var parentPriorityLevel = currentPriorityLevel;
            return function() {
                // This is a fork of runWithPriority, inlined for performance.
                var previousPriorityLevel = currentPriorityLevel;
                currentPriorityLevel = parentPriorityLevel;
                try {
                    return callback.apply(this, arguments);
                } finally{
                    currentPriorityLevel = previousPriorityLevel;
                }
            };
        }
        function unstable_scheduleCallback(priorityLevel, callback, options) {
            var currentTime = exports.unstable_now();
            var startTime;
            if (typeof options === 'object' && options !== null) {
                var delay = options.delay;
                if (typeof delay === 'number' && delay > 0) {
                    startTime = currentTime + delay;
                } else {
                    startTime = currentTime;
                }
            } else {
                startTime = currentTime;
            }
            var timeout;
            switch(priorityLevel){
                case ImmediatePriority:
                    timeout = IMMEDIATE_PRIORITY_TIMEOUT;
                    break;
                case UserBlockingPriority:
                    timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
                    break;
                case IdlePriority:
                    timeout = IDLE_PRIORITY_TIMEOUT;
                    break;
                case LowPriority:
                    timeout = LOW_PRIORITY_TIMEOUT;
                    break;
                case NormalPriority:
                default:
                    timeout = NORMAL_PRIORITY_TIMEOUT;
                    break;
            }
            var expirationTime = startTime + timeout;
            var newTask = {
                id: taskIdCounter++,
                callback: callback,
                priorityLevel: priorityLevel,
                startTime: startTime,
                expirationTime: expirationTime,
                sortIndex: -1
            };
            if (startTime > currentTime) {
                // This is a delayed task.
                newTask.sortIndex = startTime;
                push(timerQueue, newTask);
                if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
                    // All tasks are delayed, and this is the task with the earliest delay.
                    if (isHostTimeoutScheduled) {
                        // Cancel an existing timeout.
                        cancelHostTimeout();
                    } else {
                        isHostTimeoutScheduled = true;
                    } // Schedule a timeout.
                    requestHostTimeout(handleTimeout, startTime - currentTime);
                }
            } else {
                newTask.sortIndex = expirationTime;
                push(taskQueue, newTask);
                // wait until the next time we yield.
                if (!isHostCallbackScheduled && !isPerformingWork) {
                    isHostCallbackScheduled = true;
                    requestHostCallback(flushWork);
                }
            }
            return newTask;
        }
        function unstable_pauseExecution() {}
        function unstable_continueExecution() {
            if (!isHostCallbackScheduled && !isPerformingWork) {
                isHostCallbackScheduled = true;
                requestHostCallback(flushWork);
            }
        }
        function unstable_getFirstCallbackNode() {
            return peek(taskQueue);
        }
        function unstable_cancelCallback(task) {
            // remove from the queue because you can't remove arbitrary nodes from an
            // array based heap, only the first one.)
            task.callback = null;
        }
        function unstable_getCurrentPriorityLevel() {
            return currentPriorityLevel;
        }
        var isMessageLoopRunning = false;
        var scheduledHostCallback = null;
        var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
        // thread, like user events. By default, it yields multiple times per frame.
        // It does not attempt to align with frame boundaries, since most tasks don't
        // need to be frame aligned; for those that do, use requestAnimationFrame.
        var frameInterval = frameYieldMs;
        var startTime = -1;
        function shouldYieldToHost() {
            var timeElapsed = exports.unstable_now() - startTime;
            if (timeElapsed < frameInterval) {
                // The main thread has only been blocked for a really short amount of time;
                // smaller than a single frame. Don't yield yet.
                return false;
            } // The main thread has been blocked for a non-negligible amount of time. We
            return true;
        }
        function requestPaint() {}
        function forceFrameRate(fps) {
            if (fps < 0 || fps > 125) {
                // Using console['error'] to evade Babel and ESLint
                console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
                return;
            }
            if (fps > 0) {
                frameInterval = Math.floor(1000 / fps);
            } else {
                // reset the framerate
                frameInterval = frameYieldMs;
            }
        }
        var performWorkUntilDeadline = function() {
            if (scheduledHostCallback !== null) {
                var currentTime = exports.unstable_now(); // Keep track of the start time so we can measure how long the main thread
                // has been blocked.
                startTime = currentTime;
                var hasTimeRemaining = true; // If a scheduler task throws, exit the current browser task so the
                // error can be observed.
                //
                // Intentionally not using a try-catch, since that makes some debugging
                // techniques harder. Instead, if `scheduledHostCallback` errors, then
                // `hasMoreWork` will remain true, and we'll continue the work loop.
                var hasMoreWork = true;
                try {
                    hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                } finally{
                    if (hasMoreWork) {
                        // If there's more work, schedule the next message event at the end
                        // of the preceding one.
                        schedulePerformWorkUntilDeadline();
                    } else {
                        isMessageLoopRunning = false;
                        scheduledHostCallback = null;
                    }
                }
            } else {
                isMessageLoopRunning = false;
            } // Yielding to the browser will give it a chance to paint, so we can
        };
        var schedulePerformWorkUntilDeadline;
        if (typeof localSetImmediate === 'function') {
            // Node.js and old IE.
            // There's a few reasons for why we prefer setImmediate.
            //
            // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
            // (Even though this is a DOM fork of the Scheduler, you could get here
            // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
            // https://github.com/facebook/react/issues/20756
            //
            // But also, it runs earlier which is the semantic we want.
            // If other browsers ever implement it, it's better to use it.
            // Although both of these would be inferior to native scheduling.
            schedulePerformWorkUntilDeadline = function() {
                localSetImmediate(performWorkUntilDeadline);
            };
        } else if (typeof MessageChannel !== 'undefined') {
            // DOM and Worker environments.
            // We prefer MessageChannel because of the 4ms setTimeout clamping.
            var channel = new MessageChannel();
            var port = channel.port2;
            channel.port1.onmessage = performWorkUntilDeadline;
            schedulePerformWorkUntilDeadline = function() {
                port.postMessage(null);
            };
        } else {
            // We should only fallback here in non-browser environments.
            schedulePerformWorkUntilDeadline = function() {
                localSetTimeout(performWorkUntilDeadline, 0);
            };
        }
        function requestHostCallback(callback) {
            scheduledHostCallback = callback;
            if (!isMessageLoopRunning) {
                isMessageLoopRunning = true;
                schedulePerformWorkUntilDeadline();
            }
        }
        function requestHostTimeout(callback, ms) {
            taskTimeoutID = localSetTimeout(function() {
                callback(exports.unstable_now());
            }, ms);
        }
        function cancelHostTimeout() {
            localClearTimeout(taskTimeoutID);
            taskTimeoutID = -1;
        }
        var unstable_requestPaint = requestPaint;
        var unstable_Profiling = null;
        exports.unstable_IdlePriority = IdlePriority;
        exports.unstable_ImmediatePriority = ImmediatePriority;
        exports.unstable_LowPriority = LowPriority;
        exports.unstable_NormalPriority = NormalPriority;
        exports.unstable_Profiling = unstable_Profiling;
        exports.unstable_UserBlockingPriority = UserBlockingPriority;
        exports.unstable_cancelCallback = unstable_cancelCallback;
        exports.unstable_continueExecution = unstable_continueExecution;
        exports.unstable_forceFrameRate = forceFrameRate;
        exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
        exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
        exports.unstable_next = unstable_next;
        exports.unstable_pauseExecution = unstable_pauseExecution;
        exports.unstable_requestPaint = unstable_requestPaint;
        exports.unstable_runWithPriority = unstable_runWithPriority;
        exports.unstable_scheduleCallback = unstable_scheduleCallback;
        exports.unstable_shouldYield = shouldYieldToHost;
        exports.unstable_wrapCallback = unstable_wrapCallback;
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}
}),
"[project]/gdp-uk-news-frontend/node_modules/scheduler/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)");
}
}),
"[project]/gdp-uk-news-frontend/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/gdp-uk-news-frontend/node_modules/prop-types/node_modules/react-is/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)");
}
}),
"[project]/gdp-uk-news-frontend/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/gdp-uk-news-frontend/node_modules/prop-types/lib/has.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/gdp-uk-news-frontend/node_modules/prop-types/checkPropTypes.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/prop-types/lib/has.js [client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/gdp-uk-news-frontend/node_modules/prop-types/factoryWithTypeCheckers.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactIs = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/prop-types/node_modules/react-is/index.js [client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/object-assign.js [client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)");
var has = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/prop-types/lib/has.js [client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/prop-types/checkPropTypes.js [client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/prop-types/node_modules/react-is/index.js [client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/prop-types/factoryWithTypeCheckers.js [client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/gdp-uk-news-frontend/node_modules/swr/dist/index.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRConfig",
    ()=>SWRConfig,
    "default",
    ()=>useSWR,
    "mutate",
    ()=>mutate,
    "unstable_serialize",
    ()=>unstable_serialize,
    "useSWRConfig",
    ()=>useSWRConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var noop = function() {};
// Using noop() as the undefined value as undefined can possibly be replaced
// by something else.  Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
var UNDEFINED = /*#__NOINLINE__*/ noop();
var OBJECT = Object;
var isUndefined = function(v) {
    return v === UNDEFINED;
};
var isFunction = function(v) {
    return typeof v == 'function';
};
var mergeObjects = function(a, b) {
    return OBJECT.assign({}, a, b);
};
var STR_UNDEFINED = 'undefined';
// NOTE: Use function to guarantee it's re-evaluated between jsdom and node runtime for tests.
var hasWindow = function() {
    return typeof window != STR_UNDEFINED;
};
var hasDocument = function() {
    return typeof document != STR_UNDEFINED;
};
var hasRequestAnimationFrame = function() {
    return hasWindow() && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
};
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsible.
var stableHash = function(arg) {
    var type = typeof arg;
    var constructor = arg && arg.constructor;
    var isDate = constructor == Date;
    var result;
    var index;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (constructor == Array) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (constructor == OBJECT) {
            // Object, sort keys.
            result = '#';
            var keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
/**
 * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a work around, we always assume it's online on first load, and change
 * the status upon `online` or `offline` events.
 */ var online = true;
var isOnline = function() {
    return online;
};
var hasWin = hasWindow();
var hasDoc = hasDocument();
// For node and React Native, `add/removeEventListener` doesn't exist on window.
var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop;
var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop;
var isVisible = function() {
    var visibilityState = hasDoc && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
var initFocus = function(callback) {
    // focus revalidate
    onDocumentEvent('visibilitychange', callback);
    onWindowEvent('focus', callback);
    return function() {
        offDocumentEvent('visibilitychange', callback);
        offWindowEvent('focus', callback);
    };
};
var initReconnect = function(callback) {
    // revalidate on reconnected
    var onOnline = function() {
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    var onOffline = function() {
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return function() {
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
var preset = {
    isOnline: isOnline,
    isVisible: isVisible
};
var defaultConfigOptions = {
    initFocus: initFocus,
    initReconnect: initReconnect
};
var IS_SERVER = !hasWindow() || 'Deno' in window;
// Polyfill requestAnimationFrame
var rAF = function(f) {
    return hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
};
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
// This assignment is to extend the Navigator type to use effectiveType.
var navigatorConnection = typeof navigator !== 'undefined' && navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
var slowConnection = !IS_SERVER && navigatorConnection && ([
    'slow-2g',
    '2g'
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = function(key) {
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    var args = [].concat(key);
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    var infoKey = key ? '$swr$' + key : '';
    return [
        key,
        args,
        infoKey
    ];
};
// Global state used to deduplicate requests and store listeners
var SWRGlobalState = new WeakMap();
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var broadcastState = function(cache, key, data, error, isValidating, revalidate, broadcast) {
    if (broadcast === void 0) {
        broadcast = true;
    }
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], FETCH = _a[3];
    var revalidators = EVENT_REVALIDATORS[key];
    var updaters = STATE_UPDATERS[key];
    // Cache was populated, update states of all hooks.
    if (broadcast && updaters) {
        for(var i = 0; i < updaters.length; ++i){
            updaters[i](data, error, isValidating);
        }
    }
    // If we also need to revalidate, only do it for the first hook.
    if (revalidate) {
        // Invalidate the key by deleting the concurrent request markers so new
        // requests will not be deduped.
        delete FETCH[key];
        if (revalidators && revalidators[0]) {
            return revalidators[0](MUTATE_EVENT).then(function() {
                return cache.get(key);
            });
        }
    }
    return cache.get(key);
};
// Global timestamp.
var __timestamp = 0;
var getTimestamp = function() {
    return ++__timestamp;
};
var internalMutate = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function() {
        var cache, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, customOptimisticData, _a, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasCustomOptimisticData, rollbackData, optimisticData, res;
        return __generator(this, function(_c) {
            switch(_c.label){
                case 0:
                    cache = args[0], _key = args[1], _data = args[2], _opts = args[3];
                    options = typeof _opts === 'boolean' ? {
                        revalidate: _opts
                    } : _opts || {};
                    populateCache = isUndefined(options.populateCache) ? true : options.populateCache;
                    revalidate = options.revalidate !== false;
                    rollbackOnError = options.rollbackOnError !== false;
                    customOptimisticData = options.optimisticData;
                    _a = serialize(_key), key = _a[0], keyInfo = _a[2];
                    if (!key) return [
                        2 /*return*/ 
                    ];
                    _b = SWRGlobalState.get(cache), MUTATION = _b[2];
                    // If there is no new data provided, revalidate the key with current state.
                    if (args.length < 3) {
                        // Revalidate and broadcast state.
                        return [
                            2 /*return*/ ,
                            broadcastState(cache, key, cache.get(key), UNDEFINED, UNDEFINED, revalidate, true)
                        ];
                    }
                    data = _data;
                    beforeMutationTs = getTimestamp();
                    MUTATION[key] = [
                        beforeMutationTs,
                        0
                    ];
                    hasCustomOptimisticData = !isUndefined(customOptimisticData);
                    rollbackData = cache.get(key);
                    // Do optimistic data update.
                    if (hasCustomOptimisticData) {
                        optimisticData = isFunction(customOptimisticData) ? customOptimisticData(rollbackData) : customOptimisticData;
                        cache.set(key, optimisticData);
                        broadcastState(cache, key, optimisticData);
                    }
                    if (isFunction(data)) {
                        // `data` is a function, call it passing current cache value.
                        try {
                            data = data(cache.get(key));
                        } catch (err) {
                            // If it throws an error synchronously, we shouldn't update the cache.
                            error = err;
                        }
                    }
                    if (!(data && isFunction(data.then))) return [
                        3 /*break*/ ,
                        2
                    ];
                    return [
                        4 /*yield*/ ,
                        data.catch(function(err) {
                            error = err;
                        })
                    ];
                case 1:
                    // This means that the mutation is async, we need to check timestamps to
                    // avoid race conditions.
                    data = _c.sent();
                    // Check if other mutations have occurred since we've started this mutation.
                    // If there's a race we don't update cache or broadcast the change,
                    // just return the data.
                    if (beforeMutationTs !== MUTATION[key][0]) {
                        if (error) throw error;
                        return [
                            2 /*return*/ ,
                            data
                        ];
                    } else if (error && hasCustomOptimisticData && rollbackOnError) {
                        // Rollback. Always populate the cache in this case but without
                        // transforming the data.
                        populateCache = true;
                        data = rollbackData;
                        cache.set(key, rollbackData);
                    }
                    _c.label = 2;
                case 2:
                    // If we should write back the cache after request.
                    if (populateCache) {
                        if (!error) {
                            // Transform the result into data.
                            if (isFunction(populateCache)) {
                                data = populateCache(data, rollbackData);
                            }
                            // Only update cached data if there's no error. Data can be `undefined` here.
                            cache.set(key, data);
                        }
                        // Always update or reset the error.
                        cache.set(keyInfo, mergeObjects(cache.get(keyInfo), {
                            error: error
                        }));
                    }
                    // Reset the timestamp to mark the mutation has ended.
                    MUTATION[key][1] = getTimestamp();
                    return [
                        4 /*yield*/ ,
                        broadcastState(cache, key, data, error, UNDEFINED, revalidate, !!populateCache)
                    ];
                case 3:
                    res = _c.sent();
                    // Throw error or return data
                    if (error) throw error;
                    return [
                        2 /*return*/ ,
                        populateCache ? res : data
                    ];
            }
        });
    });
};
var revalidateAllKeys = function(revalidators, type) {
    for(var key in revalidators){
        if (revalidators[key][0]) revalidators[key][0](type);
    }
};
var initCache = function(provider, options) {
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that bound to
    // the cache.
    // Provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        var opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        var EVENT_REVALIDATORS = {};
        var mutate = internalMutate.bind(UNDEFINED, provider);
        var unmount = noop;
        // Update the state if it's new, or the provider has been extended.
        SWRGlobalState.set(provider, [
            EVENT_REVALIDATORS,
            {},
            {},
            {},
            mutate
        ]);
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        if (!IS_SERVER) {
            // When listening to the native events for auto revalidations,
            // we intentionally put a delay (setTimeout) here to make sure they are
            // fired after immediate JavaScript executions, which can possibly be
            // React's state updates.
            // This avoids some unnecessary revalidations such as
            // https://github.com/vercel/swr/issues/1680.
            var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
            var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
            unmount = function() {
                releaseFocus_1 && releaseFocus_1();
                releaseReconnect_1 && releaseReconnect_1();
                // When un-mounting, we need to remove the cache provider from the state
                // storage too because it's a side-effect. Otherwise when re-mounting we
                // will not re-register those event listeners.
                SWRGlobalState.delete(provider);
            };
        }
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [
            provider,
            mutate,
            unmount
        ];
    }
    return [
        provider,
        SWRGlobalState.get(provider)[4]
    ];
};
// error retry
var onErrorRetry = function(_, __, config, revalidate, opts) {
    var maxRetryCount = config.errorRetryCount;
    var currentRetryCount = opts.retryCount;
    // Exponential backoff
    var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
// Default cache provider
var _a = initCache(new Map()), cache = _a[0], mutate = _a[1];
// Default config
var defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry: onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    // providers
    compare: function(currentData, newData) {
        return stableHash(currentData) == stableHash(newData);
    },
    isPaused: function() {
        return false;
    },
    cache: cache,
    mutate: mutate,
    fallback: {}
}, // use web preset by default
preset);
var mergeConfigs = function(a, b) {
    // Need to create a new object to avoid mutating the original here.
    var v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        var u1 = a.use, f1 = a.fallback;
        var u2 = b.use, f2 = b.fallback;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};
var SWRConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])({});
var SWRConfig$1 = function(props) {
    var value = props.value;
    // Extend parent context values and middleware.
    var extendedConfig = mergeConfigs((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(SWRConfigContext), value);
    // Should not use the inherited provider.
    var provider = value && value.provider;
    // Use a lazy initialized state to create the cache on first access.
    var cacheContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "SWRConfig$1.useState": function() {
            return provider ? initCache(provider(extendedConfig.cache || cache), value) : UNDEFINED;
        }
    }["SWRConfig$1.useState"])[0];
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect({
        "SWRConfig$1.useIsomorphicLayoutEffect": function() {
            return cacheContext ? cacheContext[2] : UNDEFINED;
        }
    }["SWRConfig$1.useIsomorphicLayoutEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"])(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};
/**
 * An implementation of state with dependency-tracking.
 */ var useStateWithDeps = function(state, unmountedRef) {
    var rerender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({})[1];
    var stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(state);
    // If a state property (data, error or isValidating) is accessed by the render
    // function, we mark the property as a dependency so if it is updated again
    // in the future, we trigger a rerender.
    // This is also known as dependency-tracking.
    var stateDependenciesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    /**
     * @param payload To change stateRef, pass the values explicitly to setState:
     * @example
     * ```js
     * setState({
     *   isValidating: false
     *   data: newData // set data to newData
     *   error: undefined // set error to undefined
     * })
     *
     * setState({
     *   isValidating: false
     *   data: undefined // set data to undefined
     *   error: err // set error to err
     * })
     * ```
     */ var setState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStateWithDeps.useCallback[setState]": function(payload) {
            var shouldRerender = false;
            var currentState = stateRef.current;
            for(var _ in payload){
                var k = _;
                // If the property has changed, update the state and mark rerender as
                // needed.
                if (currentState[k] !== payload[k]) {
                    currentState[k] = payload[k];
                    // If the property is accessed by the component, a rerender should be
                    // triggered.
                    if (stateDependenciesRef.current[k]) {
                        shouldRerender = true;
                    }
                }
            }
            if (shouldRerender && !unmountedRef.current) {
                rerender({});
            }
        }
    }["useStateWithDeps.useCallback[setState]"], // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update the state reference.
    useIsomorphicLayoutEffect({
        "useStateWithDeps.useIsomorphicLayoutEffect": function() {
            stateRef.current = state;
        }
    }["useStateWithDeps.useIsomorphicLayoutEffect"]);
    return [
        stateRef,
        stateDependenciesRef.current,
        setState
    ];
};
var normalize = function(args) {
    return isFunction(args[1]) ? [
        args[0],
        args[1],
        args[2] || {}
    ] : [
        args[0],
        null,
        (args[1] === null ? args[2] : args[1]) || {}
    ];
};
var useSWRConfig = function() {
    return mergeObjects(defaultConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(SWRConfigContext));
};
// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
var withArgs = function(hook) {
    return function useSWRArgs() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        // Get the default and inherited configuration.
        var fallbackConfig = useSWRConfig();
        // Normalize arguments.
        var _a = normalize(args), key = _a[0], fn = _a[1], _config = _a[2];
        // Merge configurations.
        var config = mergeConfigs(fallbackConfig, _config);
        // Apply middleware
        var next = hook;
        var use = config.use;
        if (use) {
            for(var i = use.length; i-- > 0;){
                next = use[i](next);
            }
        }
        return next(key, fn || config.fetcher, config);
    };
};
// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
var subscribeCallback = function(key, callbacks, callback) {
    var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return function() {
        var index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};
var WITH_DEDUPE = {
    dedupe: true
};
var useSWRHandler = function(_key, fetcher, config) {
    var cache = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], MUTATION = _a[2], FETCH = _a[3];
    // `key` is the identifier of the SWR `data` state, `keyInfo` holds extra
    // states such as `error` and `isValidating` inside,
    // all of them are derived from `_key`.
    // `fnArgs` is an array of arguments parsed from the key, which will be passed
    // to the fetcher.
    var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
    // If it's the initial render of this hook.
    var initialMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    var unmountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Refs to keep the key and config.
    var keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(key);
    var fetcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(fetcher);
    var configRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(config);
    var getConfig = function() {
        return configRef.current;
    };
    var isActive = function() {
        return getConfig().isVisible() && getConfig().isOnline();
    };
    var patchFetchInfo = function(info) {
        return cache.set(keyInfo, mergeObjects(cache.get(keyInfo), info));
    };
    // Get the current state that SWR should return.
    var cached = cache.get(key);
    var fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
    var data = isUndefined(cached) ? fallback : cached;
    var info = cache.get(keyInfo) || {};
    var error = info.error;
    var isInitialMount = !initialMountedRef.current;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    var shouldRevalidate = function() {
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !isUndefined(revalidateOnMount)) return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused()) return false;
        // Under suspense mode, it will always fetch on render if there is no
        // stale data so no need to revalidate immediately on mount again.
        // If data exists, only revalidate if `revalidateIfStale` is true.
        if (suspense) return isUndefined(data) ? false : config.revalidateIfStale;
        // If there is no stale data, we need to revalidate on mount;
        // If `revalidateIfStale` is set to true, we will always revalidate.
        return isUndefined(data) || config.revalidateIfStale;
    };
    // Resolve the current validating state.
    var resolveValidating = function() {
        if (!key || !fetcher) return false;
        if (info.isValidating) return true;
        // If it's not mounted yet and it should revalidate on mount, revalidate.
        return isInitialMount && shouldRevalidate();
    };
    var isValidating = resolveValidating();
    var _c = useStateWithDeps({
        data: data,
        error: error,
        isValidating: isValidating
    }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    var revalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSWRHandler.useCallback[revalidate]": function(revalidateOpts) {
            return __awaiter(void 0, void 0, void 0, {
                "useSWRHandler.useCallback[revalidate]": function() {
                    var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
                    var _a;
                    return __generator(this, {
                        "useSWRHandler.useCallback[revalidate]": function(_b) {
                            switch(_b.label){
                                case 0:
                                    currentFetcher = fetcherRef.current;
                                    if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
                                        return [
                                            2 /*return*/ ,
                                            false
                                        ];
                                    }
                                    loading = true;
                                    opts = revalidateOpts || {};
                                    shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
                                    isCurrentKeyMounted = ({
                                        "useSWRHandler.useCallback[revalidate]": function() {
                                            return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
                                        }
                                    })["useSWRHandler.useCallback[revalidate]"];
                                    cleanupState = ({
                                        "useSWRHandler.useCallback[revalidate]": function() {
                                            // Check if it's still the same request before deleting.
                                            var requestInfo = FETCH[key];
                                            if (requestInfo && requestInfo[1] === startAt) {
                                                delete FETCH[key];
                                            }
                                        }
                                    })["useSWRHandler.useCallback[revalidate]"];
                                    newState = {
                                        isValidating: false
                                    };
                                    finishRequestAndUpdateState = ({
                                        "useSWRHandler.useCallback[revalidate]": function() {
                                            patchFetchInfo({
                                                isValidating: false
                                            });
                                            // We can only set state if it's safe (still mounted with the same key).
                                            if (isCurrentKeyMounted()) {
                                                setState(newState);
                                            }
                                        }
                                    })["useSWRHandler.useCallback[revalidate]"];
                                    // Start fetching. Change the `isValidating` state, update the cache.
                                    patchFetchInfo({
                                        isValidating: true
                                    });
                                    setState({
                                        isValidating: true
                                    });
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]);
                                    if (shouldStartNewRequest) {
                                        // Tell all other hooks to change the `isValidating` state.
                                        broadcastState(cache, key, stateRef.current.data, stateRef.current.error, true);
                                        // If no cache being rendered currently (it shows a blank page),
                                        // we trigger the loading slow event.
                                        if (config.loadingTimeout && !cache.get(key)) {
                                            setTimeout({
                                                "useSWRHandler.useCallback[revalidate]": function() {
                                                    if (loading && isCurrentKeyMounted()) {
                                                        getConfig().onLoadingSlow(key, config);
                                                    }
                                                }
                                            }["useSWRHandler.useCallback[revalidate]"], config.loadingTimeout);
                                        }
                                        // Start the request and save the timestamp.
                                        FETCH[key] = [
                                            currentFetcher.apply(void 0, fnArgs),
                                            getTimestamp()
                                        ];
                                    }
                                    _a = FETCH[key], newData = _a[0], startAt = _a[1];
                                    return [
                                        4 /*yield*/ ,
                                        newData
                                    ];
                                case 2:
                                    newData = _b.sent();
                                    if (shouldStartNewRequest) {
                                        // If the request isn't interrupted, clean it up after the
                                        // deduplication interval.
                                        setTimeout(cleanupState, config.dedupingInterval);
                                    }
                                    // If there're other ongoing request(s), started after the current one,
                                    // we need to ignore the current one to avoid possible race conditions:
                                    //   req1------------------>res1        (current one)
                                    //        req2---------------->res2
                                    // the request that fired later will always be kept.
                                    // The timestamp maybe be `undefined` or a number
                                    if (!FETCH[key] || FETCH[key][1] !== startAt) {
                                        if (shouldStartNewRequest) {
                                            if (isCurrentKeyMounted()) {
                                                getConfig().onDiscarded(key);
                                            }
                                        }
                                        return [
                                            2 /*return*/ ,
                                            false
                                        ];
                                    }
                                    // Clear error.
                                    patchFetchInfo({
                                        error: UNDEFINED
                                    });
                                    newState.error = UNDEFINED;
                                    mutationInfo = MUTATION[key];
                                    if (!isUndefined(mutationInfo) && // case 1
                                    (startAt <= mutationInfo[0] || // case 2
                                    startAt <= mutationInfo[1] || // case 3
                                    mutationInfo[1] === 0)) {
                                        finishRequestAndUpdateState();
                                        if (shouldStartNewRequest) {
                                            if (isCurrentKeyMounted()) {
                                                getConfig().onDiscarded(key);
                                            }
                                        }
                                        return [
                                            2 /*return*/ ,
                                            false
                                        ];
                                    }
                                    // Deep compare with latest state to avoid extra re-renders.
                                    // For local state, compare and assign.
                                    if (!compare(stateRef.current.data, newData)) {
                                        newState.data = newData;
                                    } else {
                                        // data and newData are deeply equal
                                        // it should be safe to broadcast the stale data
                                        newState.data = stateRef.current.data;
                                    // At the end of this function, `brocastState` invokes the `onStateUpdate` function,
                                    // which takes care of avoiding the re-render
                                    }
                                    // For global state, it's possible that the key has changed.
                                    // https://github.com/vercel/swr/pull/1058
                                    if (!compare(cache.get(key), newData)) {
                                        cache.set(key, newData);
                                    }
                                    // Trigger the successful callback if it's the original request.
                                    if (shouldStartNewRequest) {
                                        if (isCurrentKeyMounted()) {
                                            getConfig().onSuccess(newData, key, config);
                                        }
                                    }
                                    return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                case 3:
                                    err_1 = _b.sent();
                                    cleanupState();
                                    // Not paused, we continue handling the error. Otherwise discard it.
                                    if (!getConfig().isPaused()) {
                                        // Get a new error, don't use deep comparison for errors.
                                        patchFetchInfo({
                                            error: err_1
                                        });
                                        newState.error = err_1;
                                        // Error event and retry logic. Only for the actual request, not
                                        // deduped ones.
                                        if (shouldStartNewRequest && isCurrentKeyMounted()) {
                                            getConfig().onError(err_1, key, config);
                                            if (typeof config.shouldRetryOnError === 'boolean' && config.shouldRetryOnError || isFunction(config.shouldRetryOnError) && config.shouldRetryOnError(err_1)) {
                                                // When retrying, dedupe is always enabled
                                                if (isActive()) {
                                                    // If it's active, stop. It will auto revalidate when refocusing
                                                    // or reconnecting.
                                                    getConfig().onErrorRetry(err_1, key, config, revalidate, {
                                                        retryCount: (opts.retryCount || 0) + 1,
                                                        dedupe: true
                                                    });
                                                }
                                            }
                                        }
                                    }
                                    return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                case 4:
                                    // Mark loading as stopped.
                                    loading = false;
                                    // Update the current hook's state.
                                    finishRequestAndUpdateState();
                                    // Here is the source of the request, need to tell all other hooks to
                                    // update their states.
                                    if (isCurrentKeyMounted() && shouldStartNewRequest) {
                                        broadcastState(cache, key, newState.data, newState.error, false);
                                    }
                                    return [
                                        2 /*return*/ ,
                                        true
                                    ];
                            }
                        }
                    }["useSWRHandler.useCallback[revalidate]"]);
                }
            }["useSWRHandler.useCallback[revalidate]"]);
        }
    }["useSWRHandler.useCallback[revalidate]"], // `setState` is immutable, and `eventsCallback`, `fnArgs`, `keyInfo`,
    // and `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        key
    ]);
    // Similar to the global mutate, but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var boundMutate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(// By using `bind` we don't need to modify the size of the rest arguments.
    // Due to https://github.com/microsoft/TypeScript/issues/37181, we have to
    // cast it to any for now.
    internalMutate.bind(UNDEFINED, cache, {
        "useSWRHandler.useCallback[boundMutate]": function() {
            return keyRef.current;
        }
    }["useSWRHandler.useCallback[boundMutate]"]), // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update fetcher and config refs.
    useIsomorphicLayoutEffect({
        "useSWRHandler.useIsomorphicLayoutEffect": function() {
            fetcherRef.current = fetcher;
            configRef.current = config;
        }
    }["useSWRHandler.useIsomorphicLayoutEffect"]);
    // After mounted or key changed.
    useIsomorphicLayoutEffect({
        "useSWRHandler.useIsomorphicLayoutEffect": function() {
            if (!key) return;
            var keyChanged = key !== keyRef.current;
            var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
            // Expose state updater to global event listeners. So we can update hook's
            // internal state from the outside.
            var onStateUpdate = {
                "useSWRHandler.useIsomorphicLayoutEffect.onStateUpdate": function(updatedData, updatedError, updatedIsValidating) {
                    setState(mergeObjects({
                        error: updatedError,
                        isValidating: updatedIsValidating
                    }, // Since `setState` only shallowly compares states, we do a deep
                    // comparison here.
                    compare(stateRef.current.data, updatedData) ? UNDEFINED : {
                        data: updatedData
                    }));
                }
            }["useSWRHandler.useIsomorphicLayoutEffect.onStateUpdate"];
            // Expose revalidators to global event listeners. So we can trigger
            // revalidation from the outside.
            var nextFocusRevalidatedAt = 0;
            var onRevalidate = {
                "useSWRHandler.useIsomorphicLayoutEffect.onRevalidate": function(type) {
                    if (type == FOCUS_EVENT) {
                        var now = Date.now();
                        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
                            nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                            softRevalidate();
                        }
                    } else if (type == RECONNECT_EVENT) {
                        if (getConfig().revalidateOnReconnect && isActive()) {
                            softRevalidate();
                        }
                    } else if (type == MUTATE_EVENT) {
                        return revalidate();
                    }
                    return;
                }
            }["useSWRHandler.useIsomorphicLayoutEffect.onRevalidate"];
            var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
            var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
            // Mark the component as mounted and update corresponding refs.
            unmountedRef.current = false;
            keyRef.current = key;
            initialMountedRef.current = true;
            // When `key` updates, reset the state to the initial value
            // and trigger a rerender if necessary.
            if (keyChanged) {
                setState({
                    data: data,
                    error: error,
                    isValidating: isValidating
                });
            }
            // Trigger a revalidation.
            if (shouldRevalidate()) {
                if (isUndefined(data) || IS_SERVER) {
                    // Revalidate immediately.
                    softRevalidate();
                } else {
                    // Delay the revalidate if we have data to return so we won't block
                    // rendering.
                    rAF(softRevalidate);
                }
            }
            return ({
                "useSWRHandler.useIsomorphicLayoutEffect": function() {
                    // Mark it as unmounted.
                    unmountedRef.current = true;
                    unsubUpdate();
                    unsubEvents();
                }
            })["useSWRHandler.useIsomorphicLayoutEffect"];
        }
    }["useSWRHandler.useIsomorphicLayoutEffect"], [
        key,
        revalidate
    ]);
    // Polling
    useIsomorphicLayoutEffect({
        "useSWRHandler.useIsomorphicLayoutEffect": function() {
            var timer;
            function next() {
                // Use the passed interval
                // ...or invoke the function with the updated data to get the interval
                var interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
                // We only start next interval if `refreshInterval` is not 0, and:
                // - `force` is true, which is the start of polling
                // - or `timer` is not 0, which means the effect wasn't canceled
                if (interval && timer !== -1) {
                    timer = setTimeout(execute, interval);
                }
            }
            function execute() {
                // Check if it's OK to execute:
                // Only revalidate when the page is visible, online and not errored.
                if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
                    revalidate(WITH_DEDUPE).then(next);
                } else {
                    // Schedule next interval to check again.
                    next();
                }
            }
            next();
            return ({
                "useSWRHandler.useIsomorphicLayoutEffect": function() {
                    if (timer) {
                        clearTimeout(timer);
                        timer = -1;
                    }
                }
            })["useSWRHandler.useIsomorphicLayoutEffect"];
        }
    }["useSWRHandler.useIsomorphicLayoutEffect"], [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        revalidate
    ]);
    // Display debug info in React DevTools.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useDebugValue"])(data);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense && isUndefined(data) && key) {
        // Always update fetcher and config refs even with the Suspense mode.
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
    }
    return {
        mutate: boundMutate,
        get data () {
            stateDependencies.data = true;
            return data;
        },
        get error () {
            stateDependencies.error = true;
            return error;
        },
        get isValidating () {
            stateDependencies.isValidating = true;
            return isValidating;
        }
    };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, 'default', {
    value: defaultConfig
});
var unstable_serialize = function(key) {
    return serialize(key)[0];
};
var useSWR = withArgs(useSWRHandler);
;
}),
"[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = '';
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) {
                classes = appendClass(classes, parseValue.call(this, arg));
            }
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
            return this && this[arg] || arg;
        }
        if (typeof arg !== 'object') {
            return '';
        }
        if (Array.isArray(arg)) {
            return classNames.apply(this, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            return arg.toString();
        }
        var classes = '';
        for(var key in arg){
            if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, this && this[key] || key);
            }
        }
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) {
            return value;
        }
        if (value) {
            return value + ' ' + newClass;
        }
        return value + newClass;
    }
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'classnames', consistent with npm package name
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return classNames;
        }());
    } else {
        window.classNames = classNames;
    }
})();
}),
"[project]/gdp-uk-news-frontend/node_modules/decimal.js/decimal.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Decimal",
    ()=>Decimal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */ // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //
// The maximum exponent magnitude.
// The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.
var EXP_LIMIT = 9e15, // The limit on the value of `precision`, and on the value of the first argument to
// `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
MAX_DIGITS = 1e9, // Base conversion alphabet.
NUMERALS = '0123456789abcdef', // The natural logarithm of 10 (1025 digits).
LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058', // Pi (1025 digits).
PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789', // The initial configuration properties of the Decimal constructor.
DEFAULTS = {
    // These values must be integers within the stated ranges (inclusive).
    // Most of these values can be changed at run-time using the `Decimal.config` method.
    // The maximum number of significant digits of the result of a calculation or base conversion.
    // E.g. `Decimal.config({ precision: 20 });`
    precision: 20,
    // The rounding mode used when rounding to `precision`.
    //
    // ROUND_UP         0 Away from zero.
    // ROUND_DOWN       1 Towards zero.
    // ROUND_CEIL       2 Towards +Infinity.
    // ROUND_FLOOR      3 Towards -Infinity.
    // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    //
    // E.g.
    // `Decimal.rounding = 4;`
    // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
    rounding: 4,
    // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP         0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
    // FLOOR      3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN  6 The IEEE 754 remainder function.
    // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
    //
    // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
    // division (9) are commonly used for the modulus operation. The other rounding modes can also
    // be used, but they may not give useful results.
    modulo: 1,
    // The exponent value at and beneath which `toString` returns exponential notation.
    // JavaScript numbers: -7
    toExpNeg: -7,
    // The exponent value at and above which `toString` returns exponential notation.
    // JavaScript numbers: 21
    toExpPos: 21,
    // The minimum exponent value, beneath which underflow to zero occurs.
    // JavaScript numbers: -324  (5e-324)
    minE: -EXP_LIMIT,
    // The maximum exponent value, above which overflow to Infinity occurs.
    // JavaScript numbers: 308  (1.7976931348623157e+308)
    maxE: EXP_LIMIT,
    // Whether to use cryptographically-secure random number generation, if available.
    crypto: false // true/false
}, // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //
inexact, quadrant, external = true, decimalError = '[DecimalError] ', invalidArgument = decimalError + 'Invalid argument: ', precisionLimitExceeded = decimalError + 'Precision limit exceeded', cryptoUnavailable = decimalError + 'crypto unavailable', tag = '[object Decimal]', mathfloor = Math.floor, mathpow = Math.pow, isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, LN10_PRECISION = LN10.length - 1, PI_PRECISION = PI.length - 1, // Decimal.prototype object
P = {
    toStringTag: tag
};
// Decimal prototype methods
/*
 *  absoluteValue             abs
 *  ceil
 *  clampedTo                 clamp
 *  comparedTo                cmp
 *  cosine                    cos
 *  cubeRoot                  cbrt
 *  decimalPlaces             dp
 *  dividedBy                 div
 *  dividedToIntegerBy        divToInt
 *  equals                    eq
 *  floor
 *  greaterThan               gt
 *  greaterThanOrEqualTo      gte
 *  hyperbolicCosine          cosh
 *  hyperbolicSine            sinh
 *  hyperbolicTangent         tanh
 *  inverseCosine             acos
 *  inverseHyperbolicCosine   acosh
 *  inverseHyperbolicSine     asinh
 *  inverseHyperbolicTangent  atanh
 *  inverseSine               asin
 *  inverseTangent            atan
 *  isFinite
 *  isInteger                 isInt
 *  isNaN
 *  isNegative                isNeg
 *  isPositive                isPos
 *  isZero
 *  lessThan                  lt
 *  lessThanOrEqualTo         lte
 *  logarithm                 log
 *  [maximum]                 [max]
 *  [minimum]                 [min]
 *  minus                     sub
 *  modulo                    mod
 *  naturalExponential        exp
 *  naturalLogarithm          ln
 *  negated                   neg
 *  plus                      add
 *  precision                 sd
 *  round
 *  sine                      sin
 *  squareRoot                sqrt
 *  tangent                   tan
 *  times                     mul
 *  toBinary
 *  toDecimalPlaces           toDP
 *  toExponential
 *  toFixed
 *  toFraction
 *  toHexadecimal             toHex
 *  toNearest
 *  toNumber
 *  toOctal
 *  toPower                   pow
 *  toPrecision
 *  toSignificantDigits       toSD
 *  toString
 *  truncated                 trunc
 *  valueOf                   toJSON
 */ /*
 * Return a new Decimal whose value is the absolute value of this Decimal.
 *
 */ P.absoluteValue = P.abs = function() {
    var x = new this.constructor(this);
    if (x.s < 0) x.s = 1;
    return finalise(x);
};
/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
 * direction of positive Infinity.
 *
 */ P.ceil = function() {
    return finalise(new this.constructor(this), this.e + 1, 2);
};
/*
 * Return a new Decimal whose value is the value of this Decimal clamped to the range
 * delineated by `min` and `max`.
 *
 * min {number|string|bigint|Decimal}
 * max {number|string|bigint|Decimal}
 *
 */ P.clampedTo = P.clamp = function(min, max) {
    var k, x = this, Ctor = x.constructor;
    min = new Ctor(min);
    max = new Ctor(max);
    if (!min.s || !max.s) return new Ctor(NaN);
    if (min.gt(max)) throw Error(invalidArgument + max);
    k = x.cmp(min);
    return k < 0 ? min : x.cmp(max) > 0 ? max : new Ctor(x);
};
/*
 * Return
 *   1    if the value of this Decimal is greater than the value of `y`,
 *  -1    if the value of this Decimal is less than the value of `y`,
 *   0    if they have the same value,
 *   NaN  if the value of either Decimal is NaN.
 *
 */ P.comparedTo = P.cmp = function(y) {
    var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
    // Either NaN or ±Infinity?
    if (!xd || !yd) {
        return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
    }
    // Either zero?
    if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
    // Signs differ?
    if (xs !== ys) return xs;
    // Compare exponents.
    if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
    xdL = xd.length;
    ydL = yd.length;
    // Compare digit by digit.
    for(i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i){
        if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
    }
    // Compare lengths.
    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
/*
 * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-1, 1]
 *
 * cos(0)         = 1
 * cos(-0)        = 1
 * cos(Infinity)  = NaN
 * cos(-Infinity) = NaN
 * cos(NaN)       = NaN
 *
 */ P.cosine = P.cos = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.d) return new Ctor(NaN);
    // cos(0) = cos(-0) = 1
    if (!x.d[0]) return new Ctor(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
/*
 *
 * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 *  cbrt(0)  =  0
 *  cbrt(-0) = -0
 *  cbrt(1)  =  1
 *  cbrt(-1) = -1
 *  cbrt(N)  =  N
 *  cbrt(-I) = -I
 *  cbrt(I)  =  I
 *
 * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))
 *
 */ P.cubeRoot = P.cbrt = function() {
    var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    external = false;
    // Initial estimate.
    s = x.s * mathpow(x.s * x, 1 / 3);
    // Math.cbrt underflow/overflow?
    // Pass x to Math.pow as integer, then adjust the exponent of the result.
    if (!s || Math.abs(s) == 1 / 0) {
        n = digitsToString(x.d);
        e = x.e;
        // Adjust n exponent so it is a multiple of 3 away from x exponent.
        if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? '0' : '00';
        s = mathpow(n, 1 / 3);
        // Rarely, e may be one less than the result exponent value.
        e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
        if (s == 1 / 0) {
            n = '5e' + e;
        } else {
            n = s.toExponential();
            n = n.slice(0, n.indexOf('e') + 1) + e;
        }
        r = new Ctor(n);
        r.s = x.s;
    } else {
        r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    // Halley's method.
    // TODO? Compare Newton's method.
    for(;;){
        t = r;
        t3 = t.times(t).times(t);
        t3plusx = t3.plus(x);
        r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
        // TODO? Replace with for-loop and checkRoundingDigits.
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
            n = n.slice(sd - 3, sd + 1);
            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999
            // , i.e. approaching a rounding boundary, continue the iteration.
            if (n == '9999' || !rep && n == '4999') {
                // On the first iteration only, check to see if rounding up gives the exact result as the
                // nines may infinitely repeat.
                if (!rep) {
                    finalise(t, e + 1, 0);
                    if (t.times(t).times(t).eq(x)) {
                        r = t;
                        break;
                    }
                }
                sd += 4;
                rep = 1;
            } else {
                // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
                // If not, then there are further digits and m will be truthy.
                if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                    // Truncate to the first rounding digit.
                    finalise(r, e + 1, 1);
                    m = !r.times(r).times(r).eq(x);
                }
                break;
            }
        }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
};
/*
 * Return the number of decimal places of the value of this Decimal.
 *
 */ P.decimalPlaces = P.dp = function() {
    var w, d = this.d, n = NaN;
    if (d) {
        w = d.length - 1;
        n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
        // Subtract the number of trailing zeros of the last word.
        w = d[w];
        if (w) for(; w % 10 == 0; w /= 10)n--;
        if (n < 0) n = 0;
    }
    return n;
};
/*
 *  n / 0 = I
 *  n / N = N
 *  n / I = 0
 *  0 / n = 0
 *  0 / 0 = N
 *  0 / N = N
 *  0 / I = 0
 *  N / n = N
 *  N / 0 = N
 *  N / N = N
 *  N / I = N
 *  I / n = I
 *  I / 0 = I
 *  I / N = N
 *  I / I = N
 *
 * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 */ P.dividedBy = P.div = function(y) {
    return divide(this, new this.constructor(y));
};
/*
 * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
 * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.
 *
 */ P.dividedToIntegerBy = P.divToInt = function(y) {
    var x = this, Ctor = x.constructor;
    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
/*
 * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
 *
 */ P.equals = P.eq = function(y) {
    return this.cmp(y) === 0;
};
/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
 * direction of negative Infinity.
 *
 */ P.floor = function() {
    return finalise(new this.constructor(this), this.e + 1, 3);
};
/*
 * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
 * false.
 *
 */ P.greaterThan = P.gt = function(y) {
    return this.cmp(y) > 0;
};
/*
 * Return true if the value of this Decimal is greater than or equal to the value of `y`,
 * otherwise return false.
 *
 */ P.greaterThanOrEqualTo = P.gte = function(y) {
    var k = this.cmp(y);
    return k == 1 || k === 0;
};
/*
 * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
 * Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [1, Infinity]
 *
 * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...
 *
 * cosh(0)         = 1
 * cosh(-0)        = 1
 * cosh(Infinity)  = Infinity
 * cosh(-Infinity) = Infinity
 * cosh(NaN)       = NaN
 *
 *  x        time taken (ms)   result
 * 1000      9                 9.8503555700852349694e+433
 * 10000     25                4.4034091128314607936e+4342
 * 100000    171               1.4033316802130615897e+43429
 * 1000000   3817              1.5166076984010437725e+434294
 * 10000000  abandoned after 2 minute wait
 *
 * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))
 *
 */ P.hyperbolicCosine = P.cosh = function() {
    var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
    if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
    if (x.isZero()) return one;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    // Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1
    // i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))
    // Estimate the optimum number of times to use the argument reduction.
    // TODO? Estimation reused from cosine() and may not be optimal here.
    if (len < 32) {
        k = Math.ceil(len / 3);
        n = (1 / tinyPow(4, k)).toString();
    } else {
        k = 16;
        n = '2.3283064365386962890625e-10';
    }
    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
    // Reverse argument reduction
    var cosh2_x, i = k, d8 = new Ctor(8);
    for(; i--;){
        cosh2_x = x.times(x);
        x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
    }
    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
/*
 * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this
 * Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-Infinity, Infinity]
 *
 * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...
 *
 * sinh(0)         = 0
 * sinh(-0)        = -0
 * sinh(Infinity)  = Infinity
 * sinh(-Infinity) = -Infinity
 * sinh(NaN)       = NaN
 *
 * x        time taken (ms)
 * 10       2 ms
 * 100      5 ms
 * 1000     14 ms
 * 10000    82 ms
 * 100000   886 ms            1.4033316802130615897e+43429
 * 200000   2613 ms
 * 300000   5407 ms
 * 400000   8824 ms
 * 500000   13026 ms          8.7080643612718084129e+217146
 * 1000000  48543 ms
 *
 * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))
 *
 */ P.hyperbolicSine = P.sinh = function() {
    var k, pr, rm, len, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    if (len < 3) {
        x = taylorSeries(Ctor, 2, x, x, true);
    } else {
        // Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))
        // i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))
        // 3 multiplications and 1 addition
        // Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))
        // i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))
        // 4 multiplications and 2 additions
        // Estimate the optimum number of times to use the argument reduction.
        k = 1.4 * Math.sqrt(len);
        k = k > 16 ? 16 : k | 0;
        x = x.times(1 / tinyPow(5, k));
        x = taylorSeries(Ctor, 2, x, x, true);
        // Reverse argument reduction
        var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
        for(; k--;){
            sinh2_x = x.times(x);
            x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
        }
    }
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(x, pr, rm, true);
};
/*
 * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this
 * Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-1, 1]
 *
 * tanh(x) = sinh(x) / cosh(x)
 *
 * tanh(0)         = 0
 * tanh(-0)        = -0
 * tanh(Infinity)  = 1
 * tanh(-Infinity) = -1
 * tanh(NaN)       = NaN
 *
 */ P.hyperbolicTangent = P.tanh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(x.s);
    if (x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 7;
    Ctor.rounding = 1;
    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
/*
 * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of
 * this Decimal.
 *
 * Domain: [-1, 1]
 * Range: [0, pi]
 *
 * acos(x) = pi/2 - asin(x)
 *
 * acos(0)       = pi/2
 * acos(-0)      = pi/2
 * acos(1)       = 0
 * acos(-1)      = pi
 * acos(1/2)     = pi/3
 * acos(-1/2)    = 2*pi/3
 * acos(|x| > 1) = NaN
 * acos(NaN)     = NaN
 *
 */ P.inverseCosine = P.acos = function() {
    var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
    if (k !== -1) {
        return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
    }
    if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
    // TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    // See https://github.com/MikeMcl/decimal.js/pull/217
    x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
};
/*
 * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
 * value of this Decimal.
 *
 * Domain: [1, Infinity]
 * Range: [0, Infinity]
 *
 * acosh(x) = ln(x + sqrt(x^2 - 1))
 *
 * acosh(x < 1)     = NaN
 * acosh(NaN)       = NaN
 * acosh(Infinity)  = Infinity
 * acosh(-Infinity) = NaN
 * acosh(0)         = NaN
 * acosh(-0)        = NaN
 * acosh(1)         = 0
 * acosh(-1)        = NaN
 *
 */ P.inverseHyperbolicCosine = P.acosh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
    if (!x.isFinite()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).minus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
};
/*
 * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
 * of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-Infinity, Infinity]
 *
 * asinh(x) = ln(x + sqrt(x^2 + 1))
 *
 * asinh(NaN)       = NaN
 * asinh(Infinity)  = Infinity
 * asinh(-Infinity) = -Infinity
 * asinh(0)         = 0
 * asinh(-0)        = -0
 *
 */ P.inverseHyperbolicSine = P.asinh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).plus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
};
/*
 * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
 * value of this Decimal.
 *
 * Domain: [-1, 1]
 * Range: [-Infinity, Infinity]
 *
 * atanh(x) = 0.5 * ln((1 + x) / (1 - x))
 *
 * atanh(|x| > 1)   = NaN
 * atanh(NaN)       = NaN
 * atanh(Infinity)  = NaN
 * atanh(-Infinity) = NaN
 * atanh(0)         = 0
 * atanh(-0)        = -0
 * atanh(1)         = Infinity
 * atanh(-1)        = -Infinity
 *
 */ P.inverseHyperbolicTangent = P.atanh = function() {
    var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(NaN);
    if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    xsd = x.sd();
    if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
    Ctor.precision = wpr = xsd - x.e;
    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
    Ctor.precision = pr + 4;
    Ctor.rounding = 1;
    x = x.ln();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(0.5);
};
/*
 * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
 * Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-pi/2, pi/2]
 *
 * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))
 *
 * asin(0)       = 0
 * asin(-0)      = -0
 * asin(1/2)     = pi/6
 * asin(-1/2)    = -pi/6
 * asin(1)       = pi/2
 * asin(-1)      = -pi/2
 * asin(|x| > 1) = NaN
 * asin(NaN)     = NaN
 *
 * TODO? Compare performance of Taylor series.
 *
 */ P.inverseSine = P.asin = function() {
    var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
    if (x.isZero()) return new Ctor(x);
    k = x.abs().cmp(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (k !== -1) {
        // |x| is 1
        if (k === 0) {
            halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
            halfPi.s = x.s;
            return halfPi;
        }
        // |x| > 1 or x is NaN
        return new Ctor(NaN);
    }
    // TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
};
/*
 * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value
 * of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-pi/2, pi/2]
 *
 * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
 *
 * atan(0)         = 0
 * atan(-0)        = -0
 * atan(1)         = pi/4
 * atan(-1)        = -pi/4
 * atan(Infinity)  = pi/2
 * atan(-Infinity) = -pi/2
 * atan(NaN)       = NaN
 *
 */ P.inverseTangent = P.atan = function() {
    var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
    if (!x.isFinite()) {
        if (!x.s) return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) {
            r = getPi(Ctor, pr + 4, rm).times(0.5);
            r.s = x.s;
            return r;
        }
    } else if (x.isZero()) {
        return new Ctor(x);
    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.25);
        r.s = x.s;
        return r;
    }
    Ctor.precision = wpr = pr + 10;
    Ctor.rounding = 1;
    // TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);
    // Argument reduction
    // Ensure |x| < 0.42
    // atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))
    k = Math.min(28, wpr / LOG_BASE + 2 | 0);
    for(i = k; i; --i)x = x.div(x.times(x).plus(1).sqrt().plus(1));
    external = false;
    j = Math.ceil(wpr / LOG_BASE);
    n = 1;
    x2 = x.times(x);
    r = new Ctor(x);
    px = x;
    // atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
    for(; i !== -1;){
        px = px.times(x2);
        t = r.minus(px.div(n += 2));
        px = px.times(x2);
        r = t.plus(px.div(n += 2));
        if (r.d[j] !== void 0) for(i = j; r.d[i] === t.d[i] && i--;);
    }
    if (k) r = r.times(2 << k - 1);
    external = true;
    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
/*
 * Return true if the value of this Decimal is a finite number, otherwise return false.
 *
 */ P.isFinite = function() {
    return !!this.d;
};
/*
 * Return true if the value of this Decimal is an integer, otherwise return false.
 *
 */ P.isInteger = P.isInt = function() {
    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
/*
 * Return true if the value of this Decimal is NaN, otherwise return false.
 *
 */ P.isNaN = function() {
    return !this.s;
};
/*
 * Return true if the value of this Decimal is negative, otherwise return false.
 *
 */ P.isNegative = P.isNeg = function() {
    return this.s < 0;
};
/*
 * Return true if the value of this Decimal is positive, otherwise return false.
 *
 */ P.isPositive = P.isPos = function() {
    return this.s > 0;
};
/*
 * Return true if the value of this Decimal is 0 or -0, otherwise return false.
 *
 */ P.isZero = function() {
    return !!this.d && this.d[0] === 0;
};
/*
 * Return true if the value of this Decimal is less than `y`, otherwise return false.
 *
 */ P.lessThan = P.lt = function(y) {
    return this.cmp(y) < 0;
};
/*
 * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
 *
 */ P.lessThanOrEqualTo = P.lte = function(y) {
    return this.cmp(y) < 1;
};
/*
 * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * If no base is specified, return log[10](arg).
 *
 * log[base](arg) = ln(arg) / ln(base)
 *
 * The result will always be correctly rounded if the base of the log is 10, and 'almost always'
 * otherwise:
 *
 * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen
 * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error
 * between the result and the correctly rounded result will be one ulp (unit in the last place).
 *
 * log[-b](a)       = NaN
 * log[0](a)        = NaN
 * log[1](a)        = NaN
 * log[NaN](a)      = NaN
 * log[Infinity](a) = NaN
 * log[b](0)        = -Infinity
 * log[b](-0)       = -Infinity
 * log[b](-a)       = NaN
 * log[b](1)        = 0
 * log[b](Infinity) = Infinity
 * log[b](NaN)      = NaN
 *
 * [base] {number|string|bigint|Decimal} The base of the logarithm.
 *
 */ P.logarithm = P.log = function(base) {
    var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
    // Default base is 10.
    if (base == null) {
        base = new Ctor(10);
        isBase10 = true;
    } else {
        base = new Ctor(base);
        d = base.d;
        // Return NaN if base is negative, or non-finite, or is 0 or 1.
        if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
        isBase10 = base.eq(10);
    }
    d = arg.d;
    // Is arg negative, non-finite, 0 or 1?
    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
        return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
    }
    // The result will have a non-terminating decimal expansion if base is 10 and arg is not an
    // integer power of 10.
    if (isBase10) {
        if (d.length > 1) {
            inf = true;
        } else {
            for(k = d[0]; k % 10 === 0;)k /= 10;
            inf = k !== 1;
        }
    }
    external = false;
    sd = pr + guard;
    num = naturalLogarithm(arg, sd);
    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
    // The result will have 5 rounding digits.
    r = divide(num, denominator, sd, 1);
    // If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,
    // calculate 10 further digits.
    //
    // If the result is known to have an infinite decimal expansion, repeat this until it is clear
    // that the result is above or below the boundary. Otherwise, if after calculating the 10
    // further digits, the last 14 are nines, round up and assume the result is exact.
    // Also assume the result is exact if the last 14 are zero.
    //
    // Example of a result that will be incorrectly rounded:
    // log[1048576](4503599627370502) = 2.60000000000000009610279511444746...
    // The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it
    // will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so
    // the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal
    // place is still 2.6.
    if (checkRoundingDigits(r.d, k = pr, rm)) {
        do {
            sd += 10;
            num = naturalLogarithm(arg, sd);
            denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
            r = divide(num, denominator, sd, 1);
            if (!inf) {
                // Check for 14 nines from the 2nd rounding digit, as the first may be 4.
                if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
                    r = finalise(r, pr + 1, 0);
                }
                break;
            }
        }while (checkRoundingDigits(r.d, k += 10, rm))
    }
    external = true;
    return finalise(r, pr, rm);
};
/*
 * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.
 *
 * arguments {number|string|bigint|Decimal}
 *
P.max = function () {
  Array.prototype.push.call(arguments, this);
  return maxOrMin(this.constructor, arguments, -1);
};
 */ /*
 * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.
 *
 * arguments {number|string|bigint|Decimal}
 *
P.min = function () {
  Array.prototype.push.call(arguments, this);
  return maxOrMin(this.constructor, arguments, 1);
};
 */ /*
 *  n - 0 = n
 *  n - N = N
 *  n - I = -I
 *  0 - n = -n
 *  0 - 0 = 0
 *  0 - N = N
 *  0 - I = -I
 *  N - n = N
 *  N - 0 = N
 *  N - N = N
 *  N - I = N
 *  I - n = I
 *  I - 0 = I
 *  I - N = N
 *  I - I = N
 *
 * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 */ P.minus = P.sub = function(y) {
    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    // If either is not finite...
    if (!x.d || !y.d) {
        // Return NaN if either is NaN.
        if (!x.s || !y.s) y = new Ctor(NaN);
        else if (x.d) y.s = -y.s;
        else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
        return y;
    }
    // If signs differ...
    if (x.s != y.s) {
        y.s = -y.s;
        return x.plus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    // If either is zero...
    if (!xd[0] || !yd[0]) {
        // Return y negated if x is zero and y is non-zero.
        if (yd[0]) y.s = -y.s;
        else if (xd[0]) y = new Ctor(x);
        else return new Ctor(rm === 3 ? -0 : 0);
        return external ? finalise(y, pr, rm) : y;
    }
    // x and y are finite, non-zero numbers with the same sign.
    // Calculate base 1e7 exponents.
    e = mathfloor(y.e / LOG_BASE);
    xe = mathfloor(x.e / LOG_BASE);
    xd = xd.slice();
    k = xe - e;
    // If base 1e7 exponents differ...
    if (k) {
        xLTy = k < 0;
        if (xLTy) {
            d = xd;
            k = -k;
            len = yd.length;
        } else {
            d = yd;
            e = xe;
            len = xd.length;
        }
        // Numbers with massively different exponents would result in a very high number of
        // zeros needing to be prepended, but this can be avoided while still ensuring correct
        // rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
        i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
        if (k > i) {
            k = i;
            d.length = 1;
        }
        // Prepend zeros to equalise exponents.
        d.reverse();
        for(i = k; i--;)d.push(0);
        d.reverse();
    // Base 1e7 exponents equal.
    } else {
        // Check digits to determine which is the bigger number.
        i = xd.length;
        len = yd.length;
        xLTy = i < len;
        if (xLTy) len = i;
        for(i = 0; i < len; i++){
            if (xd[i] != yd[i]) {
                xLTy = xd[i] < yd[i];
                break;
            }
        }
        k = 0;
    }
    if (xLTy) {
        d = xd;
        xd = yd;
        yd = d;
        y.s = -y.s;
    }
    len = xd.length;
    // Append zeros to `xd` if shorter.
    // Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.
    for(i = yd.length - len; i > 0; --i)xd[len++] = 0;
    // Subtract yd from xd.
    for(i = yd.length; i > k;){
        if (xd[--i] < yd[i]) {
            for(j = i; j && xd[--j] === 0;)xd[j] = BASE - 1;
            --xd[j];
            xd[i] += BASE;
        }
        xd[i] -= yd[i];
    }
    // Remove trailing zeros.
    for(; xd[--len] === 0;)xd.pop();
    // Remove leading zeros and adjust exponent accordingly.
    for(; xd[0] === 0; xd.shift())--e;
    // Zero?
    if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
};
/*
 *   n % 0 =  N
 *   n % N =  N
 *   n % I =  n
 *   0 % n =  0
 *  -0 % n = -0
 *   0 % 0 =  N
 *   0 % N =  N
 *   0 % I =  0
 *   N % n =  N
 *   N % 0 =  N
 *   N % N =  N
 *   N % I =  N
 *   I % n =  N
 *   I % 0 =  N
 *   I % N =  N
 *   I % I =  N
 *
 * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 * The result depends on the modulo mode.
 *
 */ P.modulo = P.mod = function(y) {
    var q, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    // Return NaN if x is ±Infinity or NaN, or y is NaN or ±0.
    if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
    // Return x if y is ±Infinity or x is ±0.
    if (!y.d || x.d && !x.d[0]) {
        return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
    }
    // Prevent rounding of intermediate calculations.
    external = false;
    if (Ctor.modulo == 9) {
        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // result = x - q * y    where  0 <= result < abs(y)
        q = divide(x, y.abs(), 0, 3, 1);
        q.s *= y.s;
    } else {
        q = divide(x, y, 0, Ctor.modulo, 1);
    }
    q = q.times(y);
    external = true;
    return x.minus(q);
};
/*
 * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
 * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 */ P.naturalExponential = P.exp = function() {
    return naturalExponential(this);
};
/*
 * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
 * rounded to `precision` significant digits using rounding mode `rounding`.
 *
 */ P.naturalLogarithm = P.ln = function() {
    return naturalLogarithm(this);
};
/*
 * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
 * -1.
 *
 */ P.negated = P.neg = function() {
    var x = new this.constructor(this);
    x.s = -x.s;
    return finalise(x);
};
/*
 *  n + 0 = n
 *  n + N = N
 *  n + I = I
 *  0 + n = n
 *  0 + 0 = 0
 *  0 + N = N
 *  0 + I = I
 *  N + n = N
 *  N + 0 = N
 *  N + N = N
 *  N + I = N
 *  I + n = I
 *  I + 0 = I
 *  I + N = N
 *  I + I = I
 *
 * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 */ P.plus = P.add = function(y) {
    var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    // If either is not finite...
    if (!x.d || !y.d) {
        // Return NaN if either is NaN.
        if (!x.s || !y.s) y = new Ctor(NaN);
        else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
        return y;
    }
    // If signs differ...
    if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    // If either is zero...
    if (!xd[0] || !yd[0]) {
        // Return x if y is zero.
        // Return y if y is non-zero.
        if (!yd[0]) y = new Ctor(x);
        return external ? finalise(y, pr, rm) : y;
    }
    // x and y are finite, non-zero numbers with the same sign.
    // Calculate base 1e7 exponents.
    k = mathfloor(x.e / LOG_BASE);
    e = mathfloor(y.e / LOG_BASE);
    xd = xd.slice();
    i = k - e;
    // If base 1e7 exponents differ...
    if (i) {
        if (i < 0) {
            d = xd;
            i = -i;
            len = yd.length;
        } else {
            d = yd;
            e = k;
            len = xd.length;
        }
        // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
        k = Math.ceil(pr / LOG_BASE);
        len = k > len ? k + 1 : len + 1;
        if (i > len) {
            i = len;
            d.length = 1;
        }
        // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
        d.reverse();
        for(; i--;)d.push(0);
        d.reverse();
    }
    len = xd.length;
    i = yd.length;
    // If yd is longer than xd, swap xd and yd so xd points to the longer array.
    if (len - i < 0) {
        i = len;
        d = yd;
        yd = xd;
        xd = d;
    }
    // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
    for(carry = 0; i;){
        carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
        xd[i] %= BASE;
    }
    if (carry) {
        xd.unshift(carry);
        ++e;
    }
    // Remove trailing zeros.
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    for(len = xd.length; xd[--len] == 0;)xd.pop();
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
};
/*
 * Return the number of significant digits of the value of this Decimal.
 *
 * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
 *
 */ P.precision = P.sd = function(z) {
    var k, x = this;
    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
    if (x.d) {
        k = getPrecision(x.d);
        if (z && x.e + 1 > k) k = x.e + 1;
    } else {
        k = NaN;
    }
    return k;
};
/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
 * rounding mode `rounding`.
 *
 */ P.round = function() {
    var x = this, Ctor = x.constructor;
    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
/*
 * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-1, 1]
 *
 * sin(x) = x - x^3/3! + x^5/5! - ...
 *
 * sin(0)         = 0
 * sin(-0)        = -0
 * sin(Infinity)  = NaN
 * sin(-Infinity) = NaN
 * sin(NaN)       = NaN
 *
 */ P.sine = P.sin = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = sine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
/*
 * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 *  sqrt(-n) =  N
 *  sqrt(N)  =  N
 *  sqrt(-I) =  N
 *  sqrt(I)  =  I
 *  sqrt(0)  =  0
 *  sqrt(-0) = -0
 *
 */ P.squareRoot = P.sqrt = function() {
    var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
    // Negative/NaN/Infinity/zero?
    if (s !== 1 || !d || !d[0]) {
        return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
    }
    external = false;
    // Initial estimate.
    s = Math.sqrt(+x);
    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
        n = digitsToString(d);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(n);
        e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
        if (s == 1 / 0) {
            n = '5e' + e;
        } else {
            n = s.toExponential();
            n = n.slice(0, n.indexOf('e') + 1) + e;
        }
        r = new Ctor(n);
    } else {
        r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    // Newton-Raphson iteration.
    for(;;){
        t = r;
        r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
        // TODO? Replace with for-loop and checkRoundingDigits.
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
            n = n.slice(sd - 3, sd + 1);
            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
            // 4999, i.e. approaching a rounding boundary, continue the iteration.
            if (n == '9999' || !rep && n == '4999') {
                // On the first iteration only, check to see if rounding up gives the exact result as the
                // nines may infinitely repeat.
                if (!rep) {
                    finalise(t, e + 1, 0);
                    if (t.times(t).eq(x)) {
                        r = t;
                        break;
                    }
                }
                sd += 4;
                rep = 1;
            } else {
                // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
                // If not, then there are further digits and m will be truthy.
                if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                    // Truncate to the first rounding digit.
                    finalise(r, e + 1, 1);
                    m = !r.times(r).eq(x);
                }
                break;
            }
        }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
};
/*
 * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-Infinity, Infinity]
 *
 * tan(0)         = 0
 * tan(-0)        = -0
 * tan(Infinity)  = NaN
 * tan(-Infinity) = NaN
 * tan(NaN)       = NaN
 *
 */ P.tangent = P.tan = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 10;
    Ctor.rounding = 1;
    x = x.sin();
    x.s = 1;
    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
/*
 *  n * 0 = 0
 *  n * N = N
 *  n * I = I
 *  0 * n = 0
 *  0 * 0 = 0
 *  0 * N = N
 *  0 * I = N
 *  N * n = N
 *  N * 0 = N
 *  N * N = N
 *  N * I = N
 *  I * n = I
 *  I * 0 = N
 *  I * N = N
 *  I * I = I
 *
 * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 */ P.times = P.mul = function(y) {
    var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
    y.s *= x.s;
    // If either is NaN, ±Infinity or ±0...
    if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
    }
    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
    xdL = xd.length;
    ydL = yd.length;
    // Ensure xd points to the longer array.
    if (xdL < ydL) {
        r = xd;
        xd = yd;
        yd = r;
        rL = xdL;
        xdL = ydL;
        ydL = rL;
    }
    // Initialise the result array with zeros.
    r = [];
    rL = xdL + ydL;
    for(i = rL; i--;)r.push(0);
    // Multiply!
    for(i = ydL; --i >= 0;){
        carry = 0;
        for(k = xdL + i; k > i;){
            t = r[k] + yd[i] * xd[k - i - 1] + carry;
            r[k--] = t % BASE | 0;
            carry = t / BASE | 0;
        }
        r[k] = (r[k] + carry) % BASE | 0;
    }
    // Remove trailing zeros.
    for(; !r[--rL];)r.pop();
    if (carry) ++e;
    else r.shift();
    y.d = r;
    y.e = getBase10Exponent(r, e);
    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
/*
 * Return a string representing the value of this Decimal in base 2, round to `sd` significant
 * digits using rounding mode `rm`.
 *
 * If the optional `sd` argument is present then return binary exponential notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */ P.toBinary = function(sd, rm) {
    return toStringBinary(this, 2, sd, rm);
};
/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
 * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
 *
 * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */ P.toDecimalPlaces = P.toDP = function(dp, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (dp === void 0) return x;
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    return finalise(x, dp + x.e + 1, rm);
};
/*
 * Return a string representing the value of this Decimal in exponential notation rounded to
 * `dp` fixed decimal places using rounding mode `rounding`.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */ P.toExponential = function(dp, rm) {
    var str, x = this, Ctor = x.constructor;
    if (dp === void 0) {
        str = finiteToString(x, true);
    } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), dp + 1, rm);
        str = finiteToString(x, true, dp + 1);
    }
    return x.isNeg() && !x.isZero() ? '-' + str : str;
};
/*
 * Return a string representing the value of this Decimal in normal (fixed-point) notation to
 * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
 * omitted.
 *
 * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 * (-0).toFixed(3) is '0.000'.
 * (-0.5).toFixed(0) is '-0'.
 *
 */ P.toFixed = function(dp, rm) {
    var str, y, x = this, Ctor = x.constructor;
    if (dp === void 0) {
        str = finiteToString(x);
    } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        y = finalise(new Ctor(x), dp + x.e + 1, rm);
        str = finiteToString(y, false, dp + y.e + 1);
    }
    // To determine whether to add the minus sign look at the value before it was rounded,
    // i.e. look at `x` rather than `y`.
    return x.isNeg() && !x.isZero() ? '-' + str : str;
};
/*
 * Return an array representing the value of this Decimal as a simple fraction with an integer
 * numerator and an integer denominator.
 *
 * The denominator will be a positive non-zero value less than or equal to the specified maximum
 * denominator. If a maximum denominator is not specified, the denominator will be the lowest
 * value necessary to represent the number exactly.
 *
 * [maxD] {number|string|bigint|Decimal} Maximum denominator. Integer >= 1 and < Infinity.
 *
 */ P.toFraction = function(maxD) {
    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
    if (!xd) return new Ctor(x);
    n1 = d0 = new Ctor(1);
    d1 = n0 = new Ctor(0);
    d = new Ctor(d1);
    e = d.e = getPrecision(xd) - x.e - 1;
    k = e % LOG_BASE;
    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
    if (maxD == null) {
        // d is 10**e, the minimum max-denominator needed.
        maxD = e > 0 ? d : n1;
    } else {
        n = new Ctor(maxD);
        if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
        maxD = n.gt(d) ? e > 0 ? d : n1 : n;
    }
    external = false;
    n = new Ctor(digitsToString(xd));
    pr = Ctor.precision;
    Ctor.precision = e = xd.length * LOG_BASE * 2;
    for(;;){
        q = divide(n, d, 0, 1, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.cmp(maxD) == 1) break;
        d0 = d1;
        d1 = d2;
        d2 = n1;
        n1 = n0.plus(q.times(d2));
        n0 = d2;
        d2 = d;
        d = n.minus(q.times(d2));
        n = d2;
    }
    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    // Determine which fraction is closer to x, n0/d0 or n1/d1?
    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [
        n1,
        d1
    ] : [
        n0,
        d0
    ];
    Ctor.precision = pr;
    external = true;
    return r;
};
/*
 * Return a string representing the value of this Decimal in base 16, round to `sd` significant
 * digits using rounding mode `rm`.
 *
 * If the optional `sd` argument is present then return binary exponential notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */ P.toHexadecimal = P.toHex = function(sd, rm) {
    return toStringBinary(this, 16, sd, rm);
};
/*
 * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding
 * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.
 *
 * The return value will always have the same sign as this Decimal, unless either this Decimal
 * or `y` is NaN, in which case the return value will be also be NaN.
 *
 * The return value is not affected by the value of `precision`.
 *
 * y {number|string|bigint|Decimal} The magnitude to round to a multiple of.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 * 'toNearest() rounding mode not an integer: {rm}'
 * 'toNearest() rounding mode out of range: {rm}'
 *
 */ P.toNearest = function(y, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (y == null) {
        // If x is not finite, return x.
        if (!x.d) return x;
        y = new Ctor(1);
        rm = Ctor.rounding;
    } else {
        y = new Ctor(y);
        if (rm === void 0) {
            rm = Ctor.rounding;
        } else {
            checkInt32(rm, 0, 8);
        }
        // If x is not finite, return x if y is not NaN, else NaN.
        if (!x.d) return y.s ? x : y;
        // If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.
        if (!y.d) {
            if (y.s) y.s = x.s;
            return y;
        }
    }
    // If y is not zero, calculate the nearest multiple of y to x.
    if (y.d[0]) {
        external = false;
        x = divide(x, y, 0, rm, 1).times(y);
        external = true;
        finalise(x);
    // If y is zero, return zero with the sign of x.
    } else {
        y.s = x.s;
        x = y;
    }
    return x;
};
/*
 * Return the value of this Decimal converted to a number primitive.
 * Zero keeps its sign.
 *
 */ P.toNumber = function() {
    return +this;
};
/*
 * Return a string representing the value of this Decimal in base 8, round to `sd` significant
 * digits using rounding mode `rm`.
 *
 * If the optional `sd` argument is present then return binary exponential notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */ P.toOctal = function(sd, rm) {
    return toStringBinary(this, 8, sd, rm);
};
/*
 * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded
 * to `precision` significant digits using rounding mode `rounding`.
 *
 * ECMAScript compliant.
 *
 *   pow(x, NaN)                           = NaN
 *   pow(x, ±0)                            = 1

 *   pow(NaN, non-zero)                    = NaN
 *   pow(abs(x) > 1, +Infinity)            = +Infinity
 *   pow(abs(x) > 1, -Infinity)            = +0
 *   pow(abs(x) == 1, ±Infinity)           = NaN
 *   pow(abs(x) < 1, +Infinity)            = +0
 *   pow(abs(x) < 1, -Infinity)            = +Infinity
 *   pow(+Infinity, y > 0)                 = +Infinity
 *   pow(+Infinity, y < 0)                 = +0
 *   pow(-Infinity, odd integer > 0)       = -Infinity
 *   pow(-Infinity, even integer > 0)      = +Infinity
 *   pow(-Infinity, odd integer < 0)       = -0
 *   pow(-Infinity, even integer < 0)      = +0
 *   pow(+0, y > 0)                        = +0
 *   pow(+0, y < 0)                        = +Infinity
 *   pow(-0, odd integer > 0)              = -0
 *   pow(-0, even integer > 0)             = +0
 *   pow(-0, odd integer < 0)              = -Infinity
 *   pow(-0, even integer < 0)             = +Infinity
 *   pow(finite x < 0, finite non-integer) = NaN
 *
 * For non-integer or very large exponents pow(x, y) is calculated using
 *
 *   x^y = exp(y*ln(x))
 *
 * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the
 * probability of an incorrectly rounded result
 * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14
 * i.e. 1 in 250,000,000,000,000
 *
 * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).
 *
 * y {number|string|bigint|Decimal} The power to which to raise this Decimal.
 *
 */ P.toPower = P.pow = function(y) {
    var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
    // Either ±Infinity, NaN or ±0?
    if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
    x = new Ctor(x);
    if (x.eq(1)) return x;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (y.eq(1)) return finalise(x, pr, rm);
    // y exponent
    e = mathfloor(y.e / LOG_BASE);
    // If y is a small integer use the 'exponentiation by squaring' algorithm.
    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
        r = intPow(Ctor, x, k, pr);
        return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
    }
    s = x.s;
    // if x is negative
    if (s < 0) {
        // if y is not an integer
        if (e < y.d.length - 1) return new Ctor(NaN);
        // Result is positive if x is negative and the last digit of integer y is even.
        if ((y.d[e] & 1) == 0) s = 1;
        // if x.eq(-1)
        if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
            x.s = s;
            return x;
        }
    }
    // Estimate result exponent.
    // x^y = 10^e,  where e = y * log10(x)
    // log10(x) = log10(x_significand) + x_exponent
    // log10(x_significand) = ln(x_significand) / ln(10)
    k = mathpow(+x, yn);
    e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + '').e;
    // Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.
    // Overflow/underflow?
    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
    external = false;
    Ctor.rounding = x.s = 1;
    // Estimate the extra guard digits needed to ensure five correct rounding digits from
    // naturalLogarithm(x). Example of failure without these extra digits (precision: 10):
    // new Decimal(2.32456).pow('2087987436534566.46411')
    // should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815
    k = Math.min(12, (e + '').length);
    // r = x^y = exp(y*ln(x))
    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
    // r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)
    if (r.d) {
        // Truncate to the required precision plus five rounding digits.
        r = finalise(r, pr + 5, 1);
        // If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate
        // the result.
        if (checkRoundingDigits(r.d, pr, rm)) {
            e = pr + 10;
            // Truncate to the increased precision plus five rounding digits.
            r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
            // Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).
            if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
                r = finalise(r, pr + 1, 0);
            }
        }
    }
    r.s = s;
    external = true;
    Ctor.rounding = rm;
    return finalise(r, pr, rm);
};
/*
 * Return a string representing the value of this Decimal rounded to `sd` significant digits
 * using rounding mode `rounding`.
 *
 * Return exponential notation if `sd` is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */ P.toPrecision = function(sd, rm) {
    var str, x = this, Ctor = x.constructor;
    if (sd === void 0) {
        str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), sd, rm);
        str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
    }
    return x.isNeg() && !x.isZero() ? '-' + str : str;
};
/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
 * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
 * omitted.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 * 'toSD() digits out of range: {sd}'
 * 'toSD() digits not an integer: {sd}'
 * 'toSD() rounding mode not an integer: {rm}'
 * 'toSD() rounding mode out of range: {rm}'
 *
 */ P.toSignificantDigits = P.toSD = function(sd, rm) {
    var x = this, Ctor = x.constructor;
    if (sd === void 0) {
        sd = Ctor.precision;
        rm = Ctor.rounding;
    } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
    }
    return finalise(new Ctor(x), sd, rm);
};
/*
 * Return a string representing the value of this Decimal.
 *
 * Return exponential notation if this Decimal has a positive exponent equal to or greater than
 * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
 *
 */ P.toString = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() && !x.isZero() ? '-' + str : str;
};
/*
 * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
 *
 */ P.truncated = P.trunc = function() {
    return finalise(new this.constructor(this), this.e + 1, 1);
};
/*
 * Return a string representing the value of this Decimal.
 * Unlike `toString`, negative zero will include the minus sign.
 *
 */ P.valueOf = P.toJSON = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() ? '-' + str : str;
};
// Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.
/*
 *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,
 *                           finiteToString, naturalExponential, naturalLogarithm
 *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,
 *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random
 *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm
 *  convertBase              toStringBinary, parseOther
 *  cos                      P.cos
 *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,
 *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,
 *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,
 *                           taylorSeries, atan2, parseOther
 *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,
 *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,
 *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,
 *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,
 *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,
 *                           P.truncated, divide, getLn10, getPi, naturalExponential,
 *                           naturalLogarithm, ceil, floor, round, trunc
 *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,
 *                           toStringBinary
 *  getBase10Exponent        P.minus, P.plus, P.times, parseOther
 *  getLn10                  P.logarithm, naturalLogarithm
 *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2
 *  getPrecision             P.precision, P.toFraction
 *  getZeroString            digitsToString, finiteToString
 *  intPow                   P.toPower, parseOther
 *  isOdd                    toLessThanHalfPi
 *  maxOrMin                 max, min
 *  naturalExponential       P.naturalExponential, P.toPower
 *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,
 *                           P.toPower, naturalExponential
 *  nonFiniteToString        finiteToString, toStringBinary
 *  parseDecimal             Decimal
 *  parseOther               Decimal
 *  sin                      P.sin
 *  taylorSeries             P.cosh, P.sinh, cos, sin
 *  toLessThanHalfPi         P.cos, P.sin
 *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal
 *  truncate                 intPow
 *
 *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,
 *                           naturalLogarithm, config, parseOther, random, Decimal
 */ function digitsToString(d) {
    var i, k, ws, indexOfLastWord = d.length - 1, str = '', w = d[0];
    if (indexOfLastWord > 0) {
        str += w;
        for(i = 1; i < indexOfLastWord; i++){
            ws = d[i] + '';
            k = LOG_BASE - ws.length;
            if (k) str += getZeroString(k);
            str += ws;
        }
        w = d[i];
        ws = w + '';
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
    } else if (w === 0) {
        return '0';
    }
    // Remove trailing zeros of last w.
    for(; w % 10 === 0;)w /= 10;
    return str + w;
}
function checkInt32(i, min, max) {
    if (i !== ~~i || i < min || i > max) {
        throw Error(invalidArgument + i);
    }
}
/*
 * Check 5 rounding digits if `repeating` is null, 4 otherwise.
 * `repeating == null` if caller is `log` or `pow`,
 * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.
 */ function checkRoundingDigits(d, i, rm, repeating) {
    var di, k, r, rd;
    // Get the length of the first word of the array d.
    for(k = d[0]; k >= 10; k /= 10)--i;
    // Is the rounding digit in the first word of d?
    if (--i < 0) {
        i += LOG_BASE;
        di = 0;
    } else {
        di = Math.ceil((i + 1) / LOG_BASE);
        i %= LOG_BASE;
    }
    // i is the index (0 - 6) of the rounding digit.
    // E.g. if within the word 3487563 the first rounding digit is 5,
    // then i = 4, k = 1000, rd = 3487563 % 1000 = 563
    k = mathpow(10, LOG_BASE - i);
    rd = d[di] % k | 0;
    if (repeating == null) {
        if (i < 3) {
            if (i == 0) rd = rd / 100 | 0;
            else if (i == 1) rd = rd / 10 | 0;
            r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
        } else {
            r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
        }
    } else {
        if (i < 4) {
            if (i == 0) rd = rd / 1000 | 0;
            else if (i == 1) rd = rd / 100 | 0;
            else if (i == 2) rd = rd / 10 | 0;
            r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else {
            r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
        }
    }
    return r;
}
// Convert string of `baseIn` to an array of numbers of `baseOut`.
// Eg. convertBase('255', 10, 16) returns [15, 15].
// Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
function convertBase(str, baseIn, baseOut) {
    var j, arr = [
        0
    ], arrL, i = 0, strL = str.length;
    for(; i < strL;){
        for(arrL = arr.length; arrL--;)arr[arrL] *= baseIn;
        arr[0] += NUMERALS.indexOf(str.charAt(i++));
        for(j = 0; j < arr.length; j++){
            if (arr[j] > baseOut - 1) {
                if (arr[j + 1] === void 0) arr[j + 1] = 0;
                arr[j + 1] += arr[j] / baseOut | 0;
                arr[j] %= baseOut;
            }
        }
    }
    return arr.reverse();
}
/*
 * cos(x) = 1 - x^2/2! + x^4/4! - ...
 * |x| < pi/2
 *
 */ function cosine(Ctor, x) {
    var k, len, y;
    if (x.isZero()) return x;
    // Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1
    // i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1
    // Estimate the optimum number of times to use the argument reduction.
    len = x.d.length;
    if (len < 32) {
        k = Math.ceil(len / 3);
        y = (1 / tinyPow(4, k)).toString();
    } else {
        k = 16;
        y = '2.3283064365386962890625e-10';
    }
    Ctor.precision += k;
    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
    // Reverse argument reduction
    for(var i = k; i--;){
        var cos2x = x.times(x);
        x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
    }
    Ctor.precision -= k;
    return x;
}
/*
 * Perform division in the specified base.
 */ var divide = function() {
    // Assumes non-zero x and k, and hence non-zero result.
    function multiplyInteger(x, k, base) {
        var temp, carry = 0, i = x.length;
        for(x = x.slice(); i--;){
            temp = x[i] * k + carry;
            x[i] = temp % base | 0;
            carry = temp / base | 0;
        }
        if (carry) x.unshift(carry);
        return x;
    }
    function compare(a, b, aL, bL) {
        var i, r;
        if (aL != bL) {
            r = aL > bL ? 1 : -1;
        } else {
            for(i = r = 0; i < aL; i++){
                if (a[i] != b[i]) {
                    r = a[i] > b[i] ? 1 : -1;
                    break;
                }
            }
        }
        return r;
    }
    function subtract(a, b, aL, base) {
        var i = 0;
        // Subtract b from a.
        for(; aL--;){
            a[aL] -= i;
            i = a[aL] < b[aL] ? 1 : 0;
            a[aL] = i * base + a[aL] - b[aL];
        }
        // Remove leading zeros.
        for(; !a[0] && a.length > 1;)a.shift();
    }
    return function(x, y, pr, rm, dp, base) {
        var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
        // Either NaN, Infinity or 0?
        if (!xd || !xd[0] || !yd || !yd[0]) {
            return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
            xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
        }
        if (base) {
            logBase = 1;
            e = x.e - y.e;
        } else {
            base = BASE;
            logBase = LOG_BASE;
            e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
        }
        yL = yd.length;
        xL = xd.length;
        q = new Ctor(sign);
        qd = q.d = [];
        // Result exponent may be one less than e.
        // The digit array of a Decimal from toStringBinary may have trailing zeros.
        for(i = 0; yd[i] == (xd[i] || 0); i++);
        if (yd[i] > (xd[i] || 0)) e--;
        if (pr == null) {
            sd = pr = Ctor.precision;
            rm = Ctor.rounding;
        } else if (dp) {
            sd = pr + (x.e - y.e) + 1;
        } else {
            sd = pr;
        }
        if (sd < 0) {
            qd.push(1);
            more = true;
        } else {
            // Convert precision in number of base 10 digits to base 1e7 digits.
            sd = sd / logBase + 2 | 0;
            i = 0;
            // divisor < 1e7
            if (yL == 1) {
                k = 0;
                yd = yd[0];
                sd++;
                // k is the carry.
                for(; (i < xL || k) && sd--; i++){
                    t = k * base + (xd[i] || 0);
                    qd[i] = t / yd | 0;
                    k = t % yd | 0;
                }
                more = k || i < xL;
            // divisor >= 1e7
            } else {
                // Normalise xd and yd so highest order digit of yd is >= base/2
                k = base / (yd[0] + 1) | 0;
                if (k > 1) {
                    yd = multiplyInteger(yd, k, base);
                    xd = multiplyInteger(xd, k, base);
                    yL = yd.length;
                    xL = xd.length;
                }
                xi = yL;
                rem = xd.slice(0, yL);
                remL = rem.length;
                // Add zeros to make remainder as long as divisor.
                for(; remL < yL;)rem[remL++] = 0;
                yz = yd.slice();
                yz.unshift(0);
                yd0 = yd[0];
                if (yd[1] >= base / 2) ++yd0;
                do {
                    k = 0;
                    // Compare divisor and remainder.
                    cmp = compare(yd, rem, yL, remL);
                    // If divisor < remainder.
                    if (cmp < 0) {
                        // Calculate trial digit, k.
                        rem0 = rem[0];
                        if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                        // k will be how many times the divisor goes into the current remainder.
                        k = rem0 / yd0 | 0;
                        //  Algorithm:
                        //  1. product = divisor * trial digit (k)
                        //  2. if product > remainder: product -= divisor, k--
                        //  3. remainder -= product
                        //  4. if product was < remainder at 2:
                        //    5. compare new remainder and divisor
                        //    6. If remainder > divisor: remainder -= divisor, k++
                        if (k > 1) {
                            if (k >= base) k = base - 1;
                            // product = divisor * trial digit.
                            prod = multiplyInteger(yd, k, base);
                            prodL = prod.length;
                            remL = rem.length;
                            // Compare product and remainder.
                            cmp = compare(prod, rem, prodL, remL);
                            // product > remainder.
                            if (cmp == 1) {
                                k--;
                                // Subtract divisor from product.
                                subtract(prod, yL < prodL ? yz : yd, prodL, base);
                            }
                        } else {
                            // cmp is -1.
                            // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
                            // to avoid it. If k is 1 there is a need to compare yd and rem again below.
                            if (k == 0) cmp = k = 1;
                            prod = yd.slice();
                        }
                        prodL = prod.length;
                        if (prodL < remL) prod.unshift(0);
                        // Subtract product from remainder.
                        subtract(rem, prod, remL, base);
                        // If product was < previous remainder.
                        if (cmp == -1) {
                            remL = rem.length;
                            // Compare divisor and new remainder.
                            cmp = compare(yd, rem, yL, remL);
                            // If divisor < new remainder, subtract divisor from remainder.
                            if (cmp < 1) {
                                k++;
                                // Subtract divisor from remainder.
                                subtract(rem, yL < remL ? yz : yd, remL, base);
                            }
                        }
                        remL = rem.length;
                    } else if (cmp === 0) {
                        k++;
                        rem = [
                            0
                        ];
                    } // if cmp === 1, k will be 0
                    // Add the next digit, k, to the result array.
                    qd[i++] = k;
                    // Update the remainder.
                    if (cmp && rem[0]) {
                        rem[remL++] = xd[xi] || 0;
                    } else {
                        rem = [
                            xd[xi]
                        ];
                        remL = 1;
                    }
                }while ((xi++ < xL || rem[0] !== void 0) && sd--)
                more = rem[0] !== void 0;
            }
            // Leading zero?
            if (!qd[0]) qd.shift();
        }
        // logBase is 1 when divide is being used for base conversion.
        if (logBase == 1) {
            q.e = e;
            inexact = more;
        } else {
            // To calculate q.e, first get the number of digits of qd[0].
            for(i = 1, k = qd[0]; k >= 10; k /= 10)i++;
            q.e = i + e * logBase - 1;
            finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
    };
}();
/*
 * Round `x` to `sd` significant digits using rounding mode `rm`.
 * Check for over/under-flow.
 */ function finalise(x, sd, rm, isTruncated) {
    var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
    // Don't round if sd is null or undefined.
    out: if (sd != null) {
        xd = x.d;
        // Infinity/NaN.
        if (!xd) return x;
        // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
        // w: the word of xd containing rd, a base 1e7 number.
        // xdi: the index of w within xd.
        // digits: the number of digits of w.
        // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
        // they had leading zeros)
        // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).
        // Get the length of the first word of the digits array xd.
        for(digits = 1, k = xd[0]; k >= 10; k /= 10)digits++;
        i = sd - digits;
        // Is the rounding digit in the first word of xd?
        if (i < 0) {
            i += LOG_BASE;
            j = sd;
            w = xd[xdi = 0];
            // Get the rounding digit at index j of w.
            rd = w / mathpow(10, digits - j - 1) % 10 | 0;
        } else {
            xdi = Math.ceil((i + 1) / LOG_BASE);
            k = xd.length;
            if (xdi >= k) {
                if (isTruncated) {
                    // Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.
                    for(; k++ <= xdi;)xd.push(0);
                    w = rd = 0;
                    digits = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                } else {
                    break out;
                }
            } else {
                w = k = xd[xdi];
                // Get the number of digits of w.
                for(digits = 1; k >= 10; k /= 10)digits++;
                // Get the index of rd within w.
                i %= LOG_BASE;
                // Get the index of rd within w, adjusted for leading zeros.
                // The number of leading zeros of w is given by LOG_BASE - digits.
                j = i - LOG_BASE + digits;
                // Get the rounding digit at index j of w.
                rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
            }
        }
        // Are there any non-zero digits after the rounding digit?
        isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
        // The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right
        // of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression
        // will give 714.
        roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xd[0]) {
            xd.length = 0;
            if (roundUp) {
                // Convert sd to decimal places.
                sd -= x.e + 1;
                // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
                x.e = -sd || 0;
            } else {
                // Zero.
                xd[0] = x.e = 0;
            }
            return x;
        }
        // Remove excess digits.
        if (i == 0) {
            xd.length = xdi;
            k = 1;
            xdi--;
        } else {
            xd.length = xdi + 1;
            k = mathpow(10, LOG_BASE - i);
            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of w.
            xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
        }
        if (roundUp) {
            for(;;){
                // Is the digit to be rounded up in the first word of xd?
                if (xdi == 0) {
                    // i will be the length of xd[0] before k is added.
                    for(i = 1, j = xd[0]; j >= 10; j /= 10)i++;
                    j = xd[0] += k;
                    for(k = 1; j >= 10; j /= 10)k++;
                    // if i != k the length has increased.
                    if (i != k) {
                        x.e++;
                        if (xd[0] == BASE) xd[0] = 1;
                    }
                    break;
                } else {
                    xd[xdi] += k;
                    if (xd[xdi] != BASE) break;
                    xd[xdi--] = 0;
                    k = 1;
                }
            }
        }
        // Remove trailing zeros.
        for(i = xd.length; xd[--i] === 0;)xd.pop();
    }
    if (external) {
        // Overflow?
        if (x.e > Ctor.maxE) {
            // Infinity.
            x.d = null;
            x.e = NaN;
        // Underflow?
        } else if (x.e < Ctor.minE) {
            // Zero.
            x.e = 0;
            x.d = [
                0
            ];
        // Ctor.underflow = true;
        } // else Ctor.underflow = false;
    }
    return x;
}
function finiteToString(x, isExp, sd) {
    if (!x.isFinite()) return nonFiniteToString(x);
    var k, e = x.e, str = digitsToString(x.d), len = str.length;
    if (isExp) {
        if (sd && (k = sd - len) > 0) {
            str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
        } else if (len > 1) {
            str = str.charAt(0) + '.' + str.slice(1);
        }
        str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
    } else if (e < 0) {
        str = '0.' + getZeroString(-e - 1) + str;
        if (sd && (k = sd - len) > 0) str += getZeroString(k);
    } else if (e >= len) {
        str += getZeroString(e + 1 - len);
        if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
    } else {
        if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
        if (sd && (k = sd - len) > 0) {
            if (e + 1 === len) str += '.';
            str += getZeroString(k);
        }
    }
    return str;
}
// Calculate the base 10 exponent from the base 1e7 exponent.
function getBase10Exponent(digits, e) {
    var w = digits[0];
    // Add the number of digits of the first word of the digits array.
    for(e *= LOG_BASE; w >= 10; w /= 10)e++;
    return e;
}
function getLn10(Ctor, sd, pr) {
    if (sd > LN10_PRECISION) {
        // Reset global state in case the exception is caught.
        external = true;
        if (pr) Ctor.precision = pr;
        throw Error(precisionLimitExceeded);
    }
    return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
    if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
    return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
    var w = digits.length - 1, len = w * LOG_BASE + 1;
    w = digits[w];
    // If non-zero...
    if (w) {
        // Subtract the number of trailing zeros of the last word.
        for(; w % 10 == 0; w /= 10)len--;
        // Add the number of digits of the first word.
        for(w = digits[0]; w >= 10; w /= 10)len++;
    }
    return len;
}
function getZeroString(k) {
    var zs = '';
    for(; k--;)zs += '0';
    return zs;
}
/*
 * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an
 * integer of type number.
 *
 * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.
 *
 */ function intPow(Ctor, x, n, pr) {
    var isTruncated, r = new Ctor(1), // Max n of 9007199254740991 takes 53 loop iterations.
    // Maximum digits array length; leaves [28, 34] guard digits.
    k = Math.ceil(pr / LOG_BASE + 4);
    external = false;
    for(;;){
        if (n % 2) {
            r = r.times(x);
            if (truncate(r.d, k)) isTruncated = true;
        }
        n = mathfloor(n / 2);
        if (n === 0) {
            // To ensure correct rounding when r.d is truncated, increment the last word if it is zero.
            n = r.d.length - 1;
            if (isTruncated && r.d[n] === 0) ++r.d[n];
            break;
        }
        x = x.times(x);
        truncate(x.d, k);
    }
    external = true;
    return r;
}
function isOdd(n) {
    return n.d[n.d.length - 1] & 1;
}
/*
 * Handle `max` (`n` is -1) and `min` (`n` is 1).
 */ function maxOrMin(Ctor, args, n) {
    var k, y, x = new Ctor(args[0]), i = 0;
    for(; ++i < args.length;){
        y = new Ctor(args[i]);
        // NaN?
        if (!y.s) {
            x = y;
            break;
        }
        k = x.cmp(y);
        if (k === n || k === 0 && x.s === n) {
            x = y;
        }
    }
    return x;
}
/*
 * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant
 * digits.
 *
 * Taylor/Maclaurin series.
 *
 * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
 *
 * Argument reduction:
 *   Repeat x = x / 32, k += 5, until |x| < 0.1
 *   exp(x) = exp(x / 2^k)^(2^k)
 *
 * Previously, the argument was initially reduced by
 * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
 * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
 * found to be slower than just dividing repeatedly by 32 as above.
 *
 * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000
 * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000
 * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
 *
 *  exp(Infinity)  = Infinity
 *  exp(-Infinity) = 0
 *  exp(NaN)       = NaN
 *  exp(±0)        = 1
 *
 *  exp(x) is non-terminating for any finite, non-zero x.
 *
 *  The result will always be correctly rounded.
 *
 */ function naturalExponential(x, sd) {
    var denominator, guard, j, pow, sum, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
    // 0/NaN/Infinity?
    if (!x.d || !x.d[0] || x.e > 17) {
        return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
    }
    if (sd == null) {
        external = false;
        wpr = pr;
    } else {
        wpr = sd;
    }
    t = new Ctor(0.03125);
    // while abs(x) >= 0.1
    while(x.e > -2){
        // x = x / 2^5
        x = x.times(t);
        k += 5;
    }
    // Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision
    // necessary to ensure the first 4 rounding digits are correct.
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow = sum = new Ctor(1);
    Ctor.precision = wpr;
    for(;;){
        pow = finalise(pow.times(x), wpr, 1);
        denominator = denominator.times(++i);
        t = sum.plus(divide(pow, denominator, wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
            j = k;
            while(j--)sum = finalise(sum.times(sum), wpr, 1);
            // Check to see if the first 4 rounding digits are [49]999.
            // If so, repeat the summation with a higher precision, otherwise
            // e.g. with precision: 18, rounding: 1
            // exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)
            // `wpr - guard` is the index of first rounding digit.
            if (sd == null) {
                if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
                    Ctor.precision = wpr += 10;
                    denominator = pow = t = new Ctor(1);
                    i = 0;
                    rep++;
                } else {
                    return finalise(sum, Ctor.precision = pr, rm, external = true);
                }
            } else {
                Ctor.precision = pr;
                return sum;
            }
        }
        sum = t;
    }
}
/*
 * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant
 * digits.
 *
 *  ln(-n)        = NaN
 *  ln(0)         = -Infinity
 *  ln(-0)        = -Infinity
 *  ln(1)         = 0
 *  ln(Infinity)  = Infinity
 *  ln(-Infinity) = NaN
 *  ln(NaN)       = NaN
 *
 *  ln(n) (n != 1) is non-terminating.
 *
 */ function naturalLogarithm(y, sd) {
    var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
    // Is x negative or Infinity, NaN, 0 or 1?
    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
        return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
    }
    if (sd == null) {
        external = false;
        wpr = pr;
    } else {
        wpr = sd;
    }
    Ctor.precision = wpr += guard;
    c = digitsToString(xd);
    c0 = c.charAt(0);
    if (Math.abs(e = x.e) < 1.5e15) {
        // Argument reduction.
        // The series converges faster the closer the argument is to 1, so using
        // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
        // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
        // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
        // later be divided by this number, then separate out the power of 10 using
        // ln(a*10^b) = ln(a) + b*ln(10).
        // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
        //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
        // max n is 6 (gives 0.7 - 1.3)
        while(c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3){
            x = x.times(y);
            c = digitsToString(x.d);
            c0 = c.charAt(0);
            n++;
        }
        e = x.e;
        if (c0 > 1) {
            x = new Ctor('0.' + c);
            e++;
        } else {
            x = new Ctor(c0 + '.' + c.slice(1));
        }
    } else {
        // The argument reduction method above may result in overflow if the argument y is a massive
        // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
        // function using ln(x*10^e) = ln(x) + e*ln(10).
        t = getLn10(Ctor, wpr + 2, pr).times(e + '');
        x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
        Ctor.precision = pr;
        return sd == null ? finalise(x, pr, rm, external = true) : x;
    }
    // x1 is x reduced to a value near 1.
    x1 = x;
    // Taylor series.
    // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
    // where x = (y - 1)/(y + 1)    (|x| < 1)
    sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
    x2 = finalise(x.times(x), wpr, 1);
    denominator = 3;
    for(;;){
        numerator = finalise(numerator.times(x2), wpr, 1);
        t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
            sum = sum.times(2);
            // Reverse the argument reduction. Check that e is not 0 because, besides preventing an
            // unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.
            if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
            sum = divide(sum, new Ctor(n), wpr, 1);
            // Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has
            // been repeated previously) and the first 4 rounding digits 9999?
            // If so, restart the summation with a higher precision, otherwise
            // e.g. with precision: 12, rounding: 1
            // ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.
            // `wpr - guard` is the index of first rounding digit.
            if (sd == null) {
                if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
                    Ctor.precision = wpr += guard;
                    t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
                    x2 = finalise(x.times(x), wpr, 1);
                    denominator = rep = 1;
                } else {
                    return finalise(sum, Ctor.precision = pr, rm, external = true);
                }
            } else {
                Ctor.precision = pr;
                return sum;
            }
        }
        sum = t;
        denominator += 2;
    }
}
// ±Infinity, NaN.
function nonFiniteToString(x) {
    // Unsigned.
    return String(x.s * x.s / 0);
}
/*
 * Parse the value of a new Decimal `x` from string `str`.
 */ function parseDecimal(x, str) {
    var e, i, len;
    // TODO BigInt str: no need to check for decimal point, exponential form or leading zeros.
    // Decimal point?
    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
    // Exponential form?
    if ((i = str.search(/e/i)) > 0) {
        // Determine exponent.
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
    } else if (e < 0) {
        // Integer.
        e = str.length;
    }
    // Determine leading zeros.
    for(i = 0; str.charCodeAt(i) === 48; i++);
    // Determine trailing zeros.
    for(len = str.length; str.charCodeAt(len - 1) === 48; --len);
    str = str.slice(i, len);
    if (str) {
        len -= i;
        x.e = e = e - i - 1;
        x.d = [];
        // Transform base
        // e is the base 10 exponent.
        // i is where to slice str to get the first word of the digits array.
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;
        if (i < len) {
            if (i) x.d.push(+str.slice(0, i));
            for(len -= LOG_BASE; i < len;)x.d.push(+str.slice(i, i += LOG_BASE));
            str = str.slice(i);
            i = LOG_BASE - str.length;
        } else {
            i -= len;
        }
        for(; i--;)str += '0';
        x.d.push(+str);
        if (external) {
            // Overflow?
            if (x.e > x.constructor.maxE) {
                // Infinity.
                x.d = null;
                x.e = NaN;
            // Underflow?
            } else if (x.e < x.constructor.minE) {
                // Zero.
                x.e = 0;
                x.d = [
                    0
                ];
            // x.constructor.underflow = true;
            } // else x.constructor.underflow = false;
        }
    } else {
        // Zero.
        x.e = 0;
        x.d = [
            0
        ];
    }
    return x;
}
/*
 * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.
 */ function parseOther(x, str) {
    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
    if (str.indexOf('_') > -1) {
        str = str.replace(/(\d)_(?=\d)/g, '$1');
        if (isDecimal.test(str)) return parseDecimal(x, str);
    } else if (str === 'Infinity' || str === 'NaN') {
        if (!+str) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return x;
    }
    if (isHex.test(str)) {
        base = 16;
        str = str.toLowerCase();
    } else if (isBinary.test(str)) {
        base = 2;
    } else if (isOctal.test(str)) {
        base = 8;
    } else {
        throw Error(invalidArgument + str);
    }
    // Is there a binary exponent part?
    i = str.search(/p/i);
    if (i > 0) {
        p = +str.slice(i + 1);
        str = str.substring(2, i);
    } else {
        str = str.slice(2);
    }
    // Convert `str` as an integer then divide the result by `base` raised to a power such that the
    // fraction part will be restored.
    i = str.indexOf('.');
    isFloat = i >= 0;
    Ctor = x.constructor;
    if (isFloat) {
        str = str.replace('.', '');
        len = str.length;
        i = len - i;
        // log[10](16) = 1.2041... , log[10](88) = 1.9444....
        divisor = intPow(Ctor, new Ctor(base), i, i * 2);
    }
    xd = convertBase(str, base, BASE);
    xe = xd.length - 1;
    // Remove trailing zeros.
    for(i = xe; xd[i] === 0; --i)xd.pop();
    if (i < 0) return new Ctor(x.s * 0);
    x.e = getBase10Exponent(xd, xe);
    x.d = xd;
    external = false;
    // At what precision to perform the division to ensure exact conversion?
    // maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)
    // log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412
    // E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.
    // maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount
    // Therefore using 4 * the number of digits of str will always be enough.
    if (isFloat) x = divide(x, divisor, len * 4);
    // Multiply by the binary exponent part if present.
    if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
    external = true;
    return x;
}
/*
 * sin(x) = x - x^3/3! + x^5/5! - ...
 * |x| < pi/2
 *
 */ function sine(Ctor, x) {
    var k, len = x.d.length;
    if (len < 3) {
        return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
    }
    // Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)
    // i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)
    // and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))
    // Estimate the optimum number of times to use the argument reduction.
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x);
    // Reverse argument reduction
    var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for(; k--;){
        sin2_x = x.times(x);
        x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
    }
    return x;
}
// Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
    var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
    external = false;
    x2 = x.times(x);
    u = new Ctor(y);
    for(;;){
        t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
        u = isHyperbolic ? y.plus(t) : y.minus(t);
        y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
        t = u.plus(y);
        if (t.d[k] !== void 0) {
            for(j = k; t.d[j] === u.d[j] && j--;);
            if (j == -1) break;
        }
        j = u;
        u = y;
        y = t;
        t = j;
        i++;
    }
    external = true;
    t.d.length = k + 1;
    return t;
}
// Exponent e must be positive and non-zero.
function tinyPow(b, e) {
    var n = b;
    while(--e)n *= b;
    return n;
}
// Return the absolute value of `x` reduced to less than or equal to half pi.
function toLessThanHalfPi(Ctor, x) {
    var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
    x = x.abs();
    if (x.lte(halfPi)) {
        quadrant = isNeg ? 4 : 1;
        return x;
    }
    t = x.divToInt(pi);
    if (t.isZero()) {
        quadrant = isNeg ? 3 : 2;
    } else {
        x = x.minus(t.times(pi));
        // 0 <= x < pi
        if (x.lte(halfPi)) {
            quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
            return x;
        }
        quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
    }
    return x.minus(pi).abs();
}
/*
 * Return the value of Decimal `x` as a string in base `baseOut`.
 *
 * If the optional `sd` argument is present include a binary exponent suffix.
 */ function toStringBinary(x, baseOut, sd, rm) {
    var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
    if (isExp) {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
    } else {
        sd = Ctor.precision;
        rm = Ctor.rounding;
    }
    if (!x.isFinite()) {
        str = nonFiniteToString(x);
    } else {
        str = finiteToString(x);
        i = str.indexOf('.');
        // Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:
        // maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))
        // minBinaryExponent = floor(decimalExponent * log[2](10))
        // log[2](10) = 3.321928094887362347870319429489390175864
        if (isExp) {
            base = 2;
            if (baseOut == 16) {
                sd = sd * 4 - 3;
            } else if (baseOut == 8) {
                sd = sd * 3 - 2;
            }
        } else {
            base = baseOut;
        }
        // Convert the number as an integer then divide the result by its base raised to a power such
        // that the fraction part will be restored.
        // Non-integer.
        if (i >= 0) {
            str = str.replace('.', '');
            y = new Ctor(1);
            y.e = str.length - i;
            y.d = convertBase(finiteToString(y), 10, base);
            y.e = y.d.length;
        }
        xd = convertBase(str, 10, base);
        e = len = xd.length;
        // Remove trailing zeros.
        for(; xd[--len] == 0;)xd.pop();
        if (!xd[0]) {
            str = isExp ? '0p+0' : '0';
        } else {
            if (i < 0) {
                e--;
            } else {
                x = new Ctor(x);
                x.d = xd;
                x.e = e;
                x = divide(x, y, sd, rm, 0, base);
                xd = x.d;
                e = x.e;
                roundUp = inexact;
            }
            // The rounding digit, i.e. the digit after the digit that may be rounded up.
            i = xd[sd];
            k = base / 2;
            roundUp = roundUp || xd[sd + 1] !== void 0;
            roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
            xd.length = sd;
            if (roundUp) {
                // Rounding up may mean the previous digit has to be rounded up and so on.
                for(; ++xd[--sd] > base - 1;){
                    xd[sd] = 0;
                    if (!sd) {
                        ++e;
                        xd.unshift(1);
                    }
                }
            }
            // Determine trailing zeros.
            for(len = xd.length; !xd[len - 1]; --len);
            // E.g. [4, 11, 15] becomes 4bf.
            for(i = 0, str = ''; i < len; i++)str += NUMERALS.charAt(xd[i]);
            // Add binary exponent suffix?
            if (isExp) {
                if (len > 1) {
                    if (baseOut == 16 || baseOut == 8) {
                        i = baseOut == 16 ? 4 : 3;
                        for(--len; len % i; len++)str += '0';
                        xd = convertBase(str, base, baseOut);
                        for(len = xd.length; !xd[len - 1]; --len);
                        // xd[0] will always be be 1
                        for(i = 1, str = '1.'; i < len; i++)str += NUMERALS.charAt(xd[i]);
                    } else {
                        str = str.charAt(0) + '.' + str.slice(1);
                    }
                }
                str = str + (e < 0 ? 'p' : 'p+') + e;
            } else if (e < 0) {
                for(; ++e;)str = '0' + str;
                str = '0.' + str;
            } else {
                if (++e > len) for(e -= len; e--;)str += '0';
                else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
            }
        }
        str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
    }
    return x.s < 0 ? '-' + str : str;
}
// Does not strip trailing zeros.
function truncate(arr, len) {
    if (arr.length > len) {
        arr.length = len;
        return true;
    }
}
// Decimal methods
/*
 *  abs
 *  acos
 *  acosh
 *  add
 *  asin
 *  asinh
 *  atan
 *  atanh
 *  atan2
 *  cbrt
 *  ceil
 *  clamp
 *  clone
 *  config
 *  cos
 *  cosh
 *  div
 *  exp
 *  floor
 *  hypot
 *  ln
 *  log
 *  log2
 *  log10
 *  max
 *  min
 *  mod
 *  mul
 *  pow
 *  random
 *  round
 *  set
 *  sign
 *  sin
 *  sinh
 *  sqrt
 *  sub
 *  sum
 *  tan
 *  tanh
 *  trunc
 */ /*
 * Return a new Decimal whose value is the absolute value of `x`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function abs(x) {
    return new this(x).abs();
}
/*
 * Return a new Decimal whose value is the arccosine in radians of `x`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function acos(x) {
    return new this(x).acos();
}
/*
 * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */ function acosh(x) {
    return new this(x).acosh();
}
/*
 * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */ function add(x, y) {
    return new this(x).plus(y);
}
/*
 * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function asin(x) {
    return new this(x).asin();
}
/*
 * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */ function asinh(x) {
    return new this(x).asinh();
}
/*
 * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function atan(x) {
    return new this(x).atan();
}
/*
 * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */ function atanh(x) {
    return new this(x).atanh();
}
/*
 * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
 * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-pi, pi]
 *
 * y {number|string|bigint|Decimal} The y-coordinate.
 * x {number|string|bigint|Decimal} The x-coordinate.
 *
 * atan2(±0, -0)               = ±pi
 * atan2(±0, +0)               = ±0
 * atan2(±0, -x)               = ±pi for x > 0
 * atan2(±0, x)                = ±0 for x > 0
 * atan2(-y, ±0)               = -pi/2 for y > 0
 * atan2(y, ±0)                = pi/2 for y > 0
 * atan2(±y, -Infinity)        = ±pi for finite y > 0
 * atan2(±y, +Infinity)        = ±0 for finite y > 0
 * atan2(±Infinity, x)         = ±pi/2 for finite x
 * atan2(±Infinity, -Infinity) = ±3*pi/4
 * atan2(±Infinity, +Infinity) = ±pi/4
 * atan2(NaN, x) = NaN
 * atan2(y, NaN) = NaN
 *
 */ function atan2(y, x) {
    y = new this(y);
    x = new this(x);
    var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
    // Either NaN
    if (!y.s || !x.s) {
        r = new this(NaN);
    // Both ±Infinity
    } else if (!y.d && !x.d) {
        r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
        r.s = y.s;
    // x is ±Infinity or y is ±0
    } else if (!x.d || y.isZero()) {
        r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
        r.s = y.s;
    // y is ±Infinity or x is ±0
    } else if (!y.d || x.isZero()) {
        r = getPi(this, wpr, 1).times(0.5);
        r.s = y.s;
    // Both non-zero and finite
    } else if (x.s < 0) {
        this.precision = wpr;
        this.rounding = 1;
        r = this.atan(divide(y, x, wpr, 1));
        x = getPi(this, wpr, 1);
        this.precision = pr;
        this.rounding = rm;
        r = y.s < 0 ? r.minus(x) : r.plus(x);
    } else {
        r = this.atan(divide(y, x, wpr, 1));
    }
    return r;
}
/*
 * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function cbrt(x) {
    return new this(x).cbrt();
}
/*
 * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function ceil(x) {
    return finalise(x = new this(x), x.e + 1, 2);
}
/*
 * Return a new Decimal whose value is `x` clamped to the range delineated by `min` and `max`.
 *
 * x {number|string|bigint|Decimal}
 * min {number|string|bigint|Decimal}
 * max {number|string|bigint|Decimal}
 *
 */ function clamp(x, min, max) {
    return new this(x).clamp(min, max);
}
/*
 * Configure global settings for a Decimal constructor.
 *
 * `obj` is an object with one or more of the following properties,
 *
 *   precision  {number}
 *   rounding   {number}
 *   toExpNeg   {number}
 *   toExpPos   {number}
 *   maxE       {number}
 *   minE       {number}
 *   modulo     {number}
 *   crypto     {boolean|number}
 *   defaults   {true}
 *
 * E.g. Decimal.config({ precision: 20, rounding: 4 })
 *
 */ function config(obj) {
    if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');
    var i, p, v, useDefaults = obj.defaults === true, ps = [
        'precision',
        1,
        MAX_DIGITS,
        'rounding',
        0,
        8,
        'toExpNeg',
        -EXP_LIMIT,
        0,
        'toExpPos',
        0,
        EXP_LIMIT,
        'maxE',
        0,
        EXP_LIMIT,
        'minE',
        -EXP_LIMIT,
        0,
        'modulo',
        0,
        9
    ];
    for(i = 0; i < ps.length; i += 3){
        if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
        if ((v = obj[p]) !== void 0) {
            if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
            else throw Error(invalidArgument + p + ': ' + v);
        }
    }
    if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
        if (v === true || v === false || v === 0 || v === 1) {
            if (v) {
                if (typeof crypto != 'undefined' && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                    this[p] = true;
                } else {
                    throw Error(cryptoUnavailable);
                }
            } else {
                this[p] = false;
            }
        } else {
            throw Error(invalidArgument + p + ': ' + v);
        }
    }
    return this;
}
/*
 * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */ function cos(x) {
    return new this(x).cos();
}
/*
 * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */ function cosh(x) {
    return new this(x).cosh();
}
/*
 * Create and return a Decimal constructor with the same configuration properties as this Decimal
 * constructor.
 *
 */ function clone(obj) {
    var i, p, ps;
    /*
   * The Decimal constructor and exported function.
   * Return a new Decimal instance.
   *
   * v {number|string|bigint|Decimal} A numeric value.
   *
   */ function Decimal(v) {
        var e, i, t, x = this;
        // Decimal called without new.
        if (!(x instanceof Decimal)) return new Decimal(v);
        // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
        // which points to Object.
        x.constructor = Decimal;
        if (isDecimalInstance(v)) {
            x.s = v.s;
            if (external) {
                if (!v.d || v.e > Decimal.maxE) {
                    // Infinity.
                    x.e = NaN;
                    x.d = null;
                } else if (v.e < Decimal.minE) {
                    // Zero.
                    x.e = 0;
                    x.d = [
                        0
                    ];
                } else {
                    x.e = v.e;
                    x.d = v.d.slice();
                }
            } else {
                x.e = v.e;
                x.d = v.d ? v.d.slice() : v.d;
            }
            return;
        }
        t = typeof v;
        if (t === 'number') {
            if (v === 0) {
                x.s = 1 / v < 0 ? -1 : 1;
                x.e = 0;
                x.d = [
                    0
                ];
                return;
            }
            if (v < 0) {
                v = -v;
                x.s = -1;
            } else {
                x.s = 1;
            }
            // Fast path for small integers.
            if (v === ~~v && v < 1e7) {
                for(e = 0, i = v; i >= 10; i /= 10)e++;
                if (external) {
                    if (e > Decimal.maxE) {
                        x.e = NaN;
                        x.d = null;
                    } else if (e < Decimal.minE) {
                        x.e = 0;
                        x.d = [
                            0
                        ];
                    } else {
                        x.e = e;
                        x.d = [
                            v
                        ];
                    }
                } else {
                    x.e = e;
                    x.d = [
                        v
                    ];
                }
                return;
            }
            // Infinity or NaN?
            if (v * 0 !== 0) {
                if (!v) x.s = NaN;
                x.e = NaN;
                x.d = null;
                return;
            }
            return parseDecimal(x, v.toString());
        }
        if (t === 'string') {
            if ((i = v.charCodeAt(0)) === 45) {
                v = v.slice(1);
                x.s = -1;
            } else {
                if (i === 43) v = v.slice(1); // plus sign
                x.s = 1;
            }
            return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
        }
        if (t === 'bigint') {
            if (v < 0) {
                v = -v;
                x.s = -1;
            } else {
                x.s = 1;
            }
            return parseDecimal(x, v.toString());
        }
        throw Error(invalidArgument + v);
    }
    Decimal.prototype = P;
    Decimal.ROUND_UP = 0;
    Decimal.ROUND_DOWN = 1;
    Decimal.ROUND_CEIL = 2;
    Decimal.ROUND_FLOOR = 3;
    Decimal.ROUND_HALF_UP = 4;
    Decimal.ROUND_HALF_DOWN = 5;
    Decimal.ROUND_HALF_EVEN = 6;
    Decimal.ROUND_HALF_CEIL = 7;
    Decimal.ROUND_HALF_FLOOR = 8;
    Decimal.EUCLID = 9;
    Decimal.config = Decimal.set = config;
    Decimal.clone = clone;
    Decimal.isDecimal = isDecimalInstance;
    Decimal.abs = abs;
    Decimal.acos = acos;
    Decimal.acosh = acosh; // ES6
    Decimal.add = add;
    Decimal.asin = asin;
    Decimal.asinh = asinh; // ES6
    Decimal.atan = atan;
    Decimal.atanh = atanh; // ES6
    Decimal.atan2 = atan2;
    Decimal.cbrt = cbrt; // ES6
    Decimal.ceil = ceil;
    Decimal.clamp = clamp;
    Decimal.cos = cos;
    Decimal.cosh = cosh; // ES6
    Decimal.div = div;
    Decimal.exp = exp;
    Decimal.floor = floor;
    Decimal.hypot = hypot; // ES6
    Decimal.ln = ln;
    Decimal.log = log;
    Decimal.log10 = log10; // ES6
    Decimal.log2 = log2; // ES6
    Decimal.max = max;
    Decimal.min = min;
    Decimal.mod = mod;
    Decimal.mul = mul;
    Decimal.pow = pow;
    Decimal.random = random;
    Decimal.round = round;
    Decimal.sign = sign; // ES6
    Decimal.sin = sin;
    Decimal.sinh = sinh; // ES6
    Decimal.sqrt = sqrt;
    Decimal.sub = sub;
    Decimal.sum = sum;
    Decimal.tan = tan;
    Decimal.tanh = tanh; // ES6
    Decimal.trunc = trunc; // ES6
    if (obj === void 0) obj = {};
    if (obj) {
        if (obj.defaults !== true) {
            ps = [
                'precision',
                'rounding',
                'toExpNeg',
                'toExpPos',
                'maxE',
                'minE',
                'modulo',
                'crypto'
            ];
            for(i = 0; i < ps.length;)if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
        }
    }
    Decimal.config(obj);
    return Decimal;
}
/*
 * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */ function div(x, y) {
    return new this(x).div(y);
}
/*
 * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} The power to which to raise the base of the natural log.
 *
 */ function exp(x) {
    return new this(x).exp();
}
/*
 * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function floor(x) {
    return finalise(x = new this(x), x.e + 1, 3);
}
/*
 * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
 * rounded to `precision` significant digits using rounding mode `rounding`.
 *
 * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)
 *
 * arguments {number|string|bigint|Decimal}
 *
 */ function hypot() {
    var i, n, t = new this(0);
    external = false;
    for(i = 0; i < arguments.length;){
        n = new this(arguments[i++]);
        if (!n.d) {
            if (n.s) {
                external = true;
                return new this(1 / 0);
            }
            t = n;
        } else if (t.d) {
            t = t.plus(n.times(n));
        }
    }
    external = true;
    return t.sqrt();
}
/*
 * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),
 * otherwise return false.
 *
 */ function isDecimalInstance(obj) {
    return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
/*
 * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function ln(x) {
    return new this(x).ln();
}
/*
 * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base
 * is specified, rounded to `precision` significant digits using rounding mode `rounding`.
 *
 * log[y](x)
 *
 * x {number|string|bigint|Decimal} The argument of the logarithm.
 * y {number|string|bigint|Decimal} The base of the logarithm.
 *
 */ function log(x, y) {
    return new this(x).log(y);
}
/*
 * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function log2(x) {
    return new this(x).log(2);
}
/*
 * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function log10(x) {
    return new this(x).log(10);
}
/*
 * Return a new Decimal whose value is the maximum of the arguments.
 *
 * arguments {number|string|bigint|Decimal}
 *
 */ function max() {
    return maxOrMin(this, arguments, -1);
}
/*
 * Return a new Decimal whose value is the minimum of the arguments.
 *
 * arguments {number|string|bigint|Decimal}
 *
 */ function min() {
    return maxOrMin(this, arguments, 1);
}
/*
 * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
 * using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */ function mod(x, y) {
    return new this(x).mod(y);
}
/*
 * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */ function mul(x, y) {
    return new this(x).mul(y);
}
/*
 * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} The base.
 * y {number|string|bigint|Decimal} The exponent.
 *
 */ function pow(x, y) {
    return new this(x).pow(y);
}
/*
 * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
 * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros
 * are produced).
 *
 * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
 *
 */ function random(sd) {
    var d, e, k, n, i = 0, r = new this(1), rd = [];
    if (sd === void 0) sd = this.precision;
    else checkInt32(sd, 1, MAX_DIGITS);
    k = Math.ceil(sd / LOG_BASE);
    if (!this.crypto) {
        for(; i < k;)rd[i++] = Math.random() * 1e7 | 0;
    // Browsers supporting crypto.getRandomValues.
    } else if (crypto.getRandomValues) {
        d = crypto.getRandomValues(new Uint32Array(k));
        for(; i < k;){
            n = d[i];
            // 0 <= n < 4294967296
            // Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).
            if (n >= 4.29e9) {
                d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
            } else {
                // 0 <= n <= 4289999999
                // 0 <= (n % 1e7) <= 9999999
                rd[i++] = n % 1e7;
            }
        }
    // Node.js supporting crypto.randomBytes.
    } else if (crypto.randomBytes) {
        // buffer
        d = crypto.randomBytes(k *= 4);
        for(; i < k;){
            // 0 <= n < 2147483648
            n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);
            // Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).
            if (n >= 2.14e9) {
                crypto.randomBytes(4).copy(d, i);
            } else {
                // 0 <= n <= 2139999999
                // 0 <= (n % 1e7) <= 9999999
                rd.push(n % 1e7);
                i += 4;
            }
        }
        i = k / 4;
    } else {
        throw Error(cryptoUnavailable);
    }
    k = rd[--i];
    sd %= LOG_BASE;
    // Convert trailing digits to zeros according to sd.
    if (k && sd) {
        n = mathpow(10, LOG_BASE - sd);
        rd[i] = (k / n | 0) * n;
    }
    // Remove trailing words which are zero.
    for(; rd[i] === 0; i--)rd.pop();
    // Zero?
    if (i < 0) {
        e = 0;
        rd = [
            0
        ];
    } else {
        e = -1;
        // Remove leading words which are zero and adjust exponent accordingly.
        for(; rd[0] === 0; e -= LOG_BASE)rd.shift();
        // Count the digits of the first word of rd to determine leading zeros.
        for(k = 1, n = rd[0]; n >= 10; n /= 10)k++;
        // Adjust the exponent for leading zeros of the first word of rd.
        if (k < LOG_BASE) e -= LOG_BASE - k;
    }
    r.e = e;
    r.d = rd;
    return r;
}
/*
 * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.
 *
 * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).
 *
 * x {number|string|bigint|Decimal}
 *
 */ function round(x) {
    return finalise(x = new this(x), x.e + 1, this.rounding);
}
/*
 * Return
 *   1    if x > 0,
 *  -1    if x < 0,
 *   0    if x is 0,
 *  -0    if x is -0,
 *   NaN  otherwise
 *
 * x {number|string|bigint|Decimal}
 *
 */ function sign(x) {
    x = new this(x);
    return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
/*
 * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits
 * using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */ function sin(x) {
    return new this(x).sin();
}
/*
 * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */ function sinh(x) {
    return new this(x).sinh();
}
/*
 * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function sqrt(x) {
    return new this(x).sqrt();
}
/*
 * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
 * using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */ function sub(x, y) {
    return new this(x).sub(y);
}
/*
 * Return a new Decimal whose value is the sum of the arguments, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * Only the result is rounded, not the intermediate calculations.
 *
 * arguments {number|string|bigint|Decimal}
 *
 */ function sum() {
    var i = 0, args = arguments, x = new this(args[i]);
    external = false;
    for(; x.s && ++i < args.length;)x = x.plus(args[i]);
    external = true;
    return finalise(x, this.precision, this.rounding);
}
/*
 * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */ function tan(x) {
    return new this(x).tan();
}
/*
 * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */ function tanh(x) {
    return new this(x).tanh();
}
/*
 * Return a new Decimal whose value is `x` truncated to an integer.
 *
 * x {number|string|bigint|Decimal}
 *
 */ function trunc(x) {
    return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for('nodejs.util.inspect.custom')] = P.toString;
P[Symbol.toStringTag] = 'Decimal';
var Decimal = P.constructor = clone(DEFAULTS);
// Create the internal constants from their string values.
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
const __TURBOPACK__default__export__ = Decimal;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeObservers",
    ()=>resizeObservers
]);
var resizeObservers = [];
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasActiveObservations",
    ()=>hasActiveObservations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [client] (ecmascript)");
;
var hasActiveObservations = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resizeObservers"].some(function(ro) {
        return ro.activeTargets.length > 0;
    });
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasSkippedObservations",
    ()=>hasSkippedObservations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [client] (ecmascript)");
;
var hasSkippedObservations = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resizeObservers"].some(function(ro) {
        return ro.skippedTargets.length > 0;
    });
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deliverResizeLoopError",
    ()=>deliverResizeLoopError
]);
var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function() {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    } else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverBoxOptions",
    ()=>ResizeObserverBoxOptions
]);
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/freeze.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "freeze",
    ()=>freeze
]);
var freeze = function(obj) {
    return Object.freeze(obj);
};
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverSize",
    ()=>ResizeObserverSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/freeze.js [client] (ecmascript)");
;
var ResizeObserverSize = function() {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__["freeze"])(this);
    }
    return ResizeObserverSize;
}();
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOMRectReadOnly",
    ()=>DOMRectReadOnly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/freeze.js [client] (ecmascript)");
;
var DOMRectReadOnly = function() {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__["freeze"])(this);
    }
    DOMRectReadOnly.prototype.toJSON = function() {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return {
            x: x,
            y: y,
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            width: width,
            height: height
        };
    };
    DOMRectReadOnly.fromRect = function(rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}();
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/element.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElement",
    ()=>isElement,
    "isHidden",
    ()=>isHidden,
    "isReplacedElement",
    ()=>isReplacedElement,
    "isSVG",
    ()=>isSVG
]);
var isSVG = function(target) {
    return target instanceof SVGElement && 'getBBox' in target;
};
var isHidden = function(target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
    var _a;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
    switch(target.tagName){
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/global.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "global",
    ()=>global
]);
var global = typeof window !== 'undefined' ? window : {};
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateBoxSize",
    ()=>calculateBoxSize,
    "calculateBoxSizes",
    ()=>calculateBoxSizes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$DOMRectReadOnly$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/element.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/freeze.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/global.js [client] (ecmascript)");
;
;
;
;
;
;
var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$client$5d$__$28$ecmascript$29$__["global"].navigator && __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$client$5d$__$28$ecmascript$29$__["global"].navigator.userAgent);
var parseDimension = function(pixel) {
    return parseFloat(pixel || '0');
};
var size = function(inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) {
        inlineSize = 0;
    }
    if (blockSize === void 0) {
        blockSize = 0;
    }
    if (switchSizes === void 0) {
        switchSizes = false;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverSize"]((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__["freeze"])({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$DOMRectReadOnly$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DOMRectReadOnly"](0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
    if (forceRecalculation === void 0) {
        forceRecalculation = false;
    }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isHidden"])(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isSVG"])(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__["freeze"])({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$DOMRectReadOnly$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DOMRectReadOnly"](paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch(observedBox){
        case __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverBoxOptions"].DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverBoxOptions"].BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverEntry",
    ()=>ResizeObserverEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/freeze.js [client] (ecmascript)");
;
;
var ResizeObserverEntry = function() {
    function ResizeObserverEntry(target) {
        var boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["calculateBoxSizes"])(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__["freeze"])([
            boxes.borderBoxSize
        ]);
        this.contentBoxSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__["freeze"])([
            boxes.contentBoxSize
        ]);
        this.devicePixelContentBoxSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$client$5d$__$28$ecmascript$29$__["freeze"])([
            boxes.devicePixelContentBoxSize
        ]);
    }
    return ResizeObserverEntry;
}();
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateDepthForNode",
    ()=>calculateDepthForNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/element.js [client] (ecmascript)");
;
var calculateDepthForNode = function(node) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isHidden"])(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while(parent){
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "broadcastActiveObservations",
    ()=>broadcastActiveObservations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverEntry$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateDepthForNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js [client] (ecmascript)");
;
;
;
;
var broadcastActiveObservations = function() {
    var shallowestDepth = Infinity;
    var callbacks = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resizeObservers"].forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverEntry$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverEntry"](ot.target);
            var targetDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateDepthForNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["calculateDepthForNode"])(ot.target);
            entries.push(entry);
            ot.lastReportedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["calculateBoxSize"])(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for(var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++){
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gatherActiveObservationsAtDepth",
    ()=>gatherActiveObservationsAtDepth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateDepthForNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js [client] (ecmascript)");
;
;
var gatherActiveObservationsAtDepth = function(depth) {
    __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resizeObservers"].forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateDepthForNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["calculateDepthForNode"])(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                } else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/process.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "process",
    ()=>process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$hasActiveObservations$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$hasSkippedObservations$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$deliverResizeLoopError$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$broadcastActiveObservations$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$gatherActiveObservationsAtDepth$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js [client] (ecmascript)");
;
;
;
;
;
var process = function() {
    var depth = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$gatherActiveObservationsAtDepth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["gatherActiveObservationsAtDepth"])(depth);
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$hasActiveObservations$2e$js__$5b$client$5d$__$28$ecmascript$29$__["hasActiveObservations"])()){
        depth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$broadcastActiveObservations$2e$js__$5b$client$5d$__$28$ecmascript$29$__["broadcastActiveObservations"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$gatherActiveObservationsAtDepth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["gatherActiveObservationsAtDepth"])(depth);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$hasSkippedObservations$2e$js__$5b$client$5d$__$28$ecmascript$29$__["hasSkippedObservations"])()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$deliverResizeLoopError$2e$js__$5b$client$5d$__$28$ecmascript$29$__["deliverResizeLoopError"])();
    }
    return depth > 0;
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queueMicroTask",
    ()=>queueMicroTask
]);
var trigger;
var callbacks = [];
var notify = function() {
    return callbacks.splice(0).forEach(function(cb) {
        return cb();
    });
};
var queueMicroTask = function(callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = {
            characterData: true
        };
        new MutationObserver(function() {
            return notify();
        }).observe(el_1, config);
        trigger = function() {
            el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
        };
    }
    callbacks.push(callback);
    trigger();
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queueResizeObserver",
    ()=>queueResizeObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$queueMicroTask$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js [client] (ecmascript)");
;
var queueResizeObserver = function(cb) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$queueMicroTask$2e$js__$5b$client$5d$__$28$ecmascript$29$__["queueMicroTask"])(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/scheduler.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduler",
    ()=>scheduler,
    "updateCount",
    ()=>updateCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/global.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$queueResizeObserver$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js [client] (ecmascript)");
;
;
;
var watching = 0;
var isWatching = function() {
    return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function(timeout) {
    if (timeout === void 0) {
        timeout = 0;
    }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function() {
            return _this.schedule();
        };
    }
    Scheduler.prototype.run = function(timeout) {
        var _this = this;
        if (timeout === void 0) {
            timeout = CATCH_PERIOD;
        }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$queueResizeObserver$2e$js__$5b$client$5d$__$28$ecmascript$29$__["queueResizeObserver"])(function() {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["process"])();
            } finally{
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                } else if (timeout > 0) {
                    _this.run(timeout);
                } else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function() {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function() {
        var _this = this;
        var cb = function() {
            return _this.observer && _this.observer.observe(document.body, observerConfig);
        };
        document.body ? cb() : __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$client$5d$__$28$ecmascript$29$__["global"].addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function() {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function(name) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$client$5d$__$28$ecmascript$29$__["global"].addEventListener(name, _this.listener, true);
            });
        }
    };
    Scheduler.prototype.stop = function() {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function(name) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$client$5d$__$28$ecmascript$29$__["global"].removeEventListener(name, _this.listener, true);
            });
            this.stopped = true;
        }
    };
    return Scheduler;
}();
var scheduler = new Scheduler();
var updateCount = function(n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObservation.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObservation",
    ()=>ResizeObservation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/element.js [client] (ecmascript)");
;
;
;
var skipNotifyOnElement = function(target) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isSVG"])(target) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isReplacedElement"])(target) && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = function() {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverBoxOptions"].CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function() {
        var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["calculateBoxSize"])(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}();
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverDetail",
    ()=>ResizeObserverDetail
]);
var ResizeObserverDetail = function() {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}();
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverController.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverController",
    ()=>ResizeObserverController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$scheduler$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/scheduler.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObservation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObservation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverDetail$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [client] (ecmascript)");
;
;
;
;
var observerMap = new WeakMap();
var getObservationIndex = function(observationTargets, target) {
    for(var i = 0; i < observationTargets.length; i += 1){
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = function() {
    function ResizeObserverController() {}
    ResizeObserverController.connect = function(resizeObserver, callback) {
        var detail = new __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverDetail$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverDetail"](resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function(resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resizeObservers"].push(detail);
            detail.observationTargets.push(new __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObservation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObservation"](target, options && options.box));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$scheduler$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCount"])(1);
            __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$scheduler$2e$js__$5b$client$5d$__$28$ecmascript$29$__["scheduler"].schedule();
        }
    };
    ResizeObserverController.unobserve = function(resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resizeObservers"].splice(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resizeObservers"].indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$scheduler$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCount"])(-1);
        }
    };
    ResizeObserverController.disconnect = function(resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function(ot) {
            return _this.unobserve(resizeObserver, ot.target);
        });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}();
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserver.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserver",
    ()=>ResizeObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverController.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/utils/element.js [client] (ecmascript)");
;
;
var ResizeObserver = function() {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverController"].connect(this, callback);
    }
    ResizeObserver.prototype.observe = function(target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isElement"])(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverController"].observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function(target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isElement"])(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverController"].unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function() {
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserverController"].disconnect(this);
    };
    ResizeObserver.toString = function() {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}();
;
}),
"[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/exports/resize-observer.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserver$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserver.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverEntry$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js [client] (ecmascript)");
;
;
;
}),
"[project]/gdp-uk-news-frontend/node_modules/styled-jsx/dist/index/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
__turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/next/dist/compiled/client-only/index.js [client] (ecmascript)");
var React = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/gdp-uk-news-frontend/node_modules/styled-jsx/style.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/gdp-uk-news-frontend/node_modules/styled-jsx/dist/index/index.js [client] (ecmascript)").style;
}),
"[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/styles/components/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "display-100": "styles-module__D4wISG__display-100",
  "display-300": "styles-module__D4wISG__display-300",
  "display-fixed-100": "styles-module__D4wISG__display-fixed-100",
  "display-fixed-200": "styles-module__D4wISG__display-fixed-200",
  "gap-200": "styles-module__D4wISG__gap-200",
  "gap-300": "styles-module__D4wISG__gap-300",
  "gap-500": "styles-module__D4wISG__gap-500",
  "gap-600": "styles-module__D4wISG__gap-600",
  "js": "styles-module__D4wISG__js",
  "ui-list": "styles-module__D4wISG__ui-list",
  "ui-news-footer": "styles-module__D4wISG__ui-news-footer",
  "ui-news-footer-body": "styles-module__D4wISG__ui-news-footer-body",
  "ui-news-footer-section": "styles-module__D4wISG__ui-news-footer-section",
  "ui-news-footer-section-links": "styles-module__D4wISG__ui-news-footer-section-links",
  "ui-news-footer-section-span": "styles-module__D4wISG__ui-news-footer-section-span",
  "ui-news-footer-social": "styles-module__D4wISG__ui-news-footer-social",
  "ui-news-footer-social-link": "styles-module__D4wISG__ui-news-footer-social-link",
  "ui-news-footer-social-text": "styles-module__D4wISG__ui-news-footer-social-text",
});
}),
"[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/src/components/ui-news-footer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(rootElement) {
    if (!rootElement) {
        return;
    }
    const sections = rootElement.querySelectorAll('[data-role="accordion"]');
    sections.forEach((element)=>{
        element.onclick = ()=>{
            const open = element.dataset.open === 'true';
            sections.forEach((item)=>{
                item.dataset.open = 'false';
            });
            element.dataset.open = !open;
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$footer$2f$styles$2f$components$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/styles/components/styles.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$footer$2f$src$2f$components$2f$ui$2d$news$2d$footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/src/components/ui-news-footer.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$footer$2f$styles$2f$components$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
;
function SiteFooter({ data }) {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteFooter.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$footer$2f$src$2f$components$2f$ui$2d$news$2d$footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(root.current);
        }
    }["SiteFooter.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: root,
        className: `${css('ui-news-footer')} display-100`,
        "data-testid": "site-footer",
        role: "contentinfo",
        "aria-labelledby": "site-footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "site-footer",
                className: "u-hide-visually",
                children: "Sky News footer"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap wrap-auto-align wrap-gutter wrap-site-width gap-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('ui-news-footer-social'),
                        "data-testid": "site-footer-social",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "grid-flex display-fixed-200",
                            style: {
                                '--grow': 0,
                                '--basis': 'auto',
                                '--align': 'center'
                            },
                            children: data.social.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.link,
                                        className: `${css('ui-news-footer-social-link')} grid-flex gap-100`,
                                        "data-type": item.id,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        style: {
                                            '--grow': 0,
                                            '--basis': 'auto',
                                            '--align': 'center',
                                            '--justify': 'center',
                                            '--icon-color-hover': `var(--icon-color-${item.id})`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "u-hide-visually",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                                lineNumber: 26,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                dangerouslySetInnerHTML: {
                                                    __html: item.icon
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                                lineNumber: 27,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                        lineNumber: 25,
                                        columnNumber: 33
                                    }, this)
                                }, item.id, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                    lineNumber: 24,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('ui-news-footer-body')} grid-areas gap-600`,
                        "data-testid": "site-footer-links",
                        children: data.navigation.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: `${css('ui-news-footer-section')} grid-cell`,
                                "data-role": "accordion",
                                "aria-labelledby": `footer-header-${index}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "display-300 grid-flex",
                                        style: {
                                            '--grow': 0,
                                            '--basis': 'auto',
                                            '--align': 'center',
                                            '--justify': 'space-between'
                                        },
                                        id: `footer-header-${index}`,
                                        children: [
                                            item.label,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: css('ui-news-footer-section-span'),
                                                dangerouslySetInnerHTML: {
                                                    __html: data.icons.down
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                                lineNumber: 38,
                                                columnNumber: 46
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: css('ui-news-footer-section-links'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "wrap gap-200",
                                            children: item.items.map((list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: list.link,
                                                        target: list.external ? '_blank' : null,
                                                        children: list.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                                        lineNumber: 44,
                                                        columnNumber: 45
                                                    }, this)
                                                }, list.label, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                                    lineNumber: 43,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                            lineNumber: 41,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, `section-${index}`, true, {
                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-testid": "site-footer-legal",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "ui-list display-fixed-100",
                            "data-type": "horizontal",
                            children: data.supplementary.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.link,
                                        target: item.external ? '_blank' : null,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                        lineNumber: 56,
                                        columnNumber: 33
                                    }, this)
                                }, item.label, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-flex gap-300",
                        style: {
                            '--grow': 0,
                            '--basis': 'auto',
                            '--align': 'center'
                        },
                        "data-testid": "site-footer-logo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: data.properties['logo-link'],
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: data.properties.logo,
                                    alt: data.properties['logo-alt']
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-testid": "site-footer-copyright",
                                children: data.properties['copyright-text']
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(SiteFooter, "/rr7G8WhLICCHRj4HQ5x5ovssB4=");
_c = SiteFooter;
var _c;
__turbopack_context__.k.register(_c, "SiteFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/node_modules/ui-news-header/styles/components/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dot-pulse": "styles-module__rVaMRG__dot-pulse",
  "js": "styles-module__rVaMRG__js",
  "sdc-site-header": "styles-module__rVaMRG__sdc-site-header",
  "sdc-site-header-logo-dark": "styles-module__rVaMRG__sdc-site-header-logo-dark",
  "sdc-site-header-logo-light": "styles-module__rVaMRG__sdc-site-header-logo-light",
  "ui-news-header": "styles-module__rVaMRG__ui-news-header",
  "ui-news-header-body": "styles-module__rVaMRG__ui-news-header-body",
  "ui-news-header-logo": "styles-module__rVaMRG__ui-news-header-logo",
  "ui-news-header-logo-a11y-text": "styles-module__rVaMRG__ui-news-header-logo-a11y-text",
  "ui-news-header-nav": "styles-module__rVaMRG__ui-news-header-nav",
  "ui-news-header-nav-control": "styles-module__rVaMRG__ui-news-header-nav-control",
  "ui-news-header-nav-items": "styles-module__rVaMRG__ui-news-header-nav-items",
  "ui-news-header-nav-items-link": "styles-module__rVaMRG__ui-news-header-nav-items-link",
  "ui-news-header-nav-items-link-label": "styles-module__rVaMRG__ui-news-header-nav-items-link-label",
  "ui-news-header-nav-items-wrap": "styles-module__rVaMRG__ui-news-header-nav-items-wrap",
  "ui-news-header-nav-locked": "styles-module__rVaMRG__ui-news-header-nav-locked",
  "ui-news-header-nav-more": "styles-module__rVaMRG__ui-news-header-nav-more",
  "ui-news-header-nav-more-button": "styles-module__rVaMRG__ui-news-header-nav-more-button",
  "ui-news-header-skip-to-link": "styles-module__rVaMRG__ui-news-header-skip-to-link",
  "ui-news-header-subnav": "styles-module__rVaMRG__ui-news-header-subnav",
  "ui-news-header-subnav-weather": "styles-module__rVaMRG__ui-news-header-subnav-weather",
  "ui-news-header-watch-live": "styles-module__rVaMRG__ui-news-header-watch-live",
  "ui-news-header-wrap": "styles-module__rVaMRG__ui-news-header-wrap",
});
}),
"[project]/gdp-uk-news-frontend/node_modules/ui-news-header/src/components/more.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(items, style) {
    const num = items.filter((item)=>item.offsetTop > 0).length;
    style.textContent = `
    header[data-role="ui-news-header"] [data-role="more-nav-items"] li:nth-last-child(-n+${num}){display: block}
    header[data-role="ui-news-header"] [data-role="main-nav-items"] li:nth-last-child(-n+${num}){visibility:hidden}
  `;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/node_modules/ui-news-header/src/components/get-max-z-index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(root) {
    const z = Array.from(root.querySelectorAll('div,section,header,iframe,img,button')).map((item)=>{
        return Number(window.getComputedStyle(item, null).zIndex);
    }).filter((zIndex)=>!Number.isNaN(zIndex));
    // Math.max() returns -infinity when nothing is passed in.
    if (z.length === 0) {
        return 0;
    }
    return Math.max(...z);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/node_modules/ui-news-header/src/components/ui-news-header.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$src$2f$components$2f$more$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/ui-news-header/src/components/more.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$src$2f$components$2f$get$2d$max$2d$z$2d$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/ui-news-header/src/components/get-max-z-index.js [client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(rootElement) {
    if (!rootElement) {
        return;
    }
    NodeList.prototype.filter = Array.prototype.filter;
    /* show/hide expandable menus */ const navcontrols = rootElement.querySelectorAll('[aria-expanded]');
    const lockClass = rootElement.dataset.lockClass;
    navcontrols.forEach((item)=>{
        item.onclick = (ev)=>{
            const target = ev.currentTarget;
            const expanded = target.getAttribute('aria-expanded') === 'true';
            target.setAttribute('aria-expanded', !expanded);
            rootElement.style.setProperty('--header-z-index', !expanded ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$src$2f$components$2f$get$2d$max$2d$z$2d$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(document.body) + 1 : null);
            if (target.dataset.role === 'nav-button') {
                rootElement.style.setProperty('--mobile-nav-offset', rootElement.offsetTop);
                target.setAttribute('aria-label', target.dataset[`ariaLabel${expanded ? 'Open' : 'Close'}`]);
                document.body.classList[!expanded ? 'add' : 'remove'](lockClass);
            }
        };
    });
    /* hide all expandable menus when clicked outside */ document.body.addEventListener('click', (ev)=>{
        if (!rootElement.contains(ev.target)) {
            navcontrols.forEach((item)=>{
                item.setAttribute('aria-expanded', 'false');
                rootElement.style.setProperty('--header-z-index', null);
            });
        }
    });
    /* hide all expandable menus when focus moves outside */ document.body.addEventListener('focus', (ev)=>{
        if (!rootElement.contains(ev.target)) {
            navcontrols.forEach((item)=>{
                item.setAttribute('aria-expanded', 'false');
                rootElement.style.setProperty('--header-z-index', null);
            });
        }
    }, true);
    /* show the correct number of more menu items */ const style = document.createElement('style');
    rootElement.appendChild(style);
    const nav = rootElement.querySelector('[data-role="main-nav-items"]');
    const items = nav.querySelectorAll('li');
    if (window.ResizeObserver) {
        const resizeObserver = new window.ResizeObserver(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$src$2f$components$2f$more$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(items, style);
        });
        resizeObserver.observe(nav);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$src$2f$components$2f$more$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(items, style);
        window.addEventListener('resize', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$src$2f$components$2f$more$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(items, style);
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$styles$2f$components$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/ui-news-header/styles/components/styles.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$src$2f$components$2f$ui$2d$news$2d$header$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/ui-news-header/src/components/ui-news-header.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$styles$2f$components$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
;
function SiteHeader({ data }) {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$src$2f$components$2f$ui$2d$news$2d$header$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(root.current);
        }
    }["SiteHeader.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: root,
        className: css('ui-news-header'),
        role: "banner",
        "data-testid": "site-header",
        "data-role": "ui-news-header",
        "data-lock-class": css('ui-news-header-nav-locked'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main",
                className: css('ui-news-header-skip-to-link'),
                "data-tracking-label": "site-header/a11y-link",
                children: "Skip to content"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('ui-news-header-wrap'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('ui-news-header-body'),
                        "data-testid": "site-header-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: data.properties['logo-link'],
                                className: css('ui-news-header-logo'),
                                "data-testid": "site-header-logo",
                                "data-tracking-label": "site-header/site-logo",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: css('ui-news-header-logo-a11y-text'),
                                        children: data.properties['logo-a11y-text']
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        "aria-hidden": "true",
                                        src: data.properties.logo,
                                        alt: data.properties['logo-alt'],
                                        className: css('sdc-site-header-logo-light')
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        "aria-hidden": "true",
                                        src: data.properties['logo-dark-mode'],
                                        alt: data.properties['logo-alt'],
                                        className: css('sdc-site-header-logo-dark')
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: css('ui-news-header-subnav'),
                                "data-testid": "site-header-subnav",
                                children: [
                                    data.navigation['weather-component'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: css('ui-news-header-subnav-cell', 'ui-news-header-subnav-weather'),
                                        "data-testid": "site-header-weather",
                                        children: "⛅️"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: css('ui-news-header-subnav-cell'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: data.navigation['action-button'].link,
                                            className: css('ui-news-header-watch-live'),
                                            "data-testid": "site-header-watch-live",
                                            "data-tracking-label": "site-header/watch-live",
                                            children: data.navigation['action-button'].label
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: css('ui-news-header-nav'),
                        role: "navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: css('ui-news-header-nav-control'),
                                "data-lock-scrolling": "true",
                                "aria-expanded": "false",
                                "aria-controls": "main-nav",
                                "data-role": "nav-button",
                                "aria-label": "Open the menu",
                                "data-aria-label-open": "Open the menu",
                                "data-aria-label-close": "Close the menu",
                                "data-testid": "site-header-hamburger",
                                "data-tracking-label": "site-header/nav/mobile-open",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 32 32",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            y: "3",
                                            width: "32",
                                            height: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            y: "14",
                                            width: "32",
                                            height: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            y: "25",
                                            width: "32",
                                            height: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: css('ui-news-header-nav-items-wrap'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: css('ui-news-header-nav-items'),
                                    id: "main-nav",
                                    "data-role": "main-nav-items",
                                    "data-testid": "site-header-main-nav",
                                    children: data.navigation.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: css('ui-news-header-nav-items-link'),
                                                href: item.link,
                                                "aria-current": item.current && 'true',
                                                "data-tracking-label": `site-header/nav/${item.label}`,
                                                children: [
                                                    item.additionalLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        class: css("ui-news-header-nav-items-link-label"),
                                                        children: [
                                                            item.additionalLabel,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                class: "u-hide-visually",
                                                                children: ", "
                                                            }, void 0, false, {
                                                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                                                lineNumber: 52,
                                                                columnNumber: 124
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                                        lineNumber: 52,
                                                        columnNumber: 46
                                                    }, this),
                                                    item.label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: css('ui-news-header-nav-more'),
                                "data-testid": "site-header-more-nav",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: css('ui-news-header-nav-more-button', 'ui-news-header-nav-items-link'),
                                        "aria-expanded": "false",
                                        "aria-controls": "more-nav",
                                        "data-testid": "site-header-more-nav-button",
                                        "data-tracking-label": "site-header/nav/more-open",
                                        children: [
                                            "More ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 34 34",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6.02 12.67c.01.194.087.362.247.525l.188.192L16.52 23.45c.188.19.44.294.706.294s.518-.104.707-.293l10.135-10.134.123-.126c.162-.163.24-.332.248-.53.006-.173-.155-.438-.442-.725-.187-.187-.386-.368-.59-.537-.05-.04-.096-.078-.138-.11l-.496.495-9.193 9.193-.355.354-.354-.354-9.197-9.198-.484-.484c-.043.033-.09.07-.14.112-.204.168-.402.348-.59.536-.285.288-.446.553-.44.727z"
                                                }, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                                lineNumber: 61,
                                                columnNumber: 135
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: css('ui-news-header-nav-more-items'),
                                        id: "more-nav",
                                        "data-role": "more-nav-items",
                                        children: data.navigation.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: css('ui-news-header-nav-items-link'),
                                                    href: item.link,
                                                    "aria-current": item.current && 'true',
                                                    "data-tracking-label": `site-header/nav/more/${item.label}`,
                                                    children: [
                                                        item.additionalLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            class: css("ui-news-header-nav-items-link-label"),
                                                            children: [
                                                                item.additionalLabel,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    class: "u-hide-visually",
                                                                    children: ", "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                                                    lineNumber: 72,
                                                                    columnNumber: 124
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                                            lineNumber: 72,
                                                            columnNumber: 46
                                                        }, this),
                                                        item.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "/rr7G8WhLICCHRj4HQ5x5ovssB4=");
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=04hz_05k_3yw._.js.map