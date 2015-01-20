var mergeTrees = require('broccoli-merge-trees');
var watchify = require('broccoli-watchify');
var pickFiles = require('broccoli-static-compiler');
var compileSass = require('broccoli-sass');
var autoprefixer = require('broccoli-autoprefixer');
var imagemin = require('broccoli-imagemin');


/*
  HTML
*/

var html = pickFiles('source', {
  srcDir: 'html',
  destDir: './'
});

/*
  Images
*/

var images = pickFiles('source', {
  srcDir: 'images',
  destDir: 'assets/images'
});

var minImg = imagemin(images);

/*
  Javascript
*/

var scripts = watchify('source/scripts', {
  browserify: {
    entries: ['./main.js'],
    debug: true
  },
  outputFile: 'assets/bundle.js'
});

/*
  CSS
*/

var sass = compileSass(['source/sass'], 'style.scss', 'assets/style.css');
var autopref = autoprefixer(sass, {
  sourcemap: true,
  browsers: ['> 1%', 'last 2 versions', 'Chrome 5', 'Firefox 6']
});


module.exports = mergeTrees([html, scripts, autopref, minImg]);