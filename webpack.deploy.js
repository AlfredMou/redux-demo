var path = require('path');
var fs=require('fs');
var configFile=require('./config.js');
var util=require('./util.js');
var webpack = require('webpack');
var optimize = webpack.optimize;
var plugins=[];
//额外插件
//用以生产单独的css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    extractLESS = new ExtractTextPlugin('css/[name]_[hash].css'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    viewList=util.getView(configFile.VIEWENTER),htmlList=[];

for(var index in viewList){
  plugins.push(new HtmlWebpackPlugin({
      title: 'My App',
      filename: '../views/'+index+'.ejs',
      template: viewList[index],
      chunks: ["common",index]
  }));
}

plugins.push(new optimize.CommonsChunkPlugin("common",'js/common_[hash].js'));
plugins.push(extractLESS);

module.exports = {
  entry: util.getEntry(configFile.JSENTER),
  output: {
    path: path.join(__dirname, '/output/static'),
    filename: 'js/[name]_[hash].js',
    publicPath:"/static"
  },
  plugins:plugins,
  module: {
    loaders: [{
      test: /\.less$/,
      loader:  extractLESS.extract(['css','less'])
    },{
      test: /\.js$/,
      loader:"babel?sourceMap"
    },{ 
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=8192&name=/build/image/[name].[ext]'
    }, {
        test: /\.html$/,
        loader: "html"
    }]
  },
  resolve: {
    root: path.resolve('./src')
  }
}