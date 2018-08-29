function scrape(name, tbody, offset) {

  offset = offset || 0;
  var data = {
    "name": name,
    "positions": 20,
    "max": 20,
    "years": []
  }

  tbody.querySelectorAll('tr').forEach(function (tr) {
    var tds = tr.querySelectorAll('td:not([rowspan]), td[rowspan="2"], th');
    var year = parseInt(tds[0].textContent, 10);
    if (year > 1991) {
      data.years.push({ 'pts': parseInt(tds[7 + offset].textContent.trim(), 10), "pos": parseInt(tds[8 + offset].textContent.trim(), 10) })
    }
  })

  return JSON.stringify(data);
}

function h2h(tbody, t1, t2) {

  var data = {}
  data[t1] = [];
  data[t2] = [];
  data['draw'] = [];

  tbody.querySelectorAll('tr.match').forEach(function (tr) {
    var tds = tr.querySelectorAll('td');

    if (tds[0].textContent.trim().match(/Premier/i)) {

      var fix = {};
      fix.home = tds[3].textContent.trim();
      fix.away = tds[5].textContent.trim();
      fix.homescore = parseInt(tds[4].textContent.trim().split(' - ')[0], 10);
      fix.awayscore = parseInt(tds[4].textContent.trim().split(' - ')[1], 10);
      if ((fix.home == t1 && fix.homescore > fix.awayscore) || (fix.away == t1 && fix.awayscore > fix.homescore)) {
        console.log(t1 + ' won')
        data[t1].push(fix);
      }

      if ((fix.home == t2 && fix.homescore > fix.awayscore) || (fix.away == t2 && fix.awayscore > fix.homescore)) {
        data[t2].push(fix);
      }

      if (fix.homescore == fix.awayscore) {
        data['draw'].push(fix);
      }

    }
  });

  return JSON.stringify(data);

}