!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.sdc_site_cookie_notice=o():e.sdc_site_cookie_notice=o()}(this,function(){return function(e){function o(i){if(t[i])return t[i].exports;var n=t[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var t={};return o.m=e,o.c=t,o.p="/scripts/",o(0)}([function(e,o,t){"use strict";function i(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o.default=e,o}Object.defineProperty(o,"__esModule",{value:!0});var n=t(1),c=i(n);o.default=function(e,o){function t(){if(!c.hasNoticeViewedCookie(i)){var o=e.querySelector(".sdc-site-cookie-notice__close");o.addEventListener("click",function(o){o.preventDefault(),c.handleCookieCloseClick(e,i)})}}if(e){var i="eucd";o&&o.cookieName&&(i=o.cookieName),t(e)}},e.exports=o.default},function(e,o){"use strict";function t(e,o){i(o),n(e)}function i(e){document.cookie=e+"=0;path=/;expires="+new Date(+new Date+157785e6).toUTCString()}function n(e){e.className+=" sdc-site-cookie-notice--hidden"}function c(e){return document.cookie.search(e+"=0")!==-1}Object.defineProperty(o,"__esModule",{value:!0}),o.handleCookieCloseClick=t,o.setNoticeViewedCookie=i,o.hideCookieNotice=n,o.hasNoticeViewedCookie=c}])});
//# sourceMappingURL=sdc_site_cookie_notice.js.map