/**
 * Created by nightpaws on 10/02/2016.
 */
angular.module('interface')
    .controller('interface.main.controller', ['$scope', 'interface.request.factory', '$uibModal', 'toastr', '$state', 'user.service', function ($scope, requestHelper, $uibModal, toastr, $state, userService) {

        $scope.interface = [];

        console.log("main controller called");

        $scope.lecturerTest = function () {
            if (userService.getLecturer()) {
                return true;
            }
            return false;
        }

        $scope.message = function () {

            var modal = $uibModal.open({
                animation: true,
                templateUrl: 'newPost.html',
                controller: 'newMessageModalController'
            });

            modal.result.then(function (msg) {
                toastr.info("Message Processing...", "Information");
                requestHelper.sendMessage(msg.subject, msg.content, msg.y1, msg.y2, msg.y3, msg.y4, msg.y5, msg.y6)
                    .then(function (data) {
                        if (data.data.successful) {
                            //toastr.info("Debug point reached!", "successful!");
                            var year = 1;
                            for (var yearval in data.data.result) {
                                if (!yearval) {
                                    toastr.error("Sending to " + year + " failed", "Submission Error");
                                }
                                year++;
                            }
                            toastr.success("Processing Completed", "Information");
                        } else {
                            toastr.error("Server response: " + data.data.message, 'Error');
                        }

                    })
                    .catch(function () {
                        toastr.error('Unable to contact Server', 'Error');
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

            $uibModalInstance.close($scope.msg);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }


    ]);