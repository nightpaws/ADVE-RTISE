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


        var messageModel = require('../../models/message.model');


        var query = messageModel.find().limit(20).sort({__id:-1});
        
        var promise = query.exec();
        promise.onResolve(function(err,docs) {
            if(err){
                console.log("Failed database call" + err);
            }
            else
            {
                var response = {
                  meta: docs
                };
                console.log("MESSAGE START");
                console.log("m:" + docs.message);
                console.log("s:" + docs.subject);
                console.log("u" + docs.uid);
                console.log("p" + docs.postDate);
                console.log("y" + docs.year);
                console.log("MESSAGE END");

            }
        });

        // messageModel
        //     .find().limit(20).sort({__id:-1})
        //     .exec(function(err){
        //
        //     if(err){
        //         deferred.reject('Error whilst retrieving messages');
        //     }
        //     else {
        //
        //         var response = {
        //             warnings:[],
        //             meta:{}
        //         }
        //
        //         response.meta.messages = messages
        //     }
        // });



        deferred.reject("Not yet implemented");

        return deferred.promise;
    }
};
module.exports = messages;