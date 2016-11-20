(function(app) {

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function() {});

    app.controller('AppController', function($scope, $rootScope, $state) {
        $scope.bluer = false;
        if ($state.current.name === 'home') {
            $scope.bluer = false;
        } else {
            $scope.bluer = true;
        }
        $rootScope.$on('$stateChangeSuccess', function(ev, toState) {
            if (toState.name === 'home') {
                $scope.bluer = false;
            } else {
                $scope.bluer = true;
            }
        });
    });

}(angular.module("quiltio", [
    'quiltio.home',
    'quiltio.auth',
    'quiltio.team',
    'quiltio.profile',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
