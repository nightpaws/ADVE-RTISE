/**
 * Created by nightpaws on 08/02/2016.
 */
angular.module('user')
    .controller('user.login.controller', ['$scope', 'user.service', function($scope, userService){

        $scope.user = {
            username: null,
            sn: null,
            password: null,
            givenNam: null,
            cn: null,
            email: null,
            isAdmin: null,
            createdOn: null
        };

        $scope.login = function(isValid){

            if(!isValid){
                return;
            }

            userService.login($scope.user.username.toLowerCase(), $scope.user.password);

        };
        $scope.register = function(isValid){

            if(!isValid){
                return;
            }

            userService.register($scope.user.username.toLowerCase(), $scope.user.email, $scope.user.password);
        };
    }]);