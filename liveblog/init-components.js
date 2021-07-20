
export default function (pathtoken, app){

  if(!pathtoken){
    console.log('No path or pathtoken specified');
  }

  const elements = document.querySelectorAll('[data-component-name]:not([data-lazy])');
  const lazyElements = document.querySelectorAll('[data-component-name][data-lazy]');

  // INTERSECTION OBSERVER - load components when visible on screen
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        getFunction(entry.target, entry.target.dataset.componentName);
      }
    })
  }, {
    rootMargin: '25%',
    threshold: 0
  });

  // lazy load elements with the data-lazy attribute
  lazyElements.forEach((element)=>{
    intersectionObserver.observe(element)
  });

  // INSTANT - load all elements on page on load
  elements.forEach((element)=>{
    getFunction(element, element.dataset.componentName);
  });

  // MUTATION OBSERVER - load components when added to dom after page load
  // get elements added after page load
  const mutationObserver = new MutationObserver(list => {
    list.forEach(function (item) {
      const el = item.addedNodes[0];
      if (el && (el.nodeType === 1) && el.dataset.componentName) {
        getFunction(el, el.dataset.componentName);
      };
    })
  });

  // Start observing the target node for configured mutations
  mutationObserver.observe(document.body, {
    attributes: true,
    childList: true,
    attributeFilter: ['data-component-name']
  });

  function getFunction(el, name) {
    // bail out if already initialised
    if(el.hasAttribute('data-init')){
      return;
    }

    const jsname = name.replace(/-/g,'_');
    const path = pathtoken.replace(/\$\{name\}/g, name);
    
    // component js is in the app bundle, so run it from there...
    if(app && app[jsname]){
      app[jsname](el);
      loaded(el);
    }

    // ...otherwise get component js as a dynamic import
    else {
      import(path)
        .then(module => {
          module.default(el);
          loaded(el);
        })
        .catch(err => {
          console.log(`component '${name}' does not exist`);
        });
    }
  }

  function loaded(el){
    el.setAttribute('data-init', 'true');
  }
}
