'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (rootElement) {

  var toggles = rootElement.querySelectorAll('[data-toggle="overlay"]');
  var participants = [];
  var toggleSwitches = [];

  // Sort participant slots from other toggles (other toggles includes close buttons etc.)
  toggles.forEach(function (toggle) {
    if (toggle.getAttribute('data-role') == "participant") {
      participants.push(toggle);
    } else {
      toggleSwitches.push(toggle);
    }
  });

  // Add click event with position for remembering which slot was clicked
  (0, _keys2.default)(rootElement.view.positions).forEach(function (position, index) {
    participants[index].onclick = _toggleOverlay2.default.bind(this, rootElement, position);
  });

  // Add click event without index for simple on/off switches
  toggleSwitches.forEach(function (toggleSwitch) {
    toggleSwitch.onclick = _toggleOverlay2.default.bind(this, rootElement, false);
  });
};

var _toggleOverlay = require('./toggle-overlay');

var _toggleOverlay2 = _interopRequireDefault(_toggleOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }