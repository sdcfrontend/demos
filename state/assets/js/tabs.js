(function () {
  var tabs = document.querySelectorAll('[data-role="tabs"]');

  tabs.forEach(function (tabbox) {

    var tabitems = tabbox.querySelectorAll('[data-role="tab-item"]');
    var tabtargets = tabbox.querySelectorAll('[data-role="tab-target"]');

    tabitems.forEach(function (tabitem) {

      tabitem.addEventListener('click', function (event) {

        event.preventDefault();

        tabitems.forEach(function (tab) {
          tab.removeAttribute('aria-selected');
        });

        this.setAttribute('aria-selected', true);

        var tabid = this.getAttribute('aria-controls');

        tabtargets.forEach(function (target) {

          if (target.id === tabid) {
            target.removeAttribute('aria-hidden');
            checkWaffleCharts(target.querySelectorAll('[data-role="waffle-chart"]'));
          }

          else {
            target.setAttribute('aria-hidden', true);
          }

          // item.querySelectorAll('.waffle__chart').forEach(function (waffle) {
          //   waffle.innerHTML = "";
          // })
        });



      })

    });



  });



})()