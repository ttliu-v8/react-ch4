const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: '3002',
    host: '127.0.0.1',
    hot: true,
    open: true
  }
})