// var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build/',
    publicPath: 'build/',
    filename: 'build.js'
  },
  module: {
    // // avoid webpack trying to shim process
    // noParse: /es6-promise\.js$/,
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

