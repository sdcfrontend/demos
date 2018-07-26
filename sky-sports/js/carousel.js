(function () {
  var current = 0;
  var root = document.querySelector('.sff-carousel');
  var items = document.querySelectorAll('.sff-carousel__item');
  var scroll = document.querySelector('.sff-carousel__scroll');
  var navwrap = document.querySelector('.sff-carousel__nav-items');
  var navrail = document.querySelector('.sff-carousel__nav-rail');
  var navitems = navrail.querySelectorAll('li');
  var nav = document.querySelectorAll('.sff-carousel__nav-link');

  nav.forEach(function (item) {
    item.onclick = function (e) {
      e.preventDefault();

      if (this.dataset.type === 'next') {
        gotoslide(current + 1);
      }
      else {
        gotoslide(current - 1);
      }
    }
  });

  function gotoslide(index) {
    if (index === current) {
      return;
    }

    scroll.scrollLeft = items[0].offsetWidth * (index)
  }

  function setstate(index) {
    if (index === current) {
      return;
    }

    current = index;
    root.current = current;

    centernav(current);
    disablenav(current);
    focusitem(current);
  }

  function centernav(index) {

    navitems.forEach(function (item) {
      item.classList.remove('sff-carousel__nav-item--on');
    });

    navitems[index].classList.add('sff-carousel__nav-item--on');

    var width = navrail.offsetWidth;
    var wrap = navwrap.offetWidth;
    var left = ((index - 1) * (100 / 3));

    left = left * -1;

    navrail.style.cssText = "transform: translateX(" + left + "%)";

  }

  function disablenav(index) {

    nav.forEach(function (item) {
      item.classList.remove('sff-carousel__nav-link--disabled');
    })

    if (index === 0) {
      nav[0].classList.add('sff-carousel__nav-link--disabled');
    }

    if (index === (items.length - 1)) {
      nav[1].classList.add('sff-carousel__nav-link--disabled');
    }
  }

  function focusitem(index) {
    items.forEach(function (item) {
      item.classList.remove('sff-carousel__item--active')
    })

    items[index].classList.add('sff-carousel__item--active');
  }

  function tick() {
    var index = Math.round(scroll.scrollLeft / scroll.offsetWidth);
    setstate(index);
    requestAnimationFrame(tick);
  }

  tick();

  window.addEventListener('resize', function () {
    gotoslide(current);
  })


})()