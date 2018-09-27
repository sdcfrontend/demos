(function () {

  var trackme = document.querySelectorAll('[data-track]');
  trackme.forEach(function (item) {
    item.track = track;
  });

  function track() {
    var pc = (100 / window.innerHeight) * (this.offsetTop - window.pageYOffset);
    pc = pc.toFixed(2);
    if (pc > -110 && pc < 110 && pc !== this.style.getPropertyValue('--vptop')) {
      this.style.setProperty('--vptop', pc);
    }
  }

  function tick() {
    trackme.forEach(function (item) {
      item.track();
    })

    requestAnimationFrame(tick)

  }

  tick();


})()