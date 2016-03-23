/**
 * Created by Nightpaws on 02/03/2016.
 */
angular.module('log')
    .factory('log.request.factory', ['$http', 'config', function ($http, config) {

        var requestHelper = {};

        requestHelper.getMessages = function () {

            var url = config.API_URL + '/message/get/';

            return $http({
                method: 'GET',
                url: url
            })

        };

        return requestHelper;

    }]);
