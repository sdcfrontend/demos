'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement, position) {

  var overlay = rootElement.querySelector('[data-role="overlay"]');
  var overlayBody = rootElement.querySelector('[data-role="overlay-body"]');

  if (overlay.hasAttribute('hidden')) {

    // Get information on the slot that was clicked from staticData
    rootElement.view.activeSlot = position;

    // Create content for the overlay based on the position that was selected
    (0, _updateOverlay2.default)(rootElement, overlayBody);

    overlay.removeAttribute('hidden');
    rootElement.classList.add('sdc-interactive-selector--overlay-open');

    // Bring overlay into view
    if (rootElement.view.lastSelected) {
      var lastSelected = rootElement.querySelector('[data-participant-id="' + rootElement.view.lastSelected + '"]');
      var lastSelectedRect = lastSelected.getBoundingClientRect();
      var lastSelectedTop = lastSelectedRect.top + window.pageYOffset;
      var centre = lastSelectedTop - window.innerHeight / 2 + lastSelectedRect.height / 2;
      window.scrollTo(0, centre);
    } else {
      var overlayRect = overlay.getBoundingClientRect();
      var overlayTop = overlayRect.top + window.pageYOffset;
      window.scrollTo(0, overlayTop);
    }
  } else {

    overlay.setAttribute('hidden', '');
    rootElement.classList.remove('sdc-interactive-selector--overlay-open');

    overlayBody.innerHTML = "";

    // Jump to selected participant, or action buttons if complete
    if (rootElement.view.data.complete) {
      var scrollTarget = rootElement.querySelector('[data-role="footer"]');
      var footerRect = scrollTarget.getBoundingClientRect();
      var footerTop = footerRect.bottom + window.pageYOffset;
      var centre = footerTop - window.innerHeight;
    } else {
      var scrollTarget = rootElement.querySelector("#participant-" + rootElement.view.activeSlot);
      var selectedSlotRect = scrollTarget.getBoundingClientRect();
      var selectedSlotTop = selectedSlotRect.top + window.pageYOffset;
      var centre = selectedSlotTop - window.innerHeight / 2 + selectedSlotRect.height / 2;
    }

    window.scrollTo(0, centre);
  }
};

var _staticData = require('./static-data.js');

var _staticData2 = _interopRequireDefault(_staticData);

var _updateOverlay = require('./update-overlay.js');

var _updateOverlay2 = _interopRequireDefault(_updateOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }