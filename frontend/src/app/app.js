(function (app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("quiltio", [
    'quiltio.home',
    'quiltio.team',
    'quiltio.profile',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
