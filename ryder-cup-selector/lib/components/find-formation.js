"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (formationsObject, requiredFormation) {

  var matchingFormation = "";

  (0, _keys2.default)(formationsObject).forEach(function (formation) {
    if (formationsObject[formation].name == requiredFormation) {
      matchingFormation = formation;
    }
  });

  return matchingFormation;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }