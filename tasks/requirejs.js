'use strict';


module.exports = function requirejs(grunt) {

	// Load task
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	// Options
	return {
        build: {
            options: {
                baseUrl: 'public/js',
                dir: '.build/js',
                optimize: 'uglify',
                paths: {
                    react: '../components/react/react',
                    'react-intl': '../components/react-intl/dist/react-intl'
                },
                modules: [
                    { name: 'app' }
                ]
            }
        }
	};
};
