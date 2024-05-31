const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    login: path.resolve(__dirname, 'src/scripts/rute.js'),
    auth: path.resolve(__dirname, 'src/scripts/auth.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      chunks: ['auth', 'app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, 'src/templates/login.html'),
      chunks: ['login', 'auth'],
    }),
    new HtmlWebpackPlugin({
      filename: 'registrasi.html',
      template: path.resolve(__dirname, 'src/templates/registrasi.html'),
      chunks: ['login', 'auth'],
    }),
    new HtmlWebpackPlugin({
      filename: 'profile.html',
      template: path.resolve(__dirname, 'src/templates/profile.html'),
      chunks: ['login'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
