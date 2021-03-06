const minimist = require('minimist');

/****************************************************************
 ----------------------------------------------------------------

 config

 ----------------------------------------------------------------
 ****************************************************************/

const envSettings = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'local'
  }
};

const options = minimist(process.argv.slice(2), envSettings);
// Config
exports.settings = require('../config').getConfig(options.env);

// set NODE_ENV
process.env.NODE_ENV = options.env;

exports.isProd = exports.settings.env === 'production';
exports.isDev = exports.settings.env === 'development';
exports.isStg = exports.settings.env === 'staging';
exports.isLocal = exports.settings.env === 'local';

exports.isProxyMode = options.proxy ? true : false;
