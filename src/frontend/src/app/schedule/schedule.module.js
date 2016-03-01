/**
 * Created by nightpaws on 01/03/2016.
 */
angular.module('schedule', [])
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('page.schedule', {
                url: 'schedule/',
                templateUrl: 'app/schedule/schedule.main.html',
                controller: 'schedule.main.controller',
                onEnter: function($rootScope){
                    $rootScope.app.stateTitle = 'Message Schedule';
                }
            })

    }]);