/**
 * Created by nightpaws on 10/02/2016.
 */
//Interface Factory Method
angular.module('interface')
    .factory('interface.request.factory', ['$http', 'config', 'user.service', function ($http, config, userService) {

        var requestHelper = {};
        requestHelper.sendMessage = function (subject, content, y1, y2, y3, y4, y5, y6) {

            var url = config.API_URL + '/interface/post/';

            var recipients = [y1, y2, y3, y4, y5, y6];
            var user = userService.getUser();

            console.log("");
            console.log("-- Post Request");
            console.log("-- " + url);
            console.log("-- " + subject);
            console.log("-- " + content);
            console.log("-- " + recipients);
            console.log("-- " + user.username);
            console.log("");

            return $http({
                method: 'POST',
                url: url,
                data: {
                    subject: subject,
                    message: content,
                    recipients: recipients,
                    sender: user.username
                }
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
