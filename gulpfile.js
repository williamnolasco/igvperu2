var gulp = require('gulp'),
	pug = require('gulp-pug');

gulp.task('usandogulp', function(){
	gulp.src('./dev/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('default', function(){
	gulp.watch('./dev/**/*.pug', ['usandogulp']);
});