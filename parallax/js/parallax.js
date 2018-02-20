NodeList.prototype.forEach = Array.prototype.forEach;

function framePercentageValue(frameDimensions, startFromBottom) {

  var value = '';

  if (startFromBottom) {
    value = 100 - (frameDimensions.top/frameDimensions.height)*100;
  } else {
    value = 100 - (frameDimensions.bottom/frameDimensions.height)*100;
  }

  return value;

}

function triggerParallax() {

  function findScrollPosition() {

    var height = window.innerHeight;
    var parallaxFrames = document.querySelectorAll('[data-parallax-role="frame"]');

    parallaxFrames.forEach(function(parallaxFrame) {

      var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();

      if (parallaxFrameDimensions.top < height && (parallaxFrameDimensions.top + parallaxFrameDimensions.height) > 0) {

        var parallaxSubjects = parallaxFrame.querySelectorAll('[data-parallax-role="subject"]');

        parallaxSubjects.forEach(function(parallaxSubject) {

          if (parallaxSubject.dataset.parallaxStart == "bottom") {
            parallaxSubject.style.setProperty('--frameScrollDepth', framePercentageValue(parallaxFrameDimensions, true));
            parallaxSubject.style.setProperty('--parallaxMultiplier', parallaxSubject.getAttribute('data-parallax-multiplier'));
          } else {
            parallaxSubject.style.setProperty('--frameScrollDepth', framePercentageValue(parallaxFrameDimensions, false));
            parallaxSubject.style.setProperty('--parallaxMultiplier', parallaxSubject.getAttribute('data-parallax-multiplier'));
          }

        });

      }

    });

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

triggerParallax();
