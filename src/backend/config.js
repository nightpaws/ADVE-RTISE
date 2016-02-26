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
    //DB Settings
    //mySQL: {
    //    host     : 'localhost',
    //    user     : 'advertise_usr',
    //    password : 'ftH7vUe634W5Twx4',
    //    database : 'advertise_db'
    //},

    protect: {
        ignore: { 
            '/users/authentication',
            '/users/register'
        }
    },

    userAuth: {
        privateKey: './ssl/server.key',
        publicKey: './ssl/server.crt'
    },

    //Logging Locations...
    logs: {
        dir: './logs',
        file: '/conn.log'
    }
};

module.exports = config;