(function (app) {
    app.constant('Server', {
        path: 'http://localhost:3000/api'
    });
    app.config(function ($stateProvider, $authProvider, $urlRouterProvider, growlProvider, Server) {
        $urlRouterProvider.otherwise('/home');
        $authProvider.baseUrl = Server.path;
        $authProvider.loginUrl = '/auth/local';
        growlProvider.globalTimeToLive(10000);
        // auth/local
    });

    app.run(function () {});

    app.controller('AppController', function ($scope, $rootScope, $state, $auth) {
        $scope.bluer = false;
        $scope.isAuthenticated = $auth.isAuthenticated();
        $scope.user = $auth.getPayload();
        $scope.logout = function () {
            $auth.logout();

            $state.go('auth.sign');
        };
        // $scope.user = $auth.getUser();
        if ($state.current.name === 'home') {
            $scope.bluer = false;
        } else {
            $scope.bluer = true;
        }
        $rootScope.$on('$stateChangeSuccess', function (ev, toState) {
            $scope.isAuthenticated = $auth.isAuthenticated();
            $scope.user = $auth.getPayload();
            if (toState.name === 'home') {
                $scope.bluer = false;
            } else {
                $scope.bluer = true;
            }
        });
    });

}(angular.module("quiltio", [
    'angular-growl',
    'satellizer',
    'quiltio.home',
    'quiltio.auth',
    'quiltio.team',

    'quiltio.profile',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
