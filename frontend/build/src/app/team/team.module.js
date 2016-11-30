(function (module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('team', {
                url: '/team',
                views: {
                    main: {
                        controller: 'team as model',
                        templateUrl: 'team/team.tpl.html'
                    }
                }

            })
            .state('team.list', {
                url: '/',
                views: {
                    team: {
                        controller: 'teamList as model',
                        templateUrl: 'team/team-list.tpl.html'
                    }
                },
                data: {
                    pageTitle: 'Team'
                }
            }).state('team.detail', {
                url: '/detail/:id',
                views: {
                    team: {
                        controller: 'teamDetail as model',
                        templateUrl: 'team/team-detail.tpl.html'
                    }
                }
            }).state('team.create', {
                url: '/create',
                views: {
                    team: {
                        controller: 'teamCreate as model',
                        templateUrl: 'team/team-create.tpl.html'
                    }
                }
            });
    }]);

}(angular.module("quiltio.team", [
    'ui.router'
])));

(function (module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('team', {
                url: '/team',
                views: {
                    main: {
                        controller: 'team as model',
                        templateUrl: 'team/team.tpl.html'
                    }
                }

            })
            .state('team.list', {
                url: '/',
                views: {
                    team: {
                        controller: 'teamList as model',
                        templateUrl: 'team/team-list.tpl.html'
                    }
                },
                data: {
                    pageTitle: 'Team'
                }
            }).state('team.detail', {
                url: '/detail/:id',
                views: {
                    team: {
                        controller: 'teamDetail as model',
                        templateUrl: 'team/team-detail.tpl.html'
                    }
                }
            }).state('team.create', {
                url: '/create',
                views: {
                    team: {
                        controller: 'teamCreate as model',
                        templateUrl: 'team/team-create.tpl.html'
                    }
                }
            });
    }]);

}(angular.module("quiltio.team", [
    'ui.router'
])));
