const glob = require("glob");
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    "typescript-algorithms": glob.sync("./src/*.ts"),
    "typescript-algorithms.min": glob.sync("./src/*.ts")
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'var',
    library: 'ads'
  },
  module: {
    loaders: [{
      enforce: 'pre',
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'tslint-loader',
      options: {
        emitErrors: true
      }
    }, {
      test: /\.ts$/,
      use: ['ts-loader']
    },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /^typescript-algorithms.min\.js$/,
      minimize: true
    })
  ]
};