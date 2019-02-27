var gulp        = require('gulp');

gulp.task('vendorJS', function() {
    return gulp.src('app/js/vendor/*')
        .pipe(gulp.dest('public_html/js/vendor'))
})

gulp.task('vendorCSS', function() {
    return gulp.src('app/css/vendor/*')
        .pipe(gulp.dest('public_html/css/vendor'))
})