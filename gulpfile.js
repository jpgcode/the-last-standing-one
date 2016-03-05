'use strict';

// Module to require whole directories
const gulp       = require('gulp');
const requireDir = require('require-dir');


// Pulling in all tasks from the tasks folder
requireDir('./gulp/tasks', { recurse: true });








