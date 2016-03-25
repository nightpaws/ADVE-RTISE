/**
 * Created by Nightpaws on 11/02/2016.
 */
angular.module('user')
    .controller('user.profile', ['$scope', 'user.service', function ($scope, userService) {
        const user = userService.getUser();
        $scope.username = user.username;
        $scope.sn = user.sn;
        $scope.givenName = user.givenName;
        $scope.cn = user.cn;
        $scope.email = user.email;
        $scope.isLecturer = user.isLecturer;
        $scope.isAdmin = user.isAdmin;
        $scope.createdOn = user.createdOn;
        $scope.imageurl = user.imageurl;

        //https://stackoverflow.com/questions/24611455/how-to-display-yes-no-instead-of-true-false-in-angularjs
        app.filter('true_false', function () {
            return function (text, length, end) {
                if (text) {
                    return 'Yes';
                }
                return 'No';
            }
        });
    }]);
