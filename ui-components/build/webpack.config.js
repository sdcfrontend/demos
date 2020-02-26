const path = require('path');

module.exports = function (inputpath, outputfolder, name) {
  return {
    entry: inputpath,
    output: {
      filename: `${name}.js`,
      path: outputfolder,
      library: 'script',
      libraryTarget: 'umd'
    }
  };

}