NodeList.prototype.forEach = Array.prototype.forEach;

function adjustSubjectPosition(parallaxWindow) {

  var height = window.innerHeight;
  var parallexWindowDimensions = parallaxWindow.getBoundingClientRect();

  if (parallexWindowDimensions.top < height) {
    var parallaxSubjects = parallaxWindow.querySelectorAll('[data-role="parallax-subject"]');

    parallaxSubjects.forEach(function(parallaxSubject) {
      var multiplier = parallaxSubject.dataset.multiplier;

      parallaxSubject.style.cssText = 'transform: translateY(' + (-parallexWindowDimensions.top*multiplier) + 'px)';

    });
  }

}

function triggerParallax() {

  function findScrollPosition() {

    var height = window.innerHeight;
    var parallaxWindows = document.querySelectorAll('[data-role="parallax-window"]');

    parallaxWindows.forEach(function(parallaxWindow) {

      var parallaxWindowDimensions = parallaxWindow.getBoundingClientRect();

      if (parallaxWindowDimensions.top < height && (parallaxWindowDimensions.top + parallaxWindowDimensions.height) > 0 ) {
        adjustSubjectPosition(parallaxWindow);
      }

    });

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

triggerParallax();
