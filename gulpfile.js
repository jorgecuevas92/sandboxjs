var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.watch('public/stylesheets/*.scss',['styles']);
});

gulp.task('styles', function() {
  gulp.src('public/stylesheets/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('javascript', function() {
  gulp.src('public/javascripts/*.js')
});

gulp.task('style-test', function() {
  gulp.src('public/stylesheets/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style-test.min.css'))
    .pipe(gulp.dest('./public/stylesheets/'))
});

gulp.task('g-sw', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(`${rootDir}/service-worker.js`, {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  }, callback);
});
