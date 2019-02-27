var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('copy', function () {
    return gulp.src('app/data/**/*.*')
        .pipe(gulp.dest('public_html/data'));
});

gulp.task('build', function(callback) {
    runSequence('cache:clear', ['sass', 'useref', 'images', 'fonts', 'vendorJS', 'vendorCSS', 'copy'],
        callback
    )
})