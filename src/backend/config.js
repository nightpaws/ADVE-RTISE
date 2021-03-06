/**
 * Created by Nightpaws on 28/01/2016.
 */
var config = {
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
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
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

    //Facebook Access Tokens can be generated by creating an app at https://developers.facebook.com then
    //navigate to https://developers.facebook.com/tools/accesstoken/ to grant access to the account you're using
    //Then click Debug, and Extend Access Token by clicking debug and then clicking the extend button.
    //
    //The PageID can be found in the About Section of the profile you wish to post to.
    //Requires manage_pages & publish_pages permissions
    //status_update may be required in API 2.5 as it was developed by a moron.
    facebook: {
        //Using pages to post requires individual page access tokens.
        groups: false,
        //Page Access Token - Use ones that never expire
        accessToken1: '',
        accessToken2: '',
        accessToken3: '',
        accessToken4: '',
        accessToken5: '',
        accessTokenPhD: '',

        //Page IDs
        pageID_year1: '',
        pageID_year2: '',
        pageID_year3: '',
        pageID_year4: '',
        pageID_year5: '',
        pageID_yearPhD: ''

        //The alternative approach makes use of groups instead of pages. This better ties in with student use of groups
        //on facebook to communicate. Though was not possible to test.
        //groups:true,
        //accessToken:'';
        //
        //page_year1: '',
        //page_year2: '',
        //page_year3: '',
        //page_year4: '',
        //page_year5: '',
        //page_yearPhD: ''

    },

    //Telegram is not supported at this time as their Application is undergoing major changes.
    telegram: {
        notImplemented: ''
    },

    //Logging Locations...
    logs: {
        dir: './logs',
        file: '/conn.log'
    },


    /* DO NOT MODIFY BELOW THIS LINE UNLESS YOU ARE CERTAIN OF WHAT YOU ARE DOING. CHANGES HERE MAY CAUSE THE PROGRAM
     * TO STOP FUNCTIONING. MODIFY AT YOUR OWN RISK. (Thanks!)
     */
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
    }
};

module.exports = config;