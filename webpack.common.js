const webpack = require('webpack')
const dotenv = require('dotenv')
const { ESBuildPlugin } = require('esbuild-loader')

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
        target: 'es2016'
      }
    }]
  },
  plugins: [
    new ESBuildPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
}
