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
        var s1 = true, s2 = true, s3 = true, s4 = true, s5 = true, s6 = true;

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
            year: {
                first: recipients[0],
                second: recipients[1],
                third: recipients[2],
                fourth: recipients[3],
                fifth: recipients[4],
                phd: recipients[5]
            }
        });

        msg.save(function (err) {

            if (err) {

                if (err.code === 11000)
                    deferred.reject('Post flooding detected');
                else
                    deferred.reject('Error posting message');


            } else {

                //Perform submissions to Social Media
                if (one) {
                    first.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s1 = false;
                            console.log(err);
                        })
                        .then(function (result) {
                            s1 = true;
                        })
                }
                if (two) {
                    second.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s1 = false;
                            console.log(err);
                        })
                        .then(function (result) {
                            s1 = true;
                        })
                }
                if (three) {
                    third.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s2 = false;
                            console.log(err);
                        })
                        .then(function (result) {
                            s3 = true;
                        })
                }
                if (four) {
                    fourth.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s4 = false;
                            console.log(err);
                        })
                        .then(function (result) {
                            s4 = true;
                        })
                }
                if (five) {
                    fifth.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s5 = false;
                            console.log(err);
                        })
                        .then(function (result) {
                            s5 = true;
                        })
                }
                if (six) {
                    phd.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s6 = false;
                            console.log(err);
                        })
                        .then(function (result) {
                            s6 = true;
                        })
                }

            }
        });

        var successState = [s1, s2, s3, s4, s5, s6];
        deferred.resolve(successState);

        return deferred.promise;
    }

};
module.exports = accounts;