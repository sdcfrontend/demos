'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootElement, options) {
  NodeList.prototype.forEach = Array.prototype.forEach;

  rootElement.view = {};

  // set component defaults;
  var defaults = {
    // url endpoint of json data
    dataUrl: null,
    // url of fetch polyfill (set to always load to fix iOS app bug)
    polyfillUrl: 'https://cdn.polyfill.io/v2/polyfill.js?features=fetch&ua=Mozilla/5.0%20(iPhone;%20CPU%20iPhone%20OS%206_0%20like%20Mac%20OS%20X)%20AppleWebKit/536.26%20(KHTML,%20like%20Gecko)%20Version/6.0%20Mobile/10A5376e%20Safari/8536.25'

    // merge passed options into defaults
  };(0, _mergeObject2.default)(defaults, options);

  // function to request data using fetch api
  // ensure this is polyfilled for non supporting browsers
  function requestData() {
    // update url

    if (rootElement.getAttribute('data-url')) {
      defaults.dataUrl = rootElement.getAttribute('data-url');
    }

    if (defaults.dataUrl) {
      // request json data using fetch
      fetch(defaults.dataUrl, {
        credentials: 'include',
        headers: new Headers({
          'Authorization': rootElement.getAttribute('data-token')
        })
      }).then(_status2.default).then(function (response) {
        return response.json();
      }).then(function (data) {
        rootElement.view.data = data;
        return rootElement.view;
      }).then(_createView2.default.bind(this, rootElement)).catch(function (error) {
        return console.error(error);
      });
    }
  }

  // make first request...
  // (polyfill the fetch api if not available)
  // Load promise polyfill for IE
  (0, _promisePolyfill2.default)(window);

  (0, _polyfill2.default)('fetch' in window, defaults.polyfillUrl, function () {
    requestData();
  });
};

var _mergeObject = require('./merge-object');

var _mergeObject2 = _interopRequireDefault(_mergeObject);

var _status = require('./status');

var _status2 = _interopRequireDefault(_status);

var _promisePolyfill = require('./promise-polyfill');

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _polyfill = require('./polyfill');

var _polyfill2 = _interopRequireDefault(_polyfill);

var _createView = require('./create-view');

var _createView2 = _interopRequireDefault(_createView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }