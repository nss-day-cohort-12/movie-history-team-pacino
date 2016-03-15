'use strict';

let sass = require('gulp-sass');
let gulp = require('gulp');
let gutil = require('gulp-util');
let sourcemaps = require('gulp-sourcemaps');
let jshint = require('gulp-jshint');
let watch = require('gulp-watch');


gulp.task('default', ['lint', 'watch', 'sass']); // so you can run `gulp js` to build the file

gulp.task('watch', function() {
  gulp.watch('./app/**/*.js', ['lint']);
  gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('lint', function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function() {
  return gulp.src('../sass/*.scss')
    // sourcemaps + sass + error handling
    .pipe(sourcemaps.init())
    .pipe(sass({
      sourceComments: true,
      outputStyle: 'compressed'  // nested || compressed
    }))
    .on('error', function () {})
    // generate .maps
    .pipe(sourcemaps.write({
      'includeContent': false,
      'sourceRoot': '.'
    }))
    .pipe(sourcemaps.write({
      'includeContent': true
    }))
    // write sourcemaps to a specific directory
    // give it a file and save
    .pipe(gulp.dest('../css'));
});