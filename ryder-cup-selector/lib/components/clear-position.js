'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (position) {

  var icon = position.querySelector('[data-role="participant-icon"]');
  var title = position.querySelector('[data-role="participant-title"]');
  var text = position.querySelector('[data-role="participant-text"]');

  position.removeAttribute('selected');
  icon.innerHTML = "";
  title.setAttribute('data-short-name', '');
  text.innerHTML = "";
};