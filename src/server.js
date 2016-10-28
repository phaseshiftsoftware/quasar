var express = require("express");

// Get helper classes.
var TemplateHelper = require(__dirname + "/util/TemplateHelper.js");

// Get the controllers.
var IndexController = require(__dirname + "/controllers/IndexController.js");
var AboutController = require(__dirname + "/controllers/AboutController.js");
var DevelopmentController = require(__dirname + "/controllers/DevelopmentController.js");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/../bower_components"));

// Register partials.
TemplateHelper.loadPartialFromFile("header", __dirname + "/templates/header.partial.html");
TemplateHelper.loadPartialFromFile("footer", __dirname + "/templates/footer.partial.html");

// Register the controllers.
new IndexController(app, __dirname + "/templates");
new AboutController(app, __dirname + "/templates");
new DevelopmentController(app, __dirname + "/templates");

app.listen(8080, () => console.log("Listening on port 8080."));
