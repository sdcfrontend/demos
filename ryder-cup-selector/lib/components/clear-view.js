'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement, isConfirmed) {

  function clearSelector() {

    var positions = rootElement.querySelectorAll('[data-role="participant"]');
    var selectables = rootElement.querySelectorAll('[data-role="selectable-item"]');

    // Set complete value to false
    rootElement.view.data.complete = false;

    // Set all listPosition values to 0
    rootElement.view.data.participants.forEach(function (participant) {
      participant.listPosition = 0;
    });

    // Clear visible positions
    positions.forEach(function (position) {
      if (position.hasAttribute('selected')) {
        (0, _clearPosition2.default)(position);
      }
    });

    // Make all items in overlay selectable again
    selectables.forEach(function (selectable) {
      selectable.removeAttribute('selected');
    });

    // Jump to top
    var element = rootElement.querySelector('[data-role="selector-body"]');
    var elementRect = element.getBoundingClientRect();
    var selectedSlotTop = elementRect.top + window.pageYOffset;

    window.scrollTo(0, selectedSlotTop);

    // Reset action buttons
    (0, _addActionEvents2.default)(rootElement);

    (0, _validateFormation2.default)(rootElement, true);

    var modal = rootElement.querySelector('[data-role="modal"]');

    (0, _hideModal2.default)(modal);

    if (rootElement.view.lastSelected) {
      rootElement.view.lastSelected = "";
    }
  }

  if (isConfirmed) {

    clearSelector();
  } else {

    var confirmationMessage = '\n      <div class="sdc-interactive-selector__modal-message">\n        <h4 class="sdc-interactive-selector__modal-message-title">Are you sure?</h4>\n\n        <p class="sdc-interactive-selector__modal-message-text">This will remove all of the selections you\'ve made so far.</p>\n      </div>\n      <div class="sdc-interactive-selector__modal-footer">\n        <button class="sdc-interactive-selector__button sdc-interactive-selector__button--secondary" data-role="cancel-clear">No</button>\n        <button class="sdc-interactive-selector__button sdc-interactive-selector__button--primary" data-role="confirm-clear">Yes</button>\n      </div>\n    ';

    (0, _createModal2.default)(rootElement, confirmationMessage);

    var modal = rootElement.querySelector('[data-role="modal"]');

    var clearButton = rootElement.querySelector('[data-role="confirm-clear"]');
    var cancelButton = rootElement.querySelector('[data-role="cancel-clear"]');

    clearButton.onclick = clearSelector.bind(this, rootElement, true);
    cancelButton.onclick = _hideModal2.default.bind(this, modal);
  }
};

var _clearPosition = require('./clear-position');

var _clearPosition2 = _interopRequireDefault(_clearPosition);

var _addActionEvents = require('./add-action-events.js');

var _addActionEvents2 = _interopRequireDefault(_addActionEvents);

var _validateFormation = require('./validate-formation');

var _validateFormation2 = _interopRequireDefault(_validateFormation);

var _createModal = require('./create-modal');

var _createModal2 = _interopRequireDefault(_createModal);

var _hideModal = require('./hide-modal');

var _hideModal2 = _interopRequireDefault(_hideModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }