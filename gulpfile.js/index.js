// dependencies 
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

// requires
require('./tasks/sass');
require('./tasks/browserSync');
require('./tasks/cache');
require('./tasks/clean');
require('./tasks/fonts');
require('./tasks/images');
require('./tasks/useref');
require('./tasks/vendor');
require('./tasks/build');

// tasks

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('default', function(callback) {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    )
})