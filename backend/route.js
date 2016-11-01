let mongooseService = require('feathers-mongoose');

module.exports = function(app, mongoose) {
    let User = mongoose.model('User');
    const auth = require('./lib/auth')(app);
    const hook = require('./lib/hook')(app);
    app.use('/api/user', mongooseService({
        Model: User
    }));
    let userService = app.service('/api/user');
    userService.before({
        create: [hook.hashPassword],
        update: [hook.authorize, hook.onlyMe],
        patch: [hook.authorize, hook.onlyMe],
        delete: [hook.denied],
        find: [hook.authorize],
        get: [hook.authorize]
    });

    let Team = mongoose.model('Team');
    app.use('/api/team', mongooseService({
        Model: Team
    }));

    let teamService = app.service('/api/team');
    teamService.before({
        create: [hook.authorize],
        update: [hook.authorize, hook.onlyMe],
        patch: [hook.authorize, hook.onlyMe],
        delete: [hook.denied],
        find: [hook.authorize],
        get: [hook.authorize]
    });

    app.use('/api/auth/local', function(req, res, next) {
        let email = req.body.email;
        let password = req.body.password;
        auth.login(email, password).then(response => {
            res.json(response);
        }).catch(next);
    });
    app.use('/api/auth/linkedin', function(req, res, next) {

    });
};
