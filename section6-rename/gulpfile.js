var gulp = require('gulp');

var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('rename', function() {
  gulp.src('src/css/*.css')
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('default', ['rename'], function() {
  console.log('run minifycss and rename');
});