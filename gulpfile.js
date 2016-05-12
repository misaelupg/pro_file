var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('styles', function() {    
    gulp.src('app/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/styles/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/styles/**/*.scss',['styles']);
});