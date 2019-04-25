_satellite.pushAsyncScript(function(event, target, $variables){
  var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.fyre-comment-media-expanded[class] { width: 100%; }';
document.getElementsByTagName('head')[0].appendChild(style);
});
