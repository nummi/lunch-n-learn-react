var bify   = require('browserify');
var gulp   = require('gulp');
var react  = require('reactify');
var source = require('vinyl-source-stream');
var to5    = require('6to5-browserify');

gulp.task('scripts', function() {
  bify('./js/application.js')
    .transform(react)
    .transform(to5)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});
