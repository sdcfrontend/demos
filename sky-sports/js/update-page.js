var items = document.querySelectorAll('[data-bind]');

function updatepage(data) {

  items.forEach(function (item) {

    var prop = item.dataset.prop;
    var bind = item.dataset.bind;

    if (!prop) {
      return
    }

    if (bind === 'text') {
      item.textContent = data[prop]
    }

    if (bind === 'class') {
      item.dataset.class = data[prop]
    }

    if (bind === 'function' && item.update) {
      item.update(data[prop])
    }

  })

  location.hash = data.url;
  resetpage();
}

function setpagestate() {

  var hash = location.hash.replace('#', '');
  var header = document.querySelector('[data-role="pl-header"]');
  var nav = document.querySelector('[data-role="pl-nav"]');
  var body = document.querySelector('[data-role="pl-body"]');

  if (hash.length) {
    header.setAttribute('data-open', true);
    nav.setAttribute('data-open', true);
    body.setAttribute('data-open', true)
  }

  updatepage(pldata[hash]);
}

function resetpage() {
  document.querySelectorAll('[data-trigger]').forEach(function (block) {
    block.setAttribute('data-animate-in-view', true);
    observer.observe(block);
  });
}

window.addEventListener('hashchange', function () {
  setpagestate();
});

