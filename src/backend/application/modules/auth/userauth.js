/**
 * Created by Nightpaws on 23/02/2016.
 */

var q = require('q');
var deferred = q.defer();
var bcrypt = require('bcrypt');
var JWT = require('./jsonwebtoken');

var userModel = require('../../models/user.model.js');

var Auth = {
    validateUser: function(username, passphrase){


    },

    registerUser: function(username, email, passphrase){

    }
};

module.exports = Auth;