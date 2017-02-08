/*
* @Author: hasee
* @Date:   2017-02-05 22:44:06
* @Last Modified by:   hasee
* @Last Modified time: 2017-02-07 10:21:52
*/

'use strict';
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

//html压缩
gulp.task('html',function(){
	gulp.src('./src/index.html')
	.pipe(htmlmin({
		collapseWhitespace:true,
		removeComments:true
	})).pipe(gulp.dest('./dist/'))
	.pipe(reload({
		stream:true
	}));
});

//less编译,压缩
gulp.task('styles',function(){
	gulp.src(['./src/styles/*.less','!./src/styles/_*.less'])
	.pipe(less()).pipe(cleanCss()).pipe(gulp.dest('./dist/styles/'))
	;
});

//js合并,压缩,混淆
gulp.task('scripts',function(){
	gulp.src(['./src/scripts/demo.js','./src/scripts/app.js'])
	.pipe(concat('index.js')).pipe(uglify())
	.pipe(gulp.dest('./dist/scripts/'))
	.pipe(reload({
		stream:true
	}));
});
//图片复制
gulp.task('images',function(){
	gulp.src('./src/images/*.png')
	.pipe(gulp.dest('./dist/images/'))
	.pipe(reload({
		stream:true
	}));
});

//浏览器同步监听任务
gulp.task('serve',['html','styles','scripts','images'],function(){
	browserSync.init({
        server: "./dist/"
    });
    gulp.watch('./src/styles/*.less',['styles']);
    gulp.watch('./src/scripts/*.js',['scripts']);
    gulp.watch('./src/*.html',['html']);
    gulp.watch('./src/images/*.png',['images']);
})