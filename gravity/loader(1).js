// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true, es5: true, -W082*/
(function(){
var magic = 'SLOADER', inited, frame_srcs = [], params;
var poll_timer, load_timer, init = function(){};
function debug_log(msg){
    if (console.debug)
        console.debug(msg);
}
function load_script(caller){
    debug_log('Spark loader: load_script by '+caller+' on '+(is_top ? 'top' :
        'frame'));
    clearTimeout(load_timer);
    var protocol = typeof window!='undefined' && window.location &&
        window.location.protocol;
    protocol = !protocol || !/^http/.test(protocol) ? 'http:' : protocol;
    create_script(protocol+'//player.h-cdn.com/loader.js?customer=sky_uk&no_conf=true&md5=1016400-8c04b2ee');
    create_script(protocol+'//player.h-cdn.com/config.js?customer=sky_uk&md5=136727-73cfff86');
}
function create_script(url){
    var script = document.createElement('script');
    script.src = url;
    if (document.getElementsByTagName('head').length)
        document.getElementsByTagName('head')[0].appendChild(script);
    else if (document.getElementsByTagName('body').length)
        document.getElementsByTagName('body')[0].appendChild(script);
    else if (document.head)
        document.head.appendChild(script);
}
function get_top_url(){
    if (typeof window=='undefined' || typeof document=='undefined')
        return;
    var info = {location: (window.location||{}).href};
    if (window.top!=window)
    {
        info.referrer = document.referrer;
        try { info.top_location = window.top.location.href; } catch(e){}
    }
    return info.top_location||info.referrer||info.location;
}
function is_url_match(match, url){
    try {
        if (typeof match=='string')
            match = JSON.parse(match);
    } catch(e){ match = undefined; }
    if (!(match instanceof Array)||!match.length)
        return false;
    return match.filter(function(match){
        return new RegExp(match).test(url); })[0];
}
function is_random_match(r){
    if (!r || isNaN(r))
        return;
    var rand = storage_get('spark_loader_rand');
    if (!rand)
        storage_set('spark_loader_rand', rand = Math.random());
    return rand > r/100;
}
function verify_msg(e){
    return e.data && typeof e.data=='string' && e.data.startsWith(magic); }
function on_top_msg(e){
    if (!verify_msg(e))
        return;
    debug_log('Spark loader: received top msg '+e.data);
    var data = {top_url: top_url}, rand;
    if (params.length)
        data.params = params;
    if (rand = storage_get('spark_loader_rand'))
        data.rand = rand;
    e.source.postMessage(magic+'welcome'+JSON.stringify(data), '*');
    if (inited)
        e.source.postMessage(magic+'init_script', '*');
    else
        frame_srcs.push(e.source);
}
function on_frame_msg(e){
    if (!verify_msg(e))
        return;
    debug_log('Spark loader: received frame msg '+e.data);
    if (e.data.substring(0, magic.length+7)==magic+'welcome')
    {
        clearTimeout(poll_timer);
        try { top_p = JSON.parse(e.data.substring(magic.length+7)); }
        catch(err){ debug_log('fail '+e.data.substring(magic.length+7)); }
        init();
    }
    else if (e.data==magic+'init_script')
        init_load_script();
}
function poll_top_frame(){
    window.top.postMessage(magic+'hello', '*');
    poll_timer = setTimeout(poll_top_frame, 1000);
}
function add_event_listener(ev, cb){
    if (window.addEventListener)
        window.addEventListener(ev, cb);
    else if (window.attachEvent)
        window.attachEvent(ev=='load' ? 'onload' : ev, cb);
    else if (ev=='load')
        window.onload = cb;
}
function remove_event_listener(ev, cb){
    if (window.removeEventListener)
        window.removeEventListener(ev, cb);
    else if (window.detachEvent)
        window.detachEvent(ev=='load' ? 'onload' : ev, cb);
    else if (ev=='load')
        window.onload = undefined;
}
function on_page_load(){
    load_script('on_page_load');
    remove_event_listener('load', on_page_load);
}
function on_external_load(){
    load_script('on_page_load');
    remove_event_listener('external_spark_load', on_external_load);
}
function init_load_script(){
    if (inited)
        return;
    debug_log('Spark loader: init load script event '+ev);
    inited = true;
    frame_srcs.forEach(function(s){
        s.postMessage(magic+'init_script', '*'); });
    if (iframe_autoload && !is_top)
        load_script('iframe_autoload');
    else if (ev=='page_load' || ev=='external')
    {
        var ev_name = ev=='page_load' ? 'load' : 'external_spark_load';
        var loaded = ev=='page_load' ? document.readyState=='complete' :
            window.init_spark_load;
        if (loaded)
            load_script('loaded');
        else
        {
            add_event_listener(ev_name, ev=='page_load' ? on_page_load
                : on_external_load);
            if (ev=='page_load')
            {
                load_timer = setTimeout(load_script, is_top ? timeout||20000
                    : 10000, 'load_timer');
            }
        }
    }
    else if (ev=='cpu_idle')
    {
        if (window.requestIdleCallback)
            window.requestIdleCallback(load_script, timeout||10000);
        else
            setTimeout(load_script, timeout||10000, 'cpu_idle');
    }
    else
        setTimeout(load_script, +ev||500, 'timer');
}
var _is_mocha = undefined;
function is_mocha(){
    if (_is_mocha!==undefined)
        return _is_mocha;
    if (typeof process!='undefined' && typeof process.env!='undefined')
        return _is_mocha = process.env.IS_MOCHA||false;
    return _is_mocha = false;
}
function _has_local_storage(){
    try {
        var _ = window.localStorage;
        if (_.length)
            return true;
        _.setItem('_', 0);
        _.removeItem('_');
        return true;
    } catch(e){}
}
var has_local_storage = _has_local_storage();
function storage_get(i){ return !has_local_storage ? undefined
    : window.localStorage.getItem(i); }
function storage_set(i, v){
    if (has_local_storage)
        window.localStorage.setItem(i, v);
}
var is_top = window==window.top;
var rules = '[]';
var ev = '1000';
var ab_testing = '';
var timeout = +'15000';
var iframe_autoload = +'0';
var url_filter = '';
var min_android_ver = '0';
var min_ios_ver = '0';
var random = +'0';
var experimental = '';
var top_url = get_top_url(), os_ver, top_p;
var is_spark_cp = !!top_url.match(/holaspark.com\/cp\//);
var local_p = storage_get('spark_load');
var url_p = (top_url.match(/(\?|&|#)spark_load=([0-9a-z_;]+)($|&|#)/)||[])[2];
var ua = typeof window!=undefined && navigator && navigator.userAgent;
var is_ios = /iPhone|iPad|iPod|HolaCDN iOS/.test(ua);
var is_android = /(Android|Andr0id)/.test(ua);
var is_winphone = /Windows Phone/.exec(ua);
var is_mobile = is_ios||is_android||is_winphone;
params = url_p||local_p ? (url_p||local_p).split(';') : [];
if (/(\?|&|#)spark_enable=(1|true)($|&|#)/.test(top_url))
    params.push('spark_enable');
if (/(\?|&|#)spark_disable=(1|true)($|&|#)/.test(top_url))
    params.push('spark_disable');
window.spark_loader = window.spark_loader||{};
window.spark_loader.top_url = top_url;
window.spark_loader.params = params;

if (params.indexOf('spark_disable')!=-1 || random && !has_local_storage)
    return;

function is_filtered(rule){
    if (is_url_match(rule.url_filter, top_url) || is_random_match(rule.random))
        return true;
    else if (rule.min_android_ver && ua
        && (os_ver=/(Android|Andr0id)(?: (\d+\.\d+))?/.exec(ua)) && os_ver[2]
        && +os_ver[2] < +rule.min_android_ver)
    {
        return true;
    }
    else if (rule.min_ios_ver && ua && (os_ver=
        /(?:iPhone|iPad|iPod|iPod touch);.*?OS (\d+[._]\d+)/.exec(ua))
        && os_ver[1] && +os_ver[1].replace('_', '.') < +rule.min_ios_ver)
    {
        return true;
    }
    return false;
}

if (!experimental)
{
    try { rules = rules ? JSON.parse(rules) : []; }
    catch(e){ rules = []; }
    rules.push({match: ['.*'], url_filter: url_filter, random: random,
        min_android_ver: min_android_ver, min_ios_ver: min_ios_ver, ev: ev,
        ab_testing: ab_testing});
    var rule = rules.filter(function(r){
        return is_url_match(r.match, top_url); })[0];
    if (params.indexOf('spark_enable')==-1 && is_filtered(rule))
        return;
    ev = rule.ev||'page_load';
    ab_testing = rule.ab_testing;
    if (params.length)
    {
        ev = params[0];
        ab_testing = is_spark_cp ? false : params.indexOf('ab_testing')!=-1 ?
            true : (params.indexOf('disable_ab_testing')!=-1
            || params.indexOf('spark_enable')!=-1) ? false : ab_testing;
    }
    if (ab_testing)
        add_event_listener('message', is_top ? on_top_msg : on_frame_msg);
    if (!ab_testing || window.init_spark_load)
        return init_load_script();
    if (!is_top)
        poll_top_frame();
    else
        add_event_listener('init_spark_load', init_load_script);
}
else
{
    function _init(){
        if (top_p)
        {
            if (top_p.params)
                params = params.concat(top_p.params);
            if (top_p.rand)
                storage_set('spark_loader_rand', top_p.rand);
            window.spark_loader.top_url = top_url = top_p.top_url;
        }
        try { rules = rules ? JSON.parse(rules) : []; }
        catch(e){ rules = []; }
        rules.push({match: ['.*'], url_filter: url_filter, random: random,
            min_android_ver: min_android_ver, min_ios_ver: min_ios_ver, ev: ev,
            ab_testing: ab_testing});
        var rule = rules.filter(function(r){
            return is_url_match(r.match, top_url); })[0];
        debug_log('Spark loader: init rule '+JSON.stringify(rule));
        if (params.indexOf('spark_enable')==-1 && is_filtered(rule))
            return debug_log('Spark loader: filtered out by rule');
        ev = rule.ev||'page_load';
        ab_testing = rule.ab_testing;
        if (params.length)
        {
            ev = params[0];
            ab_testing = is_spark_cp ? false : params.indexOf('ab_testing')!=-1
                ? true : (params.indexOf('disable_ab_testing')!=-1
                || params.indexOf('spark_enable')!=-1) ? false : ab_testing;
        }
        if (!ab_testing || window.init_spark_load)
            return init_load_script(true);
        else if (is_top)
            add_event_listener('init_spark_load', init_load_script);
    }
    init = _init;
    add_event_listener('message', is_top ? on_top_msg : on_frame_msg);
    if (is_top)
        init();
    else
        poll_top_frame();
}
if (is_mocha())
{
    window.hsl = {set_top_url: function(url){ top_url = url; },
        set_ua: function(_ua){ ua = _ua; }, is_filtered: is_filtered,
        set_conf: function(conf){ url_filter = conf.url_filter;
        random = conf.random; min_android_ver = conf.min_android_ver;
        min_ios_ver = conf.min_ios_ver; ev = conf.ev;
        ab_testing = conf.ab_testing;}, has_local_storage: function(){
        has_local_storage = _has_local_storage(); }};
    if (typeof window.hola_cdn_on_load=='function')
        window.hola_cdn_on_load();
}
}());
