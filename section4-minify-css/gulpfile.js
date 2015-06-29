var gulp = require('gulp');
var minifycss = require('gulp-minify-css');

gulp.task('minifycss', function(){
  gulp.src('src/css/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('dest/css'));
});

gulp.task('default', ['minifycss'], function() {

});