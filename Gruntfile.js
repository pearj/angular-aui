module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            src: 'src'
        },
        bower: {
            install: {
                options: {
                    targetDir: 'bower_components'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: '.',
                    keepalive: false
                }
            }
        },
        concat: {
            options: {
              separator: ';',
              stripBanners: true,
              banner: 
                '/*! \n' + 
                '* <%= pkg.name %>\n' + 
                '* Version - <%= pkg.version %>\n' + 
                '* Built - <%= grunt.template.today("yyyy-mm-dd") %>\n' + 
                '* Author - <%= pkg.author %>\n' + 
                '* url - <%= pkg.repository.url %>\n' + 
                '*/\n',
            },
            dist: {
              src: ['src/angular-aui.js', 'src/**.js'],
              dest: 'dist/angular-aui.js',
            },
          },
        watch: {
            concat: {
                files: '<%= project.src %>/*.js',
                tasks: ['concat']
            }
        },
        release: {
            bumpVersion: {
                bump: true,
                commit: false,
                tag: false,
                push: false,
                pushTags: false,
                npm: false,
                npmtag: false
            },
            commit: {
                bump: false,
                npm: false,
                npmtag: false,
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-release');

    grunt.registerTask('install', ['bower:install'])
    grunt.registerTask('default', ['connect', 'watch']);
    
    grunt.registerTask('releasePatch', ['release:bumpVersion', 'concat', 'release:commit'])
    grunt.registerTask('releaseMinor', ['release:bumpVersion', 'concat', 'release:commit'])
    grunt.registerTask('releaseMajor', ['release:bumpVersion', 'concat', 'release:commit'])
};