/**
 * Created by Nightpaws on 02/03/2016.
 */
angular.module('schedule')
    .factory('schedule.request.factory', ['$http', 'config', function($http, config){

        var requestHelper = {};

        requestHelper.getInterfaceInfo = function(){

            var url =config.API_URL +  '/schedule';

            //should maybe be using https
            //return $http({
            //    method: 'GET',
            //    url: url
            //})

        };

        return requestHelper;

    }]);
