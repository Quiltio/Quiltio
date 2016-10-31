var mongooseService = require('feathers-mongoose');
module.exports = function(app, mongoose) {
    var User = mongoose.model('User');
    app.use('/api/user', mongooseService({
        Model: User
    }));

    var Team = mongoose.model('Team');
    app.use('/api/team', mongooseService({
        Model: Team
    }));

};
