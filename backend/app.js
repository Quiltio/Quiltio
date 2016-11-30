const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const database = require('./collections');
const routes = require('./route');
const cors = require('cors');
mongoose.connect('mongodb://localhost/quiltio');
mongoose.Promise = Promise;
const app = feathers();
app.use('/assets', feathers.static('assets'));

app.use(cors());
app.use(bodyParser.json());
// Parse URL-encoded params
app.use(bodyParser.urlencoded({
    extended: true
}));

app.configure(hooks());


// Add REST API support
app.configure(rest());
database(app, mongoose);
//check for authentication user and add to the req
const auth = require('./lib/auth')(app);
app.use(function (req, res, next) {
    var token = req.header('Authorization') ? req.header('Authorization').split(' ')[1] : null;
    if (token) {
        try {
            let user = auth.validate(token);
            req.feathers.isAuthenticated = true;
            req.feathers.user = user;
            req.user = user;
        } catch (e) {
            return next(e);
        }
    } else {
        req.feathers.isAuthenticated = false;
    }
    next();
});
//start database


routes(app, mongoose);
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    console.error(err);
    let status = err.status || 500;
    let message = err.message || 'Something broke!';
    res.status(status).json({
        error: message
    });
});
app.listen(3000, () => console.log('app listen on port 3000'));
