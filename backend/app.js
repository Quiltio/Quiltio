const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const database = require('./collections');
const routes = require('./route');
mongoose.connect('mongodb://localhost/quiltio');

const app = feathers();

app.use(bodyParser.json());
// Parse URL-encoded params
app.use(bodyParser.urlencoded({
    extended: true
}));

app.configure(hooks());


// Add REST API support
app.configure(rest());

//check for authentication user and add to the req
const auth = require('./lib/auth')(app);
app.use(function(req, res, next) {
    var token = req.header('Authorization') ? req.header('Authorization').split(' ')[1] : null;
    if (token) {
        try {
            req.user = auth.validate(token);
        } catch (e) {
            return next(e);
        }
    }
    next();
});
//start database
database(app, mongoose);

routes(app, mongoose);

app.listen(3000, () => console.log('app listen on port 3000'));
