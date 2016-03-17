/**
 * Created by Nightpaws on 04/03/2016.
 */
//General requirements
var q = require('q');
var deferred = q.defer();
var config = require('../../../config');

//Database logging components
var messageModel = require('../../models/message.model');
var mongoose = require('mongoose');

//External posting requirements
var Twit = require('twit');
var facebook = require('tiny-facebook-wrapper');

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

//Access Token for Facebook
var accessToken1 = config.facebook.accessToken1;
var accessToken2 = config.facebook.accessToken2;
var accessToken3 = config.facebook.accessToken3;
var accessToken4 = config.facebook.accessToken4;
var accessToken5 = config.facebook.accessToken5;
var accessTokenPhD = config.facebook.accessTokenPhD;

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

                if(message!=null){
                    var t = subject + "\n\n" + message;
                    message = t;

                    if(subject.length>100)
                    subject = subject.substring(0,subject.length - 40);
                }



                //Perform submissions to Social Media
                if (one) {

                    //Facebook Posting
                    facebook.post('/'+config.facebook.pageID_year1+'/feed', accessToken1, {message: message}, function (error, res) {
                        if (error) {
                            s1 = false;
                            console.log("error: " + error); //json response
                        }
                        console.log("response: "+ res);
                        var fbout = JSON.parse(res);

                        //Twitter Posting
                        first.post('statuses/update', {status: subject + " https://facebook.com/"+ fbout.id})
                            .catch(function (err) {
                                s1 = false;
                                console.log(err);
                            });
                    });




                }
                if (two) {


                    second.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s2 = false;
                            console.log(err);
                        });

                    //Facebook Posting
                    facebook.post('/'+config.facebook.pageID_year2+'/feed', accessToken2, {message: subject + " " + message}, function (error, res) {
                        if (error) {
                            s2 = false;
                            console.log("error: " + error); //json response
                            console.log("response: "+ res);
                        }
                    });


                }
                if (three) {


                    third.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s3 = false;
                            console.log(err);
                        });

                    //Facebook Posting
                    facebook.post('/'+config.facebook.pageID_year3+'/feed', accessToken3, {message: subject + " " + message}, function (error, res) {
                        if (error) {
                            s3 = false;
                            console.log("error: " + error); //json response
                            console.log("response: "+ res);
                        }
                    });


                }
                if (four) {


                    fourth.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s4 = false;
                            console.log(err);
                        });

                    //Facebook Posting
                    facebook.post('/'+config.facebook.pageID_year4+'/feed', accessToken4, {message: subject + " " + message}, function (error, res) {
                        if (error) {
                            s4 = false;
                            console.log("error: " + error); //json response
                            console.log("response: "+ res);
                        }
                    });


                }
                if (five) {


                    fifth.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s5 = false;
                            console.log(err);
                        });

                    //Facebook Posting
                    facebook.post('/'+config.facebook.pageID_year5+'feed', accessToken5, {message: subject + " " + message}, function (error, res) {
                        if (error) {
                            s5 = false;
                            console.log("error: " + error); //json response
                            console.log("response: "+ res);
                        }
                    });


                }
                if (six) {


                    phd.post('statuses/update', {status: subject})
                        .catch(function (err) {
                            s6 = false;
                            console.log(err);
                        });

                    //Facebook Posting
                    facebook.post('/'+config.facebook.pageID_yearPhD+'/feed', accessTokenPhD, {message: subject + " " + message}, function (error, res) {
                        if (error) {
                            s6 = false;
                            console.log("error: " + error); //json response
                            console.log("response: "+ res);
                        }
                    });


                }
            }
        });

        var successState = [s1, s2, s3, s4, s5, s6];
        deferred.resolve(successState);

        return deferred.promise;
    }

};
module.exports = accounts;