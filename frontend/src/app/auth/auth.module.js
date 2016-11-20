(function(module) {
    module.config(function($stateProvider) {
        $stateProvider.state('auth', {
            abstract: true,
            url: '/auth',
            views: {
                main: {
                    templateUrl: 'auth/auth.tpl.html',
                    controller: 'auth as model'
                }
            }
        }).state('auth.register', {
            url: '/register',
            views: {
                auth: {
                    templateUrl: 'auth/register.tpl.html',
                    controller: 'register as model'
                }
            }
        }).state('auth.sign', {
            url: '/sign',
            views: {
                auth: {
                    templateUrl: 'auth/sign.tpl.html',
                    controller: 'sign as model'
                }
            }
        });
    });
}(angular.module('quiltio.auth', ['ui.router'])));
