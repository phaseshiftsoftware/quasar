"use strict";

let TemplateHelper = require(__dirname + "/../util/TemplateHelper.js");

/**
 * Handles requests for the Development page.
 */
class DevelopmentController
{
    /**
     * Constructor.
     *
     * @param {Object} app - The ExpressJS application.
     * @param {string} templateDir - The directory path of the HTML templates.
     */
    constructor(app, templateDir)
    {
        this.app = app;

        // Build the routes.
        this.app.get("/development", this.handleGetRequest.bind(this));

        // Get the template.
        this.template = TemplateHelper.loadFromFile(
            templateDir + "/development.html"
        );
    }

    /**
     * Handles a get request.
     * @param {Object} req - The HTTP request object.
     * @param {Object} res - The HTTP response object.
     */
    handleGetRequest(req, res)
    {
        res.send(this.template({}));
    }
}

module.exports = DevelopmentController;
