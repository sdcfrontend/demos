'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (test, url, callback) {

  if (test === true) {
    callback();
  } else {
    var script = document.createElement('script');
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    script.onerror = function () {
      return console.error('no polyfill found!');
    };
    document.querySelector('head').appendChild(script);
  }
};