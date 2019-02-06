(function () {

  document.querySelectorAll('[data-role="multioption"]').forEach(function (item) {

    var tabitems = item.querySelectorAll('[data-role="multioption-tab-item"]');
    var cells = item.querySelectorAll('[data-role="multioption-cell"]');


    var data = [
      [{ value: '16%', label: '0' }, { value: '19%', label: '1' }, { value: '22%', label: '2' }, { value: '13%', label: '3' }, { value: '12%', label: '4' }, { value: '6%', label: '5' }, { value: '4%', label: '6' }, { value: '1%', label: '7' }, { value: '2%', label: '8' }, { value: '1%', label: '9' }, { value: '4%', label: '10+' }],


      [{ value: '6%', label: '0' }, { value: '12%', label: '1' }, { value: '14%', label: '2' }, { value: '13%', label: '3' }, { value: '12%', label: '4' }, { value: '13%', label: '5' }, { value: '9%', label: '6' }, { value: '2%', label: '7' }, { value: '4%', label: '8' }, { value: '1%', label: '9' }, { value: '13%', label: '10+' }],


      [{ value: '7%', label: '0' }, { value: '13%', label: '1' }, { value: '15%', label: '2' }, { value: '13%', label: '3' }, { value: '11%', label: '4' }, { value: '12%', label: '5' }, { value: '8%', label: '6' }, { value: '3%', label: '7' }, { value: '4%', label: '8' }, { value: '1%', label: '9' }, { value: '12%', label: '10+' }],


      [{ value: '9%', label: '0' }, { value: '14%', label: '1' }, { value: '14%', label: '2' }, { value: '13%', label: '3' }, { value: '12%', label: '4' }, { value: '12%', label: '5' }, { value: '8%', label: '6' }, { value: '3%', label: '7' }, { value: '4%', label: '8' }, { value: '1%', label: '9' }, { value: '11%', label: '10+' }]
    ]

    tabitems.forEach(function (link, index) {
      link.index = index;
      link.onclick = function (event) {
        event.preventDefault();
        tabitems.forEach(function (item) {
          item.removeAttribute('aria-selected');
        });

        this.setAttribute('aria-selected', 'true');
        writedata(index);
      }
    })

    function writedata(index) {
      var d = data[index];
      cells.forEach(function (item, ind) {
        item.style.cssText = "width:" + d[ind].value;
        item.querySelector('[data-tooltip]').setAttribute('data-tooltip', [d[ind].value, d[ind].label].join("|"))
      })
    }

  });

})();