(function () {
  var slides = document.querySelectorAll('.carousel__slide');
  var timeline = document.querySelector('.carousel__timeline');
  var nav = document.querySelector('.carousel__years');
  var navitems = document.querySelectorAll('.carousel__years a');
  var carouselnav = document.querySelectorAll('.carousel__nav');

  var current = 0;
  var prev = slides.length - 1;

  function goto(index, prev) {
    slides[prev].classList.remove('carousel__slide--visible');
    slides[index].classList.add('carousel__slide--visible');
    navitems.forEach(function (item) {
      item.classList.remove('carousel__years--on');
    })
    navitems[index].classList.add('carousel__years--on');
    timeline.scrollLeft = index * 54 - ((window.innerWidth / 2) - 54 / 2);

    nav.style.setProperty('--needle', index);
  }

  carouselnav.forEach(function (item) {
    item.onclick = function (e) {
      e.preventDefault();

      prev = current;

      if (this.classList.contains('carousel__nav--prev')) {
        current--
      }

      else {
        current++;
      }

      if (current === slides.length) {
        current = 0;
        prev = slides.length - 1
      }

      if (current === -1) {
        current = slides.length - 1;
      }

      goto(current, prev)

    }
  })

  document.querySelectorAll('.carousel__nav').onclick = function (e) {

    e.preventDefault();

    prev = current;
    current++;

    if (current === slides.length) {
      current = 0;
      prev = slides.length - 1
    }

    goto(current, prev)
  }

  navitems.forEach(function (item, index) {
    item.onclick = function (e) {
      e.preventDefault();
      prev = current;
      current = index;

      if (current === slides.length) {
        current = 0;
        prev = slides.length - 1
      }

      goto(current, prev)
    }
  })

})()