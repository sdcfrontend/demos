define("widget-lite", [], function() {
    return {
        instances: {},
        _idCount: 0,
        init: function() {
            this.scan(), SKY_SPORTS.device.hasCssAnimations ? this._scanUsingAnimationEvent() : this._scanOnBreakPointChange();
        },
        convertDataSetToObject: function(e) {
            var t = this.extendOptions({}, e);
            for (var i in t) isNaN(t[i]) || (t[i] = parseFloat(t[i])), "false" === t[i] && (t[i] = !1), 
            "true" === t[i] && (t[i] = !0);
            return t;
        },
        extendOptions: function(e, t) {
            var i;
            for (i in t) {
                var n = t[i];
                e[i] = n;
            }
            return e;
        },
        runFunction: function(e) {
            var t = this.convertDataSetToObject(e.dataset), i = t.fn, n = this;
            e.classList.contains("callfn") && t.lite && i && (e.classList.remove("callfn"), 
            require([ i ], function(i) {
                if (e.getAttribute("data-component-name")) i(e, t); else {
                    var s = new i();
                    n.extendOptions(s, t), s.rootElement = e, s.init(e, t), e.id = e.id || "widgetLite-" + n._idCount++, 
                    n.instances[e.id] = s;
                }
            }));
        },
        destroy: function(e) {
            this.instances[e] = null, delete this.instances[e];
        },
        scan: function(e) {
            e || (e = document);
            var t, i, n = e.querySelectorAll(".callfn"), s = document.getElementsByTagName("head")[0];
            for (t = 0; t < n.length; t++) ((i = n[t]).offsetWidth || s.contains(i)) && this.runFunction(i);
        },
        _scanUsingAnimationEvent: function() {
            document.addEventListener(SKY_SPORTS.device.animationEventName, function(e) {
                "callfn" === e.animationName && this.runFunction(e.target);
            }.bind(this), !1);
        },
        _scanOnBreakPointChange: function() {
            document.addEventListener("breakPointChange", function() {
                this.scan();
            }.bind(this), !1);
        },
        extend: function(e) {
            function t() {}
            return t.prototype = e, t;
        }
    };
}), define("postpone-load", [], function() {
    return {
        tolerance: 333,
        timeOut: 333,
        className: "postpone-load",
        init: function() {
            this.imageList = document.getElementsByClassName ? document.getElementsByClassName(this.className) : document.getElementsByTagName("img"), 
            this.scan();
        },
        scan: function() {
            this.imageList = this.imageList;
            for (var e = -1; ++e < this.imageList.length; ) {
                var t = this.imageList[e];
                this.isInViewPort(t) && this.loadImage(t);
            }
            setTimeout(function() {
                window.requestAnimationFrame(this.scan.bind(this));
            }.bind(this), this.timeOut);
        },
        isInViewPort: function(e) {
            var t = e.getBoundingClientRect();
            return 0 !== t.width && (!(t.bottom < 0 - this.tolerance) && !((window.innerHeight ? window.innerHeight : document.documentElement.clientHeight) - t.top < 0 - this.tolerance));
        },
        loadImage: function(e) {
            var t = e.getAttribute("data-src");
            if (t && e.classList.contains(this.className)) {
                e.onload = function(e) {
                    e.classList.remove(this.className);
                }.bind(this, e), e.onerror = function(e) {
                    e.classList.remove(this.className);
                }.bind(this, e);
                var i = t.match(/\#{(.+)}/);
                if (i) {
                    var n = i[0], s = parseInt(i[1], 10);
                    document.currentBreakPoint > s && (s = document.currentBreakPoint), t = t.replace(n, s);
                }
                e.src === t ? e.onload(e) : e.src = t;
            }
        }
    };
}), function() {
    function e(t, n) {
        var s;
        if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, 
        this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, 
        this.layer = t, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, 
        !e.notNeeded(t)) {
            for (var r = [ "onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel" ], o = this, a = 0, c = r.length; a < c; a++) o[r[a]] = function(e, t) {
                return function() {
                    return e.apply(t, arguments);
                };
            }(o[r[a]], o);
            i && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), 
            t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), 
            t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), 
            t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), 
            Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
                var s = Node.prototype.removeEventListener;
                "click" === e ? s.call(t, e, i.hijacked || i, n) : s.call(t, e, i, n);
            }, t.addEventListener = function(e, i, n) {
                var s = Node.prototype.addEventListener;
                "click" === e ? s.call(t, e, i.hijacked || (i.hijacked = function(e) {
                    e.propagationStopped || i(e);
                }), n) : s.call(t, e, i, n);
            }), "function" == typeof t.onclick && (s = t.onclick, t.addEventListener("click", function(e) {
                s(e);
            }, !1), t.onclick = null);
        }
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0, i = navigator.userAgent.indexOf("Android") > 0 && !t, n = /iP(ad|hone|od)/.test(navigator.userAgent) && !t, s = n && /OS 4_\d(_\d)?/.test(navigator.userAgent), r = n && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), o = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function(e) {
        switch (e.nodeName.toLowerCase()) {
          case "button":
          case "select":
          case "textarea":
            if (e.disabled) return !0;
            break;

          case "input":
            if (n && "file" === e.type || e.disabled) return !0;
            break;

          case "label":
          case "iframe":
          case "video":
            return !0;
        }
        return /\bneedsclick\b/.test(e.className);
    }, e.prototype.needsFocus = function(e) {
        switch (e.nodeName.toLowerCase()) {
          case "textarea":
            return !0;

          case "select":
            return !i;

          case "input":
            switch (e.type) {
              case "button":
              case "checkbox":
              case "file":
              case "image":
              case "radio":
              case "submit":
                return !1;
            }
            return !e.disabled && !e.readOnly;

          default:
            return /\bneedsfocus\b/.test(e.className);
        }
    }, e.prototype.sendClick = function(e, t) {
        var i, n;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), 
        n = t.changedTouches[0], (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), 
        i.forwardedTouchEvent = !0, e.dispatchEvent(i);
    }, e.prototype.determineEventType = function(e) {
        return i && "select" === e.tagName.toLowerCase() ? "mousedown" : "click";
    }, e.prototype.focus = function(e) {
        var t;
        n && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, 
        e.setSelectionRange(t, t)) : e.focus();
    }, e.prototype.updateScrollParent = function(e) {
        var t, i;
        if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
            i = e;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    t = i, e.fastClickScrollParent = i;
                    break;
                }
                i = i.parentElement;
            } while (i);
        }
        t && (t.fastClickLastScrollTop = t.scrollTop);
    }, e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
    }, e.prototype.onTouchStart = function(e) {
        var t, i, r;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), i = e.targetTouches[0], 
        n) {
            if ((r = window.getSelection()).rangeCount && !r.isCollapsed) return !0;
            if (!s) {
                if (i.identifier && i.identifier === this.lastTouchIdentifier) return e.preventDefault(), 
                !1;
                this.lastTouchIdentifier = i.identifier, this.updateScrollParent(t);
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, 
        this.touchStartX = i.pageX, this.touchStartY = i.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), 
        !0;
    }, e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0], i = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i;
    }, e.prototype.onTouchMove = function(e) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, 
        this.targetElement = null), !0);
    }, e.prototype.findControl = function(e) {
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
    }, e.prototype.onTouchEnd = function(e) {
        var t, o, a, c, l, d = this.targetElement;
        if (!this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, 
        !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, o = this.trackingClickStart, 
        this.trackingClick = !1, this.trackingClickStart = 0, r && (l = e.changedTouches[0], 
        d = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || d, 
        d.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (a = d.tagName.toLowerCase())) {
            if (t = this.findControl(d)) {
                if (this.focus(d), i) return !1;
                d = t;
            }
        } else if (this.needsFocus(d)) return e.timeStamp - o > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null, 
        !1) : (this.focus(d), this.sendClick(d, e), n && "select" === a || (this.targetElement = null, 
        e.preventDefault()), !1);
        return !(!n || s || !(c = d.fastClickScrollParent) || c.fastClickLastScrollTop === c.scrollTop) || (this.needsClick(d) || (e.preventDefault(), 
        this.sendClick(d, e)), !1);
    }, e.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null;
    }, e.prototype.onMouse = function(e) {
        return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, 
        e.stopPropagation(), e.preventDefault(), !1))));
    }, e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, 
        !0) : "submit" === e.target.type && 0 === e.detail || ((t = this.onMouse(e)) || (this.targetElement = null), 
        t);
    }, e.prototype.destroy = function() {
        var e = this.layer;
        i && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), 
        e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), 
        e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), 
        e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1);
    }, e.notNeeded = function(e) {
        var t, n, s;
        if (void 0 === window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1]) {
            if (!i) return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
            }
        }
        if (o && (s = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && s[2] >= 3 && (t = document.querySelector("meta[name=viewport]"))) {
            if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
        }
        return "none" === e.style.msTouchAction || "none" === e.style.touchAction;
    }, e.attach = function(t, i) {
        return new e(t, i);
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define("fastclick", [], function() {
        return e;
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, 
    module.exports.FastClick = e) : window.FastClick = e;
}(), define("util", [], function() {
    return {
        forEach: function(e, t, i) {
            for (var n = -1; ++n < e.length; ) i = i || e[n], t.call(i, e[n], n);
        },
        extendOptions: function(e, t) {
            var i;
            for (i in t) {
                var n = t[i];
                e[i] = n;
            }
            return e;
        },
        debounce: function(e, t, i) {
            var n, s, r, o, a, c = Date.now || function() {
                return new Date().getTime();
            }, l = function() {
                var d = c() - o;
                d < t ? n = setTimeout(l, t - d) : (n = null, i || (a = e.apply(r, s), r = s = null));
            };
            return function() {
                r = this, s = arguments, o = c();
                var d = i && !n;
                return n || (n = setTimeout(l, t)), d && (a = e.apply(r, s), r = s = null), a;
            };
        },
        delegateSelector: function(e, t, i) {
            for (var n; e.parentNode !== document; ) {
                if (e.matches(t)) {
                    n = e;
                    break;
                }
                e = e.parentNode;
            }
            n && i(n);
        }
    };
}), define("tab-navigation", [ "util" ], function(e) {
    return function() {
    };
}), define("pub-sub", [], function() {
    return {
        _subscriptions: {},
        _eachSubscription: function(e, t) {
            var i;
            if (e = e || [], (i = e.length - 1) < 0) return !1;
            for (;i > -1; ) t.call(this, e[i], i), i--;
        },
        publish: function(e, t) {
            return t = t || [], this._eachSubscription(this._subscriptions[e], function(e, i) {
                e.callback.apply(e.context, t);
            });
        },
        subscribe: function(e, t, i) {
            this._subscriptions[e] = this._subscriptions[e] || [], this._subscriptions[e].push({
                callback: t,
                context: i || this
            });
        },
        unsubscribe: function(e, t) {
            return this._eachSubscription(this._subscriptions[e], function(i, n) {
                i.callback === t && this._subscriptions[e].splice(n, 1), (!t || !this._subscriptions[e].length) && delete this._subscriptions[e];
            });
        }
    };
}), define("cookie", [], function() {
    var e = {
        get: function(e) {
            for (var t = document.cookie.split(";"), i = -1; ++i < t.length; ) {
                var n = t[i].split("=");
                if (n[0].match(e)) return decodeURIComponent(n[1]);
            }
            return "";
        },
        set: function(e, t, i, n) {
            var s = [ e + "=" + encodeURIComponent(t), "path=/" ];
            i && s.push("expires=" + new Date(new Date().getTime() + 864e5 * i).toGMTString()), 
            n && s.push("domain=" + n), document.cookie = s.join("; ");
        },
        remove: function(t) {
            e.set(t, "", -1);
        }
    };
    return e;
}), define("cookie-notice", [ "cookie" ], function(e) {
    return {
        init: function() {
            if (location.host.match(/skysports.com/) && "" === e.get("sky-cookie-notice")) {
                var t = document.createElement("div");
                t.id = "cookie-notice", t.className = "cookie-banner", t.innerHTML = [ '<div class="cookie-banner__body">', '<p class="cookie-banner__text"><strong>We use Cookies</strong> - by using this site or closing this message you’re agreeing to our <a target="sky.com" href="http://help.sky.com/security/privacy/privacy-and-cookies-notice" class="cookie-banner__link">Cookies policy</a></p>', '<div class="cookie-banner__close" id="close-cookie-warning">', "</div>", "</div>" ].join(""), 
                document.body.appendChild(t), document.getElementById("close-cookie-warning").onclick = function() {
                    e.set("sky-cookie-notice", "1", 365, ".skysports.com"), t.parentNode.removeChild(t);
                };
            }
        }
    };
}), define("android-notice", [ "cookie" ], function(e) {
    return {
        init: function() {
            if (location.host.match(/skysports.com/) && document.documentElement.classList.contains("android") && "" === e.get("sky-android-notice")) {
                var t = document.createElement("a"), i = function() {
                    e.set("sky-android-notice", "1", 365, ".skysports.com"), t.parentNode.removeChild(t);
                };
                t.id = "android-notice", t.className = "android-banner", t.href = "https://play.google.com/store/apps/details?id=com.bskyb.sportnews&hl=en_GB", 
                t.target = "_blank", t.innerHTML = [ '<div class="android-banner__body">', '<img src="/core/img/apps/skysports-app.png" class="android-banner__icon">', '<p class="android-banner__text">Download the Sky Sports app now</p>', '<button id="close-android-notice" class="android-banner__close"></button>', "</div>" ].join(""), 
                document.body.appendChild(t);
                var n = document.getElementById("close-android-notice");
                t.onclick = function(e) {
                    e.preventDefault(), n.contains(e.target) || e.target === n ? i() : (i(), window.open(t.href));
                };
            }
        }
    };
}), define("skysports_digrev", [ "widget-lite", "postpone-load", "fastclick", "tab-navigation", "pub-sub", "cookie-notice", "android-notice" ], function(e, t, i, n, s, r, o) {
    return {
        init: function() {
            t.init(), e.init(), i.attach(document.body), n(), s.subscribe("content:new", e.init, e), 
            r.init(), o.init(), s.subscribe("content:adaptive", SKY_SPORTS.callDeferredFunctions, SKY_SPORTS);
            var a = document.querySelector(".adaptive-content");
            (!a || a && !a.offsetWidth) && SKY_SPORTS.callDeferredFunctions();
        }
    };
}), define("accordian", [ "util", "widget-lite" ], function(e, t) {
    return t.extend({
        offset: 0,
        speed: 333,
        init: function() {
            this._getElements(), this._setUpElements(), this.rootElement.ontouchmove = this._removeActiveStyle;
        },
        _removeActiveStyle: function(e) {
            "A" === e.target.nodeName && (e.target.classList.add("no-default-active"), e.target.ontouchend = function() {
                this.classList.remove("no-default-active"), this.ontouchend = null;
            }.bind(e.target));
        },
        toggle: !1,
        _getElements: function() {
            this.items = this.rootElement.querySelectorAll(".accordian__item");
        },
        _setUpElements: function() {
            for (var t = -1; ++t < this.items.length; ) {
                var i = this.items[t];
                i.setAttribute("data-index", t), i.setAttribute("data-offset", 0), i.querySelector(".accordian__item-content-frame") && i.querySelector(".accordian__item-head").addEventListener("click", e.debounce(this._clickActions.bind(this, i), this.speed, !0), !1);
            }
        },
        _setOffsets: function(e, t, i) {
            var n, s, r, o = this.items;
            for (r = o.length - 1; r > e; r--) s = o[r], n = parseInt(s.dataset.offset, 10), 
            n += 1 === t ? i : -i, s.style.cssText = [ "-webkit-transform:translateY(" + n + "px);", "-moz-transform:translateY(" + n + "px);", "-ms-transform:translateY(" + n + "px);", "transform:translateY(" + n + "px);" ].join(""), 
            s.setAttribute("data-offset", n);
            1 === t ? (this.offset += i, this.rootElement.style.paddingBottom = this.offset + "px") : (this.offset -= i, 
            setTimeout(function() {
                this.rootElement.style.paddingBottom = this.offset + "px";
            }.bind(this), this.speed));
        },
        _clickActions: function(e, t) {
            t.preventDefault();
            var i = e.querySelector(".accordian__item-content");
            if (i) {
                var n = i.offsetHeight, s = parseInt(e.dataset.index, 10);
                e.classList.contains("accordian__item--open") ? (i.style.cssText = "", setTimeout(function() {
                    this.classList.remove("accordian__item--open");
                }.bind(e), this.speed), this._setOffsets(s, -1, n)) : (this.toggle && this._closeAll(), 
                i.style.cssText = "-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)", 
                e.classList.add("accordian__item--open"), this._setOffsets(s, 1, n));
            }
        },
        _closeAll: function() {
            var e, t = this.items.length;
            for (this.offset = 0, e = 0; e < t; e++) {
                var i = this.items[e], n = i.querySelector(".accordian__item-content");
                i.setAttribute("data-offset", 0), i.classList.remove("accordian__item--open"), i.style.cssText = "", 
                n && (n.style.cssText = "");
            }
        }
    });
}), define("adaptive-content", [ "widget-lite", "pub-sub" ], function(e, t) {
    return e.extend({
        numberOfItems: document.querySelectorAll(".adaptive-content"),
        init: function() {
            SKY_SPORTS.device.hasCssAnimations ? this._addCssAnimationEvent() : (this._loadHTML(this.rootElement), 
            e.scan(this.rootElement));
        },
        _loadHTML: function(e) {
            var i = this._parseHTML(e.querySelector('[type="text/template"]'));
            if (!i) return !1;
            e.innerHTML = i, e.classList.add("adaptive-content--loaded"), this.rootElement === this.numberOfItems[this.numberOfItems.length - 1] && t.publish("content:adaptive");
        },
        _parseHTML: function(e) {
            return !!e && e.innerHTML;
        },
        _addCssAnimationEvent: function() {
            this.animationName = "adaptiveContent" + Math.floor(1e5 * Math.random()), this.rootElement.insertAdjacentHTML("afterbegin", [ "<style>", "@-webkit-keyframes " + this.animationName + "{0%{outline:0}}", "@-moz-keyframes " + this.animationName + "{0%{outline:0}}", "@keyframes " + this.animationName + "{0%{outline:0}100%{outline:0px solid red}}", "</style>" ].join("")), 
            this.rootElement.style.cssText = [ "-webkit-animation: " + this.animationName + " 0.01s linear;", "-moz-animation: " + this.animationName + " 0.01s linear;", "animation: " + this.animationName + " 0.01s linear;" ].join(""), 
            window.addEventListener(SKY_SPORTS.device.animationEventName, function(e) {
                e.animationName === this.animationName && this._loadHTML(this.rootElement);
            }.bind(this), !1);
        }
    });
}), define("site-layout-primary", [ "widget-lite" ], function(e) {
    return e.extend({
        navIsOpen: !1,
        speed: 333,
        init: function() {
            this._getElements(), this.trigger && (this._getNavWidth(), this._bindEvents());
        },
        _getElements: function() {
            this.siteLayoutPrimary = this.rootElement, this.siteBody = this.siteLayoutPrimary.querySelector(".site-layout-primary__col1"), 
            this.leftNav = this.siteLayoutPrimary.querySelector(".site-layout-primary__col2"), 
            this.trigger = document.querySelector('[data-role="open-left-hand-nav"]');
        },
        _getNavWidth: function() {
            if (this.leftNav && window.getComputedStyle) {
                var e = window.getComputedStyle(this.leftNav, null);
                this.leftNavWidth = -1 * parseInt(e.getPropertyValue("width"), 10) || this.leftNav.offsetWidth;
            }
        },
        _bindEvents: function() {
            this.trigger.addEventListener("click", function(e) {
                e.preventDefault(), this.toggleNav();
            }.bind(this), !1), this.siteBody.addEventListener("click", function(e) {
                this.navIsOpen && (e.preventDefault(), e.stopPropagation(), this.toggleNav());
            }.bind(this), !0);
        },
        toggleNav: function(e) {
            this.navIsOpen || "open" === e ? (this.siteLayoutPrimary.style.cssText = "", this.navIsOpen = !1, 
            this.leftNavTimeOut = setTimeout(function() {
                this.leftNav.style.cssText = "";
            }.bind(this), this.speed)) : (this.siteLayoutPrimary.style.cssText = [ "-webkit-transform:translateX(" + this.leftNavWidth + "px);", "-moz-transform:translateX(" + this.leftNavWidth + "px);", "-ms-transform: translateX(" + this.leftNavWidth + "px);", "transform: translateX(" + this.leftNavWidth + "px);" ].join(""), 
            this.leftNav.style.cssText = "visibility: visible", clearTimeout(this.leftNavTimeOut), 
            this.navIsOpen = !0);
        }
    });
}), define("implicit-personalisation-display", [ "widget-lite" ], function(e) {
    return e.extend({
        itemsArr: [],
        init: function() {
            this.readJson(), this.jsonObject && (this.getMetaData(), this.setItemsArr(this.jsonObject), 
            this.addStoredItemsToSelectBox(), this.addStoredItemsToYourTeams());
        },
        readJson: function() {
            this.jsonObject = localStorage.getItem(this.name), this.jsonObject && (this.jsonObject = JSON.parse(this.jsonObject));
        },
        getMetaData: function() {
            this.metaData = {}, this.metaData.key = this.rootElement.getAttribute("data-key"), 
            this.metaData.sport = this.metaData.key.split(".")[0], this.metaData.category = this.metaData.key.split(".")[1];
        },
        setItemsArr: function() {
            this.jsonObject[this.metaData.sport] && this.jsonObject[this.metaData.sport][this.metaData.category] && (this.itemsArr = this.jsonObject[this.metaData.sport][this.metaData.category], 
            this.forEachItem(function(e, t) {
                var i = this.rootElement.querySelector('[data-itemid="' + t.id + '"]');
                i ? (t.url = i.getAttribute("value"), t.name = i.innerHTML) : this.itemsArr.splice(e, 1);
            }), this.itemsArr = this.itemsArr.sort(function(e, t) {
                return e.count - t.count;
            }).slice(-3));
        },
        forEachItem: function(e) {
            if (this.itemsArr.length) for (var t = this.itemsArr.length - 1; t >= 0; t--) e.apply(this, [ t, this.itemsArr[t] ]);
        },
        addStoredItemsToSelectBox: function() {
            if (this.jsonObject[this.metaData.sport] && this.jsonObject[this.metaData.sport][this.metaData.category]) {
                var e = this.rootElement, t = document.getElementById("all-teams"), i = document.createElement("optgroup");
                this.yourTeamsOpt = i;
                var n = e.dataset;
                i.label = n.label, e.length && (this.forEachItem(function(e, t) {
                    var n = this.rootElement.querySelector('[data-itemid="' + t.id + '"]');
                    n && i.appendChild(n.cloneNode(!0));
                }), t ? e.insertBefore(i, t.nextSibling) : e.insertBefore(i, e.firstChild.nextSibling.nextSibling));
            }
        },
        addStoredItemsToYourTeams: function() {
            var e, t, i = document.querySelector(".your-teams"), n = "";
            i && (e = i.querySelector(".your-teams__list"), t = i.querySelector('[type="text/template"]').innerHTML.trim(), 
            this.forEachItem(function(e, i) {
                n += t.replace(/{{teamLink}}/, i.url).replace(/{{teamId}}/g, i.id).replace(/{{teamName}}/, i.name);
            }), this.itemsArr.length && i.classList.add("your-teams--show"), e.innerHTML = n);
        }
    });
}), define("page-nav", [ "widget-lite" ], function(e) {
    return e.extend({
        navIsOpen: !1,
        init: function() {
            this.getElements(), this.bindEvents(), this.boundClose = this.closeCurrent.bind(this);
        },
        getElements: function() {
            this.navHead = this.rootElement.querySelector(".page-nav__head"), this.navBody = this.rootElement.querySelector(".page-nav__body"), 
            this.navDropdownLink = this.rootElement.querySelector(".page-nav__item--dropdown"), 
            this.navDropdown = this.rootElement.querySelector(".page-nav__dropdown"), this.navDropdownLinks = this.rootElement.querySelector(".page-nav__dropdown"), 
            this.navBody.style.cssText = "visibility:hidden", this.navOffset = document.querySelectorAll(".page-nav__offset");
        },
        bindEvents: function() {
            this.navHead.addEventListener("click", this.toggleNav.bind(this), !1), this.navDropdownLink && this.navDropdownLink.addEventListener("click", function(e) {
                this.toggleMenu();
            }.bind(this), !1);
        },
        toggleMenu: function(e) {
            this.navDropdownLink.classList.contains("page-nav__item--active-dropdown") ? this.navDropdownLink.classList.remove("page-nav__item--active-dropdown") : (this.navDropdownLink.classList.add("page-nav__item--active-dropdown"), 
            setTimeout(function() {
                document.body.addEventListener("click", this.boundClose, !1);
            }.bind(this), 100));
        },
        closeCurrent: function(e) {
            this.navDropdown.contains(e.target) || (e.preventDefault(), this.navDropdownLink.classList.remove("page-nav__item--active-dropdown"), 
            document.body.removeEventListener("click", this.boundClose, !1));
        },
        toggleNav: function(e) {
            e.preventDefault(), this.navIsOpen ? (this.navIsOpen = !1, this.navHeight = 0, this.navHead.classList.remove("page-nav__head--open"), 
            this.navBody.style.cssText = [ "-webkit-transform: translateY(-100%)", "-moz-transform: translateY(-100%)", "-ms-transform: translateY(-100%)", "transform: translateY(-100%)" ].join(";"), 
            this.slideTimeout = setTimeout(function() {
                this.navBody.style.visibility = "hidden";
            }.bind(this), 333)) : (clearTimeout(this.slideTimeout), this.navIsOpen = !0, this.navHeight = this.navBody.offsetHeight, 
            this.navHead.classList.add("page-nav__head--open"), this.navBody.style.cssText = [ "-webkit-transform: translateY(0)", "-moz-transform: translateY(0)", "-ms-transform: translateY(0)", "transform: translateY(0)", "visibility: visible" ].join(";")), 
            this.setOffsets();
        },
        setOffsets: function() {
            for (var e = this.navOffset.length, t = -1; ++t < e; ) this.navOffset[t].style.cssText = [ "-webkit-transform: translateY(" + this.navHeight + "px)", "-moz-transform: translateY(" + this.navHeight + "px)", "-ms-transform: translateY(" + this.navHeight + "px)", "transform: translateY(" + this.navHeight + "px)" ].join(";");
            this.navOffset[e - 1].style.marginBottom = this.navHeight + "px";
        }
    });
}), define("edigital-survey", [], function() {
    return {
        init: function() {
            function ecos_buildurl(e) {
                var t = ecos_host + "/survey/" + e + ".php?sid=" + ecos_sid;
                t = ("https:" == document.location.protocol ? "https://" : "http://") + t, ecos_test > 0 && (t += "&test=1"), 
                t += "&v=" + ecos_ver + "&r=" + Math.round(1e5 * Math.random()), "_" != ecos_vault.index && (t += "&vlt=" + ecos_vault);
                var n = "";
                myvar = window.location.href;
                var s = 0;
                for (i = 0; i < myvar.length; i++) "/" == myvar.charAt(i) && s++, s >= 3 && (n += myvar.charAt(i));
                ecos_data.length > 0 && (t += "&data=" + ecos_data), ecos_data2.length > 0 && (t += "&data2=" + ecos_data2), 
                ecos_data3.length > 0 && (t += "&data3=" + ecos_data3), screen.width > 0 && screen.height > 0 && (t += "&xres=" + screen.width + "&yres=" + screen.height), 
                screen.colordepth > 0 && (t += "&depth=" + screen.colordepth), ecos_proportion < 1 && (t += "&mult=" + ecos_proportion), 
                t += "&url=" + escape(n.substring(0, 100)), t += "&referrer=" + escape(document.referrer.substring(0, 100));
                var r;
                return (r = ecos_getcookie("ecos")) && (t += "&ecos_cookie=" + r), navigator.userAgent.indexOf("Safari") >= 0 && (t += "&fullurl=" + escape(window.location.href)), 
                ecos_doc_domain_changed && (t += "&setdocdomain=" + document.domain), t;
            }
            function ecos_open_window(e, t, i, n) {
                var s = 1 != ecos_device_type ? null : "location=0,toolbar=no,width=" + i + ",height=" + n + ",directories=no,status=no,scrollbars=yes,resizable=yes";
                return window.open(e, t, s);
            }
            function ecos_popup_popup() {
                var e = navigator.userAgent;
                if (e.indexOf("NT 5.1") > 0 && e.indexOf(" SV1") > 0) return !1;
                var t = ecos_open_window(ecos_buildurl("survey"), "surveywin", ecos_survey_size_x, ecos_survey_size_y);
                return ecos_pu && t && (t.blur(), t.parent.blur()), t;
            }
            function ecos_popup_layer() {
                return ecos_request_via_iframe(ecos_buildurl("layer") + "&inlayer=1");
            }
            function ecos_popup_holding_showwin(e) {
                var t = null;
                try {
                    var i = ecos_doc_domain_changed && "Microsoft Internet Explorer" == navigator.appName;
                    if (t = ecos_open_window(i ? ecos_doc_domain_holding_ie_access_document : "", "ecos_holding_window", ecos_holding_size_x, ecos_holding_size_y), 
                    e && t) {
                        var n = 0, s = function(e, t) {
                            if (++n > 100) return e.close(), void alert("Failed to access popup window, cannot show survey");
                            try {
                                if (!e.document) throw "wait";
                            } catch (i) {
                                return void setTimeout(function() {
                                    s(e, t);
                                }, 20);
                            }
                            e.document.getElementById ? e.document.getElementById("ecos_holding") || (e.document.getElementsByTagName("body")[0].innerHTML = "", 
                            e.document.write(t)) : ecos_layer_gosurveysize(e);
                        };
                        s(t, e);
                    }
                } catch (e) {
                    alert("ERROR: " + e), t && t.close();
                }
                return t;
            }
            function ecos_popup_holding() {
                var e = null;
                return !!(e = ecos_popup_holding_showwin()) && (!!ecos_request_via_iframe(ecos_buildurl("holding")) && e);
            }
            function ecos_request_via_iframe(e) {
                return !!document.getElementById && ecos_load_url(document.getElementById("ecos_iframe2"), e);
            }
            function ecos_load_url(e, t) {
                if (ecos_doc_domain_changed) el = document.createElement("script"), el.src = t, 
                el.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(el); else {
                    var i, n = '<SCRIPT LANGUAGE="Javascript" SRC="' + t + '"><\/script>', s = e;
                    if (s.contentDocument) i = s.contentDocument; else if (s.contentWindow) i = s.contentWindow.document; else {
                        if (!s.document) return !1;
                        i = s.document;
                    }
                    i.open(), i.write(n), i.close();
                }
                return !0;
            }
            function ecos_layer_run() {
                eval(ecos_jscode);
                var check;
                (check = document.getElementById("ecos_cookie_permission")) ? (check.checked && ecos_setcookie(), 
                check.onclick = function() {
                    this.checked ? ecos_setcookie() : ecos_unsetcookie();
                }) : ecos_setcookie();
            }
            function ecos_getcookie(e, t) {
                var i = document.cookie.split(";"), n = [];
                t = t || ".";
                for (var s = 0; s < i.length; s++) {
                    for (var r = i[s]; " " == r.charAt(0); ) r = r.substring(1, r.length);
                    0 == r.indexOf(e + "=") && n.push(r.substring(e.length + 1, r.length));
                }
                return n.join(t);
            }
            function ecos_layer_gono(e) {
                e > 0 ? setTimeout("ecos_layer_gono()", e) : document.getElementById("ecos_surveylayer").style.visibility = "hidden";
            }
            function ecos_layer_gosurveysize(e) {
                ecos_setcookie(), ecos_layer_gono();
                var t;
                return e ? (e.location = ecos_buildurl("enter_survey_no_holding") + "&doneperm=1", 
                ecos_survey_size_x && ecos_survey_size_y && (e.resizeTo ? e.resizeTo(ecos_survey_size_x, ecos_survey_size_y) : (e.outerWidth = ecos_survey_size_x, 
                e.outerHeight = ecos_survey_size_y)), t = e) : t = ecos_open_window(ecos_buildurl("survey") + "&doneperm=1", "surveywin", ecos_survey_size_x, ecos_survey_size_y), 
                ecos_pu && t && !e && (t.blur(), t.parent.blur()), t;
            }
            function ecos_layer_golater() {
                return 0 == ecos_later_mode ? (sw = ecos_layer_gosurveysize(), sw && (sw.blur(), 
                sw.parent.blur()), sw) : (ecos_setcookie(), ecos_layer_gono(), ecos_popup_holding());
            }
            function ecos_popup() {
                if (document.getElementById && !document.getElementById("ecos_iframe") && runcounter < 10) return runcounter++, 
                void setTimeout("ecos_popup()", 100);
                if (ecos_go) switch (ecos_pm) {
                  case 0:
                    ecos_popup_popup();
                    break;

                  case 1:
                    ecos_popup_layer();
                    break;

                  case 2:
                    ecos_popup_popup() || ecos_popup_layer();
                    break;

                  case 3:
                    ecos_popup_layer() || ecos_popup_popup();
                }
            }
            function ecos_run() {
                ecos_go && (0 == ecos_hm ? ecos_popup() : 1 == ecos_hm && brok && (ecos_pm = 0, 
                window.onunload = ecos_popup));
            }
            function ecos_i() {
                eval(ecos_runjs);
            }
            function ecos_get_2nd_level_domain() {
                return "" != ecos_cookie_domain ? escape(ecos_cookie_domain) : document.domain;
            }
            function ecos_setcookie() {
                var e = new Date();
                if ("" != ecos_nc) {
                    var t = ecos_cookie_old_value = ecos_getcookie("ecos");
                    if ("" == t) t = escape(ecos_nc); else {
                        var i = ecos_nc.split("-", 2)[0], n = new RegExp(i + "-\\d+"), s = t.match(n);
                        t = s && 0 != s.length ? t.replace(n, escape(ecos_nc)) : t + "." + escape(ecos_nc);
                    }
                    e.setDate(e.getDate() + 7300);
                    var r = ecos_get_2nd_level_domain();
                    document.cookie = "ecos=" + t + ";domain=" + r + ";path=/;expires=" + e.toGMTString();
                }
            }
            function ecos_unsetcookie() {
                if (null != ecos_cookie_old_value) {
                    var e = new Date();
                    ecos_cookie_old_value ? e.setDate(e.getDate() + 7300) : e.setDate(e.getDate() - 1), 
                    document.cookie = "ecos=" + ecos_cookie_old_value + ";path=/;expires=" + e.toGMTString();
                }
            }
            function ecos_load() {
                var e;
                if (e = document.getElementById("ecos_iframe")) {
                    if (null != ecos_allow || "undefined" == typeof ecos_should_deploy || 0 != ecos_should_deploy) {
                        if (document.location.hostname == document.domain) try {
                            e.contentDocument ? e.contentDocument : e.contentWindow ? e.contentWindow.document : e.document ? e.document : ecos_doc_domain_changed = !0;
                        } catch (e) {
                            ecos_doc_domain_changed = !0;
                        } else ecos_doc_domain_changed = !0;
                        ecos_load_url(e, ecos_buildurl("i"));
                    }
                } else ++runcounter2 < 10 && setTimeout("ecos_load()", 100);
            }
            function ecos_adtrk() {
                for (var e = "ecos_ad_exp", t = "ecos_ad_shown_", i = ecos_getcookie("hub"), n = 0, s = document.cookie.indexOf(e) > -1 ? ecos_getcookie(e) : ""; document.cookie.indexOf(t) > -1 && n < 20; ) {
                    var r = document.cookie.indexOf(t), o = document.cookie.indexOf("=", r), a = document.cookie.substr(r, o - r), c = ecos_getcookie(a);
                    if (c && "" != c) {
                        var l = c;
                        s = "" != s ? ecos_exp_decode(s) : {}, "" != document.location.pathname && (l += ":" + escape(document.location.pathname)), 
                        i && "" != i && (l += ":" + i), s.hasOwnProperty(l) ? s[l]++ : s[l] = 1, s = ecos_exp_encode(s);
                        var d = new Date();
                        d.setDate(d.getDate() + 182);
                        var u = ecos_get_2nd_level_domain();
                        document.cookie = e + "=" + s + ";domain=" + u + ";path=/;expires=" + d.toGMTString(), 
                        (d = new Date()).setDate(d.getDate() - 1), document.cookie = a + "=;domain=" + u + ";path=/;expires=" + d.toGMTString();
                    }
                    n++;
                }
                return s;
            }
            function ecos_exp_decode(e) {
                for (var t = e.split("|"), i = {}, n = 0; n < t.length; n++) {
                    var s = t[n].split(":"), r = s.pop();
                    i[s.join(":")] = parseInt(r);
                }
                return i;
            }
            function ecos_exp_encode(e) {
                var t = [];
                for (var i in e) t.push(i + ":" + e[i]);
                return t.join("|");
            }
            function ecos_update_dt_cookie() {
                var e = +new Date(), t = ecos_get_2nd_level_domain();
                document.cookie = "ecos.dt=" + e + ";domain=" + t + ";path=/";
            }
            var ecos_data = "", ecos_data2 = "", ecos_data3 = "", ecos_test = 0, ecos_sid = 588330148, ecos_host = "ecustomeropinions.com", ecos_cookie_domain = "skysports.com", ecos_vault = "_", ecos_ver = "6060", ecos_nc = "", ecos_go = 0, ecos_pu = 0, ecos_hm = 0, ecos_pm = 0, ecos_survey_size_x = 550, ecos_survey_size_y = 400, ecos_holding_size_x = 550, ecos_holding_size_y = 400, ecos_holding_complete_flag = 1, ecos_jscode = "", ecos_runjs = "ecos_run();", ecos_proportion = 1, ecos_later_mode = 0, ecos_device_type = 1, ecos_cookie_old_value = null, ecos_doc_domain_changed = !1, ecos_doc_domain_holding_ie_access_document = window.location, brok = !1;
            parseInt(navigator.appVersion.charAt(0)) >= 4 && (brok = !0);
            var runcounter = 0, runcounter2 = 0;
            ecos_data3 = ecos_adtrk();
            var ecos_allow = null;
            document.location.toString().match("ECOS_SHOW_SURVEY") ? ecos_allow = "y" : ecos_proportion < 1 && Math.random() > ecos_proportion && (ecos_allow = "n"), 
            "n" != ecos_allow && (document.getElementById && window.frames ? setTimeout(ecos_load, 1) : (ecos_img = new Image(), 
            ecos_img.src = ecos_buildurl("i") + "&nosup=1")), window.ecos_load = ecos_load, 
            ecos_update_dt_cookie(), setInterval(ecos_update_dt_cookie, 500);
        }
    };
}), define("skyid-login", [ "widget-lite" ], function(e) {
    return e.extend({
        init: function(e) {
            if (!SKY_SPORTS || !SKY_SPORTS.user) throw new Error("The SKY_SPORTS or SKY_SPORTS.user global is undefined");
            this.rootElement = e, this.setLoginBoxContent(SKY_SPORTS.user);
        },
        setLoginBoxContent: function(t) {
            var i = this.rootElement, n = i.querySelector('.login-text[data-role="isMobile"]'), s = i.querySelector('.login-text[data-role="isWholesale"]'), r = i.querySelector('.login-text[data-role="isSkySports"]'), o = i.querySelector('.login-text[data-role="isSky"]'), a = i.querySelector('.login-text[data-role="isNowTv"]'), c = i.querySelector('.login-text[data-role="isLoggedIn"]'), l = i.querySelector('.login-text[data-role="default"]'), d = "";
            (SKY_SPORTS.device.ios || SKY_SPORTS.device.android) && n ? d = n.textContent : t.isWholesale ? s && (d = s.textContent) : t.isSkySports ? r && (d = r.textContent) : t.isSky ? o && (d = o.textContent) : t.isNowTV ? a && (d = a.textContent) : t.isLoggedIn ? c && (d = c.textContent) : l && l && (d = l.textContent), 
            i.innerHTML = d.replace(/\#\{name\}/, t.name), SKY_SPORTS.device.hasCssAnimations || e.scan(i);
        }
    });
}), define("overlay", [ "util" ], function(e) {
    return {
        options: {
            width: !1,
            height: !1,
            src: "about:blank",
            addClass: "",
            iframe: !1,
            title: "",
            reloadOnClose: !1
        },
        create: function(t) {
            e.extendOptions(this.options, t), this.overlayHtml = this._createOverlay(this.options.className || ""), 
            this.overlay = this.overlayHtml.querySelector(".overlay"), this.overlayContent = this.overlayHtml.querySelector(".overlay__content"), 
            this.overlayHeader = this.overlayHtml.querySelector(".overlay__header"), this.overlayBody = this.overlayHtml.querySelector(".overlay__body"), 
            this.overlayInner = this.overlayHtml.querySelector(".overlay__inner"), this._addSpinner(), 
            this._setContent(), this._appendOverlay(), this._setAttributes(), this._addCloseButton(), 
            this._getScrollBarWidth(), window.requestAnimationFrame(function() {
                this._showOverlay();
            }.bind(this));
        },
        _getScrollBarWidth: function() {
            if (!this.scrollBarWidth) {
                var e = document.createElement("div");
                e.style.cssText = "width: 100px;height: 100px;position: absolute; visibility: hidden", 
                document.body.appendChild(e);
                var t = e.clientWidth;
                e.style.overflow = "scroll";
                var i = e.clientWidth;
                this.scrollBarWidth = t - i, e.parentNode.removeChild(e);
            }
        },
        _loading: function(e) {
            e ? this.ajaxSpinner.classList.add("on") : this.ajaxSpinner.classList.remove("on");
        },
        _toggleDisableBody: function(e) {
            this.scrollBarWidth && (e ? (document.documentElement.style.cssText = [ "overflow:hidden", "padding-right: " + this.scrollBarWidth + "px" ].join(";"), 
            this.overlayInner.style.paddingRight = this.scrollBarWidth + "px") : (document.documentElement.style.cssText = "", 
            this.overlayInner.style.paddingRight = "0"));
        },
        _addSpinner: function() {
            this.ajaxSpinner = document.createElement("span"), this.ajaxSpinner.className = "ajax-loader -invert", 
            this.overlayContent.appendChild(this.ajaxSpinner);
        },
        _addCloseButton: function() {
            this.closeButton = this.overlay.querySelector(".overlay__close"), this.closeButton.addEventListener("click", function(e) {
                this.close(e);
            }.bind(this)), this.overlay.onclick = function(e) {
                (window.event ? window.event.srcElement : e.target) === this.overlayInner && this.close();
            }.bind(this);
        },
        _writeIframe: function() {
            var e = document.createElement("iframe");
            this._loading(!0);
            var t = new Date().valueOf();
            window["overlay" + t] = function() {
                this._loading(!1), e.className = "";
            }.bind(this), e.setAttribute("onload", "overlay" + t + "()"), e.className = "-hdn", 
            e.src = this.options.src, e.width = "100%", e.height = "100%", e.setAttribute("frameborder", 0), 
            e.scrolling = "no", this.overlayContent.appendChild(e);
        },
        _getUrl: function() {
            this._loading(!0), require([ "reqwest" ], function(e) {
                e({
                    url: this.options.src,
                    data: this.options.data || {},
                    success: function(e) {
                        this.overlayContent.innerHTML = e, this._loading(!1), this._scanForNewWidgets(this.overlayContent);
                    }.bind(this),
                    type: "html"
                });
            }.bind(this));
        },
        _scanForNewWidgets: function(e) {
            var t = e.querySelector("[widget-lite]");
            e.querySelector(".callfn") && (t || require([ "widget" ], function(e) {
                e.init();
            }), SKY_SPORTS.device.hasCssAnimations || require([ "widget-lite" ], function(e) {
                e.scan();
            }));
        },
        _writeFragment: function() {
            var e = document.querySelector(this.options.src);
            if ("text/template" === e.type) {
                var t = document.createElement("div");
                t.innerHTML = e.innerHTML, this.overlayContent.appendChild(t);
            } else this.overlayContent.appendChild(e.cloneNode(!0));
        },
        _setContent: function() {
            this.options.iframe ? this._writeIframe() : this.options.src.match(/^\#/) ? this._writeFragment() : this._getUrl();
        },
        _setAttributes: function() {
            this.options.width && (this.overlayBody.style.maxWidth = parseInt(this.options.width, 10) + "px"), 
            this.options.height && (this.overlayBody.style.maxHeight = parseInt(this.options.height, 10) + "px");
        },
        close: function() {
            this._showOverlay("remove"), setTimeout(function() {
                this._appendOverlay("remove"), this.options.reloadOnClose && location.reload();
            }.bind(this), 500);
        },
        _appendOverlay: function(e) {
            this.overlayHtml && (e && this.overlayHtml.parentNode ? this.overlayHtml.parentNode.removeChild(this.overlayHtml) : document.body.appendChild(this.overlayHtml));
        },
        _showOverlay: function(e) {
            e ? (this._toggleDisableBody(!1), window.requestAnimationFrame(function() {
                this.overlay.classList.remove("overlay--open");
            }.bind(this))) : (this._toggleDisableBody(!0), window.requestAnimationFrame(function() {
                this.overlay.classList.add("overlay--open");
            }.bind(this)));
        },
        _createOverlay: function() {
            var e = document.createElement("div");
            return e.innerHTML = [ '<div class="overlay__wrap">', '<div class="overlay ' + this.options.addClass + '">', '<div class="overlay__inner">', '<div class="overlay__body">', '<h3 class="row-table overlay__header ' + this.options.headerClass + ' -ellipsis"><div class="col span3"></div><div class="col"><span class="overlay__title">', this.options.title, '</span></div><div class="col span3 overlay__close"><span class="icon icon-x"></span></div></h3>', '<div class="overlay__content"></div>', "</div>", "</div>", "</div>", "</div>" ].join(""), 
            e.firstChild;
        }
    };
}), define("overlay-widget", [ "widget-lite", "util", "overlay" ], function(e, t, i) {
    return e.extend({
        forMobile: !0,
        forDesktop: !0,
        init: function() {
            !this.forMobile && SKY_SPORTS.device.mobile || !this.forDesktop && !SKY_SPORTS.device.mobile || (this.callFromHash ? this._launchFromHash() : this.callFromRoot ? this.rootElement.addEventListener("click", this._delegateClick.bind(this, this.rootElement)) : (this.src = this.getSrc(), 
            this.rootElement.addEventListener("click", this.launch.bind(this), !1)), this.title = this.rootElement.getAttribute("data-title"), 
            this.src = this.rootElement.getAttribute("href"));
        },
        getSrc: function() {
            this.src = this.rootElement.getAttribute("href") || this.src, this.src = this.src.replace("#{current-url}", location.hostname + location.pathname);
        },
        _delegateClick: function(e, t) {
            function i(s) {
                if (s !== e) return "overlay-link" === s.getAttribute("data-role") ? (n._launchFromChild(s, t), 
                !0) : i(s.parentNode);
            }
            var n = this;
            i(t.target);
        },
        _launchFromChild: function(e, t) {
            this.src = e.getAttribute("href") || e.src, this.launch(t);
        },
        _launchFromHash: function() {
            if (location.hash.match(/overlay-/)) {
                var e = location.hash.split(/overlay-/);
                e = e[1].split("|");
                var n = {};
                t.forEach(e, function(e) {
                    e = e.split("="), n[e[0]] = e.slice(1).join("=");
                }), i.create(n);
            }
        },
        launch: function(e) {
            e.preventDefault(), this.getSrc(), this.ignore ? location.href = this.src : (this.desktopUrl && (this.src = this.desktopUrl), 
            this.mobileUrl && SKY_SPORTS.device.mobile && (this.src = this.mobileUrl), i.create(this));
        }
    });
}), define("script", [], function() {
    return {
        load: function(e, t) {
            var i = document.getElementsByTagName("script")[0], n = document.createElement("script"), s = e.replace(/[^a-z0-9]/gi, "x");
            t = t || function() {}, document.getElementById(s) ? t() : (n.readyState ? n.onreadystatechange = function() {
                -1 !== n.readyState.search(/^(loaded|complete)$/) && (n.onreadystatechange = null, 
                t());
            } : n.onload = function() {
                n.onload = null, t();
            }, n.src = e, i.parentNode.insertBefore(n, i));
        }
    };
}), define("site-nav-desktop", [ "widget-lite", "util" ], function(e, t) {
    return e.extend({
        init: function() {
            SKY_SPORTS.device.hasTouch, this.getElements(), this.bindClicks(), this.boundClose = this.closeCurrent.bind(this);
        },
        getElements: function() {
            this.navItems = document.querySelectorAll(".site-nav-desktop__item-link--more");
        },
        bindClicks: function() {
            t.forEach(this.navItems, function(e) {
                e.addEventListener("click", function(t) {
                    if (t.preventDefault(), this.clickedItem !== e && this.closeAll(), this.clickedItem = e, 
                    this.currentMenu = e.parentNode.querySelector(".site-nav-desktop__menu"), !this.currentMenu) return !1;
                    this.toggleMenu();
                    var i = this.currentMenu.querySelectorAll("a");
                    i[i.length - 1].onblur = this.closeAll.bind(this);
                }.bind(this), !1);
            }, this);
        },
        toggleMenu: function() {
            this.clickedItem.classList.contains("site-nav-desktop__item--open") ? this.clickedItem.classList.remove("site-nav-desktop__item--open") : (this.clickedItem.classList.add("site-nav-desktop__item--open"), 
            setTimeout(function() {
                document.body.addEventListener("click", this.boundClose, !1);
            }.bind(this), 100));
        },
        closeCurrent: function(e) {
            this.currentMenu.contains(e.target) || this.closeAll();
        },
        closeAll: function() {
            t.forEach(this.navItems, function(e) {
                e.classList.remove("site-nav-desktop__item--open"), document.body.removeEventListener("click", this.boundClose, !1);
            }, this);
        }
    });
}), define("bskyb-omniture", [], function() {
    return {
        init: function(e) {
            function t(e, t, i) {
                var n, s, r, o = "s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s.an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)return encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}return y}else{x=s.rep(escape(''+x),'+','%2B');if(c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;if(x){x=''+x;return s.em==3?decodeURIComponent(x):unescape(s.rep(x,'+',' '))}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)=='string')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedRequests=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.22.1/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047);if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.length>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='linkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=function(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o){var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<76;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()", a = window, c = a.s_c_il, l = navigator, d = l.userAgent, u = l.appVersion, f = u.indexOf("MSIE "), h = d.indexOf("Netscape6/");
                if (e && (e = e.toLowerCase(), c)) for (s = 0; s < c.length; s++) if (!(r = c[s])._c || "s_c" == r._c) {
                    if (r.oun == e) return r;
                    if (r.fs && r.sa && r.fs(r.oun, e)) return r.sa(e), r;
                }
                return a.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 
                a.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a"), 
                a.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x"), 
                a.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)"), a.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x"), 
                a.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")"), 
                a.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a"), 
                a.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;"), 
                o = s_d(o), f > 0 ? (n = parseInt(s = u.substring(f + 5))) > 3 && (n = parseFloat(s)) : n = h > 0 ? parseFloat(d.substring(h + 10)) : parseFloat(u), 
                n >= 5 && u.indexOf("Opera") < 0 && d.indexOf("Opera") < 0 ? (a.s_c = new Function("un", "pg", "ss", "var s=this;" + o), 
                new s_c(e, t, i)) : (r = new Function("un", "pg", "ss", "var s=new Object;" + s_ft(o) + ";return s"))(e, t, i);
            }
            window.sky = window.sky ? window.sky : {}, sky.tracking = {
                vmap: {
                    storyType: [ "prop63" ],
                    searchType: [ "prop12", "eVar31" ],
                    searchTerms: [ "prop1", "eVar1" ],
                    searchResults: [ "prop34" ],
                    searchEngineExt: [ "prop16", "eVar3" ],
                    searchTermsExt: [ "prop17", "eVar8" ],
                    sport: [ "prop61" ],
                    headline: [ "prop3", "eVar13" ],
                    errors: [ "prop2", "eVar2" ],
                    loginFrom: [ "prop5", "eVar5" ],
                    url: [ "prop9", "eVar9" ],
                    refDomain: [ "prop36", "eVar36" ],
                    contentType: [ "prop20", "eVar20" ],
                    contentId: [ "prop21", "eVar15" ],
                    site: [ "prop23", "eVar14" ],
                    browseMethod: [ "prop24" ],
                    entitlements: [ "eVar47" ],
                    loginType: [ "eVar55" ],
                    section0: [ "prop25", "eVar26" ],
                    section1: [ "prop27", "eVar29" ],
                    section2: [ "prop31", "eVar30" ],
                    videoTitle: [ "prop26", "eVar28" ],
                    channel: [ "channel", "eVar24", "hier1" ],
                    partTime: [ "prop35", "eVar35" ],
                    samId: [ "prop39", "eVar39" ],
                    loginStatus: [ "eVar11" ],
                    _loginFrom: [ "prop5", "eVar5" ],
                    ageGender: [ "eVar12" ],
                    skyPackage: [ "eVar16" ],
                    purchaseId: [ "eVar21" ],
                    fulfillment: [ "eVar22" ],
                    customerType: [ "eVar23" ],
                    optIn: [ "eVar38" ],
                    fixtureDetails: [ "prop51" ],
                    autoReloadedContent: [ "prop52" ],
                    favouriteTeam: [ "eVar51" ],
                    betslipBookmaker: [ "eVar53" ],
                    betslipEventDetails: [ "eVar54" ],
                    viewingHabit: [ "eVar49" ],
                    byline: [ "prop53" ],
                    pagination: [ "prop54" ],
                    QScmpId: [],
                    QScmpIdInt: [],
                    account: [],
                    section: [ "" ],
                    events: [],
                    adTrackableClass: [],
                    linkTrackableClass: [],
                    trackingId: [ "prop62" ]
                },
                eventMap: {
                    loginStart: "event17",
                    loginComplete: "event16",
                    regStart: "event19",
                    regComplete: "event18",
                    optIn: "event25",
                    enterComments: "event12",
                    enterRating: "event13",
                    commentScore: "event14",
                    enterCompetition: "event74",
                    enterPoll: "event75",
                    passwordStart: "event76",
                    passwordComplete: "event77",
                    activateStart: "event78",
                    activateComplete: "event79",
                    thumbsup: "event80",
                    thumbsdown: "event81",
                    placeBet: "event27",
                    betValue: "event28"
                },
                launch: function(e) {
                    var i = {
                        trackingServer: "metrics.sky.com",
                        trackingServerSecure: "smetrics.sky.com",
                        visitorNamespace: "bskyb",
                        charSet: "UTF-8",
                        trackDownloadLinks: !0,
                        trackExternalLinks: !0,
                        trackInlineStats: !0,
                        linkDownloadFileTypes: "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,air,wma",
                        linkInternalFilters: "javascript:,skyintranet,sky.com,skysports.co.uk,skyarts.co.uk,skybet.com,skypoker.com,skybingo.com,skyvegas.com,teamtalk.com,football365.com,sportinglife.com,sportal.com,bettingzone.co.uk,fixtures365.com,teamsky.com,oddschecker.com,sport365.com,skysports.com,sky.zoopla.co.uk,skyoneonline.co.uk,bskybpensionplan.com,skymobileiphone.com,skymovies.com,skyone.co.uk,sky1.co.uk,skyoneonline.co.uk,m.skynews.com,skyrainforestrescueschoolschallenge.org,skybroadband.com,skyartsonline.co.uk,skymoviesactive.com,skyhub.bskyb.com,skyone.co.uk,sky.co.uk,skybet.mobi,socceram.com,teamtalk.co.za,football365.co.uk,jointhebiggerpicture.com,skysportsnewsradio.com," + window.location.host,
                        linkLeaveQueryString: !1,
                        linkTrackVars: "None",
                        linkTrackEvents: "None",
                        browseMethod: "web",
                        url: String(window.location.href).indexOf("?") > 0 ? String(window.location.href).split("?")[0] : window.location.href,
                        server: window.location.hostname,
                        contentType: "generic",
                        partTime: "Day_Hour_Quarter",
                        QScmpId: "cmpid",
                        QScmpIdInt: "cmpid_int",
                        adTrackableClass: "adTrackable",
                        linkTrackableClass: "linkTrackable",
                        track: !0
                    };
                    document.getElementsByClassName || (document.getElementsByClassName = this.getElementsByClassName);
                    var n = [ "event1" ], s = [];
                    if (e.site && e.section) {
                        e.loginType || (e.loginType = this.getLoginType()), e.entitlements || (e.entitlements = this.getEntitlements()), 
                        e.site && (e.site = e.site.toLowerCase()), e.section && (e.section = e.section.toLowerCase()), 
                        e.contentType && (e.contentType = e.contentType.toLowerCase()), e.headline && (e.headline = e.headline.toLowerCase()), 
                        e.contentID && (e.contentID = e.contentID.toLowerCase()), e.search && (e.search = e.search.toLowerCase()), 
                        e.browseMethod && (e.browseMethod = e.browseMethod.toLowerCase()), e.searchTerms && (e.searchTerms = e.searchTerms.toLowerCase()), 
                        e.searchType && (e.searchType = e.searchType.toLowerCase()), e.videoTitle && (e.videoTitle = e.videoTitle.toLowerCase()), 
                        e.sport && (e.sport = e.sport.toLowerCase()), e.loginFrom && (e.loginFrom = e.loginFrom.toLowerCase()), 
                        e.errors && (e.errors = e.errors.toLowerCase()), 0 == e.section.indexOf("/") && (e.section = e.section.substring(1)), 
                        "/" == e.section[e.section.length - 1] && (e.section = e.section.substring(0, e.section.length - 1)), 
                        0 == e.site.indexOf("/") && (e.site = e.site.substring(1)), "/" == e.site[e.site.length - 1] && (e.site = e.site.substring(0, e.site.length - 1));
                        var r = e.section.split("/");
                        e.contentType && "" != e.contentType ? i.pageName = e.site + "/" + e.section + "/" + e.contentType : i.pageName = e.site + "/" + e.section;
                        var o = "";
                        o = e.headline && "" != e.headline ? e.site + "/" + e.section + "/" + e.headline : i.pageName, 
                        i.channel = e.site + "/" + e.section;
                        for (d = 0; d < 3; ++d) i["section" + d] = e.site + "/" + r.slice(0, d + 1).join("/");
                        if (void 0 !== e.searchResults && n.push(0 == e.searchResults ? [ "event15", "event26" ] : [ "event15" ]), 
                        e.events) for (var a = e.events.split(","), c = evTmp = "", l = omtrEv = [], d = 0; d < a.length; ++d) {
                            if (String(a[d]).indexOf("|") > 0) {
                                c = (l = a[d].split("|"))[0];
                                for (var u = 1; u < l.length; u++) evTmp = this.eventMap[l[u++]] ? this.eventMap[l[u - 1]] : l[u - 1], 
                                s.push(";" + c + ";;;" + evTmp + "=" + l[u]), n.push(evTmp);
                            } else n.push(this.eventMap[a[d]] ? this.eventMap[a[d]] : a[d]);
                            c = evTmp = "", l = omtrEv = [];
                        }
                        e.errors && n.push("event3"), i.account = "bskybglobal,bskyb" + e.site.split("/")[1];
                        for (k in e) i[k] = e[k];
                        var f = this.getAds(i.adTrackableClass);
                        if (f.length) {
                            n.push("event9");
                            for (d = 0; d < f.length; ++d) s.push(";" + f[d] + ";;;;event9=1");
                        }
                        this.getFeaturedContents(i.linkTrackableClass);
                        var h = t(i.account);
                        this.loadPlugins(h), window.s_bskyb = this.s = h, this.loadMediaModule(h), h.loadModule("Media"), 
                        h.Media.autoTrack = !1, h.Media.trackWhilePlaying = !0, h.Media.trackVars = "None", 
                        h.Media.trackEvents = "None", h.currentYear = new Date().getFullYear();
                        var p = new Date(h.currentYear, 2, 31);
                        h.dstStart = "03/" + (31 - p.getDay()) + "/" + h.currentYear, p = new Date(h.currentYear, 9, 31), 
                        h.dstEnd = "10/" + (31 - p.getDay()) + "/" + h.currentYear, this.setLoginVars(i, n), 
                        "" != o && (h.prop55 = o.substring(0, 100), h.eVar55 = o.substring(0, 255));
                        var m = h.getQueryParam(i.QScmpId);
                        if (m ? (h.campaign = h.getValOnce(m, "s_campaign", 30), h.prop45 = m, h.eVar45 = "D=c45") : (m = h.getQueryParam(i.QScmpIdInt)) && (h.prop45 = m, 
                        h.eVar45 = "D=c45"), "" == m) {
                            h.linkInternalFilters = i.linkInternalFilters, h.channelManager("attr,dcmp", "", "s_campaign", "0");
                            var g = "", v = "", _ = "";
                            h._campaignID && (g = h._campaignID.toLowerCase()), h._channel && h._channel.toLowerCase(), 
                            h._keywords && (_ = h._keywords.toLowerCase()), h._partner && (v = h._partner.toLowerCase()), 
                            h._referringDomain && h._referringDomain.toLowerCase(), 0 != g.indexOf("ilc-") && 0 != g.indexOf("knc-") && 0 != g.indexOf("snt-") && "" != g && (h.campaign = h.getValOnce(g, "cmp_cookie", "30"), 
                            h.prop45 = g, h.eVar45 = "D=c45"), 0 == g.indexOf("ilc-") && (h.prop45 = g, h.eVar45 = "D=c45"), 
                            0 == g.indexOf("knc-") && (h.campaign = h.getValOnce(g + "_" + v + "_" + _, "cmp_cookie", "30"), 
                            h.prop45 = "Paid Search", h.eVar45 = "D=c45", h.prop16 = v, h.eVar3 = "D=c16", h.prop17 = _, 
                            h.eVar8 = "D=c17"), 0 == g.indexOf("snt-") && (h.campaign = h.getValOnce(g, "cmp_cookie", "30"), 
                            h.prop45 = "Paid Search", h.eVar45 = "D=c45", h.prop16 = v, h.eVar3 = "D=c16", h.prop17 = _, 
                            h.eVar8 = "D=c17"), "Natural Search" != h._channel && "" == h._campaignID && "Direct Load" == h._channel && (h.prop45 = "Direct Load", 
                            h.eVar45 = "D=c45"), "Natural Search" == h._channel && "" == h._campaignID && "Direct Load" != h._channel && (h.campaign = h.getValOnce("okc- natural search" + v + "_" + _, "cmp_cookie", "30"), 
                            h.prop45 = "Natural Search", h.eVar45 = "D=c45", h.prop16 = v, h.eVar3 = "D=c16", 
                            h.prop17 = _, h.eVar8 = "D=c17"), "Natural Search" != h._channel && "" == h._campaignID && "Direct Load" != h._channel && (h.campaign = "", 
                            h.eVar45 = h._referringDomain, h.prop45 && "" != h.prop45 && (h.prop45 = "D=v45"));
                        }
                        var y = h.clickThruQuality(h.eVar45, "event7", "event8", "s_ctq");
                        y && n.push(y), i.partTime = h.getTimePartingJH("h", "0");
                        var b = document.referrer;
                        if ("" != b) {
                            var w = b.indexOf("?") > -1 ? b.indexOf("?") : b.length, x = b.indexOf("//") > -1 ? b.indexOf("//") + 2 : 0, S = b.indexOf("/", x) > -1 ? b.indexOf("/", x) : w;
                            i.refDomain = b.substring(x, S);
                        }
                        e.contentType && "" != e.contentType ? h.eVar19 = e.section + "/" + e.contentType : h.eVar19 = e.section, 
                        s.length && (h.products = s.join(",")), n.length && (h.events = n.join(","));
                        for (k in i) this.setVar(h, k, i[k]);
                        h.pageURL = "D=Referrer", h.prop12 && (h.eVar31 = "D=c12"), h.prop1 && (eVar1 = "D=c1"), 
                        h.prop16 && (h.eVar3 = "D=c16"), h.prop17 && (h.eVar8 = "D=c17"), h.prop3 && (h.eVar13 = "D=c3"), 
                        h.prop2 && (h.eVar2 = "D=c2"), h.prop5 && (h.eVar5 = "D=c5"), h.prop9 && (h.eVar9 = "D=c9"), 
                        h.prop36 && (h.eVar36 = "D=c36"), h.prop20 && (h.eVar20 = "D=c20"), h.prop21 && (h.eVar15 = "D=c21"), 
                        h.prop23 && (h.eVar14 = "D=c23"), h.prop25 && (h.eVar26 = "D=c25"), h.prop27 && (h.eVar29 = "D=c27"), 
                        h.prop31 && (h.eVar30 = "D=c31"), h.prop26 && (h.eVar28 = "D=c26"), h.channel && (h.eVar24 = h.hier1 = "D=ch"), 
                        h.prop35 && (h.eVar35 = "D=c35"), h.prop5 && (h.eVar5 = "D=c5"), h.prop62 && (h.eVar56 = "D=c62"), 
                        i.track && h.t();
                    }
                },
                getEntitlements: function() {
                    if (window.SKY_SPORTS.user && window.SKY_SPORTS.user.isLoggedIn) {
                        var e = window.SKY_SPORTS.user;
                        return e.isSkySports ? "sports sub" : e.isSky ? "basic sub" : "no sub";
                    }
                },
                getLoginType: function() {
                    if (window.SKY_SPORTS.user && window.SKY_SPORTS.user.isLoggedIn) {
                        var e = window.SKY_SPORTS.user;
                        return e.isNowTV ? "now tv" : e.isWholesale ? "virgin media" : "sky.com";
                    }
                },
                MovieStartManual: function(e, t, i) {
                    var n = sky.tracking.s;
                    n.Media.open(e, t, i), n.Media.play(e, "0");
                },
                MovieEndManual: function(e, t) {
                    var i = sky.tracking.s;
                    i.Media.stop(e, t), i.Media.close(e);
                },
                loadCookies: function() {
                    for (var e = document.cookie.split(";"), t = {}, i = 0; i < e.length; i++) {
                        var n = e[i].split("=");
                        t[n[0].replace(/^\s*((?:[\S\s]*\S)?)\s*$/, "$1")] = unescape(n[1]);
                    }
                    return t;
                },
                setVar: function(e, t, i) {
                    var n = this.vmap[t];
                    n = n || [ t ];
                    for (var s = 0; s < n.length; ++s) e[n[s]] = i;
                },
                setLoginVars: function(e, t) {
                    var i = this.loadCookies();
                    if (i.skySSO) {
                        if (e.loginStatus = "logged-in", i.skySSOLast != i.skySSO) {
                            this.s.c_w("skySSOLast", i.skySSO);
                            var n = i.skyLoginFrom ? i.skyLoginFrom.split(",") : [ "generic", "l" ];
                            t.push("l" == n[1] ? this.eventMap.loginComplete : this.eventMap.regComplete), e._loginFrom = n[0];
                        }
                    } else e.loginStatus = "not logged-in";
                    if (e.loginFrom) {
                        var s = e.loginFrom.split(",");
                        this.s.c_w("skyLoginFrom", e.loginFrom), t.push("l" == s[1] ? this.eventMap.loginStart : this.eventMap.regStart);
                    }
                    e.samId = i.just, i.apd && (e.ageGender = i.apd + "|" + i.gpd), i.sid_tvp && (e.skyPackage = i.sid_tvp + "|" + i.sid_hd), 
                    e.customerType = i.custype, i.sid_bb && (e.loginStatus = i.sid_bb + "|" + e.loginStatus), 
                    i.ust && (e.optIn = i.ust + "|" + i.sid_tsaoptin);
                },
                getAds: function(e) {
                    for (var t = document.getElementsByClassName(e), i = [], n = 0; n < t.length; ++n) i.push(t[n].getAttribute("place")), 
                    t[n].onclick = this.adClick;
                    return i;
                },
                getFeaturedContents: function(e) {
                    for (var t = document.getElementsByClassName(e), i = [], n = 0; n < t.length; ++n) i.push(t[n].getAttribute("place")), 
                    t[n].onclick = this.featuredContentClick;
                    return i;
                },
                adClick: function() {
                    var e = sky.tracking.s;
                    e.products = ";" + this.getAttribute("place"), e.events = "event5", e.linkTrackVars = "prop39,eVar39,products,events", 
                    e.linkTrackEvents = "event5", e.tl(this, "o", "Ad Click");
                },
                adClickManual: function(e) {
                    var t = sky.tracking.s;
                    t.products = ";" + String(e), t.events = "event5", t.linkTrackVars = "prop39,eVar39,products,events", 
                    t.linkTrackEvents = "event5", t.tl(this, "o", "Ad Click");
                },
                featuredContentClick: function() {
                    var e = sky.tracking.s;
                    e.prop15 = this.getAttribute("place"), e.eVar7 = "D=c15", e.events = "event6", e.linkTrackVars = "prop39,eVar39,prop15,eVar7,events", 
                    e.linkTrackEvents = "event6", e.tl(this, "o", "Link Click");
                },
                featuredContentClickManual: function(e, t) {
                    var i = sky.tracking.s;
                    i.prop15 = String(e) + "|" + String(t), i.eVar7 = "D=c15", i.events = "event6", 
                    i.linkTrackVars = "prop39,eVar39,prop15,eVar7,events", i.linkTrackEvents = "event6", 
                    i.tl(this, "o", "Link Click");
                },
                actionTracking: function(e, t, i, n) {
                    var s = sky.tracking.s;
                    s.linkTrackVars = [], s.linkTrackEvents = [];
                    var r = evTmp = "", o = omtrEv = prod = [];
                    for (var a in e) if (el = this.vmap[a].length > 1 ? this.vmap[a].join(",") : this.vmap[a], 
                    String(el).replace(/^\s+|\s+$/g, "").length > 0 && s.linkTrackVars.push(el), "events" == a) if (s.linkTrackVars.push("events"), 
                    String(e[a]).indexOf(",") > 0) {
                        var c = e[a].split(",");
                        for (j = 0; j < c.length; j++) if (c[j].indexOf("|") > 1) {
                            s.linkTrackVars.join(",").indexOf("products") > 0 || s.linkTrackVars.push("products"), 
                            r = (o = c[j].split("|"))[0];
                            for (l = 1; l < o.length; l++) evTmp = this.eventMap[o[l++]] ? this.eventMap[o[l - 1]] : o[l - 1], 
                            prod.push(";" + r + ";;;" + evTmp + "=" + o[l]), s.linkTrackEvents.push(evTmp);
                        } else this.eventMap[c[j]] ? s.linkTrackEvents.push(this.eventMap[c[j]]) : s.linkTrackEvents.push(c[j]);
                    } else if (e[a].indexOf("|") > 1) {
                        s.linkTrackVars.join(",").indexOf("products") > 0 || s.linkTrackVars.push("products"), 
                        r = (o = e[a].split("|"))[0];
                        for (var l = 1; l < o.length; l++) evTmp = this.eventMap[o[l++]] ? this.eventMap[o[l - 1]] : o[l - 1], 
                        prod.push(";" + r + ";;;" + evTmp + "=" + o[l]), s.linkTrackEvents.push(evTmp);
                    } else this.eventMap[e[a]] ? s.linkTrackEvents.push(this.eventMap[e[a]]) : s.linkTrackEvents.push(e[a]); else sky.tracking.setVar(s, a, e[a]);
                    prod.length > 0 && (s.products = prod.join(",")), s.linkTrackEvents = s.linkTrackEvents.join(","), 
                    s.linkTrackEvents && (s.events = s.linkTrackEvents), s.linkTrackVars = s.linkTrackVars.join(","), 
                    s.tl(n, t, i);
                },
                getElementsByClassName: function(e) {
                    var t = new Array(), n = document.getElementsByTagName("*"), s = n.length, r = new RegExp("(^|\\s)" + e + "(\\s|$)");
                    for (i = 0, j = 0; i < s; i++) r.test(n[i].className) && (t[j] = n[i], j++);
                    return t;
                },
                loadPlugins: function(e) {
                    e.getValOnce = new Function("v", "c", "e", "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"), 
                    e.clickThruQuality = function(e, t, i, n) {
                        var e, t, i, n, s = this;
                        if (1 == s.p_fo(t)) {
                            if (n || (n = "s_cpc"), s.events ? s.events + "," : "", e) return s.c_w(n, 1, 0), 
                            t;
                            if (s.c_r(n) >= 1) return s.c_w(n, 0, 0), i;
                        }
                    }, e.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}"), 
                    e.getQueryParam = new Function("p", "d", "u", "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v"), 
                    e.p_gpv = new Function("k", "u", "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=decodeURIComponent(u.substring(i+1));v=s.pt(q,'&','p_gvf',k)}return v"), 
                    e.p_gvf = new Function("t", "k", "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''"), 
                    e.repl = new Function("x", "o", "n", "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x"), 
                    e.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), 
                    e.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), 
                    e.channelManager = new Function("a", "b", "c", "V", "var s=this,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y;g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();if(!g){h='1'}i=g.indexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])==-1?'':g;if(n)o=n}if(!o&&!h){p=g;q=g.indexOf('//')>-1?g.indexOf('//')+2:0;r=g.indexOf('/',q)>-1?g.indexOf('/',q):i;t=g.substring(q,r);t=t.toLowerCase();u=t;P='Referrers';v=s.seList+'>'+s._extraSearchEngines;if(V=='1'){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');j=s.repl(j,'as_q','*');}A=s.split(v,'>');B=A.length;for(C=0;C<B;C++){D=A[C];D=s.split(D,'|');E=s.split(D[0],',');F=E.length;for(G=0;G<F;G++){H=j.indexOf(E[G]);if(H>-1){I=s.split(D[1],',');J=I.length;for(K=0;K<J;K++){L=s.getQueryParam(I[K],'',g);if(L){L=L.toLowerCase();M=L;if(D[2]){u=D[2];N=D[2]}else{N=t}if(V=='1'){N=s.repl(N,'#',' - ');N=s.repl(N,'*','as_q');N=s.repl(N,'^','ahoo');N=s.repl(N,'%','oogle');}}}}}}}O=s.getQueryParam(a,b);if(O){u=O;if(M){P='Paid Search'}else{P='Paid Non-Search';}}if(!O&&M){u=N;P='Natural Search'}f=s._channelDomain;if(f){k=s.split(f,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){W=j.indexOf(R[T]);if(W>-1)P=Q[0]}}}d=s._channelParameter;if(d){k=s.split(d,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){U=s.getQueryParam(R[T]);if(U)P=Q[0]}}}e=s._channelPattern;if(e){k=s.split(e,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){X=O.indexOf(R[T]);if(X==0)P=Q[0]}}}if(h=='1'&&!O){u=P=t=p='Direct Load'}T=M+u+t;U=c?'c':'c_m';if(c!='0'){T=s.getValOnce(T,U,0);}if(T)M=M?M:'n/a';s._referrer=T&&p?p:'';s._referringDomain=T&&t?t:'';s._partner=T&&N?N:'';s._campaignID=T&&O?O:'';s._campaign=T&&u?u:'';s._keywords=T&&M?M:'';s._channel=T&&P?P:'';"), 
                    e.seList = "altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc.de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum.net,search.daum.net|q|Daum>google.,googlesyndication.com|q,as_q|Google>icqit.com|q|icq>bing.com|q|Microsoft Bing>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yahoo.com,yahoo.co.jp|p,va|Yahoo!>yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search", 
                    e.getTimePartingJH = function(e, t) {
                        var i = this;
                        if (dc = new Date("1/1/2000"), 6 != dc.getDay() || 0 != dc.getMonth()) return "Data Not Available";
                        t = parseFloat(t);
                        var n = new Date(i.dstStart), s = new Date(i.dstEnd);
                        fl = s, cd = new Date(), cd > n && cd < fl ? t += 1 : t = t, utc = cd.getTime() + 6e4 * cd.getTimezoneOffset(), 
                        tz = new Date(utc + 36e5 * t), thisy = tz.getFullYear();
                        var r = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
                        if (thisy != i.currentYear) return "Data Not Available";
                        thish = tz.getHours(), thismin = tz.getMinutes(), thisd = tz.getDay();
                        var o = r[thisd], a = "00";
                        thismin > 15 && (a = "15"), thismin > 30 && (a = "30"), thismin > 45 && (a = "45");
                        var c = o + "_" + thish + "_" + a;
                        return "h" == e ? c : "d" == e ? o : void 0;
                    };
                },
                loadMediaModule: function(e) {
                    e.m_Media_c = "var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);l=parseInt(l);if(!l)l=1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;m.l[n]=i}};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o){var m=this,i;i=m.e(n,1,o);i.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.mt=setTimeout(i.m,5000)}}');i.m()};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){var m=this;if (m.trackWhilePlaying) {m.e(n,4,-1)}};m.e=function(n,x,o){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),ti=m.trackSeconds,tp=m.trackMilestones,z=new Array,j,d='--**--',t=1,b,v=m.trackVars,e=m.trackEvents,pe='media',pev3,w=new Object,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){w.name=n;w.length=i.l;w.playerName=i.p;if(i.to<0)w.event=\"OPEN\";else w.event=(x==1?\"PLAY\":(x==2?\"STOP\":(x==3?\"MONITOR\":\"CLOSE\")));w.openTime=new Date();w.openTime.setTime(i.s*1000);if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {b=\"Media.\"+name;pev3 = m.s.ape(i.n)+d+i.l+d+m.s.ape(i.p)+d;if(x){if(o<0&&i.lt>0){o=(ts-i.lt)+i.lo;o=o<i.l?o:i.l-1}o=Math.floor(o);if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo;}if(x<=2){i.e+=(x==1?'S':'E')+o;i.lx=x;}else if(i.lx!=1)m.e(n,1,o);i.lt=ts;i.lo=o;pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e+(x!=2?(m.trackWhilePlaying?'L':'E')+o:'');if(m.trackWhilePlaying){b=0;pe='m_o';if(x!=4){w.offset=o;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}if(i.to<0)pe='m_s';else if(x==4)pe='m_i';else{t=0;v=e='None';ti=ti?parseInt(ti):0;z=tp?m.s.sp(tp,','):0;if(ti&&i.ts>=ti)t=1;else if(z){if(o<i.to)i.to=o;else{for(j=0;j<z.length;j++){ti=z[j]?parseInt(z[j]):0;if(ti&&((i.to+1)/i.l<ti/100)&&((o+1)/i.l>=ti/100)){t=1;j=z.length}}}}}}}else{m.e(n,2,-1);if(m.trackWhilePlaying){w.offset=i.lo;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}m.l[n]=0;if(i.e){pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e;if(m.trackWhilePlaying){v=e='None';pe='m_o'}else{t=0;m.s.fbr(b)}}else t=0;b=0}if(t){vo.linkTrackVars=v;vo.linkTrackEvents=e;vo.pe=pe;vo.pev3=pev3;m.s.t(vo,b);if(m.trackWhilePlaying){i.ts=0;i.to=o;i.e=''}}}}return i};m.ae=function(n,l,p,x,o,b){if(n&&p){var m=this;if(!m.l||!m.l[n])m.open(n,l,p,b);m.e(n,x,o)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false)", 
                    e.m_i("Media");
                }
            };
            "function" != typeof DIL && (DIL = function(e, t) {
                var i, n, s = [];
                e !== Object(e) && (e = {});
                var r, o, a, c, l, d, u, f, h, p, m;
                r = e.partner, o = e.containerNSID, a = e.iframeAttachmentDelay, c = !!e.disableDestinationPublishingIframe, 
                l = e.iframeAkamaiHTTPS, d = e.mappings, u = e.uuidCookie, f = !0 === e.enableErrorReporting, 
                h = e.visitorService, p = e.declaredId, m = !0 === e.removeFinishedScriptsAndCallbacks;
                var g, v, _, y;
                g = !0 === e.disableScriptAttachment, v = !0 === e.disableDefaultRequest, _ = e.afterResultForDefaultRequest, 
                y = e.dpIframeSrc, f && DIL.errorModule.activate();
                var b = !0 === window._dil_unit_tests;
                if ((i = t) && s.push(i + ""), !r || "string" != typeof r) return i = "DIL partner is invalid or not specified in initConfig", 
                DIL.errorModule.handleError({
                    name: "error",
                    message: i,
                    filename: "dil.js"
                }), Error(i);
                if (i = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0", 
                (o || "number" == typeof o) && (o = parseInt(o, 10), !isNaN(o) && 0 <= o && (i = "")), 
                i && (o = 0, s.push(i), i = ""), (n = DIL.getDil(r, o)) instanceof DIL && n.api.getPartner() == r && n.api.getContainerNSID() == o) return n;
                if (!(this instanceof DIL)) return new DIL(e, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + r + " and containerNSID = " + o);
                DIL.registerDil(this, r, o);
                var k = {
                    IS_HTTPS: "https:" == document.location.protocol,
                    POST_MESSAGE_ENABLED: !!window.postMessage,
                    COOKIE_MAX_EXPIRATION_DATE: "Tue, 19 Jan 2038 03:14:07 UTC"
                }, w = {
                    stuffed: {}
                }, x = {}, S = {
                    firingQueue: [],
                    fired: [],
                    firing: !1,
                    sent: [],
                    errored: [],
                    reservedKeys: {
                        sids: !0,
                        pdata: !0,
                        logdata: !0,
                        callback: !0,
                        postCallbackFn: !0,
                        useImageRequest: !0
                    },
                    callbackPrefix: "demdexRequestCallback",
                    firstRequestHasFired: !1,
                    useJSONP: !0,
                    abortRequests: !1,
                    num_of_jsonp_responses: 0,
                    num_of_jsonp_errors: 0,
                    num_of_img_responses: 0,
                    num_of_img_errors: 0,
                    toRemove: [],
                    removed: [],
                    readyToRemove: !1,
                    platformParams: {
                        d_nsid: o + "",
                        d_rtbd: "json",
                        d_jsonv: DIL.jsonVersion + "",
                        d_dst: "1"
                    },
                    nonModStatsParams: {
                        d_rtbd: !0,
                        d_dst: !0,
                        d_cts: !0,
                        d_rs: !0
                    },
                    modStatsParams: null,
                    adms: {
                        TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 2e3,
                        calledBack: !1,
                        mid: null,
                        noVisitorAPI: !1,
                        instance: null,
                        releaseType: "no VisitorAPI",
                        admsProcessingStarted: !1,
                        process: function(e) {
                            try {
                                if (!this.admsProcessingStarted) {
                                    var t, i, n, s, r, o = this;
                                    if ("function" == typeof e && "function" == typeof e.getInstance) {
                                        if (h !== Object(h) || !(t = h.namespace) || "string" != typeof t) return this.releaseType = "no namespace", 
                                        void this.releaseRequests();
                                        if ((i = e.getInstance(t)) === Object(i) && "function" == typeof i.isAllowed && "function" == typeof i.getMarketingCloudVisitorID) return i.isAllowed() ? (this.instance = i, 
                                        this.admsProcessingStarted = !0, n = function(e) {
                                            "VisitorAPI" != o.releaseType && (o.mid = e, o.releaseType = "VisitorAPI", o.releaseRequests());
                                        }, b && (s = h.server) && "string" == typeof s && (i.server = s), "string" == typeof (r = i.getMarketingCloudVisitorID(n)) && r.length ? void n(r) : void setTimeout(function() {
                                            "VisitorAPI" != o.releaseType && (o.releaseType = "timeout", o.releaseRequests());
                                        }, this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE)) : (this.releaseType = "VisitorAPI not allowed", 
                                        void this.releaseRequests());
                                        this.releaseType = "invalid instance";
                                    } else this.noVisitorAPI = !0;
                                    this.releaseRequests();
                                }
                            } catch (e) {
                                this.releaseRequests();
                            }
                        },
                        releaseRequests: function() {
                            this.calledBack = !0, S.registerRequest();
                        },
                        getMarketingCloudVisitorID: function() {
                            return this.instance ? this.instance.getMarketingCloudVisitorID() : null;
                        },
                        getMIDQueryString: function() {
                            var e = I.isPopulatedString, t = this.getMarketingCloudVisitorID();
                            return e(this.mid) && this.mid == t || (this.mid = t), e(this.mid) ? "d_mid=" + this.mid + "&" : "";
                        }
                    },
                    declaredId: {
                        declaredId: {
                            init: null,
                            request: null
                        },
                        declaredIdCombos: {},
                        setDeclaredId: function(e, t) {
                            var i = I.isPopulatedString, n = encodeURIComponent;
                            if (e === Object(e) && i(t)) {
                                var s = e.dpid, r = e.dpuuid, o = null;
                                if (i(s) && i(r)) return o = n(s) + "$" + n(r), !0 === this.declaredIdCombos[o] ? "setDeclaredId: combo exists for type '" + t + "'" : (this.declaredIdCombos[o] = !0, 
                                this.declaredId[t] = {
                                    dpid: s,
                                    dpuuid: r
                                }, "setDeclaredId: succeeded for type '" + t + "'");
                            }
                            return "setDeclaredId: failed for type '" + t + "'";
                        },
                        getDeclaredIdQueryString: function() {
                            var e = this.declaredId.request, t = this.declaredId.init, i = "";
                            return null !== e ? i = "&d_dpid=" + e.dpid + "&d_dpuuid=" + e.dpuuid : null !== t && (i = "&d_dpid=" + t.dpid + "&d_dpuuid=" + t.dpuuid), 
                            i;
                        }
                    },
                    registerRequest: function(e) {
                        var t = this.firingQueue;
                        e === Object(e) && t.push(e), !this.firing && t.length && (this.adms.calledBack ? (e = t.shift(), 
                        e.src = e.src.replace(/demdex.net\/event\?d_nsid=/, "demdex.net/event?" + this.adms.getMIDQueryString() + "d_nsid="), 
                        O.fireRequest(e), this.firstRequestHasFired || "script" != e.tag || (this.firstRequestHasFired = !0)) : this.processVisitorAPI());
                    },
                    processVisitorAPI: function() {
                        this.adms.process(window.Visitor);
                    },
                    requestRemoval: function(e) {
                        if (!m) return "removeFinishedScriptsAndCallbacks is not boolean true";
                        var t, i, n = this.toRemove;
                        if (e === Object(e) && (t = e.script, i = e.callbackName, (t === Object(t) && "SCRIPT" == t.nodeName || "no script created" == t) && "string" == typeof i && i.length && n.push(e)), 
                        this.readyToRemove && n.length) {
                            t = (i = n.shift()).script, i = i.callbackName, "no script created" != t ? (e = t.src, 
                            t.parentNode.removeChild(t)) : e = t, window[i] = null;
                            try {
                                delete window[i];
                            } catch (e) {}
                            return this.removed.push({
                                scriptSrc: e,
                                callbackName: i
                            }), DIL.variables.scriptsRemoved.push(e), DIL.variables.callbacksRemoved.push(i), 
                            this.requestRemoval();
                        }
                        return "requestRemoval() processed";
                    }
                }, T = {
                    THROTTLE_START: 3e4,
                    throttleTimerSet: !1,
                    id: "destination_publishing_iframe_" + r + "_" + o,
                    url: (n = function() {
                        var e = "http://fast.", t = "?d_nsid=" + o + "#" + encodeURIComponent(document.location.href);
                        return "string" == typeof y && y.length ? y + t : (k.IS_HTTPS && (e = !0 === l ? "https://fast." : "https://"), 
                        e + r + ".demdex.net/dest4.html" + t);
                    })(),
                    iframe: null,
                    iframeHasLoaded: !1,
                    sendingMessages: !1,
                    messages: [],
                    messagesPosted: [],
                    messageSendingInterval: k.POST_MESSAGE_ENABLED ? 15 : 100,
                    jsonProcessed: [],
                    attachIframe: function() {
                        var e = this, t = document.createElement("iframe");
                        t.id = this.id, t.style.cssText = "display: none; width: 0; height: 0;", t.src = this.url, 
                        D.addListener(t, "load", function() {
                            e.iframeHasLoaded = !0, e.requestToProcess();
                        }), document.body.appendChild(t), this.iframe = t;
                    },
                    requestToProcess: function(e, t) {
                        var i = this;
                        e && !I.isEmptyObject(e) && this.process(e, t), this.iframeHasLoaded && this.messages.length && !this.sendingMessages && (this.throttleTimerSet || (this.throttleTimerSet = !0, 
                        setTimeout(function() {
                            i.messageSendingInterval = k.POST_MESSAGE_ENABLED ? 15 : 150;
                        }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages());
                    },
                    process: function(e, t) {
                        var i, n, s, r, o, a, c = encodeURIComponent;
                        if (t === Object(t) && (a = D.encodeAndBuildRequest([ "", t.dpid || "", t.dpuuid || "" ], ",")), 
                        (i = e.dests) && i instanceof Array && (n = i.length)) for (s = 0; s < n; s++) r = i[s], 
                        r = [ c("dests"), c(r.id || ""), c(r.y || ""), c(r.c || "") ], this.addMessage(r.join("|"));
                        if ((i = e.ibs) && i instanceof Array && (n = i.length)) for (s = 0; s < n; s++) r = i[s], 
                        r = [ c("ibs"), c(r.id || ""), c(r.tag || ""), D.encodeAndBuildRequest(r.url || [], ","), c(r.ttl || ""), "", a ], 
                        this.addMessage(r.join("|"));
                        if ((i = e.dpcalls) && i instanceof Array && (n = i.length)) for (s = 0; s < n; s++) r = i[s], 
                        o = r.callback || {}, o = [ o.obj || "", o.fn || "", o.key || "", o.tag || "", o.url || "" ], 
                        r = [ c("dpm"), c(r.id || ""), c(r.tag || ""), D.encodeAndBuildRequest(r.url || [], ","), c(r.ttl || ""), D.encodeAndBuildRequest(o, ","), a ], 
                        this.addMessage(r.join("|"));
                        this.jsonProcessed.push(e);
                    },
                    addMessage: function(e) {
                        var t = (t = encodeURIComponent)(f ? "---destpub-debug---" : "---destpub---");
                        this.messages.push(t + e);
                    },
                    sendMessages: function() {
                        var e, t = this;
                        this.messages.length ? (e = this.messages.shift(), DIL.xd.postMessage(e, this.url, this.iframe.contentWindow), 
                        this.messagesPosted.push(e), setTimeout(function() {
                            t.sendMessages();
                        }, this.messageSendingInterval)) : this.sendingMessages = !1;
                    }
                }, E = {
                    traits: function(e) {
                        return I.isValidPdata(e) && (x.sids instanceof Array || (x.sids = []), D.extendArray(x.sids, e)), 
                        this;
                    },
                    pixels: function(e) {
                        return I.isValidPdata(e) && (x.pdata instanceof Array || (x.pdata = []), D.extendArray(x.pdata, e)), 
                        this;
                    },
                    logs: function(e) {
                        return I.isValidLogdata(e) && (x.logdata !== Object(x.logdata) && (x.logdata = {}), 
                        D.extendObject(x.logdata, e)), this;
                    },
                    customQueryParams: function(e) {
                        return I.isEmptyObject(e) || D.extendObject(x, e, S.reservedKeys), this;
                    },
                    signals: function(e, t) {
                        var i, n = e;
                        if (!I.isEmptyObject(n)) {
                            if (t && "string" == typeof t) for (i in n = {}, e) e.hasOwnProperty(i) && (n[t + i] = e[i]);
                            D.extendObject(x, n, S.reservedKeys);
                        }
                        return this;
                    },
                    declaredId: function(e) {
                        return S.declaredId.setDeclaredId(e, "request"), this;
                    },
                    result: function(e) {
                        return "function" == typeof e && (x.callback = e), this;
                    },
                    afterResult: function(e) {
                        return "function" == typeof e && (x.postCallbackFn = e), this;
                    },
                    useImageRequest: function() {
                        return x.useImageRequest = !0, this;
                    },
                    clearData: function() {
                        return x = {}, this;
                    },
                    submit: function() {
                        return O.submitRequest(x), x = {}, this;
                    },
                    getPartner: function() {
                        return r;
                    },
                    getContainerNSID: function() {
                        return o;
                    },
                    getEventLog: function() {
                        return s;
                    },
                    getState: function() {
                        var e = {}, t = {};
                        return D.extendObject(e, S, {
                            callbackPrefix: !0,
                            useJSONP: !0,
                            registerRequest: !0
                        }), D.extendObject(t, T, {
                            attachIframe: !0,
                            requestToProcess: !0,
                            process: !0,
                            sendMessages: !0
                        }), {
                            pendingRequest: x,
                            otherRequestInfo: e,
                            destinationPublishingInfo: t
                        };
                    },
                    idSync: function(e) {
                        if (e !== Object(e) || "string" != typeof e.dpid || !e.dpid.length) return "Error: config or config.dpid is empty";
                        if ("string" != typeof e.url || !e.url.length) return "Error: config.url is empty";
                        var t, i = e.url, n = e.minutesToLive, s = encodeURIComponent, i = i.replace(/^https:/, "").replace(/^http:/, "");
                        if (void 0 === n) n = 20160; else if (n = parseInt(n, 10), isNaN(n) || 0 >= n) return "Error: config.minutesToLive needs to be a positive number";
                        return t = D.encodeAndBuildRequest([ "", e.dpid, e.dpuuid || "" ], ","), e = [ "ibs", s(e.dpid), "img", s(i), n, "", t ], 
                        T.addMessage(e.join("|")), S.firstRequestHasFired && T.requestToProcess(), "Successfully queued";
                    },
                    aamIdSync: function(e) {
                        return e === Object(e) && "string" == typeof e.dpuuid && e.dpuuid.length ? (e.url = "//dpm.demdex.net/ibs:dpid=" + e.dpid + "&dpuuid=" + e.dpuuid, 
                        this.idSync(e)) : "Error: config or config.dpuuid is empty";
                    },
                    passData: function(e) {
                        return I.isEmptyObject(e) ? "Error: json is empty or not an object" : (O.defaultCallback(e), 
                        "json submitted for processing");
                    },
                    getPlatformParams: function() {
                        return S.platformParams;
                    },
                    getEventCallConfigParams: function() {
                        var e, t = S, i = t.modStatsParams, n = t.platformParams;
                        if (!i) {
                            i = {};
                            for (e in n) n.hasOwnProperty(e) && !t.nonModStatsParams[e] && (i[e.replace(/^d_/, "")] = n[e]);
                            t.modStatsParams = i;
                        }
                        return i;
                    }
                }, O = {
                    submitRequest: function(e) {
                        return S.registerRequest(O.createQueuedRequest(e)), !0;
                    },
                    createQueuedRequest: function(e) {
                        var t, i = S, n = e.callback, s = "img";
                        if (!I.isEmptyObject(d)) {
                            var a, c, l;
                            for (a in d) d.hasOwnProperty(a) && null != (c = d[a]) && "" !== c && a in e && !(c in e || c in S.reservedKeys) && null != (l = e[a]) && "" !== l && (e[c] = l);
                        }
                        return I.isValidPdata(e.sids) || (e.sids = []), I.isValidPdata(e.pdata) || (e.pdata = []), 
                        I.isValidLogdata(e.logdata) || (e.logdata = {}), e.logdataArray = D.convertObjectToKeyValuePairs(e.logdata, "=", !0), 
                        e.logdataArray.push("_ts=" + new Date().getTime()), "function" != typeof n && (n = this.defaultCallback), 
                        (i.useJSONP = !e.useImageRequest || "boolean" != typeof e.useImageRequest) && (s = "script", 
                        t = i.callbackPrefix + "_" + r + "_" + o + "_" + new Date().getTime()), {
                            tag: s,
                            src: O.makeRequestSrc(e, t),
                            internalCallbackName: t,
                            callbackFn: n,
                            postCallbackFn: e.postCallbackFn,
                            useImageRequest: e.useImageRequest,
                            requestData: e
                        };
                    },
                    defaultCallback: function(e, t) {
                        var i, n, s, r, o, a, l, d, f;
                        if ((i = e.stuff) && i instanceof Array && (n = i.length)) for (s = 0; s < n; s++) (r = i[s]) && r === Object(r) && (o = r.cn, 
                        a = r.cv, void 0 !== (l = r.ttl) && "" !== l || (l = Math.floor(D.getMaxCookieExpiresInMinutes() / 60 / 24)), 
                        d = r.dmn || "." + document.domain.replace(/^www\./, ""), f = r.type, o && (a || "number" == typeof a) && ("var" != f && (l = parseInt(l, 10)) && !isNaN(l) && D.setCookie(o, a, 1440 * l, "/", d, !1), 
                        w.stuffed[o] = a));
                        i = e.uuid, I.isPopulatedString(i) && !I.isEmptyObject(u) && ("string" == typeof (n = u.path) && n.length || (n = "/"), 
                        s = parseInt(u.days, 10), isNaN(s) && (s = 100), D.setCookie(u.name || "aam_did", i, 1440 * s, n, u.domain || "." + document.domain.replace(/^www\./, ""), !0 === u.secure)), 
                        c || S.abortRequests || T.requestToProcess(e, t);
                    },
                    makeRequestSrc: function(e, t) {
                        e.sids = I.removeEmptyArrayValues(e.sids || []), e.pdata = I.removeEmptyArrayValues(e.pdata || []);
                        var i = S, n = i.platformParams, s = D.encodeAndBuildRequest(e.sids, ","), o = D.encodeAndBuildRequest(e.pdata, ","), a = (e.logdataArray || []).join("&");
                        delete e.logdataArray;
                        var c, l = k.IS_HTTPS ? "https://" : "http://", d = i.declaredId.getDeclaredIdQueryString();
                        c = [];
                        var u, f, h, p;
                        for (u in e) if (!(u in i.reservedKeys) && e.hasOwnProperty(u)) if (f = e[u], u = encodeURIComponent(u), 
                        f instanceof Array) for (h = 0, p = f.length; h < p; h++) c.push(u + "=" + encodeURIComponent(f[h])); else c.push(u + "=" + encodeURIComponent(f));
                        return c = c.length ? "&" + c.join("&") : "", l + r + ".demdex.net/event?d_nsid=" + n.d_nsid + d + (s.length ? "&d_sid=" + s : "") + (o.length ? "&d_px=" + o : "") + (a.length ? "&d_ld=" + encodeURIComponent(a) : "") + c + (i.useJSONP ? "&d_rtbd=" + n.d_rtbd + "&d_jsonv=" + n.d_jsonv + "&d_dst=" + n.d_dst + "&d_cb=" + (t || "") : "");
                    },
                    fireRequest: function(e) {
                        if ("img" == e.tag) this.fireImage(e); else if ("script" == e.tag) {
                            var t = (t = S.declaredId).declaredId.request || t.declaredId.init || {};
                            this.fireScript(e, {
                                dpid: t.dpid || "",
                                dpuuid: t.dpuuid || ""
                            });
                        }
                    },
                    fireImage: function(e) {
                        var t, n, r = S;
                        r.abortRequests || (r.firing = !0, t = new Image(0, 0), r.sent.push(e), t.onload = function() {
                            r.firing = !1, r.fired.push(e), r.num_of_img_responses++, r.registerRequest();
                        }, n = function(t) {
                            i = "imgAbortOrErrorHandler received the event of type " + t.type, s.push(i), r.abortRequests = !0, 
                            r.firing = !1, r.errored.push(e), r.num_of_img_errors++, r.registerRequest();
                        }, t.addEventListener ? (t.addEventListener("error", n, !1), t.addEventListener("abort", n, !1)) : t.attachEvent && (t.attachEvent("onerror", n), 
                        t.attachEvent("onabort", n)), t.src = e.src);
                    },
                    fireScript: function(e, t) {
                        var n, o, a = this, c = S, l = e.src, d = e.postCallbackFn, u = "function" == typeof d, f = e.internalCallbackName;
                        c.abortRequests || (c.firing = !0, window[f] = function(n) {
                            try {
                                n !== Object(n) && (n = {});
                                var a = e.callbackFn;
                                c.firing = !1, c.fired.push(e), c.num_of_jsonp_responses++, a(n, t), u && d(n, t);
                            } catch (e) {
                                e.message = "DIL jsonp callback caught error with message " + e.message, i = e.message, 
                                s.push(i), e.filename = e.filename || "dil.js", e.partner = r, DIL.errorModule.handleError(e);
                                try {
                                    a({
                                        error: e.name + "|" + e.message
                                    }), u && d({
                                        error: e.name + "|" + e.message
                                    });
                                } catch (e) {}
                            } finally {
                                c.requestRemoval({
                                    script: o,
                                    callbackName: f
                                }), c.registerRequest();
                            }
                        }, g ? (c.firing = !1, c.requestRemoval({
                            script: "no script created",
                            callbackName: f
                        })) : ((o = document.createElement("script")).addEventListener && o.addEventListener("error", function(t) {
                            c.requestRemoval({
                                script: o,
                                callbackName: f
                            }), i = "jsonp script tag error listener received the event of type " + t.type + " with src " + l, 
                            a.handleScriptError(i, e);
                        }, !1), o.type = "text/javascript", o.src = l, (n = DIL.variables.scriptNodeList[0]).parentNode.insertBefore(o, n)), 
                        c.sent.push(e), c.declaredId.declaredId.request = null);
                    },
                    handleScriptError: function(e, t) {
                        var i = S;
                        s.push(e), i.abortRequests = !0, i.firing = !1, i.errored.push(t), i.num_of_jsonp_errors++, 
                        i.registerRequest();
                    }
                }, I = {
                    isValidPdata: function(e) {
                        return !!(e instanceof Array && this.removeEmptyArrayValues(e).length);
                    },
                    isValidLogdata: function(e) {
                        return !this.isEmptyObject(e);
                    },
                    isEmptyObject: function(e) {
                        if (e !== Object(e)) return !0;
                        for (var t in e) if (e.hasOwnProperty(t)) return !1;
                        return !0;
                    },
                    removeEmptyArrayValues: function(e) {
                        for (var t, i = 0, n = e.length, s = [], i = 0; i < n; i++) void 0 !== (t = e[i]) && null != t && s.push(t);
                        return s;
                    },
                    isPopulatedString: function(e) {
                        return "string" == typeof e && e.length;
                    }
                }, D = {
                    addListener: document.addEventListener ? function(e, t, i) {
                        e.addEventListener(t, function(e) {
                            "function" == typeof i && i(e);
                        }, !1);
                    } : document.attachEvent ? function(e, t, i) {
                        e.attachEvent("on" + t, function(e) {
                            "function" == typeof i && i(e);
                        });
                    } : void 0,
                    convertObjectToKeyValuePairs: function(e, t, i) {
                        var n = [];
                        t = t || "=";
                        var s, r;
                        for (s in e) void 0 !== (r = e[s]) && null != r && n.push(s + t + (i ? encodeURIComponent(r) : r));
                        return n;
                    },
                    encodeAndBuildRequest: function(e, t) {
                        return this.map(e, function(e) {
                            return encodeURIComponent(e);
                        }).join(t);
                    },
                    map: function(e, t) {
                        if (Array.prototype.map) return e.map(t);
                        if (void 0 === e || null === e) throw new TypeError();
                        var i = Object(e), n = i.length >>> 0;
                        if ("function" != typeof t) throw new TypeError();
                        for (var s = Array(n), r = 0; r < n; r++) r in i && (s[r] = t.call(t, i[r], r, i));
                        return s;
                    },
                    filter: function(e, t) {
                        if (!Array.prototype.filter) {
                            if (void 0 === e || null === e) throw new TypeError();
                            var i = Object(e), n = i.length >>> 0;
                            if ("function" != typeof t) throw new TypeError();
                            for (var s = [], r = 0; r < n; r++) if (r in i) {
                                var o = i[r];
                                t.call(t, o, r, i) && s.push(o);
                            }
                            return s;
                        }
                        return e.filter(t);
                    },
                    getCookie: function(e) {
                        e += "=";
                        var t, i, n, s = document.cookie.split(";");
                        for (t = 0, i = s.length; t < i; t++) {
                            for (n = s[t]; " " == n.charAt(0); ) n = n.substring(1, n.length);
                            if (0 == n.indexOf(e)) return decodeURIComponent(n.substring(e.length, n.length));
                        }
                        return null;
                    },
                    setCookie: function(e, t, i, n, s, r) {
                        var o = new Date();
                        i && (i *= 6e4), document.cookie = e + "=" + encodeURIComponent(t) + (i ? ";expires=" + new Date(o.getTime() + i).toUTCString() : "") + (n ? ";path=" + n : "") + (s ? ";domain=" + s : "") + (r ? ";secure" : "");
                    },
                    extendArray: function(e, t) {
                        return e instanceof Array && t instanceof Array && (Array.prototype.push.apply(e, t), 
                        !0);
                    },
                    extendObject: function(e, t, i) {
                        var n;
                        if (e === Object(e) && t === Object(t)) {
                            for (n in t) !t.hasOwnProperty(n) || !I.isEmptyObject(i) && n in i || (e[n] = t[n]);
                            return !0;
                        }
                        return !1;
                    },
                    getMaxCookieExpiresInMinutes: function() {
                        return (new Date(k.COOKIE_MAX_EXPIRATION_DATE).getTime() - new Date().getTime()) / 1e3 / 60;
                    }
                };
                "error" == r && 0 == o && D.addListener(window, "load", function() {
                    DIL.windowLoaded = !0;
                });
                var C = function() {
                    L(), c || S.abortRequests || T.attachIframe(), S.readyToRemove = !0, S.requestRemoval();
                }, L = function() {
                    c || setTimeout(function() {
                        v || S.firstRequestHasFired || S.adms.admsProcessingStarted || S.adms.calledBack || ("function" == typeof _ ? E.afterResult(_).submit() : E.submit());
                    }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
                }, q = document;
                "error" != r && (DIL.windowLoaded ? C() : "complete" != q.readyState && "loaded" != q.readyState ? D.addListener(window, "load", C) : DIL.isAddedPostWindowLoadWasCalled ? D.addListener(window, "load", C) : (0 > (a = "number" == typeof a ? parseInt(a, 10) : 0) && (a = 0), 
                setTimeout(C, a || DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT))), S.declaredId.setDeclaredId(p, "init"), 
                this.api = E, this.getStuffedVariable = function(e) {
                    var t = w.stuffed[e];
                    return t || "number" == typeof t || (t = D.getCookie(e)) || "number" == typeof t || (t = ""), 
                    t;
                }, this.validators = I, this.helpers = D, this.constants = k, this.log = s, b && (this.pendingRequest = x, 
                this.requestController = S, this.setDestinationPublishingUrl = n, this.destinationPublishing = T, 
                this.requestProcs = O, this.variables = w);
            }, function() {
                var e, t = document;
                null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", e = function() {
                    t.removeEventListener("DOMContentLoaded", e, !1), t.readyState = "complete";
                }, !1));
            }(), DIL.extendStaticPropertiesAndMethods = function(e) {
                var t;
                if (e === Object(e)) for (t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            }, DIL.extendStaticPropertiesAndMethods({
                version: "5.0",
                jsonVersion: 1,
                constants: {
                    TIME_TO_DEFAULT_REQUEST: 50,
                    TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT: 500
                },
                variables: {
                    scriptNodeList: document.getElementsByTagName("script"),
                    scriptsRemoved: [],
                    callbacksRemoved: []
                },
                windowLoaded: !1,
                dils: {},
                isAddedPostWindowLoadWasCalled: !1,
                isAddedPostWindowLoad: function(e) {
                    this.isAddedPostWindowLoadWasCalled = !0, this.windowLoaded = "function" == typeof e ? !!e() : "boolean" != typeof e || e;
                },
                create: function(e) {
                    try {
                        return new DIL(e);
                    } catch (e) {
                        return new Image(0, 0).src = "http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D" + new Date().getTime(), 
                        Error("Error in attempt to create DIL instance with DIL.create()");
                    }
                },
                registerDil: function(e, t, i) {
                    (t = t + "$" + i) in this.dils || (this.dils[t] = e);
                },
                getDil: function(e, t) {
                    var i;
                    return "string" != typeof e && (e = ""), t || (t = 0), (i = e + "$" + t) in this.dils ? this.dils[i] : Error("The DIL instance with partner = " + e + " and containerNSID = " + t + " was not found");
                },
                dexGetQSVars: function(e, t, i) {
                    return (t = this.getDil(t, i)) instanceof this ? t.getStuffedVariable(e) : "";
                },
                xd: {
                    postMessage: function(e, t, i) {
                        var n = 1;
                        t && (window.postMessage ? i.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (i.location = t.replace(/#.*$/, "") + "#" + +new Date() + n++ + "&" + e));
                    }
                }
            }), DIL.errorModule = function() {
                var e = DIL.create({
                    partner: "error",
                    containerNSID: 0,
                    disableDestinationPublishingIframe: !0
                }), t = {
                    harvestererror: 14138,
                    destpuberror: 14139,
                    dpmerror: 14140,
                    generalerror: 14137,
                    error: 14137,
                    noerrortypedefined: 15021,
                    evalerror: 15016,
                    rangeerror: 15017,
                    referenceerror: 15018,
                    typeerror: 15019,
                    urierror: 15020
                }, i = !1;
                return {
                    activate: function() {
                        i = !0;
                    },
                    handleError: function(n) {
                        if (!i) return "DIL error module has not been activated";
                        n !== Object(n) && (n = {});
                        var s = n.name ? new String(n.name).toLowerCase() : "", r = [];
                        return n = {
                            name: s,
                            filename: n.filename ? n.filename + "" : "",
                            partner: n.partner ? n.partner + "" : "no_partner",
                            site: n.site ? n.site + "" : document.location.href,
                            message: n.message ? n.message + "" : ""
                        }, r.push(s in t ? t[s] : t.noerrortypedefined), e.api.pixels(r).logs(n).useImageRequest().submit(), 
                        "DIL error report sent";
                    },
                    pixelMap: t
                };
            }(), DIL.tools = {}, DIL.modules = {
                helpers: {
                    handleModuleError: function(e, t, i) {
                        var n = "";
                        return t = t || "Error caught in DIL module/submodule: ", e === Object(e) ? n = t + (e.message || "err has no message") : (n = t + "err is not a valid object", 
                        e = {}), e.message = n, i instanceof DIL && (e.partner = i.api.getPartner()), DIL.errorModule.handleError(e), 
                        this.errorMessage = n;
                    }
                }
            }), DIL.tools.getSearchReferrer = function(e, t) {
                var i = DIL.getDil("error"), n = DIL.tools.decomposeURI(e || document.referrer), s = "", r = "", o = {
                    queryParam: "q"
                };
                return (s = i.helpers.filter([ t === Object(t) ? t : {}, {
                    hostPattern: /aol\./
                }, {
                    hostPattern: /ask\./
                }, {
                    hostPattern: /bing\./
                }, {
                    hostPattern: /google\./
                }, {
                    hostPattern: /yahoo\./,
                    queryParam: "p"
                } ], function(e) {
                    return !!e.hasOwnProperty("hostPattern") && !!n.hostname.match(e.hostPattern);
                }).shift()) ? {
                    valid: !0,
                    name: n.hostname,
                    keywords: (i.helpers.extendObject(o, s), r = o.queryPattern ? (s = ("" + n.search).match(o.queryPattern)) ? s[1] : "" : n.uriParams[o.queryParam], 
                    decodeURIComponent(r || "").replace(/\+|%20/g, " "))
                } : {
                    valid: !1,
                    name: "",
                    keywords: ""
                };
            }, DIL.tools.decomposeURI = function(e) {
                var t = DIL.getDil("error"), i = document.createElement("a");
                return i.href = e || document.referrer, {
                    hash: i.hash,
                    host: i.host.split(":").shift(),
                    hostname: i.hostname,
                    href: i.href,
                    pathname: i.pathname.replace(/^\//, ""),
                    protocol: i.protocol,
                    search: i.search,
                    uriParams: function(e, i) {
                        return t.helpers.map(i.split("&"), function(t) {
                            t = t.split("="), e[t.shift()] = t.shift();
                        }), e;
                    }({}, i.search.replace(/^(\/|\?)?|\/$/g, ""))
                };
            }, DIL.tools.getMetaTags = function() {
                var e, t, i, n, s, r = {}, o = document.getElementsByTagName("meta");
                for (e = 0, i = arguments.length; e < i; e++) if (null !== (n = arguments[e])) for (t = 0; t < o.length; t++) if ((s = o[t]).name == n) {
                    r[n] = s.content;
                    break;
                }
                return r;
            }, DIL.modules.siteCatalyst = {
                dil: null,
                handle: DIL.modules.helpers.handleModuleError,
                init: function(e, t, i, n) {
                    try {
                        var s = this, r = {
                            name: "DIL Site Catalyst Module Error"
                        }, o = function(e) {
                            return r.message = e, DIL.errorModule.handleError(r), e;
                        };
                        return this.options = n === Object(n) ? n : {}, this.dil = null, t instanceof DIL ? (this.dil = t, 
                        r.partner = t.api.getPartner(), e !== Object(e) ? o("siteCatalystReportingSuite is not an object") : (window.AppMeasurement_Module_DIL = e.m_DIL = function(e) {
                            var t = "function" == typeof e.m_i ? e.m_i("DIL") : this;
                            if (t !== Object(t)) return o("m is not an object");
                            t.trackVars = s.constructTrackVars(i), t.d = 0, t.s = e, t._t = function() {
                                var e, t, i, n = "," + this.trackVars + ",", r = this.s, a = [];
                                i = [];
                                var c = {}, l = !1;
                                if (r !== Object(r)) return o("Error in m._t function: s is not an object");
                                if (this.d) {
                                    if ("function" == typeof r.foreachVar) r.foreachVar(function(e, t) {
                                        c[e] = t, l = !0;
                                    }, this.trackVars); else {
                                        if (!(r.va_t instanceof Array)) return o("Error in m._t function: s.va_t is not an array");
                                        if (r.lightProfileID ? (e = r.lightTrackVars) && (e = "," + e + "," + r.vl_mr + ",") : (r.pe || r.linkType) && (e = r.linkTrackVars, 
                                        r.pe && (t = r.pe.substring(0, 1).toUpperCase() + r.pe.substring(1), r[t] && (e = r[t].trackVars)), 
                                        e && (e = "," + e + "," + r.vl_l + "," + r.vl_l2 + ",")), e) {
                                            for (t = 0, a = e.split(","); t < a.length; t++) 0 <= n.indexOf("," + a[t] + ",") && i.push(a[t]);
                                            i.length && (n = "," + i.join(",") + ",");
                                        }
                                        for (i = 0, t = r.va_t.length; i < t; i++) e = r.va_t[i], 0 <= n.indexOf("," + e + ",") && null != r[e] && "" !== r[e] && (c[e] = r[e], 
                                        l = !0);
                                    }
                                    s.includeContextData(r, s, c).store_populated && (l = !0), l && this.d.api.signals(c, "c_").submit();
                                }
                            };
                        }, e.loadModule("DIL"), e.DIL.d = t, r.message ? r.message : "DIL.modules.siteCatalyst.init() completed with no errors")) : o("dilInstance is not a valid instance of DIL");
                    } catch (e) {
                        return this.handle(e, "DIL.modules.siteCatalyst.init() caught error with message ", this.dil);
                    }
                },
                constructTrackVars: function(e) {
                    var t, i, n, s, r, o = [];
                    if (e === Object(e)) {
                        if ((t = e.names) instanceof Array && (n = t.length)) for (i = 0; i < n; i++) "string" == typeof (s = t[i]) && s.length && o.push(s);
                        if ((e = e.iteratedNames) instanceof Array && (n = e.length)) for (i = 0; i < n; i++) if ((t = e[i]) === Object(t) && (s = t.name, 
                        r = parseInt(t.maxIndex, 10), "string" == typeof s && s.length && !isNaN(r) && 0 <= r)) for (t = 0; t <= r; t++) o.push(s + t);
                        if (o.length) return o.join(",");
                    }
                    return this.constructTrackVars({
                        names: "pageName channel campaign products events pe pev1 pev2 pev3".split(" "),
                        iteratedNames: [ {
                            name: "prop",
                            maxIndex: 75
                        }, {
                            name: "eVar",
                            maxIndex: 75
                        } ]
                    });
                },
                includeContextData: function(e, t, i) {
                    var n = {}, s = !1;
                    if (e.contextData === Object(e.contextData)) {
                        e = e.contextData;
                        var r, o;
                        "string" == typeof (t = t.options.replaceContextDataPeriodsWith) && t.length || (t = "_");
                        for (r in e) e.hasOwnProperty(r) && ((o = e[r]) || "number" == typeof o) && (r = ("contextData." + r).replace(/\./g, t), 
                        i[r] = o, s = !0);
                    }
                    return n.store_populated = s, n;
                }
            }, DIL.modules.GA = {
                dil: null,
                arr: null,
                tv: null,
                errorMessage: "",
                defaultTrackVars: [ "_setAccount", "_setCustomVar", "_addItem", "_addTrans", "_trackSocial" ],
                defaultTrackVarsObj: null,
                signals: {},
                hasSignals: !1,
                handle: DIL.modules.helpers.handleModuleError,
                init: function(e, t, i) {
                    try {
                        this.tv = this.arr = this.dil = null, this.errorMessage = "", this.signals = {}, 
                        this.hasSignals = !1;
                        var n = {
                            name: "DIL GA Module Error"
                        }, s = "";
                        t instanceof DIL ? (this.dil = t, n.partner = this.dil.api.getPartner()) : (s = "dilInstance is not a valid instance of DIL", 
                        n.message = s, DIL.errorModule.handleError(n)), e instanceof Array && e.length ? this.arr = e : (s = "gaArray is not an array or is empty", 
                        n.message = s, DIL.errorModule.handleError(n)), this.tv = this.constructTrackVars(i), 
                        this.errorMessage = s;
                    } catch (e) {
                        this.handle(e, "DIL.modules.GA.init() caught error with message ", this.dil);
                    } finally {
                        return this;
                    }
                },
                constructTrackVars: function(e) {
                    var t, i, n, s, r = [];
                    if (this.defaultTrackVarsObj !== Object(this.defaultTrackVarsObj)) {
                        for (s = {}, t = 0, i = (n = this.defaultTrackVars).length; t < i; t++) s[n[t]] = !0;
                        this.defaultTrackVarsObj = s;
                    } else s = this.defaultTrackVarsObj;
                    if (e === Object(e)) {
                        if ((e = e.names) instanceof Array && (i = e.length)) for (t = 0; t < i; t++) "string" == typeof (n = e[t]) && n.length && n in s && r.push(n);
                        if (r.length) return r;
                    }
                    return this.defaultTrackVars;
                },
                constructGAObj: function(e) {
                    var t, i, n, s, r = {};
                    for (t = 0, i = (e = e instanceof Array ? e : this.arr).length; t < i; t++) (n = e[t]) instanceof Array && n.length && (n = [], 
                    s = e[t], n instanceof Array && s instanceof Array && Array.prototype.push.apply(n, s), 
                    "string" == typeof (s = n.shift()) && s.length && (r[s] instanceof Array || (r[s] = []), 
                    r[s].push(n)));
                    return r;
                },
                addToSignals: function(e, t) {
                    return "string" == typeof e && "" !== e && null != t && "" !== t && (this.signals[e] instanceof Array || (this.signals[e] = []), 
                    this.signals[e].push(t), this.hasSignals = !0);
                },
                constructSignals: function() {
                    var e, t, i, n, s, r, o = this.constructGAObj(), a = {
                        _setAccount: function(e) {
                            this.addToSignals("c_accountId", e);
                        },
                        _setCustomVar: function(e, t, i, n) {
                            "string" == typeof t && t.length && this.addToSignals("c_" + t, i);
                        },
                        _addItem: function(e, t, i, n, s, r) {
                            this.addToSignals("c_itemOrderId", e), this.addToSignals("c_itemSku", t), this.addToSignals("c_itemName", i), 
                            this.addToSignals("c_itemCategory", n), this.addToSignals("c_itemPrice", s), this.addToSignals("c_itemQuantity", r);
                        },
                        _addTrans: function(e, t, i, n, s, r, o, a) {
                            this.addToSignals("c_transOrderId", e), this.addToSignals("c_transAffiliation", t), 
                            this.addToSignals("c_transTotal", i), this.addToSignals("c_transTax", n), this.addToSignals("c_transShipping", s), 
                            this.addToSignals("c_transCity", r), this.addToSignals("c_transState", o), this.addToSignals("c_transCountry", a);
                        },
                        _trackSocial: function(e, t, i, n) {
                            this.addToSignals("c_socialNetwork", e), this.addToSignals("c_socialAction", t), 
                            this.addToSignals("c_socialTarget", i), this.addToSignals("c_socialPagePath", n);
                        }
                    }, c = this.tv;
                    for (e = 0, t = c.length; e < t; e++) if (i = c[e], o.hasOwnProperty(i) && a.hasOwnProperty(i) && (r = o[i]) instanceof Array) for (n = 0, 
                    s = r.length; n < s; n++) a[i].apply(this, r[n]);
                },
                submit: function() {
                    try {
                        return "" !== this.errorMessage ? this.errorMessage : (this.constructSignals(), 
                        this.hasSignals ? (this.dil.api.signals(this.signals).submit(), "Signals sent: " + this.dil.helpers.convertObjectToKeyValuePairs(this.signals, "=", !0) + this.dil.log) : "No signals present");
                    } catch (e) {
                        return this.handle(e, "DIL.modules.GA.submit() caught error with message ", this.dil);
                    }
                },
                Stuffer: {
                    LIMIT: 5,
                    dil: null,
                    cookieName: null,
                    delimiter: null,
                    errorMessage: "",
                    handle: DIL.modules.helpers.handleModuleError,
                    callback: null,
                    v: function() {
                        return !1;
                    },
                    init: function(e, t, i) {
                        try {
                            this.callback = this.dil = null, this.errorMessage = "", e instanceof DIL ? (this.dil = e, 
                            this.v = this.dil.validators.isPopulatedString, this.cookieName = this.v(t) ? t : "aam_ga", 
                            this.delimiter = this.v(i) ? i : "|") : this.handle({
                                message: "dilInstance is not a valid instance of DIL"
                            }, "DIL.modules.GA.Stuffer.init() error: ");
                        } catch (e) {
                            this.handle(e, "DIL.modules.GA.Stuffer.init() caught error with message ", this.dil);
                        } finally {
                            return this;
                        }
                    },
                    process: function(e) {
                        var t, i, n, s, r, o;
                        o = !1;
                        var a = 1;
                        if (e === Object(e) && (t = e.stuff) && t instanceof Array && (i = t.length)) for (e = 0; e < i; e++) if ((n = t[e]) && n === Object(n) && (s = n.cn, 
                        r = n.cv, s == this.cookieName && this.v(r))) {
                            o = !0;
                            break;
                        }
                        if (o) {
                            for (t = r.split(this.delimiter), void 0 === window._gaq && (window._gaq = []), 
                            n = window._gaq, e = 0, i = t.length; e < i && (o = t[e].split("="), r = o[0], o = o[1], 
                            this.v(r) && this.v(o) && n.push([ "_setCustomVar", a++, r, o, 1 ]), !(a > this.LIMIT)); e++) ;
                            this.errorMessage = 1 < a ? "No errors - stuffing successful" : "No valid values to stuff";
                        } else this.errorMessage = "Cookie name and value not found in json";
                        if ("function" == typeof this.callback) return this.callback();
                    },
                    submit: function() {
                        try {
                            var e = this;
                            return "" !== this.errorMessage ? this.errorMessage : (this.dil.api.afterResult(function(t) {
                                e.process(t);
                            }).submit(), "DIL.modules.GA.Stuffer.submit() successful");
                        } catch (e) {
                            return this.handle(e, "DIL.modules.GA.Stuffer.submit() caught error with message ", this.dil);
                        }
                    }
                }
            }, DIL.modules.Peer39 = {
                aid: "",
                dil: null,
                optionals: null,
                errorMessage: "",
                calledBack: !1,
                script: null,
                scriptsSent: [],
                returnedData: [],
                handle: DIL.modules.helpers.handleModuleError,
                init: function(e, t, i) {
                    try {
                        this.dil = null, this.errorMessage = "", this.calledBack = !1, this.optionals = i === Object(i) ? i : {}, 
                        i = {
                            name: "DIL Peer39 Module Error"
                        };
                        var n = [], s = "";
                        this.isSecurePageButNotEnabled(document.location.protocol) && (s = "Module has not been enabled for a secure page", 
                        n.push(s), i.message = s, DIL.errorModule.handleError(i)), t instanceof DIL ? (this.dil = t, 
                        i.partner = this.dil.api.getPartner()) : (s = "dilInstance is not a valid instance of DIL", 
                        n.push(s), i.message = s, DIL.errorModule.handleError(i)), "string" == typeof e && e.length ? this.aid = e : (s = "aid is not a string or is empty", 
                        n.push(s), i.message = s, DIL.errorModule.handleError(i)), this.errorMessage = n.join("\n");
                    } catch (e) {
                        this.handle(e, "DIL.modules.Peer39.init() caught error with message ", this.dil);
                    } finally {
                        return this;
                    }
                },
                isSecurePageButNotEnabled: function(e) {
                    return "https:" == e && !0 !== this.optionals.enableHTTPS;
                },
                constructSignals: function() {
                    var e = this, t = this.constructScript(), i = DIL.variables.scriptNodeList[0];
                    return window["afterFinished_" + this.aid] = function() {
                        try {
                            var t = e.processData(p39_KVP_Short("c_p", "|").split("|"));
                            t.hasSignals && e.dil.api.signals(t.signals).submit();
                        } catch (e) {} finally {
                            e.calledBack = !0, "function" == typeof e.optionals.afterResult && e.optionals.afterResult();
                        }
                    }, i.parentNode.insertBefore(t, i), this.scriptsSent.push(t), "Request sent to Peer39";
                },
                processData: function(e) {
                    var t, i, n, s, r = {}, o = !1;
                    if (this.returnedData.push(e), e instanceof Array) for (t = 0, i = e.length; t < i; t++) n = e[t].split("="), 
                    s = n[0], n = n[1], s && isFinite(n) && !isNaN(parseInt(n, 10)) && (r[s] instanceof Array || (r[s] = []), 
                    r[s].push(n), o = !0);
                    return {
                        hasSignals: o,
                        signals: r
                    };
                },
                constructScript: function() {
                    var e = document.createElement("script"), t = (n = this.optionals).scriptId, i = n.scriptSrc, n = n.scriptParams;
                    return e.id = "string" == typeof t && t.length ? t : "peer39ScriptLoader", e.type = "text/javascript", 
                    "string" == typeof i && i.length ? e.src = i : (e.src = (this.dil.constants.IS_HTTPS ? "https:" : "http:") + "//stags.peer39.net/" + this.aid + "/trg_" + this.aid + ".js", 
                    "string" == typeof n && n.length && (e.src += "?" + n)), e;
                },
                submit: function() {
                    try {
                        return "" !== this.errorMessage ? this.errorMessage : this.constructSignals();
                    } catch (e) {
                        return this.handle(e, "DIL.modules.Peer39.submit() caught error with message ", this.dil);
                    }
                }
            };
            var n = {
                partner: "bskyb",
                uuidCookie: {
                    name: "aam_uuid",
                    days: 30
                }
            };
            e.trackingId && (n.declaredId = {
                dpid: "6871",
                dpuuid: encodeURIComponent(e.trackingId)
            });
            var s = DIL.create(n), r = t(s_account);
            DIL.modules.siteCatalyst.init(r, s, {
                names: [ "pageName", "channel", "campaign", "products", "events", "pe", "referrer", "server", "purchaseID", "zip", "state" ],
                iteratedNames: [ {
                    name: "eVar",
                    maxIndex: 75
                }, {
                    name: "prop",
                    maxIndex: 75
                }, {
                    name: "pev",
                    maxIndex: 3
                }, {
                    name: "hier",
                    maxIndex: 4
                } ]
            }), sky.tracking.launch(e);
        }
    };
}), define("live-refresh", [ "widget-lite", "util" ], function(e, t) {
    return e.extend({
        timeoutInterval: 15e3,
        roundCachebuster: 5,
        delay: 0,
        init: function() {
            var e = this.appendCachebuster(this.url);
            this.controller && this.view && this.url && (this.xhr = this.createCorsRequest(), 
            this.xhr.onload = this.xhrOnload.bind(this), setTimeout(function() {
                this.makeXhrRequest(e), this.requestOnInterval();
            }.bind(this), this.delay));
        },
        getUrl: function() {
            return this.rootElement.getAttribute("data-url") || this.url;
        },
        appendCachebuster: function(e, t) {
            if (!this.cachebust) return e;
            var i = new Date().getTime() / 1e3;
            return i = Math.round(i / this.roundCachebuster) * this.roundCachebuster, e + "?_" + i;
        },
        requestOnInterval: function() {
            if (this.timeoutInterval) {
                if (!this.rootElement.offsetWidth) return;
                var e = this.appendCachebuster(this.url, this.timeoutInterval);
                setTimeout(function() {
                    this.makeXhrRequest(e), this.requestOnInterval();
                }.bind(this), this.timeoutInterval);
            }
        },
        createCorsRequest: function() {
            var e = new XMLHttpRequest();
            return "withCredentials" in e ? e = e : "undefined" != typeof XDomainRequest ? e = new XDomainRequest() : (e = null, 
            console.error("cross domain xhr not supported in this browser")), e;
        },
        validateJSON: function(e) {
            try {
                return JSON.parse(e), !0;
            } catch (e) {
                return !1;
            }
        },
        xhrOnload: function() {
            if (404 !== this.xhr.status) {
                var e = this.xhr.responseText;
                if (this.validateJSON(e)) {
                    e = JSON.parse(e);
                    var t = this.rootElement;
                    require([ "live-refresh-" + this.controller + "-controller", "live-refresh-" + this.view + "-view" ], function(i, n) {
                        i(e, n, t);
                    });
                } else console.error("source is not valid json");
            }
        },
        makeXhrRequest: function(e) {
            this.xhr.open("GET", e), this.xhr.send();
        }
    });
}), define("live-refresh-match-header-controller", [], function() {
    return function(e, t, i) {
        for (var n in e) {
            var s = e[n][0] ? e[n][0].id : null;
            s && (s = s.toString(), i.getAttribute("data-match-id") === s && (i.getAttribute("data-view-bound") ? i.update(e[n][0]) : (i.update = t, 
            i.update(e[n][0], !0), i.setAttribute("data-view-bound", "true"))));
        }
    };
}), define("update-content", [], function() {
    return function(e) {
        var t, i = e.node, n = e.text, s = e.attribute, r = e.html ? "innerHTML" : "textContent";
        if (i) {
            if (null === n || void 0 === n) {
                if (!e.fallbackText) return;
                n = e.fallbackText;
            }
            s ? i.setAttribute(s, n) : (n = n.toString().trim(), (t = i[r].trim()) !== n ? (t.length > 0 && "-" !== t && (i.setAttribute("data-updated", !0), 
            e.timeout && setTimeout(function() {
                i.removeAttribute("data-updated");
            }, e.timeout)), i[r] = n) : i.removeAttribute("data-updated"));
        }
    };
}), define("live-refresh-status-lookup", [], function() {
    return {
        football: {
            0: "KO",
            1: "IP",
            2: "HT",
            3: "IP",
            4: "FT",
            5: "ET",
            6: "ET",
            7: "ET",
            8: "AET",
            9: "ET",
            10: "ET",
            11: "AET",
            12: "FT",
            13: "P-P",
            14: "IP",
            15: "IP",
            16: "C-C",
            17: "A-A",
            18: "ET",
            21: "ET",
            30: "KO",
            40: "IP",
            50: "ET"
        },
        rugby: {
            0: "KO",
            1: "KO",
            2: "IP",
            3: "HT",
            4: "IP",
            5: "FT",
            6: "ET",
            7: "AET",
            100: "P-P",
            101: "A-A",
            102: "P-P",
            998: "FT",
            999: "IP"
        }
    };
}), define("live-refresh-match-header-football-view", [ "update-content", "util", "live-refresh-status-lookup" ], function(e, t, i) {
    function n(e) {
        if (!e) return " ";
        var i = {}, n = e.split("~");
        t.forEach(n, function(e) {
            var t = e.split(/[0-9]|s\/o/);
            i[t[0]] || (i[t[0]] = []), i[t[0]].push(e.replace(t[0], ""));
        });
        var s = [];
        for (var r in i) s.push(r + "(" + i[r].join(", ").replace(/s\/o/g, '<span class="match-head__red-card"></span>') + ")");
        return "<span>" + s.join(",</span><span>") + "</span>";
    }
    function s(e) {
        var t = "FT";
        return e.match(/IP|\bET\b|HT/) && (t = "IP"), e.match(/KO/) && (t = "KO"), t;
    }
    function r(e) {
        return "number" == typeof e && (e = "(" + e + ")"), e;
    }
    function o(e, t, i, n) {
        return e.replace(/#{event-id}/, t).replace(/#{selection-id}/, i).replace(/#{odds}/, n);
    }
    return function(a) {
        var c = i.football[a.status].toUpperCase();
        e({
            attribute: "data-status",
            text: s(c),
            node: this
        });
        var l = " ";
        c.match(/KO|IP|P-P|A-A|C-C/) || (l = c), t.forEach(this.querySelectorAll("[data-role=update-status]"), function(t) {
            e({
                text: l,
                node: t
            });
        });
        var d, u;
        if (!c.match(/KO/)) {
            var f = this.querySelectorAll("[data-role=update-score]");
            d = a.teams.home.score, u = a.teams.away.score, c.match(/P-P|C-C|A-A/) && (d = c.split("-")[0], 
            u = c.split("-")[1]), e({
                text: d,
                node: f[0]
            }), e({
                text: u,
                node: f[1]
            }), setTimeout(function() {
                SKY_SPORTS.device.msie && 8 === SKY_SPORTS.device.version && (f[0].className = f[0].className, 
                f[1].className = f[1].className);
            }, 50);
        }
        var h = this.querySelectorAll("[data-role=update-agg]");
        e({
            text: r(a.teams.home.aggregate),
            node: h[0]
        }), e({
            text: r(a.teams.away.aggregate),
            node: h[1]
        });
        var p = this.querySelectorAll("[data-role=update-scorers]");
        e({
            text: n(a.teams.home.synopsis),
            node: p[0],
            html: !0
        }), e({
            text: n(a.teams.away.synopsis),
            node: p[1],
            html: !0
        }), a.hasOwnProperty("summary") && (this.querySelector("[data-role=update-summary]").style.display = "block", 
        e({
            attribute: "title",
            text: a.summary.short,
            node: this.querySelector("[data-role=update-summary-short]")
        }), e({
            text: a.summary.full,
            node: this.querySelector("[data-role=update-summary-full]")
        })), a.hasOwnProperty("attendance") && t.forEach(this.querySelectorAll("[data-role=update-attendance]"), function(t) {
            e({
                text: " (Att: " + a.attendance + ")",
                node: t
            });
        });
        var m = document.querySelector('meta[name="live-title"]');
        m && c.match(/IP/i) && (document.title = m.content.replace(/#{home-score}/gi, d).replace(/#{away-score}/gi, u));
        var g = this.querySelector("[data-role=betting]");
        if (g) if (a.hasOwnProperty("betting") && a.betting.hasOwnProperty("markets")) {
            e({
                attribute: "data-show-odds",
                text: "true",
                node: g
            }), e({
                text: a.betting.count - 1,
                node: g.querySelector("[data-role=update-bet-count]")
            });
            var v = g.querySelectorAll("[data-role=betting-market]");
            t.forEach(v, function(t, i) {
                var n = a.betting.markets[0].selections[i];
                e({
                    attribute: "data-active",
                    text: n.active,
                    node: t
                }), e({
                    attribute: "href",
                    text: o(t.getAttribute("data-link-pattern"), a.betting.id, n.id, n.price),
                    node: t
                }), e({
                    text: n.price,
                    node: t.querySelector("[data-role=update-odds]")
                });
            }), e({
                attribute: "data-active",
                text: !1 !== a.betting.active && !1 !== a.betting.markets[0].active,
                node: g
            });
        } else e({
            attribute: "data-show-odds",
            text: "false",
            node: g
        });
    };
}), define("live-refresh-match-header-rugby-union-view", [ "update-content", "util", "live-refresh-status-lookup" ], function(e, t, i) {
    function n(e) {
        var t = "FT";
        return e.match(/IP|\bET\b|HT/) && (t = "IP"), e.match(/KO/) && (t = "KO"), t;
    }
    function s(e) {
        var t = {
            tries: 0,
            conversions: 1,
            penalties: 2,
            dropGoals: 3
        }, i = {};
        for (var n in t) i[n] = e[n];
        var s = [];
        for (var r in i) "string" == typeof e[r] && s.push('<span class="match-head__score-type">' + r.replace(/pG/, "p-g") + ":</span> " + e[r].replace(/\(/g, " ("));
        return s.join("<br>");
    }
    function r(e, t, i, n) {
        return e.replace(/#{event-id}/, t).replace(/#{selection-id}/, i).replace(/#{odds}/, n);
    }
    return function(o) {
        var a = i.rugby[o.status].toUpperCase();
        e({
            node: this,
            attribute: "data-status",
            text: n(a)
        });
        var c = " ";
        if (a.match(/KO|IP|P-P|A-A|C-C/) || (c = a), t.forEach(this.querySelectorAll('[data-role="update-status"]'), function(t) {
            e({
                node: t,
                text: c
            });
        }), !a.match(/KO/)) {
            var l = this.querySelectorAll("[data-role=update-score]"), d = o.teams.home.score, u = o.teams.away.score;
            a.match(/P-P|C-C|A-A/) && (d = a.split("-")[0], u = a.split("-")[1]), e({
                text: d,
                node: l[0]
            }), e({
                text: u,
                node: l[1]
            }), setTimeout(function() {
                SKY_SPORTS.device.msie && 8 === SKY_SPORTS.device.version && (l[0].className = l[0].className, 
                l[1].className = l[1].className);
            }, 50);
            var f = this.querySelectorAll("[data-role=update-scorers]");
            e({
                text: s(o.teams.home.synopsis),
                node: f[0],
                html: !0
            }), e({
                text: s(o.teams.away.synopsis),
                node: f[1],
                html: !0
            });
        }
        o.hasOwnProperty("summary") && (this.querySelector("[data-role=update-summary]").style.display = "block", 
        e({
            attribute: "title",
            text: o.summary.short,
            node: this.querySelector("[data-role=update-summary-short]")
        }), e({
            text: o.summary.full,
            node: this.querySelector("[data-role=update-summary-full]")
        })), o.hasOwnProperty("attendance") && t.forEach(this.querySelectorAll("[data-role=update-attendance]"), function(t) {
            e({
                text: " (Att: " + o.attendance + ")",
                node: t
            });
        });
        var h = this.querySelector("[data-role=betting]");
        if (h) if (o.hasOwnProperty("betting") && o.betting.hasOwnProperty("markets")) {
            e({
                attribute: "data-show-odds",
                text: "true",
                node: h
            }), e({
                text: o.betting.count - 1,
                node: h.querySelector("[data-role=update-bet-count]")
            });
            var p = h.querySelectorAll("[data-role=betting-market]");
            t.forEach(p, function(t, i) {
                var n = o.betting.markets[0].selections[i];
                e({
                    attribute: "data-active",
                    text: n.active,
                    node: t
                }), e({
                    attribute: "href",
                    text: r(t.getAttribute("data-link-pattern"), o.betting.id, n.id, n.price),
                    node: t
                }), e({
                    text: n.price,
                    node: t.querySelector("[data-role=update-odds]")
                });
            }), e({
                attribute: "data-active",
                text: !1 !== o.betting.active && !1 !== o.betting.markets[0].active,
                node: h
            });
        } else e({
            attribute: "data-show-odds",
            text: "false",
            node: h
        });
    };
}), define("live-refresh-match-header-rugby-league-view", [ "update-content", "util", "live-refresh-status-lookup" ], function(e, t, i) {
    function n(e) {
        var t = "FT";
        return e.match(/IP|\bET\b|HT/) && (t = "IP"), e.match(/KO/) && (t = "KO"), t;
    }
    function s(e) {
        var t = {
            tries: 0,
            conversions: 1,
            penalties: 2,
            dropGoals: 3
        }, i = {};
        for (var n in t) i[n] = e[n];
        var s = [];
        for (var r in i) "string" == typeof e[r] && s.push('<span class="match-head__score-type">' + r.replace(/pG/, "p-g") + ":</span> " + e[r].replace(/\(/g, " ("));
        return s.join("<br>");
    }
    function r(e, t, i, n) {
        return e.replace(/#{event-id}/, t).replace(/#{selection-id}/, i).replace(/#{odds}/, n);
    }
    return function(o) {
        var a = i.rugby[o.status].toUpperCase();
        e({
            node: this,
            attribute: "data-status",
            text: n(a)
        });
        var c = " ";
        if (a.match(/KO|IP|P-P|A-A|C-C/) || (c = a), t.forEach(this.querySelectorAll('[data-role="update-status"]'), function(t) {
            e({
                node: t,
                text: c
            });
        }), !a.match(/KO/)) {
            var l = this.querySelectorAll("[data-role=update-score]"), d = o.teams.home.score, u = o.teams.away.score;
            a.match(/P-P|C-C|A-A/) && (d = a.split("-")[0], u = a.split("-")[1]), e({
                text: d,
                node: l[0]
            }), e({
                text: u,
                node: l[1]
            }), setTimeout(function() {
                SKY_SPORTS.device.msie && 8 === SKY_SPORTS.device.version && (l[0].className = l[0].className, 
                l[1].className = l[1].className);
            }, 50);
            var f = this.querySelectorAll("[data-role=update-scorers]");
            e({
                text: s(o.teams.home.synopsis),
                node: f[0],
                html: !0
            }), e({
                text: s(o.teams.away.synopsis),
                node: f[1],
                html: !0
            });
        }
        o.hasOwnProperty("summary") && (this.querySelector("[data-role=update-summary]").style.display = "block", 
        e({
            attribute: "title",
            text: o.summary.short,
            node: this.querySelector("[data-role=update-summary-short]")
        }), e({
            text: o.summary.full,
            node: this.querySelector("[data-role=update-summary-full]")
        })), o.hasOwnProperty("attendance") && t.forEach(this.querySelectorAll("[data-role=update-attendance]"), function(t) {
            e({
                text: " (Att: " + o.attendance + ")",
                node: t
            });
        });
        var h = this.querySelector("[data-role=betting]");
        if (h) if (o.hasOwnProperty("betting") && o.betting.hasOwnProperty("markets")) {
            e({
                attribute: "data-show-odds",
                text: "true",
                node: h
            }), e({
                text: o.betting.count - 1,
                node: h.querySelector("[data-role=update-bet-count]")
            });
            var p = h.querySelectorAll("[data-role=betting-market]");
            t.forEach(p, function(t, i) {
                var n = o.betting.markets[0].selections[i];
                e({
                    attribute: "data-active",
                    text: n.active,
                    node: t
                }), e({
                    attribute: "href",
                    text: r(t.getAttribute("data-link-pattern"), o.betting.id, n.id, n.price),
                    node: t
                }), e({
                    text: n.price,
                    node: t.querySelector("[data-role=update-odds]")
                });
            }), e({
                attribute: "data-active",
                text: !1 !== o.betting.active && !1 !== o.betting.markets[0].active,
                node: h
            });
        } else e({
            attribute: "data-show-odds",
            text: "false",
            node: h
        });
    };
}), define("live-refresh-switch", [ "widget-lite" ], function(e) {
    return e.extend({
        interval: 3e4,
        camelToDash: function(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase();
            });
        },
        init: function() {
            this.getElements(), this.createWebWorker(), this.switcher.addEventListener("change", this.bindSwitch.bind(this), !1);
        },
        getElements: function() {
            this.urlNode = this.rootElement.querySelector("[data-role=switch-url]"), this.switcher = this.rootElement.querySelector("[data-role=switch-select]"), 
            this.switcherParent = this.switcher.parentNode, this.contentTarget = this.rootElement.querySelector("[data-role=switch-content]");
        },
        bindSwitch: function() {
            var e = this.switcher.options[this.switcher.selectedIndex];
            this.worker.postMessage({
                requestData: !0,
                id: e.value
            });
        },
        createWebWorker: function() {
            window.Worker && this.workerUrl && (this.worker = new Worker(this.workerUrl), this.worker.postMessage({
                init: !0,
                url: this.url,
                interval: this.interval
            }), this.worker.onmessage = this.onMessage.bind(this));
        },
        onMessage: function(e) {
            if ("ready" === e.data) this.switcherParent.removeAttribute("data-disabled"); else {
                this.contentTarget.innerHTML = e.data;
                var t = this.contentTarget.firstElementChild.dataset;
                for (var i in t) this.urlNode.setAttribute("data-" + this.camelToDash(i), t[i]);
            }
        }
    });
}), define("live-refresh-football-controller", [ "util" ], function(e) {
    return function(t, i, n) {
        var s;
        for (var r in t) s || (s = r);
        var o = n.getAttribute("data-sport") || "football";
        e.forEach(t[s], function(e) {
            for (var t = e.id, s = n.querySelectorAll("[data-item-id='" + t + "']"), r = -1; ++r < s.length; ) {
                var a = s[r];
                a.getAttribute("data-view-bound") ? a.update(e, !1, o) : (a.update = i, a.update(e, !0, o), 
                a.setAttribute("data-view-bound", "true"));
            }
        });
    };
}), define("update-text", [], function() {
    return function(e, t, i, n) {
        if (e) {
            if (null === t || void 0 === t) {
                if (!n) return;
                t = n;
            }
            t = t.toString().trim();
            var s = e.textContent.trim();
            s !== t ? (s.length > 0 && "-" !== s && (e.setAttribute("data-updated", !0), i && setTimeout(function() {
                e.removeAttribute("data-updated");
            }, i)), e.textContent = t) : e.removeAttribute("data-updated");
        }
    };
}), define("live-refresh-football-view", [ "update-text", "live-refresh-status-lookup" ], function(e, t) {
    return function(i, n, s) {
        if (!i.error) {
            var r = i.teams.home.score, o = i.teams.away.score, s = s.indexOf("rugby") > -1 ? "rugby" : s, a = t[s][i.status];
            if (a.match(/FT|ET|HT|AET/i) && e(this.querySelector(".matches__info"), a), a.match(/IP/i) && this.querySelector(".matches__info") && this.querySelector(".matches__info").textContent.match(/HT/i) && e(this.querySelector(".matches__info"), ""), 
            a.match(/P-P|A-A|C-C/i)) {
                var c = a.split("-");
                r = c[0], o = c[1];
            }
            this.setAttribute("data-status", a);
            var l = this.querySelectorAll(".matches__teamscores-side");
            e(l[0], r), e(l[1], o);
            var d = this.querySelector(".matches__summary");
            if (d) {
                var u = "";
                i.teams.home.hasOwnProperty("aggregate") && (u = "(Agg " + [ i.teams.home.aggregate, " - ", i.teams.away.aggregate + ")" ].join(" ")), 
                i.summary && i.summary.full && !i.summary.full.match(/extra time/i) && (u += " " + i.summary.full), 
                u ? (d.classList.add("matches__summary--show"), e(d, u)) : d.classList.remove("matches__summary--show");
            }
        }
    };
}), define("live-refresh-live-table-controller", [ "update-text", "util" ], function(e, t) {
    return function(e, i, n) {
        e = "string" == typeof e ? JSON.parse(e) : e;
        var s = null, r = parseInt(n.getAttribute("data-comp-round"), 10);
        r && (t.forEach(e.items[0].tables, function(e) {
            e.round.id !== r || (s = e);
        }), s && (s.divisions = [], t.forEach(n.querySelectorAll("tbody > tr"), function(e, t) {
            e.classList.contains("standing-table__row--divider") && s.divisions.push(t + 1);
        }), n.getAttribute("data-view-bound") ? n.update(s) : (n.update = i, n.update(s, !0), 
        n.setAttribute("data-view-bound", !0))));
    };
}), define("parse-date", [], function() {
    return function(e) {
        var t = new Date(e), i = new Date(), n = t.valueOf() - 6e4 * t.getTimezoneOffset();
        return i.setTime(n), i.toDateString() + " " + i.toTimeString().split(" ").shift();
    };
}), define("live-refresh-live-table-view", [ "update-content", "util", "parse-date" ], function(e, t, i) {
    function n(e, t) {
        return parseInt(e.getAttribute("data-position"), 10) - parseInt(t.getAttribute("data-position"), 10);
    }
    function s(e, i) {
        t.forEach(e, function(e) {
            e.style.cssText = "0", i.appendChild(e);
        });
    }
    function r(e, i, n) {
        n && i && e && t.forEach(i, function(e, s) {
            e.classList.remove("standing-table__row--divider"), t.forEach(n, function(e) {
                e === s + 1 && i[s].classList.add("standing-table__row--divider");
            });
        });
    }
    function n(e, t) {
        return parseInt(e.getAttribute("data-position"), 10) - parseInt(t.getAttribute("data-position"), 10);
    }
    function s(e, i) {
        t.forEach(e, function(e) {
            e.style.cssText = "0", i.appendChild(e);
        });
    }
    function r(e, i, n) {
        n && i && e && t.forEach(i, function(e, s) {
            e.classList.remove("standing-table__row--divider"), t.forEach(n, function(e) {
                e === s + 1 && i[s].classList.add("standing-table__row--divider");
            });
        });
    }
    var o, a = {};
    return function(c, l) {
        var d = this.querySelector("tbody");
        if (l) {
            o = d.parentNode.querySelector("thead").querySelectorAll("th");
            for (var u = -1; ++u < o.length; ) {
                var f = o[u].getAttribute("data-label");
                f && (a[f] = u);
            }
        }
        for (var h = [], p = d.querySelectorAll("tr"), m = -1; ++m < p.length; ) h.push(p[m]);
        var g = 1;
        t.forEach(h, function(i) {
            var n, s = parseInt(i.getAttribute("data-item-id"), 10);
            if (t.forEach(c.table.rows, function(e) {
                e.team.id == s && (n = e);
            }), l && (i.getAttribute("data-start-pos") || i.setAttribute("data-start-pos", g), 
            i.setAttribute("data-position", g), i.classList.contains("ignore") || g++), n) {
                var r, o = i.querySelectorAll("td"), d = parseInt(i.getAttribute("data-position"), 10), u = parseInt(i.getAttribute("data-start-pos"), 10), f = n.pos, h = f - d;
                f !== u ? (r = f < u ? "up" : "down", i.setAttribute("data-direction", r)) : i.removeAttribute("data-direction"), 
                i.setAttribute("data-position", f);
                for (var p in n) e({
                    node: o[a[p]],
                    text: n[p],
                    fallbackText: "-"
                });
                i.style.cssText = [ "-webkit-transform: translateY(" + 100 * h + "%)", "transform: translateY(" + 100 * h + "%)" ].join(";");
            }
        }), h.sort(n), setTimeout(function() {
            s(h, d);
        }, 500), e({
            node: this.querySelector('[data-role="timestamp"]'),
            text: i(c.lastUpdated.timestamp)
        });
        var v = this.querySelector('[data-role="status"]');
        e({
            node: v,
            text: c.status
        }), v && v.setAttribute("data-status", c.status), r(this, h, c.divisions);
    };
});