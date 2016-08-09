// 引入gulp 及配置参数
var gulp = require('gulp'),
	path = require('path'),
	webpackConfig=require('./webpack.config.js');
// 引入gulp组件（插件）
var webpack=require('gulp-webpack');
	//- 对文件名加MD5后缀

	//revCollector = require('gulp-rev-collector');

	//- 路径替换

//开发模式
console.log(webpackConfig);
console.log(webpack);
gulp.task("dev",function(){
	gulp.watch(["src/**/*"],function  (argument) {
		// if change run webpack
		webpack(webpackConfig);
	});
});
