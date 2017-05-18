# Project Quasar

Quasar is the codename for the next generation of the PhaseShiftSoftware.com homepage. This is a complete re-write in Node.js, and a complete restyling using Bootstrap and the LESS CSS tool.

## Running the Website

A docker-compose configuration has been provided to easily run the website via Docker without having to install all the separate depdendencies on the machine.

First, build the website using the following commands.

```
docker-compose run --rm npm install
docker-compose run --rm bower install
docker-compose run --rm gulp
```

Then to run the webserver, run the following command.

```
docker-compose up -d website
```

If you wish to run the website in the foreground to view logs, just remove the -d flag.

At this point, you should be able to access the website by visiting http://localhost. If you don't see the website appear, try checking the Node server logs by typing `docker-compose logs website`. Perhaps an error occurred.

## Changing the Wev Server Port

A docker-compose .env file has been provided to allow you to configure which port the webserver runs on. By default, it is exposed on port 80. You can modify this port by changing the WEBSERVER_PORT variable value in the .env file located at the root of the repository.
