var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

//convers sass to css
gulp.task('sass', function(){
   return gulp.src('./scss/**/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('./css'))
       .pipe(browserSync.reload({
           stream: true
       }))
});

//browserSync fuction
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

//Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
});