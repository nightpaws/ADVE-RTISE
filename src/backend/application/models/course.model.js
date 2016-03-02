
/**
 * Created by Nightpaws on 24/02/2016.
 */
var mongoose = require('mongoose');
var config = require('../../config');

var course = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: false
    },
    name:{
        type: String,
        required: true,
        unique: false
    },
    uid: {
        type: String,
        required: true,
        unique: false
    }
});

course.index({ code: 'text', uid: 'text'});

module.exports = mongoose.model('course', course);