(function (app) {

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }]);

    app.run(function () {});

    app.controller('AppController', ['$scope', function ($scope) {

    }]);

}(angular.module("quiltio", [
    'quiltio.home',
    'quiltio.team',
    'quiltio.profile',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
