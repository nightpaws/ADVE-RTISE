/**
 * Created by Nightpaws on 31/01/2016.
 */
var app = function () {
    //load config, filesystem, express router,
    var config = require('./../config'),
        fs = require('fs'),
        bodyParser = require('body-parser'),
        express = require('express'),
        csv = require('./csv');
    var app = express();//set up express

    //Database link
    var mongoose = require('mongoose');
    mongoose.connect(config.mongoDB.string);

    //Read in database dependencies
    var models_path = __dirname + '/models'
    fs.readdirSync(models_path).forEach(function (file) {
        if (~file.indexOf('.js')) require(models_path + '/' + file)
    });


    var course = mongoose.model('course', course);
    course.remove({__v: '0'}, function (err) {
        if (err) return handleError(err);
        // console.log("TRIGGERED!");
    });


    var csvHeaders = {
        classes: {
            headers: ['code', 'name', 'uid']
        },
        states: {
            headers: ['something']
        }
    };
    csv.importFile(__dirname + '/classes.csv', csvHeaders.classes.headers, 'course');

    //var mysql = require('mysql');
    ////db connect string
    //var connection = mysql.createConnection(config.mySQL);
    //connection.connect();

    //serve favicon before logging for tidiness
    var favicon = require('serve-favicon');
    app.use(favicon(config.favicon.src));

    //Configure Logging
    var logger = require('morgan');
    var logfile = config.logs.dir + config.logs.file;
    fs.exists(logfile, function (exists) {
        if (!exists) {
            fs.mkdirSync(config.logs.dir);
            fs.writeFileSync(logfile, '', [], function (err) {
                if (err) {
                    console.error('Error creating log file');
                } else {
                    console.info('Log file created at: ' + logfile)
                }
            })
        } else {
            console.info('Using log file at: ' + logfile)
        }
    });
    var accessLogStream = fs.createWriteStream(logfile, {flags: 'a'});
    app.use(logger('combined', {stream: accessLogStream}));
    app.use(logger('dev'));

    //Handle Static Acts
    app.use(express.static('public'));

    var corsOptions = {
        origin: 'https://localhost',
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        allowedHeaders: ['x-access-token', 'Content-Type']
    };

    var cors = require('cors');
    app.options('*', cors(corsOptions));
    app.use(cors(corsOptions));


    ////Authentication and other middleware
    var auth = require('./privilege/authentication.js');
    app.use('/application/api/', auth);

    ////check permissions
    var entitlements = require('./privilege/entitlements');
    app.use('/application/api/', entitlements);

    //parse the json we have received
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());


    //Routing API calls
    var APIControlRouter = require('./router/APIControlRouter')();
    //app.use('/api', APIControlRouter);
    app.use('/application/api', APIControlRouter);

    //catchall
    app.use('*', function (req, res, next) {

        if (req.originalUrl.indexOf('/') !== -1) {
            var path = require('path');
            //res.sendFile(path.resolve('public/application/index.html'));
            res.sendFile(path.resolve('public/index.html'));
        } else {
            res.redirect('https://advertise.nightpaws.eu/page-not-found');
        }

    });

    return app;
};

module.exports = app;
