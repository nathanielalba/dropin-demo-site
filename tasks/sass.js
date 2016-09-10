'use strict';

module.exports = function sass(grunt) {

  grunt.loadNpmTasks('grunt-sass');

  return {
    options: {
      outputStyle: 'compressed'
    },
    dist: {
      files: {
        'public/app.min.css': 'public/scss/app.scss'
      }
    }
  };
};
