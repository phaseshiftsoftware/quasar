var gulp = require('gulp');
var eslint = require('gulp-eslint');

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
