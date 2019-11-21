const path = require('path');
module.exports = {
 entry: './js/hungrybear.js',
 output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'bundle.js',
 },
  devServer: {
     contentBase: './src'
 }
};
