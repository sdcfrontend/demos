(function () {

  var content = document.querySelector('.sff-slidetabs__body');
  var rail = document.querySelector('.sff-slidetabs__nav');
  var nav = document.querySelectorAll('.sff-slidetabs__nav-link');

  var template = '<div class="sff-lineups"><h4>Most Appearances</h4><div class="sff-lineups__body"><div class="sff-lineups__body-cell"><h5>City</h5><ul>#{city}</ul></div><div class="sff-lineups__body-cell"><h5>Utd</h5><ul>#{utd}</ul></div></div></div>';

  function buildlist(data) {
    var array = data.slice();
    var frag = document.createElement('frag');
    array.reverse().forEach(function (item, index) {

      var li = document.createElement('li');

      if (index === 0) {
        li.className = 'sff-lineups__spot';
        li.setAttribute('data-label', item[1]);
        li.innerHTML = "<h6>Top transfer</h6>" + item[0];
      }

      if (index === 1) {
        li.className = 'sff-lineups__spot'; li.setAttribute('data-label',
          item[1]);
        li.innerHTML = "<h6>Player of the year</h6 > " + item;
      }

      if (index > 1) {
        li.innerHTML = unescape(item.Player); li.setAttribute('data-games',
          item['Games-Started']);

      }

      frag.insertAdjacentElement('afterbegin', li);

    });

    return frag.innerHTML;

  }

  function centernav(item) {

    var width = rail.offsetWidth;
    var itemX = ((item.parentNode.offsetLeft) - (width / 2)) + (item.offsetWidth / 2);
    rail.scrollLeft = itemX;
  }

  nav.forEach(function (item) {

    item.addEventListener('click', function (e) {

      e.preventDefault();
      var id = this.href.split('#')[1];

      if (content.getAttribute('data-id') === id) {
        return;
      }

      nav.forEach(function (navitem) {
        navitem.parentNode.classList.remove('sff-slidetabs__nav-item--active')
      });

      this.parentNode.classList.add('sff-slidetabs__nav-item--active');

      centernav(this);

      var city = buildlist(data[0][id]);
      var utd = buildlist(data[1][id]);

      content.innerHTML
        = template.replace(/#{city}/, city).replace(/#{utd}/, utd);

      content.setAttribute('data-id', id);
    });
  })


  var data = [{
    "year92": [{ "Player": "D. White", "Games-Started": 42 }, {
      "Player": "T. Coton",
      "Games-Started": 40
    }, { "Player": "R. Holden", "Games-Started": 40 }, {
      "Player": "K. Curle", "Games-Started":
        39
    }, { "Player": "N. Quinn", "Games-Started": 39 }, { "Player": "T. Phelan", "Games-Started": 37 }, {
      "Player":
        "M. Sheron", "Games-Started": 33
    }, { "Player": "G. Flitcroft", "Games-Started": 28 }, {
      "Player": "F. Simpson",
      "Games-Started": 27
    }, { "Player": "M. Vonk", "Games-Started": 26 }, {
      "Player": "S. McMahon", "Games-Started":
        24
    }, "Gary Flitcroft", ["David Rocastle", "£2,160,000"]], "year93": [{
      "Player": "S. McMahon", "Games-Started":
        35
    }, { "Player": "M. Vonk", "Games-Started": 34 }, { "Player": "T. Coton", "Games-Started": 31 }, {
      "Player":
        "T. Phelan", "Games-Started": 30
    }, { "Player": "K. Curle", "Games-Started": 29 }, {
      "Player": "M. Sheron",
      "Games-Started": 29
    }, { "Player": "A. Kernaghan", "Games-Started": 23 }, {
      "Player": "R. Edghill", "Games-Started":
        22
    }, { "Player": "D. Rocastle", "Games-Started": 21 }, { "Player": "D. Brightwell", "Games-Started": 19 },
    { "Player": "G. Flitcroft", "Games-Started": 19 }, "Tony Coton", ["Nicky Summerbee", "£2,030,000"]], "year94":
      [{ "Player": "N. Summerbee", "Games-Started": 39 }, { "Player": "P. Walsh", "Games-Started": 39 }, {
        "Player":
          "G. Flitcroft", "Games-Started": 37
      }, { "Player": "P. Beagrie", "Games-Started": 33 }, {
        "Player": "K. Curle",
        "Games-Started": 31
      }, { "Player": "I. Brightwell", "Games-Started": 29 }, {
        "Player": "U. R&ouml;sler", "Games-Started":
          29
      }, { "Player": "T. Phelan", "Games-Started": 26 }, { "Player": "N. Quinn", "Games-Started": 24 }, {
        "Player":
          "T. Coton", "Games-Started": 22
      }, { "Player": "M. Vonk", "Games-Started": 19 }, "Uwe Rosler", ["Giorgi Kinkladze",
        "£3,600,000"]], "year95": [{ "Player": "E. Immel", "Games-Started": 38 }, {
          "Player": "K. Symons", "Games-Started":
            38
        }, { "Player": "G. Kinkladze", "Games-Started": 37 }, {
          "Player": "U. R&ouml;sler", "Games-Started": 34
        }, { "Player": "N. Summerbee", "Games-Started": 33 }, { "Player": "K. Curle", "Games-Started": 32 }, {
          "Player":
            "S. Lomas", "Games-Started": 32
        }, { "Player": "I. Brightwell", "Games-Started": 26 }, {
          "Player": "G. Flitcroft",
          "Games-Started": 25
        }, { "Player": "N. Quinn", "Games-Started": 24 }, {
          "Player": "M. Brown", "Games-Started":
            16
        }, "Giorgi Kinkladze", ["Paul Dickov", "£1,350,000"]], "year00": [{
          "Player": "S. Howey", "Games-Started":
            36
        }, { "Player": "A. Haaland", "Games-Started": 35 }, { "Player": "N. Weaver", "Games-Started": 31 }, {
          "Player":
            "D. Tiatto", "Games-Started": 31
        }, { "Player": "G. Wiekens", "Games-Started": 29 }, {
          "Player": "J. Whitley",
          "Games-Started": 28
        }, { "Player": "P. Wanchope", "Games-Started": 25 }, {
          "Player": "R. Dunne", "Games-Started":
            24
        }, { "Player": "S. Goater", "Games-Started": 20 }, { "Player": "S. Prior", "Games-Started": 18 }, {
          "Player":
            "L. Charvet", "Games-Started": 16
        }, { "Player": "D. Granville", "Games-Started": 16 }, "Danny Tiatto", ["Jon Macken", "£6, 750, 000"]], "year02": [{ "Player": "N.Anelka", "Games-Started": 38 }, { "Player": "M.Foe", "Games-Started": 35 }, { "Player": "S. Distin", "Games-Started": 34 }, { "Player": "N. Jensen", "Games-Started": 32 }, {
          "Player":
            "P. Schmeichel", "Games-Started": 29
        }, { "Player": "E. Berkovic", "Games-Started": 27 }, {
          "Player": "Sun Jihai", "Games-Started": 25
        }, { "Player": "R.Dunne", "Games-Started": 24 }, {
          "Player": "S.Howey", "Games-Started":
            24
        }, { "Player": "S. Wright-Phillips", "Games-Started": 23 }, {
          "Player": "K. Horlock", "Games-Started": 22
        }, "Sylvain Distin", ["Claudio Reyna", "£3,380,000"]], "year03": [{
          "Player": "S. Distin", "Games-Started":
            38
        }, { "Player": "S. Wright-Phillips", "Games-Started": 32 }, {
          "Player": "M. Tarnat", "Games-Started": 32
        }, { "Player": "N. Anelka", "Games-Started": 31 }, { "Player": "Sun Jihai", "Games-Started": 29 }, {
          "Player":
            "R. Dunne", "Games-Started": 28
        }, { "Player": "J. Barton", "Games-Started": 24 }, {
          "Player": "R. Fowler",
          "Games-Started": 23
        }, { "Player": "P. Bosvelt", "Games-Started": 22 }, {
          "Player": "S. McManaman", "Games-Started":
            20
        }, { "Player": "T. Sinclair", "Games-Started": 20 }, "Shaun Wright-Phillips", ["Ben Thatcher", "£1,350,000"]],
    "year04": [{ "Player": "S. Distin", "Games-Started": 38 }, { "Player": "D. James", "Games-Started": 38 }, {
      "Player": "R. Dunne", "Games-Started": 35
    }, { "Player": "A. Sibierski", "Games-Started": 34 }, {
      "Player":
        "S. Wright-Phillips", "Games-Started": 33
    }, { "Player": "D. Mills", "Games-Started": 29 }, {
      "Player": "J.Barton", "Games-Started": 28
    }, { "Player": "P.Bosvelt", "Games-Started": 28 }, {
      "Player": "R.Fowler", "Games-Started":
        28
    }, { "Player": "S. Jordan", "Games-Started": 19 }, { "Player": "N. Anelka", "Games-Started": 18 }, "Richard  Dunne", ["Georgios Samaras", "£7, 650, 000"]], "year05": [{ "Player": "D.James", "Games-Started": 38 }, {
      "Player":
        "D. Vassell", "Games-Started": 36
    }, { "Player": "J. Barton", "Games-Started": 31 }, {
      "Player": "S. Distin",
      "Games-Started": 31
    }, { "Player": "R. Dunne", "Games-Started": 31 }, {
      "Player": "T. Sinclair", "Games-Started":
        29
    }, { "Player": "K. Musampa", "Games-Started": 24 }, { "Player": "C. Reyna", "Games-Started": 22 }, {
      "Player":
        "A. Cole", "Games-Started": 20
    }, { "Player": "D. Mills", "Games-Started": 18 }, {
      "Player": "S. Jordan", "Games-Started":
        18
    }, { "Player": "B. Thatcher", "Games-Started": 18 }, "Richard Dunne", ["Andreas Isaksson", "£2,700,000"]],
    "year06": [{ "Player": "R. Dunne", "Games-Started": 38 }, { "Player": "S. Distin", "Games-Started": 37 }, {
      "Player": "J. Barton", "Games-Started": 33
    }, { "Player": "M. Richards", "Games-Started": 28 }, {
      "Player":
        "D. Vassell", "Games-Started": 28
    }, { "Player": "N. Weaver", "Games-Started": 25 }, {
      "Player": "B. Corradi",
      "Games-Started": 19
    }, { "Player": "G. Samaras", "Games-Started": 16 }, {
      "Player": "H. Trabelsi", "Games-Started":
        16
    }, { "Player": "N. Onuoha", "Games-Started": 15 }, { "Player": "S. Ireland", "Games-Started": 14 }, {
      "Player":
        "T. Sinclair", "Games-Started": 14
    }, "Richard Dunne", ["Vedran Corluka", "£11,700,000"]], "year07": [{
      "Player":
        "R. Dunne", "Games-Started": 36
    }, { "Player": "V. Corluka", "Games-Started": 34 }, {
      "Player": "M. Petrov",
      "Games-Started": 34
    }, { "Player": "S. Ireland", "Games-Started": 32 }, {
      "Player": "Elano", "Games-Started":
        29
    }, { "Player": "D. Hamann", "Games-Started": 26 }, { "Player": "J. Hart", "Games-Started": 26 }, {
      "Player":
        "M. Richards", "Games-Started": 25
    }, { "Player": "M. Johnson", "Games-Started": 23 }, {
      "Player": "G. Fernandes",
      "Games-Started": 21
    }, { "Player": "J. Garrido", "Games-Started": 21 }, {
      "Player": "D. Vassell", "Games-Started":
        21
    }, "Richard Dunne", ["Robinho", "£38,700,000"]], "year08": [{
      "Player": "S. Ireland", "Games-Started": 34
    }, { "Player": "V. Kompany", "Games-Started": 34 }, { "Player": "M. Richards", "Games-Started": 33 }, {
      "Player":
        "R. Dunne", "Games-Started": 31
    }, { "Player": "Robinho", "Games-Started": 30 }, {
      "Player": "S. Wright-Phillips",
      "Games-Started": 27
    }, { "Player": "P. Zabaleta", "Games-Started": 26 }, {
      "Player": "J. Hart", "Games-Started":
        23
    }, { "Player": "Elano", "Games-Started": 21 }, { "Player": "N. Onuoha", "Games-Started": 20 }, {
      "Player":
        "W. Bridge", "Games-Started": 16
    }, { "Player": "N. de Jong", "Games-Started": 16 }, "Stephen Ireland", ["Emmanuel Adebayor", "£26, 100, 000"]], "year09": [{ "Player": "S.Given", "Games-Started": 35 }, {
      "Player": "G.Barry",
      "Games-Started": 34
    }, { "Player": "C. Tevez", "Games-Started": 32 }, {
      "Player": "K. Tour&eacute;", "Games-Started":
        31
    }, { "Player": "N. de Jong", "Games-Started": 30 }, { "Player": "C. Bellamy", "Games-Started": 26 }, {
      "Player":
        "E. Adebayor", "Games-Started": 25
    }, { "Player": "W. Bridge", "Games-Started": 23 }, {
      "Player": "P. Zabaleta",
      "Games-Started": 23
    }, { "Player": "V. Kompany", "Games-Started": 21 }, {
      "Player": "M. Richards", "Games-Started":
        19
    }, { "Player": "S. Wright-Phillips", "Games-Started": 19 }, "Carlos Tevez", ["Edin Dzeko", "£33,300,000"]],
    "year10": [{ "Player": "J. Hart", "Games-Started": 38 }, { "Player": "V. Kompany", "Games-Started": 37 }, {
      "Player": "Y. Tour&eacute;", "Games-Started": 35
    }, { "Player": "G. Barry", "Games-Started": 31 }, {
      "Player":
        "N. de Jong", "Games-Started": 30
    }, { "Player": "D. Silva", "Games-Started": 30 }, {
      "Player": "C. Tevez",
      "Games-Started": 30
    }, { "Player": "J. Milner", "Games-Started": 23 }, {
      "Player": "K. Tour&eacute;", "Games-Started":
        21
    }, { "Player": "P. Zabaleta", "Games-Started": 21 }, { "Player": "A. Kolarov", "Games-Started": 20 }, {
      "Player": "J. Lescott", "Games-Started": 20
    }, "Vincent Kompany", ["Sergio Aguero", "£36,000,000"]], "year11":
      [{ "Player": "J. Hart", "Games-Started": 38 }, { "Player": "D. Silva", "Games-Started": 33 }, {
        "Player": "S.Ag& uuml; ero", "Games-Started": 31
      }, { "Player": "G.Barry", "Games-Started": 31 }, {
        "Player": "V.Kompany",
        "Games-Started": 31
      }, { "Player": "Y. Tour&eacute;", "Games-Started": 31 }, {
        "Player": "J. Lescott", "Games-Started":
          30
      }, { "Player": "G. Clichy", "Games-Started": 28 }, { "Player": "S. Nasri", "Games-Started": 26 }, {
        "Player":
          "M. Richards", "Games-Started": 23
      }, { "Player": "P. Zabaleta", "Games-Started": 18 }, "Sergio Aguero", ["Javi Garcia", "£16, 000, 000"]], "year12": [{ "Player": "J.Hart", "Games-Started": 38 }, {
        "Player": "Y.Tour & eacute; ",
        "Games-Started": 32
      }, { "Player": "D. Silva", "Games-Started": 29 }, {
        "Player": "P. Zabaleta", "Games-Started":
          29
      }, { "Player": "C. Tevez", "Games-Started": 28 }, { "Player": "G. Barry", "Games-Started": 27 }, {
        "Player":
          "G. Clichy", "Games-Started": 26
      }, { "Player": "V. Kompany", "Games-Started": 26 }, {
        "Player": "S. Ag&uuml;ero",
        "Games-Started": 22
      }, { "Player": "S. Nasri", "Games-Started": 22 }, {
        "Player": "M. Nastasic", "Games-Started":
          21
      }, "Pablo Zabaleta", ["Fernandinho", "£30,000,000"]], "year13": [{
        "Player": "Y. Tour&eacute;", "Games-Started":
          35
      }, { "Player": "P. Zabaleta", "Games-Started": 34 }, { "Player": "J. Hart", "Games-Started": 31 }, {
        "Player":
          "Fernandinho", "Games-Started": 29
      }, { "Player": "S. Nasri", "Games-Started": 29 }, {
        "Player": "V. Kompany",
        "Games-Started": 28
      }, { "Player": "M. Demichelis", "Games-Started": 27 }, {
        "Player": "D. Silva", "Games-Started":
          26
      }, { "Player": "E. Dzeko", "Games-Started": 23 }, { "Player": "A. Kolarov", "Games-Started": 21 }, {
        "Player":
          "Á. Negredo", "Games-Started": 21
      }, "Yaya Toure", ["Wilfried Bony", "£25,000,000"]], "year14": [{
        "Player":
          "J. Hart", "Games-Started": 36
      }, { "Player": "D. Silva", "Games-Started": 32 }, {
        "Player": "S. Ag&uuml;ero",
        "Games-Started": 30
      }, { "Player": "P. Zabaleta", "Games-Started": 29 }, {
        "Player": "M. Demichelis", "Games-Started":
          28
      }, { "Player": "Y. Tour&eacute;", "Games-Started": 27 }, {
        "Player": "Fernandinho", "Games-Started": 25
      }, { "Player": "E. Mangala", "Games-Started": 24 }, { "Player": "G. Clichy", "Games-Started": 23 }, {
        "Player":
          "V. Kompany", "Games-Started": 23
      }, { "Player": "J. Navas", "Games-Started": 23 }, "Sergio Aguero", ["Kevin De Bruyne", "£54, 500, 000"]], "year15": [{ "Player": "J.Hart", "Games-Started": 35 }, {
        "Player": "Fernandinho",
        "Games-Started": 31
      }, { "Player": "N. Otamendi", "Games-Started": 30 }, {
        "Player": "S. Ag&uuml;ero", "Games-Started":
          29
      }, { "Player": "Y. Tour&eacute;", "Games-Started": 28 }, { "Player": "B. Sagna", "Games-Started": 27 },
      { "Player": "A. Kolarov", "Games-Started": 25 }, { "Player": "J. Navas", "Games-Started": 24 }, {
        "Player":
          "E. Mangala", "Games-Started": 23
      }, { "Player": "R. Sterling", "Games-Started": 23 }, {
        "Player": "K. De Bruyne",
        "Games-Started": 22
      }, { "Player": "D. Silva", "Games-Started": 22 }, "Kevin De Bruyne", ["John Stones", "£50,000,000"]],
    "year16": [{ "Player": "K. De Bruyne", "Games-Started": 33 }, {
      "Player": "Fernandinho", "Games-Started": 31
    }, { "Player": "D. Silva", "Games-Started": 31 }, { "Player": "N. Otamendi", "Games-Started": 29 }, {
      "Player":
        "R. Sterling", "Games-Started": 29
    }, { "Player": "A. Kolarov", "Games-Started": 27 }, {
      "Player": "S. Ag&uuml;ero",
      "Games-Started": 25
    }, { "Player": "G. Clichy", "Games-Started": 24 }, {
      "Player": "J. Stones", "Games-Started":
        23
    }, { "Player": "C. Bravo", "Games-Started": 22 }, { "Player": "Y. Tour&eacute;", "Games-Started": 22 },
      "David Silva", ["Aymeric Laporte", "£57,000,000"]], "year17": [{
        "Player": "K. De Bruyne", "Games-Started":
          36
      }, { "Player": "Ederson", "Games-Started": 36 }, { "Player": "Fernandinho", "Games-Started": 33 }, {
        "Player":
          "N. Otamendi", "Games-Started": 33
      }, { "Player": "K. Walker", "Games-Started": 32 }, {
        "Player": "R. Sterling",
        "Games-Started": 29
      }, { "Player": "D. Silva", "Games-Started": 28 }, {
        "Player": "L. San&eacute;", "Games-Started":
          27
      }, { "Player": "S. Ag&uuml;ero", "Games-Started": 22 }, { "Player": "F. Delph", "Games-Started": 21 }, {
        "Player": "G. Jesus", "Games-Started": 19
      }, "Kevin De Bruyne", ["Riyad Mahrez", "£60,000,000"]], "year96":
      ["Giorgi Kinkladze", ["Lee Bradbury", "£4,050,000"]], "year97": ["Michael Brown", ["Gareth Taylor", "£495,000"]],
    "year98": ["Gerard Wiekens", ["Steve Howey", "£4,140,000"]], "year99": ["Shaun Goater", ["Richard Dunne", "£4,050,000"]],
    "year01": ["Ali Benarbia", ["Nicolas Anelka", "£13,500,000"]]
  }, {
    "year92": [{
      "Player": "S. Bruce", "Games-Started":
        42
    }, { "Player": "G. Pallister", "Games-Started": 42 }, { "Player": "P. Schmeichel", "Games-Started": 42 },
    { "Player": "M. Hughes", "Games-Started": 41 }, { "Player": "P. Ince", "Games-Started": 41 }, {
      "Player": "B.McClair", "Games-Started": 41
    }, { "Player": "R.Giggs", "Games-Started": 40 }, {
      "Player": "D.Irwin", "Games-Started":
        40
    }, { "Player": "P. Parker", "Games-Started": 31 }, { "Player": "L. Sharpe", "Games-Started": 27 }, {
      "Player":
        "E. Cantona", "Games-Started": 21
    }, "Paul Ince", ["Eric Cantona", "£1,620,000"]], "year93": [{
      "Player": "D.Irwin", "Games-Started": 42
    }, { "Player": "S.Bruce", "Games-Started": 41 }, {
      "Player": "G.Pallister", "Games-Started":
        41
    }, { "Player": "P. Schmeichel", "Games-Started": 40 }, { "Player": "P. Ince", "Games-Started": 39 }, {
      "Player":
        "P. Parker", "Games-Started": 39
    }, { "Player": "M. Hughes", "Games-Started": 36 }, {
      "Player": "E. Cantona",
      "Games-Started": 34
    }, { "Player": "R. Keane", "Games-Started": 34 }, {
      "Player": "R. Giggs", "Games-Started":
        32
    }, { "Player": "A. Kanchelskis", "Games-Started": 28 }, "Eric Cantona", ["Roy Keane", "£7,650,000"]], "year94":
      [{ "Player": "G. Pallister", "Games-Started": 42 }, { "Player": "D. Irwin", "Games-Started": 40 }, {
        "Player":
          "P. Ince", "Games-Started": 36
      }, { "Player": "S. Bruce", "Games-Started": 35 }, {
        "Player": "B. McClair",
        "Games-Started": 35
      }, { "Player": "M. Hughes", "Games-Started": 33 }, {
        "Player": "P. Schmeichel", "Games-Started":
          32
      }, { "Player": "R. Giggs", "Games-Started": 29 }, { "Player": "L. Sharpe", "Games-Started": 26 }, {
        "Player":
          "A. Kanchelskis", "Games-Started": 25
      }, { "Player": "R. Keane", "Games-Started": 23 }, "Andrei Kanchelskis",
      ["Andy Cole", "£8,640,000"]], "year95": [{ "Player": "P. Schmeichel", "Games-Started": 36 }, {
        "Player": "A.Cole", "Games-Started": 32
      }, { "Player": "N.Butt", "Games-Started": 31 }, {
        "Player": "D.Irwin", "Games-Started":
          31
      }, { "Player": "S. Bruce", "Games-Started": 30 }, { "Player": "E. Cantona", "Games-Started": 30 }, {
        "Player":
          "G. Neville", "Games-Started": 30
      }, { "Player": "R. Giggs", "Games-Started": 30 }, {
        "Player": "R. Keane",
        "Games-Started": 29
      }, { "Player": "D. Beckham", "Games-Started": 26 }, {
        "Player": "L. Sharpe", "Games-Started":
          22
      }, "Eric Cantona", ["Tony Coton", "£518,000"]], "year96": [{
        "Player": "E. Cantona", "Games-Started": 36
      }, { "Player": "P. Schmeichel", "Games-Started": 36 }, { "Player": "D. Beckham", "Games-Started": 33 }, {
        "Player":
          "G. Neville", "Games-Started": 30
      }, { "Player": "D. Irwin", "Games-Started": 29 }, {
        "Player": "D. May", "Games-Started":
          28
      }, { "Player": "G. Pallister", "Games-Started": 27 }, { "Player": "R. Johnsen", "Games-Started": 26 }, {
        "Player": "R. Giggs", "Games-Started": 25
      }, { "Player": "O. Solskjaer", "Games-Started": 25 }, {
        "Player":
          "N. Butt", "Games-Started": 24
      }, "David Beckham", ["Karel Poborsky", "£3,600,000"]], "year97": [{
        "Player":
          "D. Beckham", "Games-Started": 34
      }, { "Player": "G. Neville", "Games-Started": 34 }, {
        "Player": "G. Pallister",
        "Games-Started": 33
      }, { "Player": "P. Schmeichel", "Games-Started": 32 }, {
        "Player": "N. Butt", "Games-Started":
          31
      }, { "Player": "A. Cole", "Games-Started": 31 }, { "Player": "R. Giggs", "Games-Started": 28 }, {
        "Player":
          "P. Scholes", "Games-Started": 28
      }, { "Player": "T. Sheringham", "Games-Started": 28 }, {
        "Player": "P. Neville",
        "Games-Started": 24
      }, { "Player": "H. Berg", "Games-Started": 23 }, "Ryan Giggs", ["Henning Berg", "£6,750,000"]],
    "year98": [{ "Player": "G. Neville", "Games-Started": 34 }, {
      "Player": "P. Schmeichel", "Games-Started": 34
    }, { "Player": "D. Beckham", "Games-Started": 33 }, { "Player": "R. Keane", "Games-Started": 33 }, {
      "Player":
        "D. Yorke", "Games-Started": 32
    }, { "Player": "J. Stam", "Games-Started": 30 }, {
      "Player": "A. Cole", "Games-Started":
        26
    }, { "Player": "D. Irwin", "Games-Started": 26 }, { "Player": "P. Scholes", "Games-Started": 24 }, {
      "Player":
        "N. Butt", "Games-Started": 22
    }, { "Player": "J. Blomqvist", "Games-Started": 20 }, "Roy Keane", ["Dwight Yorke", "£17, 330, 000"]], "year99": [{ "Player": "J.Stam", "Games-Started": 33 }, {
      "Player": "D.Beckham",
      "Games-Started": 30
    }, { "Player": "R. Giggs", "Games-Started": 30 }, {
      "Player": "M. Silvestre", "Games-Started":
        30
    }, { "Player": "D. Yorke", "Games-Started": 29 }, { "Player": "R. Keane", "Games-Started": 28 }, {
      "Player":
        "P. Scholes", "Games-Started": 27
    }, { "Player": "D. Irwin", "Games-Started": 25 }, {
      "Player": "P. Neville",
      "Games-Started": 25
    }, { "Player": "M. Bosnich", "Games-Started": 23 }, {
      "Player": "A. Cole", "Games-Started":
        23
    }, "Roy Keane", ["Mikael Silvestre", "£5,130,000"]], "year00": [{
      "Player": "G. Neville", "Games-Started":
        32
    }, { "Player": "F. Barthez", "Games-Started": 30 }, { "Player": "D. Beckham", "Games-Started": 29 }, {
      "Player":
        "R. Keane", "Games-Started": 28
    }, { "Player": "P. Scholes", "Games-Started": 28 }, {
      "Player": "W. Brown",
      "Games-Started": 25
    }, { "Player": "M. Silvestre", "Games-Started": 25 }, {
      "Player": "N. Butt", "Games-Started":
        24
    }, { "Player": "R. Giggs", "Games-Started": 24 }, { "Player": "P. Neville", "Games-Started": 24 }, {
      "Player":
        "T. Sheringham", "Games-Started": 23
    }, "Teddy Sheringham", ["Fabien Barthez", "£10,530,000"]], "year01": [{
      "Player": "F. Barthez", "Games-Started": 32
    }, { "Player": "G. Neville", "Games-Started": 31 }, {
      "Player":
        "M. Silvestre", "Games-Started": 31
    }, { "Player": "P. Scholes", "Games-Started": 30 }, {
      "Player": "L. Blanc",
      "Games-Started": 29
    }, { "Player": "R. van Nistelrooy", "Games-Started": 29 }, {
      "Player": "R. Keane", "Games-Started":
        28
    }, { "Player": "J. Ver&oacute;n", "Games-Started": 24 }, { "Player": "D. Beckham", "Games-Started": 23 }, "Nistelrooy", ["Juan Sebastian Veron", "£38, 340, 000"]], "year02": [{
      "Player": "M.Silvestre", "Games-Started":
        34
    }, { "Player": "R. van Nistelrooy", "Games-Started": 33 }, { "Player": "R. Giggs", "Games-Started": 32 },
    { "Player": "P. Scholes", "Games-Started": 31 }, { "Player": "F. Barthez", "Games-Started": 30 }, {
      "Player":
        "O. Solskjaer", "Games-Started": 29
    }, { "Player": "D. Beckham", "Games-Started": 27 }, {
      "Player": "R. Ferdinand",
      "Games-Started": 27
    }, { "Player": "J. O'Shea", "Games-Started": 26 }, {
      "Player": "W. Brown", "Games-Started":
        22
    }, { "Player": "J. Ver&oacute;n", "Games-Started": 21 }, "Ruud van Nistelrooy", ["Rio Ferdinand", "£41,400,000"]],
    "year03": [{ "Player": "M. Silvestre", "Games-Started": 33 }, {
      "Player": "T. Howard", "Games-Started": 32
    }, { "Player": "J. O'Shea", "Games-Started": 32 }, { "Player": "R. van Nistelrooy", "Games-Started": 31 },
    { "Player": "G. Neville", "Games-Started": 30 }, { "Player": "R. Giggs", "Games-Started": 29 }, {
      "Player":
        "P. Neville", "Games-Started": 29
    }, { "Player": "R. Keane", "Games-Started": 25 }, {
      "Player": "P. Scholes",
      "Games-Started": 24
    }, { "Player": "R. Ferdinand", "Games-Started": 20 }, {
      "Player": "Q. Fortune", "Games-Started":
        18
    }, "Cristiano Ronaldo", ["Cristiano Ronaldo", "£17,100,000"]], "year04": [{
      "Player": "M. Silvestre", "Games-Started":
        33
    }, { "Player": "R. Ferdinand", "Games-Started": 31 }, { "Player": "P. Scholes", "Games-Started": 29 }, {
      "Player": "R. Keane", "Games-Started": 28
    }, { "Player": "R. Carroll", "Games-Started": 26 }, {
      "Player": "R. Giggs", "Games-Started": 26
    }, { "Player": "G.Heinze", "Games-Started": 26 }, {
      "Player": "C.Ronaldo", "Games-Started":
        25
    }, { "Player": "W. Rooney", "Games-Started": 24 }, { "Player": "G. Neville", "Games-Started": 22 }, {
      "Player":
        "A. Smith", "Games-Started": 22
    }, "Gabriel Heinze", ["Wayne Rooney", "£33,300,000"]], "year05": [{
      "Player":
        "E. van der Sar", "Games-Started": 38
    }, { "Player": "R. Ferdinand", "Games-Started": 37 }, {
      "Player": "J.O'Shea", "Games-Started": 34
    }, { "Player": "W. Rooney", "Games-Started": 34 }, {
      "Player": "M. Silvestre",
      "Games-Started": 30
    }, { "Player": "R. van Nistelrooy", "Games-Started": 28 }, {
      "Player": "C. Ronaldo", "Games-Started":
        24
    }, { "Player": "G. Neville", "Games-Started": 24 }, { "Player": "D. Fletcher", "Games-Started": 23 }, {
      "Player": "Park Ji-Sung", "Games-Started": 23
    }, { "Player": "R. Giggs", "Games-Started": 22 }, "Wayne Rooney",
    ["Nemanja Vidic", "£9,450,000"]], "year06": [{ "Player": "R. Ferdinand", "Games-Started": 33 }, {
      "Player":
        "W. Rooney", "Games-Started": 33
    }, { "Player": "E. van der Sar", "Games-Started": 32 }, {
      "Player": "C. Ronaldo",
      "Games-Started": 31
    }, { "Player": "M. Carrick", "Games-Started": 29 }, {
      "Player": "P. Scholes", "Games-Started":
        29
    }, { "Player": "R. Giggs", "Games-Started": 25 }, { "Player": "N. Vidic", "Games-Started": 25 }, {
      "Player":
        "G. Neville", "Games-Started": 24
    }, { "Player": "P. Evra", "Games-Started": 22 }, {
      "Player": "L. Saha", "Games-Started":
        18
    }, "Cristiano Ronaldo", ["Michael Carrick", "£24,480,000"]], "year07": [{
      "Player": "R. Ferdinand", "Games-Started":
        35
    }, { "Player": "W. Brown", "Games-Started": 34 }, { "Player": "P. Evra", "Games-Started": 33 }, {
      "Player":
        "N. Vidic", "Games-Started": 32
    }, { "Player": "C. Ronaldo", "Games-Started": 31 }, {
      "Player": "C. Tevez",
      "Games-Started": 31
    }, { "Player": "E. van der Sar", "Games-Started": 29 }, {
      "Player": "R. Giggs", "Games-Started":
        26
    }, { "Player": "W. Rooney", "Games-Started": 25 }, { "Player": "M. Carrick", "Games-Started": 24 }, {
      "Player":
        "P. Scholes", "Games-Started": 22
    }, "Cristiano Ronaldo", ["Anderson", "£28,350,000"]], "year08": [{
      "Player":
        "E. van der Sar", "Games-Started": 33
    }, { "Player": "N. Vidic", "Games-Started": 33 }, {
      "Player": "C. Ronaldo",
      "Games-Started": 31
    }, { "Player": "D. Berbatov", "Games-Started": 29 }, {
      "Player": "P. Evra", "Games-Started":
        28
    }, { "Player": "D. Fletcher", "Games-Started": 25 }, { "Player": "W. Rooney", "Games-Started": 25 }, {
      "Player":
        "M. Carrick", "Games-Started": 24
    }, { "Player": "R. Ferdinand", "Games-Started": 24 }, {
      "Player": "Park Ji-Sung",
      "Games-Started": 21
    }, { "Player": "J. O'Shea", "Games-Started": 20 }, "Nemanja Vidić", ["Dimitar Berbatov",
      "£34,200,000"]], "year09": [{ "Player": "P. Evra", "Games-Started": 37 }, {
        "Player": "W. Rooney", "Games-Started":
          32
      }, { "Player": "A. Valencia", "Games-Started": 29 }, { "Player": "D. Fletcher", "Games-Started": 29 }, {
        "Player": "D. Berbatov", "Games-Started": 24
      }, { "Player": "P. Scholes", "Games-Started": 24 }, {
        "Player":
          "N. Vidic", "Games-Started": 24
      }, { "Player": "M. Carrick", "Games-Started": 22 }, {
        "Player": "E. van der Sar", "Games-Started": 21
      }, { "Player": "R.Giggs", "Games-Started": 20 }, {
        "Player": "Nani", "Games-Started":
          19
      }, "Wayne Rooney", ["Antonio Valencia", "£17,010,000"]], "year10": [{
        "Player": "N. Vidic", "Games-Started":
          35
      }, { "Player": "P. Evra", "Games-Started": 34 }, { "Player": "E. van der Sar", "Games-Started": 33 }, {
        "Player": "Nani", "Games-Started": 31
      }, { "Player": "W. Rooney", "Games-Started": 25 }, {
        "Player": "D. Berbatov",
        "Games-Started": 24
      }, { "Player": "D. Fletcher", "Games-Started": 24 }, {
        "Player": "M. Carrick", "Games-Started":
          23
      }, { "Player": "R. Ferdinand", "Games-Started": 19 }, { "Player": "R. Giggs", "Games-Started": 19 }, {
        "Player":
          "J. O'Shea", "Games-Started": 18
      }, "Javier Hernández", ["Bebe", "£7,920,000"]], "year11": [{
        "Player": "P.Evra", "Games-Started": 37
      }, { "Player": "W.Rooney", "Games-Started": 32 }, {
        "Player": "D.De Gea", "Games-Started":
          29
      }, { "Player": "R. Ferdinand", "Games-Started": 29 }, { "Player": "J. Evans", "Games-Started": 28 }, {
        "Player":
          "M. Carrick", "Games-Started": 27
      }, { "Player": "P. Jones", "Games-Started": 25 }, {
        "Player": "Nani", "Games-Started":
          24
      }, { "Player": "D. Welbeck", "Games-Started": 23 }, { "Player": "A. Valencia", "Games-Started": 22 }, {
        "Player": "A. Young", "Games-Started": 19
      }, "Antonio Valencia", ["David de Gea", "£22,500,000"]], "year12":
      [{ "Player": "R. van Persie", "Games-Started": 35 }, { "Player": "M. Carrick", "Games-Started": 34 }, {
        "Player":
          "P. Evra", "Games-Started": 34
      }, { "Player": "D. De Gea", "Games-Started": 28 }, {
        "Player": "Rafael", "Games-Started":
          27
      }, { "Player": "R. Ferdinand", "Games-Started": 26 }, { "Player": "A. Valencia", "Games-Started": 24 },
      { "Player": "W. Rooney", "Games-Started": 22 }, { "Player": "J. Evans", "Games-Started": 21 }, {
        "Player":
          "T. Cleverley", "Games-Started": 18
      }, { "Player": "N. Vidic", "Games-Started": 18 }, "Robin van Persie", ["Robin van Persie", "£24, 000, 000"]], "year13": [{ "Player": "D.De Gea", "Games-Started": 37 }, {
        "Player": "P.Evra",
        "Games-Started": 33
      }, { "Player": "W. Rooney", "Games-Started": 27 }, {
        "Player": "M. Carrick", "Games-Started":
          26
      }, { "Player": "P. Jones", "Games-Started": 26 }, { "Player": "N. Vidic", "Games-Started": 23 }, {
        "Player":
          "C. Smalling", "Games-Started": 21
      }, { "Player": "A. Valencia", "Games-Started": 20 }, {
        "Player": "T. Cleverley",
        "Games-Started": 18
      }, { "Player": "Rafael", "Games-Started": 18 }, {
        "Player": "R. van Persie", "Games-Started":
          18
      }, "David de Gea", ["Juan Mata", "£37,100,000"]], "year14": [{
        "Player": "D. De Gea", "Games-Started": 37
      }, { "Player": "W. Rooney", "Games-Started": 33 }, { "Player": "A. Valencia", "Games-Started": 29 }, {
        "Player":
          "J. Mata", "Games-Started": 27
      }, { "Player": "D. Blind", "Games-Started": 25 }, {
        "Player": "R. van Persie",
        "Games-Started": 25
      }, { "Player": "A. Young", "Games-Started": 23 }, {
        "Player": "P. Jones", "Games-Started":
          22
      }, { "Player": "C. Smalling", "Games-Started": 21 }, { "Player": "A. Di María", "Games-Started": 20 }, {
        "Player": "M. Rojo", "Games-Started": 20
      }, "David de Gea", ["Angel Di Maria", "£59,700,000"]], "year15": [{
        "Player": "D. Blind", "Games-Started": 35
      }, { "Player": "C. Smalling", "Games-Started": 35 }, {
        "Player":
          "D. De Gea", "Games-Started": 34
      }, { "Player": "J. Mata", "Games-Started": 34 }, {
        "Player": "A. Martial",
        "Games-Started": 29
      }, { "Player": "W. Rooney", "Games-Started": 27 }, {
        "Player": "M. Schneiderlin", "Games-Started":
          25
      }, { "Player": "M. Darmian", "Games-Started": 24 }, { "Player": "M. Carrick", "Games-Started": 22 }, {
        "Player":
          "J. Lingard", "Games-Started": 19
      }, { "Player": "A. Herrera", "Games-Started": 17 }, "David de Gea", ["Anthony Martial", "£57, 600, 000"]], "year16": [{ "Player": "D.De Gea", "Games-Started": 35 }, {
        "Player": "P.Pogba",
        "Games-Started": 29
      }, { "Player": "A. Valencia", "Games-Started": 27 }, {
        "Player": "A. Herrera", "Games-Started":
          27
      }, { "Player": "Z. Ibrahimovic", "Games-Started": 27 }, { "Player": "E. Bailly", "Games-Started": 24 },
      { "Player": "D. Blind", "Games-Started": 20 }, { "Player": "J. Mata", "Games-Started": 19 }, {
        "Player": "M.Carrick", "Games-Started": 18
      }, { "Player": "M.Fellaini", "Games-Started": 18 }, {
        "Player": "P.Jones",
        "Games-Started": 18
      }, { "Player": "A. Martial", "Games-Started": 18 }, {
        "Player": "M. Rojo", "Games-Started":
          18
      }, "Ander Herrera", ["Paul Pogba", "£93,250,000"]], "year17": [{
        "Player": "D. De Gea", "Games-Started":
          37
      }, { "Player": "N. Matic", "Games-Started": 35 }, { "Player": "R. Lukaku", "Games-Started": 33 }, {
        "Player":
          "A. Valencia", "Games-Started": 31
      }, { "Player": "C. Smalling", "Games-Started": 28 }, {
        "Player": "A. Young",
        "Games-Started": 28
      }, { "Player": "P. Pogba", "Games-Started": 25 }, {
        "Player": "P. Jones", "Games-Started":
          23
      }, { "Player": "J. Mata", "Games-Started": 23 }, { "Player": "J. Lingard", "Games-Started": 20 }, {
        "Player":
          "A. Martial", "Games-Started": 18
      }, "David de Gea", ["Romelu Lukaku", "£90,000,000"]]
  }];

  document.querySelector('.sff-slidetabs__nav-link').click();

})();