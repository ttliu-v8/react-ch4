const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebapckPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}
module.exports =  config