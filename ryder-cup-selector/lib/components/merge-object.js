"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj1, obj2) {
  if (obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  }
};