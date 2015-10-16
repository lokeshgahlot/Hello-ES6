module.exports = function() {
  'use strict';

  // TODO: following variable should come from config file
  var dest = '../dest/';
  var src = '../src/';
  var env = process.env.NODE_ENV;
  var proxyPort = process.env.NODE_PROXY_PORT;
  var port = process.env.NODE_PORT;

  var gulp = require('gulp');
  var browserSync = require('browser-sync');
  var gp = require('gulp-load-plugins')({lazy: true});

  var startBrowserSync = function() {
    if (browserSync.active) {
      return;
    }

    var options = {
          proxy: 'localhost:' + proxyPort,
          port: port,
          files: [ dest + '*.*' ],
          ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
          },
          injectChanges: true,
          logFileChanges: true,
          logLevel: 'debug',
          logPrefix: 'gulp-patterns',
          notify: true,
          reloadDelay: 200,
          startPath: 'index.html',
          browser: 'Google Chrome Canary'
        };
    browserSync(options);
  };

  gulp.task('browser-sync', ['nodemon'], function() {
    startBrowserSync();
  });

  gulp.task('nodemon', function() {

    return gp.nodemon({ script: 'server/index.js', ext: 'html js css' })
        .on('restart', function() {
          console.log('server restarted');
        })
        .on('start', function() {
          console.log('Starting Express on port: ' + proxyPort);
          startBrowserSync();
        })
        .on('restart', function() {
          console.log('Restarting Express on port: ' + proxyPort);
          startBrowserSync();
        })
        .on('crash', function() {
          console.log('Express server encountered a problem. Attempting to reload...');
        });
  });

  gulp.task('express', ['browser-sync'], function() {

    gulp.watch([src + '**/*.jade'], ['jade'], function() {
      console.log('HTML file changed, rebuilding...');
    });

    gulp.watch([src + '**/*.sass'], ['sass'], function() {
      console.log('Css file changed, rebuilding...');
    });

    gulp.watch([src + '**/*.js'], ['script'], function() {
      console.log('JS file changed, rebuilding...');
    });

  });
};
