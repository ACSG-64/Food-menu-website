const { join } = require('path');
const gulp = require('gulp');
const tasks = require('./gulp/tasks/index');
const workflows = require('./gulp/workflows/index');

const pageBuilderTasks = workflows.pageBuilder(join(__dirname, 'template-data.json'));

const babelTask = () => tasks.babel({
    source: './dev/src/scripts/**/*.js',
    destinationFolder: './dist/src/scripts'
});

const imageCompressor = () => tasks.imgCompressor({
    source: './dev/src/res/images/**/*',
    destinationFolder: './dist/src/res/images'
});

/* Tasks */
gulp.task('build', gulp.parallel(
    babelTask,
    imageCompressor,
    pageBuilderTasks
));

gulp.task('serve', async () => {
    gulp.watch('./dev/src/scripts/**/*.js', { events: 'all' }, babelTask);
    gulp.watch('./dev/src/res/images/**/*', { events: 'all' }, babelTask);
    gulp.watch('./dev/**/*.html', { events: 'all' }, gulp.parallel(...pageBuilderTasks));
    gulp.watch('./template-data.json', { events: 'all' }, gulp.parallel(...pageBuilderTasks));
    gulp.watch('./dev/src/styles/**/*.css', { events: 'all' }, gulp.parallel(...pageBuilderTasks));
});
