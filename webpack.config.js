const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './credit/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'app.js'
  },

  devServer: {
    hot: true,
    inline: true,
    host: 'localhost',
    port: 4000,
    historyApiFallback: true,
    contentBase: `${__dirname}/public/`
  },
  module: {
    // https://velopert.com/1492
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-async-functions'
          ]
        }
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { test: /\.gif$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: 'file-loader?name=[name].[ext]' },
      {
        test: /\.(png|jpg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
