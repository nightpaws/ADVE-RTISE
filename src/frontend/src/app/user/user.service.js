/**
 * Created by Nightpaws on 11/02/2016.
 */
angular.module('user')
    .service('user.service', ['user.request.factory', 'localStorageService','$location', 'toastr', function(requestHelper, localStorageService, $location, toastr){

        var user = null;

        this.login = function(username, password){
            requestHelper.login(username, password)
                .then(function(data){
                    if(data.data.successful === true){
                        var response = data.data;
                        user = response.result;
                        generateGravatar();
                        saveUser();
                        $location.path('/');
                    }else{
                        toastr.error(data.data.message, 'Error');
                    }
                })
                .catch(function(data){
                    toastr.error('Unable to contact the server.', 'Error');
                });
        };

        this.logout = function(){
            localStorageService.remove('user');
            $location.path('/user/login');
        };

        this.getUser = function(){
            return user;
        };

        this.getToken = function(){
            return user.token;
        };

        this.loadUser = function(){
            user = localStorageService.get('user');
            console.log('user loaded');
            return user;
        };

        var saveUser = function(){
            localStorageService.set('user', user);
        };

        var generateGravatar = function(){
            if(!user.email) return;
            var hash = md5( user.email.toLowerCase().trim() );
            user.imageurl = 'https://www.gravatar.com/avatar/' + hash + '.jpeg';
        };

    }]);