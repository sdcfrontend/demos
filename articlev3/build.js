const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Build & minify CSS
const cssInput = 'styles.css';
const cssOutput = 'styles-min.css';

fs.readFile(cssInput, (err, css) => {
  if (err) {
    console.error(`⚠️   CSS Build Error`, err);
    return;
  }

  postcss([precss, autoprefixer({ grid: true, browsers: ['iOS >= 8', 'ie 11'] }), cssnano({ zindex: false, reduceIdents: false })])
    .process(css, { from: cssInput, to: cssOutput })
    .then(result => {
      fs.writeFile(cssOutput, result.css, () => {
        console.log(`✅  CSS built and saved to ${cssOutput}`);
      });
    });
});