/**
 * Created by Nightpaws on 20/01/2016.
 */
var gulp    = require('gulp'),
    $       = require('gulp-load-plugins')({lazy: true}),
    config  = require('./gulp-config')(),
    del = require('del');

//Clear out the Build Folder.

gulp.task('clearbuild', function(cb){
    log("Cleaning build folder - " + config.build.buildDir);

    del(config.build.buildDir + "**/*", {force: true}).then(function () {
        cb();
    });
});

//Configuration for Building with WireDep

config.getWiredepDefault = function() {

    var options = {
        bowerJson: config.bower.json,
        directory: config.build.libDir,
        ignorePath: config.bower.ignorePath,
        fileTypes: {
            html: {
                replace: {
                    js: function(filePath) {
                        return '<script src="/dashboard/' + filePath.replace('../build/', '') + '"></script>';
                    },
                    css: function(filePath) {
                        return '<link rel="stylesheet" href="/dashboard/' + filePath.replace('../build/', '') + '"/>';
                    }
                }
            }
        }
    };

    return options;
};