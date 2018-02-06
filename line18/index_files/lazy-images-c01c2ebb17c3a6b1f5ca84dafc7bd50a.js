// lets ensure this is testable by adding it to a global object
window.sdc = window.sdc || {};

window.sdc.lazyImages = {

  queryString: 'bypass-service-worker',

  init: function(serviceWorkerUrl){

    if(!serviceWorkerUrl){
      return;
    }

    // patch nodelist forEach
    NodeList.prototype.forEach = Array.prototype.forEach;

    var self = this;

    if(navigator.serviceWorker){

      navigator.serviceWorker.register(serviceWorkerUrl).then(function (registration) {

        setInterval(function () {
          requestAnimationFrame(function () {
            self.scan();
          });
        }, 250);
      }).catch(function (err) {});

    }
  },

  isInViewPort: function(image) {

    // return true if the image is visible and in the viewport top and bottom
    // otherwise return false
    var rect = image.getBoundingClientRect();

    if(rect.width === 0){

      // element is not visible
      return false;
    }

    if(rect.bottom < 0){

      // out of viewport top
      return false;
    }

    // @note - use a fallback for window.outerHeight for older ios
    // set tolerance to 50 so images start loading fractionally before they are visible
    if(((window.outerHeight || window.innerHeight) - rect.top) < 50){

      // out of viewport bottom
      return false;
    }

    if((rect.width + rect.left) < -50){

      // out of viewport left
      return false
    }

    if(((window.outerWidth || window.innerWidth) - rect.left) < -50){

      // out of viewport right
      return false;
    }

    // if it passes all that, its visible
    return true;

  },

  //insert our querystring before any existing querystring and remove any invalid junk
  addQueryString: function(src, queryString) {

    queryString = ['?', queryString, '&'].join('');

    return src.
    replace(/\.png/g, '.png' + queryString).
    replace(/\.jpg/g, '.jpg' + queryString).
    replace(/\.svg/g, '.svg' + queryString).
    replace(/&\?/g, '&').
    replace(/&$/g, '').
    replace(/&\)/g, ')')
  },

  scan: function() {

    // get images that don't contain data-lazy-loaded
    // ensure this is something that has a footprint in the dom, eg <img> rather than <source> or <picture>
    var imgs = document.querySelectorAll([
      'img:not([data-lazy-loaded])',
      '[style*=".png"]:not([data-lazy-loaded])',
      '[style*=".jpg"]:not([data-lazy-loaded])',
      '[style*=".svg"]:not([data-lazy-loaded])'
    ].join(','));

    for(var i = -1;++i<imgs.length;){

      // the element to check positionally in the dom against viewport
      // this is an element that has a footprint, so <img> and <div>, not <picture> or <source>
      var checkableElement = imgs[i];

      // skip if src already contains the querystring
      if(checkableElement.src && checkableElement.src.match(this.queryString)){
        continue;
      }

      // skip if it's a twitter image
      if (checkableElement.src && checkableElement.src.match(/pbs\.twimg/)) {
        continue;
      }

      // skip if it's a storify image
      if (checkableElement.src && checkableElement.src.match(/storify\.com/)) {
        continue;
      }

      // the element to alter the src/srcset
      var changeableElement = [checkableElement];

      // if its a picture element there could be more than one source to replace
      if(checkableElement.parentNode.tagName === 'PICTURE'){
        changeableElement = checkableElement.parentNode.querySelectorAll('source');
      }

      // check if image is in viewport
      if(this.isInViewPort(checkableElement)) {

        // add the bypass parameter (service worker will no longer intercept this url);
        changeableElement.forEach(function(element){
          // normal src
          // exclude gifs here to elimate the slim possibility of blocking a hidden 1px tracking gif

          if(element.src && !element.src.match(/\.gif/)){
            element.src = this.addQueryString(element.src, this.queryString);
          }

          // srcset
          if(element.getAttribute('srcset')){
            element.setAttribute('srcset', this.addQueryString(element.getAttribute('srcset'), this.queryString));
          }

          // add to data-srcset for gallery or other JS-based images
          if (element.getAttribute('data-srcset')) {
            element.setAttribute('data-srcset', this.addQueryString(element.getAttribute('data-srcset'), this.queryString));
          }

          // inline style
          var style = element.getAttribute('style');
          if(style){
            element.setAttribute('style', this.addQueryString(style, this.queryString));
          }

        }.bind(this));

        checkableElement.setAttribute('data-lazy-loaded', true);

      }
    }
  }
}
