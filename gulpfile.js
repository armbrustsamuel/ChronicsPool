var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('server', function() {
  gulp.src('src')
    .pipe(server({
      livereload: true,
      port: 8081,
      open: true
    }));
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/*.html', ['html']);
});