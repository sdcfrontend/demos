"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (rootElement) {

  var slots = rootElement.querySelectorAll('[data-role="participant"]');

  // Set currentHeading to an empty string so that the first heading name found when looping rootElement.view.positions will be new
  var currentHeading = "";

  // Set headings
  (0, _keys2.default)(rootElement.view.positions).forEach(function (position, index) {

    // Find subGroup display name for the current position
    var subGroupDisplayName = "";

    if (rootElement.view.categories && rootElement.view.positions[position].subGroup != rootElement.view.data.formation) {
      subGroupDisplayName = rootElement.view.categories[rootElement.view.positions[position].group][rootElement.view.positions[position].subGroup].displayName;
    }

    // Set data-heading value on the matching slot if the subGroup display name has not be found before
    if (subGroupDisplayName != currentHeading) {
      slots[index].setAttribute('data-heading', subGroupDisplayName);
      currentHeading = subGroupDisplayName;
    } else {
      // Remove an existing data-heading attribute if no match is found
      slots[index].removeAttribute('data-heading');
    }
  });
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }