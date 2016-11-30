(function (app) {

    app.controller('ProfileController', ['$stateParams', '$http', 'growl', '$q', 'Server', '$scope', function ($stateParams, $http, growl, $q, Server, $scope) {
        var promise;
        var model = this;
        if ($stateParams.id) {
            promise = $http.get(Server.path + '/user/' + $stateParams.id).then(function (response) {
                return response.data;
            });
        } else {
            promise = $q.when($scope.user);
        }
        promise.then(function (user) {
            model.user = user;
        }).catch(function () {
            growl.info('Error loading profile or not exist');
            $state.go('home');
        });
    }]);

}(angular.module("quiltio.profile")));
