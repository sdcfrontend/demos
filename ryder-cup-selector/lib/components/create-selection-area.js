'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (rootElement) {

  // Create selection area frame
  var selectorBody = document.createElement('div');
  selectorBody.classList.add('sdc-interactive-selector__selector-body');
  selectorBody.setAttribute('data-role', 'selector-body');

  selectorBody.innerHTML = '\n    <div class="sdc-interactive-selector__selection-area" data-role="selection-area">\n      <div class="sdc-interactive-selector__selection-area-inner">\n        <ul class="sdc-interactive-selector__participants-list' + (rootElement.view.data.useParticipantImage && !rootElement.view.data.useCustomParticipants ? ' sdc-interactive-selector__participants-list--participant-images' : '') + '" data-role="participants-list">\n        </ul>\n      </div>\n    </div>\n  ';

  rootElement.appendChild(selectorBody);

  var participantsList = rootElement.querySelector('[data-role="participants-list"]');

  // Add selectable positions
  (0, _keys2.default)(rootElement.view.positions).forEach(function (position) {
    var participantsItem = '\n      <li id="participant-' + position + '" class="sdc-interactive-selector__participants-item" data-role="participant" data-toggle="overlay">\n        <span class="sdc-interactive-selector__participant-icon" data-role="participant-icon" data-number="' + rootElement.view.positions[position].label + '"></span>\n      </li>\n    ';

    participantsList.insertAdjacentHTML('beforeend', participantsItem);
  });
};

var _staticData = require('./static-data.js');

var _staticData2 = _interopRequireDefault(_staticData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }