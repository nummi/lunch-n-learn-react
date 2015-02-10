var gulp    = require('gulp');
var connect = require('gulp-connect');

gulp.task('server', function() {
  connect.server({
    root: ['dist'],
    port: 5000
  });

  gulp.src('./dist/*.html')
      .pipe(connect.reload());
});
