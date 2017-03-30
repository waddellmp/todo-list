// Import Webpack npm module
var webpack = require('webpack');
var path = require('path');

module.exports = {
  // Which file types are in our project, and where they are located
  module: {
    // How to process project files with loaders
    loaders: [
      // Process any .js or .jsx file with Babel
      { 
        test: /\.jsx?$/, 
        loaders: ['babel-loader'] 
      }
    ]
  },
  // Which file is the entry point to our application
  entry: './src/index.jsx',
  // Where to output the final bundled code to
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  }
};
