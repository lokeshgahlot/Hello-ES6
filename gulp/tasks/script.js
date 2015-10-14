module.exports = function() {
  'use strict';

  // TODO: following 3 variable should come from config file

  var gulp = require('gulp');
  var gp = require('gulp-load-plugins')({lazy: true});
  var config = require('./config')();

  var src = config.jsSrc;
  var dest = config.jsDest;
  var env = config.env;

  var scriptTask = function() {
    return gulp.src(src)
    .pipe(gp.plumber())
    .pipe(gp.flatten())
    .pipe(gulp.dest(dest));
  };

  gulp.task('script', function() {
    return scriptTask();
  });

};
