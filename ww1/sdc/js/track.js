(function () {

  var trackme = document.querySelectorAll('[data-track]');
  trackme.forEach(function (item) {
    item.track = track;
  });

  function track() {
    var pc = (100 / window.innerHeight) * (this.offsetTop - window.pageYOffset);
    if (pc > -110 && pc < 110) {
      this.style.setProperty('--vptop', pc);
    }
  }


  window.addEventListener('scroll', function () {

    requestAnimationFrame(function () {
      trackme.forEach(function (item) {
        item.track();
      })
    })
  }, { passive: true })

})()