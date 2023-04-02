const express = require("express");
const app = express();
const {Noco} = require("nocodb");
const httpServer = app.listen(process.env.PORT || 8080);
app.use(await Noco.init({}, httpServer, app));