"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = function (rootElement, name) {

  var formationsObject = (0, _defineProperty3.default)({}, name, {
    "name": [name],
    "positions": {}
  });

  for (var i = 0; i < rootElement.view.data.numOfParticipants; i++) {
    formationsObject[name]['positions'][i + 1] = {
      "id": i + 1,
      "group": name,
      "subGroup": name,
      "positionName": name,
      "positionDisplayName": "Participant",
      "positionVariations": [name]
    };
  }

  return formationsObject;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }