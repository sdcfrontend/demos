'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement) {

  var clearAction = rootElement.querySelector('[data-action="clear"]');
  var submitAction = rootElement.querySelector('[data-action="submit"]');

  // Returns true when selections empty
  function isEmpty() {
    var empty = true;

    rootElement.view.data.participants.forEach(function (participant) {
      if (participant.listPosition != 0) {
        empty = false;
        return empty;
      }
    });

    return empty;
  };

  // Returns true when selections completed
  function isComplete() {
    var complete = false;
    var selectedCount = 0;

    rootElement.view.data.participants.forEach(function (participant) {
      if (participant.listPosition != 0) {
        selectedCount++;
      }
    });

    if (selectedCount == rootElement.view.data.numOfParticipants) {
      complete = true;

      rootElement.view.data.complete = true;
    } else {
      rootElement.view.data.complete = false;
    }

    return complete;
  };

  // Only enable clear button when at least one selection has been made
  if (!isEmpty()) {
    clearAction.disabled = false;
    clearAction.classList.remove('sdc-interactive-selector__clear--disabled');
    clearAction.onclick = _clearView2.default.bind(this, rootElement, false);
  } else {
    clearAction.disabled = true;
    clearAction.classList.add('sdc-interactive-selector__clear--disabled');
    clearAction.removeEventListener('click', _clearView2.default.bind(this, rootElement, false));
  }

  // Only enable submit button when all required selections have been made
  if (isComplete()) {
    submitAction.disabled = false;
    submitAction.classList.remove('sdc-interactive-selector__submit--disabled');
    submitAction.onclick = _submitView2.default.bind(this, rootElement);
  } else {
    submitAction.disabled = true;
    submitAction.classList.add('sdc-interactive-selector__submit--disabled');
    submitAction.onclick = _submitView2.default.bind(this, rootElement);
  }
};

var _clearView = require('./clear-view');

var _clearView2 = _interopRequireDefault(_clearView);

var _submitView = require('./submit-view');

var _submitView2 = _interopRequireDefault(_submitView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }