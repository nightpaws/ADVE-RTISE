/**
 * Created by nightpaws on 08/02/2016.
 */
angular.module('nav')
    .controller('nav', ['$rootScope','$scope', 'user.service', function($rootScope, $scope, userService){

        $scope.navigate = function(){
            $rootScope.app.showMenu = false;
        }

        $scope.logout = function(){
            userService.logout();
           $scope.toggleGlobalMenu();
        }

        $scope.toggleUserMenu = function(){

            if($rootScope.app.showMenu) $scope.toggleGlobalMenu();

            $scope.showUserMenu = !$scope.showUserMenu;

        };

        $scope.toggleGlobalMenu = function(){

            if($scope.showUserMenu) $scope.toggleUserMenu();

            $rootScope.app.showMenu = !$rootScope.app.showMenu;
        };
    }]);