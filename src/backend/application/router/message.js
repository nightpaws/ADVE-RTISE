/**
 * Created by Nightpaws on 26/02/2016.
 */
var express = require('express'),
    responseFactory = require('./../response/response');

var message = function () {

    var messageRouter = express.Router();


    // messageRouter.route('/message')
    //     .post(function (req, res) {
    //
    //     });


    messageRouter.route('/get')
        .get(function (req, res) {
            var message = require('../modules/message/messages');
            var promise = message.getTable();
            var response = responseFactory();

            promise
                .then(function (data) {
                    response.setSuccessful(true);
                    response.setResult(data);
                    res.json(response.getResponse());
                })
                .fail(function (data) {
                    response.setSuccessful(false);
                    response.setMessage(data);
                    res.json(response.getResponse());
                });
        });

    return messageRouter;
};

module.exports = message;