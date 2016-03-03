/**
 * Created by Nightpaws on 23/02/2016.
 */
var mongoose = require('mongoose');
var config = require('../../config');

var user = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        unique: true
    },
    sn: {
        type : String,
        required: false,
        unique: false
    },
    password: {
        type : String,
        required: true,
        unique: false
    },
    givenName: {
        type : String,
        required: false,
        unique: false
    },
    cn:{
        type : String,
        required: false,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', user);