const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass_start', function (){
   return gulp.src('./source/sass/style.scss')
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))
   .pipe(sourcemaps.write('./'))
   .pipe(gulp.dest('./source/css/'))
});

gulp.task('watch', function (){
   gulp.watch('./source/sass/*.scss', gulp.series('sass_start'));
})