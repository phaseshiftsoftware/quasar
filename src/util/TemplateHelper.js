"use strict";

let handlebars = require("handlebars");
let fs = require("fs");

class TemplateHelper
{
    /**
     * Load and compile a Handlebars template from a file.
     *
     * @param {string} filePath The path to the template file.
     * @return {Object} The Handlebars compiled template, or null if
     * the template wasn"t found.
     */
    static loadFromFile(filePath)
    {
        try {
            let data = fs.readFileSync(filePath, { "encoding": "utf8" });
            return handlebars.compile(data);
        } catch(exception) {
            return null;
        }

    }

    /**
     * Load, compile, and register a partial for use in other templates.
     *
     * @param {string} partialName The name the partial will be registered with.
     * @param {string} filePath The path to the template file.
     * @return {bool} True if the registration was sucessful and
     *                false otherwise.
     */
    static loadPartialFromFile(partialName, filePath)
    {
        try {
            let data = fs.readFileSync(filePath, { "encoding": "utf8" });
            handlebars.registerPartial(partialName, data);
        } catch (exception) {
            return false;
        }

        return true;
    }
}

module.exports = TemplateHelper;
