var createElement = function (src, parent) {
    var element = document.createElement('img');
    element.src = src;
    element.width = 0;
    element.height = 0;
    parent.parentNode.appendChild(element);
};

var getParametersFromUrl = function (url) {
    url = typeof url !== 'undefined' ? url : window.location.href;
    var match,
        pl = /\+/g,
        search = /[&\?]([^&=]+)=?([^&]*)/g,
            
        decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        },
        params = {};

    while (match = search.exec(url)) {
        params[decode(match[1])] = decode(match[2]);
    };

    return params;
};

function getScriptByString(searchStr) {
    var scriptsOnPage = document.getElementsByTagName('script');
    for (var i =0; i <scriptsOnPage.length; i++) {
        var s = scriptsOnPage[i];
        if (s.hasAttribute("src") && s.src.indexOf(searchStr) > -1) {
            return s
        }; 
    };

};

var createElement = function(url) {
    var a = document.createElement("script");
    a.src = url
    document.body.appendChild(a);
};

var thisScript = getScriptByString("d23jrpblg62jtb.cloudfront.net");
var params = getParametersFromUrl(thisScript.src);
var DV = 'https://pixel.adsafeprotected.com/jload?anId=925228&advId=' + params.advertiser_id + '&campId=' + params.campaign_id + '&pubId=' + params.site_id + '&chanId=display&placementId=' + params.placement_id +'&planId=' + params.creative_id +  '&'; 

    if ( params.hasOwnProperty('pct') ){
        var percentage = params.pct
    } else {
        var percentage = 5
    };

    if (load_calc()) {
        createElement(DV, thisScript);
    };

function load_calc() { return Math.random() < (percentage / 100) ? true : false; };