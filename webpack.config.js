const path = require('path');

module.exports = {
  entry: './src/pixeleasier.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pixeleasier.js'
  }
};