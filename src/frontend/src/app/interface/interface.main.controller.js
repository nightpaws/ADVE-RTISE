/**
 * Created by nightpaws on 10/02/2016.
 */
angular.module('interface')
    .controller('interface.main.controller', ['$scope', 'interface.request.factory', 'toastr', function ($scope, requestHelper, toastr) {

        //Checkbox handling
        $scope.Years = [
            {
                group: "1st Year"
            },
            {
                group: "2nd Year"
            },
            {
                group: "3rd Year"
            },
            {
                group: "4th Year"
            },
            {
                group: "5rd Year"
            },
            {
                group: "PhD Year"
            }
        ];

        $scope.checkAll = function () {
            if ($scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.classes, function (year) {
                year.Selected = $scope.selectedAll;
            });
        };


        $scope.messages = {
            subject: null,
            message: null,
            years: null
        };

        $scope.sendMessage = function () {

        };


        //$scope.warnings = {
        //    //scope: [],
        //    //otherscope: []
        //};
        //
        //requestHelper.getInterfaceInfo()
        //    .then(function(data){
        //
        //        if(!data.data.successful){
        //            toastr.error(data.data.message, 'Error');
        //        }else{
        //
        //            //Toastr Messages go here
        //
        //            toastr.error('Unknown warning type', 'Error');
        //        }
        //
        //    })
        //    .catch(function(data){
        //        toastr.error('An error occurred while connecting to the server.', 'Error');
        //    })


    }]);
