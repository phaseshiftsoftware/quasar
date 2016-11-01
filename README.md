# Project Quasar

Quasar is the codename for the next generation of the PhaseShiftSoftware.com homepage. This is a complete re-write in Node.js, and a complete restyling using Bootstrap and the LESS CSS tool.

## Running the Website

A docker-compose has been provided in the source to easily run the website via the docker-compose tool. Make sure you have Docker and Docker Compose installed and follow the instructions below.

First, install all the necessary dependnecies.
```
docker-compose run --rm npm install
docker-compose run --rm bower install
```

Build the CSS.
```
docker-compose run --rm gulp css
```

Now run the website.
```
docker-compose website up -d
```

At this point, you should be able to access the website by visiting http://localhost:8080. If you don't see the website appear, try checking the Node server logs by typing `docker-compose logs website`. Perhaps an error occurred.
