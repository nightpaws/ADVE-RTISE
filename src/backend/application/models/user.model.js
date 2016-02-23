/**
 * Created by Nightpaws on 23/02/2016.
 */
var config = require('../../config');


var user = {
    username: {
        type : String,
        required: true,
        unique: true
    },
    email: {
        type : String,
        required: true,
        unique: true
    },
    passphrase: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    fridges: []
};

module.exports = user;
