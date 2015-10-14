module.exports = function() {
  'use strict';

  // TODO: following variables should come from config file
  var src = '../src/**/*.jade';
  var dest = '../dest/';
  var env = 'dev';

  var task = 'jade';

  var gulp = require('gulp');
  var gp = require('gulp-load-plugins')({lazy: true});

  var jadeTask = function() {
    return gulp.src(src)
      .pipe(gp.plumber())
      .pipe(gp.jade({pretty: env === 'prod' ? false : true}))
      .pipe(gp.flatten())
      .pipe(gulp.dest(dest));
  };

  gulp.task(task, function() {
    return jadeTask();
  });
};
