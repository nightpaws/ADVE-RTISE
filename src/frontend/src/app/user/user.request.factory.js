/**
 * Created by Nightpaws on 11/02/2016.
 */
angular.module('user')
    .factory('user.request.factory', ['$http', 'config', function($http, config){

        var requestHelper = {};

        requestHelper.login = function(username, password){


            return $http({
                method: 'POST',
                url: config.API_URL + '/users/auth',
                data: {
                    username: username,
                    passphrase: password
                }
            })

        };

        return requestHelper;

    }]);