var express = require("express");

// Get the controllers.
var IndexController = require(__dirname + "/controllers/IndexController.js");
var AboutController = require(__dirname + "/controllers/AboutController.js");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/../bower_components"));

// Register the controllers.
new IndexController(app, __dirname + "/templates");
new AboutController(app, __dirname + "/templates");

app.listen(8080, () => console.log("Listening on port 8080."));
