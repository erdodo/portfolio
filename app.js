const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const bodyParser = require('body-parser')
const Profile = require("./schemas/Profile");
const profileJson = require("./profile.json");


app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get("/", (req, res) => {
    res.send(process.env.MONGODB_PASS);
})
app.get("/get", (req, res) => {
    Profile.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    })
});


mongoose.connect(`mongodb+srv://erdoganyesil3:${process.env.MONGODB_PASS}@portfolio.tgbprba.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


app.listen(80, () => {
    console.log(`Example app listening on port `);
});
