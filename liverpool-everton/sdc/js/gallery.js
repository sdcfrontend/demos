(function () {

  var index = 0;
  var slides = document.querySelectorAll('.sf-gallery__slide');
  var navs = document.querySelectorAll('.sf-gallery__nav-item');
  var caption = document.querySelector('.sf-gallery__nav-caption');
  var cells = document.querySelectorAll('.sf-gallery__slide-cell');
  var rail = document.querySelector('.sf-gallery__body');


  function setslide(index) {

    slides.forEach(function (slide) {
      slide.removeAttribute('data-current');
    })

    if (slides[index]) {
      slides[index].setAttribute('data-current', true);
      caption.textContent = slides[index].getAttribute('data-caption');

    }
  }

  function watchRailState() {

    var w = slides[0].offsetWidth;
    var l = rail.scrollLeft + (w / 2);
    index = Math.floor(l / w);

    setslide(index);
    navstate(index);

    setTimeout(function () {
      requestAnimationFrame(watchRailState);
    }, 250);
  }

  function navstate(index) {
    navs.forEach(function (nav) {
      nav.removeAttribute('disabled');
    });

    if (index === 0) {
      navs[0].setAttribute('disabled', true)
    }

    if (index === (slides.length - 1)) {
      navs[1].setAttribute('disabled', true)
    }
  }

  navs.forEach(function (nav) {
    nav.onclick = function (e) {

      e.preventDefault();
      if (this.getAttribute('disabled')) {
        return;
      }

      var w = slides[0].offsetWidth;


      if (this.getAttribute('data-direction') === 'prev') {
        rail.scrollLeft = w * (index - 1);
      }

      else {
        rail.scrollLeft = w * (index + 1);
      }


    }

  });

  cells.forEach(function (cell) {
    cell.onclick = function () {
      this.classList.toggle('sf-gallery__slide-cell--away')
    }
  })

  watchRailState();

})();