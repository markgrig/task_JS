const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

 module.exports = {
  mode:  'development' ,// 'production',
  module: {
    rules: [
      { 
      test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      },
      { test: /\.(js)$/, use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]', 
        }
      }
      ]
  },
  entry: {
    index: './src/js/index.js' ,
  },
   output: {
    filename: '[name].min.js',
    path: `${__dirname}/dist`,
     
   }  ,
  devServer: {
    contentBase: `${__dirname}/dist`,
    hot: true,
    open: true,
    compress: true,
    port: 8000,
},
   plugins: [
    new HtmlWebpackPlugin ({
      inject: true,
      template:  path.resolve(__dirname, 'src/index.html'), 
    }),
    
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].min.css",
        chunkFilename: "[id].css",
      }),
      new CleanWebpackPlugin(),
  ]
 };