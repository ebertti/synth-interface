//===============================================================================================================
// Arquivo..........: Gruntfile.js
// Autor............: Bertti, E (EB)
// Ult. Atualização.: 16/02/2014
//
// Roteiro de testes para funcionameno do grunt e dos testes com o qunit
//
//
// Versão     Data     Autor  Comentários
// ==============================================================================================================
// 1.0.0.0  26/01/2014  EB  Criação dos testes.
//===============================================================================================================

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