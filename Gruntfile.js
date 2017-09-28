'use strict()';
const mozjpeg = require('imagemin-mozjpeg');
const imageminAdvpng = require('imagemin-advpng');
const imageminPngcrush = require('imagemin-pngcrush');

module.exports = function(grunt) {
	var jsCore= [
		'./src/static/lib/js/jquery-3.2.1.min.js',
		'./src/static/materialize-src/js/velocity.min.js',
		'./src/static/materialize-src/js/global.js',
		 './src/static/materialize-src/js/tabs.js',
		 ];
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
		    my_target: {
		      options: {
		        sourceMap: true
		      },
		      files: {
				'./public/js/scripts.min.js':[jsCore,
												'./src/static/custom/js/app.js'
										    ]
										                
		      }
		    }
		},
		sass: {
			options: {
	            sourceMap: true,
	            outputStyle:'compressed'
	        },
			dist: {
				files: {
					// './public/style/style-new.css': './src/static/sass/materialize-src/sass/materialize.scss',
					'./public/style/style-new.css': './src/static/custom/sass/app.scss',
				}
			}
		},
		imagemin: {
	        dynamic: {
	        	 options: {
	                optimizationLevel: 3,
	                svgoPlugins: [{removeViewBox: false}],
	                use: [
	                	mozjpeg({
	                		quality:30 
	                	}), 
	                	// imageminPngcrush({
	                	// 	reduce:true
	                	// }),
	                	// pngout({ 
	                	// 	strategy: 0 
	                	// }), 
	                	imageminAdvpng({
	                		optimizationLevel:4
	                	}), 	 	 
	                	] // Example plugin usage
	            },
	            files: [{
	                expand: true,
	                cwd: './public/images-dev/',
	                src: ['**/*.{png,jpg,gif}'],
	                dest: './public/images/'
	            }]
	        }
	    },
		watch: {
			images: {
				files: ['./public/images-dev/**/*.{png,jpg,gif}'],
				tasks: ['imagemin']
			},
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			scripts: {
				files: './src/static/custom/**/*.js',
				tasks: ['uglify']
			}
		}
	});
	// grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}

