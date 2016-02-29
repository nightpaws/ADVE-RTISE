/**
 * Created by nightpaws on 08/02/2016.
 */
angular.module('user')
    .controller('user.login.controller', ['$scope', 'user.service', function($scope, userService){

        $scope.user = {
            username: null,
            password: null,
            email: null
        };

        $scope.login = function(isValid){

            if(!isValid){
                return;
            }

            userService.login($filter('lowercase')($scope.user.username), $scope.user.password);

        };
        $scope.register = function(isValid){

            if(!isValid){
                return;
            }

            userService.register($filter('lowercase')($scope.user.username), $scope.user.email, $scope.user.password);
        };
    }]);