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
        unique: false,
        default: 'N.G.'
    },
    password: {
        type : String,
        required: true,
        unique: false
    },
    givenName: {
        type : String,
        required: false,
        unique: false,
        default: 'N.G.'
    },
    cn:{
        type : String,
        required: false,
        unique: false,
        default: 'N.G.'
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    isLecturer:{
        type: Boolean,
        required: true,
        default: false
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    isActive:{
        type: Boolean,
        required: true,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', user);