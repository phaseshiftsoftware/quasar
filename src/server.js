"use strict";

let express = require("express");

// Get helper classes.
let TemplateHelper = require(__dirname + "/util/TemplateHelper.js");

// Get the controllers.
let IndexController = require(__dirname + "/controllers/IndexController.js");
let AboutController = require(__dirname + "/controllers/AboutController.js");
let DevelopmentController = require(
    __dirname + "/controllers/DevelopmentController.js"
);

let app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/../bower_components"));

// Register partials.
TemplateHelper.loadPartialFromFile(
    "header",
    __dirname + "/templates/header.partial.html"
);

TemplateHelper.loadPartialFromFile(
    "footer",
    __dirname + "/templates/footer.partial.html"
);

// Register the controllers.
new IndexController(app, __dirname + "/templates");
new AboutController(app, __dirname + "/templates");
new DevelopmentController(app, __dirname + "/templates");

let port = process.env.PORT ? process.env.PORT : 80;

app.listen(port, () => console.log(`Listening on port ${port}`));
