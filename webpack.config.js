// webpack.config.js
// var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  }
  // module: {
  //   rules: [
  //       {
  //           test: /\.js$/,
  //           exclude: /node_modules/,
  //           use: {
  //               loader: 'babel-loader',
  //               options: {
  //                   presets: ['@babel/preset-env'],
  //                   plugins: ['lodash']
  //               }
  //           }
  //       }
  //   ]
  // },
  // plugins: [new LodashModuleReplacementPlugin]
};
//
