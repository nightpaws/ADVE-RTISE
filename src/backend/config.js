/**
 * Created by Nightpaws on 28/01/2016.
 */
var config = {
    //Constructing the Node Server.

    port: 3001,

    ssl: {
        format: 'utf8',
        https: true,
        privateKey: '',
        publicKey: '',
        certSrc: ''
    },

    favicon: {
        src: ''
    },

    //DB Settings
    mySQL: {

    },


    protect: {
        ignore: '/users/authentication'
    },

    userAuth: {
        privateKey: '',
        publicKey: ''
    },

    //Logging Locations...
    logs: {
        dir: './logs',
        file: '/conn.log'
    }
};

module.exports = config;