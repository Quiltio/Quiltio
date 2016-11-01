module.exports = function(mongoose) {
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
        members: [{
            type: Schema.Types.ObjectId,
            ref: 'Team'
        }]


    });
    return mongoose.model('Team', Team);
};
