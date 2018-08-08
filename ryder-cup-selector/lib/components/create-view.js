'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (rootElement) {

  // Checks whether the given formation is in the formations object for a given type
  function isValidFormation(formations, formation) {

    var isValid = false;
    (0, _keys2.default)(formations).forEach(function (currentFormation) {
      if (formation === formations[currentFormation].name && (0, _keys2.default)(formations[currentFormation].positions).length == rootElement.view.data.numOfParticipants) {
        isValid = true;
      }
    });

    return isValid;
  }

  // Removes any formations from the formations object that have an invalid number of positions for the given numOfParticipants
  function validFormations(formations) {

    var validFormations = formations;

    (0, _keys2.default)(formations).forEach(function (formation) {
      if ((0, _keys2.default)(formations[formation].positions).length != rootElement.view.data.numOfParticipants) {
        delete formations[formation];
      }
    });

    return validFormations;
  }

  if (rootElement.view.data.staticData) {
    (0, _mergeObject2.default)(_staticData2.default, rootElement.view.data.staticData);
  }

  // Create blank type object if sport data does not exist
  if (_staticData2.default[rootElement.view.data.type] == null) {
    _staticData2.default[rootElement.view.data.type] = {};
  }

  var formation = "";

  if (rootElement.view.data.formation) {
    formation = rootElement.view.data.formation;
  } else {
    formation = "default";
  }

  // Set categories to false if a categories object is not found for the given type
  if (_staticData2.default[rootElement.view.data.type].categories == null) {
    rootElement.view.categories = false;
  } else {
    rootElement.view.categories = _staticData2.default[rootElement.view.data.type].categories;
  }

  if (_staticData2.default[rootElement.view.data.type].formations == null) {
    // Create generic formation and position data if a formations object is not found for the given type
    rootElement.view.categories = false;
    rootElement.view.formations = (0, _createGenericFormation2.default)(rootElement, formation);
    rootElement.view.positions = rootElement.view.formations[formation].positions;
  } else {
    if (isValidFormation(_staticData2.default[rootElement.view.data.type].formations, rootElement.view.data.formation)) {
      // Set formations value if formations are found for the given sport and the formation given is valid
      rootElement.view.formations = {};
      (0, _mergeObject2.default)(rootElement.view.formations, _staticData2.default[rootElement.view.data.type].formations);
      rootElement.view.formations = validFormations(rootElement.view.formations);
      rootElement.view.positions = rootElement.view.formations[(0, _findFormation2.default)(rootElement.view.formations, formation)].positions;
      rootElement.setAttribute('data-formation', rootElement.view.data.formation);
    } else {
      // Create generic formation and position data if a formations object is found but a valid formation is not given
      rootElement.view.categories = false;
      rootElement.view.formations = (0, _createGenericFormation2.default)(rootElement, formation);
      rootElement.view.positions = rootElement.view.formations[formation].positions;
    }
  }

  rootElement.view.openPositions = rootElement.view.formations[(0, _findFormation2.default)(rootElement.view.formations, rootElement.view.data.formation)].openPositions;

  // Set the selector type (used by css for type-specific styling)
  rootElement.setAttribute('data-type', rootElement.view.data.type);

  // Set the numOfParticipants (used by css for specific styling)
  rootElement.setAttribute('data-num-of-participants', rootElement.view.data.numOfParticipants);

  rootElement.id = rootElement.view.data.id;

  // Set an embed value (used by css to adjust styling depending on display mode)
  if (rootElement.view.data.embed) {
    rootElement.setAttribute('data-embed', '');
  }

  // Set a backgroundImage value
  if (rootElement.view.data.backgroundImage) {
    rootElement.style.backgroundColor = rootElement.view.data.backgroundImage;
  }

  // Create a header for the selector (can contain a title and sponsor image, can be given a background image)
  (0, _createHeader2.default)(rootElement);

  // Create the selectable positions
  (0, _createSelectionArea2.default)(rootElement);

  // Create footer that contains the action links
  (0, _createFooter2.default)(rootElement);

  // Create the selection overlay
  (0, _createOverlay2.default)(rootElement);

  // Set list positions from the querystring of a shareable URL
  (0, _setListPositions2.default)(rootElement, location);

  // Update the selectable positions with data
  (0, _updateView2.default)(rootElement, false);

  // Add events that toggle the selection overlay
  (0, _addToggleEvents2.default)(rootElement);

  // Set formation and create formation selection UI
  if (rootElement.view.data.formation) {
    (0, _createFormation2.default)(rootElement, rootElement.view.data.formation);
  }
};

var _staticData = require('./static-data');

var _staticData2 = _interopRequireDefault(_staticData);

var _mergeObject = require('./merge-object');

var _mergeObject2 = _interopRequireDefault(_mergeObject);

var _createGenericFormation = require('./create-generic-formation');

var _createGenericFormation2 = _interopRequireDefault(_createGenericFormation);

var _findFormation = require('./find-formation');

var _findFormation2 = _interopRequireDefault(_findFormation);

var _createHeader = require('./create-header');

var _createHeader2 = _interopRequireDefault(_createHeader);

var _createSelectionArea = require('./create-selection-area');

var _createSelectionArea2 = _interopRequireDefault(_createSelectionArea);

var _createFooter = require('./create-footer');

var _createFooter2 = _interopRequireDefault(_createFooter);

var _createOverlay = require('./create-overlay');

var _createOverlay2 = _interopRequireDefault(_createOverlay);

var _setListPositions = require('./set-list-positions');

var _setListPositions2 = _interopRequireDefault(_setListPositions);

var _updateView = require('./update-view');

var _updateView2 = _interopRequireDefault(_updateView);

var _addToggleEvents = require('./add-toggle-events');

var _addToggleEvents2 = _interopRequireDefault(_addToggleEvents);

var _createFormation = require('./create-formation');

var _createFormation2 = _interopRequireDefault(_createFormation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }