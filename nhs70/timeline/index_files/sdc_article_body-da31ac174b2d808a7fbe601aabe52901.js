!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.sdc_article_body=e():t.sdc_article_body=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/scripts/",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=i(r);e.default=function(t){function e(){a=!1,u(c)}function n(){i()}function i(){a||requestAnimationFrame(e),a=!0}function r(t){var e=t.getBoundingClientRect().top;return e>=0&&e<=.4925*window.innerHeight}function u(t){var e=t.length,n=0;for(n;n<e;n++)r(t[n])?t[n].classList.add("sdc-timeline-node--active"):r(t[n])||t[n].classList.remove("sdc-timeline-node--active")}function f(){return u(c),window.addEventListener("scroll",(0,o.default)(n,50),!1),window.addEventListener("resize",(0,o.default)(n,150),!1),!0}if(t){var c=[].slice.call(t.getElementsByClassName("sdc-timeline-node")),a=!1;if(c)return f()}},t.exports=e.default},function(t,e){(function(e){"use strict";function n(t,e,n){function i(e){var n=m,i=y;return m=y=void 0,_=e,g=t.apply(i,n)}function o(t){return _=t,x=setTimeout(s,e),T?i(t):g}function u(t){var n=t-j,i=t-_,r=e-n;return E?w(r,b-i):r}function a(t){var n=t-j,i=t-_;return void 0===j||n>=e||n<0||E&&i>=b}function s(){var t=O();return a(t)?l(t):void(x=setTimeout(s,u(t)))}function l(t){return x=void 0,L&&m?i(t):(m=y=void 0,g)}function d(){void 0!==x&&clearTimeout(x),_=0,m=j=y=x=void 0}function p(){return void 0===x?g:l(O())}function v(){var t=O(),n=a(t);if(m=arguments,y=this,j=t,n){if(void 0===x)return o(j);if(E)return x=setTimeout(s,e),i(j)}return void 0===x&&(x=setTimeout(s,e)),g}var m,y,b,g,x,j,_=0,T=!1,E=!1,L=!0;if("function"!=typeof t)throw new TypeError(c);return e=f(e)||0,r(n)&&(T=!!n.leading,E="maxWait"in n,b=E?h(f(n.maxWait)||0,e):b,L="trailing"in n?!!n.trailing:L),v.cancel=d,v.flush=p,v}function i(t,e,i){var o=!0,u=!0;if("function"!=typeof t)throw new TypeError(c);return r(i)&&(o="leading"in i?!!i.leading:o,u="trailing"in i?!!i.trailing:u),n(t,e,{leading:o,maxWait:e,trailing:u})}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function o(t){return!!t&&"object"==typeof t}function u(t){return"symbol"==typeof t||o(t)&&j.call(t)==s}function f(t){if("number"==typeof t)return t;if(u(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=p.test(t);return n||v.test(t)?m(t.slice(2),n?2:8):d.test(t)?a:+t}var c="Expected a function",a=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=parseInt,y="object"==typeof e&&e&&e.Object===Object&&e,b="object"==typeof self&&self&&self.Object===Object&&self,g=y||b||Function("return this")(),x=Object.prototype,j=x.toString,h=Math.max,w=Math.min,O=function(){return g.Date.now()};t.exports=i}).call(e,function(){return this}())}])});
//# sourceMappingURL=sdc_article_body.js.map