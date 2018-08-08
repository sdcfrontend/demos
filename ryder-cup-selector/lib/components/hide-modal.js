'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (modal) {

  modal.setAttribute('hidden', '');

  // Empty modalBody
  var modalBody = modal.querySelector('[data-role="modal-body"]');
  modalBody.innerHTML = "";
};