'use strict';

const del    = require('del');
const gulp   = require('gulp');
const config = require('../config');


/**
 * Deletes all content inside the './build' folder.
 * If 'keepFiles' is true, no files will be deleted. This is a dirty workaround since we can't have
 * optional task dependencies :(
 * Note: keepFiles is set to true by gulp.watch (see serve()) and reseted here to avoid conflicts.
 */

gulp.task('cleanBuild', function(){
	if (!config.keepFiles) {
        del(['build/**/*.*']);
    } else {
        config.keepFiles = false;
    }
});