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
      files: ['Gruntfile.js', 'js/**/*.js', '!js/templates.js', '!js/ext/*.js'],
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
          open: false,
        }
      },
    },

    watch: {
      src: {
        files: ['js/**/*.js', 'css/*.less', '*.html', 'Gruntfile.js', '!js/templates.js', 'js/templates/*.hbs', '!_SpecRunner.html', '!.grunt/'],
        tasks: ['test'],
        options: { livereload: true}
      },  
    },

    handlebars: {
      compile: {
        options: {
          amd: true
        },
        files: {
          "js/templates.js": "js/templates/*.hbs",
        }
      }
    },

    jasmine: {
        minnox: {
          src: 'js/**/*.js',
          options: {
            specs: 'spec/*Spec.js',
            helpers: 'spec/*Helper.js',
            template: require('grunt-template-jasmine-requirejs'),
            templateOptions: {
              requireConfigFile: 'js/main.js',
              requireConfig: {
                paths: {
                  squire: '../bower_components/squire/src/Squire'
                }
              }
            }
          }
        }
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
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-jasmine');


  // Default task(s).
  grunt.registerTask('default', ['svgmin', 'less', 'jshint', 'handlebars']);

  // Testing task(s)
  grunt.registerTask('test', ['default', 'jasmine']);

  // Testing task(s)
  grunt.registerTask('build', ['default', 'jasmine:minnox:build']);

  // Host task(s)
  grunt.registerTask("host", ["connect", "test", "watch"]);
};