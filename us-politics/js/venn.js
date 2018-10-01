(function () {
  var data = [
    {
      "dem": -15,
      "rep": 20
    },
    {
      "dem": -8,
      "rep": 8
    },
    {
      "dem": -60,
      "rep": 25
    }
  ]

  var dem = document.querySelector('.sf-venn__circle--dem');
  var rep = document.querySelector('.sf-venn__circle--rep');
  var links = document.querySelectorAll('.sf-venn__nav a');

  function render(da) {
    dems[index].style.cssText = "transform: translateX(" + da.dem + "%);"
    reps[index].style.cssText = "transform: translateX(" + da.rep + "%)"
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