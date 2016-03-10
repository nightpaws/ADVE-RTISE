/**
 * Created by Nightpaws on 10/03/2016.
 */
angular.module('interface')
    .service('interface.service', ['interface.request.factory', 'localStorageService', '$location', 'toastr', function (requestHelper, localStorageService, $location, toastr) {

        this.sendMessage = function (subject, message, recipients) {
            requestHelper.sendMessage(subject, message, recipients)
                .then(function (data) {

                    if (data.data.successful === true) {
                        toastr.info('Hit progress!', 'Development Flag');


                    } else {
                        toastr.error(data.data.message, 'Error');
                    }
                })
                .catch(function (data) {
                    toastr.error('Error reaching server', 'Error');
                });
        };
    }]);