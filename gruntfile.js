module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-grunticon');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    grunticon: {
      generate: {
        files: [{
          expand: true,
          cwd: 'source/svg',
          src: ['*.svg', '*.png'],
          dest: 'source/sass/grunticon'
        }],
        options: {
          datasvgcss: '_icons.scss'
        }
      }
    }
  });
};