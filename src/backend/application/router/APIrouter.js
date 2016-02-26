/**
 * Created by nightpaws on 01/02/2016.
 */

var express = require('express'),
    bodyParser = require('body-parser');

var apirouter = function(){

    var apirouter = express.Router();

    var userRouter = require('./users')();
    APIrouter.use('/users', userRouter);

    var appRouter = require('./apps')();
    APIrouter.use('/application', appRouter);

    var accountRouter = require('./accounts')();
    APIrouter.use('/accounts',accountRouter);

    var adminRouter = require('./admin')();
    APIrouter.use('/admin',adminRouter);

    APIrouter.use('*', function(req, res){

        res.status(404).send('api not found');

    });

    return apirouter;

};

module.exports = apirouter;
