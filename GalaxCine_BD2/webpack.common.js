const path = require('path');

module.exports = {
  entry: {
    app: './js/scriptIndex.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/scriptIndex.js',
  },
};
