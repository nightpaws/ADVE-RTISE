/**
 * Created by nightpaws on 10/02/2016.
 */
angular.module('interface', [])
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('page.interface', {
                url: '',
                templateUrl: 'app/interface/interface.main.html',
                controller: 'interface.main.controller',
                onEnter: function($rootScope){
                    $rootScope.app.stateTitle = 'Interface';
                }
            })

    }]);