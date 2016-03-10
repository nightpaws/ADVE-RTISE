/**
 * Created by nightpaws on 10/02/2016.
 */
//Interface Factory Method
angular.module('interface')
    .factory('interface.request.factory', ['$http', 'config', function ($http, config) {

        var requestHelper = {};
        //
        //requestHelper.getInterfaceInfo = function () {
        //
        //    var url = config.API_URL + '/interface';
        //
        //    //should maybe be using https
        //    return $http({
        //        method: 'GET',
        //        url: url
        //    })
        //};
        //
        requestHelper.sendMessage = function (subject, message, recipients) {
            var url = config.API_URL + '/interface/post/';

            return $http({
                method: 'POST',
                url: url,
                sub: subject,
                msg: message,
                rec: recipients
            })
        };

        return requestHelper;


    }]);
