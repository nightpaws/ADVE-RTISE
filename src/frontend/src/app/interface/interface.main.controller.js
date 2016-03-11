/**
 * Created by nightpaws on 10/02/2016.
 */
angular.module('interface')
    .controller('interface.main.controller', ['$scope', 'interface.request.factory', '$uibModal', 'toastr', '$state', function ($scope, requestHelper, $uibModal, toastr, $state) {

        console.log("main controller called");

        //$scope.Years = [
        //    {
        //        group: "1st Year",
        //        id: 1
        //    },
        //    {
        //        group: "2nd Year",
        //        id: 2
        //    },
        //    {
        //        group: "3rd Year",
        //        id: 3
        //    },
        //    {
        //        group: "4th Year",
        //        id: 4
        //    },
        //    {
        //        group: "5rd Year",
        //        id: 5
        //    },
        //    {
        //        group: "PhD Year",
        //        id: 6
        //    }
        //];

        //$scope = {
        //    message: {
        //        subject: null,
        //        content: null
        //    },
        //    recipients: []
        //};

        $scope.message = function () {

            var modal = $uibModal.open({

                animation: true,
                templateUrl: 'newPost.html',
                controller: 'newMessageModalController'
            });

            modal.result.then(function (subject, content, y1, y2, y3, y4, y5, y6) {
                console.log("subject: " + subject);
                console.log("content: " + content);
                console.log("y1: " + y1);
                console.log("y2: " + y2);
                console.log("y3: " + y3);
                console.log("y4: " + y4);
                console.log("y5: " + y5);
                console.log("y6: " + y6);


                requestHelper.sendMessage(subject, content, y1, y2, y3, y4, y5, y6)
                    .then(function (data) {
                        if (data.data.successful) {
                            toastr.info("Debug point reached!", "successful!");
                        } else {
                            toastr.error(data.data.message, 'Error');
                        }

                    })
                    .catch(function () {
                        toastr.error('Error. Unable to contact Server', 'Error');
                    });

            });
        };
        $scope.schedule = function () {
            console.log("Not Yet Implemented!")
        };
    }
    ])
    .controller('newMessageModalController', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

        $scope.id = null;

        $scope.ok = function () {

            $uibModalInstance.close($scope.id);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }


    ]);