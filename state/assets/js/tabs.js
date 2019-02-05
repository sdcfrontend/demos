(function () {
  var tabs = document.querySelectorAll('[data-role="tab-items"]');

  tabs.forEach(function (tabparent) {
    var tabs = tabparent.querySelectorAll('[data-role="tab-item"]');
    tabs.forEach(function (tab) {

      tab.addEventListener('click', function (event) {

        event.preventDefault();

        tabs.forEach(function (tab) {
          tab.removeAttribute('aria-selected');
        });

        this.setAttribute('aria-selected', true);

        var tabid = this.getAttribute('aria-controls');
        var tabidroot = tabid.split('-')[0];
        document.querySelectorAll('[id^="' + (tabidroot) + '"]').forEach(function (tab) {
          tab.setAttribute('aria-hidden', true);
          tab.querySelectorAll('.waffle__chart').forEach(function (item) {
            item.innerHTML = "";
          })
        });

        document.querySelector('[id="' + (tabid) + '"]').removeAttribute('aria-hidden');

      })
    })
  });
})()