var path = require('path'),
    fs=require('fs'),
    configFile=require('./config.js'),
    util=require('./util.js'),
    webpack = require('webpack'),
    optimize = webpack.optimize,
    plugins=[],staticPath=configFile.STATICPATH||"/static";

//额外插件
//用以生产单独的css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('css/[name].css'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    viewList=util.getView(configFile.VIEWENTER),htmlList=[];

plugins.push(new optimize.CommonsChunkPlugin("common",'js/common.js'));
plugins.push(extractLESS);

for(var index in viewList){
  plugins.push(new HtmlWebpackPlugin({
      title: 'My App',
      filename: '../views/'+index+'.ejs',
      template: viewList[index],
      chunks: ["common",index]
  }));
}

module.exports = {
  entry: util.getEntry(configFile.JSENTER),
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'js/[name].js',
    publicPath:staticPath
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
      loader: 'url-loader?limit=8192&name=/image/[name].[ext]'
    }]
  },
  resolve: {
    root: path.resolve('./src')
  }
}
