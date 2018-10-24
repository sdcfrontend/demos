(function () {

  var data = { "teams": [{ "name": "Arsenal", "positions": 20, "max": 20, "years": [{ "pts": 56, "pos": 10, "season": "92/93" }, { "pts": 71, "pos": 4, "season": "93/94" }, { "pts": 51, "pos": 12, "season": "94/95" }, { "pts": 63, "pos": 5, "season": "95/96" }, { "pts": 68, "pos": 3, "season": "96/97" }, { "pts": 78, "pos": 1, "season": "97/98" }, { "pts": 78, "pos": 2, "season": "98/99" }, { "pts": 73, "pos": 2, "season": "99/00" }, { "pts": 70, "pos": 2, "season": "00/01" }, { "pts": 87, "pos": 1, "season": "01/02" }, { "pts": 78, "pos": 2, "season": "02/03" }, { "pts": 90, "pos": 1, "season": "03/04" }, { "pts": 83, "pos": 2, "season": "04/05" }, { "pts": 67, "pos": 4, "season": "05/06" }, { "pts": 68, "pos": 4, "season": "06/07" }, { "pts": 83, "pos": 3, "season": "07/08" }, { "pts": 72, "pos": 4, "season": "08/09" }, { "pts": 75, "pos": 3, "season": "09/10" }, { "pts": 68, "pos": 4, "season": "10/11" }, { "pts": 70, "pos": 3, "season": "11/12" }, { "pts": 73, "pos": 4, "season": "12/13" }, { "pts": 79, "pos": 4, "season": "13/14" }, { "pts": 75, "pos": 3, "season": "14/15" }, { "pts": 71, "pos": 2, "season": "15/16" }, { "pts": 75, "pos": 5, "season": "16/17" }, { "pts": 63, "pos": 6, "season": "17/18" }] }, { "name": "Tottenham Hotspur", "positions": 20, "max": 20, "years": [{ "pts": 59, "pos": 8, "season": "92/93" }, { "pts": 45, "pos": 15, "season": "93/94" }, { "pts": 62, "pos": 7, "season": "94/95" }, { "pts": 61, "pos": 8, "season": "95/96" }, { "pts": 46, "pos": 10, "season": "96/97" }, { "pts": 44, "pos": 14, "season": "97/98" }, { "pts": 47, "pos": 11, "season": "98/99" }, { "pts": 53, "pos": 10, "season": "99/00" }, { "pts": 49, "pos": 12, "season": "00/01" }, { "pts": 50, "pos": 9, "season": "01/02" }, { "pts": 50, "pos": 10, "season": "02/03" }, { "pts": 45, "pos": 14, "season": "03/04" }, { "pts": 52, "pos": 9, "season": "04/05" }, { "pts": 65, "pos": 5, "season": "05/06" }, { "pts": 60, "pos": 5, "season": "06/07" }, { "pts": 46, "pos": 11, "season": "07/08" }, { "pts": 51, "pos": 8, "season": "08/09" }, { "pts": 70, "pos": 4, "season": "09/10" }, { "pts": 62, "pos": 5, "season": "10/11" }, { "pts": 69, "pos": 4, "season": "11/12" }, { "pts": 72, "pos": 5, "season": "12/13" }, { "pts": 69, "pos": 6, "season": "13/14" }, { "pts": 64, "pos": 5, "season": "14/15" }, { "pts": 70, "pos": 3, "season": "15/16" }, { "pts": 86, "pos": 2, "season": "16/17" }, { "pts": 77, "pos": 3, "season": "17/18" }] }] }

  var rail = document.querySelector('.sf-h2h__rail');
  var body = document.querySelector('.sf-h2h__body');
  var overflow = document.querySelector('.sf-h2h__overflow');
  var canvas = document.querySelector('.sf-h2h__canvas');
  var tooltip = document.querySelector('.sf-h2h__tooltip');
  var currentdata = {};
  var points = {
    home: [],
    away: []
  };
  var lines = {
    home: [],
    away: []
  };

  function setup(teams) {

    var showoverflow = 0;
    var years = 0;

    body.querySelectorAll('.sf-h2h__point').forEach(function (item) {
      points[item.dataset.label].push(item);
      item.onmouseenter = showtooltip;
      item.onmouseleave = hidetooltip;
    });

    body.querySelectorAll('.sf-h2h__line').forEach(function (item) {
      lines[item.dataset.label].push(item);
    });

    teams.forEach(function (team) {

      if (team.max > team.positions) {
        var max = (team.max - team.positions);
        if (max > showoverflow) {
          showoverflow = max
        }

      }

      if (team.years.length > years) {
        years = team.years.length
      }

    });

    if (showoverflow) {
      overflow.style.height = (showoverflow * 2) + 24 + "px";
    }

    else {
      overflow.style.height = "0";
    }

    canvas.style.width = ((years + 2) * 30) + "px";
  }

  function drawpoints(data, label, modifier) {

    currentdata[label] = data;

    modifier = modifier || '';

    points[label] = points[label] || [];
    lines[label] = lines[label] || [];

    data.years.forEach(function (year, index) {

      var point = points[label][index];
      var top;

      if (!point) {
        point = document.createElement('div');
        point.className = 'h2h__point ' + modifier;
        point.onmouseenter = showtooltip;
        point.onmouseleave = hidetooltip;
        body.appendChild(point);
        points[label].push(point);
      }

      point.setAttribute('data-label', label);
      point.setAttribute('data-tooltip', year.season + '|Position: ' + year.pos + '|Points: ' + year.pts);
      point.innerText = year.pos;

      if (year.pos > 20) {
        top = "100% + " + ((year.pos - 20) * 2) + "px";
      }

      else {
        top = topc(year.pos, 20) + "%";
      }

      point.style.cssText = "top:calc(" + top + "); left:" + ((index * 30) + 20) + "px;transition-delay:" + (index * 35) + "ms";

      var line = lines[label][index];
      if (!line) {
        line = document.createElement('div');
        line.className = 'h2h__line ' + modifier;
        line.setAttribute('data-label', label);
        body.appendChild(line);
        lines[label].push(line);
      }

      if (points[label][index - 1]) {
        drawline(points[label][index - 1], point, line, index);
      }
    });
  }

  function topc(val, max) {
    return (100 / max) * val
  }

  function drawline(a, b, line, index) {
    var pointA = {
      left: a.offsetLeft,
      top: a.offsetTop
    };

    var pointB = {
      left: b.offsetLeft,
      top: b.offsetTop
    }

    var pointAcenterX = a.offsetWidth / 2;
    var pointAcenterY = a.offsetHeight / 2;
    var pointBcenterX = b.offsetWidth / 2;
    var pointBcenterY = b.offsetHeight / 2;
    var angle = Math.atan2(pointB.top - pointA.top, pointB.left - pointA.left) * 180 / Math.PI;
    var distance = lineDistance(pointA.left, pointA.top, pointB.left, pointB.top);

    // Set Angle
    line.style.cssText = 'transform: rotate(' + angle + 'deg); width:' + distance + 'px;transition-delay:' + (index * 35) + 'ms;';

    if (pointB.left < pointA.left) {

      line.style.top = (pointA.top + pointAcenterY) + 'px';
      line.style.left = (pointB.left + pointBcenterX) + 'px';
    }

    else {
      line.style.top = (pointA.top + pointAcenterY) + 'px';
      line.style.left = (pointA.left + pointAcenterX) + 'px';
    }
  }

  function lineDistance(x, y, x0, y0) {
    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
  };

  function redraw() {
    setup([currentdata.home, currentdata.away]);
    drawpoints(currentdata.home, 'home');
    drawpoints(currentdata.away, 'away');
  }

  function showtooltip(event) {
    clearTimeout(tooltip.timeout);
    var dims = event.target.getBoundingClientRect();
    tooltip.textContent = event.target.getAttribute('data-tooltip').replace(/\|/g, '\n');
    tooltip.style.cssText = "opacity:1;visibility:visible;left:" + (dims.left + (dims.width / 2)) + "px;top: " + (dims.top + window.pageYOffset) + "px";
  }

  function hidetooltip(event) {
    tooltip.timeout = setTimeout(function () {
      tooltip.style.opacity = "0";
    }, 333);
  }

  function swipable() {
    if (rail.scrollWidth > rail.offsetWidth) {
      rail.setAttribute('data-swipable', true);
    }

    rail.onscroll = function () {
      rail.onscroll = null;
      rail.removeAttribute('data-swipable');
    }
  }

  setup([data.teams[0], data.teams[1]]);
  drawpoints(data.teams[0], 'home', 'animate-in-view');
  drawpoints(data.teams[1], 'away', 'animate-in-view');


  var resize;
  window.addEventListener('resize', function () {
    clearTimeout(resize);
    resize = setTimeout(function () {
      redraw();
    }, 1000 / 3)
  })


  document.querySelectorAll('select').forEach(function (item) {
    item.onchange = function () {

      var s1 = document.querySelectorAll('select')[0];
      var s2 = document.querySelectorAll('select')[1];

      var data1 = data.teams[parseInt(s1.value, 10)];
      var data2 = data.teams[parseInt(s2.value, 10)];

      setup([data1, data2]);
      drawpoints(data1, s1.id);
      drawpoints(data2, s2.id);

    }
  });

  swipable();

})()