//This file dosent transpile so must use commonjs and ES5.

//register babel to transpile before test run.

require('babel-register')();

// disable webpack features that mocha dosent understand
require.extensions['.css'] = function() {};
