'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement) {

  // Create overlay div
  var overlay = document.createElement('div');

  overlay.id = "overlay";
  overlay.classList.add('sdc-interactive-selector__overlay');
  overlay.setAttribute('hidden', '');
  overlay.setAttribute('data-role', 'overlay');

  // Create overlayInner
  overlay.innerHTML = '\n    <div class="sdc-interactive-selector__overlay-inner">\n      <div class="sdc-interactive-selector__overlay-header">\n        <h4 class="sdc-interactive-selector__overlay-heading">Selecting <span class="sdc-interactive-selector__overlay-heading-detail" data-role="overlay-heading"></span></h4>\n\n        <button class="sdc-interactive-selector__overlay-close" data-toggle="overlay">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M25.775 24.857c-.008-.202-.088-.372-.252-.537l-6.534-6.534-.355-.354.354-.354 7.03-7.03c-.033-.043-.07-.09-.112-.14-.166-.202-.346-.4-.536-.59-.384-.383-.614-.44-.716-.44-.212.008-.383.088-.547.252l-6.535 6.534-.354.354-.353-.354-7.03-7.03c-.043.033-.09.07-.14.112-.203.168-.402.35-.59.536-.286.287-.447.552-.44.726.008.202.088.373.252.537l6.533 6.534.354.353-.354.354-7.03 7.03c.032.043.07.09.11.14.17.204.35.402.537.59.384.383.613.44.716.44.212-.007.383-.087.547-.25l6.535-6.536.354-.353.354.354 7.03 7.032c.043-.033.09-.07.14-.112.2-.166.4-.346.59-.536.285-.287.445-.552.44-.727z"/></svg> close\n        </button>\n      </div>\n      <div class="sdc-interactive-selector__overlay-body" data-role="overlay-body"' + (rootElement.view.data.useParticipantImage ? 'data-images="participant"' : 'data-images="team"') + '>\n      </div>\n    </div>\n  ';

  rootElement.appendChild(overlay);
};

var _addSelectEvents = require('./add-select-events');

var _addSelectEvents2 = _interopRequireDefault(_addSelectEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }