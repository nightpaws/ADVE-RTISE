/**
 * Created by nightpaws on 08/02/2016.
 */
angular.module('nav')
    .controller('nav', ['$rootScope','$scope', function($rootScope, $scope){

        $scope.navigate = function(){
            $rootScope.app.showMenu = false;
        }

    }]);