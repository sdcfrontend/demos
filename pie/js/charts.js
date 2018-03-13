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

function zeroBarChart(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');

  chart.removeAttribute('animated');

  var bars = chart.querySelectorAll('[data-role="chart-bar"]');

  bars.forEach(function(bar) {
    bar.style.transform = 'translateY(0)';
  });

}

function zeroPieChart(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');

  chart.removeAttribute('animated');

  points.forEach(function(point) {

    var masks = point.querySelectorAll('[data-role="mask"]');
    var fills = point.querySelectorAll('[data-role="fill"]');
    var fix = point.querySelector('[data-role="fix"]');

    masks.forEach(function(mask) {
      mask.style.transform = 'rotate(0deg)';
    });

    fills.forEach(function(fill) {
      fill.style.transform = 'rotate(0deg)';
    });

    fix.style.transform = 'rotate(0deg)';

    point.style.transform = 'rotate(0deg)'
  });

}

function setBarColour(point, skin, currentColourIndex) {

  var bar = point.querySelector('[data-role="chart-bar"]');

  bar.style.backgroundColor = skin[currentColourIndex];

  if (currentColourIndex < skin.length-1) {
    currentColourIndex++;
  } else {
    currentColourIndex = 0;
  }

  return currentColourIndex;

}

function setSegmentColour(point, skin, currentColourIndex) {

  var fills = point.querySelectorAll('[data-role="fill"]');
  var fix = point.querySelector('[data-role="fix"]');

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

function setBarSize(point, bar, type, highestValue) {

  var value = point.getAttribute('data-value');
  var size = (value / highestValue) * 100;

  switch (type) {
    case "barvert":
      bar.style.transform = 'translateY(-' + size + '%)';

      break;

    case "barhori":
      bar.style.transform = 'translateX(' + size + '%)';

      break;
  }

}

function setSegmentSizeAndRotation(points, point, totalValue, index) {

  var masks = point.querySelectorAll('[data-role="mask"]');
  var fills = point.querySelectorAll('[data-role="fill"]');
  var fix = point.querySelector('[data-role="fix"]');
  var value = point.getAttribute('data-value');
  var rotation = (value/100) * 180;
  var fixRotation = rotation * 2;

  point.style.opacity = 1;

  masks.forEach(function(mask) {
    mask.style.transform = 'rotate('+rotation+'deg)';
  });

  fills.forEach(function(fill) {
    fill.style.transform = 'rotate('+rotation+'deg)';
  });

  fix.style.transform = 'rotate('+rotation*2+'deg)';

  if (index > 0) {
    var prevValue = parseFloat(points[index-1].getAttribute('data-value'));

    totalValue = totalValue + prevValue;

    point.style.transform = 'rotate('+(totalValue/100) * 360+'deg)'
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

function updatePieChart(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');
  var skin = lookupChartSkin(chart);
  var currentColourIndex = 0;
  var totalValue = 0;

  chart.setAttribute('animated', '');

  points.forEach(function(point, index) {
    totalValue = setSegmentSizeAndRotation(points, point, totalValue, index);
    currentColourIndex = setSegmentColour(point, skin, currentColourIndex);
  });

}

function createPieChart(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');

  points.forEach(function(point) {
    point.innerHTML = '<div class="chart__pie-mask chart__pie-mask--full" data-role="mask"><div class="chart__pie-segment-fill" data-role="fill"></div></div><div class="chart__pie-mask chart__pie-mask--half"><div class="chart__pie-segment-fill" data-role="fill"></div><div class="chart__pie-segment-fill chart__pie-segment-fill--fix" data-role="fix"></div></div>';
  });

}

function updateBarChart(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');
  var skin = lookupChartSkin(chart);
  var type = chart.getAttribute('data-type');
  var highestValue = 0;
  var currentColourIndex = 0;

  chart.setAttribute('animated', '');

  points.forEach(function(point) {
    var value = point.getAttribute('data-value');

    if (value > highestValue) {
      highestValue = value;
    }
  });

  points.forEach(function(point) {
    var bar = point.querySelector('[data-role="chart-bar"]');

    setBarSize(point, bar, type, highestValue);
    currentColourIndex = setBarColour(point, skin, currentColourIndex);
  });

}

function createBarChart(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');

  points.forEach(function(point) {
    point.innerHTML = '<div class="chart__bar" data-role="chart-bar"></div>';
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
  var chartInfo = chart.querySelector('[data-role="chart-info"]');

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
      updatePieChart(chart);

      break;

    case "barvert":
      updateBarChart(chart);

      break;

    case "barhori":
      updateBarChart(chart);

      break;
  }

}

function updateCharts(charts) {

  charts.forEach(function(chart) {
    resetChart(chart);
    updateChart(chart);
  });

}

function createChart(chart, type) {

  switch (type) {
    case "pie":
      createPieChart(chart);

      break;

    case "barvert":
      createBarChart(chart);

      break;

    case "barhori":
      createBarChart(chart);

      break;
  }

  setTimeout(function() {
    updateChart(chart);
  }, 1);

}

function zeroChart(chart) {
  var type = chart.getAttribute('data-type');

  chart.removeAttribute('animated');

  switch (type) {
    case "pie":
      zeroPieChart(chart);

      break;

    case "barvert":
      zeroBarChart(chart);

      break;

    case "barhori":
      zeroBarChart(chart);

      break;
  }

}

function createCharts(charts) {

  charts.forEach(function(chart) {

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

    var type = chart.getAttribute('data-type');

    createChart(chart, type);

    var showKey = chart.getAttribute('data-key');

    if (showKey) {
      createKey(chart);
    }
  });

}

function changeSkin(charts, skin) {

  charts.forEach(function(chart) {
    chart.setAttribute('data-skin', skin);

    zeroChart(chart);

    setTimeout(function() {
      updateChart(chart);
    }, 100)
    updateKey(chart);
  });

}

function resetChart(chart) {

  var points = chart.querySelectorAll('[data-role="chart-point"]');

  points.forEach(function(point) {
    point.innerHTML = '';
    point.style = '';
  });

}

function changeType(charts, type) {

  charts.forEach(function(chart) {
    chart.setAttribute('data-type', type);

    resetChart(chart);

    setTimeout(function() {
      createChart(chart, type);
    }, 100)
  });

}

function setSkinEvents(charts) {

  var skinOptions = document.querySelectorAll('[data-role="skin-option"]');

  skinOptions.forEach(function(skinOption) {

    var skin = skinOption.getAttribute('data-skin');

    skinOption.addEventListener('click', function() {
      changeSkin(charts, skin);

      skinOptions.forEach(function(skinOption) {
        skinOption.removeAttribute('active');
      });

      skinOption.setAttribute('active', '');

    }, false);

  });

}

function setTypeEvents(charts) {

  var typeOptions = document.querySelectorAll('[data-role="type-option"]');

  typeOptions.forEach(function(typeOption) {

    var type = typeOption.getAttribute('data-type');

    typeOption.addEventListener('click', function() {
      changeType(charts, type);
    }, false);

  });

}

function setSelectBoxEvents() {

  var selectBoxes = document.querySelectorAll('[data-role="select-box"]');

  selectBoxes.forEach(function(selectBox) {
    selectBox.addEventListener('click', function() {
      if (selectBox.hasAttribute('closed')) {
        selectBox.removeAttribute('closed');
      } else {
        selectBox.setAttribute('closed', '');
      }
    }, false);
  });

}

function setAccordionEvents(charts) {

  var accordions = document.querySelectorAll('[data-role="accordion"]');

  accordions.forEach(function(accordion) {
    var heading = accordion.querySelector('[data-role="accordion-heading"]');
    var items = accordion.querySelectorAll('[data-accordion-role="accordion-item"]');

    heading.addEventListener('click', function() {
      if (accordion.hasAttribute('closed')) {
        accordion.removeAttribute('closed');
      } else {
        accordion.setAttribute('closed', '');
      }
    }, false);

    items.forEach(function(item) {
      item.addEventListener('click', function() {
        if (!accordion.hasAttribute('active')) {
          accordions.forEach(function(accordion) {
            accordion.removeAttribute('active');
          });

          accordion.setAttribute('active', '');
        }

        if (!item.hasAttribute('active')) {
          accordions.forEach(function(accordion) {
            var items = accordion.querySelectorAll('[data-role="accordion-items"]');

            items.forEach(function(item) {
              item.removeAttribute('active');
            });
          });

          item.setAttribute('active', '');
        }
      }, false);
    });
  });

}

var charts = document.querySelectorAll('[data-role="chart"]');

createCharts(charts);
setTypeEvents(charts);
setSkinEvents(charts);
setSelectBoxEvents();
setAccordionEvents(charts);
