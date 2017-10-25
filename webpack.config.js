const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'typescript-algorithms': './src/index.ts',
    'typescript-algorithms.min': './src/index.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'tsAlgorithms',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.js']
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