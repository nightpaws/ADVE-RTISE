/**
 * Created by nightpaws on 24/03/2016.
 */
angular.module('classes')
    .controller('classes.controller', ['$rootScope', '$scope', 'config', function ($rootScope, $scope, config) {
        $scope.accounts = {
            //Facebook account url link
            FBfirst: null,
            FBsecond: null,
            FBthird: null,
            FBfourth: null,
            FBfifth: null,
            FBphd: null,
            //Twitter account url link
            TWfirst:  null,
            TWsecond: null,
            TWthird: null,
            TWfourth: null,
            TWfifth: null,
            TWphd: null
        }

        var tw1 = config.FB_FIRST;
        var tw2= config.FB_SECOND;
        var tw3 = config.TW_THIRD;
        var tw4 = config.TW_FOURTH;
        var tw5 = config.TW_FIFTH;
        var tw6 = config.TW_PHD;


        $scope.accounts.TWfirst = tw1;
        $scope.accounts.TWsecond = tw2;
        $scope.accounts.TWthird = tw3;
        $scope.accounts.TWfourth = tw4;
        $scope.accounts.TWfifth = tw5;
        $scope.accounts.TWphd = tw6;
        

    }]);
