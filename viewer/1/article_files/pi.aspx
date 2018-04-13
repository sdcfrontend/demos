/**
 * Exactag Tagmanagement Mechanism
 *
 * @copyright Exactag GmbH, Düsseldorf, Germany
 * @author Peter Viergutz
 *
 */

(function (d) {
    var P57074813caf948e59f3f86b404a9e34b = {
        version: "3.0.20140326",
        root:null,
        processed: false,
        doc:null,
        element:"iframe",
        testmode: false,
        uk: "b06b36190f3846b9b61bc21f32c32188",
        cookiemode: "set",
        nfifHost: "//m.exactag.com",
        pixels:[],
        pushPixel: function(pixel){
            if(this.testmode) return;
            this.pixels.push(pixel);
        },
        deliver:function () {
            var root = d.createElement(this.element);
            d.getElementsByTagName('body')[0].appendChild(root);
            root.style.cssText = "position:absolute; z-index:-1; width:0px; height:0px; overflow: hidden; border: 0;";
            root.tabindex = "-1";
            root.onload = this.createDelegate(this, this.processPixels);
            this.root = this.getDocument(root);
            try {
                this.root.open();
                this.root.close();
                window.setTimeout(this.createDelegate(this, this.processPixels), 250);
            } catch (e) {
                console.log("TagManager: cannot access root element");
            }

            if(this.uk != "" && this.cookiemode == "set"){
                this.createCookie("et_uk", this.uk, 365);
            }
        },
        processPixels:function () {
            if(this.processed) return;
            this.processed = true;

            try {

                var is_chrome = window.chrome || false;
                var chrome_version = 0;
                if(is_chrome) {
                    chrome_version = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
                }

            } catch(e){}

            for (var i = 0; i < this.pixels.length; i++) {
                var pixel = this.pixels[i];
                try {

                    var leaf = this.root.createElement(this.element);
                    this.root.getElementsByTagName('body')[0].appendChild(leaf);

                    if(pixel.mode == "fif"){

                        doc = this.getDocument(leaf);

                        try {
                            if (is_chrome && chrome_version >= 42) {

                                (function (doc, pixel) {
                                    window.setTimeout(function () {
                                        doc.close();
                                    }, 3000);
                                })(doc, pixel);

                            }
                        } catch (e) {
                            console.log("TagManager: unable to close document for pixelId " + pixel.pixelid);
                        }

                        doc.open();
                        doc.write(pixel.code);

                    } else if(pixel.mode == "nfif"){

                        leaf.setAttribute("src", this.nfifHost+"/px.aspx?id="+pixel.id);

                    } else if(pixel.mode == "jfif"){

                        leaf.contentWindow['code'] = pixel.code;
                        leaf.setAttribute("src", 'javascript:window["code"];');
                    } else {
                        console.log("TagManager: unknown delivery mode: " + pixel.mode);
                    }

                } catch (e) {
                    console.log("TagManager: cannot deliver pixel " + pixel.code);
                }
            }
        },
        getDocument:function (obj) {
            var doc = null;
            try {
                doc = obj.contentDocument ? obj.contentDocument : (obj.contentWindow.document || obj.document);
            } catch (e) {
                console.log("TagManager: plan b in effect");
                obj.src = 'javascript:(function(){document.open();document.domain="' + document.domain + '";})()';
                doc = obj.contentDocument ? obj.contentDocument : (obj.contentWindow.document || obj.document);
            }
            return doc;
        },
        createDelegate:function (object, method) {
            return function () {
                method.apply(object, arguments);
            }
        },
        createCookie: function(name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }
    };

    if (typeof console == "undefined") {
        var console = {};
        console.log = function () {
        };
    }

        P57074813caf948e59f3f86b404a9e34b.pushPixel({code:"\u003c!DOCTYPE html\u003e\r\n\u003chtml lang=\"de\"\u003e\r\n\u003chead\u003e\r\n\u003cmeta charset=\"utf-8\"\u003e\r\n\u003ctitle\u003eExactag Iframe\u003c/title\u003e\r\n\u003c/head\u003e\r\n\u003cbody\u003e\r\n\u003cscript async type=\u0027text/javascript\u0027 src=\u0027https://wt1.rqtrk.eu/d7d5d5d9-1af8-44c0-b0a9-7c63fd143a2c-trk.js\u0027\u003e\u003c/script\u003e\n\u003cscript type=\u0027text/javascript\u0027\u003e\n\t(new Image).src = \"https://ws2.rqtrk.eu/push?pid=d7d5d5d9-1af8-44c0-b0a9-7c63fd143a2c\u0026dmp=et\u0026uid=b06b36190f3846b9b61bc21f32c32188\"; \n\twindow.roq=window.roq||function(){(roq.q=roq.q||[]).push(arguments)};\n\troq(\u0027send\u0027, { src: \u0027www\u0027, type: 100 });\n\u003c/script\u003e\r\n\u003c/body\u003e\r\n\u003c/html\u003e" , mode:"fif" , ttl:0 , pixelid: 17058 });



    P57074813caf948e59f3f86b404a9e34b.deliver();

})(document);

/*

 

 

 
 */