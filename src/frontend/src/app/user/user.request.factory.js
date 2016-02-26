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
                    password: password
                }
            })

        };

        requestHelper.register = function(username, email, password){

            return $http({
                method: 'POST',
                url: config.API_URL + '/users/register',
                data: {
                    username: username,
                    email: email,
                    password: password
                }
            })


        };

        return requestHelper;

    }]);