/**
 * Created by Nightpaws on 04/03/2016.
 */
var q = require('q');
var deferred = q.defer();
var mongoose = require('mongoose');
var config = require('../../../config');

var messages = {

    getTable: function () {
        deferred = q.defer();

        deferred.reject("Not yet implemented");

        return deferred.promise;
    }
};
module.exports = messages;