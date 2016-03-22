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
    }]);
