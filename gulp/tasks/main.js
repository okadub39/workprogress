const gulp = require('gulp');
const runSequence = require('run-sequence');

/****************************************************************
 ----------------------------------------------------------------

 Main Tasks

 ----------------------------------------------------------------
 ****************************************************************/

/**
 * Build
 */
gulp.task('build', (cb) => {
  return runSequence(
    'clean',
    ['ejs', 'sass', 'img', 'copy', 'webpack'],
    'transfer',
    cb
  )
});

/**
 * Start with proxy server
 */
gulp.task('proxy', (cb) => {
  return runSequence(
    // 'clean',
    ['ejs:watch', 'sass:watch', 'img:watch', 'copy:watch', 'webpack', 'server:proxy'],
    cb
  )
});

/**
 * Start
 */
gulp.task('default', (cb) => {
  return runSequence(
    // 'clean',
    ['ejs:watch', 'sass:watch', 'img:watch', 'copy:watch', 'webpack', 'server'],
    cb
  )
});
