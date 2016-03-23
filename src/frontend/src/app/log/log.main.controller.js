/**
 * Created by nightpaws on 01/03/2016.
 */
angular.module('log')
    .controller('log.main.controller', ['$scope', 'log.request.factory', 'toastr', function ($scope, requestHelper, toastr) {

        $scope.results = [];

        //Serverside?
        // $scope.msg = {
        //     subject: null,
        //     content: null,
        //     sender: null,
        //     year: {
        //         y1: false,
        //         y2: false,
        //         y3: false,
        //         y4: false,
        //         y5: false,
        //         y6: false
        //     },
        //     postDate: null
        // };

        requestHelper.getMessages()
            .then(function (data) {
                if (data.data.successful) {
                    $scope.results = data.data.result;

                    toastr.info("Check console","DEVLOG");

                    console.log("TESTRESULTS BELOW:");
                    console.log($scope.results);
                    console.log("TESTRESULTS END");

                } else {
                    toastr.error(data.data.message, 'Error');
                }

            })
            .catch(function (data) {
                toastr.error('An error occurred while connecting to the server.', 'Error');
                console.log(data);
            })


    }]);