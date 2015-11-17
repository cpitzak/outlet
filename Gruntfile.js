module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'public/js/**/*.js', 'lib/**/*.js',
              'routes/**/*.js'],
      options: {
        node: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
};
