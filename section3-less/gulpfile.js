var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dest/css'));
});

gulp.task('default', function() {
  gulp.run('less');
});