/**
 * Created by nightpaws on 10/02/2016.
 */
angular.module('interface')
    .controller('interface.main.controller', ['$scope', '$state', '$stateParams', 'interface.request.factory', 'toastr', function ($scope, $state, $stateParams, requestHelper, toastr) {

        //Need to rethink....
        $scope = {

            message: {
                subject: null,
                content: null
            },
            recipients: []

        };

        $scope.sendMessage = function (isValid) {

            if (!isValid) {
                return;
            }

            angular.forEach($scope.Years, function (message) {
                if (message.Selected) $scope.recipients.push(Years.id);
                toastr.info('Hit progress!', 'Development Flag');
            });

            requestHelper.sendMessage($scope.message.subject, $scope.message.content, $scope.recipients)
                .then(function (data) {
                    if (data.data.successful) {
                        toastr.info('Hit Success!', 'Development Flag');
                    } else {
                        toastr.error(data.data.message, 'Error');
                    }
                })
                .catch(function () {
                    toastr.error('Couldn\'t reach server sorry about that', 'Error');
                });
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
            if ($scope.selAll) {
                $scope.selAll = true;
            } else {
                $scope.selAll = false;
            }
            angular.forEach($scope.Years, function (message) {
                message.Selected = $scope.selAll;
            });
        }
    });