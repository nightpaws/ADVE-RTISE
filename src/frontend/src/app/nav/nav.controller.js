/**
 * Created by nightpaws on 08/02/2016.
 */
angular.module('nav')
    .controller('nav', ['$rootScope','$scope', 'user.service', function($rootScope, $scope, userService){

        $scope.navigate = function(){
            $rootScope.app.showMenu = false;
        }

        $scope.logout = function(){
            $scope.showUserMenu = !$scope.showUserMenu;
            userService.logout();
        }

    }]);