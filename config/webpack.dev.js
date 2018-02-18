var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var WebpackPwaManifest = require('webpack-pwa-manifest');
var StringReplacePlugin = require("string-replace-webpack-plugin");
var WriteFilePlugin = require('write-file-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  
  output: {
    path: helpers.root('dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
        /*
      { 
        test: /globals.ts$/,
        loader: StringReplacePlugin.replace({
          replacements: [
              {
                  pattern: /server/g,
                  replacement: function (match, p1, offset, string) {
                      return "https://rsapi.omedadev.com";
                  }
              },
              {
                  pattern: /svrwebsocket/g,
                  replacement: function (match, p1, offset, string) {
                      return "wss://rsapi.omedadev.com:3002";
                      //return "ws://localhost:3001";
                  }
              },
              {
                  pattern: /awsbucket/g,
                  replacement: function (match, p1, offset, string) {
                      return "reactcast-dev";
                  }
              }
          ]})
      }*/
    ]
  },
  
  plugins: [
    new StringReplacePlugin(),
    new ExtractTextPlugin('[name].css'),
    new WriteFilePlugin(),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Cobalt',
      short_name: 'Cobalt',
      description: 'Cobalt',
      orientation: 'portrait',
      display: 'standalone',
      theme_color: '#009fd7',
      background_color: '#212121'
      /*icons: [
        {
          src: path.resolve('img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]*/
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      },
      PRODUCTION: JSON.stringify(true)
    }),
  ],
  
  devServer: {
    historyApiFallback: true,
    compress: true,
    stats: 'minimal'
  }
});
