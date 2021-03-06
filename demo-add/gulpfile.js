var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve',function(){

	browserSync({
	  server:{
	    baseDir: './'
	  }
	});

});

gulp.watch(['./*/*.js'], ['reload']);
gulp.watch(['./index.html'], ['reload']);

gulp.task('reload',function(){

	reload();

});
