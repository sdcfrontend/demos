!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["sdc-article-video"]=t():e["sdc-article-video"]=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/js/modules/components",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var o={};return Object.keys(e).forEach(function(n){"string"==typeof e[n]?o[n]=e[n].replace("ASSET_VERSION",t):o[n]=e[n]}),o}Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),a=o(2),s=o(3),l=n(s),c=o(5),d=n(c),u=o(12),f=n(u),p=o(13),y=n(p),m="4.10.6";t.default=function(e){function t(){var e=o.root.getAttribute("data-subdomain"),t=(0,i.getVideoProvider)(o);e&&(o.assets.subdomain=""+o.assets.subdomain+e+"."),"svl"===t&&(0,a.playSvlVideoHandler)(o),"ooyala"===t&&!function(){(0,i.ObjAssignPolyfill)();var e=o.root.querySelector(".sdc-article-video__media-ooyala"),t=o.root.querySelector(".sdc-article-video__media-container"),n=o.root.querySelector('[data-role="preload-poster"]'),a=(0,y.default)(e),s=a.pcode;!s&&a.apiKey&&(s=a.apiKey.split(".")[0]);var l=a.opt&&JSON.parse(a.opt),c="true"===a.tokenRequired;!c&&l&&(c=l.enabled===!0);var u=a.tokenFetchMethod;!u&&l&&(u="url"),Object.assign(o.ooyala,{containerId:e.id,mediaContainer:t,preloadPoster:n,videoId:a.videoId,originatorId:a.originatorId,sdcVideoId:a.sdcVideoId,sdcVideoType:a.videoType,sdcDeliveryType:a.deliveryType,sdcChannelName:a.channelName,pcode:s,playerBrandingId:a.brandingId,adsProvider:a.advertProvider,autoplay:!!a.autoplay,tokenRequired:c,tokenFetchMethod:u}),a.skinOverride&&Object.assign(o.ooyala.skin.inline,JSON.parse(a.skinOverride)),a.html5SkinJs&&(o.ooyala.assets.js.skin=a.html5SkinJs),"false"===a.discovery&&(o.ooyala.assets.js.discovery=!1),a.iosPlayMode&&(o.ooyala.iosPlayMode=a.iosPlayMode),a.bitrates&&(o.ooyala.bitrates=JSON.parse(a.bitrates)),a.tokenFetchOptions&&(o.ooyala.tokenFetchOptions=JSON.parse(a.tokenFetchOptions),o.ooyala.tokenFetchOptions.media_id=a.sdcVideoId),!a.tokenFetchOptions&&l&&(o.ooyala.tokenFetchOptions=l);var f=a.ooyalaAssetVersion||m;["js","css"].forEach(function(e){o.ooyala.assets[e]=r(o.ooyala.assets[e],f)}),o.ooyala.skin=r(o.ooyala.skin,f),(0,d.default)(o)}(),o.root.dataset.init=!0}if(e&&!(0,l.default)(e)){var o={root:e,jquery:"https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js",svl:{assets:{subdomain:"http://",css:"player.sky.com/css/skyplayer.min.css",js:"player.sky.com/ga/dist/jquery.skyplayer.js"}},ooyala:{assets:{js:{core:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/core.min.js",player:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/video-plugin/main_html5.min.js",bitWrapper:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/video-plugin/bit_wrapper.min.js",osmfFlash:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/video-plugin/osmf_flash.min.js",skin:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/skin-plugin/html5-skin.min.js",freewheel:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/ad-plugin/freewheel.min.js",googleima:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/ad-plugin/google_ima.min.js",discovery:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/other-plugin/discovery_api.min.js"},css:{skin:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/skin-plugin/html5-skin.min.css"}},autoplay:!1,preload:!1,debug:!1,"google-ima-ads-manager":{showAdControls:!0,useGoogleCountdown:!0},skin:{config:"//player.ooyala.com/static/v4/stable/ASSET_VERSION/skin-plugin/skin.json",inline:f.default}}};t()}},e.exports=t.default},function(e,t){"use strict";function o(e){var t=arguments.length<=1||void 0===arguments[1]||arguments[1];if(!e)return!1;var o=document.createElement("script");return o.async=t,o.src=e,document.getElementsByTagName("head")[0].appendChild(o),o}function n(e){if(!e)return!1;var t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),t}function r(e,t){return!(!e||!t)&&(e.classList.add(t.trim()),!0)}function i(e){var t=e.root.getAttribute("data-provider");return!(!t||"string"!=typeof t)&&t.toLowerCase()}function a(e){if(!e)return!0;for(var t=document.getElementsByTagName("script"),o=0;o<t.length;o++)if(t[o].getAttribute("src")===e)return!1;return!0}function s(){"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null===e)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!==r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(o[i]=r[i])}return o})}Object.defineProperty(t,"__esModule",{value:!0}),t.loadJS=o,t.loadCSS=n,t.addClass=r,t.getVideoProvider=i,t.checkJS=a,t.ObjAssignPolyfill=s},function(e,t,o){"use strict";function n(e){return!(!e||!e.root)&&e.root.addEventListener("click",function(t){t.target.className.match(/cta_play|initialplaycontrol/)&&(0,s.addClass)(e.root,"sky-component-video--play")})}function r(e){return"function"==typeof jQuery?((0,s.loadJS)(e.svl.assets.subdomain+e.svl.assets.js),!0):((0,s.loadJS)(e.jquery),window.setTimeout(function(){r(e)},200),!1)}function i(e){r(e),(0,s.loadCSS)(e.svl.assets.subdomain+e.svl.assets.css)}function a(e){i(e),n(e),(0,s.addClass)(e.root,"sdc-article-video--active")}Object.defineProperty(t,"__esModule",{value:!0}),t.playVideoHandler=n,t.loadScripts=r,t.loadVideoAssets=i,t.playSvlVideoHandler=a;var s=o(1)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return!(!i(e)&&!s(e))||!(!a(e)||d(t,f(t)))}function i(e){return!("undefined"==typeof e.SKY_SPORTS_APP||!e.SKY_SPORTS_APP.video||!e.SKY_SPORTS_APP.video.play)}function a(e){return!("undefined"==typeof e.appWrapper||!e.appWrapper.app||!e.appWrapper.app.video)}function s(e){return!("undefined"==typeof e.AndroidApp||!e.AndroidApp.playVideo)}function l(e,t){t.addEventListener("click",function(o){o.stopPropagation(),i(e)&&e.SKY_SPORTS_APP.video.play(c(t),u(t),f(t),p(t),t),a(e)&&(e.appWrapper.app.video.start&&e.appWrapper.app.video.start(c(t),u(t),f(t),p(t),t),e.appWrapper.app.video.startv2&&e.appWrapper.app.video.startv2(c(t),u(t),f(t),p(t),t)),s(e)&&e.AndroidApp.playVideo(c(t),u(t),f(t),p(t),t)},!1)}function c(e){var t=e.getAttribute("data-legacy");return"true"===t?e.getAttribute("data-sdc-video-id"):e.getAttribute("data-video-id")}function d(e,t){var o=e.getAttribute("data-video-blacklisted-originator-ids");if(!o)return!1;var n=o.split(",");return n.indexOf(""+t)!==-1}function u(e){return e.getAttribute("data-package")}function f(e){return e.getAttribute("data-originator-id")}function p(e){var t=e.querySelector('[data-role="caption-text"]');return t?t.innerText:""}Object.defineProperty(t,"__esModule",{value:!0}),t.isBlacklistedOriginator=d;var y=o(4),m=n(y);t.default=function(e){var t=m.default.getRoot(window);return!!r(t,e)&&(l(t,e),!0)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={active:function(e){return e.self!==e.top},getRoot:function(e){return this.active(e)?e.top:e}},e.exports=t.default},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(){window.setTimeout(function t(){return"object"!=typeof window.OO?window.setTimeout(t,y):void(window.OO.isIE&&!window.OO.isIE11Plus?(e.ooyala.autoplay=!0,e.ooyala.preloadPoster.setAttribute("data-playing","ready"),o.addEventListener("click",function(){(0,u.default)(e.ooyala)})):"complete"===document.readyState?(0,u.default)(e.ooyala):document.addEventListener("readystatechange",function(){"complete"===document.readyState&&(0,u.default)(e.ooyala)}))},y)}var o=e.ooyala.mediaContainer;o.setAttribute("data-config",e),t()}function i(e){function t(e){(0,c.checkJS)(e)&&(0,c.loadJS)(e,!1)}var o=e.ooyala.assets.js;Object.keys(o).filter(function(e){return!e.match(/googleima|freewheel/)}).map(function(e){return o[e]}).forEach(function(e){return t(e)}),"dfp"===e.ooyala.adsProvider&&t(o.googleima),"freewheel"===e.ooyala.adsProvider&&t(o.freewheel)}function a(e){var t=window.sdc&&window.sdc.pubSub;return t&&(e.onCreate=(0,p.default)(t)),e}function s(e){(0,c.loadCSS)(e.ooyala.assets.css.skin)}function l(e){i(e),s(e)}Object.defineProperty(t,"__esModule",{value:!0});var c=o(1),d=o(6),u=n(d),f=o(10),p=n(f),y=1e3;t.default=function(e){return!(!e||!e.root)&&(l(e),a(e.ooyala),r(e),!0)},e.exports=t.default},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return"auth-manager"===e.tokenFetchMethod?(0,c.default)(e.sdcVideoId):"url"===e.tokenFetchMethod?(0,u.default)(e.tokenFetchOptions):Promise.reject("Unknown fetch method supplied")}function i(e){s(e),a(e);var t=window.OO.Player.create(e.containerId,e.videoId,e);return window[e.videoId]=t,t.mb.subscribe("*","example",function(t){t.match(/initialPlay|willPlayAds/)&&e.preloadPoster.setAttribute("data-playing","false"),t.match(/playbackReady/)&&e.preloadPoster.setAttribute("data-playing","ready"),t.match(/\bplaying\b|videoPlaying|error/)&&e.preloadPoster.setAttribute("data-remove-poster","true")}),t}function a(e){(window.OO.isMacOs||window.OO.isWindows)&&e.bitrates&&e.bitrates.desktop&&(e.initialBitrate=e.bitrates.desktop)}function s(e){window.OO.isAndroid&&e.mediaContainer.setAttribute("data-android",!0),window.OO.isIos&&e.mediaContainer.setAttribute("data-ios",!0),window.OO.isWinPhone&&e.mediaContainer.setAttribute("data-win-phone",!0)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(7),c=n(l),d=o(8),u=n(d);t.default=function(e){return e.tokenRequired?r(e).then(function(t){return"object"==typeof t&&t.token&&(t=t.token),e.embedToken=t,i(e)}).catch(function(e){return"Unable to create player: "+e}):Promise.resolve(i(e))},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return!(!window.sdc||!window.sdc.authManager||"function"!=typeof window.sdc.authManager.getToken)&&window.sdc.authManager.getToken(e).then(function(e){return e})},e.exports=t.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(9),t.default=function(e){var t={method:"get"},o=e.url;return"post"===e.method&&(t={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"media_item="+e.media_id}),e.base_domain&&(o=e.base_domain+"?originator="+e.originator+"&embed_code="+e.media_id),fetch(o,t).then(function(e){return e.json()})},e.exports=t.default},function(e,t){"use strict";!function(e){function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function o(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function r(e){this.map={},e instanceof r?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,o){e.onload=function(){t(e.result)},e.onerror=function(){o(e.error)}})}function s(e){var t=new FileReader,o=a(t);return t.readAsArrayBuffer(e),o}function l(e){var t=new FileReader,o=a(t);return t.readAsText(e),o}function c(e){for(var t=new Uint8Array(e),o=new Array(t.length),n=0;n<t.length;n++)o[n]=String.fromCharCode(t[n]);return o.join("")}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function u(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(b.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(b.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(b.arrayBuffer&&b.blob&&g(e))this._bodyArrayBuffer=d(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!w(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=d(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return l(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e){var t=e.toUpperCase();return S.indexOf(t)>-1?t:e}function p(e,t){t=t||{};var o=t.body;if(e instanceof p){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new r(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new r(t.headers)),this.method=f(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var o=e.split("="),n=o.shift().replace(/\+/g," "),r=o.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(r))}}),t}function m(e){var t=new r;return e.split(/\r?\n/).forEach(function(e){var o=e.split(":"),n=o.shift().trim();if(n){var r=o.join(":").trim();t.append(n,r)}}),t}function h(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new r(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var b={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(b.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},w=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};r.prototype.append=function(e,n){e=t(e),n=o(n);var r=this.map[e];this.map[e]=r?r+","+n:n},r.prototype.delete=function(e){delete this.map[t(e)]},r.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},r.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},r.prototype.set=function(e,n){this.map[t(e)]=o(n)},r.prototype.forEach=function(e,t){for(var o in this.map)this.map.hasOwnProperty(o)&&e.call(t,this.map[o],o,this)},r.prototype.keys=function(){var e=[];return this.forEach(function(t,o){e.push(o)}),n(e)},r.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},r.prototype.entries=function(){var e=[];return this.forEach(function(t,o){e.push([o,t])}),n(e)},b.iterable&&(r.prototype[Symbol.iterator]=r.prototype.entries);var S=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},u.call(p.prototype),u.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var O=[301,302,303,307,308];h.redirect=function(e,t){if(O.indexOf(t)===-1)throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},e.Headers=r,e.Request=p,e.Response=h,e.fetch=function(e,t){return new Promise(function(o,n){var r=new p(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;o(new h(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(r.method,r.url,!0),"include"===r.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),r.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"==typeof r._bodyInit?null:r._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:void 0)},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function r(e){return function(t){t.mb.subscribe("*","component-bridge",function(o){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var s=i(o);s&&e.publish(s,{player:t,otherArgs:r})})}}function i(e){switch(e){case OO.EVENTS.PLAY:return s.PLAY;case OO.EVENTS.PAUSE:return s.PAUSE;case OO.EVENTS.PLAYBACK_READY:return s.READY;case OO.EVENTS.SEEKED:return s.SEEKED;case OO.EVENTS.PLAYED:return s.PLAYED;case OO.EVENTS.ERROR:return s.ERROR;default:return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a=o(11),s=n(a);e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="article-video.events",n=o+".play";t.PLAY=n;var r=o+".pause";t.PAUSE=r;var i=o+".ready";t.READY=i;var a=o+".seeked";t.SEEKED=a;var s=o+".played";t.PLAYED=s;var l=o+".error";t.ERROR=l},function(e,t){"use strict";e.exports={general:{watermark:{imageResource:{url:"",androidResource:"logo",iosResource:"logo"},position:"bottomRight",clickUrl:"",target:"_blank",transparency:1,scalingOption:"default",scalingPercentage:20},loadingImage:{imageResource:{url:"//player.ooyala.com/static/v4/candidate/latest/skin-plugin/assets/images/loader_svg.svg"}},accentColor:"#448aff"},localization:{defaultLanguage:"en",availableLanguageFile:[{language:"en",languageFile:"",androidResource:"skin-config/en.json",iosResource:"en"},{language:"es",languageFile:"",androidResource:"skin-config/es.json",iosResource:"es"},{language:"zh",languageFile:"",androidResource:"skin-config/zh.json",iosResource:"zh"}]},responsive:{breakpoints:{xs:{id:"xs",name:"oo-xsmall",maxWidth:559,multiplier:.7},sm:{id:"sm",name:"oo-small",minWidth:560,maxWidth:839,multiplier:1},md:{id:"md",name:"oo-medium",minWidth:840,maxWidth:1279,multiplier:1},lg:{id:"lg",name:"oo-large",minWidth:1280,multiplier:1.2}},aspectRatio:56.25},startScreen:{promoImageSize:"default",showPlayButton:!0,playButtonPosition:"center",playIconStyle:{color:"white",opacity:1},showTitle:!0,showDescription:!0,titleFont:{color:"white"},descriptionFont:{color:"white"},infoPanelPosition:"topLeft",showPromo:!0},pauseScreen:{showPauseIcon:!0,pauseIconPosition:"center",PauseIconStyle:{color:"white",opacity:1},showTitle:!0,showDescription:!0,infoPanelPosition:"topLeft",screenToShowOnPause:"discovery"},endScreen:{screenToShowOnEnd:"discovery",showReplayButton:!0,replayIconStyle:{color:"white",opacity:1},showTitle:!1,showDescription:!1,infoPanelPosition:"topLeft"},adScreen:{showAdMarquee:!0,showAdCountDown:!0,showControlBar:!0},discoveryScreen:{panelTitle:{titleFont:{fontFamily:null,color:"white"}},contentTitle:{show:!0,font:{fontFamily:null,color:"white"}},showCountDownTimerOnEndScreen:!0,countDownTime:"10"},shareScreen:{shareContent:["social"]},moreOptionsScreen:{brightOpacity:1,darkOpacity:.4,iconSize:30,color:"white",iconStyle:{active:{color:"#FFFFFF",opacity:1},inactive:{color:"#FFFFFF",opacity:.95}}},closedCaptionOptions:{enabled:!1,language:"en",textColor:"White",windowColor:"Transparent",backgroundColor:"Black",textOpacity:1,backgroundOpacity:.6,windowOpacity:0,fontType:"Proportional Sans-Serif",fontSize:"Medium",textEnhancement:"Uniform"},upNext:{showUpNext:!0,timeToShow:"10"},controlBar:{volumeControl:{color:""},iconStyle:{active:{color:"#FFFFFF",opacity:1},inactive:{color:"#FFFFFF",opacity:.95}},autoHide:!0,height:90,logo:{imageResource:{url:"",androidResource:"logo",iosResource:"logo"},clickUrl:"http://www.ooyala.com",target:"_blank",width:96,height:24},adScrubberBar:{backgroundColor:"rgba(175,175,175,1)",bufferedColor:"rgba(127,127,127,1)",playedColor:"rgba(255,63,128,1)",scrubberHandleColor:"rgba(67,137,255,1)",scrubberHandleBorderColor:"rgba(255,255,255,1)"},scrubberBar:{backgroundColor:"rgba(175,175,175,0.5)",bufferedColor:"rgba(175,175,175,0.7)",playedColor:"",scrubberHandleColor:"rgba(67,137,255,1)",scrubberHandleBorderColor:"rgba(255,255,255,1)",thumbnailPreview:!0}},live:{forceDvrDisabled:!1},buttons:{desktopContent:[{name:"playPause",location:"controlBar",whenDoesNotFit:"keep",minWidth:45},{name:"volume",location:"controlBar",whenDoesNotFit:"keep",minWidth:240},{name:"live",location:"controlBar",whenDoesNotFit:"keep",minWidth:45},{name:"timeDuration",location:"controlBar",whenDoesNotFit:"drop",minWidth:145},{name:"flexibleSpace",location:"controlBar",whenDoesNotFit:"keep",minWidth:1},{name:"share",location:"controlBar",whenDoesNotFit:"moveToMoreOptions",minWidth:45},{name:"discovery",location:"controlBar",whenDoesNotFit:"moveToMoreOptions",minWidth:45},{name:"quality",location:"controlBar",whenDoesNotFit:"moveToMoreOptions",minWidth:45},{name:"logo",location:"controlBar",whenDoesNotFit:"keep",minWidth:125},{name:"fullscreen",location:"controlBar",whenDoesNotFit:"keep",minWidth:45},{name:"moreOptions",location:"controlBar",whenDoesNotFit:"keep",minWidth:45}],desktopAd:[{name:"playPause",location:"controlBar",whenDoesNotFit:"keep",minWidth:45},{name:"volume",location:"controlBar",whenDoesNotFit:"keep",minWidth:240},{name:"flexibleSpace",location:"controlBar",whenDoesNotFit:"keep",minWidth:1},{name:"logo",location:"controlBar",whenDoesNotFit:"keep",minWidth:125},{name:"fullscreen",location:"controlBar",whenDoesNotFit:"keep",minWidth:45},{name:"moreOptions",location:"controlBar",whenDoesNotFit:"keep",minWidth:45}],mobileContent:[{name:"volume",location:"controlBar",whenDoesNotFit:"keep",minWidth:50},{name:"live",location:"controlBar",whenDoesNotFit:"keep",minWidth:45},{name:"timeDuration",location:"controlBar",whenDoesNotFit:"drop",minWidth:100},{name:"flexibleSpace",location:"controlBar",whenDoesNotFit:"keep",minWidth:1},{name:"share",location:"moreOptions"},{name:"discovery",location:"moreOptions"},{name:"closedCaption",location:"moreOptions"},{name:"fullscreen",location:"controlBar",whenDoesNotFit:"keep",minWidth:50},{name:"moreOptions",location:"controlBar",whenDoesNotFit:"keep",minWidth:50}],mobileAd:[{name:"volume",location:"controlBar",whenDoesNotFit:"keep",minWidth:50},{name:"flexibleSpace",location:"controlBar",whenDoesNotFit:"keep",minWidth:1},{name:"fullscreen",location:"controlBar",whenDoesNotFit:"keep",minWidth:50},{name:"moreOptions",location:"controlBar",whenDoesNotFit:"keep",minWidth:50}]},icons:{play:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-play-slick"},pause:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-pause-slick"},volume:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-volume-on-ooyala-default"},volumeOff:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-volume-mute-ooyala-default"},expand:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-fullscreen"},compress:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-minimizescreen"},ellipsis:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-menu"},replay:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-replay"},share:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-share"},cc:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-cc"},discovery:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-discovery"},quality:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-bitrate"},setting:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-settings"},dismiss:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-close"},toggleOn:{fontFamilyName:"fontawesome",fontString:"",fontStyleClass:""},toggleOff:{fontFamilyName:"fontawesome",fontString:"",fontStyleClass:""},left:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-left-arrow"},right:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-right-arrow"},learn:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-more-information"},skip:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-skip-slick"},warning:{fontFamilyName:"fontawesome",fontString:"",fontStyleClass:""},auto:{fontFamilyName:"ooyala-slick-type",fontString:"",fontStyleClass:"oo-icon oo-icon-system-auto"}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=e.attributes,o={},n=0;n<t.length;n++){var r=t[n];if(r&&r.name&&/^data-\w[\w\-]*$/.test(r.name)){var i=r.name,a=r.value,s=i.substr(5).replace(/-./g,function(e){return e.charAt(1).toUpperCase()});Object.defineProperty(o,s,{get:function(){return this.value}.bind({value:a||""}),set:function(e,t){"undefined"!=typeof t?this.setAttribute(e,t):this.removeAttribute(e)}.bind(e,i)})}}return o},e.exports=t.default}])});