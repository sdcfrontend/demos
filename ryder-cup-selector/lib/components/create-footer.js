'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement) {

  var footer = '\n    <div class="sdc-interactive-selector__footer" data-role="footer">\n      <button class="sdc-interactive-selector__clear" data-role="action" data-action="clear">Clear</button>\n      <button class="sdc-interactive-selector__submit" data-role="action" data-action="submit">Submit</button>\n    </div>\n  ';

  rootElement.insertAdjacentHTML('beforeend', footer);
};