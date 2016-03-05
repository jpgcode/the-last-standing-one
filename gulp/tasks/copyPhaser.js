'use strict';

const gulp          = require('gulp');
const config        = require('../config');
const globalMethods = require('../globalMethods');


/**
 * Copy required Phaser files from the './node_modules/Phaser' folder into the './build/scripts' folder.
 * This way you can call 'npm update', get the lastest Phaser version and use it on your project with ease.
 */

gulp.task('copyPhaser', ['copyStatic'], function(){

	let srcList = ['phaser.min.js'];
    
    if (!globalMethods.isProduction()) {
        srcList.push('phaser.map', 'phaser.js');
    }
    
    srcList = srcList.map(function(file) {
        return config.phaserPath + file;
    });
        
    return gulp.src(srcList)
        .pipe(gulp.dest(config.scriptsPath));
});