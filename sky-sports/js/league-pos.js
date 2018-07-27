(function () {

  var group = document.querySelector('.sff-league-pos__city');
  var dots = document.querySelectorAll('.dot');
  var line = document.querySelector('.line');

  function lineDistance(x, y, x0, y0) {
    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
  };

  function drawLine(a, b, line) {

    var pointA = {
      left: a.offsetLeft,
      top: a.offsetTop
    };

    var pointB = {
      left: b.offsetLeft,
      top: b.offsetTop
    }

    var pointAcenterX = a.offsetWidth;
    var pointAcenterY = a.offsetHeight;
    var pointBcenterX = b.offsetWidth;
    var pointBcenterY = b.offsetHeight;
    var angle = Math.atan2(pointB.top - pointA.top, pointB.left - pointA.left) * 180 / Math.PI;
    var distance = lineDistance(pointA.left, pointA.top, pointB.left, pointB.top);

    // Set Angle
    line.style.cssText = 'transform: rotate(' + angle + 'deg); width:' + distance + 'px';

    if (pointB.left < pointA.left) {

      line.style.top = (pointA.top + pointAcenterY) + 'px';
      line.style.left = (pointB.left + pointBcenterX) + 'px';
    }

    else {
      line.style.top = (pointA.top) + 'px';
      line.style.left = (pointA.left) + 'px';
    }
  }

  document.querySelectorAll('.sff-league-pos__group').forEach(function (item) {

    var dotitems = item.querySelectorAll('.dot');

    dotitems.forEach(function (dotitem, index) {

      setTimeout(function () {
        this.removeAttribute('data-animate-in-view');
      }.bind(dotitem), index * 50);

      dotitem.style.cssText = "left: " + ((index * 36) + 8) + "px; top:" + (((parseInt(dotitem.dataset.pos, 10) - 1) * 5) + 2) + "%;";

    })

  })


  function renderLines() {

    document.querySelectorAll('.sff-league-pos__group').forEach(function (item) {

      var dotitems = item.querySelectorAll('.dot');
      var lines = item.querySelectorAll('.line');

      dotitems.forEach(function (dotitem, index) {
        if (index === dotitems.length - 1) {
          return;
        }

        var line = lines[index];

        if (!line) {
          line = document.createElement('div');
          line.className = 'line';
          item.appendChild(line);
        }

        // if (dotitem.dataset.pos === "r" || parseInt(dotitem.dataset.pos, 10) > 17) {
        //   line.classList.add('line--hidden');
        // }

        drawLine(dotitems[index], dotitems[index + 1], line);
      })

    })

  }

  renderLines();

})()