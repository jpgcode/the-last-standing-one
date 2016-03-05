'use strict';

const gulp = require('gulp');


/**
 * The tasks are executed in the following order:
 * 'cleanBuild' -> 'copyStatic' -> 'copyPhaser' -> 'build' -> 'serve'
 */
gulp.task('default', ['serve']);