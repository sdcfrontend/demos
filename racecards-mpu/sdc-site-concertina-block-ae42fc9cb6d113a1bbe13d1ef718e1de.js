!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("sdc-site-concertina-block",[],t):"object"==typeof exports?exports["sdc-site-concertina-block"]=t():e["sdc-site-concertina-block"]=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="/js/modules/components",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){if(e){var t=e.querySelector('[data-role="concertina-block-body"]'),o=e.querySelector('[data-role="concertina-block-toggle"]');t&&o&&o.addEventListener("click",function(r){r.preventDefault();var n=!0;"false"===o.getAttribute("aria-expanded")&&(n=!1),e.setAttribute("data-open",!n),o.setAttribute("aria-expanded",!n),t.setAttribute("aria-hidden",n)})}},e.exports=t["default"]}])});
//# sourceMappingURL=sdc-site-concertina-block.js.map