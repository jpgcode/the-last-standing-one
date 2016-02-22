var gulp = require('gulp');
var watch = require('gulp-watch');
var $ = require('gulp-load-plugins')();
var bs = require('browser-sync').create();

gulp.task('notify:server', function(){
  return gulp.src('gulpfile.js')
      .pipe($.notify('Server ready!'));
});

gulp.task('reloadBrowsers',function(){
  return bs.reload();
});

gulp.task('default', function(){

	bs.init({
      notify: false,
      port: 9000,
      server: { baseDir: ['app'] }
  });

	gulp.watch(['app/*.html', 'app/**/*.js'], ['reloadBrowsers']);

});