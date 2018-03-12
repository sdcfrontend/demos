function setFlavourEvents() {

  var flavourOptions = document.querySelectorAll('[data-role="flavour-option"]');

  flavourOptions.forEach(function(flavourOption) {

    var flavour = flavourOption.getAttribute('data-flavour');

    flavourOption.addEventListener('click', function() {
      updatePieFlavours(flavour, flavourOptions, flavourOption);
    }, false);

  });

}

setFlavourEvents();
