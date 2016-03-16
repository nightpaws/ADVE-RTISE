/**
 * Created by nightpaws on 01/03/2016.
 */
angular.module('admin', [])
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('page.admin', {
                url: 'admin/',
                templateUrl: 'app/admin/admin.main.html',
                controller: 'admin.main.controller',
                onEnter: function ($rootScope) {
                    $rootScope.app.stateTitle = 'Admin Panel';
                }
            })

    }]);