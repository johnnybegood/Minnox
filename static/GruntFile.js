module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      default: {
        options: {
          cleancss: true
        },
        files: {
          "css/<%= pkg.name %>.min.css": ["css/<%= pkg.name %>.less"]
        }
      }
    },

    svgmin: {                                            // Task
        options: {                                        // Configuration that will be passed directly to SVGO
            plugins: [{
                removeViewBox: false
            }]
        },
        dist: {                                            // Target
            files: [{                // Dictionary of files
                expand: true,        // Enable dynamic expansion.
                cwd: 'img/',        // Src matches are relative to this path.
                src: ['*.svg'],    // Actual pattern(s) to match.
                dest: 'img/',        // Destination path prefix.
                ext: '.min.svg'        // Dest filepaths will have this extension.
            }]
        }
    },

    jshint: {
      files: ['Gruntfile.js', 'js/src/**/*.js', '!js/ext/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    wiredep: {
      target: {
        src: [
          'index.html'   
        ],

        // Optional:
        // ---------
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    },

    connect: {
      server: {
        options: {
          port: 9999,
          open: true,
        }
      },
    },

    watch: {
      src: {
        files: ['js/**/*.js', 'css/*.less', '*.html', 'Gruntfile.js'],
        tasks: ['default'],
        options: { livereload: true}
      },  
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-wiredep');

  // Default task(s).
  grunt.registerTask('default', ['svgmin', 'less', 'jshint', 'wiredep']);

  // Watch task(s)
  grunt.registerTask("reload", ["default", "watch"]);

  // Host task(s)
  grunt.registerTask("host", ["default", "connect", "reload"]);

};