function setCharts(chart) {
  var max = chart.dataset.max;
  var type = chart.dataset.type;
  var 
}

function triggerCharts() {

  function findScrollPosition() {

    var charts = document.querySelectorAll('[data-role="chart"]');
    var height = window.innerHeight;

    charts.forEach(function(chart) {

      var dimensions = chart.getBoundingClientRect();

      if (dimensions.bottom < height) {
        setCharts(chart);
      }

    });

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

triggerCharts();
