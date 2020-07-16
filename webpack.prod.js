const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'web',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|dist|demo)/,
      use: [{
        loader: 'babel-loader'
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
  }]
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  optimization: {
    minimize: false
  },
  externals: [nodeExternals()]
}
