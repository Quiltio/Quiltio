module.exports = function(mongoose) {
    const Schema = mongoose.Schema;
    let File = new Schema({
        name: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        ext: String,
        mimeType: String
    });
    return mongoose.model('File', File);
};
