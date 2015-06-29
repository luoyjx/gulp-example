var gulp = require('gulp');

// 引入组件
var less = require('gulp-less');            // less
var minifycss = require('gulp-minify-css'); // CSS压缩
var uglify = require('gulp-uglify');        // js压缩
var concat = require('gulp-concat');        // 合并文件
var rename = require('gulp-rename');        // 重命名
var clean = require('gulp-clean');          //清空文件夹

// 综合使用
// http://www.tuicool.com/articles/J3QnEb