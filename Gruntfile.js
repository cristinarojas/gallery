module.exports = function(grunt) {
  // Loading npm tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    // Sass compilation
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: {
          'public/css/style.css'                : 'sass/style.scss',
          'public/css/mediaqueries/general.css' : 'sass/mediaqueries/generalmedia.scss',
        }
      }
    },
    // Watch for sass files changes
    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // Registering default task (execute as 'grunt')
  grunt.registerTask('default', ['sass']);
};
