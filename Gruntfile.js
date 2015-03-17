'use strict';


module.exports = function (grunt) {

    // Require-Bundle (Requiring babel first, then requirejs)
    grunt.registerTask('require-bundle', ['babel', 'requirejs']);

    grunt.loadNpmTasks('grunt-makara-amdify');

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    // Register group tasks
    grunt.registerTask('build', [ 'jshint', 'less', 'require-bundle', 'i18n', 'copyto' ]);
    grunt.registerTask('test', [ 'jshint', 'mochacli' ]);

};
