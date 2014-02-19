/*
 * synth-interface
 * http://github.com/ebertti/synth-interface/
 *
 * Copyright (c) 2014 Ezequiel Bertti
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['test.html']
        }
    });

    // Task to run tests
    grunt.registerTask('default', 'qunit');

    grunt.loadNpmTasks('grunt-contrib-qunit');
};