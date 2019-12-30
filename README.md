# Project Quasar

Quasar is the codename for the next generation of the PhaseShiftSoftware.com homepage. This is a complete re-write in Node.js, and a complete restyling using Bootstrap and the LESS CSS tool.

## Building the Site

To build the site's JavaScript and CSS resources, first ensure that NPM (Node Package Manager) is installed on your system. One you have verfied that, run the following commands:

```
npm install
npm run build
```

This will lint the code, build the JavaScript bundle, and build the CSS bundle.

## Running the Site Locally

After building the code, to run it locally, use the following command:

```
npm start
```

That will start the server listening on port 80. To use a different port, set the `PORT` environment variable to the port number you wish to use.

## Building a Docker Image

If you wish to run the site in a Docker container, you can build a Docker image using the included Dockerfile. Just run the `docker build` command in the root directory to build the image.

## Changing the Web Server Port

A docker-compose .env file has been provided to allow you to configure which port the webserver runs on. By default, it is exposed on port 80. You can modify this port by changing the WEBSERVER_PORT variable value in the .env file located at the root of the repository.
