/**
 * Created by nightpaws on 01/03/2016.
 */
angular.module('account', [])
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('page.account', {
                url: 'account/',
                templateUrl: 'app/account/account.main.html',
                controller: 'account.main.controller',
                onEnter: function($rootScope){
                    $rootScope.app.stateTitle = 'Account Manager';
                }
            })

    }]);