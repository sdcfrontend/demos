!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("sdc-news-footer",[],t):"object"==typeof exports?exports["sdc-news-footer"]=t():e["sdc-news-footer"]=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="/js/modules/components",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(e){if(!e)return!1;var t=e.currentTarget;o(t,t.getAttribute("data-active-class"))}function o(t,o){if(!t||!o)return!1;var r=o.trim(),n=e.getElementsByClassName(r)[0];n&&!t.classList.contains(r)&&n.classList.remove(r),t.classList.toggle(r)}e&&function(){for(var o=e.querySelectorAll(".sdc-news-footer__accordion"),r=0;r<o.length;r++)o[r].addEventListener("click",t,!0)}()},e.exports=t.default}])});
//# sourceMappingURL=sdc-news-footer.js.map