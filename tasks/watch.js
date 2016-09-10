'use strict';

module.exports = function watch(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');

  return {
    options: {
      livereload: true,
    },
    jsx: {
      files: ['public/**/*.jsx'],
      tasks: ['jshint'],
    },
    sass: {
      files: ['public/scss/**/*.scss'],
      tasks: ['sass'],
    },
  }
}
