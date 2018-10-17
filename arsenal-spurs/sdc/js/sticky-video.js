(function () {

  ['animationstart', 'MSAnimationStart'].forEach(function (evname) {
    document.addEventListener(evname, function (e) {
      if (e.animationName === 'video-listener') {
        videoplay(e.target);
      }
    })
  });

  document.querySelectorAll('[data-sticky-video]').forEach(function (item) {
    item.setAttribute('data-sticky-video', 'load');
    item.playpause = playpause;
  })

  function videoplay(con) {

    function canplay() {
      image.setAttribute('data-playing', true);
      loader.style.cssText = "display: none";

    }

    var video = con.querySelector('video');
    var image = con.querySelector('img');
    var loader = con.querySelector('[data-loader]');

    video.oncanplay = canplay;

    if (window.matchMedia("(min-width: " + (video.dataset.threshold) + ")").matches) {
      video.src = video.dataset.largeSrc;
    }

    else {
      video.src = video.dataset.smallSrc;
    }

  }

  function playpause(video, play) {
    var isplaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
    var playpromise;
    var promisesupported = ('Promise' in window);

    if (play) {

      if (!promisesupported) {
        video.play()
      }

      else {

        playpromise = video.play();

        if (playpromise !== undefined) {
          playpromise.then(function () {
            video.play();
          })
            .catch(function () {
              video.play();
            });
        }
      }

    }

    else {
      if (isplaying) {
        video.pause();
      }
    }
  }

})()