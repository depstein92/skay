const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

const config = {
  cache: true,
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js' ],
  output: {
    path: path.join(__dirname, "production/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env","@babel/preset-react"],
          ignore: ['/node_modules/']
        }
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
           loader: 'file-loader',
           options: {
            name: '[path][name].[ext]'
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
  plugins: [
   new FriendlyErrorsWebpackPlugin(),
   new Dotenv({
     path: '.env',
     safe: false,
     systemvars: true
   }),
   new OptimizeCssAssetsPlugin({
     assetNameRegExp: /\.optimize\.scss$/g,
     cssProcessor: require('cssnano'),
     cssProcessorOptions: { discardComments: { removeAll: true } },
     canPrint: true
   }),
   new webpack.DefinePlugin({
     'process.env':{
       'DB_EMAIL_TEMPLATE_ID': JSON.stringify(process.env.DB_EMAIL_TEMPLATE_ID),
       'DB_EMAIL_SENDER_EMAIL': JSON.stringify(process.env.DB_EMAIL_SENDER_EMAIL),
       'DB_EMAIL_USER_KEY': JSON.stringify(process.env.DB_EMAIL_USER_KEY)
     }
   })
 ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = config;
