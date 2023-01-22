const express = require("express");

var cors= require('cors')
const app = express();
//set static folder
app.use(express.static("public"));

app.use(express.json()); // JSON Body Parser

app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


//app.use("/user", require("./routes/UserRoutes"));


app.get("/", (req, res) => res.send("Hey, API is working!!"));
app.use("/profile",require("./routes/Profile"));
app.use("/food",require("./routes/Food"));

module.exports = app;
