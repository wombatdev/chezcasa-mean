// dependencies
var express = require("express");
var app = express();
var http = require("http").Server(app);

var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('./db/connection.js');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var config = require('./oauth.js');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.set("port", process.env.PORT || 3001);
app.use("/assets", express.static("public"));
app.use(require('morgan')('combined'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// passport config
var Account = mongoose.model("Account");
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//port
http.listen(process.env.PORT || 3001, function() {
    console.log("We're online on *:3001");
});
