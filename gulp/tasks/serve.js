'use strict';

const gulp        = require('gulp');
const config      = require('../config');
const browserSync = require('browser-sync');


/**
 * Starts the Browsersync server.
 * Watches for file changes in the 'src' folder.
 */

gulp.task('serve', ['build'], function(){
	 var options = {
        server: {
            baseDir: config.buildPath
        },
        open: false // Change it to true if you wish to allow Browsersync to open a browser window.
    };
    
    browserSync(options);
    
    // Watches for changes in files inside the './src' folder.
    gulp.watch(config.sourcePath + '/**/*.js', ['watch-js']);
    
    // Watches for changes in files inside the './static' folder. Also sets 'keepFiles' to true (see cleanBuild()).
    gulp.watch(config.staticPath + '/**/*', ['watch-static']).on('change', function() {
        config.keepFiles = true;
    });
});