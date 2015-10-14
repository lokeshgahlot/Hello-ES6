'use strict';
var gulp = require('gulp');
var argv = require('yargs').argv;

var env = process.env.NODE_ENV = argv.env || process.env.NODE_ENV || 'dev';
var port = process.env.NODE_PORT = argv.env || process.env.NODE_PORT || '8080';
var proxyPort = process.env.NODE_PROXY_PORT = argv.env || process.env.NODE_PROXY_PORT || '3030';

require('./tasks/jade')();
require('./tasks/sass')();
require('./tasks/script')();
require('./tasks/browser-sync')();

gulp.task('generate',['jade', 'sass', 'script'], function() {
  console.log('generate....');
});

