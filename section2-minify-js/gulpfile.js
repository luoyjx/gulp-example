var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify', function() {
  gulp.src(['js/**/*.js', '!js/**/*.min.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dest'))
});