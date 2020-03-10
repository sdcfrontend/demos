// get dependencies
const fs = require('fs');
const fse = require('fs-extra');
const handlebars = require('handlebars');
const path = require('path');
const ROOT = path.resolve(process.cwd());
const sass = require('node-sass');
const webpack = require('webpack');
const webpackconfig = require('./webpack.config');

const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssvariables = require('postcss-css-variables');

const package = require(path.resolve(ROOT, 'package.json'));
const page = fs.readFileSync(path.resolve(ROOT, 'build/page.html'), 'utf8').toString();
const directory = fs.readFileSync(path.resolve(ROOT, 'build/directory.hbs'), 'utf8').toString();
const cssvars = fs.readFileSync(path.resolve(ROOT, 'node_modules/sdc-project-base/css/base/core/_vars.scss'), 'utf8').toString();
const helpers = require(path.resolve(ROOT, 'node_modules/sdc-project-base/js/helpers/all'));
const localhelpers = require('./helpers');

// set up
handlebars.registerHelper(helpers);
handlebars.registerHelper(localhelpers);
const list = [];

if (!package && package.dependencies) {
  return "no components found";
}

for (var item in package.dependencies) {
  buildsection(item, package.dependencies[item]);
};

function buildsection(name, gitlink) {

  //get files based on component name
  if (name.match(/sdc-project/)) {
    return;
  }

  const template = fs.readFileSync(path.resolve(ROOT, 'node_modules', name, 'template.hbs'), 'utf8').toString();
  const csspath = path.resolve(ROOT, 'node_modules', name, `styles/preview.scss`);
  const jspath = path.resolve(ROOT, 'node_modules', name, `src/components/${name}.js`);

  try {
    const partials = require(path.resolve(ROOT, 'node_modules', name, `src/partials.js`));
    handlebars.registerPartial(partials);
  } catch (error) {
    
  }

  let data = {};
  try {
    data = require(path.resolve(ROOT, 'node_modules', name, 'sample/multiple.json'));
  } catch (error) {
    data = [require(path.resolve(ROOT, 'node_modules', name, 'sample/data.json'))];
  }

  // compile html
  const hbs = handlebars.compile(template);
  let html = '';

  data.forEach(function (item) {
    html += hbs(item) + "<br><br>";
  });

  html = page.replace(/#{component}/g, html).replace(/#{name}/g, name).replace(/#{git-link}/g, gitlink.replace('git+', ''));

  // compile css
  sass.render({
    file: csspath,
    includePaths: ['node_modules']
  }, function (err, result) {
    if (result && result.css) {
      fs.writeFileSync(path.resolve(ROOT, name, 'styles.css'), result.css.toString());
    }
  });

  // compile js
  const config = webpackconfig(jspath, path.resolve(ROOT, name), 'script');
  webpack(config).run(function (error, stats) { });

  // make folder
  try {
    fs.mkdirSync(path.resolve(ROOT, name))
  } catch (error) { }

  // write file
  fs.writeFileSync(path.resolve(ROOT, name, 'index.html'), html);
  list.push({
    name: name,
    link: `${name}/index.html`
  });

  // copy sample folder
  fse.copySync(path.resolve(ROOT, 'node_modules', name, 'sample'), path.resolve(ROOT, name, 'sample'));

  // copy assets folder
  try {
    fse.copySync(path.resolve(ROOT, 'node_modules', name, 'assets'), path.resolve(ROOT, name, 'assets'));
  } catch (error) {}

  try {
    fse.copySync(path.resolve(ROOT, 'node_modules', name, 'translations'), path.resolve(ROOT, name, 'translations'));
  } catch (error) {
    
  }

}


// render vars file
sass.render({
  data: cssvars,
  includePaths: ['node_modules']
}, function (err, result) {
  if (result && result.css) {
    fs.writeFileSync(path.resolve(ROOT, 'css/vars.css'), result.css.toString());
  }
});

const index = handlebars.compile(directory);
let indexhtml = index(list);
fs.writeFileSync(path.resolve(ROOT, 'index.html'), indexhtml);
