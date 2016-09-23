var gulp = require('gulp');
var webpack = require('webpack');
var rsync = require('gulp-rsync');


gulp.task('webpack', function(callback) {

    webpack({
        // configuration
    }, function(err, stats) {
        if (err) throw new Error("webpack", err);
        callback();
    });
});

gulp.task('deploy', ['webpack'], function() {
    gulp.src('public/**')
        .pipe(rsync({
            root: 'public',
            hostname: 'usi@172.20.0.165',
            destination: '/app/arquivos/public'
        }));
    gulp.src('public/**')
        .pipe(rsync({
            root: 'public',
            hostname: 'usi@172.20.0.167',
            destination: '/app/arquivos/public'
        }));
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['deploy']);
