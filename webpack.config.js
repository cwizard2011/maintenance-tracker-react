const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './client/src/app.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html',
    }),
  ],
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname),
    publicPath: '/dist/',
    historyApiFallback: true,
  },
  mode: 'development',
};
