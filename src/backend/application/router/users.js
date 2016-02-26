/**
 * Created by Nightpaws on 23/02/2016.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    responseFactory = require('./../response/response');

var users = function(){

    var userRouter = express.Router();

    userRouter.route('/auth')
        .post(function(req, res){

            var data = req.body;

            var Auth = require('./../modules/auth/UserAuth');
            var promise = Auth.validateUser(data.username, data.passphrase);

            var response = responseFactory();

            promise
                .then(function(data){
                    response.setSuccessful(true);
                    response.setMessage('User logged in');
                    response.setResult(data);

                    res.json(response.getResponse());
                })
                .fail(function(data){

                    response.setSuccessful(false);
                    var message = (data.error) ? 'Error resolving password': (data.wrongPass) ? 'Error: wrong username or password' : '';

                    response.setMessage(message);
                    res.json(response.getResponse());
                });

        });

    userRouter.route('/register')
        .post(function(req, res){

            var data = req.body;

            var auth = require('../modules/auth/UserAuth');
            var tokenPromise = auth.registerUser(data.username, data.email, data.passphrase);

            var response = responseFactory();

            tokenPromise
                .then(function(data){

                    response.setSuccessful(true);
                    response.setMessage('User logged in');
                    response.setResult({token: data});

                    res.json(response.getResponse());

                })
                .fail(function(data){
                    response.setSuccessful(false);
                    response.setMessage(data);

                    res.json(response.getResponse());
                });
        });

    return userRouter;
};

module.exports = users;