(function () {

  var items = document.querySelectorAll('[data-trigger]');

  function tick() {

    for (var i = -1; ++i < items.length;) {
      var target = items[i];
      var dims;
      if (!target.rendered) {
        if (target.offsetWidth) {
          dims = target.getBoundingClientRect();
          if (dims.top > 0 && (window.innerHeight - dims.top > 0)) {
            target.removeAttribute('data-animate-in-view');
            target.rendered = true;
          }
        }
      }
    }

    setTimeout(function () {
      requestAnimationFrame(tick);
    }, 50)
  }

  tick();

  //   var observer = new IntersectionObserver(scan, { rootMargin: '18px', threshold: [0, 0.25, 0.5, 0.75, 1] });

  //   setTimeout(function () {
  //     document.querySelectorAll('[data-trigger]').forEach(function (item) {
  //       observer.observe(item);
  //     });
  //   }, 100);


  //   function scan(entries, observer) {

  //     entries.forEach(function (item) {
  //       var ratio = 0.25;
  //       var trigger = item.target.getAttribute('data-trigger');
  //       if (trigger && trigger.length) {
  //         ratio = parseInt(trigger, 10) / 100;
  //       }

  //       if (item.isIntersecting || item.intersectionRatio > 0) {

  //         if (item.target.hasAttribute('data-trigger') && item.intersectionRatio >= ratio) {
  //           if (item.target.hasAttribute('data-animate-in-view')) {
  //             observer.unobserve(item.target);
  //             item.target.removeAttribute('data-animate-in-view');
  //           }
  //         }
  //       }
  //     })
  //   }


})();