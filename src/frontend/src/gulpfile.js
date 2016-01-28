/**
 * Created by Nightpaws on 20/01/2016.
 */
var gulp    = require('gulp'),
    $       = require('gulp-load-plugins')({lazy: true}),
    config  = require('./gulp-config')(),
    del = require('del');

//Clear out the Build Folder.

gulp.task('clearbuild', function(cb){
    log("Cleaning build folder - " + config.build.dir);

    del(config.build.dir + "**/*", {force: true}).then(function () {
        cb();
    });
});

//Build the SASS - (sassiness is imperative)
gulp.task('sass', ['clearbuild'], function() {

    log('Compiling SASS...');

    return gulp
        .src(config.sass.src)
        .pipe($.sass({errLogToConsole: true}))
        .pipe(gulp.dest(config.build.cssDir));
});

//Bulk dependency handler. Just a function caller...
gulp.task('handleDep', ['clearbuild', 'libcopy', 'dep'], function(){});

//Copy Libraries
gulp.task('libcopy',['clearbuild'], function(){

    log("Copying Bower Dependencies to: " + config.build.libDir);

    return gulp
        .src(config.bower.src + '**/*.*')
        .pipe(gulp.dest(config.build.libDir));

});

//Inject Dependencies
gulp.task('dep', ['clearbuild', 'libcopy', 'sass', 'copy'], function() {

    log('Injecting dependencies for:' +
        ' \n\t\t-bower components ' +
        ' \n\t\t-custom js' +
        ' \n\t\t-custom css');

    var options = config.getWiredepDefault();
    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src([config.build.dir + 'app/**/*.module.js', config.build.dir + 'app/**/*.js', '!' + config.build.dir + 'app/app.js']), config.getInjectDefault()))
        .pipe($.inject(gulp.src(config.build.cssDir + '**/*.css'), config.getInjectDefault()))
        .pipe(gulp.dest(config.build.dir));
});

//Copy Full Application
gulp.task('copy', ['clearbuild', 'copyfavicon', 'copyFonts'], function() {

    log('Copying Application to: ' + config.build.dir);

    return gulp
        .src(config.js.src.concat(config.html.dir).concat(config.ignore.dir))
        .pipe(gulp.dest(config.build.dir + "app/"));
});

//Copy Favicon
gulp.task('copyfavicon', ['clearbuild'], function() {

    log('Copying Favicon to: ' + config.build.dir);

    return gulp
        .src(config.favicon.src)
        .pipe(gulp.dest(config.build.dir));
});

//Copy Fonts
gulp.task('copyFonts', ['clearbuild'], function() {

    log('Copying Fonts to: ' + config.build.dir);
    return gulp
        .src(config.fonts.dir)
        .pipe(gulp.dest(config.build.dir + '/fonts/'));
});

//Full Build Operation
gulp.task('build',['clearbuild', 'sass', 'handleDep', 'copy'], function(){
    log($.util.colors.green('---Build has Completed.---'));
});

//Adding Log Function
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.gray(msg));
    }
}

    //Apply Polyfill function to add endsWith functionality since endsWith has not yet been implemented in JS.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function(searchString, position) {
            var subjectString = this.toString();
            if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
}
