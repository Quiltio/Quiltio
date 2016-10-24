const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');

const app = feathers();

app.use(bodyParser.json());
// Parse URL-encoded params
app.use(bodyParser.urlencoded({
    extended: true
}));

app.configure(hooks());

// Add REST API support
app.configure(rest());
