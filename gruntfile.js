'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['style.css', 'style.min.css'],
					dest: 'src/css',
					ext: '.min.css'
				}]
			}
		},

		responsive_images: {
			dev: {
				options: {
					engine: 'gm',
					sizes: [{
						width: 700
					},{
						width: 150
					}]
				},
				files: [{
					expand: true,
					src: ['pizzeria.jpg'],
					cwd: 'src/img/',
					dest: 'dist/img/resized/'
				}]
			}
		},

		imagemin: {
			static: {
				files: {
					'dist/img/2048.png': 'src/img/2048.png',
					'dist/img/cam_be_like.jpg': 'src/img/cam_be_like.jpg',
					'dist/img/mobilewebdev.jpg': 'src/img/mobilewebdev.jpg',
					'dist/img/pizza.png': 'src/img/pizza.png',
					'dist/img/pizzeria-700m.jpg': 'dist/img/resized/pizzeria-700.jpg',
					'dist/img/pizzeria-150m.jpg': 'dist/img/resized/pizzeria-150.jpg',
					'dist/img/profilepic.jpg': 'src/img/profilepic.jpg'
				}
			}
		},

		uglify: {
			js: {
				src: 'src/js/perfmatters.js',
				dest: 'dist/js/perfmatters.js'
				}
		},

		critical: {
			dist: {
				options: {
					base: 'src/'
				},
				src: 'src/index.html',
				dest: 'dist/index.html'
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
			files: {
				'dist/index.html': ['<%= critical.dist.dest %>']
				}
			}
		}
	});

	// Load the plugins that provide the tasks.
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-critical');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// Default task(s).
	grunt.registerTask('default', ['responsive_images', 'imagemin', 'uglify', 'critical', 'htmlmin', 'cssmin']);
};