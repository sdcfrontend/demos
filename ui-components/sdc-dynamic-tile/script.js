!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.script=e():t.script=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){(function(e,r){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */var n;n=function(){"use strict";function t(t){return"function"==typeof t}var n=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,s=void 0,a=function(t,e){p[o]=t,p[o+1]=e,2===(o+=2)&&(s?s(y):g())},u="undefined"!=typeof window?window:void 0,c=u||{},l=c.MutationObserver||c.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var t=setTimeout;return function(){return t(y,1)}}var p=new Array(1e3);function y(){for(var t=0;t<o;t+=2)(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0;o=0}var b,m,v,w,g=void 0;function _(t,e){var r=this,n=new this.constructor(x);void 0===n[A]&&U(n);var o=r._state;if(o){var i=arguments[o-1];a((function(){return I(o,n,i,r._result)}))}else j(r,n,t,e);return n}function T(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(x);return S(e,t),e}f?g=function(){return e.nextTick(y)}:l?(m=0,v=new l(y),w=document.createTextNode(""),v.observe(w,{characterData:!0}),g=function(){w.data=m=++m%2}):h?((b=new MessageChannel).port1.onmessage=y,g=function(){return b.port2.postMessage(0)}):g=void 0===u?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(y)}:d()}catch(t){return d()}}():d();var A=Math.random().toString(36).substring(2);function x(){}function E(e,r,n){r.constructor===e.constructor&&n===_&&r.constructor.resolve===T?function(t,e){1===e._state?O(t,e._result):2===e._state?C(t,e._result):j(e,void 0,(function(e){return S(t,e)}),(function(e){return C(t,e)}))}(e,r):void 0===n?O(e,r):t(n)?function(t,e,r){a((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?S(t,r):O(t,r))}),(function(e){n||(n=!0,C(t,e))}),t._label);!n&&o&&(n=!0,C(t,o))}),t)}(e,r,n):O(e,r)}function S(t,e){if(t===e)C(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(n=e),null===n||"object"!==o&&"function"!==o)O(t,e);else{var r=void 0;try{r=e.then}catch(e){return void C(t,e)}E(t,e,r)}var n,o}function P(t){t._onerror&&t._onerror(t._result),B(t)}function O(t,e){void 0===t._state&&(t._result=e,t._state=1,0!==t._subscribers.length&&a(B,t))}function C(t,e){void 0===t._state&&(t._state=2,t._result=e,a(P,t))}function j(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=r,o[i+2]=n,0===i&&t._state&&a(B,t)}function B(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?I(r,n,o,i):o(i);t._subscribers.length=0}}function I(e,r,n,o){var i=t(n),s=void 0,a=void 0,u=!0;if(i){try{s=n(o)}catch(t){u=!1,a=t}if(r===s)return void C(r,new TypeError("A promises callback cannot return that same promise."))}else s=o;void 0!==r._state||(i&&u?S(r,s):!1===u?C(r,a):1===e?O(r,s):2===e&&C(r,s))}var k=0;function U(t){t[A]=k++,t._state=void 0,t._result=void 0,t._subscribers=[]}var R=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(x),this.promise[A]||U(this.promise),n(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&O(this.promise,this._result))):C(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;void 0===this._state&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===T){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===_&&void 0!==t._state)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===D){var a=new r(x);s?C(a,i):E(a,t,o),this._willSettleAt(a,e)}else this._willSettleAt(new r((function(e){return e(t)})),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;void 0===n._state&&(this._remaining--,2===t?C(n,r):this._result[e]=r),0===this._remaining&&O(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;j(t,void 0,(function(t){return r._settledAt(1,e,t)}),(function(t){return r._settledAt(2,e,t)}))},t}(),D=function(){function e(t){this[A]=k++,this._result=this._state=void 0,this._subscribers=[],x!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){S(t,e)}),(function(e){C(t,e)}))}catch(e){C(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this.constructor;return t(e)?this.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):this.then(e,e)},e}();return D.prototype.then=_,D.all=function(t){return new R(this,t).promise},D.race=function(t){var e=this;return n(t)?new e((function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)})):new e((function(t,e){return e(new TypeError("You must pass an array to race."))}))},D.resolve=T,D.reject=function(t){var e=new this(x);return C(e,t),e},D._setScheduler=function(t){s=t},D._setAsap=function(t){a=t},D._asap=a,D.polyfill=function(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=D},D.Promise=D,D},t.exports=n()}).call(this,r(1),r(2))},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=a(h);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new p(t,e)),1!==c.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){!function(t){"use strict";if(!t.fetch){var e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,n="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in t,i="ArrayBuffer"in t;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=function(t){return t&&DataView.prototype.isPrototypeOf(t)},u=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};p.prototype.append=function(t,e){t=f(t),e=h(e);var r=this.map[t];this.map[t]=r?r+","+e:e},p.prototype.delete=function(t){delete this.map[f(t)]},p.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},p.prototype.set=function(t,e){this.map[f(t)]=h(e)},p.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},p.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},p.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},p.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},r&&(p.prototype[Symbol.iterator]=p.prototype.entries);var c=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},w.call(g.prototype),w.call(T.prototype),T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},T.error=function(){var t=new T(null,{status:0,statusText:""});return t.type="error",t};var l=[301,302,303,307,308];T.redirect=function(t,e){if(-1===l.indexOf(e))throw new RangeError("Invalid status code");return new T(null,{status:e,headers:{location:t}})},t.Headers=p,t.Request=g,t.Response=T,t.fetch=function(t,e){return new Promise((function(r,o){var i=new g(t,e),s=new XMLHttpRequest;s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new p,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new T(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n&&(s.responseType="blob"),i.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),s.send(void 0===i._bodyInit?null:i._bodyInit)}))},t.fetch.polyfill=!0}function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function h(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function p(t){this.map={},t instanceof p?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function b(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function m(t){var e=new FileReader,r=b(e);return e.readAsArrayBuffer(t),r}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(n&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(o&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(i&&n&&a(t))this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!i||!ArrayBuffer.prototype.isPrototypeOf(t)&&!u(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=v(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var t,e,r,n=y(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=b(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}function g(t,e){var r,n,o=(e=e||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),c.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function _(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function T(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t,e,r){"use strict";r.r(e);var n=function(t){if(200===t.status)return t;throw new Error("Response not 200")},o=function(t,e){window.sdc&&window.sdc.pubSub&&window.sdc.pubSub.publish(t,e)},i={getWindowLocationHRefWithoutQueryParams:function(){return window.location.href.split("?")[0]}};var s=class{constructor(){this.targetFetchedHandler=this.targetFetchedHandler.bind(this),this.tileClickedHandler=this.tileClickedHandler.bind(this)}get tileSegment(){return this._tileSegment}set tileSegment(t){t&&(this._tileSegment=t)}subscribe(t,e){e&&(this.context=e),window.sdc&&window.sdc.pubSub&&window.sdc.pubSub.subscribe(t,this.resolveHandler(t))}resolveHandler(t){switch(t){case"dynamic-tile.events.adobe-target-fetched":return this.targetFetchedHandler;case"dynamic-tile.events.dynamic-tile-clicked":return this.tileClickedHandler;default:return}}targetFetchedHandler(t){this.tileSegment=t&&t.contentName?t.contentName:"default"}tileClickedHandler(t){if(!window.adobe||!window.adobe.target)return;const e=this.context.mbox,r={mbox:e,marketingCloudVisitorId:this.context.marketingCloudVisitorId,thirdPartyId:this.context.thirdPartyId,mboxParameters:{...this.context.mboxParameters,"page.tile.clicked":this.tileSegment}};adobe.target.trackEvent({mbox:e,params:r})}};var a=class{getContent(t,e){if(!window.adobe)return void console.log("Adobe target not defined");const r=this.getTargetCookies(),n=this.getAnalyticsData(e);return this.initAnalyticsSubscriber(t,r,n),this.makeRequests(t.mbox,{...r,...n},t.appUrl)}getTargetCookies(){const t=function(){const t=decodeURIComponent(document.cookie).split(";"),e={};return t.forEach(t=>{const r=t.substring(0,t.indexOf("="));e[r.trim()]=t.substring(t.indexOf("=")+1)}),e}(),e=t.interactive?JSON.parse(t.interactive):"";return{marketingCloudVisitorId:this.getMCMIDCookie(t),thirdPartyId:""!==e?e.tid:""}}getAnalyticsData(t){if(t.page)return{mboxParameters:{"page.pageName":t.page.pageName,"page.breadCrumb[0]":t.page.breadCrumb,"page.siteName":t.page.siteName,"page.currentUrl":i.getWindowLocationHRefWithoutQueryParams()},profileParameters:{"customer.country":"GB"}};console.log("Page data for web analytics not defined.")}initAnalyticsSubscriber(t,e,r){const n=new s;n.subscribe("dynamic-tile.events.adobe-target-fetched"),n.subscribe("dynamic-tile.events.dynamic-tile-clicked",{...r,mbox:t.mbox,marketingCloudVisitorId:e.marketingCloudVisitorId,thirdPartyId:e.thirdPartyId})}getMCMIDCookie(t){const e=t["AMCV_0ABA4673527831C00A490D45@AdobeOrg"];return e?/(MCMID)\|(\d+)/.exec(e)[2]:""}makeRequests(t,e,r){return this.requestTargetData(t,e).then(t=>{const e=this.getTargetContent(t[0]),n=this.getTargetSegment(e);return o("dynamic-tile.events.adobe-target-fetched",e),this.requestElementHtml(n,r)})}requestElementHtml(t,e){return fetch(`${e}/${t}`).then(n).then(t=>t.text())}getTargetContent(t){try{return JSON.parse(t.content.split('<script type="text/javascript">')[0])}catch(t){return!1}}getTargetSegment(t){return t&&t.contentName?t.contentName:"default"}requestTargetData(t,e){return new Promise((r,n)=>{adobe.target.getOffer({mbox:t,params:e,success:t=>{r(t)},error:t=>{n(t)}})})}};const u={target:()=>new a,default:()=>!1};var c=r(0),l=r.n(c);r(3),e.default=function(t,e){const r=JSON.parse(e.providerOptions),n=JSON.parse(e.providerData);if(!t)return;"undefined"==typeof Promise&&l.a.polyfill();const i=(s=r.name,(u[s]?u[s]:u.default)());var s;return i?i.getContent(r,n).then(r=>{let n="nextElementSibling";"previous"===e.siblingToReplace&&(n="previousElementSibling"),t[n].outerHTML=r,t[n].addEventListener("click",()=>{o("dynamic-tile.events.dynamic-tile-clicked")})}).catch(t=>{console.log(t)}):void 0}}])}));