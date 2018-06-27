const fs = require('fs');
const postcss = require('postcss');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var UglifyJS = require("uglify-js");

fs.readFile('css/sdc-sf.css', (err, css) => {
  postcss([precss, autoprefixer({ grid: true, browsers: ['iOS >= 8', 'ie 11'] }), cssnano({ zindex: false })])
    .process(css, { from: 'css/sdc-sf.css', to: 'css/min.css' })
    .then(result => {
      fs.writeFile('css/min.css', result.css, () => true);
    });
});

var code = {};
['js/charts.js', 'js/numbers.js', 'js/sf.js'].forEach(function (file) {
  code[file] = fs.readFileSync(file).toString('utf8');
});

var result = UglifyJS.minify(code, {});

fs.writeFileSync('js/min.js', result.code);