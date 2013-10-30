/*
 * grunt-json-to-properties
 * https://github.com/stregub/grunt-json-to-properties
 *
 * Copyright (c) 2013 ButuzGOL
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash'),
    properties = require('properties');

_.mixin(require('underscore.deep'));

module.exports = function(grunt) {

  grunt.registerMultiTask('json_to_properties', 'Converts json to properties', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      });

      var result = [];

      if (src.length) {
        src.forEach(function(content) {
          result.push(properties.stringify(_.deepToFlat(JSON.parse(content))));
        });
      }

      // Write the destination file.
      grunt.file.write(f.dest, result.join('\n'));

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" modified.');
    });
  });

};
