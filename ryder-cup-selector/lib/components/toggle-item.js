'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement, selectables, selectable, action) {

  // Perform remove action if selectable is currently selected, otherwise perform add action
  if (action === 'remove') {

    var overlayBody = rootElement.querySelector('[data-role="overlay-body"]');
    var positions = rootElement.querySelectorAll('[data-role="participant"]');

    rootElement.view.data.participants.forEach(function (participant) {
      if (participant.id == selectable.getAttribute('data-participant-id')) {
        // Asign the new participant a listPosition value
        participant.listPosition = 0;
      }
    });

    selectable.removeAttribute('selected');
    (0, _clearPosition2.default)(positions[rootElement.view.activeSlot - 1]);

    // Update overlay after removing selection
    overlayBody.innerHTML = "";
    (0, _updateOverlay2.default)(rootElement, overlayBody);

    // Update view but don't close overlay
    (0, _updateView2.default)(rootElement, false);
  }

  if (action === 'add') {

    if (!selectable.hasAttribute('selected')) {

      var deselectedOld = false;
      var selectedNew = false;

      rootElement.view.data.participants.forEach(function (participant) {
        // If previous participant hasn't been found
        if (!deselectedOld) {
          if (participant.listPosition == rootElement.view.activeSlot) {
            // Set listPosition of previous participant to 0
            participant.listPosition = 0;
            // Find selectable that matches previous participant and return to selectable state
            selectables.forEach(function (selectable) {
              if (participant.id == selectable.getAttribute('data-participant-id')) {
                selectable.removeAttribute('selected');
              }
            });

            // Previous selected item has been found
            deselectedOld = true;
          }
        }

        // If new participant hasn't been found
        if (!selectedNew) {
          if (participant.id == selectable.getAttribute('data-participant-id')) {
            // Asign the new participant a listPosition value
            participant.listPosition = rootElement.view.activeSlot;

            // Newly selected item has been found
            selectedNew = true;
          }
        }
      });

      // Mark selectable in the list as selected
      selectable.setAttribute('selected', '');

      // Remember last selected slot for selectors with open positions
      if (rootElement.view.openPositions) {
        rootElement.view.lastSelected = selectable.getAttribute('data-participant-id');
      }

      // Update view and close overlay
      (0, _updateView2.default)(rootElement, true);
    } else {
      return;
    }
  }
};

var _clearPosition = require('./clear-position');

var _clearPosition2 = _interopRequireDefault(_clearPosition);

var _findFormation = require('./find-formation');

var _findFormation2 = _interopRequireDefault(_findFormation);

var _updateView = require('./update-view');

var _updateView2 = _interopRequireDefault(_updateView);

var _updateOverlay = require('./update-overlay');

var _updateOverlay2 = _interopRequireDefault(_updateOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }