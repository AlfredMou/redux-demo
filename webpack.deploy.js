var path = require('path'),
    fs=require('fs'),
    configFile=require('./config.js'),
    util=require('./util.js'),
    webpack = require('webpack'),
    optimize = webpack.optimize,
    plugins=[],staticPath=configFile.STATICPATH||"/static",
    cdnPath=configFile.CDN||"",
    publicPath=cdnPath+staticPath,outputPath=configFile.OUTPUT||"/output";
//额外插件
//用以生产单独的css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    extractLESS = new ExtractTextPlugin('css/[name]_[hash].css'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    viewList=util.getView(configFile.VIEWENTER),htmlList=[];

//清空打包生产后的文件
util.rmdirSync(path.join(__dirname, outputPath));

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
    path: path.join(__dirname, outputPath+'/static'),
    filename: 'js/[name]_[hash].js',
    publicPath:publicPath
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
      loader: 'url-loader?limit=8192&name=/image/[hash].[ext]'
    }, {
        test: /\.html$/,
        loader: "html"
    }]
  },
  resolve: {
    root: path.resolve('./src')
  }
}