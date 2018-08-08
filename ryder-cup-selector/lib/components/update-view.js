'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement, toggle) {

  var positions = rootElement.querySelectorAll('[data-role="participant"]');

  // Function to create image element
  function generateImage(src, alt, create) {
    var participantImage = '\n      <img src="' + src + '" alt="' + alt + '" class="sdc-interactive-selector__participant-image" data-role="participant-image">\n    ';

    return participantImage;
  }

  // Loop rootElement.view.data and fill participants that have been selected
  rootElement.view.data.participants.forEach(function (participant) {

    // Display selected items
    if (participant.listPosition != 0) {
      var currentParticipant = participant.listPosition - 1;

      if (!positions[currentParticipant].hasAttribute('selected')) {
        positions[currentParticipant].setAttribute('selected', '');
      }

      // Check for existing image element
      var participantImage = positions[currentParticipant].querySelector('[data-role="participant-image"]');
      // Check for existing title element
      var participantTitle = positions[currentParticipant].querySelector('[data-role="participant-title"]');

      if (!participantImage) {
        var participantIcon = positions[currentParticipant].querySelector('[data-role="participant-icon"]');

        // Create player image or team image
        if (rootElement.view.data.useParticipantImage) {
          if (participant.image) {
            participantIcon.insertAdjacentHTML('beforeend', generateImage(participant.image, participant.longName));
          }
        } else {
          if (participant.team.image) {
            participantIcon.insertAdjacentHTML('beforeend', generateImage(participant.team.image, participant.team.longName));
          }
        }
      } else {
        // Update player image or team image
        participantImage.alt = participant.longName;

        if (rootElement.view.data.useParticipantImage) {
          if (participant.image) {
            participantImage.src = participant.image;
            participantImage.alt = participant.longName;
          }
        } else {
          if (participant.team.image) {
            participantImage.src = participant.team.image;
            participantImage.alt = participant.team.longName;
          }
        }
      }

      // Create title element if no exisiting title found
      if (!participantTitle) {
        // Create main paragraph
        var participantTitle = '\n          <p class="sdc-interactive-selector__participant-title" data-role="participant-title" data-short-name="' + participant.shortName + '">\n            <span class="sdc-interactive-selector__participant-text" data-role="participant-text">' + participant.longName + '</span>\n          </p>\n        ';

        positions[currentParticipant].insertAdjacentHTML('beforeend', participantTitle);
      } else {
        // Update span text and data attribute
        var participantItemText = participantTitle.querySelector('[data-role="participant-text"]');

        participantTitle.setAttribute('data-short-name', participant.shortName);
        participantItemText.textContent = participant.longName;
      }
    }
  });

  (0, _validateFormation2.default)(rootElement, true);

  // Update action buttons
  (0, _addActionEvents2.default)(rootElement);

  // Toggle overlay if required
  if (toggle) {
    (0, _toggleOverlay2.default)(rootElement, false);
  }
};

var _addActionEvents = require('./add-action-events');

var _addActionEvents2 = _interopRequireDefault(_addActionEvents);

var _toggleOverlay = require('./toggle-overlay.js');

var _toggleOverlay2 = _interopRequireDefault(_toggleOverlay);

var _validateFormation = require('./validate-formation');

var _validateFormation2 = _interopRequireDefault(_validateFormation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }