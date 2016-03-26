/**
 * Created by Nightpaws on 20/01/2016.
 */

var gulp = require('gulp');
var del = require('del');
var util = require('gulp-util');

gulp.task('clearBuild', function (cb) {

    log('Clearing current build');

    del("./build/**/*", {force: true}).then(function () {
        cb();
    });
});

gulp.task('copyServer', ['clearBuild'], function () {

    return gulp
        .src(['./src/backend/**/*', '!**/doc/**', '!**/logs/**', '!**/*.iml', '!./src/backend/public/**'])
        .pipe(gulp.dest('./build'));

});

gulp.task('copyClean', ['clearBuild', 'copyServer', 'copyApp'], function (cb) {

    del(['./build/logs', './build/doc'], {force: true}).then(function () {
        cb();
    });
});

gulp.task('copyApp', ['clearBuild', 'copyServer'], function () {

    return gulp
        .src(['./src/frontend/build/**'])
        // .pipe(gulp.dest('./build/public/application'));
        .pipe(gulp.dest('./build/public/'));

});

gulp.task('build', ['clearBuild', 'copyServer', 'copyApp', 'copyClean'], function () {


});

// https://gist.github.com/johnpapa/32dd849ec6f5b2bd3862#file-gulpfile-js

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                util.log(util.colors.blue(msg[item]));
            }
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}