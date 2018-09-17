(function () {

  var steps = {
    0: [
      "0,150 1,141 12,126 23,122 33,101 43,95 54,57 65,49 75,32 96,19 116,24 125,41 136,55 147,84 157,91 168,119 177,124 189,138 210,150 0,150",
      "0,150 0,120 12,100 22,92 32,56 43,41 55,33 64,32 74,24 85,27 94,34 115,34 125,76 146,120 157,124 166,136 187,147 199,147 210,150 0,150",
      "0,150 1,33 13,21 23,14 33,3 44,1 66,35 75,63 86,63 96,81 116,86 126,117 136,121 146,137 157,139 168,144 176,143 191,146 210,150 0,150"
    ],
    1: [
      "0,150 23,144 34,128 44,126 55,111 65,105 74,82 85,76 96,49 116,38 128,27 147,30 158,39 167,63 179,69 187,82 199,92 209,129 210,150 0,150",
      "1,148 13,140 23,136 34,120 44,122 55,96 65,82 74,51 85,38 95,18 116,20 127,42 135,43 157,68 167,91 178,102 188,122 209,137 209,150 0,150",
      "0,150 23,143 33,120 43,116 54,122 64,114 74,85 86,82 95,58 116,46 128,48 136,44 147,47 158,38 168,29 180,45 188,66 200,80 210,150 0,150"
    ]
  }

  var con = document.querySelector('.sf-morph-chart-stick-track');
  var chart = document.querySelector('.sf-morph-chart');
  var links = chart.querySelectorAll('[data-role="links"] a');
  var slides = chart.querySelector('[data-role="slides"]');
  var polygons = chart.querySelectorAll('polygon[data-side]');
  var currentstep = 0;


  links.forEach(function (item) {

    item.onclick = function (e) {
      slides.setAttribute('data-year', this.dataset.step);

      links.forEach(function (link) {
        link.removeAttribute('aria-current');
      })

      item.setAttribute('aria-current', true);

      e.preventDefault();
      setstep(currentstep, this.dataset.step);
      currentstep = this.dataset.step;
    }
  })

  function setstep(step1, step2) {
    console.log(step1, step2);
    polygons.forEach(function (item, index) {

      var coords = steps[index];

      item.innerHTML = '<animate attributeName="points" begin="click" dur="0.33s" repeatCount="1" fill="freeze"/>';

      var anim = item.querySelector('animate');
      anim.setAttribute('from', coords[step1]);
      anim.setAttribute('to', coords[step2]);
      anim.beginElement();
      setTimeout(function () {
        item.setAttribute('points', coords[step2]);
      }, 340)

    })
  }

  var current = 0;

  function tick() {

    var dims = con.getBoundingClientRect();
    var t = (100 / dims.height) * dims.top;
    var t = ((Math.round(t / 33)) * -1);
    t = Math.max(t, 0);
    t = Math.min(2, t);
    if (t !== current) {
      links[t].click();
    }
    current = t;


    requestAnimationFrame(tick);
  }

  tick();

})()