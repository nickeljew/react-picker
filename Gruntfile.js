"use strict";

const sass = require('node-sass')


var webpack_cfg = require('./webpack.config')
//var extend = require('util')._extend

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt)

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        tag: {
            banner: '/*!\n'
            + ' * <%= pkg.name %>\n'
            + ' * @version <%= pkg.version %>\n'
            + ' */\n',
        },
        sass: {
            options: {
                implementation: sass,
                style: 'expanded',
                compass: true,
                //sourcemap: 'none',
                //for grunt-sass
                sourceMap: false,
            },
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: './scss',
                        src: [ 'demo.scss' ],
                        dest: './examples',
                        ext: '.css',
                    },
                ],
            },
            dist: {
                files: [
                    { './css/picker.css': './scss/pack-picker.scss' },
                ],
            },
        },
        babel: {
            options: {
                //sourceMap: true
            }
            , dist: {
                files: [
                    {
                        expand: true
                        , cwd: './src'
                        , src: [ '**/*.jsx', '**/*.js' ]
                        , dest: './lib'
                        , ext: '.js'
                    }
                ]
            }
        }
        , watch: {
            css: {
                files: './scss/*.scss'
                , tasks: ['sass:dev']
            }
            , react: {
                files: ['./src/*.jsx', './src/*.js', './examples/*.jsx']
                , tasks: ['webpack:demo']
            }
        }
        , clean: {
            all: ["./examples/demo.js", "./examples/*.css", "./css/*.*", "./lib/*.*"]
        }
        , webpack: {
            demo: webpack_cfg
        }
    })

    // grunt.loadNpmTasks('grunt-contrib-watch')
    // grunt.loadNpmTasks('grunt-sass')
    // grunt.loadNpmTasks('grunt-contrib-clean')
    // grunt.loadNpmTasks('grunt-babel')
    // grunt.loadNpmTasks('grunt-webpack')


    grunt.registerTask('default', ['sass:dev', 'webpack:demo', 'babel'])
    grunt.registerTask('dev', ['sass:dev', 'webpack:demo', 'babel', 'watch'])
    grunt.registerTask('build', ['sass:dist', 'babel'])

    grunt.registerTask('wp', ['webpack:demo'])

}