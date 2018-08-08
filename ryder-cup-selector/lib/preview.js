'use strict';

var _sdcInteractiveSelector = require('./components/sdc-interactive-selector');

var _sdcInteractiveSelector2 = _interopRequireDefault(_sdcInteractiveSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// By requiring the stylesheet here like this,
// webpack will append the contents inside a
// style tag in the document HEAD.
require('../styles/components/sdc-interactive-selector.scss');

var components = document.querySelectorAll('[data-component-name=sdc-interactive-selector]');
for (var i = 0; i < components.length; i++) {
    (0, _sdcInteractiveSelector2.default)(components[i]);
}