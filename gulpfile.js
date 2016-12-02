"use strict";

let gulp = require("gulp");
let eslint = require("gulp-eslint");
let less = require("gulp-less");
let concat = require("gulp-concat");
let bower = require("gulp-bower");

gulp.task("default", ["bower", "lint", "css"]);

gulp.task("bower", function() {
    return bower();
});

gulp.task("lint", function() {
    return gulp.src(
        ["**/*.js","!node_modules/**"]
    ).pipe(
        eslint({
            "configFile": "eslint.json"
        })
    ).pipe(
        eslint.format()
    ).pipe(
        eslint.failAfterError()
    );
});

gulp.task("css", function() {
    return gulp.src(
        ["src/css/**/*.less"]
    ).pipe(
        less()
    ).pipe(
        concat("all.css")
    ).pipe(
        gulp.dest("src/public/css")
    )
});
        
