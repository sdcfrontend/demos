NodeList.prototype.forEach = Array.prototype.forEach;

function adjustSubjectPosition(parallaxWindow) {

  var height = window.innerHeight;
  var parallexWindowDimensions = parallaxWindow.getBoundingClientRect();

  if (parallexWindowDimensions.top < height) {
    var parallaxSubject = parallaxWindow.querySelector('[data-role="parallax-subject"]');

    parallaxSubject.style.cssText = 'transform: translateY(' + (-parallexWindowDimensions.top*0.25) + 'px)';
  }

}

function triggerParallax() {

  function findScrollPosition() {

    var parallaxWindows = document.querySelectorAll('[data-role="parallax-window"]');

    parallaxWindows.forEach(function(parallaxWindow) {

      var dimensions = parallaxWindow.getBoundingClientRect();

      adjustSubjectPosition(parallaxWindow);

    });

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

triggerParallax();
