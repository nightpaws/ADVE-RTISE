/**
 * Created by nightpaws on 10/02/2016.
 */
//Interface Factory Method
angular.module('interface')
    .factory('interface.request.factory', ['$http', 'config', function ($http, config) {

        var requestHelper = {};

        requestHelper.getInterfaceInfo = function () {

            var url = config.API_URL + '/interface';

            //should maybe be using https
            return $http({
                method: 'GET',
                url: url
            })
        };

        requestHelper.sendMessage = function (subject, message,m1,m2,m3,m4,m5,m6) {
            var url = config.API_URL + '/interface/post/';

            return $http({
                method: 'POST',
                url: url,
                sub: subject,
                msg: message,
                m1: 1,
                m2: 2,
                m3: 3,
                m4: 4,
                m5: 5,
                m6: 6
            })
        };

        return requestHelper;

    }]);
