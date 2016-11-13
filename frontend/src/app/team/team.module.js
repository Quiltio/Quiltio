(function (module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('team', {
            url: '/team',
            views: {
                "main": {
                    controller: 'TeamController as model',
                    templateUrl: 'team/team.tpl.html'
                }
            },
            data: {
                pageTitle: 'Team'
            }
        });
    });

}(angular.module("quiltio.team", [
    'ui.router'
])));
