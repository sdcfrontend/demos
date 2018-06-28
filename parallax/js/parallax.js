NodeList.prototype.forEach = Array.prototype.forEach;

// Calculates scroll depth percentage through a given frame
function framePercentageValue(frameDimensions, startFromBottom) {

  var value = '';

  // Start applying adjusted css values from when a frame enters the window at the bottom or from when it begins to leave the window at the top
  if (startFromBottom) {
    // Value will be at 100% when top of frame reaches top of window
    value = 100 - (frameDimensions.top/frameDimensions.height)*100;
  } else {
    // Value will be at 100% when bottom of frame reaches bottom of window
    value = 100 - ((frameDimensions.bottom/2)/(frameDimensions.height))*100;
  }

  return value;

}

// Sets properties to be used in scroll-based calculations
function setProperties() {

  var parallaxFrames = document.querySelectorAll('[data-parallax-role="frame"]');

  parallaxFrames.forEach(function(parallaxFrame) {

    var parallaxSubjects = parallaxFrame.querySelectorAll('[data-parallax-role="subject"]');

      parallaxSubjects.forEach(function(parallaxSubject) {

        var property = 'translateY';
        var multiplier = 1

        // Find the chosen property to ajust from the subject's data attribute, or set that attribute to a default value if not found
        if (parallaxSubject.getAttribute('data-parallax-property') != null) {
          property = parallaxSubject.getAttribute('data-parallax-property');
          parallaxSubject.setAttribute('data-parallax-property', property);
        }

        // Find the chosen multiplier to apply from the subject's data attribute, or set that attribute to a default value if not found
        if (parallaxSubject.getAttribute('data-parallax-multiplier') != null) {
          multiplier = parallaxSubject.getAttribute('data-parallax-multiplier');
        }

        // Set the css class related to the specified property. Used by css calculate adjustments when css variables are supported and the will-change property when js calculations are required
        parallaxSubject.classList.add('parallax-subject--' + property);

        // Set multiplier to be used in css calculations, or as a data attribute to be used in js calculations when css variables are not supported
        if (window.CSS.supports('--var', 0)) {
          parallaxSubject.style.setProperty('--parallaxMultiplier', multiplier);
        } else {
          parallaxSubject.setAttribute('data-parallax-multiplier', multiplier);
        }

      });

  });

}

// Function used as a fallback to calculate and set css adjustments via js when css variables are not supported
function setPropertyValue(parallaxSubject, value) {

  var property = parallaxSubject.getAttribute('data-parallax-property');
  var multiplier = parallaxSubject.getAttribute('data-parallax-multiplier');

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

// Tracks page scrolling and applies adjusted css values accordingly
function triggerParallax() {

  function findScrollPosition() {

    var parallaxFrames = document.querySelectorAll('[data-parallax-role="frame"]');
    var height = window.innerHeight;

    parallaxFrames.forEach(function(parallaxFrame) {

      var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();

      // Only adjust values inside frames that are currently in view
      if (parallaxFrameDimensions.top < height && (parallaxFrameDimensions.top + parallaxFrameDimensions.height) > 0) {

        var parallaxSubjects = parallaxFrame.querySelectorAll('[data-parallax-role="subject"]');

        if (window.CSS.supports('--var', 0)) {
          // Write scroll depth percentage value to an inline css variable if css variables are supported
          parallaxSubjects.forEach(function(parallaxSubject) {

            // A parallaxStart value of "bottom" indictates it must begin adjustments as soon as it enters the bottom of the window
            if (parallaxSubject.dataset.parallaxStart == "bottom") {
              parallaxSubject.style.setProperty('--frameScrollDepth', framePercentageValue(parallaxFrameDimensions, true));
            } else {
              parallaxSubject.style.setProperty('--frameScrollDepth', framePercentageValue(parallaxFrameDimensions, false));
            }

          });
        } else {
          // Write specific css to each subject based on the scroll depth percentage value if css variables are not supported
          parallaxSubjects.forEach(function(parallaxSubject) {

            // A parallaxStart value of "bottom" indictates it must begin adjustments as soon as it enters the bottom of the window
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

setProperties();

triggerParallax();
