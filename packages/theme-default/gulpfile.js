const { series, src, dest } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat')
const cssnano = require('gulp-cssnano')


function compile() {
  return src('./src/index.less')
    .pipe(less())
	.pipe(concat('jci-style.css'))
	.pipe(cssnano())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(dest('./lib'));
}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}

exports.build = series(compile);
