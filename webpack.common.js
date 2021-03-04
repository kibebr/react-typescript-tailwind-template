const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader'
    }, {
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          ref: true,
          icon: true
        }
      }, {
        loader: 'url-loader'
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
}
