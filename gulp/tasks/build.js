'use strict';

const gulp   = require('gulp');
const globalMethods = require('../globalMethods');


gulp.task('build', ['copyPhaser'], globalMethods.build);