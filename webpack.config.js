const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'demo/js/index.js'),
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|src)/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]
    }, {
      test: /\.s[ac]ss|css$/i,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(woff(2)?|ttf|eot|svg|png|mp4)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/'
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'demo/index.html'),
      filename: './index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
}
