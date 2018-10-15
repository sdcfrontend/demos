(function () {
  var trackme = document.querySelectorAll('[data-track]');
  trackme.forEach(function (item) {
    track(item);
  });

  function track(el) {
    function tick() {
      var dims = el.getBoundingClientRect();
      var pc = (100 / window.innerHeight) * dims.top;
      pc = pc.toFixed(2);
      el.style.setProperty('--vptop', pc);
      requestAnimationFrame(tick)
    }
    tick();
  }

})()