/**
 * Created by nightpaws on 01/03/2016.
 */
angular.module('schedules', [])
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('page.schedule', {
                url: '',
                templateUrl: 'app/interface/schedule.main.html',
                controller: 'schedule.main.controller',
                onEnter: function($rootScope){
                    $rootScope.app.stateTitle = 'Scheduling';
                }
            })

    }]);