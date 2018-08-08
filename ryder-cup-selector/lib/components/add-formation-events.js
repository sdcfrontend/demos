'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (rootElement) {

  var formationOptions = rootElement.querySelectorAll('[data-role="formation-option"]');
  var formationLeftIncrement = rootElement.querySelector('[data-direction="left"]');
  var formationRightIncrement = rootElement.querySelector('[data-direction="right"]');
  var numberOfFormations = (0, _keys2.default)(rootElement.view.formations).length;

  formationOptions.forEach(function (option, index) {

    option.onclick = _updateFormation2.default.bind(this, rootElement, rootElement.view.formations[index].name);
  });

  // Loop through formations to find currently selected formation
  (0, _keys2.default)(rootElement.view.formations).forEach(function (formation, index) {
    if (rootElement.view.formations[formation].name == rootElement.view.data.formation) {
      // Enable left direction if selected formation is not first in the list
      if (index > 0) {
        formationLeftIncrement.onclick = _updateFormation2.default.bind(this, rootElement, rootElement.view.formations[index - 1].name);
        formationLeftIncrement.removeAttribute('disabled');
      } else {
        formationLeftIncrement.onclick = function () {
          return false;
        };
        formationLeftIncrement.setAttribute('disabled', '');
      }

      // Enable right direction if selected formation is not last in the list
      if (index < numberOfFormations - 1) {
        formationRightIncrement.onclick = _updateFormation2.default.bind(this, rootElement, rootElement.view.formations[index + 1].name);
        formationRightIncrement.removeAttribute('disabled');
      } else {
        formationRightIncrement.onclick = function () {
          return false;
        };
        formationRightIncrement.setAttribute('disabled', '');
      }
    }
  });
};

var _updateFormation = require('./update-formation.js');

var _updateFormation2 = _interopRequireDefault(_updateFormation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }