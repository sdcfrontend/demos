define("roadblock", [ "util", "widget-lite" ], function(e, s) {
    "use strict";
    return s.extend({
        roadblockType: "none",
        messageNoSkyId: "You need to sign in to view this video",
        messageNoSub: "You need to subscribe to view this video",
        messageMobile: "This content is available in our app",
        messageNotOnMobile: !1,
        messageLink: "http://www.skyid.com/signin",
        messageLinkAndroid: !1,
        messageLinkIos: !1,
        init: function() {
            this.roadblockBarrier = this.rootElement.querySelector('[data-role="roadblock-success"]'), 
            this.roadblockOverlay = this.rootElement.querySelector('[data-role="roadblock-overlay"]'), 
            this.roadblockText = this.rootElement.querySelector('[data-role="roadblock-text"]'), 
            this.signInLink && (this.roadblockOverlay.href = this.signInLink);
            var e = this.canPass();
            !0 === e ? (this.roadblockBarrier.classList.add("callfn"), this.roadblockBarrier.removeAttribute("data-role"), 
            this.removeRoadblock()) : (this.addMessage(e), this.roadblockOverlay.style.opacity = 1);
        },
        canPass: function() {
            return "skyid" === this.roadblockType ? !!SKY_SPORTS.user.isLoggedIn || this.messageNoSkyId : "premium" !== this.roadblockType || (SKY_SPORTS.user.isLoggedIn ? this.canWatchPremium() : this.messageNoSkyId);
        },
        hasNowTVUrl: function() {
            var e = this.roadblockBarrier.getAttribute("data-nowtv-url");
            if (e && e.length) return !0;
        },
        canWatchPremium: function() {
            if (SKY_SPORTS) return !(!SKY_SPORTS.user.isNowTV || !this.hasNowTVUrl()) || (SKY_SPORTS.user.isWholesale || SKY_SPORTS.user.isSkySports ? !SKY_SPORTS.device.mobile || (this.messageNotOnMobile && (this.roadblockOverlay.style.pointerEvents = "none"), 
            SKY_SPORTS.device.ios && this.messageLinkIos && (this.roadblockOverlay.href = this.messageLinkIos), 
            SKY_SPORTS.device.android && this.messageLinkAndroid && (this.roadblockOverlay.href = this.messageLinkAndroid), 
            this.messageNotOnMobile ? this.messageNotOnMobile : this.messageMobile) : this.messageNoSub);
        },
        addMessage: function(e) {
            this.roadblockText.textContent = e;
        },
        removeRoadblock: function() {
            this.roadblockOverlay.parentNode.removeChild(this.roadblockOverlay);
        }
    });
});