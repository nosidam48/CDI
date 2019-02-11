require("dotenv").config();
const express = require("express");
const path = require("path");
// var session = require("express-session");
// var passport = require("./passport");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const user = require('./routes/user');
const db = require("./models");

// Middleware
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(helmet());
app.use(cors());

// Sessions
// app.use(
// 	session({
// 		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
// 		resave: false, //required
// 		saveUninitialized: false //required
// 	})
// )

// Passport
// app.use(passport.initialize())

// Send every request to the React app
app.use('/user', user)
app.use(routes);
// app.use(passport.session()) // calls the deserializeUser

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});