
function lotameBeacon(ccauds) {
    cookieAudience(ccauds).done(function(data) {
        requestIframe(urlFromResponse(data));
    });
}

function urlFromResponse(data) {
    var compressedAudience = data ? data.tc : "";
    return "//stats3.unrulymedia.com/audience/blank.gif?td=" + encodeURIComponent(compressedAudience) + '&cb=' + cacheBuster();
}

function encodedTargetingJsonFromAudience(ccauds) {
    targeting = {
        Lotame: ccauds.Profile
    };
    return encodeURIComponent(UNRULY.stringify(targeting));
}

function cacheBuster() {
    return new Date().getTime();
}

function cookieAudience(ccauds) {
    if(ccauds) {
        return jQuery.ajax({
            type: 'POST',
            url: '//targeting.unrulymedia.com/audience',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {
                tj: encodedTargetingJsonFromAudience(ccauds)
            },
            xhrFields: {
                withCredentials: true
            }
        });
    }
}

function requestIframe(url) {
    var iframe = document.createElement('iframe');
    iframe.src = url;
    document.body.appendChild(iframe);
}

function extractDataAttempt(i) {
    if (i > 3) return;

    var script = document.createElement('script');
    script.src = "https://ad.crwdcntrl.net/5/c=5328/pe=y/callback=lotameBeacon";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);

    setTimeout(function(){
        extractDataAttempt(i+1);
    }, i  * 1000 * 120);
}

extractDataAttempt(1);