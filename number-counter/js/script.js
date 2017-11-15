NodeList.prototype.forEach = Array.prototype.forEach;

function createDigitsMarkup(numberCounters) {

  var numberCounters = document.querySelectorAll('[data-role="number-counter"]');

  numberCounters.forEach(function(numberCounter) {

    var number = numberCounter.textContent;
    var digits = number.split('');

    numberCounter.setAttribute('data-number', number);
    numberCounter.innerHTML = '';

    digits.forEach(function(digit, index) {

      numberCounter.innerHTML += '<span class="number-counter__digit" data-role="digit"><span class="number-counter__digit-wheel" data-role="digit-wheel">01234567890</span></span>';

    });

  });
}

function count(numberCounter) {

  var number = numberCounter.dataset.number;
  var digits = number.split('');
  var digitElements = numberCounter.querySelectorAll('[data-role="digit"]');
  var digitElementsArray = [];

  digitElements.forEach(function(digitElement) {

    digitElementsArray.push(digitElement);

  });

  digits.forEach(function(digit, index) {

    var digitWheel = digitElementsArray[index].querySelector('[data-role="digit-wheel"]');

    digitWheel.style.bottom = '-' + (1000 - (digit*100)) + '%';

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
