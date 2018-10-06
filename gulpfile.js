//refenerce the required packages to make task running work
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
  // place code for your default task here
  return gulp.src('./sass/**/*.scss')
  .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});

//watch sass files for changes, compile
gulp.task('sass:watch', function()
{
//define tht gul-sass task
gulp.watch('.sass/**/*.scss', ['sass']);
});

gulp.task('serve', function()
{
    browserSync.init({
        server: {
            baseDir : './',
            index: 'dindex.html'
        }
    });
});

gulp.task('default', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);