'use strict';

module.exports = function browserify(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-browserify');

	// Options
	return {
		build: {
            src: './public/main.js',
            dest: './public/bundle.js',
            options: {
                transform: [ [ 'babelify', { presets: [ 'stage-0', 'react', 'es2015' ] }],'reactify', 'require-globify' ]
            }
            //,
			//files: {
			//	'.build/js/app.js': ['public/js/app.js'],
			//},
			//options: {}
		}
	};
};
