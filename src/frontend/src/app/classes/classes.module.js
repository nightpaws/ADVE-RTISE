/**
 * Created by nightpaws on 24/03/2016.
 */
angular.module('classes', [])
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('page.classes', {
                url: '',
                templateUrl: 'app/classes/classes.html',
                controller: 'classes.controller',
                onEnter: function ($rootScope) {
                    $rootScope.app.stateTitle = 'Classes';
                }
            })

    }]);