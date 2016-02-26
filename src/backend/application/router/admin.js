/**
 * Created by Nightpaws on 26/02/2016.
 */
var express = require('express'),
    responseFactory = require('./../response/Response');

var admin = function(){
    var adminRouter = express.Router();


    return adminRouter;
};

module.exports = admin;