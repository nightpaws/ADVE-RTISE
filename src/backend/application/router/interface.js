/**
 * Created by Nightpaws on 26/02/2016.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    responseFactory = require('./../response/response');

var interface = function() {

    var appRouter = express.Router();

    appRouter.route('/')

        .get(function(req,res){

            var interface = require('../modules/app/mainapp');
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

    return interfaceRouter;

};

module.exports = interface;
