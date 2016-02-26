/**
 * Created by Nightpaws on 26/02/2016.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    responseFactory = require('./../response/Response');

var app = function() {

    var appRouter = express.Router();

    appRouter.route('/')

        .get(function(req,res){

            var app = require('../modules/app/mainapp');
            var promise = app.getApp(req.user);

            var response = responseFactory();

            promise
                .then(function(data){

                    response.setSuccessful(true);
                    response.setMeta(data.meta);
                    response.setResult(data.warnings);

                    res.json(response.getResponse());

                })
                .fail(function(data){
                    response.setSuccessful(false);
                    response.setMessage(data);

                    res.json(response.getResponse());
                });

        });

    return appRouter;

};

module.exports = app;
