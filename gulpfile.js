const gulp = require('gulp');
const tasks = require('./gulp/tasks/index');
const workflows = require('./gulp/workflows/index');

const templateData = {}

const pageBuilderTasks = workflows.pageBuilder(templateData);

const babelTask = () => tasks.babel({
    source: './dev/src/scripts/**/*.js',
    destinationFolder: './dist/src/scripts'
});

const imageCompressor = () => tasks.imgCompressor({
    source: './dev/src/res/images/**/*',
    destinationFolder: './dist/src/res/images'
})

/* Tasks */

gulp.task('serve', async () => {
    gulp.watch('./dev/src/scripts/**/*.js', { events: 'all' }, babelTask);
    gulp.watch('./dev/src/res/images/**/*', { events: 'all' }, babelTask);
    gulp.watch('./dev/**/*.html', { events: 'all' }, gulp.parallel(...pageBuilderTasks));
    gulp.watch('./dev/src/styles/**/*.css', { events: 'all' }, gulp.parallel(...pageBuilderTasks));
});

gulp.task('build', gulp.parallel(
    babelTask,
    imageCompressor,
    pageBuilderTasks
));
