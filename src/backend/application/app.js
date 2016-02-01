/**
 * Created by Nightpaws on 31/01/2016.
 */
var app = function(){
    //load config, filesystem, express router,
    var config = require('../../config'),
        fs = require('fs'),
        bodyParser = require('body-parser'),
        express = require('express');
    var app = express();//set up express

    //Database link
    var mysql = require('myaql');
    //db connect string

    //serve favicon before logging for tidiness
    var favicon = require('serve-favicon');
    app.use(favicon(config.favicon.src));

    //TODO
    //Configure Logging
    //Handle Static Acts
    //Authentication and other middleware
    //Routing API calls


    /*
    Catchall
     */
    app.use('*', function(req, res, next){

        if(req.originalUrl.indexOf('dashboard') !== -1){
            var path = require('path');
            res.sendFile(path.resolve('public/index.html'));
        }else{
            res.redirect('https://advertise.wuffbutt.nightpaws.eu/page-not-found');
        }

    });



    return app;
};

module.exports = app;
