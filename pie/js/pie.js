function randomiseRotation(segments) {

  segments.forEach(function(segment) {
    var fills = segment.querySelectorAll('[data-role="fill"]');
    var fix = segment.querySelector('[data-role="fix"]');
    var rotation = Math.floor(Math.random() * 180);
    var fillRotation = rotation;
    var fixRotation = rotation * 2;

    fills.forEach(function(fill) {
      fill.style.transform = 'rotate('+fillRotation+'deg)'
    });

    fix.style.transform = 'rotate('+fillRotation*2+'deg)'

  });

}

function setRotation(segments) {

  var totalValue = 0;

  segments.forEach(function(segment, index) {
    var fills = segment.querySelectorAll('[data-role="fill"]');
    var fix = segment.querySelector('[data-role="fix"]');
    var value = segment.getAttribute('data-value');
    var fillRotation = (value/100) * 180;
    var fixRotation = fillRotation * 2;

    segment.style.opacity = 1;

    fills.forEach(function(fill) {
      fill.style.transform = 'rotate('+fillRotation+'deg)'
    });

    fix.style.transform = 'rotate('+fillRotation*2+'deg)'

    if (index > 0) {
      var prevValue = parseFloat(segments[index-1].getAttribute('data-value'));

      totalValue = totalValue + prevValue;

      segment.style.transform = 'rotate('+(totalValue/100) * 360+'deg)'

    }

  });

}

var charts = document.querySelectorAll('[data-role="chart"]');

charts.forEach(function(chart) {
  var segments = chart.querySelectorAll('[data-role="segment"]');

  chart.addEventListener('click', function(){
    setRotation(segments)
  }, false);
});
