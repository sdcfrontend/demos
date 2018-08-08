'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = function (rootElement) {

  // Create shareable URL using the IDs of the selections and the chosen formation
  function createUrl(encode) {
    encode = typeof encode !== 'undefined' ? encode : true;

    var url = '';
    var participantIdList = '';
    var participantIdArray = [];
    var participantCount = 1;

    // Use the article URL if present
    if (rootElement.getAttribute('data-article-url')) {
      url = rootElement.getAttribute('data-article-url');
    } else {
      url = window.location.href.split('?')[0];
    }

    while (participantCount <= rootElement.view.data.numOfParticipants) {

      rootElement.view.data.participants.forEach(function (participant, index) {

        if (participant.listPosition != 0) {
          if (participant.listPosition == participantCount) {
            participantIdArray.push(participant.id);
          }
        }
      });

      participantCount++;
    }

    participantIdList = participantIdArray.join('-');

    url += '?participants=' + participantIdList;

    if (rootElement.view.data.formation) {
      url += '&formation=' + rootElement.view.data.formation;
    }

    url += '&id=' + rootElement.view.data.id;

    if (encode) {
      url = encodeURIComponent(url);
    }

    return url;
  }

  function copyUrl(trigger) {

    // click events
    trigger.addEventListener('click', copy, true);

    // event handler
    function copy(e) {
      // find target element
      var t = e.target,
          c = t.getAttribute('data-copy-target'),
          inp = c ? rootElement.querySelector(c) : null;

      // select text
      if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        var editable = inp.contentEditable;
        var readOnly = inp.readOnly;

        inp.contentEditable = true;
        inp.readOnly = true;

        var range = rootElement.createRange();
        range.selectNodeContents(inp);

        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        inp.setSelectionRange(0, 999999);
        inp.contentEditable = editable;
        inp.readOnly = readOnly;
      } else {
        inp.select();
      }

      // copy text
      document.execCommand('copy');
      inp.parentNode.setAttribute('data-copied', '');
      inp.blur();

      window.setTimeout(function () {
        inp.parentNode.removeAttribute('data-copied');
      }, 1000);
    }
  }

  // Create a javascript object of the completed selector
  function createPostObject() {

    // Create post object if it doesn't already exist
    if (!postObject) {
      var postObject = {};
    }

    // Copy rootElement.view.data into post.data
    postObject.id = rootElement.view.data.id;
    postObject.formation = rootElement.view.data.formation;
    postObject.restrictSelections = rootElement.view.data.restrictSelections;

    // Add participants to postObject that have a listPosition
    postObject.participants = [];

    var slots = rootElement.querySelectorAll('[data-role="participant"]');

    // Create participant data
    rootElement.view.data.participants.forEach(function (participant, index) {
      // Only use data from participants with a listPosition
      if (participant.listPosition != 0) {
        var newParticipant = {};

        newParticipant.id = participant.id;
        newParticipant.listPosition = participant.listPosition;
        newParticipant.category = {};

        newParticipant.category.positionName = rootElement.view.positions[participant.listPosition].id;
        newParticipant.category.positionDisplayName = rootElement.view.positions[participant.listPosition].positionName;

        postObject.participants.push(newParticipant);
      } else {
        postObject.participants.splice(index, 1);
      }
    });

    return postObject;
  }

  // Use fetch API to POST
  function postRequest(postData) {
    if (postData) {
      fetch(rootElement.getAttribute('data-post-url'), {
        credentials: 'include',
        method: 'POST',
        body: postData,
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': rootElement.getAttribute('data-token')
        })
      }).then(populateModal).catch(populateModal);
    }
  }

  // Function to update the modal with content based on the POST response
  function populateModal(response) {

    var modalContent = '';

    // Define default message text
    var messageTitle = "Thanks!";
    var messageText = "Your selection has been submitted. Share with your friends using the links below.";

    // Create a feedback message
    function modalMessage(modalTitle, modalText) {

      var message = '\n        <div class="sdc-interactive-selector__modal-message">\n          <h4 class="sdc-interactive-selector__modal-message-title">' + modalTitle + '</h4>\n          <p class="sdc-interactive-selector__modal-message-text">' + modalText + '</p>\n        </div>\n      ';

      return message;
    }

    // Create a success message and share content if request is successful
    if (response.status == 201) {

      // Social share links
      var modalFooter = '\n        <div class="sdc-interactive-selector__modal-footer">\n          <div class="sdc-interactive-selector__modal-share-links">\n            <div class="sdc-interactive-selector__modal-link-box">\n              <input id="share-url" type="text" class="sdc-interactive-selector__modal-input" value="' + createUrl(false) + '">\n              <button class="sdc-interactive-selector__modal-link-box-button" data-role="copy-url" data-copy-target="#share-url">Copy Link</button>\n            </div>\n\n            ' + (rootElement.getAttribute('data-facebook-share-url') ? '\n            <a href="' + rootElement.getAttribute('data-facebook-share-url').replace("{{shareUrl}}", createUrl()) + '" class="sdc-interactive-selector__modal-button sdc-interactive-selector__modal-button--facebook" target="_blank">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M24.49 18.32l.688-5.337h-5.285V9.575c0-1.545.43-2.598 2.646-2.598l2.823-.002V2.202c-.487-.065-2.164-.21-4.117-.21-4.075 0-6.863 2.488-6.863 7.056v3.936h-4.61v5.337h4.61v13.695h5.51V18.32h4.597z"/></svg>\n            </a>' : '') + '\n            ' + (rootElement.getAttribute('data-twitter-share-url') ? '\n            <a href="' + rootElement.getAttribute('data-twitter-share-url').replace("{{shareUrl}}", createUrl()) + '" class="sdc-interactive-selector__modal-button sdc-interactive-selector__modal-button--twitter" target="_blank">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M32.012 7.563c-1.102.49-2.287.82-3.53.968 1.27-.76 2.243-1.964 2.702-3.4-1.187.705-2.503 1.217-3.903 1.492-1.12-1.194-2.717-1.94-4.485-1.94-3.394 0-6.146 2.75-6.146 6.145 0 .482.053.95.158 1.4-5.108-.255-9.636-2.702-12.667-6.42-.528.907-.83 1.963-.83 3.09 0 2.13 1.084 4.012 2.733 5.114-1.007-.03-1.955-.307-2.784-.768l-.002.077c0 2.977 2.118 5.46 4.93 6.025-.516.14-1.06.216-1.62.216-.395 0-.78-.038-1.155-.11.782 2.443 3.052 4.22 5.74 4.27-2.102 1.647-4.752 2.63-7.632 2.63-.495 0-.984-.03-1.465-.086 2.72 1.744 5.95 2.76 9.42 2.76 11.305 0 17.487-9.364 17.487-17.485 0-.267-.006-.532-.018-.796 1.202-.866 2.244-1.948 3.068-3.18z"/></svg>\n            </a>' : '') + '\n            ' + (rootElement.getAttribute('data-whatsapp-share-url') ? '\n            <a href="' + rootElement.getAttribute('data-whatsapp-share-url').replace("{{shareUrl}}", createUrl()) + '" class="sdc-interactive-selector__modal-button sdc-interactive-selector__modal-button--whatsapp" target="_blank">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M32.34 14.91c-.076-1.186-.325-2.338-.687-3.468-.528-1.65-1.33-3.154-2.397-4.515-1.58-2.016-3.55-3.534-5.904-4.548-.99-.427-2.01-.75-3.07-.937-.61-.107-1.23-.16-1.847-.234-.17-.022-.342-.034-.514-.05h-.985c-.18.016-.36.035-.54.047-2.89.202-5.506 1.16-7.84 2.88C6.365 5.7 4.74 7.77 3.673 10.27c-.472 1.106-.798 2.258-.997 3.444-.168.995-.22 2-.176 3.006.112 2.506.8 4.846 2.073 7.01.048.082.05.15.02.235C3.73 26.54 2.864 29.117 2 31.693c-.018.055-.025.113-.038.17h.025c.042-.023.08-.053.125-.067 2.467-.79 4.934-1.576 7.4-2.363.204-.065.406-.135.61-.194.05-.015.12-.01.163.016 1.222.67 2.513 1.162 3.876 1.448.582.122 1.175.196 1.764.273.682.09 1.37.1 2.055.07.518-.024 1.036-.087 1.554-.144.765-.084 1.51-.262 2.245-.486 1.867-.57 3.567-1.46 5.08-2.702 2.592-2.126 4.29-4.818 5.097-8.07.172-.693.3-1.394.356-2.106.02-.257.034-.513.052-.768.004-.053.015-.106.023-.16V15.5c-.016-.197-.035-.393-.047-.59zm-7.102 5.607c-.06.33-.132.656-.21.982-.103.427-.342.77-.682 1.047-.497.406-1.044.73-1.663.895-.374.1-.767.148-1.154.168-.47.024-.92-.12-1.363-.268-.99-.335-1.963-.713-2.898-1.18-1.165-.583-2.176-1.376-3.092-2.292-1.388-1.387-2.527-2.96-3.443-4.695-.315-.597-.537-1.23-.644-1.897-.045-.286-.058-.577-.08-.792.024-1.308.496-2.338 1.383-3.19.253-.243.53-.422.877-.486.02-.004.04-.01.062-.01.415.015.83.026 1.245.053.074.005.17.057.212.117.115.168.233.34.304.53.347.93.66 1.874 1.026 2.796.136.343.13.63-.083.905-.278.36-.58.698-.873 1.044-.062.074-.137.138-.193.216-.132.187-.155.388-.038.59.6 1.04 1.27 2.025 2.15 2.855.83.785 1.775 1.396 2.814 1.866.1.046.2.09.3.13.247.1.462.05.64-.148.236-.263.47-.527.702-.796.195-.227.385-.458.573-.69.16-.196.355-.26.595-.183.076.024.153.048.223.085.987.53 1.976 1.06 2.958 1.6.35.19.42.356.352.75z"/></svg>\n            </a>' : '') + '\n          </div>\n        </div>\n      ';

      // Set to custom messages if they exist
      if (rootElement.view.data.successMessageTitle) {
        messageTitle = rootElement.view.data.successMessageTitle;
      }

      if (rootElement.view.data.successMessageText) {
        messageText = rootElement.view.data.successMessageText;
      }

      modalContent += modalMessage(messageTitle, messageText);
      modalContent += modalFooter;

      // Update modal with the success content
      (0, _createModal2.default)(rootElement, modalContent);

      // Add Clipboard to link copy button
      var copyButton = rootElement.querySelector('[data-role="copy-url"]');

      copyUrl(copyButton);
    } else {
      modalContent += modalMessage("Submission Failed", "Something went wrong. Please try submitting your selection again.");

      // Update modal with the fail content
      (0, _createModal2.default)(rootElement, modalContent);
    }
  }

  // Open a default modal (includes loading spinner)
  (0, _createModal2.default)(rootElement, false);

  // Make the request with the selector data javascript object as JSON
  if ((0, _validateFormation2.default)(rootElement, false)) {
    postRequest((0, _stringify2.default)(createPostObject()));
  } else {
    var failMessage = '\n      <div class="sdc-interactive-selector__modal-message">\n        <h4 class="sdc-interactive-selector__modal-message-title">Invalid selection found</h4>\n        <p class="sdc-interactive-selector__modal-message-text">There seems to be one or more selections in an invalid position. Please make another selection for the items highlighted.</p>\n      </div>\n    ';

    // Inform user that the seletion is invalid
    (0, _createModal2.default)(rootElement, failMessage);
  }
};

var _createModal = require('./create-modal.js');

var _createModal2 = _interopRequireDefault(_createModal);

var _validateFormation = require('./validate-formation');

var _validateFormation2 = _interopRequireDefault(_validateFormation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }