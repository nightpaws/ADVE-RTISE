/**
 * Created by nightpaws on 10/02/2016.
 */

//Required to initiate a browser session

angular.module('session')
    .factory('sessionInjector', ['config', 'localStorageService', function (config, localStorageService) {

        var session = {

            request: function (request) {

                if (request.url.startsWith(config.API_URL)) {

                    var user = localStorageService.get('user');

                    if (user) {
                        request.headers['x-access-token'] = localStorageService.get('user').token;
                    }
                }
                return request;
            }
        };

        return session;

    }]);