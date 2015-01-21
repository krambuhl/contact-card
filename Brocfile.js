var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var compileSass = require('broccoli-sass');
var autoprefixer = require('broccoli-autoprefixer');
var es6transpiler = require('broccoli-es6-transpiler');
var imagemin = require('broccoli-imagemin');
var browserify = require('broccoli-browserify');


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

var es5ified = es6transpiler('source/scripts');

var scripts = browserify(es5ified, {
  entries: ['./main.js'],
  outputFile: 'assets/bundle.js',
  debug: true
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