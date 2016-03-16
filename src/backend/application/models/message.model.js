/**
 * Created by Nightpaws on 24/02/2016.
 */
var mongoose = require('mongoose');
var config = require('../../config');

var message = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: false
    },
    subject: {
        type: String,
        required: true,
        unique: false
    },
    message: {
        type: String,
        required: true,
        unique: false,
        default: "No Message Provided"
    },
    year: {
        first: {
            type: Boolean,
            required: true,
            unique: false,
            default: false
        },
        second: {
            type: Boolean,
            required: true,
            unique: false,
            default: false
        },
        third: {
            type: Boolean,
            required: true,
            unique: false,
            default: false
        },
        fourth: {
            type: Boolean,
            required: true,
            unique: false,
            default: false
        },
        fifth: {
            type: Boolean,
            required: true,
            unique: false,
            default: false
        },
        phd: {
            type: Boolean,
            required: true,
            unique: false,
            default: false
        }
    },
    postDate: {
        type: Date,
        default: Date.now
    }

});
message.set('autoIndex', false);
message.index({uid: 1, createdOn: 2});

module.exports = mongoose.model('Message', message);