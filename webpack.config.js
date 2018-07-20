const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


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
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: { presets: ["react", "es2015", "stage-1"] }
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
  net: 'empty',
  tls: 'empty',
  dns: 'empty',
  fs: 'empty'
},
  plugins: [
   new FriendlyErrorsWebpackPlugin(),
   new UglifyJsPlugin(),
   new BundleAnalyzerPlugin({
     openAnalyzer: false
  }),
  new HardSourceWebpackPlugin() /*WEBPACK RELOAD OPTIMIZER */
 ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
