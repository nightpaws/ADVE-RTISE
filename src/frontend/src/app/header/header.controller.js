/**
 * Created by Nightpaws on 10/02/2016.
 */
angular.module('header')
    .controller('header.controller', ['$rootScope', '$scope', 'user.service', function($rootScope, $scope, userService){

        $scope.imageurl = userService.getUser().imageurl;


        $scope.back = function(){
            window.history.back();
        };

        $scope.toggleUserMenu = function(){

            if($rootScope.app.showMenu) $scope.toggleGlobalMenu();

            $scope.showUserMenu = !$scope.showUserMenu;

        };

        $scope.toggleGlobalMenu = function(){

            if($scope.showUserMenu) $scope.toggleUserMenu();

            $rootScope.app.showMenu = !$rootScope.app.showMenu;
        };

    }]);