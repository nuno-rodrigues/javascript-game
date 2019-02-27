var gulp = require("gulp");
var gutil = require("gulp-util");
var browserSync = require("browser-sync").create();

gulp.task("watch", ["browserSync", "sass"], function() {
  gulp.watch("app/sass/**/*.scss", ["sass"]);
  gulp.watch("app/*.html", browserSync.reload);
  gulp.watch("app/js/**/*.js", browserSync.reload);
});
