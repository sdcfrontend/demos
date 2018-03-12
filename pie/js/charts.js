var skins = {
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

function resetPie(pie) {

  var segments = pie.querySelectorAll('[data-role="chart-point"]');

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

function setSegmentColour(pie, segment, skin, currentColourIndex) {

  var fills = segment.querySelectorAll('[data-role="fill"]');
  var fix = segment.querySelector('[data-role="fix"]');

  fills.forEach(function(fill) {
    fill.style.backgroundColor = skin[currentColourIndex];
  });

  fix.style.backgroundColor = skin[currentColourIndex];

  if (currentColourIndex < skin.length-1) {
    currentColourIndex++;
  } else {
    currentColourIndex = 0;
  }

  return currentColourIndex;

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

function lookupChartSkin(chart) {

  var skin = chart.getAttribute('data-skin');
  var skinColours = [];

  Object.keys(skins).forEach(function(skinOption) {
    if (skinOption === skin) {
      skinColours = skins[skinOption];
    }
  });

  if (skinColours.length == 0) {
    skinColours = skins['vanilla'];
  }

  return skinColours;

}

function updatePie(pie) {

  var segments = pie.querySelectorAll('[data-role="chart-point"]');
  var skin = lookupChartSkin(pie);
  var currentColourIndex = 0;
  var totalValue = 0;

  pie.setAttribute('animated', '');

  segments.forEach(function(segment, index) {
    totalValue = setSegmentSizeAndRotation(segments, segment, totalValue, index);
    currentColourIndex = setSegmentColour(pie, segment, skin, currentColourIndex);
  });

}

function createPie(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');

  points.forEach(function(point) {
    point.innerHTML = '<div class="chart__pie-mask chart__pie-mask--full" data-role="mask"><div class="chart__pie-segment-fill" data-role="fill"></div></div><div class="chart__pie-mask chart__pie-mask--half"><div class="chart__pie-segment-fill" data-role="fill"></div><div class="chart__pie-segment-fill chart__pie-segment-fill--fix" data-role="fix"></div></div>';
  });

}

function updateKeyItemColour(pie, colour, index) {

  key.style.backgroundColor = skin[currentColourIndex];

}

function updateKey(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');
  var skin = lookupChartSkin(chart);
  var currentColourIndex = 0;
  var keyItems = chart.querySelectorAll('[data-role="key-item"]');

  points.forEach(function(point, index) {
    var keyIndicator = keyItems[index].querySelector('[data-role="key-indicator"]')

    keyIndicator.style.backgroundColor = skin[currentColourIndex];

    if (currentColourIndex < skin.length-1) {
      currentColourIndex++;
    } else {
      currentColourIndex = 0;
    }
  });

}

function createKey(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');
  var keyList = document.createElement('ul');
  var chartInfo = document.querySelector('[data-role="chart-info"]');

  keyList.classList.add('chart__key-list');
  keyList.setAttribute('data-role', 'key');

  points.forEach(function(point) {
    var keyItem = document.createElement('li');

    keyItem.classList.add('chart__key-item');
    keyItem.setAttribute('data-role', 'key-item');
    keyItem.innerHTML = '<span class="chart__key-indicator" data-role="key-indicator"></span>' + point.getAttribute('data-label');

    keyList.appendChild(keyItem);
  });

  chartInfo.appendChild(keyList);

  updateKey(chart);

}

function updateChart(chart) {

  var points = chart.querySelectorAll
  var type = chart.getAttribute('data-type');

  switch (type) {
    case "pie":
      updatePie(chart);

      break;
  }

}

function updateCharts(charts) {

  charts.forEach(function(chart) {
    resetChart(chart);
    updateChart(chart);
  });

}

function createChart(chart) {

  var type = chart.getAttribute('data-type');

  var chartHeader = document.createElement('div');

  chartHeader.classList.add('chart__header');
  chartHeader.setAttribute('data-role', 'chart-header');
  chart.appendChild(chartHeader);

  var chartBody = document.createElement('div');

  chartBody.classList.add('chart__body');
  chartBody.setAttribute('data-role', 'chart-body');
  chart.appendChild(chartBody);

  var chartInfo = document.createElement('div');

  chartInfo.classList.add('chart__info');
  chartInfo.setAttribute('data-role', 'chart-info');
  chart.appendChild(chartInfo);

  var points = chart.querySelectorAll('[data-role="chart-point"]');

  points.forEach(function(point) {
    chartBody.appendChild(point);
  });

  switch (type) {
    case "pie":
      createPie(chart);

      break;
  }

  setTimeout(function() {
    updateChart(chart);
  }, 1);

}

function resetChart(chart) {
  var type = chart.getAttribute('data-type');

  chart.removeAttribute('animated');

  switch (type) {
    case "pie":
      resetPie(chart);

      break;
  }

}

function createCharts(charts) {

  charts.forEach(function(chart) {
    createChart(chart);

    var showKey = chart.getAttribute('data-key');

    if (showKey) {
      createKey(chart);
    }
  });

}

function changeSkin(charts, skin) {

  charts.forEach(function(chart) {
    chart.setAttribute('data-skin', skin);

    resetChart(chart)

    setTimeout(function() {
      updateChart(chart);
    }, 100)
    updateKey(chart);
  });

}

function setSkinEvents(charts) {

  var skinOptions = document.querySelectorAll('[data-role="skin-option"]');

  skinOptions.forEach(function(skinOption) {

    var skin = skinOption.getAttribute('data-skin');

    skinOption.addEventListener('click', function() {
      changeSkin(charts, skin);

      skinOptions.forEach(function(skinOption) {
        skinOption.removeAttribute('active-skin');
      });

      skinOption.setAttribute('active-skin', '');

    }, false);

  });

}

var charts = document.querySelectorAll('[data-role="chart"]');

createCharts(charts);
setSkinEvents(charts);
