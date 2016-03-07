/**
 * Created by Nightpaws on 28/01/2016.
 */
var config = {
    //Constructing the Node Server.

    ports:{
        https:3001,
        http:3000
    },

    ssl: {
        format: 'utf8',
        https: true,
        privateKey: './ssl/server.key',
        certSrc: './ssl/server.crt'
    },

    favicon: {
        src: 'public/favicon.ico'
    },

    mongoDB:{
        string: 'mongodb://localhost/advertise'
    },

    protect: {
        ignore: [ 
            '/users/auth',
            '/users/register'
        ]
    },

    userAuth: {
        privateKey: './ssl/server.key',
        publicKey: './ssl/server.crt'
    },

    twitter: {
        app: {
            consumer_key: 'vO5NiCxKZWa2KmNQaLBFwX2Cj',
            consumer_secret: 'NlbGlBgPmfMPgViOUo21ylNvfp5kEKYlmpfz03IVD5Ic3geQjY',
            callbackURL     : '	https://advertise.nightpaws.eu/application/api/auth/twitter/callback'
        }
    },

    //Logging Locations...
    logs: {
        dir: './logs',
        file: '/conn.log'
    }
};

module.exports = config;