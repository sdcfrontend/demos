NodeList.prototype.forEach = Array.prototype.forEach;

function cleanNumber(number) {
  var cleanDigits = [];
  var dirtyDigits = number.split('');

  dirtyDigits.forEach(function(digit, index) {

    if (!isNaN(parseInt(digit, 10))) {
      cleanDigits.push(digit);
    }

  });

  return cleanDigits;
}

function createDigitsMarkup(numberCounters) {

  var numberCounters = document.querySelectorAll('[data-role="number-counter"]');

  numberCounters.forEach(function(numberCounter) {

    var number = numberCounter.textContent;
    var digits = number.split('');

    numberCounter.setAttribute('data-number', number);
    numberCounter.innerHTML = '';

    digits.forEach(function(digit, index) {

      if (isNaN(parseInt(digit, 10))) {
        numberCounter.innerHTML += '<span class="number-counter__punctuation">' + digit + '</span>';
      } else {
        numberCounter.innerHTML += '<span class="number-counter__digit" data-role="digit"><span class="number-counter__digit-wheel" data-role="digit-wheel">0<span class="number-counter__digit--thin">1</span>234567890</span><span class="number-counter__digit--static">' + digit + '</span></span>';
      }
    });

  });
}

function count(numberCounter) {

  var digits = cleanNumber(numberCounter.dataset.number);
  var digitElements = numberCounter.querySelectorAll('[data-role="digit"]');
  var digitElementsArray = [];

  digitElements.forEach(function(digitElement) {

    digitElementsArray.push(digitElement);

  });

  digitElementsArray.forEach(function(digitElement, index) {

    var digitWheel = digitElement.querySelector('[data-role="digit-wheel"]');

    digitWheel.style.cssText = 'transform: translateY(' + (10 - digits[index]) + 'em)';

  });

}

function triggerCounters() {

  function findScrollPosition() {

    var numberCounters = document.querySelectorAll('[data-role="number-counter"]');
    var height = window.innerHeight;

    numberCounters.forEach(function(numberCounter) {

      var dimensions = numberCounter.getBoundingClientRect();

      if (dimensions.bottom < height) {
        count(numberCounter);
      }

    });

    requestAnimationFrame(findScrollPosition);

  }

  findScrollPosition();

}

createDigitsMarkup();
triggerCounters();
