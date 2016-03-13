/**
 * Created by Nightpaws on 04/03/2016.
 */
//General requirements
var q = require('q');
var deferred = q.defer();
var config = require('../../../config');
var jsonwebtoken = require('./JWT');

//Database logging components
var messageModel = require('../../models')
var mongoose = require('mongoose');

//External posting requirements
var Twit = require('twit')


//Twitter accounts for Twit
var first = new Twit({
        consumer_key: config.twitter.first.consumer_key,
        consumer_secret: config.twitter.first.consumer_secret,
        access_token: config.twitter.first.access_token_key,
        access_token_secret: config.twitter.first.access_token_secret,
        timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
    }),
    second = new Twit({
        consumer_key: config.twitter.second.consumer_key,
        consumer_secret: config.twitter.second.consumer_secret,
        access_token: config.twitter.second.access_token_key,
        access_token_secret: config.twitter.second.access_token_secret,
        timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
    }),
    third = new Twit({
        consumer_key: config.twitter.third.consumer_key,
        consumer_secret: config.twitter.third.consumer_secret,
        access_token: config.twitter.third.access_token_key,
        access_token_secret: config.twitter.third.access_token_secret,
        timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
    }),
    fourth = new Twit({
        consumer_key: config.twitter.fourth.consumer_key,
        consumer_secret: config.twitter.fourth.consumer_secret,
        access_token: config.twitter.fourth.access_token_key,
        access_token_secret: config.twitter.fourth.access_token_secret,
        timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
    }),
    fifth = new Twit({
        consumer_key: config.twitter.fifth.consumer_key,
        consumer_secret: config.twitter.fifth.consumer_secret,
        access_token: config.twitter.fifth.access_token_key,
        access_token_secret: config.twitter.fifth.access_token_secret,
        timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
    }),
    phd = new Twit({
        consumer_key: config.twitter.phd.consumer_key,
        consumer_secret: config.twitter.phd.consumer_secret,
        access_token: config.twitter.phd.access_token_key,
        access_token_secret: config.twitter.phd.access_token_secret,
        timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
    });


var accounts = {


    submit: function (subject, message, recipients, sender) {
        deferred = q.defer();
        var one,two,three,four,five,six;
        one = recipients[0];
        two = recipients[1];
        three = recipients[2];
        four = recipients[3];
        five = recipients[4];
        six = recipients[5];

        if(one){};
        if(two){};
        if(three){};
        if(four){};
        if(five){};
        if(six){};



        return deferred.promise;
    }

};
module.exports = accounts;