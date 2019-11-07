var pathToRegexp = require('path-to-regexp')

var re = pathToRegexp('/foo/:bar')
// console.log(re);  

/**
 * { /^\/foo\/((?:[^\/]+?))(?:\/(?=$))?$/i
  keys:
   [ { name: 'bar',
       prefix: '/',
       delimiter: '/',
       optional: false,
       repeat: false,
       partial: false,
       asterisk: false,
       pattern: '[^\\/]+?' } ] }
 */



console.log(pathToRegexp.parse('/foo/:bar'));
/**
 * [ '/foo',
  { name: 'bar',
    prefix: '/',
    delimiter: '/',
    optional: false,
    repeat: false,
    partial: false,
    asterisk: false,
    pattern: '[^\\/]+?' } ]
 */
