(function () {

  var grid = document.querySelector('.sff-grid');

  var items = grid.querySelectorAll('.sff-grid__item');

  items.forEach(function (item, index) {

    item.gridindex = (index + 1) * 10;
    item.style.order = item.gridindex;

    item.onclick = function (e) {
      e.preventDefault();
      items.forEach(function (currentitem) {
        currentitem.classList.remove('sff-grid__item--active');
      });

      this.classList.add('sff-grid__item--active');

      if (e.clientX) {
        setTimeout(function () {
          location.hash = item.id;
        }, 50)
      }
    }

  })

  function tick() {

    var count = window.getComputedStyle(grid, null).getPropertyValue('column-count').replace(/"/g, '');
    count = parseInt(count, 10);
    var active = grid.querySelector('.sff-grid__item--active');

    if (active) {
      var contentindex = ((Math.ceil(active.gridindex / count)) * count) + 1;
      grid.style.order = contentindex;
    }

    requestAnimationFrame(tick);
  }

  tick();


})();