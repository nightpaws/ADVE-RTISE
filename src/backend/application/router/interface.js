/**
 * Created by Nightpaws on 26/02/2016.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    responseFactory = require('./../response/response');

var interface = function () {

    var interfaceRouter = express.Router();


    return interfaceRouter;

};

module.exports = interface;
