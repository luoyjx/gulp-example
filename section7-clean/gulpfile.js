var gulp = require('gulp');

var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src(['dest'], {read: false})
    .pipe(clean({force: true}));
});

gulp.task('default', ['clean'], function() {
  console.log('run clean');
});