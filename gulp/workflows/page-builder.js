const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const { cssBundler, cssInserter, nunjucksCompiler } = require('../tasks/index');

module.exports = (template_data) => {
    const taskSeries = [];

    const files = fs.readdirSync(path.join(__dirname, '..', '..', 'dev'));
    for (let templateFile of files) {
        const { name: templateName, ext: fileExtension } = path.parse(templateFile);
        if (fileExtension !== '.html') continue;

        const compiledTemplateSrc = `./dist/${templateFile}`;
        const cssBundleFile = `${templateName}.css`;

        taskSeries.push(gulp.series(
            () => nunjucksCompiler({
                source: `./dev/${templateFile}`,
                templateData: { ...(template_data[templateName] ?? {}) },
                destinationFolder: './dist',
            }),
            () => cssBundler({
                cssSource: './dev/src/styles/**/*.css',
                htmlSource: compiledTemplateSrc,
                destinationFolder: './dist/src/styles',
                cssOutputFileName: cssBundleFile
            }),
            () => cssInserter({
                templatePath: compiledTemplateSrc,
                cssBundlePath: `./src/styles/${cssBundleFile}`,
                destinationFolder: './dist'
            })
        ));
    }
    
    return taskSeries;
}