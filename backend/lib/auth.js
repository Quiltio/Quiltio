let hash = require('./hash');
const jwt = require('jwt-simple');
const secret = '576F25A1574FE9EAABDD4A28288F3';
module.exports = (app, mongoose) => {
    const User = mongoose.model('User');
    return {
        login: function(username, password) {
            password = hash.sha1(password);
            return User.findOne({
                username,
                password
            }).exec().then(user => {
                if (user) {
                    let token = jwt.encode(user, secret);
                    return {
                        user,
                        token
                    };
                }
                return Promise.reject('INVALID_USERNAME_PASSWORD');
            });
        },
        validate: function(token) {
            var decoded = jwt.decode(token, secret);
            return decoded;
        }
    };
};
