'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement, displayInvalidPositions) {

  // Run validation only if selector has accurate position data
  if (rootElement.view.positions["1"].subGroup == rootElement.view.data.formation) {
    return true;
  }

  var validateFormation = true;
  var invalidPositions = [];

  rootElement.view.data.participants.forEach(function (participant) {

    if (participant.listPosition != 0) {
      if (participant.position.filter.indexOf(rootElement.view.positions[participant.listPosition].positionName) == -1) {
        validateFormation = false;

        invalidPositions.push(participant.listPosition);
      }
    }
  });

  if (displayInvalidPositions) {
    var positions = rootElement.querySelectorAll('[data-role="participant"]');

    positions.forEach(function (position) {
      position.removeAttribute('invalid');
    });

    if (invalidPositions.length > 0) {
      invalidPositions.forEach(function (invalidPosition) {
        positions[invalidPosition - 1].setAttribute('invalid', '');
      });
    }
  }

  return validateFormation;
};