const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');
const purgeCss = require('gulp-purgecss');

module.exports = ({ cssSource, htmlSource, destinationFolder, cssOutputFileName }) => {
    return gulp.src(cssSource)
        .pipe(purgeCss({ content: [htmlSource] }))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 2 versions'],
        }))
        .pipe(concatCss(cssOutputFileName))
        .pipe(gulp.dest(destinationFolder))
}