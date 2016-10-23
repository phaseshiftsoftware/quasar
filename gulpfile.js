var gulp = require('gulp');
var eslint = require('gulp-eslint');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('default', function() {
    console.log('To be implemented.');
});

gulp.task('lint', function() {
    return gulp.src(
        ['**/*.js','!node_modules/**']
    ).pipe(
        eslint({
            configFile: "eslint.json"
        })
    ).pipe(
        eslint.format()
    ).pipe(
        eslint.failAfterError()
    );
});

gulp.task('css', function() {
    return gulp.src(
        ['src/css/**/*.less']
    ).pipe(
        less()
    ).pipe(
        concat('all.css')
    ).pipe(
        gulp.dest('src/public/css')
    )
});
        
