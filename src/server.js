var express = require("express");

// Get the controllers.
var IndexController = require(__dirname + "/controllers/IndexController.js");

var app = express();
app.use(express.static(__dirname + "/public"));

// Register the controllers.
new IndexController(app, __dirname + "/templates");

app.listen(8080, () => console.log("Listening on port 8080."));
