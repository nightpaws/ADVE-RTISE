/**
 * Created by nightpaws on 10/02/2016.
 */
angular.module('session', [])
    .config(['$httpProvider', function ($httpProvider) {

        $httpProvider.interceptors.push('sessionInjector');

    }]);