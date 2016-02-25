// var gulp        = require('gulp')
// var critical    = require('critical')
// var path        = require('path')
// var config      = require('../config')
// var manifest    = require('../../public/rev-manifest.json')

// var criticalTask = function (cb) {
//     critical.generate({
//         inline: true,
//         minify: true,
//         base: config.root.dest,
//         src: 'index.html',
//         dest: path.join(config.root.dest, 'index.html'),
//         css: [path.join(config.root.dest, manifest['stylesheets/global.css'])],
//         width: 1300,
//         height: 900
//     });
// }

// gulp.task('critical', criticalTask)
// module.exports = criticalTask