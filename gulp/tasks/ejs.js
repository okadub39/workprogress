const gulp = require('gulp');
const gulpif = require('gulp-if');
const watch = require('gulp-watch');
const print = require('gulp-print');
const plumber = require('gulp-plumber');
const browserSync = require('./server')

const ejs = require('gulp-ejs');
const htmlmin = require('gulp-htmlmin');

const config = require('./config');
const utlis = require('./utils');

/****************************************************************
 ----------------------------------------------------------------

 ejs

 ----------------------------------------------------------------
 ****************************************************************/

const ejsSrc = utlis.resolveSrc('/ejs/**/*.ejs');
const routerSrc = utlis.resolveSrc('/router/**/*.json');
const excludeEjsSrc =  '!' + utlis.resolveSrc('/ejs/**/_*.ejs');

function compileEjs () {
  return gulp.src([ejsSrc, excludeEjsSrc])
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err.message);
        this.emit('end');
      }
    }))
    .pipe(ejs({
      ENV: config.settings.env
    }, {}, {"ext": ".html"}))
    .pipe(gulpif(config.isProd, htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(config.settings.distPath))
    .pipe(browserSync.stream())
    .pipe(print((filepath) => {
      return 'complete: ' + filepath;
    }));
}

gulp.task('ejs', compileEjs);
gulp.task('ejs:watch', () => {
  compileEjs();
  return watch([routerSrc, ejsSrc], compileEjs);
});
