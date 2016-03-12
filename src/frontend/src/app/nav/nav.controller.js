/**
 * Created by nightpaws on 08/02/2016.
 */
angular.module('nav')
    .controller('nav', ['$rootScope', '$scope', 'user.service', function ($rootScope, $scope, userService) {

        $scope.adminTest = function () {
            if (userService.getAdmin()) {
                return true;
            }
            return false;
        }

        $scope.lecturerTest = function () {
            if (userService.getLecturer()) {
                return true;
            }
            return false;
        }

        $scope.navigate = function () {
            $rootScope.app.showMenu = false;
        }

        $scope.logout = function () {
            $rootScope.app.showMenu = false;
            userService.logout();
        }

    }]);