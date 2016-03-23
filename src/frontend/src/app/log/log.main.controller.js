/**
 * Created by nightpaws on 01/03/2016.
 */
angular.module('log')
    .controller('log.main.controller', ['$scope', 'log.request.factory', 'toastr', function ($scope, requestHelper, toastr) {

        $scope.results = [];
        
        requestHelper.getMessages()
            .then(function (data) {
                if (data.data.successful) {
                    $scope.results = data.data.result;

                    toastr.info("Check console","DEVLOG");
                    

                } else {
                    toastr.error(data.data.message, 'Error');
                }

            })
            .catch(function (data) {
                toastr.error('An error occurred while connecting to the server.', 'Error');
                console.log(data);
            })


    }]);