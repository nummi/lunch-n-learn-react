var gulp = require('gulp');

gulp.task('copy-images', function() {
  return gulp.src('./images/*')
             .pipe(gulp.dest('./dist/images'));
});
