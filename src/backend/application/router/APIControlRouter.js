/**
 * Created by nightpaws on 01/02/2016.
 */

var express = require('express'),
    bodyParser = require('body-parser');

var APIControl = function(){

    var APIControl = express.Router();

    var userRouter = require('./users')();
    APIControl.use('/users', userRouter);

    var interfaceRouter = require('./interface')();
    APIControl.use('/interface', appRouter);

    var accountRouter = require('./accounts')();
    APIControl.use('/accounts',accountRouter);

    var adminRouter = require('./admin')();
    APIControl.use('/admin',adminRouter);

    APIControl.use('*', function(req, res){

        res.status(404).send('api not found');

    });

    return APIControl;

};

module.exports = APIControl;
