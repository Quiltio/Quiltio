(function (app) {

    app.controller('team', function ($scope) {
        console.log('team');
    });
    app.controller('teamList', function ($http, Server, growl, $scope) {
        var model = this;
        $http.get(Server.path + '/team').then(function (response) {
            model.teams = response.data.map(function (team) {
                if (isMember(team)) {
                    team.isMember = true;
                }
                return team;
            });
            console.log(model.teams);

        }).catch(function (err) {
            growl.error('Sorry invalid team or not exist');
            $state.go('home');
        });
        model.join = function (team) {
            if (!isMember(team)) {
                team.members.push($scope.user);
                $http.patch(Server.path + '/team/' + team._id, {
                    members: team.members
                }).then(function () {
                    growl.error('Join successfully');
                    team.isMember = true;
                }).catch(function (err) {
                    growl.error('Sorry you can\'t join');
                });
            }

        };
        model.leave = function (team) {
            var index;
            team.members.forEach(function (member, i) {
                if (member._id === $scope.user._id) {
                    console.log('found');
                    index = i;
                }
            });
            if (index !== undefined) {
                team.members.splice(index, 1);
                $http.patch(Server.path + '/team/' + team._id, {
                    members: team.members
                }).then(function () {
                    growl.error('Leave successfully');
                    team.isMember = false;
                }).catch(function (err) {
                    growl.error('Sorry you can\'t leave this team');
                });
            }
            console.log(team);
        };
        var isMember = function (team) {
            var isM = false;
            team.members.forEach(function (member) {
                if (member._id.toString() === $scope.user._id.toString()) {
                    isM = true;
                }
            });
            return isM;
        };
    });
    app.controller('teamDetail', function ($http, Server, $state, $stateParams, growl) {
        var model = this;
        $http.get(Server.path + '/team/' + $stateParams.id).then(function (response) {
            var team = response.data;
            console.log(team);
            if (team._id) {
                model.team = team;
            } else {
                growl.error('Sorry invalid team or not exist');
                $state.go('team.list');
            }
        }).catch(function (err) {
            growl.error('Sorry invalid team or not exist');
            $state.go('team.list');
        });

    });
    app.controller('teamCreate', function ($http, $state, growl, Server) {
        var model = this;
        model.create = function () {
            $http.post(Server.path + '/team', model.team).then(function (response) {
                growl.info('Your team has been created');
                $state.go('team.detail', {
                    id: response.data._id
                });
            }).catch(function (err) {
                console.error(err);
            });
        };
        console.log('team create');
    });

}(angular.module("quiltio.team")));
