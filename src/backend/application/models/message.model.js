/**
 * Created by Nightpaws on 24/02/2016.
 */
var mongoose = require('mongoose');
var config = require('../../config');

var message = new mongoose.Schema({
    network: {
        type: String,
        required: true,
        unique: false
    },
    username: {
        type: int,
        required:true,
        unique:false
    },
    uid:{
        type: String,
        required: true,
        unique: false
    },
    heading: {
        type:String,
        required:true,
        unique:false
    },
    message: {
        type: String,
        required: true,
        unique: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }

});
message.index({ uid: 'text', createdOn: 'text'});

module.exports = mongoose.model('Message', message);