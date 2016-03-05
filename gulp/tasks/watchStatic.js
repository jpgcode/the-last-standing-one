'use strict';

const gulp        = require('gulp');
const browserSync = require('browser-sync');

gulp.task('watch-static', ['copyPhaser'], browserSync.reload);