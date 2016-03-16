/**
 * Created by nightpaws on 01/03/2016.
 */
angular.module('admin')
    .factory('admin.request.factory', ['$http', 'config', function ($http, config) {

        var requestHelper = {};

        requestHelper.getInterfaceInfo = function () {

            var url = config.API_URL + '/admin';

            //should maybe be using https
            //return $http({
            //    method: 'GET',
            //    url: url
            //})

        };

        return requestHelper;

    }]);
