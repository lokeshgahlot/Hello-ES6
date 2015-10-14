module.exports = function() {
  'use strict';

  // TODO: following 3 variable should come from config file
  var src = ['../src/**/*.js', '!../src/**/bower_components/**/src/**/*.js', '!../src/**/*.min.js'];
  var dest = '../dest/js';
  var env = 'dev';
  var task = 'script';

  var gulp = require('gulp');
  var gp = require('gulp-load-plugins')({lazy: true});

  var scriptTask = function() {
    return gulp.src(src)
    .pipe(gp.plumber())
    .pipe(gp.flatten())
    .pipe(gulp.dest(dest));
  };

  gulp.task(task, function() {
    return scriptTask();
  });

};
