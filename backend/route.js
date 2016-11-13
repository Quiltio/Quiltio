let mongooseService = require('feathers-mongoose');

module.exports = (app, mongoose) => {
    const appId = '7753rv9ux2w99w';
    const secret = 'stSyhTo0oIkV9wx4';
    const Linkedin = require('node-linkedin')(appId, secret);
    let User = mongoose.model('User');
    const auth = require('./lib/auth')(app, mongoose);
    app.use('/api/user', mongooseService({
        Model: User
    }));

    let Team = mongoose.model('Team');
    app.use('/api/team', mongooseService({
        Model: Team
    }));

    app.post('/api/auth/local', (req, res, next) => {
        let username = req.body.username;
        let password = req.body.password;
        auth.login(username, password).then(response => {
            res.json(response);
        }).catch(next);
    });

    app.post('/api/auth/linkedin', (req, res, next) => {
        let callback = req.protocol + '://' + req.headers.host + '/api/auth/linkedin/callback';
        Linkedin.auth.setCallback(callback);
        let scope = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin'];
        let state = Math.random() * Date.now();
        let url = Linkedin.auth.authorize(scope, state);
        res.json({
            url
        });
    });

    app.get('/api/auth/linkedin/callback', (req, res, next) => {
        Linkedin.auth.getAccessToken(req.query.code, req.query.state, function(err, response) {
            if (err) {
                res.status(500);
                return res.json({
                    type: 'linkedin_error',
                    error: err
                });
            }
            const linkedin = Linkedin.init('AQVa7syi7EN3ivij83eA6kxkjZrE8IL9e_SthuGZFyPH8BmghLNAlu8sV0FT3WXV0k68d5K5qzu1X2027K0Yez_QWfJBkJKYH5dRpoZaraumZNjUJeL-fiGRCuwluQTxh4k5m2M4f40-t6Hy0lc-CSXbS_x2xr3vHtYNbCvMVH_yXEezK50');
            linkedin.people.me(function(err, user) {
                if (err) {
                    res.status(500);
                    return res.json({
                        type: 'linkedin_error',
                        error: err
                    });
                }
                auth.linkedin(user).then(response => {
                    res.json(response);
                }).catch(function(err) {
                    console.log(err);
                    console.log(err.stack);
                    next(err);
                });
                // res.json(user);
            });
        });
    });
}
