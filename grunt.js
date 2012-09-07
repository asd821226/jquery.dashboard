module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ['js/jquery.dashboard.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    min: {
      dist: {
        src: ['js/jquery.dashboard.js'],
        dest: 'js/jquery.dashboard.min.js'
      }
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