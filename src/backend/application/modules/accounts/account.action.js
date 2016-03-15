/**
 * Created by Nightpaws on 04/03/2016.
 */
//General requirements
var q = require('q');
var deferred = q.defer();
var config = require('../../../config');
//var jsonwebtoken = require('./JWT'); //wrong location set

//Database logging components
var messageModel = require('../../models/message.model');
var mongoose = require('mongoose');

//External posting requirements
var Twit = require('twit');

//Twitter accounts for Twit
var first = new Twit({
    consumer_key: config.twitter.first.consumer_key,
    consumer_secret: config.twitter.first.consumer_secret,
    access_token: config.twitter.first.access_token_key,
    access_token_secret: config.twitter.first.access_token_secret,
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});

var second = new Twit({
    consumer_key: config.twitter.second.consumer_key,
    consumer_secret: config.twitter.second.consumer_secret,
    access_token: config.twitter.second.access_token_key,
    access_token_secret: config.twitter.second.access_token_secret,
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});

var third = new Twit({
    consumer_key: config.twitter.third.consumer_key,
    consumer_secret: config.twitter.third.consumer_secret,
    access_token: config.twitter.third.access_token_key,
    access_token_secret: config.twitter.third.access_token_secret,
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});

var fourth = new Twit({
    consumer_key: config.twitter.fourth.consumer_key,
    consumer_secret: config.twitter.fourth.consumer_secret,
    access_token: config.twitter.fourth.access_token_key,
    access_token_secret: config.twitter.fourth.access_token_secret,
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});

var fifth = new Twit({
    consumer_key: config.twitter.fifth.consumer_key,
    consumer_secret: config.twitter.fifth.consumer_secret,
    access_token: config.twitter.fifth.access_token_key,
    access_token_secret: config.twitter.fifth.access_token_secret,
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});

var phd = new Twit({
    consumer_key: config.twitter.phd.consumer_key,
    consumer_secret: config.twitter.phd.consumer_secret,
    access_token: config.twitter.phd.access_token_key,
    access_token_secret: config.twitter.phd.access_token_secret,
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});


var accounts = {
    submit: function (subject, message, recipients, sender) {

        //Initialise variables needed for submissions
        var q = require('q');
        var deferred = q.defer();
        var one, two, three, four, five, six;
        one = recipients[0];
        two = recipients[1];
        three = recipients[2];
        four = recipients[3];
        five = recipients[4];
        six = recipients[5];

        //Message posting attempted! Log to database
        var msg = new messageModel({
            uid: sender,
            subject: subject,
            message: message,
            recipients:recipients
        });

        msg.save(function (err) {
            console.log(err);

            if (err) {

                if (err.code === 11000)
                    deferred.reject('Post flooding detected');
                else
                    deferred.reject('Error posting message');


            } else {

                //Perform submissions to Social Media
                if (one) {
                    first.post('statuses/update', {status: subject}, function (err, data, response) {
                        console.log('data follows:');
                        console.log(data);
                        console.log('end of data:');
                        console.log('response follows');
                        console.log(response);
                        console.log('end of response:');
                        console.log('err follows');
                        console.log(err);
                        console.log('end of err:');
                    })
                }
                if (two) {
                    second.post('statuses/update', {status: subject}, function (err, data, response) {
                        console.log('data follows:');
                        console.log(data);
                        console.log('end of data:');
                        console.log('response follows');
                        console.log(response);
                        console.log('end of response:');
                        console.log('err follows');
                        console.log(err);
                        console.log('end of err:');
                    })
                }
                if (three) {
                    third.post('statuses/update', {status: subject}, function (err, data, response) {
                        console.log('data follows:');
                        console.log(data);
                        console.log('end of data:');
                        console.log('response follows');
                        console.log(response);
                        console.log('end of response:');
                        console.log('err follows');
                        console.log(err);
                        console.log('end of err:');
                    })
                }
                if (four) {
                    fourth.post('statuses/update', {status: subject}, function (err, data, response) {
                        console.log('data follows:');
                        console.log(data);
                        console.log('end of data:');
                        console.log('response follows');
                        console.log(response);
                        console.log('end of response:');
                        console.log('err follows');
                        console.log(err);
                        console.log('end of err:');
                    })
                }
                if (five) {
                    fifth.post('statuses/update', {status: subject}, function (err, data, response) {
                        console.log('data follows:');
                        console.log(data);
                        console.log('end of data:');
                        console.log('response follows');
                        console.log(response);
                        console.log('end of response:');
                        console.log('err follows');
                        console.log(err);
                        console.log('end of err:');
                    })
                }
                if (six) {
                    phd.post('statuses/update', {status: subject}, function (err, data, response) {
                        console.log('data follows:');
                        console.log(data);
                        console.log('end of data:');
                        console.log('response follows');
                        console.log(response);
                        console.log('end of response:');
                        console.log('err follows');
                        console.log(err);
                        console.log('end of err:');
                    })
                }

            }
        });
        return deferred.promise;
    }

};
module.exports = accounts;