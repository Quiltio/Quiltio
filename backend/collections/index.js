//TODO autoload all collections
const fs = require('fs');
module.exports = function(app, mongoose) {
    fs.readdirSync('./collections').forEach(function(file) {
        if (file !== 'index.js') {
            require('./' + file)(mongoose);
        }
    });
};
