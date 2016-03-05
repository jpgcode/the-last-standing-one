'use strict';

const gulp   = require('gulp');
const config = require('../config');


/**
 * Copy the content of the './static' folder into the '/build' folder.
 */

gulp.task('copyStatic', ['cleanBuild'], function(){
	return gulp.src(config.staticPath + '/**/*')
        .pipe(gulp.dest(config.buildPath));
});