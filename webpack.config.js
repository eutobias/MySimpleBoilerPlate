const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'index_bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!sass-loader"
      })
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json']
  },
  plugins: [
    // new UglifyJSPlugin(),
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin('main', '/', {}),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: { baseDir: ['dist'] }
    })
  ]
};
