var gulp        = require('gulp');
var del         = require('del');

gulp.task('clean:public_html', function() {
    return del.sync('public_html');
})