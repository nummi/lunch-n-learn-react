var gulp = require('gulp');

gulp.task('copy-html', function() {
  return gulp.src('./pages/*.html')
             .pipe(gulp.dest('./dist'));
});
