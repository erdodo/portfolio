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
    res.set('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));
app.use('/firebase', router);

let db = new JsonDB(new Config("profile.json", true, false, '/'));
app.get("/", async (req, res) => {
    if(req.query.lang === "tr") {
        var data = await db.getData("/");
        res.json(data.tr)
    } else {
        var data = await db.getData("/");
        res.json(data.en)
    }
})
app.get("/env", async (req, res) => {
    res.json(process.env)
})
app.get("/change", async (req, res) => {
    await db.push("/"+req.query.key, req.query.value).then(async () => {
        var data = await db.getData("/");
        res.json(data)
    }).catch((err) => {
        res.send(err)
    })
});
app.get("/project/:name", async (req, res) => {
    let name = req.params.name.replace('%20',' ')
    let data=[]
    if(req.query.lang === "tr") {
        data = await db.getData("/tr/projects");
    } else {
        data = await db.getData("/en/projects");
    }
    let projects=[]
    data.forEach((project) => {
        if(project.category.find((category) => category.toLowerCase() === name.toLowerCase())){
            projects.push(project)
        }
    })
    res.json(projects)

});


app.listen(80, () => {
    console.log(`Example app listening on port `);
});
