let hash = require('./hash');
const jwt = require('jwt-simple');
const secret = '576F25A1574FE9EAABDD4A28288F3';
const mongoose = require('mongoose');
module.exports = (app) => {

    return {
<<<<<<< HEAD
        login: function(email, password) {
            let User = mongoose.model('User');
=======
        login: function (username, password) {
>>>>>>> 08bade5946675781c596cb8e0df27d37cb5e42d7
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
