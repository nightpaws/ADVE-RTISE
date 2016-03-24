/**
 * Created by Nightpaws on 10/02/2016.
 */
angular.module('pages', [])
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('page.about', {
                url: 'about/',
                templateUrl: 'app/pages/about.html',
                onEnter: function ($rootScope) {
                    $rootScope.app.stateTitle = 'Help';
                }
            })
            .state('page.help', {
                url: 'help/',
                templateUrl: 'app/pages/help.html',
                onEnter: function ($rootScope) {
                    $rootScope.app.stateTitle = 'Help';
                }
            })
            .state('page.classes', {
                url: 'classes/',
                templateUrl: 'app/pages/classes.html',
                onEnter: function ($rootScope) {
                    $rootScope.app.stateTitle = 'Classes';
                }
            })

    }]);