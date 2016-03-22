/**
 * Created by Nightpaws on 20/01/2016.
 */
require('pmx').init({
    http: true,
    network: true,
    ports: true
});

var app = require('./application/app')(),
    config = require('./config'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    privateKey = fs.readFileSync(config.ssl.privateKey, config.ssl.format),
    certificate = fs.readFileSync(config.ssl.certSrc, config.ssl.format);
//Above two lines specify location and format of secure keys

var path = require('path');
// global.appRoot = path.resolve(__dirname) + "/application/";
global.appRoot = path.resolve(__dirname) + "/";

var credentials = {key: privateKey, cert: certificate};

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(config.ports.https, '127.0.0.1');


//Create server and configure for local access only
//if(config.ssl.https){
//    var httpsServer = https.createServer(credentials, app);
//    httpsServer.listen(config.ports.https, '127.0.0.1');
//}else{
//    var httpServer = http.createServer(app);
//    httpServer.listen(config.ports.http, '127.0.0.1');
//}
