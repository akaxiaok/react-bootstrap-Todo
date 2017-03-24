var gulp = require('gulp'),
    myth = require('gulp-myth'),
    webpackConf = require('./webpack.config'),
    webpack = require('gulp-webpack');
gulp.task('default', ['style', 'webpack', 'html','index']);

gulp.task('style', function () {
    gulp.src('src/css/*.css').pipe(myth()).pipe(gulp.dest('build/css'));
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.css').pipe(gulp.dest('build/css'));
});
gulp.task('html', function () {
    gulp.src('src/html/*.html').pipe(gulp.dest('build/html/'));
});
gulp.task('index', function () {
    gulp.src('src/*.html').pipe(gulp.dest('build/'));
});
gulp.task('webpack', function () {
    gulp.src('src/index.js').pipe(webpack(webpackConf)).pipe(gulp.dest('build/js/')) ;
});
var watcher = gulp.watch('src/index.html', ['index']);
watcher.on('change', function (event) {
    console.log('Event type: ' + event.type); // added, changed, or deleted
    console.log('Event path: ' + event.path); // The path of the modified file
});
gulp.watch('src/html/*.html', ['html']);

gulp.watch('src/js/*.js',['webpack']);