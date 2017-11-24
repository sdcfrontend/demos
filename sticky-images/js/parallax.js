NodeList.prototype.forEach = Array.prototype.forEach;

function framePercentageValue(frameDimensions, defaults, max, min) {

  var value = '';
  switch (defaults.start) {

    case 'top':
      value = max - (frameDimensions.bottom/frameDimensions.height)*max;

      if (defaults.direction == 1) {
        value = (frameDimensions.bottom/frameDimensions.height)*max;
      }
      break;

    case 'bottom':
      value = max*((frameDimensions.bottom - window.innerHeight) / window.innerHeight);

      if (defaults.direction == 1) {
        value = (max*((window.innerHeight - frameDimensions.top) / window.innerHeight))
      }
      break;

  }

  if (value > max) {
    value = max;
  }

  if (value < min) {
    value = min;
  }

  return value;

}

function setProperties(subject, frameDimensions, property, defaults) {

  switch (property) {
    case 'fade':
    var max = 1*defaults.multiplier;
    defaults.direction = defaults.direction*-1
    var value = framePercentageValue(frameDimensions, defaults, max);

    if (value < max) {
      subject.style.opacity = value;
    } else {
      subject.style.opacity = max;
      markPassedSubject(subject);
    }
    break;

    case 'filter':
    subject.style.filter = '';

    defaults.actions.forEach(function(action) {

      switch (action) {
        case 'blur':
        var max = 10*defaults.multiplier;
        var value = framePercentageValue(frameDimensions, defaults, max);

        if (value < max) {
          subject.style.filter += 'blur(' + value + 'px)';
        } else {
          subject.style.filter += 'blur(' + max + 'px)';
          markPassedSubject(subject);
        }
        subject.style.filter += 'blur(' + value + 'px)';
        break;

        case 'saturate':
        var min = 0;
        var max = 100*defaults.multiplier;
        var value = framePercentageValue(frameDimensions, defaults, max, min);

        if (value < max) {
          subject.style.filter += 'saturate(' + value + '%)';
        } else {
          subject.style.filter += 'saturate(' + max + '%)';
          markPassedSubject(subject);
        }
        break;

        case 'hue-rotate':
        var max = 360*defaults.multiplier;
        var value = framePercentageValue(frameDimensions, defaults, max);

        if (value < max) {
          subject.style.filter += 'hue-rotate(' + value + 'deg)';
        } else {
          subject.style.filter += 'hue-rotate(' + max + 'deg)';
          markPassedSubject(subject);
        }
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
        var max = 360*defaults.multiplier;
        var value = framePercentageValue(frameDimensions, defaults, max);

        subject.style.transform += 'rotate(' + value + 'deg)';
        break;

        case 'scale':
        var max = 1*defaults.multiplier;
        var value = 1 + framePercentageValue(frameDimensions, defaults, max);

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

function adjustSubjectProperties(parallaxFrame) {

  var height = window.innerHeight;
  var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();

  if (parallaxFrameDimensions.top < height) {
    var parallaxSubjects = parallaxFrame.querySelectorAll('[data-parallax-role="subject"]');

    parallaxSubjects.forEach(function(parallaxSubject) {

      var defaults = {
        properties: ['transform'],
        actions: ['translateY'],
        multiplier: 1,
        direction: -1,
        start: "bottom"
      }

      if (!parallaxSubject.hasAttribute('passed')) {
        if (parallaxSubject.getAttribute('data-properties') != null) {
          defaults.properties = parallaxSubject.getAttribute('data-properties').split(',');
        }
        if (parallaxSubject.getAttribute('data-actions') != null) {
          defaults.actions = parallaxSubject.getAttribute('data-actions').split(',');
        }
        if (parallaxSubject.getAttribute('data-multiplier') != null) {
          defaults.multiplier = parallaxSubject.getAttribute('data-multiplier');
        }
        if (parallaxSubject.getAttribute('data-direction') != null) {
          var direction = parallaxSubject.getAttribute('data-direction');
          if (direction = "backwards") {
            defaults.direction = 1;
          }
        }
        if (parallaxSubject.getAttribute('data-start') != null) {
          defaults.start = parallaxSubject.getAttribute('data-start');
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
    var parallaxFrames = document.querySelectorAll('[data-parallax-role="frame"]');

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
