function createWaffleTooltip (waffles){

  var tooltip = document.querySelector('.waffle__chart-tool');
  
  waffles.forEach(function(item){

      var x;
      var y;
      var offset;
  
      if(!tooltip){
        return;
      }
  
      item.onmouseover = function(e){
  
        if(!e.target.classList.contains('waffle__chart-seg')){
          return;
        };
  
        var targetclass = e.target.className.match(/color-./);
        var currentclass = tooltip.className.match(/color-./);
        var dims = e.target.getBoundingClientRect();
        var text = e.target.getAttribute('data-tooltip');
  
        x = dims.left;
        y = dims.y + window.pageYOffset;
        offset = dims.width/2;
  
        tooltip.style.cssText = "top:" +y+ "px;left:" +(x + offset)+ "px;opacity: 1";
        tooltip.classList.remove(currentclass ? currentclass[0] : "none");
        tooltip.classList.add(targetclass ? targetclass[0] : "none");
        item.setAttribute('data-current-color', targetclass);
        
        if(text){
          var split = text.split("|");
          tooltip.querySelector('[data-role="tooltip-first-line"]').textContent = split[0]; 
          tooltip.querySelector('[data-role="tooltip-second-line"]').textContent = split[1];  
        }
  
      
      }
  
      item.onmouseleave = function(e){
        tooltip.style.cssText = "opacity: 0;visibility: hidden";
        item.removeAttribute('data-current-color');
      }
  
    });
}

