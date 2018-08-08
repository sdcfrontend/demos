'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement) {

  var header = document.createElement('div');

  header.classList.add('sdc-interactive-selector__header');
  header.setAttribute('data-role', 'header');

  // If a background image is present, apply additional styling
  if (rootElement.view.data.headerBackground) {
    header.classList.add('sdc-interactive-selector__header--feature');
    header.style.backgroundImage = 'url(' + rootElement.view.data.headerBackground + ')';
  }

  header.innerHTML = '\n    <div class="sdc-interactive-selector__header-inner">\n      <div class="sdc-interactive-selector__title-wrap">\n        ' + (rootElement.view.data.sponsorImage ? '\n          ' + (rootElement.view.data.sponsorLink ? '<a href="' + rootElement.view.data.sponsorLink + '" target="_blank" class="sdc-interactive-selector__header-sponsor-link">' : '') + '\n            <img src="' + rootElement.view.data.sponsorImage + '" class="sdc-interactive-selector__header-sponsor-image">\n          ' + (rootElement.view.data.sponsorLink ? '</a>' : '') + '\n        ' : '') + '\n        ' + (rootElement.view.data.title ? '<h2 class="sdc-interactive-selector__title" data-role="title">' + rootElement.view.data.title + '</h2>' : '') + '\n      </div>\n    </div>\n  ';

  rootElement.appendChild(header);
};