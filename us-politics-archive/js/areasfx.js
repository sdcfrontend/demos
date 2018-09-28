(function () {
  var data = [
    {
      "dem": [9, 22, 28, 48, 59, 100, 113, 129, 138, 145, 142, 129, 109, 96, 72, 48, 26, 12, 8, 2],
      "rep": [0, 6, 12, 24, 32, 45, 60, 75, 91, 112, 123, 130, 137, 134, 127, 106, 95, 80, 60, 30]
    },
    {
      "dem": [27, 49, 66, 100, 120, 130, 140, 141, 136, 131, 131, 109, 69, 52, 32, 23, 14, 9, 5, 2],
      "rep": [2, 9, 18, 34, 35, 57, 77, 112, 131, 149, 147, 140, 124, 111, 100, 81, 62, 44, 30, 18]
    },
    {
      "dem": [120, 128, 135, 147, 142, 130, 110, 87, 80, 72, 67, 49, 34, 22, 13, 9, 8, 6, 2, 0],
      "rep": [2, 4, 15, 28, 32, 30, 47, 65, 80, 92, 100, 103, 105, 103, 108, 120, 114, 97, 72, 38]
    }
  ]

  var dems = document.querySelectorAll('.sf-areasfx__bars--dem .sf-areasfx__bar');
  var reps = document.querySelectorAll('.sf-areasfx__bars--rep .sf-areasfx__bar');
  var links = document.querySelectorAll('.sf-areasfx__nav a');

  function render(da) {
    da.dem.forEach(function (item, index) {
      var y = (100 / 150) * item;

      dems[index].style.cssText = "transition-delay:" + (Math.floor(Math.random() * 55)) + "ms; transform: translateY(-" + y + "%)"
    });

    da.rep.forEach(function (item, index) {
      var y = (100 / 150) * item;
      reps[index].style.cssText = "transition-delay:" + (Math.floor(Math.random() * 55)) + "ms;transform: translateY(-" + y + "%)"
    })
  }

  links.forEach(function (link, index) {
    link.onclick = function (e) {
      links.forEach(function (item) {
        item.removeAttribute('aria-current');
      })
      link.setAttribute('aria-current', true);
      e.preventDefault();
      render(data[index]);
    }
  });

  render(data[0]);
})()