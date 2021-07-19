const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('./webpack-manifest-plugin');


const port = 3000;

module.exports = {
    // 1
    entry: path.resolve(__dirname, './src/index.js'),
    //entry: './src/index.js',
    // 2
    output: {
      path: path.resolve(__dirname, './dist'),
      //path: '/dist',
      filename: 'bundle.js'
    },
    // 3
    devServer: {
        contentBase: path.resolve(__dirname, './dist')
      //contentBase: './dist'
    },

    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader'
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              }
            ]
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          }        
        ]
        },
        plugins: [
            new HtmlWebpackPlugin({ // plugin for inserting scripts into html
              template: path.join(__dirname,'./src/index.html'),
              filename : 'index.html',
              inject : 'body'
            }),
            new ManifestPlugin()
          ]
  };