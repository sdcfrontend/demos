(function () {
  var data = [
    {
      "dem": -35,
      "rep": 10
    },
    {
      "dem": -22,
      "rep": 3
    },
    {
      "dem": -60,
      "rep": 32
    }
  ]

  var dems = document.querySelectorAll('.sf-venn__circle--dem');
  var reps = document.querySelectorAll('.sf-venn__circle--rep');
  var links = document.querySelectorAll('.sf-venn__nav a');

  function render(da) {
    dems.forEach(function (dem) {
      dem.style.cssText = "transform: translateX(" + da.dem + "%);";
    });

    reps.forEach(function (rep) {
      rep.style.cssText = "transform: translateX(" + da.rep + "%)"
    });
  }

  function setRenderTimeout(i) {
    setTimeout(function(){
        render(data[i]);
        links.forEach(function (item) {
          item.removeAttribute('aria-current');
        })
        links[i].setAttribute('aria-current', true)
    },i*666);
  }

  function cycleCharts() {
    for (var i = 0; i < data.length; i++) {
      setRenderTimeout(i);
    }
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

  var venn = document.querySelector('[data-role="sf-venn"]');
  

  venn.start = function () {
    venn.init = true;
    cycleCharts();
  }
})()