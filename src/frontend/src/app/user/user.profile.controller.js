/**
 * Created by Nightpaws on 11/02/2016.
 */
angular.module('user')
    .controller('user.profile', ['$scope', 'user.service', function($scope, userService){
        const user = userService.getUser();
        $scope.username = user.username;
        $scope.email = user.email;
        $scope.imageurl = user.imageurl;

    }]);
