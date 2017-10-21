const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    "ads-ts": "./src/index.ts",
    "ads-ts-min": "./src/index.ts",
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[chunkhash].js',
    sourceMapFilename: '[name]-[chunkhash].map'
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
      include: /^ads-ts-min.*\.js$/,
      minimize: true
    })
  ]
};