/**
 * Created by nightpaws on 01/03/2016.
 */
angular.module('schedule')
    .controller('schedule.main.controller', ['$scope', 'schedule.request.factory', 'toastr', function($scope, requestHelper, toastr){

        $scope.warnings = {
            //scope: [],
            //otherscope: []
        };

        requestHelper.getInterfaceInfo()
            .then(function(data){

                if(!data.data.successful){
                    toastr.error(data.data.message, 'Error');
                }else{

                    //Toastr Messages go here

                    toastr.error('Unknown warning type', 'Error');
                }

            })
            .catch(function(data){
                toastr.error('An error occurred while connecting to the server.', 'Error');
            })


    }]);