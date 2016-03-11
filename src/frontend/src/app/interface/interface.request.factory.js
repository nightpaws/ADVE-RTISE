/**
 * Created by nightpaws on 10/02/2016.
 */
//Interface Factory Method
angular.module('interface')
    .factory('interface.request.factory', ['$http', 'config', function ($http, config) {

        var requestHelper = {};
        //
        //requestHelper.getInterfaceInfo = function () {
        //
        //    var url = config.API_URL + '/interface';
        //
        //    //should maybe be using https
        //    return $http({
        //        method: 'GET',
        //        url: url
        //    })
        //};
        //
        requestHelper.sendMessage = function (subject, content, y1, y2, y3, y4, y5, y6) {
            var url = config.API_URL + '/interface/post/';
            var recipients = [y1, y2, y3, y4, y5, y6];

            return $http({
                method: 'POST',
                url: url,
                sub: subject,
                msg: content,
                rec: recipients
            })
        };

        requestHelper.get = function () {

            var url = config.API_URL + '/interface/get/messages';

            return $http({
                method: 'GET',
                url: url
            })

        };

        return requestHelper;


    }]);
