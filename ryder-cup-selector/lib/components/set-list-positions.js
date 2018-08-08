'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (rootElement, url) {

  var failMessage = '\n    <div class="sdc-interactive-selector__modal-message">\n      <h4 class="sdc-interactive-selector__modal-message-title">URL not valid</h4>\n      <p class="sdc-interactive-selector__modal-message-text">There seems to be a problem with the URL. Please check it was typed correctly.</p>\n    </div>\n  ';

  // Find query string parameter
  function getUrlParameter(name, url) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(url.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  // Check formation parameter is a valid formation
  function checkFormation(urlFormation) {
    var foundFormation = false;

    (0, _keys2.default)(rootElement.view.formations).forEach(function (formation) {
      if (urlFormation === rootElement.view.formations[formation].name) {
        foundFormation = true;
      }
    });

    return foundFormation;
  }

  function unsetListPositions() {
    rootElement.view.data.participants.forEach(function (participant) {
      participant.listPosition = 0;
    });
  }

  var id = getUrlParameter('id', url);

  // Only attempt to set positions if id matches
  if (id == rootElement.view.data.id) {
    // Get the value of formation and participants parameters
    var formation = getUrlParameter('formation', url);
    var participants = getUrlParameter('participants', url);

    // Return and load blank selector if neither parameter exists
    if (formation || participants) {
      var participantsArray = [];
      var participantsIdArray = participants.split('-');
      var participantCount = 0;

      // Reset any listPositions from data
      unsetListPositions();

      if (participantsIdArray.length === 1) {
        participantsIdArray = participants.split('|');
      }
      // Set formation in the view object if it passes checkFormation
      if (checkFormation(formation)) {
        rootElement.view.data.formation = formation;
      } else {
        // Unset all listPositions to return to a blank selector
        unsetListPositions();

        // Inform user that the URL was invalid
        (0, _createModal2.default)(rootElement, failMessage);

        return;
      }

      // Loop through the IDs found in the URL
      participantsIdArray.forEach(function (participantId) {
        // Find the current ID in the participants data
        rootElement.view.data.participants.forEach(function (participant) {
          // If a match is found, set the matching participant's listPosition to the value of participantCount
          if (participantId == participant.id) {
            // Add to participantCount if the current count does not exceed the given number of participants for the selector
            if (participantCount <= rootElement.view.data.numOfParticipants) {
              participantCount++;
            }

            participant.listPosition = participantCount;
          }
        });
      });

      // URL is invalid if the participantCount value is not equal to the given number of participants for the selector
      if (participantCount !== rootElement.view.data.numOfParticipants) {
        // Unset all listPositions to return to a blank selector
        unsetListPositions();

        // Inform user that the URL was invalid
        (0, _createModal2.default)(rootElement, failMessage);
      }
    } else {
      return;
    }
  } else {
    return;
  }
};

var _createModal = require('./create-modal');

var _createModal2 = _interopRequireDefault(_createModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }