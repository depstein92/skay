const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const config = {
  cache: true,
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js' ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: { presets: ["@babel/preset-env","@babel/preset-react"] }
       }
    },
    {
      test: /\.scss$/,
      use: [{ loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" }],
      exclude: /flexboxgrid/
    },
    {
      test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|jpeg)$/,
      use: [
         {
           loader: 'url-loader',
           options: {
             limit: 10000
           }
         }
       ]
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
]
  },
  devServer: {
    historyApiFallback: true,
  },
  node: {
    fs: 'empty',
  },
  plugins: [
   new FriendlyErrorsWebpackPlugin(),
   new Dotenv({
     path: './.env', // Path to .env file (this is the default)
     safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
   })
 ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
