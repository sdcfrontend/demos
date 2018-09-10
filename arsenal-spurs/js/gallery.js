(function () {

  var index = 0;
  var slides = document.querySelectorAll('.sf-gallery__slide');
  var navs = document.querySelectorAll('.sf-gallery__nav-item');
  var caption = document.querySelector('.sf-gallery__nav-caption');
  var cells = document.querySelectorAll('.sf-gallery__slide-cell');


  function setslide(index) {

    slides.forEach(function (slide) {
      slide.removeAttribute('data-current');
    })

    if (slides[index]) {
      slides[index].setAttribute('data-current', true);
      caption.textContent = slides[index].getAttribute('data-caption');

    }
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
      console.log(this.getAttribute('data-direction'));
      if (this.getAttribute('data-direction') === 'prev') {
        index--;
        if (index < 0) {
          index = (slides.length - 1)
        }
      }

      else {
        index++;
        if (index > slides.length - 1) {
          index = 0;
        }
      }

      setslide(index);
      navstate(index);
    }

  });

  cells.forEach(function (cell) {
    cell.onclick = function () {
      this.classList.toggle('sf-gallery__slide-cell--away')
    }
  })

})();