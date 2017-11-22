NodeList.prototype.forEach = Array.prototype.forEach;

function setProperties(subject, frameDimensions, property, defaults) {

  switch (property) {
    case 'fade':
    var value = defaults.direction*((frameDimensions.top/20)*defaults.multiplier);
    var max = 1;

    if (value < max) {
      subject.style.cssText = 'opacity: ' + value;
    } else {
      subject.style.cssText = 'opacity: ' + max;
      markPassedSubject(subject);
    }
    break;

    case 'filter':
    subject.style.filter = '';

    defaults.actions.forEach(function(action) {

      switch (action) {
        case 'blur':
        var value = ((frameDimensions.top*defaults.multiplier)-(window.innerHeight/100));

        if (defaults.direction == 1) {
          value = ((window.innerHeight/100)+(frameDimensions.top*defaults.multiplier));
        }
        console.log(value, (frameDimensions.top*defaults.multiplier)/10)

        subject.style.filter += 'blur(' + value + 'px)';
        break;
      }
    });

    break;

    case 'transform':
    subject.style.transform = '';

    defaults.actions.forEach(function(action) {

      switch (action) {
        case 'translateY':
        var value = defaults.direction*(frameDimensions.top*defaults.multiplier);

        subject.style.transform += 'translateY(' + value + 'px)';
        break;

        case 'translateX':
        var value = defaults.direction*(frameDimensions.top*defaults.multiplier);

        subject.style.transform += 'translateX(' + value + 'px)';
        break;

        case 'rotate':
        var value = defaults.direction*(frameDimensions.top*defaults.multiplier);

        subject.style.transform += 'rotate(' + value + 'deg)';
        break;

        case 'scale':
        var value = defaults.direction*((frameDimensions.top/100)*defaults.multiplier);

        subject.style.transform += 'scale(' + value + ')';
        break;
      }
    });
    break;

  }

}

function markPassedSubject(parallaxSubject) {

  if (parallaxSubject.hasAttribute('data-once')) {
    parallaxSubject.setAttribute('passed', '');
  }

}

function markPassedSubjects(parallaxFrame) {

  var parallaxSubjects = parallaxFrame.querySelectorAll('[data-role="parallax-subject"]');

  parallaxSubjects.forEach(function(parallaxSubject) {

    markPassedSubject(parallaxSubject);

  });

}

function adjustSubjectProperties(parallaxFrame) {

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

      if (!parallaxSubject.hasAttribute('passed')) {
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
      }

    });
  }

}

function triggerParallax() {

  function findScrollPosition() {

    var height = window.innerHeight;
    var parallaxFrames = document.querySelectorAll('[data-role="parallax-frame"]');

    parallaxFrames.forEach(function(parallaxFrame) {

      var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();

      if (parallaxFrameDimensions.top < height && (parallaxFrameDimensions.top + parallaxFrameDimensions.height) > 0) {
        adjustSubjectProperties(parallaxFrame);
      }

    });

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

triggerParallax();
