const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');
const ROOT = path.resolve(process.cwd());
var sass = require('node-sass');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var cssvariables = require('postcss-css-variables');

const package = require(path.resolve(ROOT, 'package.json'));
const page = fs.readFileSync(path.resolve(ROOT, 'build/page.html'), 'utf8').toString();
const directory = fs.readFileSync(path.resolve(ROOT, 'build/directory.hbs'), 'utf8').toString();
const cssvars = fs.readFileSync(path.resolve(ROOT, 'node_modules/sdc-project-base/css/base/core/_vars.scss'), 'utf8').toString();
const helpers = require(path.resolve(ROOT, 'node_modules/sdc-project-base/js/helpers/all'));
const list = [];

handlebars.registerHelper(helpers)

if (!package && package.dependencies) {
  return "no components found";
}

for (var item in package.dependencies) {
  buildsection(item);
};

function buildsection(name) {
  //get files
  if (name.match(/sdc-project/)) {
    return;
  }

  const template = fs.readFileSync(path.resolve(ROOT, 'node_modules', name, 'template.hbs'), 'utf8').toString();
  const csspath = path.resolve(ROOT, 'node_modules', name, `styles/preview.scss`);

  let data = {};
  try {
    data = require(path.resolve(ROOT, 'node_modules', name, 'sample/multiple.json'));
  } catch (error) {
    data = [require(path.resolve(ROOT, 'node_modules', name, 'sample/data.json'))];
  }

  // render template
  const hbs = handlebars.compile(template);
  let html = '';

  data.forEach(function (item) {
    html += hbs(item) + "<br><br>";
  });

  // compile css
  sass.render({
    file: csspath,
    includePaths: ['node_modules']
  }, function (err, result) {
    if (result && result.css) {
      fs.writeFileSync(path.resolve(ROOT, name, 'styles.css'), result.css.toString());
    }
  });

  html = page.replace(/#{component}/, html).replace(/#{name}/, name);

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
