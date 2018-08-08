'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement) {

  var selectables = rootElement.querySelectorAll('[data-role="selectable-item"]');

  selectables.forEach(function (selectable) {

    var removeButton = selectable.querySelector('[data-role="remove-participant"]');

    if (removeButton) {
      // Add click events for 'remove' action
      removeButton.onclick = _toggleItem2.default.bind(this, rootElement, selectables, selectable, 'remove');
    } else {
      // Add click events for 'add' action
      selectable.onclick = _toggleItem2.default.bind(this, rootElement, selectables, selectable, 'add');
    }
  });
};

var _toggleItem = require('./toggle-item');

var _toggleItem2 = _interopRequireDefault(_toggleItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }