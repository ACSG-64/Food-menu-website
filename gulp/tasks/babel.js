const gulp = require('gulp');
const babel = require('gulp-babel');

module.exports = async ({ source, destinationFolder }) => {
    return gulp.src(source)
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(gulp.dest(destinationFolder));
}