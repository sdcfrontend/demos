(function () {

  document.querySelectorAll('[data-role="sf-line-graph"]').forEach(function (item) {

    item.start = function () {
      item.removeAttribute('data-role');
      item.init = true;
      item.querySelectorAll('animate').forEach(function (anim) {
        anim.beginElement();
      })
    }
  });

  document.querySelectorAll('[data-role="gunsales-gfx"]').forEach(function (item) {
    item.start = function () {
      item.init = true;
      this.removeAttribute('data-role');
      this.querySelectorAll('animate').forEach(function (animate) {
        animate.beginElement();
      })
    }
  })


})()