function createWaffleChart(data){

  var template = '<div class="waffle__chart-seg color-#{color}" data-bg data-trigger="100" style="transition-delay: #{delay}ms;" data-tooltip="#{value}%|#{label}" data-animate-in-view aria-hidden></div>';
  var html = '';
  var index = 0;
  var summary = [];

  Object.keys(data).forEach(function(key){
    var item = data[key];
    for(var i = item.value;--i>-1;){
      index++;
      html += template.replace(/#{color}/, key).replace(/#{delay}/, (index*5)).replace(/#{value}/, item.value).replace(/#{label}/, item.label);
      var text = item.label+ " " + item.value +"%";
      if(summary.indexOf(text) === -1){
        summary.push(text)
      };
    }

  });

  return html + '<p class="waffle__chart-summary">' + (summary.join(', ')) + '</p>';
}

function checkWaffleCharts(waffles){
  waffles.forEach(function(item){
    var json = item.getAttribute('data-json');
    if(json && item.offsetWidth){
      item.insertAdjacentHTML('afterbegin', createWaffleChart(JSON.parse(json)));
      item.removeAttribute('data-json');
    }
  })
}