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
        if (user.isLecturer) {
            $scope.isLecturer = 'Yes';
        }
        else{
            $scope.isLecturer = 'No';
        }
        $scope.isAdmin = user.isAdmin;
        if (user.isAdmin) {
            $scope.isAdmin = 'Yes';
        }
        else{
            $scope.isAdmin = 'No';
        }
        $scope.createdOn = user.createdOn;
        $scope.imageurl = user.imageurl;


    }]);
