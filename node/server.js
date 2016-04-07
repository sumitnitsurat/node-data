/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts" />
/// <reference path="typings/linq/linq.3.0.3-Beta4.d.ts" />
"use strict";
require('reflect-metadata/reflect');
const http = require('http');
const Config = require('./config');
var express = require("express");
const exports_1 = require('nodedata/core/exports');
const data = require('nodedata/mongoose');
var Main = require('nodedata/core')(Config, __dirname, data.entityServiceInst);
data.connect();
data.generateSchema();
var bodyParser = require("body-parser");
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
var app = express();
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var expressSession = require('express-session');
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use("/", exports_1.router);
var server = http.createServer(app);
server.listen(9999);

//# sourceMappingURL=server.js.map
