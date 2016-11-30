(function (module) {
    module.controller('auth', function () {

    });
    module.controller('register', ['$http', 'Server', 'growl', '$state', function ($http, Server, growl, $state) {
        var model = this;
        model.register = function () {
            $http.post(Server.path + '/user', model.user).then(function () {
                growl.info('All good, please sign in with your credentials');
                $state.go('auth.sign');
            }).catch(function (err) {
                console.error(err);
            });
        };
    }]);
    module.controller('sign', ['$auth', 'growl', '$state', function ($auth, growl, $state) {
        var model = this;
        model.auth = function () {
            $auth.login(model.user).then(function (response) {
                growl.info('Welcome back ' + response.data.user.name);
                $state.go('home');
            }).catch(function (err) {
                growl.error(err.data.error);
            });
        };
    }]);
}(angular.module('quiltio.auth')));
