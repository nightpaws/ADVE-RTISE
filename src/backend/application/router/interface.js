/**
 * Created by Nightpaws on 26/02/2016.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    responseFactory = require('./../response/response');

var interface = function () {

    var interfaceRouter = express.Router();


    //Possible placement for splitting social media
    interfaceRouter.route('/post')
        .post(function (req, res) {
            var data = req.body;
            var twitter = require('./../modules/accounts/account.action');

            var promise = twitter.submit(data.subject, data.message, data.recipients, data.sender);
            var response = responseFactory();
            promise
                .then(function (data) {
                    response.setSuccessful(true);
                    response.setMessage('Message Submitted!');
                    response.setResult(data);
                    res.json(response.getResponse());
                })
                .fail(function (data) {
                    response.setSuccessful(false);
                    var message = (data.error) ? 'Error Message goes here.' : '';
                    response.setResult(message);
                    res.json(response.getResponse());
                });
        });


    return interfaceRouter;

};

module.exports = interface;
