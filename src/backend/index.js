/**
 * Created by Nightpaws on 20/01/2016.
 */
var app = require('./application/app')(),
    config = require('./config'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    privateKey = fs.readFileSync(config.ssl.keySrc, config.ssl.format),
    certificate = fs.readFileSync(config.ssl.certSrc, config.ssl.format);
//Above two lines specify location and format of secure keys

var path = require('path');
global.appRoot = path.resolve(__dirname) + "/app/";

var credentials = {key: privateKey, cert: certificate};

//Create server and configure for local access only
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(config.ports.https, '127.0.0.1');