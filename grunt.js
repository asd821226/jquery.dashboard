module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ['jquery.dashboard.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib');

  // Default task.
  grunt.registerTask('default', 'lint');

};