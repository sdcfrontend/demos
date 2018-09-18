(function () {

  var graphs = document.querySelectorAll('[data-role="sf-line-graph"]');
  graphs.forEach(function (item) {
    item.start = function () {
      item.init = true;
      item.style.opacity = 1;
      item.querySelectorAll('animate').forEach(function (anim) {
        anim.beginElement();
      })
    }
  })
})()