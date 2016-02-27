/**
 * Created by Nightpaws on 23/02/2016.
 */
var jsonwebtok = require('jsonwebtoken');
var fs = require('fs');
var config = require('../../../config');

var jsonwebtoken = {

    generateAuth: function(data){


        var cert = fs.readFileSync(config.userAuth.privateKey);
        return jsonwebtok.sign(data, cert, { algorithm: 'RS256'});

    },

    validateToken: function(token){

        var cert = fs.readFileSync(config.userAuth.publicKey);

        try {

            return jsonwebtok.verify(token, cert, {algorithms: ['RS256']});

        }catch(err){
            return;
        }
    }

};

module.exports = jsonwebtoken;