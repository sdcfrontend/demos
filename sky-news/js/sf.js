(function () {

  window.slides = document.querySelectorAll('[data-role="slide"]');

  function registerSlide(slide, style, func) {
    slide[style] = func;
  }

  function triggerSlide(slide) {

    var dims = slide.getBoundingClientRect();
    if (dims.top < (window.innerHeight / 2)) {
      return 'middle';
    }

    if (dims.top < (window.innerHeight)) {
      return 'in';
    }

    return false;
  }

  function trackSlide(slide) {
    var dims = slide.getBoundingClientRect();
    var height = dims.height;

    if (dims.top < window.innerHeight && dims.top > (height * -1)) {
      return Math.floor((100 / window.innerHeight) * dims.top);
    }

    return null;
  }

  function tick() {

    for (var i = -1; ++i < slides.length;) {

      var type = slides[i].getAttribute('data-type');
      if (!type) {
        return;
      }

      if (type === 'trigger' && slides[i].trigger) {
        var tol = triggerSlide(slides[i]);
        if (tol) {
          slides[i].trigger(tol);
        }
      }

      if (type === 'track' && slides[i].track) {
        if (trackSlide(slides[i]) !== null) {
          slides[i].track(trackSlide(slides[i]))

        }
      }
    }

    requestAnimationFrame(tick);
  }

  window.registerSlide = registerSlide;

  tick();


})()