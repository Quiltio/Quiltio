let hash = require('./hash');
const jwt = require('jwt-simple');
const secret = '576F25A1574FE9EAABDD4A28288F3';
const mongoose = require('mongoose');
module.exports = (app) => {

    return {
        login: function(email, password) {
            let User = mongoose.model('User');
            password = hash.sha1(password);
            return User.findOne({
                email,
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
