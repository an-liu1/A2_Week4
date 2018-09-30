//refenerce the required packages to make task running work
var gulp = require('gulp'),
var sass = require('gulp-sass');

gulp.task('sass', function() {
  // place code for your default task here
  return gulp.src('./sass/**/*.scss')
  .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});