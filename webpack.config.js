// webpack.config.js
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MyFirstPlugin = require('./plugins/my-first-plugin');

const path = require('path');
module.exports = {
  entry: './src/manifest.xml',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main1.xml'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['lodash']
          }
        }
      },
      {
        test: /\.xml$/,
        use: [
          {
            loader: path.resolve('./loader/xml-loader.js'),
            options: { a: 2 }
          }
        ]
      }
    ]
  },
  plugins: [new LodashModuleReplacementPlugin(), new MyFirstPlugin()]
};
//
