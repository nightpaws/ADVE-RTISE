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
        //publicKey: './ssl/server.crt'
        certSrc: './ssl/server.crt'
    },

    favicon: {
        src: 'public/application/favicon.ico'
    },

    //DB Settings
    mySQL: '',

    protect: {
        ignore: '/users/authentication'
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