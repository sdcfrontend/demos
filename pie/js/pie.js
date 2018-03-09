var flavours = {
  "vanilla": [
    '#113537',
    '#37505C',
    '#96616B',
    '#F76F8E',
    '#FFEAD0'
  ],
  "skynews": [
    '#F1F1F1',
    '#D7D5D5',
    '#EF0420',
    '#D0021B',
    '#B20318'
  ],
  "skysports": [
    '#446CCC',
    '#2653BB',
    '#103A9D',
    '#072B7B',
    '#002369'
  ],
  "premierleague": [
    '#353C97',
    '#222989',
    '#090E66',
    '#0F1151',
    '#020440'
  ],
  "line18": [
    '#B35011',
    '#C18418',
    '#E4A71C',
    '#6842BE',
    '#303D7E'
  ]
}

function setSegmentTopping(segment, flavourToppings, toppingCount) {

  var fills = segment.querySelectorAll('[data-role="fill"]');
  var fix = segment.querySelector('[data-role="fix"]');

  fills.forEach(function(fill) {
    fill.style.backgroundColor = flavourToppings[toppingCount];
  });

  fix.style.backgroundColor = flavourToppings[toppingCount];

  if (toppingCount < flavourToppings.length-1) {
    toppingCount++;
  } else {
    toppingCount = 0;
  }

  return toppingCount;

}

function resetPie(pie) {

  var segments = pie.querySelectorAll('[data-role="segment"]');

  pie.removeAttribute('animated');

  segments.forEach(function(segment) {
    var masks = segment.querySelectorAll('[data-role="mask"]');
    var fills = segment.querySelectorAll('[data-role="fill"]');
    var fix = segment.querySelector('[data-role="fix"]');

    masks.forEach(function(mask) {
      mask.style.transform = 'rotate(0deg)';
    });

    fills.forEach(function(fill) {
      fill.style.transform = 'rotate(0deg)';
    });

    fix.style.transform = 'rotate(0deg)';

    segment.style.transform = 'rotate(0deg)'
  });

}

function setSegmentSizeAndRotation(segments, segment, totalValue, index) {

  var masks = segment.querySelectorAll('[data-role="mask"]');
  var fills = segment.querySelectorAll('[data-role="fill"]');
  var fix = segment.querySelector('[data-role="fix"]');
  var value = segment.getAttribute('data-value');;
  var rotation = (value/100) * 180;
  var fixRotation = rotation * 2;

  segment.style.opacity = 1;

  masks.forEach(function(mask) {
    mask.style.transform = 'rotate('+rotation+'deg)';
  });

  fills.forEach(function(fill) {
    fill.style.transform = 'rotate('+rotation+'deg)';
  });

  fix.style.transform = 'rotate('+rotation*2+'deg)';

  if (index > 0) {
    var prevValue = parseFloat(segments[index-1].getAttribute('data-value'));

    totalValue = totalValue + prevValue;

    segment.style.transform = 'rotate('+(totalValue/100) * 360+'deg)'
  }

  return totalValue;

}

function lookupPieFlavour(pie) {

  var flavour = pie.getAttribute('data-flavour');
  var flavourToppings = [];

  Object.keys(flavours).forEach(function(flavourOption) {
    if (flavourOption === flavour) {
      flavourToppings = flavours[flavourOption];
    }
  });

  if (flavourToppings.length > 0) {

  } else {
    flavourToppings = flavours['vanilla'];
  }

  return flavourToppings

}

function bakePie(pie) {

  var segments = pie.querySelectorAll('[data-role="segment"]');
  var flavourToppings = lookupPieFlavour(pie);
  var toppingCount = 0;
  var totalValue = 0;

  pie.setAttribute('animated', '');

  segments.forEach(function(segment, index) {
    totalValue = setSegmentSizeAndRotation(segments, segment, totalValue, index);
    toppingCount = setSegmentTopping(segment, flavourToppings, toppingCount);
  });

}

function updatePieFlavours(flavour, flavourOptions, flavourOption) {

  flavourOptions.forEach(function(flavourOption) {
    flavourOption.removeAttribute('active-flavour');
  });

  flavourOption.setAttribute('active-flavour', '');

  var pies = document.querySelectorAll('[data-role="pie"]');

  pies.forEach(function(pie) {
    pie.setAttribute('data-flavour', flavour);

    resetPie(pie);

    setTimeout(function() {
      bakePie(pie);
    }, 100)
  });

}

function setFlavourEvents() {

  var flavourOptions = document.querySelectorAll('[data-role="flavour-option"]');

  flavourOptions.forEach(function(flavourOption) {

    var flavour = flavourOption.getAttribute('data-flavour');

    flavourOption.addEventListener('click', function() {
      updatePieFlavours(flavour, flavourOptions, flavourOption);
    }, false);

  });

}

var pies = document.querySelectorAll('[data-role="pie"]');

pies.forEach(function(pie) {
  setTimeout(function() {
    bakePie(pie);
  }, 100)
});

setFlavourEvents();
