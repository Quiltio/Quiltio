let hash = require('./hash');
const jwt = require('jwt-simple');
const secret = '576F25A1574FE9EAABDD4A28288F3';
module.exports = (app) => {
    const mongoose = require('mongoose');
    const User = mongoose.model('User');
    return {
        login: function (email, password) {
            password = hash.sha1(password);
            return User.findOne({
                email: email,
                password
            }).exec().then(user => {
                if (user) {
                    let token = jwt.encode(user, secret);
                    return {
                        user,
                        token
                    };
                }
                let error = new Error('Username and/or password are incorrect');
                error.status = 401;
                return Promise.reject(error);
            });
        },
        linkedin: function (usr) {
            return User.findOne({
                email: usr.emailAddress
            }).exec().then(function (user) {
                if (user) {
                    let token = jwt.encode(user, secret);
                    return {
                        user,
                        token
                    };
                } else {

                    let user = {
                        email: usr.emailAddress,
                        name: usr.formattedName,
                        industry: usr.industry,
                        location: usr.location,
                        pictureUrl: usr.pictureUrl
                    };
                    let Usr = new User(user);
                    return Usr.save().then(function (user) {
                        let token = jwt.encode(user, secret);
                        return {
                            token,
                            user
                        };
                    });
                }
            });
        },
        validate: function (token) {
            var decoded = jwt.decode(token, secret);
            return decoded;
        }
    };
};
