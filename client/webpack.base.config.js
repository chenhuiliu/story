/**
 *
 *
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var chunkhash = global.offLine ? global.htmluseRandom : '';
module.exports = {
  // 入口
  entry: {
     
    main: path.join(__dirname, './src/main'),
  },
  // 输出
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name]' + chunkhash + '.js',
    chunkFilename: '[name]' + chunkhash + '.chunk.js',
    publicPath: '/dist/',
  },
  // 加载器
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [ 'babel-loader']
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader?minimize', 'autoprefixer-loader'],
        fallback: 'style-loader'
      })
    },
    {
      test: /\.less/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
        fallback: 'style-loader'
      })
    },
    {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=1024'
    },
    // {
    //   test: /\.(woff|svg|eot|ttf)\??.*$/,
    //   loader: 'url-loader?limit=80000',
    // },
    {
      test: /\.(html|tpl)$/,
      loader: 'html-loader'
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  plugins: [
    
    new ExtractTextPlugin('main.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js'
    }),
  ]

};