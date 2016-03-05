'use strict';

const gulp       = require('gulp');
const gutil      = require('gulp-util');
const argv       = require('yargs').argv;
const exorcist   = require('exorcist');
const babelify   = require('babelify');
const path       = require('path');
const browserify = require('browserify');
const source     = require('vinyl-source-stream');
const buffer     = require('gulp-buffer');
const uglify     = require('gulp-uglify');
const gulpif     = require('gulp-if');
const config     = require('./config');


/**
 * Transforms ES2015 code into ES5 code.
 * Optionally: Creates a sourcemap file 'game.js.map' for debugging.
 */
var build = function(){
	let sourcemapPath = config.scriptsPath + '/' + config.outputFile + '.map';

    logBuildMode();

    return browserify({
        paths: [ path.join(__dirname, 'src') ],
        entries: config.entryFile,
        debug: true
    })
    .transform(babelify)
    .bundle().on('error', function(error){
          gutil.log(gutil.colors.red('[Build Error]', error.message));
          this.emit('end');
    })
    .pipe(gulpif(!isProduction(), exorcist(sourcemapPath)))
    .pipe(source(config.outputFile))
    .pipe(buffer())
    .pipe(gulpif(isProduction(), uglify()))
    .pipe(gulp.dest(config.scriptsPath));
}

/**
 * Simple way to check for development/production mode.
 */
var isProduction = function() {
    return argv.production;
}

/**
 * Logs the current build mode on the console.
 */
var logBuildMode = function() {
    
    if (isProduction()) {
        gutil.log(gutil.colors.green('Compiling production assets...'));
    } else {
        gutil.log(gutil.colors.green('Compiling development assets...'));
    }

}

module.exports = { build: build, isProduction: isProduction, logBuildMode: logBuildMode };