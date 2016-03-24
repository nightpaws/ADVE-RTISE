/**
 *Adapted from ACRONYM - Code by Craig Morrison & Tom Maxwell on 11/02/2016.
 */
angular.module('user')
    .service('user.service', ['user.request.factory', 'localStorageService', '$location', 'toastr', function (requestHelper, localStorageService, $location, toastr) {

        var user = null;

        this.login = function (username, password) {
            requestHelper.login(username, password)
                .then(function (data) {
                    if (data.data.successful === true) {
                        var response = data.data;
                        user = response.result;
                        generateGravatar();
                        saveUser();
                        $location.path('/');
                    } else {
                        if (data.data.message != null) {
                            toastr.error(data.data.message, 'Error');
                        }
                        else {
                            toastr.error("An unknown error has occurred", 'Error');
                        }
                    }
                })
                .catch(function (data) {
                    toastr.error('Unable to contact the server.', 'Login Error');
                });
        };

        this.register = function (username, email, password) {

            requestHelper.register(username, email, password)
                .then(function (data) {

                    if (data.data.successful === true) {
                        var response = data.data;
                        user = response.result;
                        toastr.success('Account registration submitted.', 'Success!');
                        $location.path('/user/login');
                    } else {
                        if (data.data.message != null) {
                            toastr.error(data.data.message, 'Error');
                        }
                        else {
                            toastr.error("An unknown error has occurred", 'Error');
                        }
                    }
                })
                .catch(function (data) {
                    toastr.error('Unable to contact the server.', 'Registration Error');
                });
        };

        this.logout = function () {
            localStorageService.remove('user');
            $location.path('/user/login');
        };

        this.getUser = function () {
            return user;
        };

        this.getAdmin = function () {
            return user.isAdmin;
        }
        this.getLecturer = function () {
            return user.isLecturer;
        }

        this.loadUser = function () {
            user = localStorageService.get('user');
            return user;
        };

        var saveUser = function () {
            localStorageService.set('user', user);
        };

        var generateGravatar = function () {
            if (!user.email) return;
            var hash = md5(user.email.toLowerCase().trim());
            user.imageurl = 'https://www.gravatar.com/avatar/' + hash + '.jpeg';
        };

    }]);