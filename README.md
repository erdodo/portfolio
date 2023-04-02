# portfolio

localdb example

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
