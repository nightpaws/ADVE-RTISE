/**
 * Created by nightpaws on 01/03/2016.
 */
angular.module('log', [])
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('page.log', {
                url: 'log/',
                templateUrl: 'app/log/log.main.html',
                controller: 'log.main.controller',
                onEnter: function ($rootScope) {
                    $rootScope.app.stateTitle = 'Message Log';
                }
            })

    }]);