const crypto = require('crypto');
module.exports = {
    sha1: function(input) {
        let hash = crypto.createHash('sha1').update(input).digest('hex');
        return hash;
    }
};
