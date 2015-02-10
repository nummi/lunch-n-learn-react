var gulp    = require('gulp');
var include = require('gulp-file-include');

gulp.task('partials', function() {
  gulp.src(['./pages/*.html'])
      .pipe(include({
        prefix: '@@',
        basepath: './pages'
      }))
      .pipe(gulp.dest('./dist'));
});
