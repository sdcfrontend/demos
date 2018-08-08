'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (rootElement, formation) {

  // Create a formation picker UI if there is more than 1 formation
  if ((0, _keys2.default)(rootElement.view.formations).length > 1 && _staticData2.default[rootElement.view.data.type].selectableFormations) {

    var formationPicker = '\n      <div class="sdc-interactive-selector__formation-picker" data-role="formation-picker">\n        <div class="sdc-interactive-selector__formation-wrap">\n          <button class="sdc-interactive-selector__formation-direction sdc-interactive-selector__formation-direction--left" data-role="formation-direction" data-direction="left">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path fill="#fff" d="M22 6.23c-.195.01-.363.087-.526.247l-.188.183-10.068 10.07c-.19.188-.293.44-.293.706s.104.518.293.707l10.134 10.134.127.124c.162.162.33.24.53.248.11 0 .34-.058.724-.442.187-.187.368-.386.537-.59.042-.05.08-.096.112-.138l-.496-.496-9.193-9.193-.354-.355.353-.354 9.198-9.197.485-.484c-.033-.043-.07-.09-.112-.14-.167-.203-.348-.402-.536-.59-.385-.384-.613-.44-.716-.44"/></svg>\n          </button>\n          <div class="sdc-interactive-selector__formation-inner">\n            <ul class="sdc-interactive-selector__formation-select" data-role="formation-select">\n            </ul>\n          </div>\n          <button class="sdc-interactive-selector__formation-direction sdc-interactive-selector__formation-direction--right" data-role="formation-direction" data-direction="right">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path fill="#fff" d="M12.3 6.23c.196.008.364.086.527.246l.188.183 10.07 10.068c.188.19.292.44.292.707s-.104.518-.293.707L12.95 28.276l-.127.124c-.163.16-.332.24-.53.247-.112 0-.34-.058-.725-.442-.187-.187-.368-.386-.537-.59l-.11-.138.496-.496 9.193-9.192.353-.354-.354-.354-9.2-9.198-.482-.482c.033-.042.07-.09.112-.14.167-.202.348-.4.536-.588.385-.385.613-.442.716-.442"/></svg>\n          </button>\n        </div>\n      </div>\n    ';

    var selectorBody = rootElement.querySelector('[data-role="selector-body"]');
    selectorBody.insertAdjacentHTML('afterbegin', formationPicker);

    var formationSelect = rootElement.querySelector('[data-role="formation-select"]');

    // Populate formation-select with formations
    (0, _keys2.default)(rootElement.view.formations).forEach(function (formation) {

      var formationOption = '\n        <li class="sdc-interactive-selector__formation-option" data-role="formation-option">' + rootElement.view.formations[formation].name + '</li>\n      ';

      formationSelect.insertAdjacentHTML('beforeend', formationOption);
    });

    // Get all newly created options
    var formationOptions = formationSelect.querySelectorAll('[data-role="formation-option"]');
  } else {
    var formationOptions = null;
  }

  // Set currently selected formation
  (0, _updateFormation2.default)(rootElement, formation);

  // Add click events for the formation selector if one is created
  if (formationOptions) {
    (0, _addFormationEvents2.default)(rootElement);
  }
};

var _addFormationEvents = require('./add-formation-events');

var _addFormationEvents2 = _interopRequireDefault(_addFormationEvents);

var _updateFormation = require('./update-formation');

var _updateFormation2 = _interopRequireDefault(_updateFormation);

var _staticData = require('./static-data');

var _staticData2 = _interopRequireDefault(_staticData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }