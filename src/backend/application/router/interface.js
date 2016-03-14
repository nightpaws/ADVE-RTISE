/**
 * Created by Nightpaws on 26/02/2016.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    responseFactory = require('./../response/response');

var interface = function () {

    var interfaceRouter = express.Router();

    interfaceRouter.route('/post')
        .post(function (req, res) {
            var data = req.body;
            var social = require('./../modules/accounts/account.action');
            console.log('INITIAL LOGGING-------------------------');
            console.log('INIT - ' + data.subject);
            console.log('INIT - ' + data.message);
            console.log('INIT - ' + data.recipients);
            console.log('INIT - ' + data.sender);
            console.log('END INITIAL LOGGING---------------------');

            var promise = social.submit(data.subject, data.message, data.recipients, data.sender);
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
