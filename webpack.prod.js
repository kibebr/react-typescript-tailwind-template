const webpack = require('webpack')
const path = require('path')
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { ESBuildMinifyPlugin } = require('esbuild-loader')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
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
          svgo: true
        }
      }, {
        loader: 'url-loader'
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2016',
        minify: true
      }),
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeComments: true,
          removeEmptyElements: true,
          removeTagWhitespace: true,
          removeRedundantAttributes: true,
          collapseWhitespace: true
        }
      })
    ]
  }
})
