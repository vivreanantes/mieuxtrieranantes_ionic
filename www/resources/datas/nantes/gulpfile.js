var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var gp_concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['minify']);

// task
gulp.task('minify', function () {
    gulp.src('./*.js') // path to your files
	.pipe(gp_concat('concat.js'))
    .pipe(gp_uglify({mangle : false }))
	.pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('.'));
});

/*
gulp.task('minify', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

*/