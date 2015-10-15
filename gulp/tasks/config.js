module.exports = function() {
  'use strict';

  var config = {
    src: '../src/',
    dest: '../dest/',
    env: process.env.NODE_ENV
  };

  // js
  config.jsSrc = [config.src + '**/*.js', '!' + config.src + '**/bower_components/**/src/**/*.js', '!' + config.src + '**/*.min.js'];
  config.jsDest =  config.dest + 'js/';

  //sass

  config.sassSrc = config.src +   '**/*.sass';
  config.sassDest = config.dest + 'css/';

  return config;
};
