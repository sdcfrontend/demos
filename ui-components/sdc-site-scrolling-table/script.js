!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.script=e():t.script=e()}(window,(function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);e.default=function(t){if(!t)return;!function(t){if(!t)return;const e=t.querySelector('[data-role="scroll-rail"]');e&&(e.scrollWidth-e.offsetWidth&&e.setAttribute("data-overflow",!0),e.onscroll=function(){e.removeAttribute("data-overflow"),e.onscroll=null})}(t);const e=Array.prototype.slice.call(t.querySelectorAll("tbody tr")),r=Array.prototype.slice.call(t.querySelectorAll("th[data-sort]"));function o(t){let e=t;if(e.match(/^£|\$|€/))return parseFloat(e.substring(1));if(e.search(/\//g)>-1&&e.match(/\//g).length>1){const t=e.split("/");return new Date([t[1],t[0],t[2]].join("/")).valueOf()}if(e.match(/\bevs\b|evens/gi))return 1;if(e.search(/\//g)>-1&&1===e.match(/\//g).length){const t=e.split("/");return parseInt(t[0],10)/parseInt(t[1],10)}return isNaN(parseInt(e,10))?e.toLowerCase():e.match(/\./)?parseFloat(e):(e.match(/:/)&&(e=e.replace(/:/gi,"")),parseInt(e,10))}r.forEach(n=>{n.onclick=function(){const n=r.indexOf(this),u="true"===this.getAttribute("data-sort-up");r.forEach(t=>{t.setAttribute("data-sort-up","")}),this.setAttribute("data-sort-up",!u),function(r,n){e.sort((t,e)=>{const u=o(t.querySelectorAll("td")[r].textContent.trim()),i=o(e.querySelectorAll("td")[r].textContent.trim());let l=0;return l=n?u>i?1:-1:u>i?-1:1,l}),e.forEach(e=>{t.querySelector("tbody").appendChild(e)})}(n,!u)}})}}])}));