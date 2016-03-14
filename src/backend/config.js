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
        //If using separate apps list app keys below. Some editing of account.action.js is required to swap to a single app key.
        first: {
            consumer_key: 'vO5NiCxKZWa2KmNQaLBFwX2Cj',
            consumer_secret: 'NlbGlBgPmfMPgViOUo21ylNvfp5kEKYlmpfz03IVD5Ic3geQjY',
            access_token_key: '705761066924560384-kqAVsk3JnydZyoJnp6nVzxiudQwxaIF',
            access_token_secret: 'eEusbHEuXFsACj8zpAbcPsWRinbo2ESknvdIf74eXZZN1'
        },
        second: {
            consumer_key: 'A13u1FWu4SnzgXTpgjszZnAc5',
            consumer_secret: 'CLZCmUsRL2VKuKgo2IB8tQhwdG1s0xII3Q0ddeXoKEU7kXRewc',
            access_token_key: '709400515550044160-Q2BUp4XBcPnmiHL7pIkJgp9WGbnm26u',
            access_token_secret: 'Q9dshfCZUJ51pllqLB7bTTRNdPZRSADksgkL4O28H8hdj'
        },
        third: {
            consumer_key: 'UZm5U7h3WOasa0eX8knndVm8H',
            consumer_secret: 'heONsErtMd9PYglzrsDjugDLCUVRzLwljIIqr1rAx5BkibBHw0',
            access_token_key: '709403379848638464-18iGYoTQKlTqKZeApgTC8c4WhpD7OWz',
            access_token_secret: 'd3oPCBF2pfvvuWojhMBhOpVmEwWjcPEBzQVKM1uP9pGPw'
        },
        fourth: {
            consumer_key: 'ATB6TWupdzOBp9THKdDLw2DD4',
            consumer_secret: 'HfLeiMdWW6Wae8GPzjQDRsRFW0yg1iVrpBCG1nqxA4ds0tlpm9',
            access_token_key: '709404974757847041-oqSncjhSE1FyIfEPe31Tg7uk7EYBnSc',
            access_token_secret: 'zsLhBttl2MU4NP1DJ1mpTldEHXMUhKy53bTGTvwjQEsQa'
        },
        fifth: {
            consumer_key: 'lRkCacDqMMntTc1oeC4xcTntK',
            consumer_secret: 'STTBFAfhYobSw3mTxGuU2olvSf1lCXJ5p3uOlZhAOhS2Ak2PZO',
            access_token_key: '709406162349903873-bPoNxva9hWreKIhc4KnRgtB7y077afW',
            access_token_secret: '70vNW4K703Et3sx4r9gvYzJ0elMEyrkDdVIA9OPzWCQhK'
        },
        phd: {
            consumer_key: 'kVNVuJr7hOHyHaCDwCWEyPifb',
            consumer_secret: 'tDJ1SAvltRzuJGs9pmAewXkFgTOTYwAXhRx5BOvjlVgyZ758r4',
            access_token_key: '709408440377073664-Gsow4NWknR6FDhoJggA586T1PsLAzyq',
            access_token_secret: 'TdZqviE9uI3siAOnGxvE3mO6agGQlrmyleoPzFGBgi5Td'
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