const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

module.exports = ({ source, templateData = {}, destinationFolder }) => {
    return gulp.src(source)
        .pipe(nunjucks.compile(templateData))
        .pipe(gulp.dest(destinationFolder));
}