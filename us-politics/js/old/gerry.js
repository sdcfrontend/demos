(function () {
  var con = document.querySelector('.sf-gerry');
  var prec = con.querySelector('.sf-gerry__precints');
  var result = con.querySelector('[data-role="precints-won-result"]');
  var red = con.querySelector('[data-role="precints-won-red"]');
  var blue = con.querySelector('[data-role="precints-won-blue"]');
  var links = con.querySelectorAll('[data-role="gerry-links"] a');

  links.forEach(function (item) {
    item.onclick = function (e) {

      e.preventDefault();

      links.forEach(function (link) {
        link.removeAttribute('aria-current');
      })

      this.setAttribute('aria-current', true);
      var state = item.getAttribute('data-step');
      prec.setAttribute('data-state', state);

      if (state === "0") {
        result.textContent = "Red wins";
        blue.textContent = "2";
        red.textContent = "3";
      }
      if (state === "1") {
        result.textContent = "Red wins";
        blue.textContent = "0";
        red.textContent = "5";


      }

      if (state === "2") {
        result.textContent = 'Blue wins';
        blue.textContent = "3";
        red.textContent = "2";

      }
    }
  });

  function tick() {

    var dims = con.getBoundingClientRect();
    var t = (100 / dims.height) * dims.top;
    var t = ((Math.round(t / 33)) * -1);
    t = Math.max(t, 0);
    t = Math.min(2, t);
    console.log(t);
    prec.setAttribute('data-state', t);

    if (t === 0) {
      [result, red, blue].forEach(function (item) {
        item.textContent = " ";
        item.style.visibility = "hidden"
      })
    }
    if (t === 1) {
      result.textContent = "Red wins";
      blue.textContent = "0";
      red.textContent = "5";

      [result, red, blue].forEach(function (item) {
        item.style.visibility = "visible"
      })
    }

    if (t === 2) {
      result.textContent = 'Blue wins';
      blue.textContent = "3";
      red.textContent = "2";
      [result, red, blue].forEach(function (item) {
        item.style.visibility = "visible"
      })
    }
    requestAnimationFrame(tick);
  }

  // tick();
})()