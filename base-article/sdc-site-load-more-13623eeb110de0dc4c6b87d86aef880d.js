!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("sdc-site-load-more",[],e):"object"==typeof exports?exports["sdc-site-load-more"]=e():t["sdc-site-load-more"]=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="/js/modules/components",e(0)}([function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),u=r(n);e["default"]=function(t){if(!t)return!1;var e={itemsToShow:parseInt(t.getAttribute("data-items-to-show"),10),itemsToIncrement:parseInt(t.getAttribute("data-items-to-increment"),10),loadMoreButtonText:t.getAttribute("data-button-label")};return(0,u["default"])(t,e)},t.exports=e["default"]},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){u(t,e),t.setAttribute("data-active",!0)}function u(t,e){i(t,e,e.itemsToShow)}function i(t,e,o){var r=m(t);t.setAttribute("data-items-to-show",o),a(r,o),o>=r.length&&b(t)}function a(t,e){for(var o=0;o<t.length;o+=1)o>=e?d(t[o]):s(t[o])}function d(t){t.setAttribute("aria-hidden",!0)}function s(t){t.removeAttribute("aria-hidden")}function c(t,e){var o=l(t),r=o||e.itemsToIncrement;return r}function l(t){var e=f(t),o=e?(0,h["default"])(e,"items-to-show-"):!1;return o}function f(t){return t.querySelector('[data-role="load-more-item"]')}function m(t){return t.querySelectorAll('[data-role="load-more-item"]')}function p(t,e){var o=document.createElement("button");return o.setAttribute("data-role","load-more-button"),o.className="sdc-site-load-more__button",o.innerText=e.loadMoreButtonText,t.appendChild(o),o}function b(t){var e=t.querySelector(".sdc-site-load-more__button");e.className="sdc-site-load-more__button--is-hidden"}Object.defineProperty(e,"__esModule",{value:!0});var v=o(2),h=r(v);e["default"]=function(t,e){if(!t||!e)return!1;var o=m(t);if(e.itemsToShow>=o.length)return!1;var r=p(t,e);return r.addEventListener("click",function(o){o.preventDefault();var r=parseInt(t.getAttribute("data-items-to-show"),10),n=c(t,e),u=r+n;i(t,e,u)}),n(t,e)},t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e){if(!t||"object"!=typeof t||!e||!window.getComputedStyle)return!1;var o=window.getComputedStyle(t,null).getPropertyValue("counter-increment"),r=new RegExp(e+"([0-9]?[0-9])"),n=o.match(r);return n&&n[1]?parseInt(n[1],10):!1},t.exports=e["default"]}])});
//# sourceMappingURL=sdc-site-load-more.js.map