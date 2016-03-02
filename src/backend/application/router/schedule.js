/**
 * Created by Nightpaws on 26/02/2016.
 */
var express = require('express'),
    responseFactory = require('./../response/response');

var schedule = function(){
    var scheduleRouter = express.Router()


    scheduleRouter.route('/schedule')
        .post(function(req, res){

        });

    return scheduleRouter;
};

module.exports = schedule;