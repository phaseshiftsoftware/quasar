"use strict";

var TemplateHelper = require(__dirname + "/../util/TemplateHelper.js");

/**
 * Handles requests for the landing page.
 */
class IndexController
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
        this.app.get('/', this.handleGetRequest.bind(this));

        // Get the template.
        this.template = TemplateHelper.loadFromFile(templateDir + '/index.html');
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

 module.exports = IndexController;
