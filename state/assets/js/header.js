(function () {
  var header = document.querySelector('[data-role="header"]')
  var video = document.querySelector('[data-role="header-video"]');

  header.setAttribute('data-playing', 'loading');

  ['animationstart', 'MSAnimationStart'].forEach(function (evname) {
    document.addEventListener(evname, function (e) {
      if (e.animationName === 'video-listener') {
        console.log('video ready');
        videoplay();
      }
    })
  });

  function videoplay() {

    function canplay() {
      header.setAttribute('data-playing', 'playing');
    }

    video.oncanplay = canplay;

    if (window.matchMedia("(min-width: " + (video.dataset.threshold) + ")").matches) {
      video.src = video.querySelector('source + source').src;
    }

  }

})()