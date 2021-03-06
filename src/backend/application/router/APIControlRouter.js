/**
 * Created by nightpaws on 01/02/2016.
 */

var express = require('express'),
    bodyParser = require('body-parser');

var APIControl = function () {

    var APIControl = express.Router();

    var userRouter = require('./users')();
    APIControl.use('/users', userRouter);

    var interfaceRouter = require('./interface')();
    APIControl.use('/interface', interfaceRouter);

    var accountRouter = require('./account')();
    APIControl.use('/account', accountRouter);

    var messageRouter = require('./message')();
    APIControl.use('/message', messageRouter);

    APIControl.use('*', function (req, res) {

        res.status(404).send('api not found');

    });

    return APIControl;

};

module.exports = APIControl;
