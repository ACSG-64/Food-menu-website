const gulp = require('gulp');
const replace = require('gulp-replace-task');

module.exports = ({ templatePath, cssBundlePath, destinationFolder }) => {
    return gulp.src(templatePath)
        .pipe(replace({
            patterns: [{
                match: /<!-- INSERT CSS BUNDLE -->/,
                replacement: `<link rel="stylesheet" href="${cssBundlePath}">`
            }]
        }))
        .pipe(gulp.dest(destinationFolder))
};