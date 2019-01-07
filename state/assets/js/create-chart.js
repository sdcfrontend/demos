function createChart(data){

  var template = '<div class="waffle__chart-seg color-#{color}" data-bg data-trigger="100" style="transition-delay: #{delay}ms;" data-tooltip="#{value}%|#{label}" data-animate-in-view></div>';
  var html = '';
  var index = 0;

  Object.keys(data).forEach(function(key){
    var item = data[key];
    for(var i = item.value;--i>-1;){
      index++;
      html += template.replace(/#{color}/, key).replace(/#{delay}/, 500 - (index*5)).replace(/#{value}/, item.value).replace(/#{label}/, item.label);
    }
  });

  return html;
}