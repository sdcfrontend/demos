define("article-advert", [ "widget-lite" ], function(e) {
    return e.extend({
        adverts: [ {
            paragraphCount: 4,
            minParagraphs: 4,
            adClass: "block advert--mpu -bp10-hdn -bp20-hdn is-hidden--bp10 is-hidden--bp20 advert--mpu-standard-height",
            adId: "in-article-video"
        }, {
            paragraphCount: 5,
            minParagraphs: 7,
            adClass: "-bp30-hdn is-hidden--bp30",
            adId: "in-article-desktop",
            validation: function(e) {
                return !(e.querySelectorAll('[data-fn="create-video"]').length > 0);
            }
        } ],
        init: function(e) {
            this.rootElement = e;
            for (var t = this.adverts.length - 1; t >= 0; t--) this.injectAdvert(this.adverts[t]);
        },
        getValidBodyContainer: function(e) {
            var t = this.rootElement;
            if (t.parentNode.querySelectorAll('[data-fn="article-advert"] > p').length >= e.minParagraphs) return e.validation && !e.validation(t) ? null : t;
            var a = t.parentNode.querySelectorAll('[data-fn="article-advert"] > div');
            if (0 === a.length) return null;
            var n = a[a.length - 1];
            return n.getElementsByTagName("p").length >= e.minParagraphs ? e.validation && !e.validation(n) ? null : n : null;
        },
        injectAdvert: function(e) {
            var t = this.getValidBodyContainer(e);
            if (null !== t) {
                for (var a = t, n = 0, r = null, i = 0, d = a.children.length; i < d; i++) if ("P" === a.children[i].tagName) {
                    if (n === e.paragraphCount) {
                        r = a.children[i];
                        break;
                    }
                    n++;
                }
                var l = document.createElement("div");
                l.setAttribute("class", e.adClass), l.setAttribute("id", e.adId), null !== r && r.parentNode.insertBefore(l, r);
            }
        }
    });
});