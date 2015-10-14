module.exports = function() {
  'use strict';

  // TODO: following variables should come from config file
  var src = '../src/**/*.sass';
  var dest = '../dest/css/';
  var env = process.env.NODE_ENV;

  var gulp = require('gulp');
  var gp = require('gulp-load-plugins')({lazy: true});

  var sassTask = function() {
    var config = {};

    switch (env) {
      case 'dev':
        config.sourceComments = 'map';
        break;
      case 'prod':
        config.outputStyle = 'compressed';
        break;
      default:
        break;
    }

    return gulp.src(src)
      .pipe(gp.plumber())
      .pipe(gp.sass(config))
      .pipe(gp.flatten())
      .pipe(gulp.dest(dest));
  };

  gulp.task('sass', function() {
    return sassTask();
  });
};
