var gulp = require('gulp');

gulp.task('copy-fonts', function() {
  return gulp.src('./fonts/**/*.{ttf,woff,eot,svg}')
             .pipe(gulp.dest('./dist/fonts'));
});
