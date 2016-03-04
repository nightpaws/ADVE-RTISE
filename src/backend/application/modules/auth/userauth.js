/**
 * Created by Nightpaws on 23/02/2016.
 */
var q = require('q');
var deferred = q.defer();
var bcrypt = require('bcrypt');
var jsonwebtoken = require('./JWT');

var userModel = require('../../models/user.model.js');
var mongoose = require('mongoose');

var Auth = {

    validateUser: function(username, password){

        deferred = q.defer();


        userModel.findOne({'username': username}, function(err, doc){

            if(err){

                deferred.reject({
                    error: true,
                    wrongPass: false
                });
                return;
            }

            if(!doc){

                deferred.reject({
                    error: false,
                    wrongPass: true
                });
                return;
            }

            bcrypt.compare(password, doc.password, function(err, res){

                if(err){

                    console.log(err);

                    deferred.reject({
                        error: true,
                        wrongPass: false
                    });
                }else if(!res){
                    deferred.reject({
                        error: false,
                        wrongPass: true
                    });
                }else{


                    deferred.resolve({
                        username: doc.username,
                        email: doc.email,
                        createdOn: doc.createdOn,
                        isAdmin: doc.isAdmin,
                        cn: doc.cn,
                        givenName: doc.givenName,
                        sn: doc.sn,
                        token: jsonwebtoken.generateAuth({username: doc.username, email: doc.email, type: 'user'})
                    });
                    //deferred.resolve(jsonwebtoken.generateAuth({username: doc.username, email: doc.email, type: 'user'}))
                }
            });
        });

        return deferred.promise;

    },

    registerUser: function(username, email, password){

        var q = require('q');

        var deferred = q.defer();


        var userModel = require('../../models/user.model.js');

        var bcrypt = require('bcrypt');
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {

                if(err){
                    deferred.reject('Error creating user');
                }else{
                    var user = new userModel({
                        username: username,
                        email: email,
                        password: hash
                    });

                    user.save(function(err){
                        console.log(err);

                        if(err){

                            if(err.code === 11000)
                                deferred.reject('User already exists');
                            else
                                deferred.reject('Error creating user');


                        }else{

                            deferred.resolve(jsonwebtoken.generateAuth({username:username, email: email, type: 'user'}));
                        }
                    });
                }
            });
        });

        return deferred.promise;
    }

};

module.exports = Auth;