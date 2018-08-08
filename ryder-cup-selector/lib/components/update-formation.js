'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (rootElement, formation) {

  // Update rootElement.view.data with the newly selected formation
  rootElement.view.data.formation = formation;
  // Update rootElement.view.data with the position information associated with the newly selected formation
  rootElement.view.positions = rootElement.view.formations[(0, _findFormation2.default)(rootElement.view.formations, rootElement.view.data.formation)].positions;

  rootElement.setAttribute('data-formation', rootElement.view.data.formation);

  // Update the formation selector UI for selectors with more than one formation
  if ((0, _keys2.default)(rootElement.view.formations).length > 1 && _staticData2.default[rootElement.view.data.type].selectableFormations) {
    var formationSelect = rootElement.querySelector('[data-role="formation-select"]');
    var formationOptions = formationSelect.querySelectorAll('[data-role="formation-option"]');

    // Set option as selected
    formationOptions.forEach(function (option) {
      if (option.textContent == rootElement.view.data.formation) {
        option.setAttribute('selected', '');

        // Centre the selection
        formationSelect.scrollLeft = option.offsetLeft - formationSelect.clientWidth / 2 + option.clientWidth / 2;
      } else {
        option.removeAttribute('selected');
      }
    });

    // Refresh click events for direction controls
    (0, _addFormationEvents2.default)(rootElement);
  }

  // Add headings above each postion category (mobile list view)
  (0, _addCategoryHeadings2.default)(rootElement);

  var participants = rootElement.querySelectorAll('[data-role="participant"]');

  // Set participant display coordinates
  (0, _keys2.default)(rootElement.view.positions).forEach(function (position, index) {
    if (rootElement.view.positions[position].x && rootElement.view.positions[position].y) {
      participants[index].style.left = rootElement.view.positions[position].x + '%';
      participants[index].style.top = rootElement.view.positions[position].y + '%';
    }
  });
};

var _staticData = require('./static-data');

var _staticData2 = _interopRequireDefault(_staticData);

var _findFormation = require('./find-formation');

var _findFormation2 = _interopRequireDefault(_findFormation);

var _addCategoryHeadings = require('./add-category-headings');

var _addCategoryHeadings2 = _interopRequireDefault(_addCategoryHeadings);

var _addFormationEvents = require('./add-formation-events');

var _addFormationEvents2 = _interopRequireDefault(_addFormationEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }