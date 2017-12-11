let express = require('express'); 
var bodyParser = require('body-parser');
var firebaseConfig = require('./keys/firebaseConfig')
var firebase = require('firebase')
// console.log('this is the config: ', firebaseConfig)

firebase.initializeApp(firebaseConfig)
app = express();

// registering the routes and the model must happen before the routes
routes = require('./routes/authRoutes.js'); //importing route

// Setting extended to true allows parsing of nested objects. 
app.use(bodyParser.urlencoded({extended: true}));
// sets the default parser to .json?
app.use(bodyParser.json());

routes(app); //register the route

port = process.env.PORT || 1337; //lol 
app.listen(port);

console.log('Muster-Native-Server listening on: ' + port);
