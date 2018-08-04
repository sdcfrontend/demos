
(function () {

  var videos = document.querySelectorAll('video');
  var ghosts = document.querySelectorAll('.sff-moment__ghost');

  ghosts.forEach(function (item) {
    item.videos = item.parentNode.querySelectorAll('video');
  });


  ['webkitAnimationStart', 'animationstart', 'MSAnimationStart'].forEach(function (ev) {
    document.addEventListener(ev, function (e) {
      if (!e.target.src) {
        e.target.src = e.target.getAttribute('data-src');
      }
    });

  })


  videos.forEach(function (video) {

    video.setAttribute('data-load-video', true);
    video.start = function () {
      this.play()
    }

    video.onclick = function () {
      var isPlaying = video.currentTime > 0 && !video.paused && !video.ended
        && video.readyState > 2;
      if (isPlaying) {
        video.pause();
        video.forcepause = true;
      }

      else {
        video.play();
        video.forcepause = true;
      }
    }
  })

  function isinview(dim) {
    var inview = false;
    if (dim < window.innerHeight * 1.5 && dim > ((window.innerHeight / 2)) * -1) {
      inview = true;
    }

    return inview;
  }

  function videotick() {

    ghosts.forEach(function (item) {

      var dims = item.getBoundingClientRect();
      var top = dims.top;

      if (isinview(top)) {
        item.videos.forEach(function (video) {
          if (!video.forcepause) {
            video.play();
            forcepause = false;
          }
        })
      }

      else {
        item.videos.forEach(function (video) {
          var isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > 2;

          if (isPlaying) {
            video.pause();
            video.forcepause = false;
          }

        })
      }

      top = ((100 / item.offsetHeight) * top) - 100;
      top = Math.min(top, 0);
      top = Math.max(top, -100);

      item.parentNode.style.setProperty('--progress', (Math.round(top) * -1) + "%");
    });

    requestAnimationFrame(videotick)
  }

  videotick()
})();