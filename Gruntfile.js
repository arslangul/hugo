module.exports = function(grunt) {
  grunt.initConfig({
    // ... 
    jenkins: {
      serverAddress: 'http://localhost:8080',
      username: 'arslan',                        // if only one of username and password 
      password: 'zigron123'                      // are provided, no authentication attempted 
    },
      jshint: {
          all: ['Gruntfile.js',  'Tests/Login/*.js']
      },
      testem: {
          options : {
              launch_in_ci : [
                  'firefox',
                  'safari',
                  'phantomjs'
              ],
              output: {
                  coverage : 'coverage-results/'
              },
              main : {
                  src: [ 'Tests/conf.js' ],
                  dest: 'tests.tap'
              }
          },

          clean: {
              build: ['Clean/build'],
              release: ['Clean/release']
          }


      }
  });
  grunt.loadNpmTasks('grunt-jenkins');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-testem');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'testem', 'clean']);
    grunt.registerTask('jenkins', ['jshint', 'testem', 'clean' ]);
  // ... 
};