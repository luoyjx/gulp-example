var gulp = require('gulp');

var concat = require('gulp-concat');

gulp.task('concat', function() {
  gulp.src('src/css/*.css')
    .pipe(concat('common.css'))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('default', ['concat'], function(){
  console.log('run concat');
});