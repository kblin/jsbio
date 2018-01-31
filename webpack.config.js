const path = require('path');

module.exports = {
  entry: './src/bio.js',
  output: {
    filename: 'jsbio.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'jsBio'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};

