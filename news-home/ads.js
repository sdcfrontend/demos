!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("sdc-site-mpu",[],t):"object"==typeof exports?exports["sdc-site-mpu"]=t():e["sdc-site-mpu"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/js/modules/components",t(0)}([function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(4),c=r(a),u=n(11),s=r(u),l=n(3);t.default=function(e,t){function n(){if(t){if(t.targeting&&(o.targeting=t.targeting),t.breakpoints&&(o.breakpoints=t.breakpoints),t.lookup&&(o.lookup=t.lookup),t.centerAds&&(o.center=t.centerAds),t.lazyloadConfig)try{o.lazyload=JSON.parse(t.lazyloadConfig)}catch(e){console.error(e),o.lazyload={"fetch-margin-percent":500,"render-margin-percent":50,"mobile-scaling":2}}else o.lazyload={"fetch-margin-percent":500,"render-margin-percent":50,"mobile-scaling":2};if(t.enableGptLazyload&&(o.enableGptLazyload=t.enableGptLazyload),t.peer39Url&&(o.peer39Url=t.peer39Url),t.peer39Id&&(o.peer39Id=t.peer39Id),t.peer39Timeout&&(o.peer39Timeout=t.peer39Timeout),t.config){var e=JSON.parse(t.config);e.id&&(o.id=e.id)}}c.register(s.create(o))}var r=(0,l.useTracer)();if(e){var o={id:null,container:e,slot:null,loaded:!1,responsive:!0,breakpoints:["(max-width: 739px)","(min-width: 740px) and (max-width: 999px)","(min-width: 1000px)"],lookup:{mobile:320,tablet:740,desktop:1e3,default:0},center:!1,tolerance:1,openTracing:r};i.load();var a=setInterval(function(){window.googletag&&(clearInterval(a),n())},10)}},e.exports=t.default},function(e,t,n){"use strict";function r(){if(!window.googletag||!window.googletag._loadStarted_){window.googletag=window.googletag||{cmd:[]};var e=(0,o.useTracer)().startSpan(Math.floor(1e3*Math.random()),"sdc-site-mpu.library-load",{url:window.location.href}),t=document.createElement("script");t.async=!0,t.dataset.consent=!1,t.dataset.vendorName="google-tag-manager",document.getElementsByTagName("head")[0].appendChild(t),t.onload=function(){e&&e.finish()};var n=function(){t.src="https://www.googletagservices.com/tag/js/gpt.js"};if(!window.sdc||!window.sdc.checkConsent)return void n();window.sdc.checkConsent(t,n),window.sdc&&window.sdc.executeConsentByElement&&window.sdc.executeConsentByElement(t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.load=r,n(2);var o=n(3)},function(e,t,n){"use strict";var r=function(e){function t(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}function n(e,t,n,r){var i=t&&t.prototype instanceof o?t:o,a=Object.create(i.prototype),c=new p(r||[]);return w(a,"_invoke",{value:s(e,n,c)}),a}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function o(){}function i(){}function a(){}function c(e){["next","throw","return"].forEach(function(n){t(e,n,function(e){return this._invoke(n,e)})})}function u(e,t){function n(o,i,a,c){var u=r(e[o],e,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&y.call(l,"__await")?t.resolve(l.__await).then(function(e){n("next",e,a,c)},function(e){n("throw",e,a,c)}):t.resolve(l).then(function(e){s.value=e,a(s)},function(e){return n("throw",e,a,c)})}c(u.arg)}function o(e,r){function o(){return new t(function(t,o){n(e,r,t,o)})}return i=i?i.then(o,o):o()}var i;w(this,"_invoke",{value:o})}function s(e,t,n){var o=E;return function(i,a){if(o===j)throw new Error("Generator is already running");if(o===S){if("throw"===i)throw a;return h()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=l(c,n);if(u){if(u===I)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===E)throw o=S,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=j;var s=r(e,t,n);if("normal"===s.type){if(o=n.done?S:L,s.arg===I)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=S,n.method="throw",n.arg=s.arg)}}}function l(e,t){var n=t.method,o=e.iterator[n];if(o===m)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=m,l(e,t),"throw"===t.method)?I:("return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),I);var i=r(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,I;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=m),t.delegate=null,I):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,I)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function d(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function p(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function g(e){if(e){var t=e[_];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(y.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=m,t.done=!0,t};return r.next=r}}return{next:h}}function h(){return{value:m,done:!0}}var m,v=Object.prototype,y=v.hasOwnProperty,w=Object.defineProperty||function(e,t,n){e[t]=n.value},b="function"==typeof Symbol?Symbol:{},_=b.iterator||"@@iterator",T=b.asyncIterator||"@@asyncIterator",x=b.toStringTag||"@@toStringTag";try{t({},"")}catch(e){t=function(e,t,n){return e[t]=n}}e.wrap=n;var E="suspendedStart",L="suspendedYield",j="executing",S="completed",I={},k={};t(k,_,function(){return this});var O=Object.getPrototypeOf,P=O&&O(O(g([])));P&&P!==v&&y.call(P,_)&&(k=P);var M=a.prototype=o.prototype=Object.create(k);return i.prototype=a,w(M,"constructor",{value:a,configurable:!0}),w(a,"constructor",{value:i,configurable:!0}),i.displayName=t(a,x,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):(e.__proto__=a,t(e,x,"GeneratorFunction")),e.prototype=Object.create(M),e},e.awrap=function(e){return{__await:e}},c(u.prototype),t(u.prototype,T,function(){return this}),e.AsyncIterator=u,e.async=function(t,r,o,i,a){void 0===a&&(a=Promise);var c=new u(n(t,r,o,i),a);return e.isGeneratorFunction(r)?c:c.next().then(function(e){return e.done?e.value:c.next()})},c(M),t(M,x,"Generator"),t(M,_,function(){return this}),t(M,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=g,p.prototype={constructor:p,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(d),!e)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=m)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=m),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=y.call(o,"catchLoc"),c=y.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&y.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,I):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),I},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),d(n),I}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;d(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:g(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=m),I}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},function(e,t){"use strict";function n(){return i()?window.sdc.openTracing:o}Object.defineProperty(t,"__esModule",{value:!0}),t.useTracer=n;var r=function(){},o={startSpan:function(){return{finish:r}},sendError:r,finishSpan:r,tagSpan:r,hasSpan:r},i=function(){return window.sdc&&"object"==typeof window.sdc.openTracing}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){window.sdc=window.sdc||{},window.sdc.ads=window.sdc.ads||[],window.sdc.ads.push(e),i(e)}function i(e){if("true"===e.enableGptLazyload)return d||(d=(0,f.default)()),d(e);var t=[].slice.call(document.querySelectorAll("[data-component-name=sdc-site-mpu]")).filter(function(e){return e.offsetWidth>0});window.sdc.ads.length<t.length||(0,s.default)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.register=o;var a=n(5),c=r(a),u=n(9),s=r(u),l=n(17),f=r(l);window.Promise=window.Promise||c.default;var d=null},function(e,t,n){(function(t){"use strict";function n(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}function r(e){return Boolean(e&&void 0!==e.length)}function o(){}function i(e,t){return function(){e.apply(t,arguments)}}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function c(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?u:s)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}u(t.promise,r)})}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void d(i(n,t),e)}e._state=1,e._value=t,l(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)c(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var p=setTimeout;a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(o);return c(this,new f(e,t,n)),n},a.prototype.finally=n,a.all=function(e){return new a(function(t,n){function o(e,r){try{if(r&&("object"==typeof r||"function"==typeof r)){var c=r.then;if("function"==typeof c)return void c.call(r,function(t){o(e,t)},n)}i[e]=r,0==--a&&t(i)}catch(e){n(e)}}if(!r(e))return n(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var a=i.length,c=0;c<i.length;c++)o(c,i[c])})},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){if(!r(e))return n(new TypeError("Promise.race accepts an array"));for(var o=0,i=e.length;o<i;o++)a.resolve(e[o]).then(t,n)})},a._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){p(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},e.exports=a}).call(t,n(6).setImmediate)},function(e,t,n){(function(e){"use strict";function r(e,t){this._id=e,this._clearFn=t}var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(7),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||void 0,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||void 0}).call(t,function(){return this}())},function(e,t,n){(function(e,t){"use strict";!function(e,n){function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[u]=r,c(u),u++}function o(e){delete s[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(l)setTimeout(a,0,e);else{var t=s[e];if(t){l=!0;try{i(t)}finally{o(e),l=!1}}}}if(!e.setImmediate){var c,u=1,s={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){c=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),c=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},c=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;c=function(t){var n=f.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){c=function(e){setTimeout(a,0,e)}}(),d.setImmediate=r,d.clearImmediate=o}}("undefined"==typeof self?void 0===e?void 0:e:self)}).call(t,function(){return this}(),n(8))},function(e,t){"use strict";function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?g=p.concat(g):m=-1,g.length&&c())}function c(){if(!h){var e=o(a);h=!0;for(var t=g.length;t;){for(p=g,g=[];++m<t;)p&&p[m].run();m=-1,t=g.length}p=null,h=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,g=[],h=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new u(e,t)),1!==g.length||h||o(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=window.sdc.ads.filter(function(e){return(0,u.isInViewPort)(e.container,e.tolerance)});e.forEach(function(e){googletag.cmd.push(function(){googletag.display(e.id)})});var t=(0,p.useTracer)().startSpan(Math.floor(1e3*Math.random()),"sdc-site-mpu.refresh-ad",{slots:e.map(function(e){return e.id}),url:window.location.href,initial:!0});googletag.cmd.push(function(){googletag.pubads().refresh(e.map(function(e){return e.slot})),t&&t.finish()}),window.sdc.ads.filter(function(t){return e.indexOf(t)<0}).map(function(e){return(0,c.lazyLoad)(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.loadSlots=o;var i=n(10),a=r(i),c=n(11),u=n(14),s=n(15),l=r(s),f=n(16),d=r(f),p=n(3),g=["slotRequested","slotResponseReceived","slotOnload","impressionViewable"];t.default=function(e){googletag.cmd.push(function(){googletag.pubads().setCentering(e.center),googletag.pubads().enableSingleRequest(),googletag.pubads().disableInitialLoad(),googletag.enableServices();for(;g.length>0;)!function(){var e=g.pop();googletag.pubads().addEventListener(e,function(t){var n=document.getElementById(t.slot.getSlotElementId());n.dataset[e]||(n.dataset[e]="0"),n.dataset[e]=String(parseInt(n.dataset[e],10)+1)})}();if(e.peer39Url&&e.peer39Id){var t=function(){(0,l.default)(e.peer39Timeout,(0,d.default)(e)).then(function(){window.p39_sky=window.p39_GPT_value(),googletag.pubads().setTargeting("p39_sky",window.p39_sky),o()}).catch(function(){o()})};(0,a.default)(document.querySelector('[data-vendor-name="peer-39"]'),t)}else o()})}},function(e,t){"use strict";function n(e,t){var n;return regeneratorRuntime.async(function(r){for(;;)switch(r.prev=r.next){case 0:if(null!==e){r.next=2;break}return r.abrupt("return");case 2:if(e.dataset.consent&&"true"===e.dataset.consent.toString()){r.next=7;break}n=new MutationObserver(function(e,n){var r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var u=a.value;"attributes"===u.type&&"data-consent"===u.attributeName&&u.target.attributes.getNamedItem(u.attributeName).value&&(t(),n.disconnect())}}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}}),n.observe(e,{attributes:!0}),r.next=9;break;case 7:return r.next=9,regeneratorRuntime.awrap(t());case 9:case"end":return r.stop()}},null,this)}e.exports=n},function(e,t,n){"use strict";function r(e){var t=(0,c.getConfig)(e.container),n=(0,a.getSizeMapping)(t.size,e),r=(0,a.getDefaultSize)(t.size),o=(0,c.getTargeting)(e,t),i=(0,c.getTag)(e,t),u=(0,c.getCollapse)(e);return e.tolerance=(0,c.getTolerance)(e,t),n.length<=1&&(e.responsive=!1),googletag.cmd.push(function(){(0,c.defineSlot)(e,t,i,r,n,u,o)}),e}function o(e){(0,c.isNativeAd)(e)||(0,u.isInViewPort)(e.container,e.tolerance)&&function(){var t=(0,s.useTracer)().startSpan(Math.floor(1e3*Math.random()),"sdc-site-mpu.refresh-ad",{slot:e.id,url:window.location.href});googletag.cmd.push(function(){googletag.pubads().refresh([e.slot]),e.container.setAttribute("data-slot-called",parseInt(e.container.getAttribute("data-slot-called"),10)+1),e.loaded=!0,t&&t.finish()})}()}function i(e){e.loaded||(o(e),setTimeout(function(){window.requestAnimationFrame(function(){i(e)})},500))}Object.defineProperty(t,"__esModule",{value:!0}),t.create=r,t.refresh=o,t.lazyLoad=i;var a=n(12),c=n(13),u=n(14),s=n(3)},function(e,t,n){"use strict";function r(e,t){var n=[];for(var r in e)"default"!==r&&n.unshift([[t.lookup[r],0],e[r]]);return n}function o(e){for(var t=["default","mobile","tablet","desktop"],n=0;n<t.length;n++)if(e[t[n]])return e[t[n]][0];return null}function i(e){if(!(0,c.isNativeAd)(e)){var t=[];return e.breakpoints.forEach(function(n){var r=window.matchMedia(n);t.push(r),r.addListener(function(t){t.matches&&(0,a.refresh)(e)})}),t}}Object.defineProperty(t,"__esModule",{value:!0}),t.getSizeMapping=r,t.getDefaultSize=o,t.listen=i;var a=n(11),c=n(13)},function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){var c=googletag.defineSlot(n,r,t.id).addService(googletag.pubads()).defineSizeMapping(o).setCollapseEmptyDiv(i,i);return Object.keys(a).forEach(function(e){c.setTargeting(e,decodeURI(a[e]))}),googletag.pubads().addEventListener("slotRenderEnded",function(t){t.size&&e.container.parentNode.getAttribute("data-ad-format")&&e.container.id===t.slot.getSlotElementId()&&e.container.parentNode.setAttribute("data-advert-rendered",[t.size[0],t.size[1]].join("x"))}),e.slot=c,e.container.setAttribute("data-slot-called",0),(0,f.listen)(e),e}function o(e){var t=e.getAttribute("data-config");if(null!==t)return JSON.parse(t)}function i(e,t){var n={},r=e.container.getAttribute("data-targeting");r?n=JSON.parse(r):t.targeting&&(n=t.targeting);var o=e.container.getAttribute("data-targeting-strnativekey"),i=e.container.getAttribute("data-targeting-platform");return o&&(n.strnativekey=o),i&&(n.platform=i),n}function a(e,t){var n=c();return n&&e.container.setAttribute("data-tag",n),e.container.getAttribute("data-tag")||t.tag}function c(){var e=RegExp("[?&]adtagtest=([^&]*)").exec(window.location.search);return e&&decodeURIComponent(e[1].replace(/\+/g," "))}function u(e,t){return parseFloat(e.container.getAttribute("data-tolerance"))||t.tolerance}function s(e){return!0===(e.container.getAttribute("data-collapse")||!0)}function l(e){return"native-ad"===e.container.parentNode.getAttribute("data-ad-format")}Object.defineProperty(t,"__esModule",{value:!0}),t.defineSlot=r,t.getConfig=o,t.getTargeting=i,t.getTag=a,t.getQueryTagOverride=c,t.getTolerance=u,t.getCollapse=s,t.isNativeAd=l;var f=n(12)},function(e,t){"use strict";function n(e){var t=arguments.length<=1||void 0===arguments[1]?1.5:arguments[1];if(e){var n=e.getBoundingClientRect(),r=window.innerWidth||document.documentElement.clientWidth,o=window.innerHeight||document.documentElement.clientHeight;return!(n.right<0||n.bottom<0||n.left>r)&&!(o*t-n.top<0)}}Object.defineProperty(t,"__esModule",{value:!0}),t.isInViewPort=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return new Promise(function(n,r){var o=setTimeout(function(){r("timed-out")},e);t.then(function(e){clearTimeout(o),n(e)},function(e){clearTimeout(o),r(e)})})},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.default=function(e){var t=e.id,n=e.peer39Url,o=e.peer39Id;return new Promise(function(e){var i=(0,r.useTracer)().startSpan(Math.floor(1e3*Math.random()),"sdc-site-mpu.waiting-for-peer39",{slot:t,url:window.location.href}),a=document.createElement("script");a.id="peer39ScriptLoader",document.head.appendChild(a),a.src=n,window["afterFinished_"+o]=function(){e("success"),i&&i.finish()}})},e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){function e(){o="complete",a.forEach(function(e){googletag.cmd.push(e)})}function t(e){return"complete"===o?googletag.cmd.push(e):a.push(e)}function n(t){var n=this;googletag.cmd.push(function(){var e,r,o,a,c,u,s;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:for(googletag.pubads().setCentering(t.center),googletag.pubads().enableLazyLoad({fetchMarginPercent:t.lazyload["fetch-margin-percent"],renderMarginPercent:t.lazyload["render-margin-percent"],mobileScaling:t.lazyload["mobile-scaling"]}),googletag.pubads().addEventListener("slotRequested",function(e){i(e.slot.getSlotElementId(),"fetched")}),googletag.pubads().addEventListener("slotOnload",function(e){i(e.slot.getSlotElementId(),"rendered")}),e=["slotRequested","slotResponseReceived","slotOnload","impressionViewable"],r=!0,o=!1,a=void 0,n.prev=8,c=function(){var e=s.value;googletag.pubads().addEventListener(e,function(t){var n=document.getElementById(t.slot.getSlotElementId());n.dataset[e]||(n.dataset[e]="0"),n.dataset[e]=String(parseInt(n.dataset[e],10)+1)})},u=e[Symbol.iterator]();!(r=(s=u.next()).done);r=!0)c();n.next=17;break;case 13:n.prev=13,n.t0=n.catch(8),o=!0,a=n.t0;case 17:n.prev=17,n.prev=18,!r&&u.return&&u.return();case 20:if(n.prev=20,!o){n.next=23;break}throw a;case 23:return n.finish(20);case 24:return n.finish(17);case 25:googletag.enableServices();case 26:case"end":return n.stop()}},null,n,[[8,13,17,25],[18,,20,24]])}),e()}var r=this,o="unloaded",a=[],u=function(e){o="loading",e.peer39Url&&e.peer39Id?(0,c.default)(document.querySelector('[data-vendor-name="peer-39"]'),function(){return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap((0,f.default)(e.peer39Timeout,(0,s.default)(e)));case 3:googletag.cmd.push(function(){window.p39_sky=window.p39_GPT_value(),googletag.pubads().setTargeting("p39_sky",window.p39_sky)}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("timed-out"===t.t0?"[sdc-site-mpu] Peer39 promise timed-out":t.t0);case 9:n(e);case 10:case"end":return t.stop()}},null,r,[[0,6]])}):n(e)};return function(e){t(function(){googletag.display(e.id)}),"unloaded"===o&&u(e)}}function i(e,t){var n=document.getElementById(e+"-"+t);n&&(n.className="activated",n.innerText=e+": "+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(10),c=r(a),u=n(16),s=r(u),l=n(15),f=r(l);e.exports=t.default}])});
//# sourceMappingURL=sdc-site-mpu.js.map