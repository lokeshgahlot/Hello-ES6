module.exports = function() {
  'use strict';

  var gulp = require('gulp');
  var env = process.env.NODE_ENV;

  require('./jade')();
  require('./sass')();
  require('./script')();
  require('./express')();
  require('./clean')();

  gulp.task('generate',['jade', 'sass', 'script'], function() {
    console.log('generate....');
  });

  gulp.task('server',['environment', 'generate', 'express'], function() {
    console.log('server....');
  });

  gulp.task('environment', function() {
    console.log('-----------------------------');
    console.log('environment = ', env);
    console.log('-----------------------------');
  });
};
