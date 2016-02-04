/**
 * Created by Nightpaws on 25/01/2016.
 */
module.exports = function () {

    //Location Configs. Stores paths of files and directories for use

    var buildPath = '../build/';

    var config = {
        bower: {
            json: require('./bower.json'),
            src: './bower_components/',
            ignorePath: '../..'
        },
        build: {
            dir: buildPath,
            cssDir: buildPath + 'style/',
            jsDir: buildPath + 'js/',
            libDir: buildPath + 'lib/'
        },
        favicon: {
            src: ['./favicon.ico']
        },
        fonts: {
            dir: ['./fonts/**']
        },
        html: {
            dir: ['./app/**/*.html', '!./index.html']
        },
        ignore: {
            dir: ['!./bower_components/**/*', '!./node_modules/**/*']
        },
        index: 'index.html',
        js: {
            src: ['./app/**/*.js']
        },
        sass: {
            src: './style/style.scss'
        }
    };


    //Get Inject and WireDep Defaults


//Configuration for Building with WireDep

    config.getWiredepDefault = function () {

        var options = {
            bowerJson: config.bower.json,
            directory: config.build.libDir,
            ignorePath: config.bower.ignorePath,
            fileTypes: {
                html: {
                    replace: {
                        js: function (filePath) {
                            return '<script src="/application/' + filePath.replace('../build/', '') + '"></script>';
                        },
                        css: function (filePath) {
                            return '<link rel="stylesheet" href="/application/' + filePath.replace('../build/', '') + '"/>';
                        }
                    }
                }
            }
        };

        return options;
    };

    config.getInjectDefault = function () {

        var options = {
            addRootSlash: false,
            transform: function (filePath, file, i, length) {

                if (filePath.endsWith('.css')) {
                    return '<link rel="stylesheet" type="text/css" href="/application/' + filePath.replace('../build/', '') + '">';
                }

                return '<script src="/application/' + filePath.replace('../build/', '') + '"></script>';
            }
        };

        return options;

    };

    return config;

};
