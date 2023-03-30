const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require('body-parser')
const profileJson = require("./profile.json");
const { JsonDB, Config } = require('node-json-db');

let db = new JsonDB(new Config("profile.json", true, false, '/'));

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get("/", async (req, res) => {
    var data = await db.getData("/");
    res.json(data)
})
app.get("/change", async (req, res) => {
    await db.push("/"+req.query.key, req.query.value).then(async () => {
        var data = await db.getData("/");
        res.json(data)
    }).catch((err) => {
        res.send(err)
    })

});




app.listen(80, () => {
    console.log(`Example app listening on port `);
});
