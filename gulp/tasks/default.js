var gulp = require('gulp');

gulp.task('default', ['scripts', 'sass', 'partials', 'copy-html', 'copy-fonts', 'copy-images', 'watch', 'server']);
