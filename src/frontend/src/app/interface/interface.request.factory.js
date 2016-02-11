/**
 * Created by nightpaws on 10/02/2016.
 */
//Interface Factory Method
angular.module('interface')
    .factory('interface.request.factory', ['$http', 'config', function($http, config){

        var requestHelper = {};

        requestHelper.getDashboardInfo = function(){

            var url =config.API_URL +  '/interface';

            //should maybe be using https
            return $http({
                method: 'GET',
                url: url
            })

        };

        return requestHelper;

    }]);
