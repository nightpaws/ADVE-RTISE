/**
 * Created by Nightpaws on 28/01/2016.
 */
var config = {
    //Constructing the Node Server.

    ports: {
        https: 3001,
        http: 3000
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

    mongoDB: {
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
        //If login is implemented this app can be used to auth for all users. otherwise separate apps required per account.
        //Generate tokens at apps.twitter.com
        //Login implementation would use https://www.npmjs.com/package/passport-twitter
        //app: {
        //    consumer_key: '',
        //    consumer_secret: '',
        //    callbackURL     : '	https://<url>/application/api/auth/twitter/callback'
        //},

        //In the below sections, consumer_Key and consumer_secret can be removed if a global login provider is connected.
        //If using separate apps list app keys below
        first: {
            consumer_key: 'vO5NiCxKZWa2KmNQaLBFwX2Cj',
            consumer_secret: 'NlbGlBgPmfMPgViOUo21ylNvfp5kEKYlmpfz03IVD5Ic3geQjY',
            access_token_key: '705761066924560384-kqAVsk3JnydZyoJnp6nVzxiudQwxaIF',
            access_token_secret: 'eEusbHEuXFsACj8zpAbcPsWRinbo2ESknvdIf74eXZZN1'
        },
        second: {
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
        },
        third: {
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
        },
        fourth: {
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
        },
        fifth: {
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
        },
        phd: {
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
        }
    },

    facebook: {
        notImplemented: ''
    },

    telegram: {
        notImplemented: ''
    },

    //Logging Locations...
    logs: {
        dir: './logs',
        file: '/conn.log'
    }
};

module.exports = config;