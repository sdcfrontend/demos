NodeList.prototype.forEach = Array.prototype.forEach;

function setProperties(subject, frameDimensions, property, defaults) {

  switch (property) {
    case 'fade':
    subject.style.cssText = 'opacity: ' + -(frameDimensions.top/50)*defaults.multiplier;
    break;

    case 'transform':
    subject.style.transform = '';

    defaults.actions.forEach(function(action) {

      switch (action) {
        case 'translateY':
        subject.style.transform += 'translateY(' + defaults.direction*(frameDimensions.top*defaults.multiplier) + 'px)';
        break;

        case 'translateX':
        subject.style.transform += 'translateX(' + defaults.direction*(frameDimensions.top*defaults.multiplier) + 'px)';
        break;

        case 'rotate':
        subject.style.transform += 'rotate(' + defaults.direction*(frameDimensions.top*defaults.multiplier) + 'deg)';
        break;

        case 'scale':
        subject.style.transform += 'scale(' + ((frameDimensions.top/100)*defaults.multiplier) + ')';
        break;
      }
    });
    break;

  }

}

function adjustSubjectPosition(parallaxFrame) {

  var defaults = {
    properties: ['transform'],
    actions: ['translateY'],
    multiplier: 0.5,
    direction: -1
  }

  var height = window.innerHeight;
  var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();

  if (parallaxFrameDimensions.top < height) {
    var parallaxSubjects = parallaxFrame.querySelectorAll('[data-role="parallax-subject"]');

    parallaxSubjects.forEach(function(parallaxSubject) {
      if (parallaxSubject.getAttribute('data-multiplier') != null) {
        defaults.multiplier = parallaxSubject.getAttribute('data-multiplier');
      }
      if (parallaxSubject.getAttribute('data-properties') != null) {
        defaults.properties = parallaxSubject.getAttribute('data-properties').split(',');
      }
      if (parallaxSubject.getAttribute('data-actions') != null) {
        defaults.actions = parallaxSubject.getAttribute('data-actions').split(',');
      }
      if (parallaxSubject.getAttribute('data-direction') != null) {
        var direction = parallaxSubject.getAttribute('data-direction');
        if (direction = "backwards") {
          defaults.direction = 1;
        }
      }

      defaults.properties.forEach(function(property) {

        setProperties(parallaxSubject, parallaxFrameDimensions, property, defaults);

      });

    });
  }

}

function triggerParallax() {

  function findScrollPosition() {

    var height = window.innerHeight;
    var parallaxFrames = document.querySelectorAll('[data-role="parallax-frame"]');

    parallaxFrames.forEach(function(parallaxFrame) {

      var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();

      if (parallaxFrameDimensions.top < height && (parallaxFrameDimensions.top + parallaxFrameDimensions.height) > 0 ) {
        adjustSubjectPosition(parallaxFrame);
      }

    });

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

triggerParallax();
