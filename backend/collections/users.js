module.exports = function (mongoose) {
    let hash = require('../lib/hash');
    const Schema = mongoose.Schema;
    let User = new Schema({
        name: {
            type: String,
            required: true
        },
        photo: {
            type: Schema.Types.ObjectId,
            ref: 'File'
        },
        password: String,
        email: {
            type: String,
            unique: true,
            required: true
        },
        job: String,
        industry: String,
        location: {},
        areas: [{
            type: String
        }]

    });
    User.pre('save', function (next) {
        this.password = hash.sha1(this.password);
        next();
    });
    return mongoose.model('User', User);
};

// Team
//  - photo
//  - name
//  - Members [User]
//  - description
