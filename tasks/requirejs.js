'use strict';

module.exports = function requirejs(grunt) {

	// Load task
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	// Options
	return {
        build: {
            options: {
                dir: '.build/app',
                baseUrl: 'public/js',
                optimize: 'none',
                paths: {
                    '_languagepack': '../../.build/en-US/_languagepack',
                    'react': '../components/react/react',
                    'react-intl': 'lib/react-intl.amd'
                },
                modules: [{
                    name: 'app',
                    exclude: ['_languagepack']
                }]
            }
        }
	};
};
