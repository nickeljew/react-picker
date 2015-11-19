"use strict";

var webpack_cfg = require('./webpack.config')
//var extend = require('util')._extend

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        , tag: {
            banner: '/*!\n'
            + ' * <%= pkg.name %>\n'
            + ' * @version <%= pkg.version %>\n'
            + ' */\n'
        }
        , sass: {
            dev: {
                options: {
                    style: 'expanded'
                    , sourcemap: 'none'
                    , compass: true
                }
                , files: [
                    {
                        expand: true
                        , cwd: './scss'
                        , src: [ 'demo.scss' ]
                        , dest: './examples'
                        , ext: '.css'
                    }
                ]
            }
            , dist: {
                options: {
                    style: 'compressed'
                    , sourcemap: 'none'
                    , compass: true
                }
                , files: [
                    {
                        expand: true
                        , cwd: './scss'
                        , src: [ 'demo.scss' ]
                        , dest: './examples'
                        , ext: '.css'
                    }
                ]
            }
        }
        , uglify: {
            common: {
                options: {
                    banner: '<%= tag.banner %>'
                    , mangle : {
                        except : ['require', 'exports', 'module', 'React']
                    }
                    //, sourceMap: true
                }
                , files: [
                    {
                        expand: true
                        , cwd: './lib'
                        , src: [ './lib/picker.js' ]
                        , dest: './lib/'
                        , ext: '.min.js'
                    }
                ]
            }
        }
        , babel: {
            options: {
                comments: false
                //, modules: 'amd'
                , moduleIds: true
                , getModuleId: function(moduleName) {
                    if (moduleName.match(/\/picker$/)) {
                        return 'react-picker'
                    }
                    else if (moduleName.match(/\/test/i)) {
                        return 'main'
                    }
                    return false
                }
                //, sourceMaps: true
                //, code: false
            }
            , dist: {
                files: {
                    "./lib/picker.js": "./src/picker.jsx"
                }
            }
        }
        , watch: {
            css: {
                files: './scss/*.scss'
                , tasks: ['sass:dev']
            }
            , react: {
                files: ['./src/*.jsx', './examples/*.jsx']
                , tasks: ['webpack:demo']
            }
            //, jsx: {
            //    files: ['./src/*.jsx']
            //    , tasks: ["webpack:demo"]
            //    , options: {
            //        spawn: false
            //    }
            //}
        }
        , clean: {
            all: ["./examples/demo.js", "./examples/*.css.*"]
        }
        , webpack: {
            demo: webpack_cfg
        }
    })

    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-webpack')


    grunt.registerTask('default', ['sass:dev', 'webpack:demo', 'babel'])
    grunt.registerTask('dev', ['sass:dev', 'webpack:demo', 'watch'])
    grunt.registerTask('build', ['babel'])

    grunt.registerTask('clean', ['clean:all'])

    grunt.registerTask('wp', ['webpack:demo'])

}