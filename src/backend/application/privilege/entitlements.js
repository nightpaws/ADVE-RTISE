/**
 * Created by Nightpaws on 23/02/2016.
 */
var config = require('../../config');

require('string.prototype.startswith');

var Entitlements = function(req, res, next){

    var noAuth = false;
    config.secure.ignore.map(function(item){

        if(req.path.startsWith(item)){

            noAuth = true;
        }
    });
    if(noAuth){
        next();
        return;
    }

    //TODO check the permissions
    var type = req.user.type;
    next();
};

module.exports = Entitlements;