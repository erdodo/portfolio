const express = require("express");
var path = require('path');
require("dotenv").config();
const app = express();
const bodyParser = require('body-parser')
const profileJson = require("./profile.json");
const { JsonDB, Config } = require('node-json-db');
const router = require("./router");

app.set('view engine', 'ejs');




app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));
app.use('/', router);




app.listen(80, () => {
    console.log(`Example app listening on port `);
});
