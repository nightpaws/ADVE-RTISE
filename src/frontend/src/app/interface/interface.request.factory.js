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

        requestHelper.sendMessage = function (subject, message, years) {
            var url = config.API_URL + '/interface/post/';

            return $http({
                method: 'POST',
                url: url,
                sub: subject,
                msg: message,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6
            })
        };

        return requestHelper;

    }]);
