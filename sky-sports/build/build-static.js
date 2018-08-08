const fs = require('fs');
const postcss = require('postcss');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const UglifyJS = require("uglify-js");
const removeUnused = require('postcss-remove-unused');
const html = fs.readFileSync('index.html', 'utf8').toString();

fs.readFile('css/sff.css', (err, css) => {
  postcss([precss, autoprefixer({ grid: true, browsers: ['iOS >= 8', 'ie 11'] }), cssnano({ zindex: false })])
    .process(css, { from: 'css/sff.css', to: 'css/min.css' })
    .then(result => {
      fs.writeFile('css/min.css', result.css, () => true);
    });
});

var code = {};
['js/carousel.js', 'js/charts.js', 'js/header.js', 'js/league-pos.js', 'js/players.js', 'js/quiz.js', 'js/videos.js'].forEach(function (file) {
  code[file] = fs.readFileSync(file).toString('utf8');
});

var result = UglifyJS.minify(code, {});

fs.writeFileSync('js/min.js', result.code);