const hash = require('./hash');
module.exports = function (app) {
    const auth = require('./auth')(app);
    let mid = {};
    mid.onlyMe = function (hook, next) {
        if (hook.params.user._id.toString === hook.id) {
            return next();
        }
        next('NOT_THE_SAME_USER');
    };
    mid.authorize = function (hook, next) {
        if (hook.params.user) {
            next();
        } else {
            let err = new Error('NOT_AUTHENTICATED');
            err.status = 403;
            next(err);
        }
    };
    mid.hashPassword = function (hook, next) {
        if (hook.data.password) {
            hook.data.password = hash.sha1(hook.data.password);
        }
        next();
    };
    mid.denied = function (hook, next) {
        next();
    };
    return mid;
};
