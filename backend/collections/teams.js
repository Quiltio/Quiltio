module.exports = function (mongoose) {
    const Schema = mongoose.Schema;
    let Team = new Schema({
        name: {
            type: String,
            required: true
        },
        description: String,
        photo: {
            type: Schema.Types.ObjectId,
            ref: 'File'
        },
        website: String,
        lead: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        members: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]


    });
    return mongoose.model('Team', Team);
};
