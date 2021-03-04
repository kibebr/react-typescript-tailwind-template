const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          ref: true,
          icon: true,
          svgo: false
        }
      }, {
        loader: 'url-loader'
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    hot: true
  }
})
