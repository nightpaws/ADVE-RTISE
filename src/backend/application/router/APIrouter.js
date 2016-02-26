/**
 * Created by nightpaws on 01/02/2016.
 */

var express = require('express'),
    bodyParser = require('body-parser');

var APIrouter = function(){

    var APIrouter = express.Router();

    var userRouter = require('./users')();
    APIrouter.use('/users', userRouter);

    var dashRouter = require('./app')();
    APIrouter.use('/application', dashRouter);

    var accountRouter = require('./accounts')();
    APIrouter.use('/accounts',accountRouter);

    var adminRouter = require('./admin')();
    APIrouter.use('/admin',accountRouter);

    APIrouter.use('*', function(req, res){

        res.status(404).send('api not found');

    });

    return APIrouter;

};

module.exports = APIrouter;
