const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const bodyParser = require('body-parser')
const profile = require('./profile.json')

app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.json(profile);
});
console.log(process.env.MONGODB_PASS);
mongoose.connect(`mongodb+srv://erdoganyesil3:${process.env.MONGODB_PASS}@testdb.eo1tnko.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


app.listen(80, () => {
    console.log(`Example app listening on port `);
});
