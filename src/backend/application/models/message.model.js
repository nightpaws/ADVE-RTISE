/**
 * Created by Nightpaws on 24/02/2016.
 */
var mongoose = require('mongoose');
var config = require('../../config');

var message = new mongoose.Schema({
    uid:{
        type: String,
        required: true,
        unique: false
    },
    subject: {
        type:String,
        required:true,
        unique:false
    },
    message: {
        type: String,
        required: true,
        unique: false,
        default: "No Message Provided"
    },
    recipients: {
        type: String,
        required:true,
        unique:false
    },
    postDate: {
        type: Date,
        default: Date.now
    }

});
message.set('autoIndex',false);
message.index({ uid: 1, createdOn: 2});

module.exports = mongoose.model('Message', message);