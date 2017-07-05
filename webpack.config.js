const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      }
    ],
  },
  module: {
    loaders: [
      {
        test: /\.(png|ico|jpg|jpeg|gif|svg)$/,
        loaders: ['file-loader?name=images/[name].[ext]']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1!postcss-loader'
        }),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      url: '',
      filename: 'index.html',
      template: 'index.html',
      minify: {
        sortAttributes: true,
        caseSensitive: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
      }
    })
  ],
};
