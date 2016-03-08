/**
 * Created by nightpaws on 10/02/2016.
 */
angular.module('interface')
    .controller('interface.main.controller', ['$scope', '$state', '$stateParams', 'interface.request.factory', 'toastr', function ($scope, $state, $stateParams, requestHelper, toastr) {

        //Need to rethink....
        $scope = {

            message: {
                subject: null,
                content: null,
            }
        };

        $scope.sendMessage = function (isValid) {

            if (!isValid) {
                return;
            }
            requestHelper.sendMessage($scope.message.subject, $scope.message.content, $scope.message.m1, $scope.message.m2, $scope.message.m3, $scope.message.m4, $scope.message.m5, $scope.message.m6);
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


    }
    ])
    .controller("checkboxController", function checkboxController($scope) {
        //Checkbox handling
        $scope.Years = [
            {
                group: "1st Year",
                id: 1
            },
            {
                group: "2nd Year",
                id: 2
            },
            {
                group: "3rd Year",
                id: 3
            },
            {
                group: "4th Year",
                id: 4
            },
            {
                group: "5rd Year",
                id: 5
            },
            {
                group: "PhD Year",
                id: 6
            }
        ];
        $scope.checkAll = function () {
            if ($scope.message.selAll) {
                $scope.message.selAll = true;
            } else {
                $scope.message.selAll = false;
            }
            angular.forEach($scope.Years, function (message) {
                message.Selected = $scope.message.selAll;
            });
        }
    });