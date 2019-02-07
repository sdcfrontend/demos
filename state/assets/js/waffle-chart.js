var waffletemplate = '<div class="waffle__chart-seg color-#{color}" data-bg style="transition-delay: #{delay}ms;" data-tooltip="#{value}%|#{label}" aria-hidden data-waffle-seg></div>';

function createWaffleChart(data, reverse) {
  var html = '';
  var index = 0;
  var summary = [];

  Object.keys(data).forEach(function (key) {
    var item = data[key];
    for (var i = item.value; --i > -1;) {
      index++;
      html += waffletemplate.replace(/#{color}/, key).replace(/#{delay}/, reverse ? (600 - (index * 6)) : (index * 6)).replace(/#{value}/, item.value).replace(/#{label}/, item.label);
      var text = item.label + " " + item.value + "%";
      if (summary.indexOf(text) === -1) {
        summary.push(text)
      };
    }
  });

  return html + '<p class="waffle__chart-summary">' + (summary.join(', ')) + '</p>';
}

function checkWaffleCharts(waffles) {
  waffles.forEach(function (item) {
    var json = item.getAttribute('data-json');
    var reverse = item.hasAttribute('data-reverse');
    if (json && item.offsetWidth && !item.created) {
      item.innerHTML = createWaffleChart(JSON.parse(json), reverse);
      // item.created = true;
    }
  })
}