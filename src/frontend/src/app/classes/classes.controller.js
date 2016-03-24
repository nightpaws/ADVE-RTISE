/**
 * Created by nightpaws on 24/03/2016.
 */
angular.module('classes')
    .controller('classes.controller', ['$rootScope', '$scope', 'config', function ($rootScope, $scope, config) {
        $scope.accounts = {
            //Facebook account url link
            FBfirst: config.FB_FIRST,
            FBsecond: config.FB_SECOND,
            FBthird: config.FB_THIRD,
            FBfourth: config.FB_FOURTH,
            FBfifth: config.FB_FITH,
            FBphd: config.FB_PHD,
            //Twitter account url link
            TWfirst: config.TW_FIRST,
            TWsecond:config.TW_SECOND,
            TWthird:config.TW_THIRD,
            TWfourth:config.TW_FOURTH,
            TWfifth:config.TW_FIFTH,
            TWphd:config.TW_PHD
        }
        
    }]);