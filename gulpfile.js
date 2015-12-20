var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    cssmin = require('gulp-cssmin'),
    webpack = require('webpack-stream'),
    gutil = require('gulp-util');

gulp.task('sass', function() {
    return sass('static/scss/**/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('static/css/'));
});
gulp.task('build', function() {
    return gulp.src('static/js/app/src/**/*.js').pipe(webpack(require('./webpack.config.js'))).pipe(gulp.dest('static/js/app/dist/'));
});
gulp.task('watch', function() {
    gulp.watch('static/js/app/src/**/*.js', ['build']);
    gulp.watch('static/js/app/src/**/*.html', ['build']);
    gulp.watch('static/scss/**/*.scss', ['sass']);
});
