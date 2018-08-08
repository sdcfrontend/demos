'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (rootElement, overlayBody) {

  // Create a selectable participant
  function createOverlayParticipant(participant) {

    var overlayParticipant = '\n      <li class="sdc-interactive-selector__overlay-participant" data-role="selectable-item" data-participant-id="' + participant.id + '"' + (participant.listPosition != 0 ? ' selected' : '') + '>\n        <img src="' + (rootElement.view.data.useParticipantImage ? participant.image : participant.team.image) + '" alt="' + participant.longName + '" class="sdc-interactive-selector__overlay-participant-image" data-role="participant-image">\n        <p class="sdc-interactive-selector__overlay-participant-text">\n          <span class="sdc-interactive-selector__overlay-participant-name">' + participant.longName + '</span>\n          ' + (rootElement.view.data.useTeamName && participant.team.name ? '<span class="sdc-interactive-selector__overlay-participant-detail">' + participant.team.name + '</span>' : '') + '\n        </p>\n        ' + (participant.listPosition == rootElement.view.activeSlot ? '\n        <button class="sdc-interactive-selector__overlay-remove-participant" data-role="remove-participant">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M24.866 23.835c-.008-.202-.088-.372-.252-.536l-5.827-5.828-.354-.354.354-.354 6.324-6.324c-.032-.042-.07-.088-.11-.138-.167-.202-.347-.4-.537-.59-.384-.385-.614-.442-.716-.442-.212.008-.383.088-.547.252l-5.827 5.827-.354.353-.355-.354-6.324-6.325-.14.112c-.2.17-.4.35-.587.537-.287.287-.448.552-.44.726.007.202.087.373.25.537l5.828 5.827.355.354-.354.354-6.323 6.324c.033.042.07.09.112.14.167.203.347.4.535.588.384.385.613.442.716.442.213-.008.384-.088.548-.252l5.828-5.828.354-.354.354.354 6.324 6.324c.042-.033.088-.07.138-.112.203-.166.4-.346.59-.536.285-.287.446-.552.44-.727z"/><path d="M16.864 3.022c7.72 0 14 6.28 14 14s-6.28 14-14 14-14-6.28-14-14 6.28-14 14-14m0-2c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.164-16-16-16z"/></svg> remove\n        </button>' : '') + '\n      </li>\n    ';

    return overlayParticipant;
  }

  // Create a sub heading
  function createOverlaySubHeading(headingText) {

    var overlaySubHeading = '<h4 class="sdc-interactive-selector__overlay-sub-heading" data-role="overlay-sub-heading">' + headingText + '</h4>';

    return overlaySubHeading;
  }

  // Turns an object into an array, sorted by a given property
  function createOrderedArray(object, property) {
    var arr = [];

    (0, _keys2.default)(object).forEach(function (innerObject) {
      arr.push(object[innerObject]);
    });

    arr.sort(function (a, b) {
      return a[property] - b[property];
    });

    return arr;
  }

  // Create a relevant, ordered array of categories
  function assignAndCreateOrderedCategoriesArray(participants) {

    var categoriesObject = {};

    // Find all unique position names that occur in the array of filtered participants
    (0, _keys2.default)(rootElement.view.categories).forEach(function (group) {
      (0, _keys2.default)(rootElement.view.categories[group]).forEach(function (groupKey) {

        var subGroup = rootElement.view.categories[group][groupKey];
        // If value of the current key is an object
        if (subGroup !== null && (typeof subGroup === 'undefined' ? 'undefined' : (0, _typeof3.default)(subGroup)) === 'object') {

          // Loop through participants for each subGroup object found
          participants.forEach(function (filteredParticipant, index) {

            // Find their corresponding subGroup displayName and order field
            if (subGroup.positions.indexOf(filteredParticipant.position.displayName) !== -1) {
              // Create object of category data
              categoriesObject[subGroup.displayName] = {};
              categoriesObject[subGroup.displayName].displayName = subGroup.displayName;
              categoriesObject[subGroup.displayName].order = subGroup.order;

              // Store the matching category name with the associated participant object
              participants[index].category = subGroup.displayName;
            }
          });
        }
      });
    });

    var orderedCategoriesArray = createOrderedArray(categoriesObject, "order");

    return orderedCategoriesArray;
  }

  // Create list of participants
  function outputParticipants(participants, category) {

    var overlayList = document.createElement('ul');

    overlayList.classList.add('sdc-interactive-selector__overlay-participants');

    participants.forEach(function (participant) {

      // Output particpants that match the given category, or output all given participants if no category is provided
      if (category) {
        if (participant.category === category.displayName && participant.listPosition != rootElement.view.activeSlot) {
          overlayList.insertAdjacentHTML('beforeend', createOverlayParticipant(participant));
        }
      } else {
        if (participant.listPosition != rootElement.view.activeSlot) {
          overlayList.insertAdjacentHTML('beforeend', createOverlayParticipant(participant));
        }
      }
    });

    overlayBody.appendChild(overlayList);
  }

  // Show the currently selected participant at the top of the list, if the slot has an existing selection
  function outputCurrentlySelectedParticipant() {

    rootElement.view.data.participants.forEach(function (participant) {

      if (participant.listPosition == rootElement.view.activeSlot) {
        overlayBody.insertAdjacentHTML("beforeend", '\n          <div class="sdc-interactive-selector__overlay-currently-selected">\n            ' + createOverlaySubHeading('Currently Selected') + '\n\n            <ul class="sdc-interactive-selector__overlay-participants">\n              ' + createOverlayParticipant(participant) + '\n            </ul>\n          </div>\n        ');
      }
    });
  }

  function outputCurrentCategoryHeadingAndParticipants(categories, category, participants) {

    // Create heading for the current category
    if (categories.length > 1) {
      overlayBody.insertAdjacentHTML("beforeend", createOverlaySubHeading(category.displayName));
    }

    outputParticipants(participants, category);
  }

  // Create categorised list of participants
  function outputCategorisedParticipants(participants, priorityCategory) {

    var categories = assignAndCreateOrderedCategoriesArray(participants);
    if (priorityCategory != undefined) {

      // List participants matching the priorityCategory at the top
      categories.forEach(function (category) {

        if (category.displayName === priorityCategory.displayName) {
          outputCurrentCategoryHeadingAndParticipants(categories, category, participants);
        }
      });

      // List other valid categories below the priority list
      categories.forEach(function (category) {

        if (category.displayName !== priorityCategory.displayName) {
          outputCurrentCategoryHeadingAndParticipants(categories, category, participants);
        }
      });
    } else {

      categories.forEach(function (category) {

        outputCurrentCategoryHeadingAndParticipants(categories, category, participants);
      });
    }
  }

  var overlayHeading = rootElement.querySelector('[data-role="overlay-heading"]');

  // Set overlay heading to the subGroup being selected for
  overlayHeading.textContent = rootElement.view.positions[rootElement.view.activeSlot].positionDisplayName;

  outputCurrentlySelectedParticipant();

  // Create a filtered or unfiltered list
  if (rootElement.view.data.restrictSelections) {

    var filteredParticipantsArray = [];

    // Find participants with currently selected position in their filter
    rootElement.view.data.participants.forEach(function (participant, index) {

      if (rootElement.view.openPositions) {
        filteredParticipantsArray.push(participant);
      } else {
        var positionVariations = rootElement.view.positions[rootElement.view.activeSlot].positionVariations;

        for (var i = 0; i < positionVariations.length; i++) {
          if (participant.position.filter.indexOf(positionVariations[i]) !== -1) {
            filteredParticipantsArray.push(participant);

            break;
          }
        }
      }
    });

    if (rootElement.view.data.notCategorisedParticipants || !rootElement.view.categories) {
      outputParticipants(filteredParticipantsArray, false);
    } else {
      // Display categorised list of participants with a matching filter
      outputCategorisedParticipants(filteredParticipantsArray, rootElement.view.categories[rootElement.view.positions[rootElement.view.activeSlot].group][rootElement.view.positions[rootElement.view.activeSlot].subGroup]);
    }
  } else {

    if (rootElement.view.data.notCategorisedParticipants || !rootElement.view.categories) {
      outputParticipants(rootElement.view.data.participants, false);
    } else {
      // Display categorised list of all participants
      outputCategorisedParticipants(rootElement.view.data.participants, rootElement.view.categories[rootElement.view.positions[rootElement.view.activeSlot].group][rootElement.view.positions[rootElement.view.activeSlot].subGroup]);
    }
  }

  // Add click events to items in the overlay
  (0, _addSelectEvents2.default)(rootElement);
};

var _staticData = require('./static-data');

var _staticData2 = _interopRequireDefault(_staticData);

var _findFormation = require('./find-formation');

var _findFormation2 = _interopRequireDefault(_findFormation);

var _addSelectEvents = require('./add-select-events');

var _addSelectEvents2 = _interopRequireDefault(_addSelectEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }