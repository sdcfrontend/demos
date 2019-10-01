(function(){

  var timelines = document.querySelectorAll('.timeline');
  var h = timelines[0].parentNode.offsetHeight;
  timelines[0].style.cssText = "--timeline-height:" + h + "px";

  if(window.IntersectionObserver) {

    let observer = new IntersectionObserver(function(entries){
      
      entries.forEach(function(item){
       if(item.isIntersecting){
         item.target.setAttribute('data-active', true);
       }

       else {
        item.target.removeAttribute('data-active');
       }
        
      });
      
    }, {
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.5
    });

    timelines.forEach(function(item){
      observer.observe(item);
    })

  }

})();