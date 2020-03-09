(function(){

  const iframe = document.querySelector('[data-role="directory-frame"]');
  const links = document.querySelectorAll('[data-role="director-list"] a[href]');

  if(!iframe || links.length < 1){
    return;
  }

  links.forEach(function(item){
    item.onclick = function(ev){

      ev.preventDefault();
      window.scrollTo(0, 0);
      links.forEach(function(item){
        item.classList.remove('on');
      });

      this.classList.add('on');

      location.hash = this.textContent;
      iframe.src = this.href;
    }
  });

  document.querySelectorAll('a[data-label="'+(location.hash.replace(/#/, ''))+'"]').forEach(function(item, index){
    item.click();
  });
  
})();