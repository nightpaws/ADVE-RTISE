/**
 * Created by nightpaws on 10/02/2016.
 */
angular.module('interface')
    .controller('interface.main.controller', ['$scope', 'interface.request.factory', '$uibModal', 'toastr', '$state', function ($scope, requestHelper, $uibModal, toastr, $state) {

        $scope.interface = [];

        console.log("main controller called");

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
            toastr.info("Not Yet Implemented!", "Information");
            console.log("Not Yet Implemented!")
        };
    }
    ])
    .controller('newMessageModalController', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

        $scope.msg = {
            subject: null,
            content: null,
            y1: false,
            y2: false,
            y3: false,
            y4: false,
            y5: false,
            y6: false
        }

        $scope.ok = function () {

            $uibModalInstance.close($scope.msg.subject, $scope.msg.content, $scope.msg.y1, $scope.msg.y2, $scope.msg.y3, $scope.msg.y4, $scope.msg.y5, $scope.msg.y6);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }


    ]);