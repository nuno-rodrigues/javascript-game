var gulp        = require('gulp');
var cache       = require('gulp-cache');

gulp.task('cache:clear', function(callback) {
    return cache.clearAll(callback)
})