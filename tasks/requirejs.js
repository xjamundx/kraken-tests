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
                shim: {
                    'react-global': {
                        deps: ['react']
                    },
                    'react-intl': {
                        deps: ['react-global'],
                        exports: 'ReactIntlMixin'
                    }
                },
                paths: {
                    '_languagepack': '../../.build/en-US/_languagepack',
                    'react': '../components/react/react',
                    'react-intl': '../components/react-intl/dist/react-intl'
                },
                modules: [{
                    name: 'app',
                    exclude: ['_languagepack']
                }]
            }
        }
	};
};
