/**
 * Created by Nightpaws on 23/02/2016.
 */
var mongoose = require('mongoose');
var config = require('../../config');

var user = new mongoose.Schema({
    uid: {
        type : String,
        required: true,
        unique: true
    },
    sn: {
        type : String,
        required: true,
        unique: false
    },
    givenName: {
        type : String,
        required: true,
        unique: false
    },
    cn:{
        type : String,
        required: true,
        unique: true
    },
    mail:{
        type: String,
        required: true,
        unique: true
    },
    isAdmin:{
        type:Boolean,
        required: true,
        unique: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', user);