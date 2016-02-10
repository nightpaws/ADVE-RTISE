/**
 * Created by nightpaws on 08/02/2016.
 */
angular.module('user',['advertise.config']).config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('user', {
            url: '/user',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'app/header/header.html',
                },
                'nav': {
                    template: ''
                },
                'main': {
                    template: '<div ng-class="{\'full-height\': !app.showNav}" ui-view></div>'
                }
            }
        })
        .state('user.auth', {
            template: '<div class="full-height" ui-view></div>',
            onEnter: function($rootScope){
                $rootScope.app.showHeader = false;
                $rootScope.app.showNav = false;
            },
            onExit: function($rootScope){
                $rootScope.app.showHeader = true;
                $rootScope.app.showNav = true;
            }
        })
        //.state('user.auth.reg', {
        //    url: '/register',
        //    templateUrl: 'app/user/user.register.html',
        //    controller: 'user.login.controller'
        //})
        .state('user.auth.login', {
            url: '/login',
            templateUrl: 'app/user/User.login.html',
            controller: 'user.login.controller'
        });

    $stateProvider
        .state('page.userprofile', {
            url: 'user/profile',
            templateUrl: 'app/user/user.profile.html',
            controller: 'user.profile',
            onEnter: function($rootScope){
                $rootScope.app.stateTitle = 'Profile';
            }
        })

}]);