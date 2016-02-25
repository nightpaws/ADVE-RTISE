/**
 * Created by Nightpaws on 24/02/2016.
 */
var mongoose = require('mongoose');
var config = require('../../config');

var account = new mongoose.Schema({
    network: {
        type: String,
        required: true,
        unique: false
    },
    yearGroup: {
        type: int,
        required:true,
        unique:false
    },
    username:{
        type: String,
        required: true,
        unique: false
    },
    token: {
        type: String,
        required: true,
        unique: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Account', account);