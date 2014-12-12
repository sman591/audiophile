module.exports = function(grunt){
  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: './public',
          port: '4000',
          host: '*'
        }
      }
    },
    clean: {
      build: {
        src: ['public/javascripts', 'public/stylesheets']
      }
    },
    coffee: {
      compile: {
        options: {
          bare: true
        },
        files: [{
          expand: true,
          cwd: 'app/coffeescript',
          src: ['**/*.coffee', '**/*.js'],
          dest: 'public/javascripts',
          ext: '.js'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          bundleExec: true
        },
        files: [{
          expand: true,
          cwd: 'app/stylesheets',
          src: ['**/*.sass'],
          dest: 'public/stylesheets',
          ext: '.css'
        }]
      }
    },
    haml: {
      dist: {
        options: {
          bundleExec: true,
        },
        files: [{
          expand: true,
          cwd: 'app/views',
          src: ['**/*.haml'],
          dest: 'public',
          ext: '.html'
        }]
      }
    },
    watch: {
      coffee: {
        files: ['app/coffeescript/**/*.coffee'],
        tasks: ['coffee'],
        options: {
          livereload: true,
        }
      },
      styles: {
        files: ['app/stylesheets/**/*.sass'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },
      haml: {
        files: ['app/views/**/*.haml'],
        tasks: ['haml'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-haml2html');

  grunt.registerTask('build', ['clean', 'coffee', 'sass', 'haml']);
  grunt.registerTask('default', ['build', 'connect', 'watch']);
};
