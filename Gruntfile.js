module.exports = function(grunt) {
  grunt.initConfig({
    // ... 
    jenkins: {
      serverAddress: 'http://localhost:8080',
      username: 'arslan',                        // if only one of username and password 
      password: 'zigron123'                      // are provided, no authentication attempted 
    }
  });
  grunt.loadNpmTasks('grunt-jenkins');
  // ... 
};