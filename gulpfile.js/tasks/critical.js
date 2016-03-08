var gulp        = require('gulp')
var critical    = require('critical').stream
var path        = require('path')
var config      = require('../config')
// var manifest    = require('../../public/rev-manifest.json')

var criticalTask = function (cb) {
  return gulp.src(path.join(config.root.dest, '*.html'))
    .pipe(critical({
          inline: true,
          minify: true,
          base: config.root.dest,
          css: [path.join(config.root.dest, manifest['stylesheets/global.css'])],
          width: 1300,
          height: 900
    }))
    .pipe(gulp.dest(config.root.dest));
}

gulp.task('critical', criticalTask)
module.exports = criticalTask
