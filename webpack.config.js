var path = require('path');
var fs=require('fs');
var configFile=require('./config.js');
var webpack = require('webpack');
var optimize = webpack.optimize;
//额外插件
//用以生产单独的css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('../../css/[name].css');

//获取打包页面入口文件 
function getEntry(entryList) {
    var files = {},jsPath,dirs,matchs,entery;
    for(var i=0,len=entryList.length;i<len;i++){
      entery=entryList[i];
      jsPath = path.resolve("./", entery);
      dirs = fs.readdirSync(jsPath);
      matchs = [];
      dirs.forEach(function (item) {
          matchs = item.match(/(.+)\.js$/);
          if (matchs) {
              files[matchs[1]] = path.resolve("./",entery, item);
          }
      });
    }
    return files;
}

console.log("入口列表:",getEntry(configFile.JSENTER));

module.exports = {
  entry: getEntry(configFile.JSENTER),
  output: {
    path: path.join(__dirname, '/src/js/build'),
    filename: '[name]_[hash].js'
  },
  plugins: [
    new optimize.CommonsChunkPlugin('common.js'),extractLESS
  ],
  module: {
    loaders: [{
      test: /\.less$/,
      loader:  extractLESS.extract(['css','less'])
    },{
      test: /\.js$/,
      loader:"babel?sourceMap"
    }]
  },
  resolve: {
    root: path.resolve('./src')
  }
}
