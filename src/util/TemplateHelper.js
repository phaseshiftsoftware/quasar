"use strict";

var handlebars = require("handlebars");
var fs = require("fs");

class TemplateHelper
{
    /**
     * Load and compile a Handlebars template from a file.
     *
     * @param {string} filePath The path to the template file.
     * @return {Object} The Handlebars compiled template, or null if
     * the template wasn't found.
     */
    static loadFromFile(filePath)
    {
        try {
            var data = fs.readFileSync(filePath, { encoding: "utf8" });
            return handlebars.compile(data);
        } catch(exception) {
            return null;
        }

    }
}

module.exports = TemplateHelper;
