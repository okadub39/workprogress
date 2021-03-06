const gulp = require('gulp');
const gulpif = require('gulp-if');
const watch = require('gulp-watch');
const print = require('gulp-print');
const plumber = require('gulp-plumber');
const browserSync = require('./server')

// Style Compiler
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const inline_base64 = require('gulp-inline-base64');
const sourcemaps = require('gulp-sourcemaps');

const config = require('./config');
const utlis = require('./utils');

/****************************************************************
 ----------------------------------------------------------------

 sass

 ----------------------------------------------------------------
 ****************************************************************/

const sassSrc = utlis.resolveSrc('/scss/**/*.s[ac]ss');
let sassOutputStyle;

if(config.isProd){
  sassOutputStyle = 'compressed';
} else {
  sassOutputStyle = 'expanded';
}

const cssProcessors = [
  cssnext()
];

let distPath = '';

if (config.isProxyMode && config.settings.proxyAssetsPath) {
  distPath = config.settings.proxyAssetsPath + '/css';
} else {
  distPath = config.settings.distPath + '/' + config.settings.assetsDir + '/css';
}

function compileSass () {
  return gulp.src([sassSrc])
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err.message);
        this.emit('end');
      }
    }))
    .pipe(gulpif(!config.isProd, sourcemaps.init()))
    .pipe(sass({
      outputStyle: sassOutputStyle,
      ext        : '.css'
    }))
    .pipe(inline_base64({
      baseDir: config.settings.srcPath,
      maxSize: 14 * 1024,
      debug: false
    }))
    .pipe(postcss(cssProcessors))
    .pipe(gulpif(!config.isProd, sourcemaps.write()))
    .pipe(gulp.dest(distPath))
    .pipe(browserSync.stream())
    .pipe(print((filepath) => {
      return 'complete: ' + filepath;
    }));
}

gulp.task('sass', compileSass);
gulp.task('sass:watch', () => {
  compileSass();
  return watch([sassSrc], compileSass);
});
