function createCircleSVG(stroke, track) {

  var coordRoot = 50;
  var arcSkew = coordRoot - (stroke/2);
  var arcPosition = (coordRoot*2) - stroke;

  var path = 'M '+coordRoot+','+coordRoot+' m 0,-'+arcSkew+' a '+arcSkew+','+arcSkew+' 0 1 1 0,'+arcPosition+' a '+arcSkew+','+arcSkew+' 0 1 1 0,-'+arcPosition+'';

  var svg = '<svg viewBox=\"0 0 100 100\">';
  if (track == 'true') {
    svg+='<path class=\"circle-chart__track\" d=\"'+path+'\" >';
  }
  svg+= '</path><path class=\"circle-chart__bar\" data-role=\"bar\" d=\"'+path+'\"></path></svg>';

  return svg;

}

function preSetChart(chart) {

  var type = chart.dataset.type;

  switch (type) {
    case "circle":

      chart.insertAdjacentHTML('beforeend', createCircleSVG(chart.dataset.stroke, chart.dataset.track));

      var bars = chart.querySelectorAll('[data-role="bar"]');

      bars.forEach(function(bar) {
        var trackLength = bar.getTotalLength();

        bar.style.strokeDasharray = trackLength + ' ' + trackLength;
        bar.style.strokeDashoffset = trackLength;
        bar.style.strokeWidth = chart.dataset.stroke;
        bar.style.stroke = chart.dataset.strokeColour;
      });
      break;
  }

}

function setChart(chart) {
  var max = chart.dataset.max;
  var type = chart.dataset.type;
  var bars = chart.querySelectorAll('[data-role="bar"]');

  if (!max) {
    max = bars[0].dataset.value;

    bars.forEach(function(bar) {
      if (bar.dataset.value > max) {
        max = bar.dataset.value;
      }
    });
  }

  switch (type) {
    case "bar":
      bars.forEach(function(bar) {
        if (type == "bar") {
          bar.style.cssText = 'transform: translateY(' + (100 - (bar.dataset.value/max)*100) + '%)';
        }
      });
      break;

    case "circle":
      bars.forEach(function(bar) {
        var trackLength = bar.getTotalLength();
        var pathLength = trackLength - (trackLength * chart.dataset.value);

        bar.style.transition = 'stroke-dashoffset '+chart.dataset.duration+'s ease-in-out';
        bar.style.strokeDashoffset = pathLength;
      });
      break;

  }
}

function triggerCharts() {

  var charts = document.querySelectorAll('[data-role="chart"]');
  var height = window.innerHeight;

  charts.forEach(function(chart) {

    if (chart.dataset.preset) {
      preSetChart(chart);
    }

  });

  function findScrollPosition() {

    charts.forEach(function(chart) {

      var dimensions = chart.getBoundingClientRect();

      if (dimensions.bottom < height) {
        setChart(chart);
      }

    });

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

triggerCharts();
