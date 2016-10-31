let mongooseService = require('feathers-mongoose');

module.exports = function(app, mongoose) {
    let User = mongoose.model('User');
    const auth = require('./lib/auth')(app, mongoose);
    app.use('/api/user', mongooseService({
        Model: User
    }));

    let Team = mongoose.model('Team');
    app.use('/api/team', mongooseService({
        Model: Team
    }));

    app.use('/api/auth/local', function(req, res, next) {
        let username = req.body.username;
        let password = req.body.password;
        auth.login(username, password).then(response => {
            res.json(response);
        }).catch(next);
    });
    app.use('/api/auth/linkedin', function(req, res, next) {

    });
};
