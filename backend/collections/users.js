module.exports = function(mongoose) {
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
        location: String,
        areas: [{
            type: String
        }]

    });
    return mongoose.model('User', User);
};

// Team
//  - photo
//  - name
//  - Members [User]
//  - description
