NodeList.prototype.forEach = Array.prototype.forEach;

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

function triggerParallax(progressIndicator) {

  function findScrollPosition() {

    var height = window.innerHeight;
    var parallaxFrame = document.querySelector('[data-parallax-role="frame"]');
    var parallaxSubject = document.querySelector('[data-parallax-role="subject"]');

    var parallaxFrameDimensions = parallaxFrame.getBoundingClientRect();
    adjustSubjectProperties(parallaxFrame, parallaxSubject);

    if (parallaxFrameDimensions.height < (parallaxFrameDimensions.top + parallaxFrameDimensions.height)) {
      progressIndicator.style.height = '0';
    } else {
      progressIndicator.style.height = '5px';
    }

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

function addScrollIndicator() {

  var article = document.querySelector('.article');
  article.setAttribute('data-parallax-role', 'frame');

  var progressIndicator = document.createElement('div');
  progressIndicator.classList.add('progress-indicator');
  progressIndicator.style.cssText = "position: fixed; top: 0; width: 100%; height: 5px; background-color: #eee; transform: none; transition: height 0.33s ease-in-out";

  var progressBar = document.createElement('div');
  progressBar.classList.add('progress-indicator__bar');
  progressBar.setAttribute('data-parallax-role', 'subject');
  progressBar.setAttribute('data-actions', 'translateX');
  progressBar.setAttribute('data-start', 'top');
  progressBar.style.cssText = "position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background-color: #0072c9; will-change: transform;";

  progressIndicator.appendChild(progressBar);
  document.body.appendChild(progressIndicator);

  triggerParallax(progressIndicator);

}

addScrollIndicator();
