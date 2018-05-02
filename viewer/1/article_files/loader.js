// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true, es5: true, -W082*/
(function(){
function load_script(){
    var protocol = typeof window!='undefined' && window.location &&
        window.location.protocol;
    protocol = !protocol || !/^http/.test(protocol) ? 'http:' : protocol;
    var url = protocol+'//player.h-cdn.com/loader.js?customer=sky_de&md5=1048102-1fac90e2';
    var script = document.createElement('script');
    script.src = url;
    if (document.getElementsByTagName('head').length)
        document.getElementsByTagName('head')[0].appendChild(script);
    else if (document.getElementsByTagName('body').length)
        document.getElementsByTagName('body')[0].appendChild(script);
    else if (document.head)
        document.head.appendChild(script);
}
var ev = '500', iframe_autoload = +'0';
if (iframe_autoload && window.top!=window)
    load_script();
else if (ev=='page_load' || ev=='external')
{
    var ev_name = ev=='page_load' ? 'load' : 'init_spark_load';
    var loaded = ev=='page_load' ? document.readyState=='complete' :
        window.init_spark_load;
    if (loaded)
        load_script();
    else if (window.addEventListener)
        window.addEventListener(ev_name, load_script);
    else if (window.attachEvent)
        window.attachEvent(ev=='page_load' ? 'onload' : ev_name, load_script);
    else if (ev=='page_load')
        window.onload = load_script;
}
else
    setTimeout(load_script, +ev||500);
}());
