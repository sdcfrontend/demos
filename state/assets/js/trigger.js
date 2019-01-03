(function () {
  var observer = new IntersectionObserver(scan, { rootMargin: '18px', threshold: [0, 0.25, 0.5, 0.75, 1] });

  setTimeout(function () {
    document.querySelectorAll('[data-trigger]').forEach(function (item) {
      observer.observe(item);
    });
  }, 100);

  function scan(entries, observer) {

    entries.forEach(function (item) {
      var ratio = 0.25;

      if (item.target.getAttribute('data-trigger').length) {
        ratio = parseInt(item.target.getAttribute('data-trigger'), 10) / 100;
      }

      if (item.isIntersecting || item.intersectionRatio > 0) {

        if (item.target.hasAttribute('data-trigger') && item.intersectionRatio >= ratio) {

          // if we want to trigger a function
          if (item.target.start && !item.target.init) {
            // observer.unobserve(item.target);
            item.target.start();

            // do the line below in the attached function (stops repeated invocations)
            // item.target.init = true;
          }

          //if we want to play/pause a video
          if (item.target.playpause) {
            if (item.intersectionRatio > 0.25) {
              item.target.playpause(item.target.querySelector('video'), true)
            }

            else {
              item.target.playpause(item.target.querySelector('video'), false)
            }
          }

          if (item.target.hasAttribute('data-animate-in-view')) {
            observer.unobserve(item.target);
            item.target.removeAttribute('data-animate-in-view');
          }
        }
      }
    })
  }


})();