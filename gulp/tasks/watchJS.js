'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('watch-js', ['fastBuild'], browserSync.reload);