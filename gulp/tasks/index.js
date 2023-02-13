const babel = require('./babel');
const cssBundler = require('./css-bundler');
const cssInserter = require('./css-inserter');
const imgCompressor = require('./img-compressor');
const nunjucksCompiler = require('./nunjucks-compiler');

module.exports = {
    babel,
    cssBundler,
    cssInserter,
    imgCompressor,
    nunjucksCompiler
}