'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement, content) {

  var selectorBody = rootElement.querySelector('[data-role="selector-body"]');
  var modal = rootElement.querySelector('[data-role="modal"]');
  var actions = rootElement.querySelectorAll('[data-role="action"]');

  // Disable action buttons
  actions.forEach(function (action) {
    action.disabled = true;
  });

  function createFrame() {

    // Create modal frame - add spinner if no content has been sent
    var modal = '\n      <div class="sdc-interactive-selector__modal" data-role="modal">\n        <div class="sdc-interactive-selector__modal-inner" data-role="modal-inner">\n          <button class="sdc-interactive-selector__modal-close" data-role="modal-close">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M25.775 24.857c-.008-.202-.088-.372-.252-.537l-6.534-6.534-.355-.354.354-.354 7.03-7.03c-.033-.043-.07-.09-.112-.14-.166-.202-.346-.4-.536-.59-.384-.383-.614-.44-.716-.44-.212.008-.383.088-.547.252l-6.535 6.534-.354.354-.353-.354-7.03-7.03c-.043.033-.09.07-.14.112-.203.168-.402.35-.59.536-.286.287-.447.552-.44.726.008.202.088.373.252.537l6.533 6.534.354.353-.354.354-7.03 7.03c.032.043.07.09.11.14.17.204.35.402.537.59.384.383.613.44.716.44.212-.007.383-.087.547-.25l6.535-6.536.354-.353.354.354 7.03 7.032c.043-.033.09-.07.14-.112.2-.166.4-.346.59-.536.285-.287.445-.552.44-.727z"/></svg> close\n          </button>\n          <div class="sdc-interactive-selector__modal-body" data-role="modal-body">\n            <div class="sdc-interactive-selector__modal-spinner">\n              <div class="sdc-interactive-selector__modal-spinner-icon"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ';

    selectorBody.insertAdjacentHTML('beforeend', modal);

    var modal = rootElement.querySelector('[data-role="modal"]');
    var modalInner = modal.querySelector('[data-role="modal-inner"]');
    var modalClose = rootElement.querySelector('[data-role="modal-close"]');

    // Add a function and event listeners to close the selector
    function closeModal() {

      (0, _hideModal2.default)(modal);

      (0, _addActionEvents2.default)(rootElement);
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
      if (!modalInner.contains(e.target)) {
        closeModal();
      }
    });

    window.addEventListener('keyup', function (e) {
      if (e.keyCode == 27) {
        closeModal();
      }
    });
  }

  // Clear out any existing content, then add new content
  function addContent() {

    var modalBody = rootElement.querySelector('[data-role="modal-body"]');

    modalBody.innerHTML = "";
    modalBody.insertAdjacentHTML('beforeend', content);
  }

  // Scroll modal window into view when open
  function scrollToModal() {

    var modalBox = rootElement.querySelector('[data-role="modal"]');
    var modalRect = modalBox.getBoundingClientRect();
    var modalTop = modalRect.top + window.pageYOffset;
    var centre = modalTop - window.innerHeight / 2 + modalRect.height / 2;
    window.scrollTo(0, centre);
  }

  // Show existing modal or create new one
  if (modal) {
    // if the modal is not already in view, show it before adding content
    if (modal.hasAttribute('hidden')) {
      modal.removeAttribute('hidden');

      if (content) {
        addContent();
      }
    } else {
      if (content) {
        addContent();
      }
    }
  } else {
    createFrame();

    if (content) {
      addContent();
    }
  }

  scrollToModal();
};

var _addActionEvents = require('./add-action-events');

var _addActionEvents2 = _interopRequireDefault(_addActionEvents);

var _hideModal = require('./hide-modal');

var _hideModal2 = _interopRequireDefault(_hideModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }