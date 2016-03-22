/**
 * Created by Nightpaws on 26/02/2016.
 */
var express = require('express'),
    responseFactory = require('./../response/response');

var account = function () {
    var accountRouter = express.Router();

    accountRouter.route('/account')
        .post(function (req, res) {

        });

    return accountRouter;
};

module.exports = account;