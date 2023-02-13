const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = async ({ source, destinationFolder }) => {
	return gulp.src(source)
		.pipe(imagemin())
		.pipe(gulp.dest(destinationFolder))
};