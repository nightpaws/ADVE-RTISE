/**
 * Created by Nightpaws on 26/02/2016.
 */
var q = require('q');
var deferred = q.defer();
var mongoose = require('mongoose');
var config = require('../../../config');

var mainapp = {

    getApp: function (user) {

        deferred = q.defer();

        if (user.type !== 'user') {
            deferred.reject('Wrong user type');
        }


        var userModel = require('../../models/user.model');

        userModel
            .findOne({username: user.username})
            .exec(function (err, user) {

                if (err || !user) {
                    deferred.reject('Error finding your user profile');
                } else {

                    var response = {
                        warnings: [],
                        meta: {}
                    };

                }

            });


        return deferred.promise;

    }


};


module.exports = mainapp;