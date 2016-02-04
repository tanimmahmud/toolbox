module.exports = function(grunt) {
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    // Compile SASS
    sass: {
      dist: {
        files: {
          'stylesheets/dist/build.css': 'stylesheets/src/main.scss',
          'stylesheets/dist/ie8.css': 'stylesheets/src/ie8.scss',
          'stylesheets/dist/noscript.css': 'stylesheets/src/noscript.scss'
        },
        options: {
          style: 'compressed',
          sourcemap: 'none'
        }
      }
    },
    // Concatinate JavaScript files
    concat: {
      options: {
        separator: ';\n'
      },
      dist: {
        src: [
          'javascripts/src/jquery-1.11.3.min.js',
          'javascripts/src/main.js'
        ],
        dest: 'javascripts/dist/build.js'
      }
    },
    // Minify JavaScript build file
    uglify: {
      dist: {
        files: {
          '<%= concat.dist.dest %>': '<%= concat.dist.dest %>'
        }
      }
    },
    // Monitor directories for changes
    watch: {
      css: {
        files: 'stylesheets/src/*.scss',
        tasks: 'sass'
      },
      scripts: {
        files: 'javascripts/src/*.js',
        tasks: ['concat', 'uglify']
      }
    }
  });
  // Tell Grunt which tasks to run
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);
};
