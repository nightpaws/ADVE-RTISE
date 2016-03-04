/**
 * Created by Nightpaws on 04/03/2016.
 */
//This page contains API calls to add new twitter accounts
var q = require('q');
var deferred = q.defer();
var jsonwebtoken = require('./JWT');
var mongoose = require('mongoose');
var config = require('../../../config');
var twitterStrategy  = require('passport-twitter').Strategy;

var Auth = {
    registerTwitter: function(){

    },
    registerFacebook: function() {

    }
};
module.exports = Auth;