(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{716:function(t,e,n){"use strict";n(23),n(42),n(28),n(37),n(15),n(18),n(43);var r=n(1),o=n.n(r),i=n(53),a=n.n(i),c=n(0),u=n(5);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e=t.children,n=c.useState({scale:u.a.theme.scale,nextScale:u.a.theme.scale,themeKey:u.a.theme.key,nextTheme:u.a.theme.key}),r=a()(n,2),o=r[0],i=r[1];return c.useEffect((function(){return u.a.onThemeChange((function(t){i(l(l({},o),{},{themeKey:t.key,scale:t.scale}))}))}),[o]),c.createElement(c.Fragment,{key:o.themeKey},e)}},721:function(t,e,n){"use strict";n(56);var r=n(3),o=n.n(r),i=n(4),a=n.n(i),c=n(16),u=n.n(c),s=n(19),l=n.n(s),f=n(10),p=n.n(f),h=n(1),v=n.n(h),d=(n(36),n(114),n(0)),m=n(581),y=n(5),g=n(24),w=n(113),b=n.n(w);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var o=p()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l()(this,n)}}var E=b.a.jade381b,L=b.a.d725a288,S=function(t){u()(n,t);var e=O(n);function n(){return o()(this,n),e.apply(this,arguments)}return a()(n,[{key:"render",value:function(){var t=this.props.style;return d.createElement(g.c,{color:g.a.gray600,style:t},this._renderTimestampAndMaybePlace(),this._maybeRenderSource())}},{key:"_renderTimestampAndMaybePlace",value:function(){var t=this.props,e=t.linkColor,n=t.onPlaceClick,r=t.onTimestampClick,o=t.place,i=t.placeLink,a=t.timestamp,c=t.timestampLink,u=function(t){var e=new Date(t),n=E(e),r=L(e);return"".concat(r," · ").concat(n)}(a);return o?d.createElement(b.a.I18NFormatMessage,{$i18n:"ba64a3b2"},d.createElement(g.c,{color:c?e:void 0,link:c,onClick:r},b.a.e9c24489({date:u})),d.createElement(g.c,{color:i?e:void 0,link:i,onClick:n},b.a.a16de8a4({place:o}))):d.createElement(g.c,{color:c?e:void 0,link:c,onClick:r},u)}},{key:"_maybeRenderSource",value:function(){var t=this.props,e=t.linkColor,n=t.onSourceClick,r=t.source,o=t.sourceLink;return r?d.createElement(d.Fragment,null,d.createElement(m.a,null),d.createElement(g.c,{color:o?e:void 0,link:o,onClick:n,style:j.source},r)):null}}]),n}(d.Component);v()(S,"defaultProps",{linkColor:g.a.link});var j=y.a.create((function(t){return{source:{whiteSpace:"normal"}}}));e.a=S},846:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return j}));var r,o,i,a,c=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},u=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},s=function(t,e){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(t(r),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},l=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},f="function"==typeof WeakSet?new WeakSet:new Set,p=function(t,e,n){var r;return function(){e.value>=0&&(n||f.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(r||0),(e.delta||void 0===r)&&(r=e.value,t(e)))}},h=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},d=function(){s((function(t){var e=t.timeStamp;h=e}),!0)},m=function(){return h<0&&(h=v(),d(),l((function(){setTimeout((function(){h=v(),d()}),0)}))),{get timeStamp(){return h}}},y=function(t,e){var n,r=m(),o=c("FCP"),i=u("paint",(function(t){"first-contentful-paint"===t.name&&(i&&i.disconnect(),t.startTime<r.timeStamp&&(o.value=t.startTime,o.entries.push(t),f.add(o),n()))}));i&&(n=p(t,o,e),l((function(r){o=c("FCP"),n=p(t,o,e),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-r.timeStamp,f.add(o),n()}))}))})))},g={passive:!0,capture:!0},w=new Date,b=function(t,e){r||(r=e,o=t,i=new Date,L(removeEventListener),O())},O=function(){if(o>=0&&o<i-w){var t={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+o};a.forEach((function(e){e(t)})),a=[]}},E=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){b(t,e),o()},r=function(){o()},o=function(){removeEventListener("pointerup",n,g),removeEventListener("pointercancel",r,g)};addEventListener("pointerup",n,g),addEventListener("pointercancel",r,g)}(e,t):b(e,t)}},L=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,E,g)}))},S=function(t,e){var n,i=m(),h=c("FID"),v=function(t){t.startTime<i.timeStamp&&(h.value=t.processingStart-t.startTime,h.entries.push(t),f.add(h),n())},d=u("first-input",v);n=p(t,h,e),d&&s((function(){d.takeRecords().map(v),d.disconnect()}),!0),d&&l((function(){var i;h=c("FID"),n=p(t,h,e),a=[],o=-1,r=null,L(addEventListener),i=v,a.push(i),O()}))},j=function(t,e){var n,r=m(),o=c("LCP"),i=function(t){var e=t.startTime;e<r.timeStamp&&(o.value=e,o.entries.push(t)),n()},a=u("largest-contentful-paint",i);if(a){n=p(t,o,e);var h=function(){f.has(o)||(a.takeRecords().map(i),a.disconnect(),f.add(o),n())};["keydown","click"].forEach((function(t){addEventListener(t,h,{once:!0,capture:!0})})),s(h,!0),l((function(r){o=c("LCP"),n=p(t,o,e),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-r.timeStamp,f.add(o),n()}))}))}))}}},851:function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},852:function(t,e,n){t.exports=n(853)},853:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function p(){}function h(){}var v={};v[o]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(S([])));m&&m!==e&&n.call(m,o)&&(v=m);var y=h.prototype=f.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=y.constructor=h,h.constructor=p,p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),c(y,a,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},854:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return o}));var o=function(){function t(){}return t.isAvailable=function(){return void 0===r&&(r="function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")),r},t.getString=function(){return Promise.resolve("")},t.setString=function(t){var e=!1,n=document.body;if(n){var r=document.createElement("span");r.textContent=t,r.style.opacity="0",r.style.position="absolute",r.style.whiteSpace="pre-wrap",r.style.userSelect="auto",n.appendChild(r);var o=window.getSelection();o.removeAllRanges();var i=document.createRange();i.selectNodeContents(r),o.addRange(i);try{document.execCommand("copy"),e=!0}catch(t){}o.removeAllRanges(),n.removeChild(r)}return e},t}()},912:function(t,e,n){"use strict";n(23),n(42),n(28),n(37),n(15),n(18),n(43);var r=n(1),o=n.n(r),i=n(546),a=n(547),c=n(79);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(c.a)("svg",s(s({},t),{},{style:[a.a.root,t.style],viewBox:"0 0 24 24"}),i.createElement("g",null,i.createElement("path",{d:"M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z"}),i.createElement("circle",{cx:"12",cy:"8.042",r:"1.25"}),i.createElement("path",{d:"M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"})))};l.metadata={width:24,height:24},e.a=l},914:function(t,e,n){"use strict";n(23),n(42),n(28),n(37),n(15),n(18),n(43);var r=n(1),o=n.n(r),i=n(546),a=n(547),c=n(79);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(c.a)("svg",s(s({},t),{},{style:[a.a.root,t.style],viewBox:"0 0 24 24"}),i.createElement("g",null,i.createElement("path",{d:"M8.98 22.698c-.103 0-.205-.02-.302-.063-.31-.135-.49-.46-.44-.794l1.228-8.527H6.542c-.22 0-.43-.098-.573-.266-.144-.17-.204-.393-.167-.61L7.49 2.5c.062-.36.373-.625.74-.625h6.81c.23 0 .447.105.59.285.142.18.194.415.14.64l-1.446 6.075H19c.29 0 .553.166.678.428.124.262.087.57-.096.796L9.562 22.42c-.146.18-.362.276-.583.276zM7.43 11.812h2.903c.218 0 .425.095.567.26.142.164.206.382.175.598l-.966 6.7 7.313-8.995h-4.05c-.228 0-.445-.105-.588-.285-.142-.18-.194-.415-.14-.64l1.446-6.075H8.864L7.43 11.812z"})))};l.metadata={width:24,height:24},e.a=l}}]);