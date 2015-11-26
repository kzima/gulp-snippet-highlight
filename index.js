'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var hljs = require('highlight.js');

module.exports = function (options) {
  var highlight = function (str, options) {
    var lang = options.language || 'html';
    hljs.configure(options.configure);
    return hljs.highlight(lang, str).value;
  };
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-highlight', 'Streaming not supported'));
      return cb();
    }

    try {
      file.contents = new Buffer(highlight(file.contents.toString(), options), options.buffer);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-highlight', err));
    }

    this.push(file);
    cb();
  });
};
