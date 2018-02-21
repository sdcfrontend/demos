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

function setProperties() {

  var parallaxFrames = document.querySelectorAll('[data-parallax-role="frame"]');

  parallaxFrames.forEach(function(parallaxFrame) {

    var parallaxSubjects = parallaxFrame.querySelectorAll('[data-parallax-role="subject"]');

    parallaxSubjects.forEach(function(parallaxSubject) {

      var property = 'translateY';
      var multiplier = 1

      if (parallaxSubject.getAttribute('data-parallax-multiplier') != null) {
        multiplier = parallaxSubject.getAttribute('data-parallax-multiplier');
      }

      if (parallaxSubject.getAttribute('data-parallax-property') != null) {
        property = parallaxSubject.getAttribute('data-parallax-property');
      }

      parallaxSubject.classList.add('parallax-subject--' + property);
      parallaxSubject.style.setProperty('--parallaxMultiplier', multiplier);

    });

  });

}

function setPropertyValue(parallaxSubject, value) {

  var property = 'translateY';
  var multiplier = 1

  if (parallaxSubject.getAttribute('data-parallax-multiplier') != null) {
    multiplier = parallaxSubject.getAttribute('data-parallax-multiplier');
  }

  if (parallaxSubject.getAttribute('data-parallax-property') != null) {
    property = parallaxSubject.getAttribute('data-parallax-property');
  }

  switch (property) {

    case "translateY":
      parallaxSubject.style.transform = 'translate3d(0,' + value * multiplier + 'px,0)';
      break;

    case "translateX":
      parallaxSubject.style.transform = 'translate3d(' + value * multiplier + 'px,0,0)';
      break;

    case "rotate":
      parallaxSubject.style.transform = 'rotate(' + value * multiplier + 'deg)';
      break;

    case "blur":
      parallaxSubject.style.filter = 'blur(' + value * multiplier + 'px)';
      break;

    case "blur-reverse":
      parallaxSubject.style.filter = 'blur(' + value * multiplier * -1 + 'px)';
      break;

    case "saturate":
      if (value < 0) {
        value = 0
      }
      parallaxSubject.style.filter = 'saturate(' + value * multiplier + '%)';
      break;

    case "fade":
      parallaxSubject.style.opacity = (value * (multiplier/100));
      break;

  }

}

function triggerParallax() {

  function findScrollPosition() {

    var parallaxFrames = document.querySelectorAll('[data-parallax-role="frame"]');
    var height = window.innerHeight;

    parallaxFrames.forEach(function(parallaxFrame) {

      var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();

      if (parallaxFrameDimensions.top < height && (parallaxFrameDimensions.top + parallaxFrameDimensions.height) > 0) {

        var parallaxSubjects = parallaxFrame.querySelectorAll('[data-parallax-role="subject"]');

        if (window.CSS.supports('--var', 0)) {
          parallaxSubjects.forEach(function(parallaxSubject) {

            if (parallaxSubject.dataset.parallaxStart == "bottom") {
              parallaxSubject.style.setProperty('--frameScrollDepth', framePercentageValue(parallaxFrameDimensions, true));
            } else {
              parallaxSubject.style.setProperty('--frameScrollDepth', framePercentageValue(parallaxFrameDimensions, false));
            }

          });
        } else {
          parallaxSubjects.forEach(function(parallaxSubject) {

            if (parallaxSubject.dataset.parallaxStart == "bottom") {
              setPropertyValue(parallaxSubject, framePercentageValue(parallaxFrameDimensions, true));
            } else {
              setPropertyValue(parallaxSubject, framePercentageValue(parallaxFrameDimensions, false));
            }

          });
        }

      }

    });

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

if (window.CSS.supports('--var', 0)) {
  setProperties();
}

triggerParallax();
