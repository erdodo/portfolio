const express = require("express");
const router = express.Router();
const firebase = require("./firebaseConf");

router.get("/", async (req, res) => {
    res.json(await firebase.getData(req.query.collection, req.query.docId))
})
router.post("/", async (req, res) => {
    res.json(await firebase.getData(req.query.collection, req.query.docId))
})

router.post("/set", async (req, res) => {
    await firebase.setData(req.query.collection, req.query.docId, req.body)
    res.json(await firebase.getData(req.query.collection, req.query.docId))
})

router.delete("/delete", async (req, res) => {
    await firebase.deleteData(req.query.collection, req.query.docId)
    res.json(await firebase.getData(req.query.collection, req.query.docId))
})
router.get("/project/:name",  (req, res) => {
   res.send("hello")

})

module.exports = router;