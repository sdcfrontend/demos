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

        var nonmatchingtabs = document.querySelectorAll('[id^="' + (tabidroot) + '"]');
        nonmatchingtabs.forEach(function (item) {
          item.setAttribute('aria-hidden', true);
          item.querySelectorAll('.waffle__chart').forEach(function (waffle) {
            waffle.innerHTML = "";
          })
        });

        var matchingtab = document.querySelector('[id="' + (tabid) + '"]');
        matchingtab.removeAttribute('aria-hidden');
        checkWaffleCharts(matchingtab.querySelectorAll('[data-role="waffle-chart"]'));

      })
    })
  });
})()