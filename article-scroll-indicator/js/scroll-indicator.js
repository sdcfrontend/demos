function framePercentageValue(frameDimensions) {

  var value = '';

  value = 100 - (frameDimensions.bottom/frameDimensions.height)*100;


  if (value > 100) {
    value = 100;
  }

  if (value < 0) {
    value = 0;
  }

  return value;

}

function setProperties(subject, frameDimensions) {

  subject.style.transform = '';
  subject.style.transform += 'translateX(' + framePercentageValue(frameDimensions) + '%)';

}

function adjustSubjectProperties(parallaxFrame, parallaxSubject) {

  var height = window.innerHeight;
  var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();

  if (parallaxFrameDimensions.top < height) {
    setProperties(parallaxSubject, parallaxFrameDimensions);
  }

}

function triggerIndicator(progressIndicator) {

  function findScrollPosition() {

    var height = window.innerHeight;
    var parallaxFrame = document.querySelector('[data-role="scroll-frame"]');
    var parallaxSubject = document.querySelector('[data-role="scroll-bar"]');

    var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();

    adjustSubjectProperties(parallaxFrame, parallaxSubject);

    if (parallaxFrameDimensions.height < (parallaxFrameDimensions.top + parallaxFrameDimensions.height)) {
      progressIndicator.style.height = '0';
      progressIndicator.style.overflow = 'hidden';
    } else {
      progressIndicator.style.height = '5px';
      progressIndicator.style.overflow = 'visible';
    }

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

function addScrollIndicator() {

  var article = document.querySelector('.article');
  article.setAttribute('data-role', 'scroll-frame');

  var progressIndicator = document.querySelector('.progress-indicator');
  var progressBar = document.querySelector('[data-role="scroll-bar"]');

  if (!progressIndicator) {
    progressIndicator = document.createElement('div');
    progressIndicator.classList.add('progress-indicator');

    progressBar = document.createElement('div');
    progressBar.classList.add('progress-indicator__bar');
    progressBar.setAttribute('data-role', 'scroll-bar');

    progressIndicator.appendChild(progressBar);
    document.body.appendChild(progressIndicator);
  }

  progressIndicator.style.cssText = "position: fixed; top: 0; width: 100%; height: 5px; background-color: #002672; transform: none; transition: height 0.33s ease-in-out";
  // progressIndicator.style.backgroundColor = color from data attr

  progressBar.style.cssText = "position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background-color: #EA021A; will-change: transform;";
  // progressBar.style.backgroundColor = color from data attr


  triggerIndicator(progressIndicator);

}

addScrollIndicator();
